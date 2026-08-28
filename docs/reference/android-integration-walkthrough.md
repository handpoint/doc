---
title: Android SDK — Integration Walkthrough
sidebar_position: 3
description: Production-ready integration requirements for the Handpoint Android SDK — initialization, transaction lifecycle, recovery, logging, and error handling.
---

# Android SDK — Integration Walkthrough

A production-ready integration has four non-negotiable requirements that must all be implemented before go-live:

1. **Initialization** — connect correctly and gate all operations behind `InitialisationComplete`
2. **Transaction lifecycle** — persist the reference before the result; check `operationStarted`
3. **Recovery** — poll `getTransactionStatus` for 90 seconds from operation start, regardless of network state
4. **Logging** — capture every SDK callback and every app-level outcome

The sections below walk through each requirement with the implementation pattern and the reasoning behind it.

---

## 1. Initialization

### Wire listeners before calling `init()`

SDK callbacks arrive before `init()` returns. Set your listener first:

```kotlin
HpSdk.listener = this   // must be set BEFORE init()
HpSdk.init(applicationContext)
```

### Wait for `InitialisationComplete` — not just `Connected`

Connection goes through two stages:

| Callback | Meaning | Safe to transact? |
|---|---|---|
| `connectionStatusChanged(Connected)` | Transport layer connected | **No** |
| `currentTransactionStatus(InitialisationComplete)` | Config synced, terminal ready | **Yes** |

Disable all transaction buttons until `InitialisationComplete` fires. If you call `sale()` before it, the SDK returns `CommandNotAllowed` and the operation is silently rejected.

```kotlin
override fun onInitialized() {
    runOnUiThread {
        btnSale.isEnabled = true
        // enable other transaction buttons
    }
}
```

### Run recovery on every `InitialisationComplete`

