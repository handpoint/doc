---
title: Android SDK — Integration Walkthrough
sidebar_position: 3
description: Production-ready integration requirements for the Handpoint Android SDK — initialization, transaction lifecycle, recovery, logging, and error handling.
---

# Android SDK — Integration Walkthrough

A production-ready integration has four non-negotiable requirements that must all be implemented before go-live:

1. **Initialization** — connect correctly and gate all operations behind `InitialisationComplete`
2. **Transaction lifecycle** — persist the reference before the result; check `operationStarted`
3. **Recovery** — poll `getTransactionStatus` as a complementary safety net; keep polling for 90 seconds from when `UNDEFINED` is first received
4. **Logging** — capture every SDK callback and every app-level outcome

The sections below walk through each requirement with the implementation pattern and the reasoning behind it.

---

:::info This guide covers `ConnectionMethod.ANDROID_PAYMENT` (PAX SmartPOS integrated terminals)
**This guide covers `ConnectionMethod.ANDROID_PAYMENT` (PAX SmartPOS integrated terminals).** For HILITE Bluetooth terminals, implement `Events.MposRequired` instead — see the [HILITE Integration Guide](android-hilite-integration-walkthrough).
:::

:::tip PAX SmartPOS — the SDK owns the cardholder UI
On PAX SmartPOS, the SDK renders all cardholder-facing screens directly on the terminal display. Your host app receives **no callbacks and requires zero UI code** for:
- **PIN entry** — terminal-rendered, encrypted on-device
- **Signature capture** — terminal-rendered, accepted/rejected on-device
- **Duplicate transaction check** — terminal-rendered

`Events.SignatureRequired` is **not required** for a PAX-only integration — the terminal handles signature, PIN, and duplicate-check screens directly without involving the host app. However, implementing it is safe (the SDK ignores `signatureResult()` calls on PAX) and is recommended if you anticipate adding HiLite/Bluetooth support later. Call `api?.signatureResult(true)` if you implement it.
:::

## 1. Initialization

:::note HpSdk is an ISV-created wrapper, not an SDK class
The code samples in this guide use `HpSdk` as a singleton wrapper that the ISV creates and maintains. `HpSdk` is not part of the Handpoint SDK library — it is a pattern for encapsulating the SDK's `Hapi` interface, recovery state, and `SharedPreferences` persistence in one place. You may name it differently or structure it differently in your own project. The full reference implementation is in the [demo app](./android-demo-app.md).
:::

### Define your listener interface

`HpSdk` notifies the rest of your app through a listener interface you define. Declare it once and implement it in your Activity or ViewModel. If you declare it inside your `HpSdk` singleton object (as in the demo app), reference it as `HpSdk.SdkListener` from your Activity:

```kotlin
interface SdkListener {
    fun onLog(entry: String)
    fun onConnectionChanged(connected: Boolean)
    fun onInitialized()
    fun onTransactionStatusUpdate(status: String)
    fun onTransactionResult(result: TransactionResult)
    fun onRecoveryStarted(transactionReference: String)
    fun onRecoveryFailed(transactionReference: String)  // recovery could not resolve — either 90s elapsed while online, or no transaction reference was available to poll (app crashed before recordPending ran). In both cases surface "outcome unknown — verify with acquirer" to the merchant.
}
```

Your Activity implements `SdkListener` and sets itself as the listener before calling `init()`. The demo app uses this exact interface shape.

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
    // Note: if a pending recovery exists, onRecoveryStarted fires immediately after this callback
    // (queued on the same handler). Keep buttons enabled here — the requireNoRecovery() guard inside
    // each operation wrapper blocks new charges during recovery without requiring you to disable the UI.
    runOnUiThread {
        btnSale.isEnabled = true
        // enable other transaction buttons
    }
}
```

### Run recovery on every `InitialisationComplete`

Every time initialization completes — including after a reconnect — check for any pending transaction reference from a previous session and start recovery polling immediately. Load stored state before connecting so the reference is ready when the callback fires:

```kotlin
// BuildConfig is generated per project — add this import at the top of your file:
import com.yourcompany.yourapp.BuildConfig  // ← replace with your actual package name
fun init(context: Context) {
    if (api != null) {
        log("init() called again — skipping (already initialized)")
        return
    }
    appContext = context.applicationContext
    loadRecoveryState()    // ← MUST come before getAsyncInterface() and connect() so recoverIfPending() has the ref when InitialisationComplete fires
    val credentials = HandpointCredentials(
        BuildConfig.HANDPOINT_SHARED_SECRET,
        BuildConfig.HANDPOINT_CLOUD_API_KEY
    )
    val settings = com.handpoint.api.shared.Settings().apply { automaticReconnection = true }
    // The context parameter is accepted for API compatibility but not used internally —
    // the SDK provisions its own Application context via a ContentProvider at process start.
    // Passing Activity context, Application context, or null all behave identically.
    // We pass appContext (= context.applicationContext) here for consistency with how it is
    // used elsewhere in this singleton — either value is fine.
    api = HapiFactory.getAsyncInterface(this, appContext, credentials, settings)
    api?.connect(Device("PAX A920", "", "", ConnectionMethod.ANDROID_PAYMENT))
}
```

See [Recovery](#4-recovery) below for the full `recoverIfPending()` implementation.

---

## 2. Transaction lifecycle

:::caution Disable transaction buttons while recovery is active
While `recoveryRef != null || recoveryActive`, a pending transaction has an unknown outcome. Starting a new transaction before the previous one resolves creates a **double-charge risk** — the first transaction may have already been authorized. Keep all transaction buttons disabled until recovery resolves (either by calling `onTransactionResult()` or `onRecoveryFailed()`). The reference implementation enforces this with a `requireNoRecovery()` guard at the top of every operation call.

**Reversal and refund are also blocked during recovery.** If the merchant wants to reverse a possibly-authorized transaction, they must wait for recovery to resolve. Once `onTransactionResult()` fires with a confirmed `AUTHORISED` result, the reversal can be submitted. If `onRecoveryFailed()` fires (unknown outcome), the merchant must verify with the acquirer before deciding whether to reverse.
:::

### The three-step sale

```kotlin
// Step 1 — call the operation
// Amounts are always in minor units: 100 = $1.00, 1000 = $10.00
// api is Hapi? — use ?. and ?: return to handle the not-initialized case.
val result = api?.sale(BigInteger.valueOf(amountMinorUnits), currency) ?: return

