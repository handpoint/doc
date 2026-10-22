---
title: Transaction Recovery — Android SDK
sidebar_position: 3
description: How to implement robust transaction recovery in the Handpoint Android SDK (PAX) using transactionReference and getTransactionStatus.
---

# Transaction Recovery — Android SDK

:::note PAX devices only
This guide applies to the Android SDK used with PAX hardware. DATECS-based devices (HiLite) do not support `transactionReference` and cannot use this recovery pattern.
:::

In the Android SDK, the final transaction result is delivered asynchronously via the `endOfTransaction` callback on your `Events.Required` listener. If the connection between your application and the device is interrupted after the card is tapped but before `endOfTransaction` fires, the result may not arrive.

`getTransactionStatus(transactionReference)` lets you query the Handpoint Cloud for the outcome of any transaction at any point after it was initiated.

:::info Applicable operations
This recovery pattern applies to operations where a card is physically read and an acquirer authorization may have occurred: **Sale**, **Refund (on-device)**, **MOTO Sale (on-device)**, **MOTO Refund (on-device)**, and **Pre-Auth**.

It does **not** apply to: reversals, tip adjustment, pre-auth capture, or pre-auth increase. If a result is lost for those operations, it is safe to retry them — no card is charged on your behalf without an explicit authorization.
:::

## How results are normally delivered

`api.sale()` returns an `OperationStartResult` synchronously. The `transactionReference` field identifies this transaction. The actual result arrives later via `endOfTransaction`.

```kotlin
val opResult = api.sale(amount, currency, options)

if (!opResult.operationStarted) {
    // SDK rejected the call — handle here, safe to retry
    return
}

// Persist before the result arrives
val ref = opResult.transactionReference
db.savePendingTransaction(ref)
```

## finStatus values