Every time initialization completes — including after a reconnect — check for any pending transaction reference from a previous session and start recovery polling immediately. See [Recovery](#4-recovery) below.

---

## 2. Transaction lifecycle

### The three-step sale

```kotlin
// Step 1 — call the operation
val result = api.sale(BigInteger.valueOf(amountMinorUnits), currency)

// Step 2 — check operationStarted BEFORE doing anything else
if (!result.operationStarted) {
    // SDK rejected the call (not initialized, another operation in progress, etc.)
    // Nothing started on the terminal — safe to show an error and let the merchant retry
    return
}

// Step 3 — persist the reference BEFORE waiting for the result
// If the app crashes or the connection drops between now and endOfTransaction,
// this reference is the only thing you need to recover the outcome.
val ref = result.transactionReference
persistToStorage(ref, timestamp = System.currentTimeMillis())
// → endOfTransaction() or transactionResultReady() will arrive asynchronously
```

:::caution `transactionReference` must be persisted to durable storage
`SharedPreferences`, a local database, or any storage that survives process death. Do not keep it only in memory. The recovery flow depends on reading this value after an app restart.
:::

---

## 3. Result handling

Results arrive in `endOfTransaction()`. Always use `runOnUiThread` — the callback fires on a background thread.

### `finStatus` reference

| finStatus | Meaning | Recommended action |
|---|---|---|
| `AUTHORISED` | Approved and settled | Fulfil the order; print the receipt from `customerReceipt` |
| `PROCESSED` | Approved (some acquirers use this instead of AUTHORISED) | Same as AUTHORISED |
| `DECLINED` | Card declined by acquirer | Display `finStatus` + `errorMessage` + acquirer `responseText` to the merchant. The merchant decides whether it is a soft decline worth retrying — do not make this decision in code. |
| `CANCELLED` | Cancelled by terminal or cardholder | Display the reason; safe to offer a retry |
| `FAILED` | Terminal-level error | Display `errorMessage`; log the full result; do not retry automatically |
| `UNDEFINED` | Outcome unknown — internet may have been lost | **Do not show a payment result.** Start recovery. See the message below. |
| `IN_PROGRESS` | Transaction still processing | Start or continue recovery polling |

### UNDEFINED — what to show the merchant

```
The result of this transaction is unknown.
Internet connection may have been lost during processing.

Retry processing the payment. During processing you will be
alerted if this transaction was already charged — if so, cancel
the new transaction (duplicate detected).
```

Never display `AUTHORISED` or `DECLINED` when `finStatus` is `UNDEFINED`. The outcome is genuinely unknown until recovery resolves it.

### Receipt printing

`customerReceipt` in `TransactionResult` contains either inline HTML or a hosted URL, depending on the `getReceiptsAsURLs` setting in `Settings`. Call `api.printReceipt(receiptData)` in either case — the SDK handles both forms.

Print only after `AUTHORISED` or `PROCESSED`. Never print for `UNDEFINED` or `IN_PROGRESS`.

---

## 4. Recovery

Recovery is **mandatory**. Every integration must implement it. Missing recovery means a transaction that was processed by the acquirer can be silently lost if the app crashes or the connection drops before `endOfTransaction` fires.

### How it works

```
app calls sale()
    → operationStarted = true
    → persist { ref, firstSeenAt = now() }     ← durable storage

[network drops, app restarts, or terminal disconnects]

app restarts → InitialisationComplete fires
    → read saved { ref, firstSeenAt }
    → call getTransactionStatus(ref)
    → result arrives in transactionResultReady()
```

### The 90-second rule

**Poll `getTransactionStatus` for at least 90 seconds from when `UNDEFINED` is first received** in `endOfTransaction` — not from when the operation was started.

Why the distinction matters: a slow card-present flow (slow PIN entry, chip fallback retries, sluggish acquirer) can take 45–60 seconds before `endOfTransaction` even fires. If the window started at operation start, it could be nearly exhausted by the time you begin recovery polling. Starting it at first-UNDEFINED gives the full 90 seconds for the gateway to resolve — which has been observed to take up to ~60 seconds in the field.

:::info Confirm the window with Handpoint
The 90-second value is based on observed field data at time of writing. Some acquirers or network conditions may require a longer window. Confirm the recommended value with your Handpoint integration team before go-live.
:::

| Condition | Action |
|---|---|
| `finStatus == IN_PROGRESS` | Always retry (within backoff window) |
| `finStatus == UNDEFINED` AND within 90s of **first UNDEFINED** | Retry — gateway may still be processing |
| `finStatus == UNDEFINED` AND past 90s AND **online** | Stop retrying. Outcome is unknown — surface to merchant for acquirer verification |
| `finStatus == UNDEFINED` AND **offline** | Keep retrying until the device comes back online |

### Implementation

```kotlin
// Stored when operationStarted == true
data class PendingTransaction(
    val ref: String,
    val undefinedFirstSeenAt: Long = 0L  // set when endOfTransaction fires with UNDEFINED
)

private val RECOVERY_WINDOW_MS = 90_000L

// Called on every InitialisationComplete
private fun recoverIfPending() {
    val pending = loadFromStorage() ?: return
    scheduleRecovery(pending, immediate = true)
}

private fun attemptRecovery(pending: PendingTransaction) {
    val t0 = pending.undefinedFirstSeenAt.takeIf { it > 0 } ?: System.currentTimeMillis()
    val elapsed = System.currentTimeMillis() - t0
    val windowRemaining = RECOVERY_WINDOW_MS - elapsed
    val online = isNetworkAvailable()

    log("[Recovery] ref=${pending.ref} elapsed=${elapsed}ms windowRemaining=${windowRemaining}ms online=$online")

    if (windowRemaining <= 0 && online) {
        // Window expired while online — outcome cannot be determined
        log("[Recovery] 90s window expired — escalate to acquirer for ref=${pending.ref}")
        clearStorage()
        notifyMerchant(OUTCOME_UNKNOWN)
        return
    }

    api.getTransactionStatus(pending.ref)
    // → result arrives in transactionResultReady()
}

override fun transactionResultReady(result: TransactionResult, device: Device) {
    val fin = result.finStatus.toString()

    if (fin == "UNDEFINED" && pending.undefinedFirstSeenAt == 0L) {
        // First UNDEFINED seen here (e.g. on app-restart recovery path)
        pending = pending.copy(undefinedFirstSeenAt = System.currentTimeMillis())
    }

    val elapsed = if (pending.undefinedFirstSeenAt > 0)
        System.currentTimeMillis() - pending.undefinedFirstSeenAt else 0L

    log("[Recovery] transactionResultReady finStatus=$fin windowElapsed=${elapsed}ms")

    if (fin == "UNDEFINED" || fin == "IN_PROGRESS") {
        scheduleRecovery(pending, immediate = false)
        return
    }

    clearStorage()
    handleFinalResult(result)
}
```

:::caution Storage migration
If you are adding recovery to an existing integration, existing queued transactions will not have `undefinedFirstSeenAt`. Set it to `System.currentTimeMillis()` when first loading from storage — this grants up to 90 additional seconds of polling for already-queued items rather than prematurely stopping retries.
:::

---

## 5. Logging

Logging is a support requirement, not a debugging convenience. When an issue reaches the support team, logs are the primary diagnostic tool. Capture everything.

### SDK callbacks — log all of them

Every SDK listener method should produce a log entry. Do not filter at the callback level.

```kotlin
// Log every currentTransactionStatus update — not just InitialisationComplete
override fun currentTransactionStatus(info: StatusInfo, device: Device) {
    log("[SDK] STATUS ${info.status} | ${info.message}")
    // ... your logic
}

// Log every connectionStatusChanged
override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
    log("[SDK] CONNECTION $status | device=${device.name} serial=${device.address}")
    // ... your logic
}

// Log the full TransactionResult on every endOfTransaction
override fun endOfTransaction(result: TransactionResult, device: Device) {
    logTransactionResult(result)
    // ... your logic
}

// Same for recovery deliveries
override fun transactionResultReady(result: TransactionResult, device: Device) {
    log("[SDK] transactionResultReady")
    logTransactionResult(result)
    // ... your logic
}
```

Log the full `TransactionResult` on every result — not just `finStatus`. The fields that matter most for support:

```kotlin
private fun logTransactionResult(result: TransactionResult) {
    log("""
        [TXN RESULT]
        finStatus         : ${result.finStatus}
        type              : ${result.type}
        totalAmount       : ${result.totalAmount} ${result.currency}
        requestedAmount   : ${result.requestedAmount}
        authorisationCode : ${result.authorisationCode}
        transactionID     : ${result.transactionID}
        originalEFTTxnID  : ${result.originalEFTTransactionID}
        cardSchemeName    : ${result.cardSchemeName}
        maskedCardNumber  : ${result.maskedCardNumber}
        cardEntryType     : ${result.cardEntryType}
        paymentScenario   : ${result.paymentScenario}
        verificationMethod: ${result.verificationMethod}
        issuerResponseCode: ${result.issuerResponseCode}
        errorMessage      : ${result.errorMessage}
        cardToken         : ${result.cardToken}
    """.trimIndent())
}
```

### App-level events to log

Log your own application's decisions alongside the SDK events. Support needs to understand the full picture, not just what the SDK did.

```kotlin
// When an operation starts
log("[APP] sale started | ref=${result.transactionReference} | amount=$amount | currency=$currency")

// When you persist the reference
log("[APP] persisted ref=${ref} to storage | firstSeenAt=${firstSeenAt}")

// When a result is saved to your database
log("[APP] order ${orderId} updated | finStatus=${result.finStatus} | txnId=${result.transactionID}")

// When recovery starts
log("[APP] recovery started | ref=${ref} | age=${elapsed}ms")

// On each recovery attempt
log("[APP] recovery attempt ${attempt} | ref=${ref} | windowRemaining=${windowRemaining}ms | online=$online")

// When recovery resolves
log("[APP] recovery resolved | ref=${ref} | finalStatus=${result.finStatus} | elapsed=${elapsed}ms")

// When recovery times out
log("[APP] recovery timeout — outcome unknown | ref=${ref} | total elapsed=${elapsed}ms")
```

### Logcat tags

When sending logs to Handpoint support, include output from all of these tags:

| Tag | What it contains |
|---|---|
| `HpSdk` | Your SDK wrapper log output |
| `HP-SDK-Detail` | SDK internal events |
| `SDK-Detailed-Logger` | Full SDK trace including HTTP requests/responses |

```bash
# Capture 30 minutes of relevant logs to a file
adb logcat -s HpSdk HP-SDK-Detail SDK-Detailed-Logger > sdk_logs.txt
```

Include the device serial number, SDK version (`BuildConfig.HP_SDK_VERSION`), and the approximate time of the issue when filing a support request.

---

## 6. Error handling reference

| Situation | What happens | What to do |
|---|---|---|
| `operationStarted == false` | SDK rejected the call — nothing started | Show error to merchant; safe to retry |
| `CommandNotAllowed` in `currentTransactionStatus` | Operation called before `InitialisationComplete` | Wait for `onInitialized()` before enabling buttons |
| `Configuration update failed` | SDK cannot sync config from cloud | Check SDK version vs device environment (RC = staging, stable = production) |
| `finStatus == DECLINED` | Acquirer declined | Show `finStatus` + `errorMessage` + `responseText`; let merchant decide whether to retry |
| `finStatus == UNDEFINED` | Outcome unknown | Run recovery; show UNDEFINED message to merchant |
| `finStatus` after 90s recovery still `UNDEFINED` | Gateway did not resolve | Surface to merchant; contact acquirer to confirm settlement before any retry |
| `errorMessage` non-null | Terminal-level error detail | Always log it; display to merchant if actionable |

---

## Production readiness checklist

Complete this before go-live. Every item is required.

**Initialization**
- [ ] Listener set before `init()` is called
- [ ] All transaction buttons disabled until `onInitialized()` fires
- [ ] `recoverIfPending()` called inside `onInitialized()` (every time, not just on first launch)

**Transaction lifecycle**
- [ ] `operationStarted` checked before any further action
- [ ] `transactionReference` + `firstSeenAt` persisted to durable storage when `operationStarted == true`
- [ ] Pending reference is cleared only when a terminal `finStatus` is received

**Recovery**
- [ ] `getTransactionStatus()` called on every `InitialisationComplete` when a pending ref exists
- [ ] `UNDEFINED` treated as "keep polling" for 90 seconds from `firstSeenAt`
- [ ] `UNDEFINED` while offline continues polling regardless of elapsed time
- [ ] After 90s + online + still `UNDEFINED`: surface to merchant for acquirer verification — do not silently fail
- [ ] `windowRemainingMs` logged on every recovery attempt

**Result handling**
- [ ] `UNDEFINED` never shown as a payment result to the customer
- [ ] `DECLINED` shows `finStatus` + `errorMessage` + `responseText` — merchant decides on retry
- [ ] Receipt printed only on `AUTHORISED` / `PROCESSED`

**Logging**
- [ ] Every SDK callback (`endOfTransaction`, `connectionStatusChanged`, `currentTransactionStatus`, `transactionResultReady`) produces a log entry
- [ ] Full `TransactionResult` logged on every result (all fields, not just `finStatus`)
- [ ] App-level events logged: operation start, storage persist, order update, recovery attempts, recovery resolution
- [ ] `windowRemainingMs` logged on each recovery attempt