// Step 2 — check operationStarted BEFORE doing anything else
if (!result.operationStarted) {
    // SDK rejected the call (another operation in progress, terminal not ready, etc.)
    // Nothing started on the terminal — safe to show an error and let the merchant retry
    return
}

// Step 3 — record the pending reference BEFORE waiting for the result
// If the app crashes or the connection drops between now and endOfTransaction,
// this reference is the only thing you need to recover the outcome.
//
// result.transactionReference (from OperationStartResult) is the recovery key.
// It is NOT the same as result.transactionID in TransactionResult — that is the
// acquirer-assigned ID only available after the transaction completes.
// Use transactionReference for getTransactionStatus(); use transactionID for your records.
// transactionReference can be null even when operationStarted == true in rare edge cases.
// If null, the transaction is unrecoverable via polling — log and alert the merchant.
val ref = result.transactionReference?.takeIf { it.isNotBlank() }
if (ref == null) {
    log("[APP] WARNING: operationStarted=true but transactionReference is null — cannot recover if connection drops")
    return
}
recordPending(ref)
// → endOfTransaction() or transactionResultReady() will arrive asynchronously
```

:::caution `transactionReference` must be persisted to durable storage
`SharedPreferences`, a local database, or any storage that survives process death. Do not keep it only in memory. The recovery flow depends on reading this value after an app restart.
:::

---

## 3. Result handling

Results arrive in `endOfTransaction()`. For `ConnectionMethod.ANDROID_PAYMENT` (PAX SmartPOS), the SDK fires callbacks on the **main thread** — no handler is needed. For `ConnectionMethod.BLUETOOTH` (HILITE/Datecs), callbacks arrive on a **background thread**; use `Handler(Looper.getMainLooper()).post { }` in your singleton wrapper since `runOnUiThread` is Activity-only API. If you want a single implementation that works for both, using a `mainHandler` is always safe:

:::note `mainHandler.post` vs direct listener calls
The code examples in this guide wrap all `listener?.onX()` calls — including `listener?.onLog()` inside `log()` — in `mainHandler.post { }`. This is safe for both PAX and HiLite. The [demo app](./android-demo-app.md) (`HpSdk.kt`) calls the listener directly without `mainHandler.post` because it is PAX-only and the SDK guarantees main-thread delivery for `ANDROID_PAYMENT`. If you are building a shared PAX+HiLite wrapper, keep `mainHandler.post` on all listener calls including `log()` — on HiLite, callbacks arrive on a background thread and calling UI APIs directly from them will crash.
:::

```kotlin
private val mainHandler = Handler(Looper.getMainLooper())

// ⚠️ This is a conceptual sketch — the full endOfTransaction with recovery logic
// is shown in Section 5 (Logging). Do NOT copy this stub; it omits recovery handling.
override fun endOfTransaction(result: TransactionResult, device: Device) {
    logTransactionResult(result)
    // Result handling:
    //   UNDEFINED → startRecovery(); do NOT call onTransactionResult
    //   terminal status → clearRecovery(); call onTransactionResult
    throw NotImplementedError("endOfTransaction: this sketch is intentionally incomplete — implement the full version from Section 5")
}
```

`endOfTransaction` and `transactionResultReady` are complementary delivery paths. **`endOfTransaction` is always authoritative** — it does not need an idempotency guard. When it fires with a terminal `finStatus`, it cancels recovery (`recoveryHandler.removeCallbacks(…)`) before any further `getTransactionStatus` poll can be scheduled. The duplicate-delivery guard lives only in `transactionResultReady` (see [Recovery](#4-recovery)), where it catches the case where `endOfTransaction` delivered the result while a `getTransactionStatus` request was already in-flight.

:::note Comparing `finStatus` — enum vs string
For simple statuses guaranteed to be named constants in your SDK version (`AUTHORISED`, `PROCESSED`, `DECLINED`, `CANCELLED`, `FAILED`), `result.finStatus == FinancialStatus.AUTHORISED` is type-safe. For statuses that may not be exposed as named constants in all SDK versions (`UNDEFINED`, `IN_PROGRESS`, `AUTHORISED_DEFERRED`), use `.toString()`. For partial approvals, always use `.toString()` for both names — `PARTIALLY_APPROVED` and `PARTIAL_APPROVAL` are distinct values and the correct name varies by acquirer, so `result.finStatus == FinancialStatus.PARTIALLY_APPROVED` alone misses half the cases. Using `.toString()` everywhere is safe and is what the reference implementation does.

`endOfTransaction` fires **at most once per transaction** — the SDK guarantees it does not retry delivery on the same terminal result. This is why `endOfTransaction` needs no idempotency guard against duplicate delivery: the SDK cannot call it twice for the same result. The idempotency guard in `transactionResultReady` exists for a different reason: catching the case where `endOfTransaction` has already resolved recovery before a concurrent `getTransactionStatus` response arrives.
:::

### `finStatus` reference

| finStatus | Meaning | Recommended action |
|---|---|---|
| `AUTHORISED` | Approved — settlement occurs at batch close (typically end-of-day) | Fulfil the order; print the receipt from `customerReceipt` |
| `PROCESSED` | Approved (some acquirers use this instead of AUTHORISED) | Same as AUTHORISED |
| `DECLINED` | Card declined by acquirer | Display `finStatus` + `errorMessage` + `statusMessage` to the merchant. The merchant decides whether it is a soft decline worth retrying — do not make this decision in code. |
| `CANCELLED` | Cancelled by terminal or cardholder | Display the reason; safe to offer a retry |
| `FAILED` | Terminal-level error | Display `errorMessage`; log the full result; do not retry automatically |
| `PARTIALLY_APPROVED` / `PARTIAL_APPROVAL` | Card approved for less than requested (e.g. prepaid with insufficient balance). **Both names may appear** — acquirers vary which they return. These are distinct enum constants; check for both: `result.finStatus.toString().let { it == "PARTIALLY_APPROVED" \|\| it == "PARTIAL_APPROVAL" }` | Fulfil at the approved amount; prompt customer for remaining balance via another tender |
| `REFUNDED` | Refund processed successfully | Record refund; print receipt |
| `CAPTURED` | Pre-auth captured successfully | Fulfil order; print receipt |
| `UNDEFINED` | Outcome unknown — internet may have been lost | **Do not show a payment result.** Start recovery. See the message below. |
| `IN_PROGRESS` | Transaction still processing — never appears in `endOfTransaction`. Arrives via `transactionResultReady()` either as a `getTransactionStatus()` response or via `autoRecoverTransactionResult` on reconnect | Continue recovery polling in `transactionResultReady()` |
| `AUTHORISED_DEFERRED` | Offline deferred auth — treat as successful, settles later | Treat as `AUTHORISED` — fulfil order; receipt available; no recovery needed. Use `.toString() == "AUTHORISED_DEFERRED"` — this value may not be exposed as a named `FinancialStatus` constant in all SDK versions. |

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

---

#### Overview

The SDK provides two receipt formats and three delivery mechanisms. Choosing the right combination determines whether printing is fast, whether it requires a network fetch, and whether it works when `receiptsAsURLs` is enabled.

| Setting | `customerReceipt` in `TransactionResult` | Ready when |
|---|---|---|
| `receiptsAsURLs = false` (default) | Inline HTML string | Immediately at `endOfTransaction` |
| `receiptsAsURLs = true` | Cloud URL (`https://receipts.handpoint.com/...`) | **4–8 s after `endOfTransaction`** (S3 upload completes) |