| `finStatus` | Meaning | What to do |
|---|---|---|
| `IN_PROGRESS` | Transaction still processing on device or host | Keep polling |
| `UNDEFINED` | Result received but status could not be resolved | **Do not act.** Call `getTransactionStatus` and poll until final — card may have been charged. See [UNDEFINED handling](#undefined-finstatus--critical-behavior). |
| `AUTHORISED` | Approved — card charged | **Final.** Do not retry. |
| `DECLINED` | Declined by issuer | **Final.** Card not charged. Safe to retry. |
| `PROCESSED` | Completed (tokenization, MOTO) | **Final.** Do not retry. |
| `FAILED` | Technical failure | **Final.** Card not charged. Safe to retry. |
| `CANCELLED` | Cancelled by cardholder or merchant | **Final.** Card not charged. Safe to retry. |
| `PARTIAL_APPROVAL` | Partial amount approved *(US only)* | **Final.** Wait 60 s before acting — see note below. |
| `REFUNDED` | Refund processed | **Final.** Do not retry. |
| `CAPTURED` | Pre-authorisation captured | **Final.** Do not retry. |

## Recovery flow

The recommended pattern has two layers: a **UI timeout** that unblocks the clerk immediately, and **background polling** that resolves the outcome and auto-reverses if needed.

```
T+0s    operationStarted — transactionReference persisted to DB
T+Ns    ISV UI timeout fires (your choice — e.g. 90 s with no card interaction)
         └─ Display FAILED to clerk so the POS is not blocked
         └─ Mark DB record as pending/unresolved
         └─ Continue polling getTransactionStatus in background

Background polling (every 10 s):
  IN_PROGRESS or UNDEFINED  → keep polling
  AUTHORISED found           → send automatic reversal via Cloud API (no reader needed)
                               update DB to REVERSED
  Any other final finStatus  → clear pending record — card was not charged
```

## Implementation

### Step 1 — Implement `Events.TransactionResultReady`

`getTransactionStatus()` delivers its result through `transactionResultReady` rather than `endOfTransaction`. Implement both interfaces:

```kotlin
class MyPaymentHandler : Events.Required, Events.TransactionResultReady {

    override fun endOfTransaction(result: TransactionResult, device: Device) {
        handleResult(result, recovered = false)
    }

    override fun transactionResultReady(result: TransactionResult, device: Device) {
        handleResult(result, recovered = true)
    }

    private fun handleResult(result: TransactionResult, recovered: Boolean) {
        // Dispatch to your payment service — see Step 3
        paymentService.onTransactionResult(result, recovered)
    }
}
```

Register both interfaces when initialising the SDK:

```kotlin
val handler = MyPaymentHandler()
api = HapiFactory.getAsyncInterface(handler, applicationContext, connectionMethod)
```

### Step 2 — Start a sale with a UI timeout

```kotlin
private var uiTimedOut = false
private var uiTimeoutJob: Job? = null

fun startSale(amount: Long, currency: Currency) {
    val opResult = api.sale(amount, currency, Options())
    if (!opResult.operationStarted) return

    val ref = opResult.transactionReference
    db.savePendingTransaction(ref)

    uiTimedOut = false
    uiTimeoutJob = coroutineScope.launch {
        delay(UI_TIMEOUT_MS) // your defined threshold
        uiTimedOut = true
        showFailedToClerk() // unblock clerk immediately
        db.markPending(ref)
        startBackgroundRecovery(ref)
    }
}
```

### Step 3 — Handle results and drive background recovery

```kotlin
fun onTransactionResult(result: TransactionResult, recovered: Boolean) {
    if (uiTimedOut && !recovered) return // background recovery is handling this

    uiTimeoutJob?.cancel()

    if (result.finStatus == FinancialStatus.UNDEFINED) {
        // Treat UNDEFINED identically to a timeout
        showFailedToClerk()
        db.markPending(result.transactionReference)
        startBackgroundRecovery(result.transactionReference)
        return
    }

    if (recovered) {
        // Came from background recovery polling
        handleRecoveredResult(result)
    } else {
        handleFinalResult(result)
    }
}

private fun handleRecoveredResult(result: TransactionResult) {
    // Check if IN_PROGRESS or UNDEFINED — keep polling
    if (result.finStatus == FinancialStatus.IN_PROGRESS ||
        result.finStatus == FinancialStatus.UNDEFINED) {
        coroutineScope.launch {
            delay(POLL_INTERVAL_MS)
            api.getTransactionStatus(result.transactionReference)
        }
        return
    }

    // Final status — wait 60 s for endOfTransaction to arrive naturally.
    // The SDK retries result delivery every ~5 s for up to ~100 s after the terminal
    // completes. If getTransactionStatus returns AUTHORISED before endOfTransaction
    // fires, the delivery may still be in transit — the 60 s wait covers this window.
    coroutineScope.launch {
        delay(RESULT_WAIT_MS) // 60 s
        if (result.finStatus == FinancialStatus.AUTHORISED) {
            // Card was charged but POS already showed FAILED — reverse automatically
            sendReversal(result.transactionID)
            db.markReversed(result.transactionReference)
        } else {
            db.clearPending(result.transactionReference)
        }
    }
}
```

### Step 4 — Start background polling

```kotlin
private val POLL_INTERVAL_MS = 10_000L
private val RESULT_WAIT_MS   = 60_000L

private fun startBackgroundRecovery(ref: String) {
    coroutineScope.launch {
        delay(POLL_INTERVAL_MS)
        api.getTransactionStatus(ref)
        // Result arrives in transactionResultReady() → handleRecoveredResult()
    }
}

private fun sendReversal(originalTransactionID: String) {
    coroutineScope.launch(Dispatchers.IO) {
        val client = OkHttpClient()
        val body = JSONObject().apply {
            put("operation", "saleReversal")
            put("originalTransactionID", originalTransactionID)
            put("terminal_type", "PAXA920")    // terminal type of the original transaction
            put("serial_number", "0821599465") // serial number of the original terminal
            put("transactionReference", UUID.randomUUID().toString())
        }
        val request = Request.Builder()
            .url("https://cloud.handpoint.com/transactions")
            .addHeader("Authentication", "YOUR_API_KEY")
            .post(body.toString().toRequestBody("application/json".toMediaType()))
            .build()
        client.newCall(request).execute()
    }
}
```

### Step 5 — Surface a cancel option to clerks

If the spinner is still running and the clerk needs to act, call `stopCurrentTransaction`. If it returns false or throws, the transaction is still being processed.

```kotlin
cancelButton.setOnClickListener {
    val stopped = api.stopCurrentTransaction()
    if (!stopped) {
        showMessage("Transaction cannot be cancelled — it is still being processed.")
    }
}
```

## Recovering on app restart

If the app restarts before `endOfTransaction` arrived, query any saved pending reference on startup:

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    // ... initialise SDK ...

    val pendingRef = db.getPendingTransaction()
    if (pendingRef != null) {
        startBackgroundRecovery(pendingRef)
        // Result arrives in transactionResultReady()
    }
}
```

## Activity lifecycle — navigation and backgrounding

Android's activity lifecycle can interrupt transaction delivery if your payment screen is destroyed or goes to the background before `endOfTransaction` fires.

### Back button or fragment replacement

If the user presses Back or your app navigates to another screen while a transaction is in progress, **do not call `stopCurrentTransaction`**. The terminal processes the card autonomously — cancelling at the SDK level does not undo an authorisation that the acquirer has already processed.

When the payment activity is recreated (or a new screen takes its place), re-register the event listener and check for pending references:

```kotlin
override fun onResume() {
    super.onResume()
    api.registerEventsDelegate(this)

    val pendingRef = db.getPendingTransaction()
    if (pendingRef != null) {
        startBackgroundRecovery(pendingRef)
    }
}
```

### App going to background

When the user presses Home or switches apps, the activity pauses but the process usually survives. `endOfTransaction` may still fire while the activity is in the background — your listener receives it as long as the SDK connection is alive.

If the OS kills the process while a transaction is in progress, the pending `transactionReference` must already be in your database (persisted in Step 2). On next startup, query it in `onCreate` — see [Recovering on app restart](#recovering-on-app-restart).

:::warning Do not cancel on navigation
Never call `stopCurrentTransaction` when the user navigates away. The terminal may have already sent the authorisation request — cancelling at the SDK level does not undo a network transaction the acquirer has already processed.
:::

## UNDEFINED finStatus — critical behavior {#undefined-finstatus--critical-behavior}

`UNDEFINED` is **not** a safe non-charge. It means the SDK received a response from the terminal but could not resolve the final status. The most common causes are:

- The terminal is still processing (cardholder interacting, awaiting host response)
- A network disruption between the terminal and the gateway is resolving
- The transaction reached the acquirer but the response has not propagated yet

**Rules when you see `FinancialStatus.UNDEFINED`:**

1. **Do not record the transaction as failed.** The card may have been charged.
2. **Do not issue a reversal yet.** There is no confirmed `transactionID` to reverse against.
3. **Do not retry the sale.** You could double-charge the cardholder.
4. **Continue polling** via `getTransactionStatus` until a final status is confirmed.

After your active-recovery timeout (recommended: 6 minutes from sale initiation), if the status is still `UNDEFINED`, flag the transaction for **manual reconciliation** rather than auto-reversing or auto-accepting.

:::note Partial approvals (US only)
If `finStatus` is `PARTIAL_APPROVAL`, the device may be showing an accept/decline prompt to the cardholder with approximately a 30-second timeout. The 60-second wait built into the recovery flow above covers this window. Do not act on a partial approval result immediately — always allow the full wait period to elapse.
:::
