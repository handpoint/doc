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

    // Final status — wait 60 s for endOfTransaction to arrive naturally
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

:::note Partial approvals (US only)
If `finStatus` is `PARTIALLY_APPROVED`, the device may be showing an accept/decline prompt to the cardholder with approximately a 30-second timeout. The 60-second wait built into the recovery flow above covers this window. Do not act on a partial approval result immediately — always allow the full wait period to elapse.
:::