**When to print:** print for terminal statuses only. Never print for `UNDEFINED` or `IN_PROGRESS`.

| Print? | finStatus |
|---|---|
| ✓ Yes | `AUTHORISED`, `PROCESSED`, `REFUNDED`, `CAPTURED`, `PARTIALLY_APPROVED`, `PARTIAL_APPROVAL`, `AUTHORISED_DEFERRED` |
| ✗ No | `UNDEFINED`, `IN_PROGRESS` |
| ⚠️ Acquirer-dependent | `DECLINED` — some acquirers return a non-null `customerReceipt` (a "declined" slip for the cardholder). Check your acquirer contract and print when present. `CANCELLED` and `FAILED` do not produce printable receipts. |

---

#### Option 1 — `Events.ReceiptEvent` (recommended, ~1.5 s, inline HTML)

`receiptIsReady()` fires approximately 1.5 seconds after `endOfTransaction` and delivers the **full receipt HTML directly** — no URL fetch, no S3 wait. This is the lowest-latency path and works regardless of the `receiptsAsURLs` setting.

```kotlin
class MyDelegate : Events.SmartposRequired, Events.ReceiptEvent {

    override fun receiptIsReady(guid: String, merchantReceipt: String, customerReceipt: String) {
        // customerReceipt is the full HTML — pass directly to printReceipt()
        val printed = api?.printReceipt(customerReceipt)
        if (printed != true) {
            log("printReceipt rejected (returned=$printed)")
        }
    }
}
```

`receiptIsReady()` fires even when `receiptsAsURLs = true`. In that case, the HTML strings it delivers may differ slightly from the hosted versions — use this path only if you do not need the hosted URL itself (e.g. for email delivery or a web receipt link).

---

#### Option 2 — `Events.ReceiptUploadingEvent` (URL confirmed, ~4–8 s)

`receiptsUploaded()` fires once both receipts finish uploading to S3. The URLs it returns are immediately accessible (HTTP 200 guaranteed). Use this when you need the hosted URL — for email delivery, a "view receipt" link, or any flow that fetches the URL programmatically.

```kotlin
class MyDelegate : Events.SmartposRequired, Events.ReceiptUploadingEvent {

    override fun receiptsUploaded(guid: String, merchantUrl: String, customerUrl: String) {
        // customerUrl is now safe to fetch or pass to printReceipt()
        val printed = api?.printReceipt(customerUrl)
        if (printed != true) {
            log("printReceipt rejected (returned=$printed)")
        }
    }
}
```

:::caution Do NOT use `result.customerReceipt` from `endOfTransaction` when `receiptsAsURLs = true`
`result.customerReceipt` contains the URL immediately, but **the URL returns HTTP 404 for 4–8 seconds** while the SDK uploads to S3. Passing it to `printReceipt()` from `endOfTransaction` silently fails. Always wait for `receiptsUploaded()` before using the URL.
:::

---

#### Option 3 — `endOfTransaction` with inline HTML (default mode only)

When `receiptsAsURLs = false` (the default), `result.customerReceipt` is inline HTML and is safe to use immediately from `endOfTransaction`. This is the simplest path if you do not need hosted URLs.

```kotlin
override fun endOfTransaction(result: TransactionResult, device: Device) {
    val fin = result.finStatus.toString()
    // DECLINED: some acquirers return a non-null customerReceipt (a declined slip) — include it
    // so it prints when present. CANCELLED and FAILED do not produce printable receipts.
    val shouldAttemptPrint = fin == "AUTHORISED" || fin == "PROCESSED" || fin == "REFUNDED" ||
        fin == "CAPTURED" || fin == "PARTIALLY_APPROVED" || fin == "PARTIAL_APPROVAL" ||
        fin == "AUTHORISED_DEFERRED" || fin == "DECLINED"
    if (shouldAttemptPrint) {
        result.customerReceipt?.let { receipt ->
            val printed = api?.printReceipt(receipt)
            if (printed != true) {
                log("printReceipt rejected (returned=$printed)")
            }
        }
    }
    // Do NOT print for UNDEFINED or IN_PROGRESS
}
```

---

#### `printReceipt()` return value and error handling

`api?.printReceipt(receiptData: String): Boolean` returns:

| Return value | Meaning |
|---|---|
| `true` | Print job accepted by the terminal |
| `false` | Terminal rejected the print (busy, paper out, format unsupported) |
| `null` | `api` is null — SDK not initialized |

A `false` return does NOT mean printing failed completely — the terminal may have queued it. However, `false` from a PAX terminal typically means the printer is unavailable at that moment. Common causes:

| Symptom | Likely cause |
|---|---|
| `false` immediately after `endOfTransaction` with `receiptsAsURLs = true` | Receipt URL not yet live — switch to `Events.ReceiptEvent` or `Events.ReceiptUploadingEvent` |
| `false` consistently | Terminal printer is busy (previous print still in progress) or paper is out |
| `null` | `api.printReceipt()` called before `InitialisationComplete` |
| Silent failure (returns `true` but nothing prints) | Invalid HTML passed — verify the string is non-empty and well-formed |

---

#### Manual receipt printing

To print a receipt on demand (e.g. from a "Reprint" button), call `api.printReceipt()` with the last receipt you cached:

```kotlin
private var lastCustomerReceipt: String? = null

// In receiptIsReady() or receiptsUploaded() — cache the receipt
lastCustomerReceipt = customerReceipt  // or customerUrl for URL mode

// In your "Reprint" button handler
fun reprintReceipt() {
    val receipt = lastCustomerReceipt ?: return
    val printed = api?.printReceipt(receipt)
    if (printed != true) toast("Printer unavailable")
}
```

