---
title: Transaction Recovery — Cordova SDK
sidebar_position: 2
description: How to implement robust transaction recovery in the Handpoint Cordova SDK using transactionReference.
---

# Transaction Recovery — Cordova SDK

In the Cordova SDK, all device events — including transaction results — are delivered through a single `eventHandler` callback. If the connection between your app and the device is interrupted after the card is tapped but before the `endOfTransaction` event arrives, the result may not reach your application.

The `transactionReference` — a UUID v4 you generate and pass in the sale options — can be used at any later point to query the transaction outcome, both through the SDK's `getTransactionStatus` method and directly via the Handpoint Cloud REST API.

:::info Applicable operations
This recovery pattern applies to operations where a card is physically read and an acquirer authorization may have occurred: **Sale**, **Refund (on-device)**, **MOTO Sale (on-device)**, **MOTO Refund (on-device)**, and **Pre-Auth**.

It does **not** apply to: reversals, tip adjustment, pre-auth capture, or pre-auth increase. If a result is lost for those operations, it is safe to retry them — no card is charged on your behalf without an explicit authorization.
:::

---

## When recovery is needed

Recovery is required whenever your application might have missed the transaction outcome. Specific scenarios include:

| Scenario | Why recovery is needed |
|---|---|
| **Connection dropped mid-sale** | The device processes the card autonomously. Even if your app loses the Bluetooth/network connection, the terminal may complete the authorization with the acquirer. You must query the outcome rather than assume the transaction failed. |
| **App crash or process kill** | If the app crashes between the card tap and `endOfTransaction`, the result is never received. On restart, query any pending `transactionReference` saved to durable storage. |
| **`finStatus: UNDEFINED` received** | The SDK received a response from the terminal but could not resolve the final status. **Do not accept and do not reverse** — query the status API first. |
| **No callback / UI timeout reached** | The UI timeout you set fires before `endOfTransaction` arrives. Treat the sale as unresolved and poll in the background until a final status is confirmed. |
| **Mobile wallet "See Phone"** | Apple Pay / Google Pay requires the cardholder to verify on their device. This can take up to 120 seconds. Do not treat a UI timeout as a non-charge during this window. |

---

## How results are normally delivered

All device-originated events come through `handpoint.eventHandler()`. The `transactionStarted` event fires as soon as the device accepts the operation and echoes back the `transactionReference` you passed. The `endOfTransaction` event fires when the payment completes.

---

## finStatus values

| `finStatus` | Meaning | What to do |
|---|---|---|
| `IN_PROGRESS` | Transaction still processing on device or host | Keep polling |
| `UNDEFINED` | Result received but status could not be resolved | **Do not act.** Query status API — see [UNDEFINED handling](#undefined-finstatus--critical-behavior) |
| `AUTHORISED` | Approved — card charged | **Final.** Do not retry. |
| `DECLINED` | Declined by issuer | **Final.** Card not charged. Safe to retry. |
| `PROCESSED` | Completed (tokenization, MOTO) | **Final.** Do not retry. |
| `FAILED` | Technical failure | **Final.** Card not charged. Safe to retry. |
| `CANCELLED` | Cancelled by cardholder or merchant | **Final.** Card not charged. Safe to retry. |
| `PARTIAL_APPROVAL` | Partial amount approved *(US only)* | **Final.** Wait 60 s before acting — see note below. |
| `REFUNDED` | Refund processed | **Final.** Do not retry. |
| `CAPTURED` | Pre-authorisation captured | **Final.** Do not retry. |

---

## Recovery flow

The recommended pattern has two layers: a **UI timeout** that unblocks the clerk immediately, and **background polling** that resolves the outcome and auto-reverses if needed.

```
T+0s    Sale initiated — transactionReference pre-generated and persisted to DB
T+0s    transactionStarted fires — confirms device accepted the operation
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

---

## Implementation

### Step 0 — Pre-generate and persist `transactionReference`

Generate the UUID **before** initiating the transaction and write it to durable storage. If your app crashes immediately after calling `handpoint.sale()` but before `transactionStarted` fires, you can still recover because the reference was persisted first.

```javascript
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}
```

Use a UUID v4. Generate a **new** UUID for every transaction — including retries. Reusing a UUID from a previous attempt can cause the gateway to treat the retry as the same operation.

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
        // Device confirmed the operation — reference echoed back for verification
        pendingRef = event.transactionReference
        break

      case 'endOfTransaction':
        if (uiTimedOut) break // background recovery is handling this now

        clearTimeout(resultTimeout)
        resultTimeout = null

        if (event.transactionResult.finStatus === 'UNDEFINED') {
          // Treat UNDEFINED identically to a timeout — do not accept or reverse yet
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

Pass the pre-generated `transactionReference` in the sale options so the device and gateway can link all subsequent operations.

```javascript
var UI_TIMEOUT_MS = 90_000 // 90 seconds — adjust to your UX requirements

