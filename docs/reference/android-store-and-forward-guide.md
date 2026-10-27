---
title: Store-and-Forward — Android SDK
sidebar_position: 8
description: Implementing Store-and-Forward (SAF) with the Handpoint Android SDK — queue transactions offline, forward automatically when connectivity is restored, and manage the batch.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Store-and-Forward — Android SDK

Store-and-Forward (SAF) lets a PAX SmartPOS terminal accept card-present transactions when the gateway is unreachable. Transactions are stored encrypted on the device and forwarded to the acquirer automatically once connectivity is restored.

:::info Minimum SDK version
SAF requires Android SDK **7.1012.1** or later. Use the latest stable release for production; the latest RC build for staging/development.
:::

---

## How it works

```
Card tap/insert
    │
    ▼
Handpoint Payments App (on device)
    │  offline? store encrypted on device
    │  online?  process immediately
    ▼
endOfTransaction (finStatus = AUTHORISED_DEFERRED)
    │  ← fired immediately when stored
    │
    ▼  [later, when connectivity is restored]
forwardStoredTransactions()
    │
    ▼
Acquirer / Card Network
    │
    ▼
endOfTransaction (finStatus = AUTHORISED / DECLINED / FAILED)
```

**Each SAF sale fires `endOfTransaction` twice:**

| Call | `finStatus` | When |
|---|---|---|
| First | `AUTHORISED_DEFERRED` | Immediately after card is accepted and stored on device |
| Second | `AUTHORISED`, `DECLINED`, or `FAILED` | After the transaction is forwarded and the acquirer responds |

Your app must handle both callbacks on the same reference to avoid creating duplicate history entries.

---

## When to use it

| ✅ Good fit | ❌ Not a good fit |
|---|---|
| Environments with intermittent connectivity (events, outdoor, delivery) | High-value transactions where you need immediate authorisation |
| Low-to-medium ticket sizes with known offline risk tolerance | Jurisdictions that prohibit offline card acceptance |
| Merchants who can tolerate a small percentage of post-forward declines | Transactions that require signature capture or PIN-only |

:::caution Post-forward declines are possible
A card accepted offline may be declined when forwarded — for example if the card was reported stolen after the transaction was stored. Build your UX to handle this case gracefully.
:::

## Card entry types — chip and contactless only

SAF accepts **chip (EMV contact)** and **contactless (NFC)** transactions. Magnetic stripe (swipe) support is an open question with significant risk factors:

| Factor | EMV chip / contactless | Mag stripe (swipe) |
|---|---|---|
| **Fraud risk** | EMV cryptogram verifies card was physically present | No cryptogram — a cloned card is indistinguishable |
| **Liability shift** | Issuer bears fraud liability on chip-capable cards | Merchant bears 100% liability post-2015 EMV shift |
| **Acquirer support** | Supported (TSYS, EPI confirmed) | Not confirmed — some US acquirers decline forwarded swipe transactions |
| **Industry practice** | Universal | Stripe and Adyen block it; Square allows it |

The Handpoint SDK does **not** block mag stripe at the API level. Your application code receives `AUTHORISED_DEFERRED` even for swipe transactions. Use `result.cardEntryType` (`CardEntryType.MSR`) to detect and handle swipe as your policy requires:

```kotlin
override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED_DEFERRED &&
        result.cardEntryType == CardEntryType.MSR) {
        // Policy decision: accept and forward, or delete immediately.
        // If deleting: safApi.deleteStoredTransaction(TransactionReference(result.transactionReference))
        appendLog("Warning: swipe stored — confirm acquirer will accept at forwarding")
    }
    // ... rest of handler
}
```

Confirm with your Handpoint integration team whether your acquirer will accept forwarded mag stripe transactions before enabling swipe in SAF mode.

---

## Setup

### 1. Gradle dependency

SAF uses the same SDK artifact as standard PAX integration. No separate dependency is required.

```kotlin
// build.gradle.kts
implementation("com.handpoint.api:sdk:<version>-SNAPSHOT") {
    exclude(group = "com.handpoint.api", module = "paymentsdk")
}
implementation("com.handpoint.api:paymentsdk:<version>-SNAPSHOT")
```

See [Android SDK — Setup & Initialization](/reference/android-sdk-setup) for the full Gradle configuration including `abiFilters`, packaging, and desugaring options.

### 2. Implement the required event interfaces

Your class (or a dedicated wrapper object) must implement all five SAF event interfaces:

```kotlin
class SafSdk :
    Events.SmartposRequired,       // endOfTransaction, currentTransactionStatus, connectionStatusChanged
    Events.SignatureRequired,       // signatureRequired
    Events.StoredTransactionsForwardingStatus,  // noTransactionsToForward, transactionsToForward, transactionForwarded, transactionForwardingFinished
    Events.StoredTransactionsEvent,             // transactionsStoredList
    Events.DeleteStoredTransactionEvent,        // storedTransactionDeletedSuccessfully, errorDeletingStoredTransaction
    Events.GetSafTransactionStatusEvent,        // safTransactionStatus, unexpectedSafTrasnsactionStatusError
    Events.Log                                  // onMessageLogged
```

