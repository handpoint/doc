---
title: Transaction Recovery — Cordova SDK
sidebar_position: 2
description: How to implement robust transaction recovery in the Handpoint Cordova SDK using transactionReference.
---

# Transaction Recovery — Cordova SDK

In the Cordova SDK, all device events — including transaction results — are delivered through a single `eventHandler` callback. If the connection between your app and the device is interrupted after the card is tapped but before the `endOfTransaction` event arrives, the result may not reach your application.

The `transactionReference` exposed via the `transactionStarted` event can be used at any later point to query the transaction outcome.

:::info Applicable operations
This recovery pattern applies to operations where a card is physically read and an acquirer authorization may have occurred: **Sale**, **Refund (on-device)**, **MOTO Sale (on-device)**, **MOTO Refund (on-device)**, and **Pre-Auth**.

It does **not** apply to: reversals, tip adjustment, pre-auth capture, or pre-auth increase. If a result is lost for those operations, it is safe to retry them — no card is charged on your behalf without an explicit authorization.
:::

## How results are normally delivered

All device-originated events come through `handpoint.eventHandler()`. The `transactionStarted` event fires as soon as the device accepts the operation and includes the `transactionReference`. The `endOfTransaction` event fires when the payment completes.

## finStatus values

| `finStatus` | Meaning | What to do |
|---|---|---|
| `IN_PROGRESS` | Transaction still processing on device or host | Keep polling |
| `UNDEFINED` | Result received but status could not be resolved | Keep polling |
| `AUTHORISED` | Approved — card charged | **Final.** Do not retry. |
| `DECLINED` | Declined by issuer | **Final.** Card not charged. Safe to retry. |
| `PROCESSED` | Completed (tokenization, MOTO) | **Final.** Do not retry. |
| `FAILED` | Technical failure | **Final.** Card not charged. Safe to retry. |
| `CANCELLED` | Cancelled by cardholder or merchant | **Final.** Card not charged. Safe to retry. |
| `PARTIALLY_APPROVED` | Partial amount approved *(US only)* | **Final.** Wait 60 s before acting — see note below. |
| `REFUNDED` | Refund processed | **Final.** Do not retry. |
| `CAPTURED` | Pre-authorisation captured | **Final.** Do not retry. |

## Recovery flow

The recommended pattern has two layers: a **UI timeout** that unblocks the clerk immediately, and **background polling** that resolves the outcome and auto-reverses if needed.

```
T+0s    transactionStarted fires — transactionReference persisted to DB
T+Ns    ISV UI timeout fires (your choice — e.g. 90 s with no card interaction)
         └─ Display FAILED to clerk so the POS is not blocked
         └─ Mark DB record as pending/unresolved
         └─ Continue polling in the background

Background polling (every 10 s via getTransactionStatus):
  IN_PROGRESS or UNDEFINED  → keep polling
  AUTHORISED found           → send automatic reversal via Cloud API (no reader needed)
                               update DB to REVERSED
  Any other final finStatus  → clear pending record — card was not charged
```

## Implementation

### Step 1 — Register the event handler and capture `transactionReference`

Register your event handler before starting any transaction.

```javascript
let pendingRef = null
let uiTimedOut = false
let resultTimeout = null

handpoint.eventHandler(
  function (event) {
    switch (event.event) {
      case 'transactionStarted':
        pendingRef = event.transactionReference
        db.savePendingTransaction(pendingRef)
        break

      case 'endOfTransaction':
        if (uiTimedOut) break // background recovery is handling this now

        clearTimeout(resultTimeout)
        resultTimeout = null

        if (event.transactionResult.finStatus === 'UNDEFINED') {
          // Treat UNDEFINED identically to a timeout
          showFailedToClerk()
          db.markPending(pendingRef)
          startBackgroundRecovery(pendingRef)
        } else {
          handleFinalResult(event.transactionResult)
        }

        pendingRef = null
        uiTimedOut = false
        break

      case 'currentTransactionStatus':
        updateStatusUI(event.statusMessage)
        break
    }
  },
  function (error) { console.error('Event handler error:', error) }
)
```

### Step 2 — Start a sale with a UI timeout

```javascript
function startSale(amount, currency) {
  handpoint.sale(
    { amount, currency },
    function () {
      // Sale accepted by device — start UI timeout clock
      uiTimedOut = false
      resultTimeout = setTimeout(function () {
        if (!pendingRef) return
        uiTimedOut = true
        showFailedToClerk() // unblock clerk immediately
        db.markPending(pendingRef)
        startBackgroundRecovery(pendingRef)
        pendingRef = null
      }, UI_TIMEOUT_MS) // your defined threshold
    },
    function (error) { console.error('Sale error:', error) }
  )
}
```

### Step 3 — Poll in the background

```javascript
function startBackgroundRecovery(ref) {
  var POLL_INTERVAL_MS = 10_000
  var RESULT_WAIT_MS   = 60_000

  function poll() {
    handpoint.getTransactionStatus(
      { transactionReference: ref },
      function (result) {
        if (result.finStatus === 'IN_PROGRESS' || result.finStatus === 'UNDEFINED') {
          setTimeout(poll, POLL_INTERVAL_MS)
          return
        }

        // Final status — wait 60 s in case endOfTransaction arrives naturally
        setTimeout(function () {
          if (result.finStatus === 'AUTHORISED') {
            // Card was charged but POS already showed FAILED — reverse automatically
            sendReversal(result.transactionID)
            db.markReversed(ref)
          } else {
            // Not charged — clear pending record
            db.clearPending(ref)
          }
        }, RESULT_WAIT_MS)
      },
      function () {
        // Network error — retry
        setTimeout(poll, POLL_INTERVAL_MS)
      }
    )
  }

  setTimeout(poll, POLL_INTERVAL_MS)
}

function sendReversal(originalTransactionID) {
  fetch('https://cloud.handpoint.com/transactions', {
    method: 'POST',
    headers: {
      Authentication: 'YOUR_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operation: 'saleReversal',
      originalTransactionID: originalTransactionID,
      terminal_type: 'PAXA920',    // terminal type of the original transaction
      serial_number: '0821599465', // serial number of the original terminal
      transactionReference: generateUUID(),
    }),
  })
}
```

### Step 4 — Surface a cancel option to clerks

If the spinner is still running and the clerk needs to act, expose `stopCurrentTransaction`. If it fails, the transaction is still being processed by the device or host.

```javascript
cancelButton.onclick = function () {
  handpoint.stopCurrentTransaction(
    function () { /* cancel accepted */ },
    function () {
      showMessage('Transaction cannot be cancelled — it is still being processed.')
    }
  )
}
```

## Recovering on app restart

If the app restarts before `endOfTransaction` arrived, query any saved pending reference on startup:

```javascript
var savedRef = db.getPendingTransaction()
if (savedRef) {
  startBackgroundRecovery(savedRef)
}
```

:::note Partial approvals (US only)
If `finStatus` is `PARTIALLY_APPROVED`, the device may be showing an accept/decline prompt to the cardholder with approximately a 30-second timeout. The 60-second wait built into the background recovery above covers this window. Do not act on a partial approval result immediately — always allow the full wait period to elapse.
:::