function startSale(amount, currency) {
  const transactionRef = generateUUID()
  db.savePendingTransaction(transactionRef)   // persist BEFORE initiating

  handpoint.sale(
    {
      amount: amount,
      currency: currency,
      transactionReference: transactionRef,   // pass your pre-generated UUID
    },
    function () {
      // Sale accepted by device — start UI timeout clock
      uiTimedOut = false
      resultTimeout = setTimeout(function () {
        if (!pendingRef) return
        uiTimedOut = true
        showFailedToClerk()   // unblock clerk immediately
        db.markPending(pendingRef)
        startBackgroundRecovery(pendingRef)
        pendingRef = null
      }, UI_TIMEOUT_MS)
    },
    function (error) { console.error('Sale error:', error) }
  )
}
```

### Step 3 — Poll in the background

```javascript
var POLL_INTERVAL_MS = 10_000
var RESULT_WAIT_MS   = 60_000

function startBackgroundRecovery(ref) {
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

---

## Direct status query via REST API

In addition to the SDK's `getTransactionStatus` method, you can query the transaction outcome directly via the Handpoint Cloud REST API. This is useful for server-side reconciliation, back-office tooling, or recovery from environments where the SDK is not available (for example, immediately after a cold restart before the SDK reconnects).

:::warning Different base URL
The status endpoint uses `https://transactions.handpoint.com` (production) or `https://transactions.handpoint.io` (staging) — **not** `cloud.handpoint.com`.
:::

### Query the full transaction chain

Use `/status/all` to retrieve the complete chain of operations linked to a `transactionReference`. This accounts for cases where the original sale was followed by a reversal or refund.

```javascript
async function queryTransactionStatus(transactionRef, apiKey) {
  const url = `https://transactions.handpoint.com/transactions/${transactionRef}/status/all`

  const response = await fetch(url, {
    headers: {
      'ApiKeyCloud': apiKey,
    },
  })

  if (!response.ok) {
    throw new Error(`Status query failed: ${response.status}`)
  }

  return response.json() // returns an array
}
```

### Response structure

The `/status/all` endpoint returns a JSON **array** of operations, ordered from oldest to newest. Each entry represents one operation in the chain (original sale, reversal, refund, etc.).

```json
[
  {
    "type": "SALE",
    "finStatus": "AUTHORISED",
    "totalAmount": 1000,
    "currency": "USD",
    "transactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
    "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f",
    "authorisationCode": "155884",
    "cardSchemeName": "VISA",
    "maskedCardNumber": "************1456"
  }
]
```

An empty array (`[]`) means the gateway has no record of this `transactionReference`. The terminal may still be processing (cardholder still interacting), or no card was read at all. Continue polling — do not treat empty as a safe non-charge until your active-recovery timeout expires.

### Parsing the response and deciding what to do

```javascript
async function recoverFromStatusApi(transactionRef, apiKey) {
  let operations
  try {
    operations = await queryTransactionStatus(transactionRef, apiKey)
  } catch (err) {
    // Network error — retry with backoff
    console.error('Status query failed:', err)
    return { status: 'RETRY' }
  }

  if (!operations || operations.length === 0) {
    // No record — terminal may still be processing
    // Continue polling; treat as non-charge only after active-recovery timeout
    return { status: 'NOT_FOUND' }
  }

  const first = operations[0]

  switch (first.finStatus) {
    case 'AUTHORISED':
      // Card was charged — do not retry; reverse if POS showed failure
      return { status: 'AUTHORISED', transactionID: first.transactionID, amount: first.totalAmount }

    case 'DECLINED':
    case 'CANCELLED':
    case 'FAILED':
      // Card not charged — safe to retry with a new transactionReference
      return { status: first.finStatus }

    case 'IN_PROGRESS':
    case 'UNDEFINED':
      // Still resolving — continue polling
      return { status: 'RETRY' }

    default:
      return { status: first.finStatus }
  }
}
```

### Decision tree

```
Query /status/all for transactionReference
  │
  ├─ Empty array (not found)
  │    ├─ Within active-recovery timeout → wait and retry query
  │    └─ After timeout expires → treat as non-charge; safe to retry sale
  │
  ├─ finStatus: AUTHORISED
  │    └─ Card charged. Do NOT retry the sale.
  │         └─ If POS already showed FAILED to clerk → send reversal
  │
  ├─ finStatus: DECLINED / CANCELLED / FAILED
  │    └─ Card not charged. Safe to retry the sale (new transactionReference).
  │
  └─ finStatus: IN_PROGRESS / UNDEFINED
       └─ Still resolving. Wait and retry query with backoff.