The SDK does not cache receipts — if you need reprint capability, your app must store the last receipt string or URL.

---

:::note Receipt printing in the demo app
The reference demo (`HpSdk.kt`) exposes `printReceipt(receiptData: String)` as a public method. The receipt call itself is made in `MainActivity.onTransactionResult()`, which passes `result.customerReceipt` (when non-null) to `HpSdk.printReceipt()` after every terminal result delivered to `onTransactionResult()`. This works for the default `receiptsAsURLs = false` mode. If you enable `receiptsAsURLs = true`, replace this with either `Events.ReceiptEvent` or `Events.ReceiptUploadingEvent` as shown above.
:::

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

:::note `autoRecoverTransactionResult` interaction
`Settings.autoRecoverTransactionResult = true` (the default) causes the SDK to deliver stored results via `transactionResultReady()` automatically on reconnect — without your app calling `getTransactionStatus()`. This can fire before `recoverIfPending()` has a chance to run.

If `autoRecoverTransactionResult` delivers `UNDEFINED` in `transactionResultReady`, the implementation below: (a) initializes `recoveryStartMs` from that timestamp (the 90-second window starts here), and (b) sets `recoveryActive = true`. When `endOfTransaction` subsequently fires `UNDEFINED`, it sees `recoveryActive == true` and takes the "re-schedule only" branch — it does **not** reset `recoveryStartMs`. The 90-second window is therefore measured from `transactionResultReady`'s `UNDEFINED` timestamp, not from `endOfTransaction`'s. This is correct: the window starts when uncertainty is first observed, regardless of which callback delivers it.
:::

### `getTransactionStatus` is complementary, not a replacement

`getTransactionStatus` runs **alongside** the SDK's own result delivery via `endOfTransaction` — it does not replace it. Both paths are active simultaneously:

- **Normal path**: `endOfTransaction` fires with a terminal `finStatus` (AUTHORISED, DECLINED, etc.) — this is the primary delivery. When it arrives, cancel any in-flight recovery polling.
- **Recovery path**: `endOfTransaction` fires with `UNDEFINED` — start polling `getTransactionStatus`. The result arrives via `transactionResultReady`.

