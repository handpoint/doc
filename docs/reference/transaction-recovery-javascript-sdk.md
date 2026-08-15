---
title: Transaction Recovery — JavaScript SDK
sidebar_position: 1
description: How to implement robust transaction recovery in the Handpoint JavaScript SDK using transactionReference.
---

# Transaction Recovery — JavaScript SDK

When using the JavaScript SDK, transaction results are delivered to the browser over the Pusher WebSocket connection established by `hp.connect()`. If that connection drops between the card tap and the result arriving, the result is lost — the device has processed the payment but your application has no confirmation.

This guide explains how to handle this reliably using `transactionReference` and the Cloud status endpoint.

:::info No callbackUrl support
The JavaScript SDK removes `callbackUrl` from every outgoing command by design. The recovery pattern described here — polling the status endpoint — is the correct fallback for all JavaScript SDK integrations.
:::

## How results are delivered

`hp.sale()` returns an object immediately containing:

| Property | Type | Description |
|---|---|---|
| `transactionReference` | string | UUID identifying this transaction. Available before the card is presented. |
| `transactionResult` | Promise | Resolves when the Pusher `eotSuccess` event arrives with the full result. |

The `callback` parameter of `hp.sale()` is a **status update callback** — it fires for intermediate states (`WaitingForCard`, `CardTapped`, etc.), not for the final result. The final result only arrives via `transactionResult`.

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

The recommended pattern has two layers: a **UI timeout** that unblocks the clerk immediately, and a **background recovery** that resolves the outcome and auto-reverses if needed.

```
T+0s    Transaction initiated — transactionReference persisted to DB
T+Ns    ISV UI timeout fires (your choice — e.g. 90 s with no card interaction)
         └─ Display FAILED to clerk so the POS is not blocked
         └─ Mark DB record as pending/unresolved
         └─ Continue polling /status in the background

Background polling (every 10 s):
  IN_PROGRESS or UNDEFINED  → keep polling
  AUTHORISED found           → send automatic reversal (no reader needed)
                               update DB to REVERSED
  Any other final finStatus  → clear pending record — card was not charged
```

The 60-second gap between a final `/status` response and acting on it allows any in-flight Pusher delivery to arrive naturally, and covers the partial approval acceptance window on US acquirers.

## Implementation

### Step 1 — Capture `transactionReference` immediately

```javascript
const saleOp = hp.sale(amount, currency, options, statusUpdateCallback)

// Available immediately — persist before awaiting the result
const ref = saleOp.transactionReference
await db.savePendingTransaction(ref)
```

### Step 2 — Define your UI timeout

When your UI timeout fires, unblock the POS and hand off to background recovery:

```javascript
let uiTimedOut = false

const uiTimeout = setTimeout(async () => {
  uiTimedOut = true
  showFailedToClerk() // unblock POS immediately
  await db.markPending(ref)
  recoverInBackground(ref, saleOp)
}, UI_TIMEOUT_MS) // your defined threshold
```

### Step 3 — Handle `transactionResult` normally when it arrives

```javascript
try {
  const result = await saleOp.transactionResult

  if (uiTimedOut) return // background recovery is handling this now

  clearTimeout(uiTimeout)

  if (result.finStatus === 'UNDEFINED') {
    // Treat UNDEFINED identically to a timeout
    showFailedToClerk()
    await db.markPending(ref)
    recoverInBackground(ref, saleOp)
    return
  }

  handleFinalResult(result)
} catch (e) {
  if (!uiTimedOut) {
    showFailedToClerk()
    await db.markPending(ref)
    recoverInBackground(ref, saleOp)
  }
}
```

### Step 4 — Poll `/status` in the background

```javascript
async function recoverInBackground(ref, saleOp) {
  const POLL_INTERVAL_MS  = 10_000
  const RESULT_WAIT_MS    = 60_000

  while (true) {
    await sleep(POLL_INTERVAL_MS)

    const response = await fetch(
      `https://cloud.handpoint.com/transactions/${ref}`,
      { headers: { Authentication: 'YOUR_API_KEY' } }
    ).catch(() => null)

    if (!response?.ok) continue

    const statusResult = await response.json()

    if (statusResult.finStatus === 'IN_PROGRESS' || statusResult.finStatus === 'UNDEFINED') {
      continue // keep polling
    }

    // Final status — wait 60 s for the transactionResult to arrive naturally first
    const natural = await Promise.race([
      saleOp.transactionResult.catch(() => null),
      sleep(RESULT_WAIT_MS).then(() => null),
    ])

    const finalResult = natural ?? statusResult

    if (finalResult.finStatus === 'AUTHORISED') {
      // Card was charged but the POS already showed FAILED — reverse automatically
      await sendReversal(finalResult.transactionID)
      await db.markReversed(ref)
    } else {
      // Not charged — clear the pending record
      await db.clearPending(ref)
    }
    return
  }
}

async function sendReversal(originalTransactionID) {
  await fetch('https://cloud.handpoint.com/transactions', {
    method: 'POST',
    headers: {
      Authentication: 'YOUR_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operation: 'saleReversal',
      originalTransactionID,
      terminal_type: 'PAXA920',   // terminal type of the original transaction
      serial_number: '0821599465', // serial number of the original terminal
      transactionReference: crypto.randomUUID(),
    }),
  })
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
```

### Step 5 — Surface a cancel option to clerks

If the spinner is still running and the clerk needs to act, expose `hp.stopCurrentTransaction()`. If the cancel is rejected, the transaction is still being processed.

```javascript
cancelButton.onclick = async () => {
  try {
    await hp.stopCurrentTransaction()
  } catch {
    showMessage('Transaction cannot be cancelled — it is still being processed.')
  }
}
```

## Recovering on page load

If a `transactionReference` was saved as pending and the browser session ended before resolution, query on startup:

```javascript
const pending = await db.getPendingTransaction()
if (pending) {
  recoverInBackground(pending.ref, null) // no saleOp — go straight to polling
}
```

:::note Partial approvals (US only)
If `finStatus` is `PARTIALLY_APPROVED`, the device may be showing an accept/decline prompt to the cardholder with approximately a 30-second timeout. The 60-second wait built into the recovery flow above covers this window. Do not act on a partial approval result immediately — always allow the full wait period to elapse before sending a reversal.
:::