```

---

## UNDEFINED finStatus — critical behavior

`UNDEFINED` is **not** a safe non-charge. It means the Handpoint Cloud could not determine the final outcome at the time of the query. The most common causes are:

- The terminal is still processing (cardholder interacting, awaiting host response)
- A network disruption between the terminal and the gateway is resolving
- The transaction reached the acquirer but the response has not propagated yet

**Rules when you see `finStatus: UNDEFINED`:**

1. **Do not record the transaction as failed.** The card may have been charged.
2. **Do not issue a reversal yet.** There is no confirmed `transactionID` to reverse against.
3. **Do not retry the sale.** You could double-charge the cardholder.
4. **Continue polling** — both `getTransactionStatus` via the SDK and `/status/all` via the REST API will eventually resolve to a final status.

```javascript
// Correct UNDEFINED handling in the endOfTransaction branch
case 'endOfTransaction':
  if (event.transactionResult.finStatus === 'UNDEFINED') {
    showFailedToClerk()            // unblock clerk — do not show "charged"
    db.markPending(pendingRef)     // record as unresolved
    startBackgroundRecovery(pendingRef) // poll until final status
    // Do NOT call handleFinalResult or accept the transaction here
  }
  break
```

After your active-recovery timeout (recommended: 6 minutes from sale initiation), if the status is still `UNDEFINED` or the array is empty, flag the transaction for **manual reconciliation** rather than auto-reversing or auto-accepting.

---

## When is it safe to retry?

| Condition | Safe to retry? | Action |
|---|---|---|
| `finStatus: AUTHORISED` found | **No** | Do not retry. Card was charged. |
| `finStatus: DECLINED` found | **Yes** | Retry with a **new** `transactionReference` |
| `finStatus: CANCELLED` found | **Yes** | Retry with a **new** `transactionReference` |
| `finStatus: FAILED` found | **Yes** | Retry with a **new** `transactionReference` |
| Empty result after active-recovery timeout | **Yes** | Retry with a **new** `transactionReference` |
| `finStatus: UNDEFINED` | **No** | Continue polling — do not retry yet |
| `finStatus: IN_PROGRESS` | **No** | Continue polling — do not retry yet |

**Always use a new `transactionReference` on every retry.** Reusing the same reference can cause the gateway to link the retry to the previous operation chain, making reconciliation unreliable.

---

## Common failure scenarios

| Scenario | What to do |
|---|---|
| App crashed; no result received; `transactionReference` was saved | On restart, load the saved reference from persistent storage and call `startBackgroundRecovery(savedRef)` |
| App crashed; `transactionReference` was NOT saved (no pre-generation) | No recovery possible via SDK. Log the incident for manual reconciliation. **Always pre-generate and persist before initiating.** |
| `finStatus: UNDEFINED` received in `endOfTransaction` | Query `/status/all` and continue polling. Do not accept. Do not reverse. Do not retry. |
| Network dropped; sale may have processed | Query `/status/all`. If `AUTHORISED` found and POS showed failure, reverse. If empty after timeout, safe to retry. |
| `finStatus: DECLINED` received | Card not charged. Safe to retry the sale with a new `transactionReference`. |
| UI timeout fired; clerk needs the POS back | Show `FAILED` to clerk. Continue background recovery. If `AUTHORISED` found later, reverse automatically. |
| `endOfTransaction` arrives after UI timeout | Ignore the late event if `uiTimedOut` is set — background recovery is already handling the result. |
| Cardholder using Apple Pay / Google Pay ("See Phone") | Terminal waits up to 120 s. Do not cancel. Do not assume failed. Extend your active-recovery timeout accordingly. |

---

## Recovering on app restart

If the app restarts before `endOfTransaction` arrived, query any saved pending reference on startup:

```javascript
var savedRef = db.getPendingTransaction()
if (savedRef) {
  startBackgroundRecovery(savedRef)
}
```

Alternatively, query directly via the REST API before the SDK finishes reconnecting:

```javascript
async function recoverOnStartup(apiKey) {
  var savedRef = db.getPendingTransaction()
  if (!savedRef) return

  var result = await recoverFromStatusApi(savedRef, apiKey)

  if (result.status === 'RETRY' || result.status === 'NOT_FOUND') {
    // Still in progress — wait for SDK to reconnect, then poll via getTransactionStatus
    startBackgroundRecovery(savedRef)
  } else if (result.status === 'AUTHORISED') {
    // Charged but POS may have shown failure — reverse or reconcile manually
    sendReversal(result.transactionID)
    db.markReversed(savedRef)
  } else {
    // Not charged or final status confirmed
    db.clearPending(savedRef)
  }
}
```

:::note Partial approvals (US only)
If `finStatus` is `PARTIAL_APPROVAL`, the device may be showing an accept/decline prompt to the cardholder with approximately a 30-second timeout. The 60-second wait built into the background recovery above covers this window. Do not act on a partial approval result immediately — always allow the full wait period to elapse.
:::