Whichever path delivers a terminal result first is the result. The app must handle both paths and avoid processing the same result twice (see the [implementation](#implementation) section below for how to guard against this).

:::tip Field data — how fast does the cloud resolve?
In a documented real-world case (PAX A80, chip card, EUR 285): the transaction started, the card was tapped, and the result was in the Handpoint Cloud **15 seconds later**. The ISV's app failed to receive it, retried on a second terminal, and reversed the original. `getTransactionStatus` polling at 5-second intervals would have found the AUTHORISED result on the second or third poll — no reversal needed.

In connectivity-loss cases, the terminal retries pushing the result after it comes back online. Once the result is in the cloud, a single `getTransactionStatus` call resolves it regardless of the original delivery failure.
:::

### The 90-second rule

**Poll `getTransactionStatus` for at least 90 seconds from when `UNDEFINED` is first received** — in either `transactionResultReady` (when `autoRecoverTransactionResult` delivers it on reconnect) or `endOfTransaction`, whichever fires first — not from when the operation was started.

Why the distinction matters: a slow card-present flow (slow PIN entry, chip fallback retries, sluggish acquirer) can take 45–60 seconds before `endOfTransaction` even fires. If the window started at operation start, it could be nearly exhausted by the time you begin recovery polling. Starting it at first-UNDEFINED gives the full 90 seconds for the gateway to resolve its internal state.

:::info Confirm the window with Handpoint
The 90-second value is a conservative buffer. Under normal conditions, results appear in the cloud within 15–30 seconds. The window covers the tail case where the gateway itself is still processing. Confirm the recommended value with your Handpoint integration team before go-live.
:::

| Condition | Action |
|---|---|
| `finStatus == IN_PROGRESS` | Always retry (within backoff window) |
| `finStatus == UNDEFINED` AND within 90s of **first UNDEFINED** | Retry — gateway may still be processing |
| `finStatus == UNDEFINED` AND past 90s AND **online** | Stop retrying. Outcome is unknown — surface to merchant for acquirer verification |
| `finStatus == UNDEFINED` AND **offline** | Keep retrying until the device comes back online |
| `finStatus == AUTHORISED_DEFERRED` | Terminal offline-auth result — treat as successful. `transactionResultReady()` delivers it, does not set UNDEFINED, and clears recovery normally. No special handling needed. |

### Implementation

:::note All code below belongs inside your `HpSdk` singleton object
The declarations and `override fun` methods shown below must live inside a Kotlin `object` (or class) that implements `Events.SmartposRequired`. They cannot be top-level file declarations — `override` at file scope is a compile error. See the demo app's `object HpSdk : Events.SmartposRequired, ...` for the full wrapper.
:::

:::note Cross-section dependencies
- The recovery functions in this section (`recoverIfPending`, `startRecovery`, `attemptRecovery`, `scheduleRecovery`) call `log()` and `logTransactionResult()`, which are both defined in **Section 5**. Add the Section 5 helpers before adding these recovery functions, or add all sections together — otherwise you get "Unresolved reference: log" and "Unresolved reference: logTransactionResult".
- The `endOfTransaction` implementation in Section 5 calls `startRecovery()` (defined in this section). Both sections must be present together in the same singleton object.
:::

```kotlin
import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import android.os.Build
import android.os.Handler
import android.os.Looper
import android.util.Log
import com.handpoint.api.Hapi
import com.handpoint.api.HapiFactory
import com.handpoint.api.HandpointCredentials
import com.handpoint.api.shared.ConnectionMethod
import com.handpoint.api.shared.ConnectionStatus
import com.handpoint.api.shared.Currency
import com.handpoint.api.shared.Device
import com.handpoint.api.shared.Events
// import com.handpoint.api.shared.FinancialStatus  // uncomment only if using direct enum comparisons; examples here use .toString() throughout
import com.handpoint.api.shared.LogLevel
import com.handpoint.api.shared.OperationStartResult
// com.handpoint.api.shared.Settings — used as a FQN below to avoid collision with
// android.provider.Settings. Do not add a short import for Settings if you also import
// android.provider.Settings — use com.handpoint.api.shared.Settings() at each use site.
import com.handpoint.api.shared.StatusInfo
import com.handpoint.api.shared.TransactionResult
import com.handpoint.api.shared.options.Options
import com.handpoint.api.shared.options.SaleOptions
import com.handpoint.api.shared.options.MoToOptions
import com.handpoint.api.shared.options.MoToChannel
import com.handpoint.api.shared.options.SaleAndTokenizeOptions
import com.handpoint.api.shared.options.MerchantAuth
import com.handpoint.api.shared.options.Credential
import java.math.BigInteger
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

// ── Singleton state ───────────────────────────────────────────────────────────
// api is nullable (Hapi?) in the singleton pattern — use safe-call (?.) for every access.
// The Setup doc's Activity example uses `lateinit var api: Hapi` (non-nullable) — a different
// pattern that is simpler for illustration but not safe across Activity re-creation.
// In a Kotlin object singleton, nullable + safe-call is the correct approach.
private var api: Hapi? = null
private lateinit var appContext: Context   // set in init() — use applicationContext to avoid leaks
private val mainHandler = Handler(Looper.getMainLooper())
var listener: SdkListener? = null
var connected: Boolean = false; private set
var initialized: Boolean = false; private set
var lastTransactionId: String? = null; private set

// ── Recovery state ────────────────────────────────────────────────────────────
private const val RECOVERY_WINDOW_MS   = 90_000L
private const val INITIAL_RETRY_MS     = 5_000L
private const val MAX_RETRY_MS         = 30_000L
private const val PREFS_NAME           = "AppRecovery"  // example name — pick any string; must be consistent across your app (HpSdk.kt demo uses "HpSdkRecovery")
private const val PREFS_KEY_REF        = "pendingRef"
private const val PREFS_KEY_START      = "pendingStartMs"  // epoch ms when recovery window started (set on first UNDEFINED, IN_PROGRESS, or crash restart — never at operation start)

private var recoveryRef: String? = null
private var recoveryStartMs: Long = 0L
private var recoveryNextDelayMs: Long = INITIAL_RETRY_MS
private var recoveryActive: Boolean = false

private val recoveryHandler = Handler(Looper.getMainLooper())
private val recoveryRunnable = Runnable { attemptRecovery() }

// ── Called on every InitialisationComplete ────────────────────────────────────

private fun recoverIfPending() {
    val ref = recoveryRef ?: return
    // If the app crashed before UNDEFINED was seen, recoveryStartMs was never set.
    // Persist immediately so a second crash doesn't grant another fresh window.
    if (recoveryStartMs == 0L) {
        recoveryStartMs = System.currentTimeMillis()
        saveRecoveryState()
    }
    val elapsed = System.currentTimeMillis() - recoveryStartMs
    log("[Recovery] pending ref=$ref found on init (windowAge=${elapsed}ms)")
    // Always reset the backoff before the immediate poll. If autoRecoverTransactionResult
    // delivered UNDEFINED in transactionResultReady first, that already doubled
    // recoveryNextDelayMs. Reset it so the sequence is 0→10→20→30, not 0→20→30→30.
    recoveryNextDelayMs = INITIAL_RETRY_MS
    // Guard against double-notification: transactionResultReady already set recoveryActive = true
    // AND called onRecoveryStarted via the autoRecoverTransactionResult path before this runs.
    if (!recoveryActive) {
        recoveryActive = true
        // mainHandler.post ensures the callback fires on the main thread for HiLite/Bluetooth.
        // For a PAX-only build the SDK already delivers on main; HpSdk.kt omits the post.
        mainHandler.post { listener?.onRecoveryStarted(ref) }
    } else {
        log("[Recovery] already active (autoRecoverTransactionResult path) — onRecoveryStarted already sent, skipping duplicate")
    }
    scheduleRecovery(immediate = true)
}

// ── Note on `startRecovery()` helper ─────────────────────────────────────────────
// This walkthrough defines a named `startRecovery(ref: String)` helper called from
// `endOfTransaction`. The demo app (HpSdk.kt) inlines the same logic directly inside
// `endOfTransaction` — both approaches produce identical runtime behavior. The walkthrough
// wraps listener callbacks in `mainHandler.post {}` for HiLite/PAX compatibility; HpSdk.kt
// calls them directly because PAX delivers on the main thread (see Section 3 note).

// ── Called by endOfTransaction when finStatus == UNDEFINED ────────────────────

private fun startRecovery(ref: String) {
    recoveryRef = ref  // ref was already set by recordPending(); reassigning here makes startRecovery self-contained
    recoveryStartMs = System.currentTimeMillis()  // window starts NOW, at first UNDEFINED
    recoveryNextDelayMs = INITIAL_RETRY_MS
    saveRecoveryState()  // persist BEFORE recoveryActive = true — crash between the two must not grant a fresh window
    recoveryActive = true
    log("[Recovery] started for ref=$ref")
    mainHandler.post { listener?.onRecoveryStarted(ref) }
    scheduleRecovery(immediate = false)
}

// ── Polling ───────────────────────────────────────────────────────────────────

private fun attemptRecovery() {
    val ref = recoveryRef ?: return
    val elapsed = System.currentTimeMillis() - recoveryStartMs
    val windowRemaining = RECOVERY_WINDOW_MS - elapsed
    val online = isNetworkAvailable()

    log("[Recovery] attempt ref=$ref elapsed=${elapsed}ms windowRemaining=${windowRemaining}ms online=$online")

    if (windowRemaining <= 0 && online) {
        // 90s window expired while online — gateway will not resolve further
        log("[Recovery] 90s window expired — outcome unknown for ref=$ref")
        clearRecovery()
        // Notify the merchant: outcome unknown, contact acquirer before retrying
        mainHandler.post { listener?.onRecoveryFailed(ref) }
        return
    }

    // getTransactionStatus() returns true if submitted, false if SDK rejected the request
    if (api?.getTransactionStatus(ref) != true) {
        log("[Recovery] getTransactionStatus rejected — retrying after backoff")
        scheduleRecovery(immediate = false)
    }
    // → on success, result arrives in transactionResultReady()
}

private fun scheduleRecovery(immediate: Boolean) {
    recoveryHandler.removeCallbacks(recoveryRunnable)
    val delay = if (immediate) 0L else recoveryNextDelayMs
    // When immediate=true, delay is always 0 (not from recoveryNextDelayMs). In both paths,
    // recoveryNextDelayMs is then doubled for the next call.
    // Sequences: immediate=true → 0s→10s→20s→30s; immediate=false → 5s→10s→20s→30s.
    // Note: these sequences are best-effort. If transactionResultReady(UNDEFINED) arrives
    // and calls scheduleRecovery(immediate=false) before the 0ms runnable fires (the
    // autoRecoverTransactionResult race), the first poll shifts to 10s. Similarly, if both
    // transactionResultReady and endOfTransaction deliver UNDEFINED for the same episode,
    // endOfTransaction's re-schedule uses an already-doubled recoveryNextDelayMs. Recovery
    // still completes within the 90s window in all cases.
    recoveryNextDelayMs = minOf(recoveryNextDelayMs * 2, MAX_RETRY_MS)
    log("[Recovery] next attempt in ${delay}ms")
    recoveryHandler.postDelayed(recoveryRunnable, delay)
}

// ── Result delivery ───────────────────────────────────────────────────────────

override fun transactionResultReady(result: TransactionResult, device: Device) {
    log("[SDK] transactionResultReady")
    logTransactionResult(result)

    val fin = result.finStatus.toString()

    // Guard: if recovery was already cleared (e.g. endOfTransaction delivered the
    // terminal result first while a getTransactionStatus was in-flight), skip this.
    // getTransactionStatus is complementary — whichever path arrives first wins.
    if (recoveryRef == null && !recoveryActive) {
        log("[Recovery] transactionResultReady — already resolved, skipping duplicate")
        return
    }

    // IN_PROGRESS never appears in endOfTransaction. It arrives via transactionResultReady()
    // either as a getTransactionStatus() response or via autoRecoverTransactionResult on reconnect.
    // transactionResultReady() is the delivery point for getTransactionStatus() responses,
    // so this is the correct place to handle it.
    if (fin == "UNDEFINED" || fin == "IN_PROGRESS") {
        // Initialize recoveryStartMs for BOTH UNDEFINED and IN_PROGRESS: if
        // autoRecoverTransactionResult=true fires this before recoverIfPending() runs,
        // recoveryStartMs may still be 0. The timestamp MUST be persisted before
        // recoveryActive is set, so a crash between the two doesn't grant a fresh window.
        if (recoveryStartMs == 0L) {
            recoveryStartMs = System.currentTimeMillis()
            saveRecoveryState()  // persist BEFORE recoveryActive = true (SDK requirement)
        }
        // Arm recoveryActive and notify the listener so that:
        // (a) endOfTransaction(UNDEFINED) takes the "re-schedule only" branch, and
        // (b) the listener receives onRecoveryStarted even when autoRecoverTransactionResult
        //     fires transactionResultReady before recoverIfPending() runs.
        // recoveryRef != null is guaranteed here: the guard above returns when BOTH
        // recoveryRef == null AND !recoveryActive, so with !recoveryActive, ref is set.
        if (!recoveryActive) {
            recoveryActive = true
            mainHandler.post { listener?.onRecoveryStarted(recoveryRef!!) }
            log("[Recovery] transactionResultReady arming recovery — onRecoveryStarted delivered")
        }
        log("[Recovery] still pending (finStatus=$fin) — scheduling next attempt")
        scheduleRecovery(immediate = false)
        return
    }

    log("[Recovery] resolved via polling (finStatus=$fin ref=$recoveryRef)")
    clearRecovery()
    lastTransactionId = result.transactionID?.takeIf { it.isNotBlank() }
    mainHandler.post { listener?.onTransactionResult(result) }
}

// ── Storage helpers ───────────────────────────────────────────────────────────

private fun recordPending(ref: String) {
    recoveryRef = ref
    recoveryStartMs = 0L  // set when UNDEFINED first received in transactionResultReady OR endOfTransaction, not at operation start
    recoveryNextDelayMs = INITIAL_RETRY_MS
    recoveryActive = false
    saveRecoveryState()
    log("[Recovery] recorded pending ref=$ref")
}

private fun clearRecovery() {
    recoveryHandler.removeCallbacks(recoveryRunnable)
    recoveryRef = null
    recoveryStartMs = 0L
    recoveryNextDelayMs = INITIAL_RETRY_MS
    recoveryActive = false
    clearRecoveryPrefs()
}

private fun saveRecoveryState() {
    appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit()
        .putString(PREFS_KEY_REF, recoveryRef)
        .putLong(PREFS_KEY_START, recoveryStartMs)
        .apply()
}

private fun clearRecoveryPrefs() {
    appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit()
        .remove(PREFS_KEY_REF).remove(PREFS_KEY_START).apply()
}

private fun loadRecoveryState() {
    val prefs = appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    recoveryRef = prefs.getString(PREFS_KEY_REF, null)
    recoveryStartMs = prefs.getLong(PREFS_KEY_START, 0L)
}

// ── Network check ─────────────────────────────────────────────────────────────

private fun isNetworkAvailable(): Boolean {
    val cm = appContext.getSystemService(Context.CONNECTIVITY_SERVICE) as? ConnectivityManager
        ?: return true
    return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        cm.activeNetwork?.let { net ->
            cm.getNetworkCapabilities(net)?.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
        } == true
    } else {
        @Suppress("DEPRECATION")
        cm.activeNetworkInfo?.isConnected == true
    }
}
```

:::caution `loadRecoveryState()` must be called before `getAsyncInterface()` and `connect()`
`recoverIfPending()` fires inside `InitialisationComplete`, which arrives during or immediately after `api?.connect()`. If `loadRecoveryState()` has not yet been called at that point, `recoveryRef` is null and recovery silently skips. Always call `loadRecoveryState()` before both `HapiFactory.getAsyncInterface()` and `api?.connect()`.
:::

:::caution Storage migration
If you are adding recovery to an existing integration, existing queued transactions will not have `pendingStartMs` stored in `SharedPreferences`. Set `recoveryStartMs` to `System.currentTimeMillis()` when first loading from storage — this grants up to 90 additional seconds of polling for already-queued items rather than prematurely stopping retries.
:::

---

## 5. Logging

Logging is a support requirement, not a debugging convenience. When an issue reaches the support team, logs are the primary diagnostic tool. Capture everything.

### `log()` helper

All logging flows through a single helper that timestamps the entry and forwards it to the listener (for in-app display) and to Logcat:

```kotlin
private val TAG = "HpSdk"

// `log()` is declared private here. The demo app (HpSdk.kt) makes it public so that
// MainActivity can call HpSdk.log() directly — a deliberate trade-off for clarity in
// a minimal reference app. In production, route all app-level log calls through the
// SdkListener.onLog() interface to preserve encapsulation.
//
// A new SimpleDateFormat instance is created on each call — this is intentional.
// Sharing a single instance across threads is not thread-safe; creating a new one each
// call is safe but slightly slower. For high-frequency logging, switch to java.time
// (available via the coreLibraryDesugaring dependency already declared in your Gradle file).
private fun log(message: String) {
    val ts = SimpleDateFormat("HH:mm:ss.SSS", Locale.US).format(Date())
    val entry = "[$ts] $message"
    Log.d(TAG, entry)
    mainHandler.post { listener?.onLog(entry) }
}
```

### SDK callbacks — log all of them

Every SDK listener method should produce a log entry. Do not filter at the callback level.

```kotlin
// Log every currentTransactionStatus update — not just InitialisationComplete
override fun currentTransactionStatus(info: StatusInfo, device: Device) {
    log("[SDK] STATUS ${info.status} | ${info.message ?: ""}")
    // Deliver every status update to the listener so the Activity can update its UI
    // (e.g. "Card inserted", "PIN entry", "Contactless detected", "UserCancelled").
    mainHandler.post { listener?.onTransactionStatusUpdate(info.status.toString()) }
    if (info.status == StatusInfo.Status.InitialisationComplete) {
        initialized = true
        api?.setLogLevel(LogLevel.Info)
        log("✓ InitialisationComplete — SDK ready")
        mainHandler.post { listener?.onInitialized() }
        recoverIfPending()
    }
    // StatusInfo.Status.UserCancelled fires when stopCurrentTransaction() was accepted.
    // The next endOfTransaction will have finStatus == CANCELLED. Use this callback to
    // dismiss any "waiting for card" overlay before the final result arrives.
}

// Reset the initialized gate on disconnect — re-gate until the next InitialisationComplete.
// ConnectionStatus values:
//   Connected        — transport layer connected (not yet ready for transactions)
//   CloudConnected   — cloud mode: transport + cloud session both established
//   Disconnected     — connection lost; reset gate and wait for next InitialisationComplete
//   NotConfigured    — device not recognized as a supported PAX model (wrong hardware or
//                      Build.MODEL not in SDK's known terminal list); check abiFilters and
//                      that the app is running on a supported PAX device
override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
    connected = (status == ConnectionStatus.Connected || status == ConnectionStatus.CloudConnected)
    if (status == ConnectionStatus.Disconnected) initialized = false
    log("[SDK] CONNECTION $status | device=${device.name}")
    mainHandler.post { listener?.onConnectionChanged(connected) }
}

// ── Reconnecting ──────────────────────────────────────────────────────────────
// `disconnect()` does NOT set api = null. init() guards on `api != null` and returns
// immediately, so calling init() after a voluntary disconnect is a no-op.
// To reconnect after disconnect(), call api?.connect(device) directly:
//
//   fun reconnect(device: Device) {
//       initialized = false   // re-gate before connecting so no operations slip through
//       connected = false
//       api?.connect(device)  // bypasses the init() guard; next InitialisationComplete re-arms
//   }
//
// The next InitialisationComplete (via currentTransactionStatus) re-sets initialized = true
// and re-runs recoverIfPending() for any pending references.

// Log the full TransactionResult on every endOfTransaction
override fun endOfTransaction(result: TransactionResult, device: Device) {
    logTransactionResult(result)
    val fin = result.finStatus.toString()
    when {
        fin == "UNDEFINED" -> {
            if (!recoveryActive) {
                val ref = recoveryRef
                if (ref == null) {
                    // App crashed before recordPending() ran — no reference to poll with.
                    // Do not set recoveryActive=true (that would block all future transactions).
                    // Immediately surface to merchant: outcome unknown, verify with acquirer.
                    log("[Recovery] UNDEFINED but no pending reference — cannot poll, surfacing to merchant")
                    mainHandler.post { listener?.onRecoveryFailed("unknown") }
                } else {
                    startRecovery(ref)
                }
            } else {
                log("[Recovery] still UNDEFINED — re-scheduling")
                scheduleRecovery(immediate = false)
            }
            return
        }
        // IN_PROGRESS never appears in endOfTransaction. It arrives via transactionResultReady()
        // only — either from getTransactionStatus() or via autoRecoverTransactionResult. No branch needed here.
        // FAILED falls through to clearRecovery() + onTransactionResult() — this is correct.
        // The merchant receives the full TransactionResult including errorMessage for display.
        fin == "AUTHORISED_DEFERRED" -> {
            // Offline/deferred auth. Treat as successful — the transaction is stored
            // and will be settled when the device reconnects. Show success UI.
            if (recoveryActive) log("[Recovery] resolved via endOfTransaction (finStatus=$fin)")
            clearRecovery()
            lastTransactionId = result.transactionID?.takeIf { it.isNotBlank() }
            mainHandler.post { listener?.onTransactionResult(result) }
            return
        }
    }
    if (recoveryActive) log("[Recovery] resolved via endOfTransaction (finStatus=$fin)")
    clearRecovery()
    lastTransactionId = result.transactionID?.takeIf { it.isNotBlank() }
    mainHandler.post { listener?.onTransactionResult(result) }
}

// transactionResultReady — see the Recovery section above for the full implementation.
// Do NOT redeclare this override here; merging a stub with the full recovery implementation
// will replace the recovery logic with a no-op.
```

Log the full `TransactionResult` on every result — not just `finStatus`. The fields that matter most for support:

```kotlin
private fun logTransactionResult(result: TransactionResult) {
    log("""
        [TXN RESULT]
        finStatus             : ${result.finStatus}
        type                  : ${result.type}
        totalAmount           : ${result.totalAmount} ${result.currency}
        requestedAmount       : ${result.requestedAmount}
        tipAmount             : ${result.tipAmount}
        tipPercentage         : ${result.tipPercentage}
        taxAmount             : ${result.taxAmount}
        dueAmount             : ${result.dueAmount}
        tenderType            : ${result.tenderType}
        authorisationCode     : ${result.authorisationCode}
        issuerResponseCode    : ${result.issuerResponseCode}
        transactionID         : ${result.transactionID}
        eFTTransactionID      : ${result.eFTTransactionID}
        transactionReference  : ${result.transactionReference}
        originalEFTTxnID      : ${result.originalEFTTransactionID}
        eFTTimestamp          : ${result.eFTTimestamp}
        rrn                   : ${result.rrn}
        batchNumber           : ${result.batchNumber}
        isRecoveredTransaction: ${result.isRecoveredTransaction}
        statusMessage         : ${result.statusMessage}
        errorMessage          : ${result.errorMessage}
        cardSchemeName        : ${result.cardSchemeName}
        cardEntryType         : ${result.cardEntryType}
        paymentScenario       : ${result.paymentScenario}
        verificationMethod    : ${result.verificationMethod}
        maskedCardNumber      : ${result.maskedCardNumber}
        cardHolderName        : ${result.cardHolderName}
        expiryDateMMYY        : ${result.expiryDateMMYY}
        cardToken             : ${result.cardToken}
        accountType           : ${result.accountType}
        cardLanguagePreference: ${result.cardLanguagePreference}
        aid                   : ${result.aid}
        arc                   : ${result.arc}
        iad                   : ${result.iad}
        tsi                   : ${result.tsi}
        tvr                   : ${result.tvr}
        applicationLabel      : ${result.applicationLabel}
        chipTransactionReport : ${result.chipTransactionReport?.take(120)}
        merchantName          : ${result.merchantName}
        merchantAddress       : ${result.merchantAddress}
        mid                   : ${result.mid}
        tid                   : ${result.tid}
        customerReference     : ${result.customerReference}
        signatureUrl          : ${result.signatureUrl}
        budgetNumber          : ${result.budgetNumber}
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

:::note Activity-side `onTransactionResult` handling
This walkthrough covers the `HpSdk` singleton side. Your Activity's `SdkListener.onTransactionResult()` implementation needs to:
- Branch on `result.finStatus.toString()` (or the corresponding enum) for each status in the finStatus table above
- Extract `result.cardToken` from `tokenizeCard()` and `saleAndTokenize()` results
- Show `result.errorMessage` + `result.statusMessage` on `DECLINED` and `FAILED`
- Surface `onRecoveryFailed("unknown")` as "outcome unknown — verify with acquirer before retrying"
- Print the receipt via `HpSdk.printReceipt(result.customerReceipt)` for terminal statuses (see Section 3)

The [demo app's `MainActivity.kt`](./android-demo-app.md) is the reference for this side of the integration.
:::

---

## 6. Error handling reference

| Situation | What happens | What to do |
|---|---|---|
| `operationStarted == false` | SDK rejected the call — nothing started | Show error to merchant; safe to retry |
| `CommandNotAllowed` in `currentTransactionStatus` | Operation called before `InitialisationComplete` | Wait for `onInitialized()` before enabling buttons |
| `UserCancelled` in `currentTransactionStatus` | `stopCurrentTransaction()` was accepted | Dismiss "waiting for card" overlay; next `endOfTransaction` will have `CANCELLED` |
| `Configuration update failed` | SDK cannot sync config from cloud | Check SDK version vs device environment (RC = staging, stable = production) |
| `finStatus == DECLINED` | Acquirer declined | Show `finStatus` + `errorMessage` + `statusMessage`; let merchant decide whether to retry |
| `finStatus == UNDEFINED` | Outcome unknown | Run recovery; show UNDEFINED message to merchant |
| `finStatus` after 90s recovery still `UNDEFINED` | Gateway did not resolve | Surface to merchant; contact acquirer to confirm settlement before any retry |
| `errorMessage` non-null | Terminal-level error detail | Always log it; display to merchant if actionable |

---

## Production readiness checklist

Complete this before go-live. Every item is required.

**Initialization**
- [ ] Listener set before `init()` is called
- [ ] `loadRecoveryState()` called before `getAsyncInterface()` and `connect()` — required on every cold start so crash-before-UNDEFINED references survive process death
- [ ] All transaction buttons disabled until `onInitialized()` fires
- [ ] `recoverIfPending()` called from inside `currentTransactionStatus()` on every `InitialisationComplete` event — this is a private method on your SDK wrapper, not on the `SdkListener` interface your Activity implements

**Transaction lifecycle**
- [ ] `operationStarted` checked before any further action
- [ ] `transactionReference` persisted to durable storage when `operationStarted == true` (before result arrives)
- [ ] `requireNoRecovery()` (or equivalent) guard at the start of every financial operation — blocks new operations while recovery is pending to prevent double-charge. **Exception: do not apply this guard to `tipAdjustment`** — it adjusts a prior settled transaction and cannot cause a double-charge.
- [ ] `recoveryStartMs` written when `UNDEFINED` is first received (in either `endOfTransaction` or `transactionResultReady`, whichever fires first) or when `IN_PROGRESS` is first received (only via `transactionResultReady`) — NOT at operation start. Also written in `recoverIfPending()` when it finds `recoveryStartMs == 0L` on `InitialisationComplete` (crash-before-UNDEFINED scenario: app died before UNDEFINED was ever received).
- [ ] Pending reference is cleared only when a terminal `finStatus` is received

**Recovery**
- [ ] `getTransactionStatus()` called on every `InitialisationComplete` when a pending ref exists
- [ ] `UNDEFINED` treated as "keep polling" for 90 seconds from `firstSeenAt`
- [ ] `UNDEFINED` while offline continues polling regardless of elapsed time
- [ ] After 90s + online + still `UNDEFINED`: surface to merchant for acquirer verification — do not silently fail
- [ ] `windowRemainingMs` logged on every recovery attempt

**Result handling**
- [ ] `UNDEFINED` never shown as a payment result to the customer
- [ ] `DECLINED` shows `finStatus` + `errorMessage` + `statusMessage` — merchant decides on retry
- [ ] Receipt printed on `AUTHORISED`, `AUTHORISED_DEFERRED`, `PROCESSED`, `REFUNDED`, `CAPTURED`, and partial approvals — never on `UNDEFINED` or `IN_PROGRESS`
- [ ] `DECLINED`: print `customerReceipt` when non-null (acquirer-dependent — some acquirers issue a declined slip; `CANCELLED` and `FAILED` do not)

**Logging**
- [ ] Every SDK callback (`endOfTransaction`, `connectionStatusChanged`, `currentTransactionStatus`, `transactionResultReady`) produces a log entry
- [ ] Full `TransactionResult` logged on every result (all fields, not just `finStatus`)
- [ ] App-level events logged: operation start, storage persist, order update, recovery attempts, recovery resolution
- [ ] `windowRemainingMs` logged on each recovery attempt

**Threading (HiLite/Bluetooth only)**
- [ ] If also supporting `ConnectionMethod.BLUETOOTH` (HiLite), all listener callbacks including `log()` are wrapped in `mainHandler.post { }` — HiLite delivers SDK callbacks on a background thread, and UI calls from a background thread crash. PAX (`ANDROID_PAYMENT`) delivers callbacks on the main thread so wrapping is not required there.
