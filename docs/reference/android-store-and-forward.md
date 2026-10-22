---
title: Android SDK (PAX) — Store and Forward
sidebar_position: 7
description: How to enable Store and Forward (SAF) on a PAX SmartPOS terminal — storing transactions offline and forwarding them when the network is restored.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Android SDK (PAX) — Store and Forward

:::info Related
[Android SDK (PAX) — Integration Guide](/reference/android-pax-integration-guide) — card-present baseline.  
[Android SDK (PAX) — Cloud API Integrated Mode](/reference/android-cloud-api-integration-guide) — server-initiated transactions.
:::

## What is Store and Forward?

**Store and Forward (SAF)** allows a PAX SmartPOS terminal to accept card payments even when the network is unavailable. Transactions are encrypted and stored on-device, then forwarded to the payment gateway in a batch once connectivity is restored.

### Use cases

| Scenario | Why SAF helps |
|---|---|
| Events venues (stadiums, festivals) | Spotty network under load; keep selling during outages |
| Field service / delivery | Technicians in areas with poor signal |
| Kiosk in a basement / underground | No reliable Wi-Fi or cellular |
| Network failover | Continue trading during a temporary outage |

### Key difference from online payments

A normal online sale returns `AUTHORISED` when approved. A SAF sale returns **`AUTHORISED_DEFERRED`** — the transaction is accepted and stored, but not yet forwarded. Your app must handle this status as a success (the cardholder should receive a receipt and leave), and forward the stored batch when the network is available.

## Prerequisites

| Requirement | Detail |
|---|---|
| Android SDK version | 7.1012.1 or later; **7.1014.1 recommended** for production |
| Device type | PAX SmartPOS only (ANDROID_PAYMENT IPC) — HiLite (Bluetooth/USB) does not support SAF |
| Acquirer config | `supports_store_and_forward: true` must be enabled on your merchant — contact Handpoint Integration Support |
| Credentials | `sharedSecret` only — no `cloudApiKey` required |

:::danger PAX SmartPOS only
SAF is delivered via the ANDROID_PAYMENT IPC channel, which is exclusive to PAX SmartPOS devices. It does not work with HiLite terminals connected over Bluetooth or USB.
:::

## How it differs from online payments

| Step | Online flow | SAF flow |
|---|---|---|
| Sale initiated | `hapi.sale()` | `safApi.sale()` |
| Network required | Yes | **No** — works offline |
| Callback | `endOfTransaction` → `AUTHORISED` | `endOfTransaction` → **`AUTHORISED_DEFERRED`** |
| Settlement | Immediate (online auth) | Deferred — triggered by `forwardStoredTransactions()` |
| API object | `Hapi` (from `HapiFactory`) | `StoreAndForwardPaymentsApiImpl` (singleton) |

## Setup

Initialize the standard `Hapi` object first (this establishes credentials and device config), then start the SAF subsystem and register event delegates on both.

```kotlin
import com.handpoint.api.HapiFactory
import com.handpoint.api.StoreAndForwardPaymentsApiImpl
import com.handpoint.api.shared.ConnectionMethod
import com.handpoint.api.shared.Device
import com.handpoint.api.shared.Events
import com.handpoint.api.shared.settings.Settings

class MyActivity : AppCompatActivity(),
    Events.SmartposRequired,
    Events.StoredTransactionsForwardingStatus,
    Events.StoredTransactionsEvent,
    Events.DeleteStoredTransactionEvent,
    Events.GetSafTransactionStatusEvent,
    Events.Log {

    private var hapi: Hapi? = null
    private var safApi: StoreAndForwardPaymentsApiImpl? = null

    fun initSdk(context: Context, sharedSecret: String) {
        val device = Device("PAX A920", "", "", ConnectionMethod.ANDROID_PAYMENT)
        val settings = Settings().apply { automaticReconnection = true }

        // Step 1 — create the standard Hapi object (sets credentials + device)
        hapi = HapiFactory.getAsyncInterface(this, context, sharedSecret, settings, device)
        hapi?.registerEventsDelegate(this)

        // Step 2 — start the SAF subsystem (singleton, initialised by HapiFactory above)
        safApi = StoreAndForwardPaymentsApiImpl
        safApi?.registerEventsDelegate(this)

        // Step 3 — connect with a 5-second delay (PAX kernel lib race workaround)
        Handler(Looper.getMainLooper()).postDelayed({ hapi?.connect() }, 5_000)
    }
}
```