### 3. Initialise the SAF API

Use `HapiFactory.getStoreAndForwardPaymentsApi()` instead of the standard `HapiFactory.getAndroPay()`. Then **register the delegate explicitly** and call `start()`.

```kotlin
fun init(context: Context) {
    val credentials = HandpointCredentials(sharedSecret, "")
    val settings = Settings().apply { automaticReconnection = true }

    val safApi = HapiFactory.getStoreAndForwardPaymentsApi(this, credentials, settings)

    // SDK 7.1014.0+: the factory does NOT register the delegate automatically.
    safApi.registerEventsDelegate(this)

    // start() connects the PAX IPC immediately.
    // Cloud init (Pusher) runs concurrently — do not wait for CloudConnected.
    safApi.start()
}
```

:::caution Always call `registerEventsDelegate` after the factory
As of SDK 7.1014.0, `HapiFactory.getStoreAndForwardPaymentsApi()` does not auto-register the delegate. Omitting `registerEventsDelegate` means none of your callbacks fire.
:::

---

## SAF sale

:::danger Always set `checkDuplicates = false` for SAF
Pass `SaleOptions(checkDuplicates = false)` on every SAF sale. The SDK enables the duplicate check by default, but in SAF mode it runs at the **gateway when the transaction is forwarded** — potentially hours after the card was accepted. A transaction flagged as a duplicate is **permanently declined** with no cardholder present to confirm the retry. There is no recovery path.
:::

```kotlin
fun safSale(amountMinorUnits: Long): OperationStartResult =
    safApi.sale(BigInteger.valueOf(amountMinorUnits), Currency.EUR, SaleOptions(checkDuplicates = false))
```

Check `operationStarted` before assuming the sale was queued:

```kotlin
val result = safSdk.safSale(amount)
if (!result.operationStarted) {
    // Sale was rejected before being stored — check result.errorMessage
    // Common reasons:
    //   - Amount exceeds per-transaction SAF limit configured in TMS
    //   - Amount would push total stored batch over the batch ceiling
    //   - SAF not yet initialised (call after InitialisationComplete)
}
```

### Handling the two `endOfTransaction` callbacks

```kotlin
override fun endOfTransaction(result: TransactionResult, device: Device) {
    val ref = result.transactionReference

    if (ref.isBlank()) {
        // Pre-validation failure: amount rejected before the transaction was queued.
        // errorMessage / statusMessage describes the reason.
        return
    }

    when (result.finStatus) {
        FinancialStatus.AUTHORISED_DEFERRED -> {
            // First callback: stored on device, not yet forwarded.
            // Add to your history UI with status = PENDING.
            // Do NOT show a "payment approved" message — it's stored, not settled.
            addToHistory(ref, result)

            // Forward immediately if cloud is reachable.
            if (isCloudOnline) safApi.forwardStoredTransactions()
        }
        FinancialStatus.AUTHORISED -> {
            // Second callback (post-forward): transaction settled.
            // Update the existing history entry for `ref`.
            updateHistoryEntry(ref, status = APPROVED, result = result)
        }
        FinancialStatus.DECLINED,
        FinancialStatus.FAILED -> {
            // Post-forward decline or technical failure.
            // Update history; consider flagging for merchant review.
            updateHistoryEntry(ref, status = FAILED, result = result)
        }
        else -> {}
    }
}
```

:::warning Show "stored" messaging on the first callback — not "approved"
`AUTHORISED_DEFERRED` means the transaction is stored on the device, **not settled**. Receipts printed at this point should clearly state "deferred" or "pending authorisation". Final approval arrives via the second `endOfTransaction`.
:::

---

## Batch management

### List stored transactions

```kotlin
fun listStoredTransactions(): Boolean = safApi.getStoredTransactions()

// Callback:
override fun transactionsStoredList(
    transactions: List<TransactionReference>,
    currency: Currency,
    totalAmount: BigInteger,        // SAF batch limit (despite the parameter name)
    amountProcessed: BigInteger,    // Total amount currently stored (despite the parameter name)
) {
    // NOTE: despite the name "totalAmount", this is the batch ceiling.
    // "amountProcessed" is the sum of amounts currently queued.
    val batchLimit   = totalAmount
    val amountStored = amountProcessed

    val queueSize = transactions.size
    val storedTotal = amountStored.toLong()
}
```

:::note `transactionsStoredList` parameter naming
The SDK's `totalAmount` parameter is the **batch limit** (ceiling configured in TMS) and `amountProcessed` is the **amount currently stored**. The names are reversed from what you would expect — this is a known SDK quirk.
:::