:::tip No cloudApiKey needed
SAF uses the ANDROID_PAYMENT IPC channel, not the Pusher cloud channel. You do not need a `cloudApiKey` — only `sharedSecret` is required.
:::

## Taking a SAF sale

Call `safApi.sale()` instead of `hapi.sale()`. The result arrives in the same `endOfTransaction` callback, but with `finStatus == AUTHORISED_DEFERRED` when offline.

```kotlin
fun startSafSale(amountMinorUnits: Long) {
    val options = SaleOptions()
    val result = safApi?.sale(
        BigInteger.valueOf(amountMinorUnits),
        Currency.USD,
        options
    )
    if (result?.operationStarted != true) {
        // SDK not ready or another transaction in progress
    }
}

override fun endOfTransaction(transactionResult: TransactionResult, device: Device?) {
    when (transactionResult.finStatus) {
        FinancialStatus.AUTHORISED_DEFERRED -> {
            // Transaction stored offline — treat as a success for the cardholder.
            // Persist the reference immediately so you can track it later.
            val ref = transactionResult.transactionReference
            saveToLocalDb(ref)
            showReceipt(transactionResult)
        }
        FinancialStatus.AUTHORISED -> {
            // Online auth — network was available, forwarded immediately.
            showReceipt(transactionResult)
        }
        else -> {
            // DECLINED, CANCELLED, etc.
            handleFailure(transactionResult)
        }
    }
}
```

:::tip Persist the reference
Store `transactionResult.transactionReference` in your local database as soon as `AUTHORISED_DEFERRED` arrives. You will need it to check status, delete, or display the stored transaction later.
:::

## Event interfaces

Implement these four additional interfaces alongside `Events.SmartposRequired`:

### `Events.StoredTransactionsForwardingStatus`

Real-time progress during `forwardStoredTransactions()`.

```kotlin
override fun storedTransactionsForwardingStatus(status: ForwardingTransactionStatus) {
    when (status) {
        is ForwardingTransactionStatus.Success -> {
            val count = status.successfullyForwardedTransaction
            log("Forwarded $count transaction(s) successfully")
        }
        is ForwardingTransactionStatus.PartialSuccess -> {
            log("Partial: ${status.successfullyForwarded} ok, ${status.failed} failed, " +
                "${status.corrupted} corrupted of ${status.total}")
            log("Reason: ${status.errorReason}")
        }
        is ForwardingTransactionStatus.Failed -> {
            log("Forwarding failed: ${status.errorReason}")
        }
    }
}
```

### `Events.StoredTransactionsEvent`

Response to `getStoredTransactions()` — a list of all on-device stored transactions.

```kotlin
override fun storedTransactions(transactions: List<TransactionResult>) {
    log("Queue depth: ${transactions.size}")
    transactions.forEach { txn ->
        log("  ${txn.transactionReference?.value} | ${txn.finStatus} | ${txn.authorisedAmountValue}")
    }
}
```

### `Events.DeleteStoredTransactionEvent`

Confirmation that a stored transaction was deleted.

```kotlin
override fun deleteStoredTransactionResult(reference: TransactionReference, deleted: Boolean) {
    if (deleted) {
        log("Deleted: ${reference.value}")
    } else {
        log("Delete failed for: ${reference.value}")
    }
}
```

### `Events.GetSafTransactionStatusEvent`

Response to `getTransactionProcessingStatus()`. Note: the SDK source contains a typo in one method name — match it exactly.