### Forward stored transactions

Call this when cloud connectivity is confirmed to flush the stored queue to the acquirer:

```kotlin
fun forwardStoredTransactions(): Boolean = safApi.forwardStoredTransactions()

// Forwarding progress callbacks:
override fun transactionsToForward(count: Int) {
    // count transactions will be forwarded
}

override fun transactionForwarded(transactionReference: String, current: Int, total: Int) {
    // One transaction sent to the acquirer ($current of $total)
}

override fun transactionForwardingFinished(status: ForwardingTransactionStatus) {
    when (status) {
        is ForwardingTransactionStatus.Success -> {
            // status.successfullyForwardedTransaction = count forwarded
            // Await the final endOfTransaction callback for each forwarded reference
        }
        is ForwardingTransactionStatus.PartialSuccess -> {
            // status.successfullyForwardedTransaction, failedForwardedTransactions,
            // corruptedTransactions — handle partial failures
        }
        is ForwardingTransactionStatus.Failed -> {
            // status.forwardingTransactionErrorReason — connectivity issue or batch error
        }
    }
}

override fun noTransactionsToForward() {
    // Queue was empty — no action required
}
```

### Delete a stored transaction

Deletion removes a transaction from the device queue **before** it is forwarded. Only valid while the transaction has `PENDING` status:

```kotlin
fun deleteStoredTransaction(reference: TransactionReference): Boolean =
    safApi.deleteStoredTransaction(reference)

// Callbacks:
override fun storedTransactionDeletedSuccessfully(transactionReference: TransactionReference) {
    // Remove from history UI
}

override fun errorDeletingStoredTransaction(
    transactionReference: TransactionReference,
    reason: TransactionDeletionFailed
) {
    if (reason == TransactionDeletionFailed.NO_EXISTING_TRANSACTION) {
        // Transaction is no longer on the terminal — it was already forwarded.
        // Treat as sent (update status to APPROVED or PROCESSING), not as an error.
    } else {
        // Log other failures
    }
}
```

### Query transaction status

Poll the status of a specific stored transaction — useful to check forwarding outcome when Pusher (cloud push) is not connected:

```kotlin
fun getTransactionStatus(reference: TransactionReference): Boolean =
    safApi.getTransactionProcessingStatus(reference)

// Callback:
override fun safTransactionStatus(
    transactionReference: TransactionReference,
    status: SafTransactionStatus
) {
    // SafTransactionStatus values:
    //   STORED       — still in queue, not forwarded
    //   IN_PROGRESS  — currently being forwarded
    //   SUCCEEDED / CAPTURED — settled by acquirer
    //   REFUNDED     — refund processed post-settlement
    //   FAILED / CANCELLED   — forwarding or authorisation failure
    //   NOT_FOUND    — no longer on the terminal; treat as already forwarded
}

// Also implement:
override fun unexpectedSafTrasnsactionStatusError() {
    // SDK typo: "Trasnsaction" — must match exactly
    // Fires when the status endpoint returns an unexpected error
}
```

---

## Connection status and auto-forwarding

Monitor `connectionStatusChanged` to track cloud availability and trigger forwarding when connectivity is restored:

```kotlin
override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
    when (status) {
        ConnectionStatus.CloudConnected -> {
            isCloudOnline = true
            val pending = queue.count { it.status == PENDING }
            if (pending > 0) forwardStoredTransactions()
        }
        ConnectionStatus.CloudDisconnected -> {
            isCloudOnline = false
            // Transactions will continue to be stored locally;
            // start a retry loop to forward once connectivity returns.
        }
        ConnectionStatus.Connected -> {
            // PAX IPC connected — SAF operations are now available.
            // Call getStoredTransactions() to reconcile the queue on startup.
        }
        ConnectionStatus.InitialisationComplete -> {
            // Raised via currentTransactionStatus(info, device).
            // SAF API is fully ready.
        }
        else -> {}
    }
}
```

### Retry loop pattern

When offline, poll every 20–30 seconds and forward as soon as the cloud becomes reachable:

```kotlin
private val retryHandler = Handler(Looper.getMainLooper())
private val retryRunnable = object : Runnable {
    override fun run() {
        val pending = queue.count { it.status == PENDING }
        if (pending > 0) {
            safSdk.forwardStoredTransactions()
            retryHandler.postDelayed(this, 20_000)
        }
    }
}

// Start on first AUTHORISED_DEFERRED when offline:
retryHandler.postDelayed(retryRunnable, 20_000)

// Stop when all pending are forwarded:
retryHandler.removeCallbacksAndMessages(null)
```

---

## Limits and validation

SAF limits are configured per-merchant in TMS. The SDK enforces them before a transaction is queued:

| Limit | TMS setting | SDK behaviour when exceeded |
|---|---|---|
| Per-transaction maximum | SAF per-transaction limit | `sale()` returns `operationStarted = false` with a descriptive error |
| Batch ceiling | SAF batch limit | `sale()` returns `operationStarted = false` |

When the sale is rejected before queuing, `endOfTransaction` fires with:
- `transactionReference` = empty string
- `finStatus` = `FAILED`
- `errorMessage` / `statusMessage` describing the limit that was exceeded

Check for blank `transactionReference` first to distinguish pre-validation failures from post-forward results:

```kotlin
override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.transactionReference.isBlank()) {
        // Pre-validation failure — no entry was created in the queue
        showError(result.errorMessage.ifBlank { result.statusMessage })
        return
    }
    // Normal SAF flow...
}
```

---

## TMS configuration

Ask your Handpoint integration team to configure the following in TMS for the merchant:

| Setting | Description |
|---|---|
| **SAF enabled** | Opt the merchant into Store-and-Forward |
| **Per-transaction limit** | Maximum amount accepted offline per transaction |
| **Batch limit** | Maximum total amount stored before new transactions are refused |
| **Currency** | SAF is currency-specific — confirm EUR, GBP, USD, etc. with your integration team |

---

## Receipt guidance

Print two receipts for every SAF transaction:

| Receipt | When | Status line |
|---|---|---|
| **Deferred receipt** | On `AUTHORISED_DEFERRED` — immediately after the card is accepted | "DEFERRED — pending authorisation" or "STORED OFFLINE" |
| **Final receipt** | On the second `endOfTransaction` (`AUTHORISED` / `DECLINED`) | Standard "APPROVED" or "DECLINED" |

Many jurisdictions require a paper receipt at the time of sale even for deferred transactions. The deferred receipt should include the amount, time, and a reference number so the cardholder can be contacted if the final status is declined.

---

## Demo app

The **SAFDemo** app is a reference implementation for PAX A920 terminals demonstrating the complete Store-and-Forward flow:

- SAF sale with immediate `AUTHORISED_DEFERRED` feedback
- Transaction history with status badges (PENDING → FORWARDING → APPROVED / FAILED)
- Automatic forwarding when cloud connectivity is restored
- Manual forward, status poll, and delete per transaction
- Receipt dialog showing the gateway result

The source is the internal `SAFDemo` project. Contact your Handpoint integration team for access.

---

## MAGStripe (swipe) in Store-and-Forward

The SDK does not block MAGStripe transactions in SAF mode — a swipe is stored and forwarded alongside chip and contactless transactions. However, there are important acquirer and card-scheme considerations, especially for US deployments:

| Concern | Detail |
|---|---|
| **Liability shift** | US Visa and Mastercard rules: if a chip-capable terminal processes a swipe, the merchant bears liability for chargebacks — including transactions stored offline |
| **Post-forward decline** | Some US acquirers (notably TSYS) reject mag-stripe SAF transactions at forwarding time. The merchant doesn't learn of the decline until hours after the sale |
| **Fraud window** | A stolen or cloned mag-stripe card accepted offline isn't verified until forwarding — potentially many hours later |

**Recommendation:** Do not block swipe in app code. Instead, configure the terminal's card reader policy in TMS to disable mag-stripe fallback for SAF merchants in the US. This ensures the terminal itself refuses a swipe attempt on a chip-capable card rather than silently storing it. Check with your Handpoint integration team and the specific acquirer before enabling SAF with mag-stripe allowed.

---

## Common issues

### `sale()` returns `operationStarted = false` with no error message

The SDK was not fully initialised when `sale()` was called. Wait for `InitialisationComplete` (delivered via `currentTransactionStatus`) before enabling SAF operations.

### `transactionsStoredList` fires with zero amounts when the queue is empty

The SDK returns `Either.Left(NotFound)` internally when the queue is empty, which sets both `totalAmount` and `amountProcessed` to zero even though a valid SAF config is loaded. Cache the `totalAmount` (batch limit) from the first non-zero callback and reuse it for display.

### Both `endOfTransaction` callbacks update the same row with `AUTHORISED_DEFERRED`

Keep a map from `transactionReference` → history row. On the first callback, create the row if it doesn't exist. On the second callback, update the existing row in place. Do not create a new row on the second callback.

### Post-forward result arrives before `transactionForwardingFinished`

In some network conditions the final `endOfTransaction` (second callback) fires before `transactionForwardingFinished`. Handle this by updating the row status immediately on the final `endOfTransaction` rather than waiting for the forwarding-finished event.

### `unexpectedSafTrasnsactionStatusError` — note the typo

The SDK interface contains a typo: `unexpectedSafTrasnsactionStatusError` (double 'a' in 'Trasnsaction'). Your override must match this spelling exactly or the compiler will not recognise it as implementing the interface.