```kotlin
override fun safTransactionProcessingStatus(reference: TransactionReference, status: SafTransactionStatus) {
    log("Status for ${reference.value}: $status")
}

// Note: "Trasnsaction" (double-n) is a typo in the SDK source — must match exactly.
override fun unexpectedSafTrasnsactionStatusError(reference: TransactionReference, errorMessage: String) {
    log("SAF status error: $errorMessage")
}
```

## Forwarding stored transactions

Call `forwardStoredTransactions()` when the network is available. Good trigger points:

- When the device reconnects (`connectionStatusChanged` → `Connected`)
- On app resume (`onResume`)
- On explicit user action (a "Forward Now" button)

```kotlin
// Trigger automatically on reconnect
override fun connectionStatusChanged(status: ConnectionStatus, device: Device?) {
    if (status == ConnectionStatus.Connected) {
        safApi?.forwardStoredTransactions()
    }
}

// Or manually
fun onForwardButtonClicked() {
    if (safApi?.forwardStoredTransactions() != true) {
        log("Forward failed to start — SDK not ready?")
    }
}
```

Results arrive in `storedTransactionsForwardingStatus` (see above).

## Managing the queue

### List stored transactions

```kotlin
safApi?.getStoredTransactions()
// → storedTransactions(transactions: List<TransactionResult>)
```

### Delete a stored transaction

Use this to void a stored transaction before it is forwarded (for example, if a customer changes their mind while offline).

```kotlin
safApi?.deleteStoredTransaction(transactionReference)
// → deleteStoredTransactionResult(reference, deleted)
```

### Check a transaction's processing status

```kotlin
safApi?.getTransactionProcessingStatus(transactionReference)
// → safTransactionProcessingStatus(reference, status)
```

### `SafTransactionStatus` enum

| Value | Meaning |
|---|---|
| `STORED` | On-device, not yet forwarded |
| `IN_PROGRESS` | Being forwarded right now |
| `SUCCEEDED` | Forwarded and approved online |
| `FAILED` | Forwarding attempted but declined |
| `CAPTURED` | Captured / settled |
| `REFUNDED` | Refunded after forwarding |
| `CANCELLED` | Cancelled before forwarding |
| `NOT_FOUND` | Reference not in the local queue |

## `sendSafTransactions()` on Hapi

If your app uses both online and SAF payment paths, the standard `Hapi` object exposes a convenience method to trigger SAF forwarding without switching to `StoreAndForwardPaymentsApiImpl`:

```kotlin
hapi?.sendSafTransactions()
```

This is equivalent to `safApi.forwardStoredTransactions()` — use whichever is more convenient for your architecture.

## Limitations

| Limitation | Detail |
|---|---|
| Operations | `sale()` only — refunds and reversals require an online connection |
| Devices | PAX SmartPOS only (ANDROID_PAYMENT IPC) |
| Acquirer config | Must have `supports_store_and_forward: true` — not all acquirers support it |
| Storage | Transactions are local to the device — no cross-device queue sharing |
| Risk | Stored transactions can be declined when forwarded (e.g., card was cancelled) — your app must handle `FAILED` forwarding outcomes |

:::danger No offline refunds
SAF stores only `sale()` transactions. Refunds and reversals require a live network connection. If a cardholder requests a refund for a stored (not yet forwarded) transaction, you must either delete the stored transaction before forwarding, or process the refund after forwarding succeeds.
:::

## Certification checklist

Before going live, verify:

- [ ] `AUTHORISED_DEFERRED` is displayed to the cardholder as a successful transaction (with receipt)
- [ ] `transactionReference` is persisted locally on every `AUTHORISED_DEFERRED`
- [ ] `forwardStoredTransactions()` is called automatically on network restore
- [ ] All three `ForwardingTransactionStatus` outcomes (Success, PartialSuccess, Failed) are handled
- [ ] `FAILED` forwarding outcomes are reported and recoverable (contact Handpoint Support)
- [ ] The stored transaction queue is shown in your merchant-facing UI (`getStoredTransactions()`)
- [ ] Merchants can see and optionally delete unforwarded transactions
- [ ] Your integration has been reviewed by Handpoint Integration Support
