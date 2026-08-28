---
title: Android Demo App
sidebar_position: 2
description: A reference demo application for the Handpoint Android SDK covering credential setup, per-acquirer capability flags, transaction recovery, and the Interac VOID pattern.
---

# Android Demo App

The Handpoint Android Demo is a ready-to-run reference application for PAX SmartPOS terminals that demonstrates every SDK operation, all five acquirer configurations, automatic transaction recovery, and the Interac VOID flow.

:::info What you need
- A PAX terminal enrolled in Handpoint TMS
- Your **Shared Secret Key** (SSK) and **Cloud API Key** — both provided by Handpoint for your merchant account
- Android Studio with Kotlin 2.1+ or Gradle from the command line
:::

**Source code:** [github.com/handpoint/handpoint-android-demo](https://github.com/handpoint/handpoint-android-demo)

---

## Credential setup

:::caution Never commit real credentials
Treat your SSK and Cloud API Key as passwords. Do not hardcode them in source files.  
The demo app ships with placeholder values — replace them with your own.
:::

The recommended approach is to load credentials from `local.properties` at build time. This file is ignored by `.gitignore` so it is never committed.

### 1. Add to `local.properties`

```properties
# local.properties — never commit this file
HANDPOINT_SHARED_SECRET=YOUR_SHARED_SECRET_KEY
HANDPOINT_CLOUD_API_KEY=YOUR_CLOUD_API_KEY
```

### 2. Expose through `BuildConfig` in `build.gradle.kts`

Import `java.util.Properties` at the **top of the file** — inside `android { }` the identifier `java` resolves to the Gradle Java extension, not `java.util`.

```kotlin
import java.util.Properties  // must be at top level

// Load before the android { } block
val localProps = Properties().also { props ->
    rootProject.file("local.properties")
        .takeIf { it.exists() }
        ?.inputStream()?.use(props::load)
}

android {
    defaultConfig {
        buildConfigField(
            "String", "HANDPOINT_SHARED_SECRET",
            "\"${localProps["HANDPOINT_SHARED_SECRET"] ?: "YOUR_SHARED_SECRET_KEY"}\""
        )
        buildConfigField(
            "String", "HANDPOINT_CLOUD_API_KEY",
            "\"${localProps["HANDPOINT_CLOUD_API_KEY"] ?: "YOUR_CLOUD_API_KEY"}\""
        )
    }
}
```

### 3. Read in the SDK wrapper

```kotlin
// HpSdk.kt
private const val SHARED_SECRET = BuildConfig.HANDPOINT_SHARED_SECRET
private const val CLOUD_API_KEY = BuildConfig.HANDPOINT_CLOUD_API_KEY

val credentials = HandpointCredentials(SHARED_SECRET, CLOUD_API_KEY)
api = HapiFactory.getAsyncInterface(this, context, credentials)
```

If you prefer to keep the demo simpler and just swap the placeholders directly in the source, that is fine for local use — the important rule is that real credentials never land in a shared repository.

---

## Acquirer configuration

All SDK operations are acquirer-agnostic. What changes between acquirers is **which operations the acquirer supports**, not how you call them. The demo models this with an `AcquirerConfig` data class:

```kotlin
data class AcquirerConfig(
    val name: String,
    val currency: Currency,
    val supportsPreAuth: Boolean       = false,
    val supportsMoto: Boolean          = false,
    val supportsTipAdjustment: Boolean = false,
    val supportsTokenization: Boolean  = true,
    val supportsRefund: Boolean        = true,
    val supportsInterac: Boolean       = false,
)
```

The demo includes ready-made configs for each active Handpoint acquirer:

| Constant | Acquirer | Region | MOTO | Pre-Auth | Tip Adj | Interac |
|---|---|---|---|---|---|---|
| `AcquirerConfigs.EPI` | EPI (TSYS) | US / Canada | ✓ | ✓ | ✓ | — |
| `AcquirerConfigs.PAYSAFE_INTERAC` | Paysafe + Interac | Canada | ✓ | ✓ | ✓ | ✓ |
| `AcquirerConfigs.PAYSAFE_US` | Paysafe | US | — | — | ✓ | — |
| `AcquirerConfigs.EMERCHANTPAY` | EmerchantPay | EU | ✓ | ✓ | — | — |
| `AcquirerConfigs.PAYSTRAX` | Paystrax | EU | ✓ | ✓ | — | — |

### Wiring config to the UI

Set the active config in `MainActivity`:

```kotlin
// Change this constant to match your merchant account
private val config: AcquirerConfig = AcquirerConfigs.EPI
```

On startup, `applyAcquirerConfig()` hides buttons for operations the acquirer does not support:

```kotlin
private fun applyAcquirerConfig() {
    setVisible(R.id.btnPreAuth,         config.supportsPreAuth)
    setVisible(R.id.btnCapture,         config.supportsPreAuth)
    setVisible(R.id.btnPreAuthReversal, config.supportsPreAuth)
    setVisible(R.id.btnMotoSale,        config.supportsMoto)
    setVisible(R.id.btnMotoRefund,      config.supportsMoto)
    setVisible(R.id.btnMotoReversal,    config.supportsMoto)
    setVisible(R.id.btnTokenize,        config.supportsTokenization)
    setVisible(R.id.btnSaleTokenize,    config.supportsTokenization)
    setVisible(R.id.btnRefund,          config.supportsRefund)
}
```

The currency flows automatically from `config.currency` to every SDK call — no manual entry needed.

---

## Interac VOID

:::note Applies to acquirers with `supportsInterac = true`
Paysafe + Interac (Canada) and Paysafe US both route Interac debit transactions through a separate network (TNS) that has different reversal rules from Visa/Mastercard.  
Full protocol details: [Interac VOID — implementation guide](./interac-void.md)
:::

Interac debit does not support traditional card-present refunds or partial reversals. The only available corrective operation is a **VOID**: a full-amount linked refund that must be submitted before the batch is closed, while the card is still present at the terminal.

In the SDK, an Interac VOID is implemented as a standard `refund()` call with the original `transactionID` passed as the link:

```kotlin
// This is what btnVoid does — it is NOT a separate SDK operation.
// "Interac VOID" = linked EMV refund for the full original amount.
fun interacVoid(originalId: String, originalAmountMinorUnits: Long,
                currency: Currency): OperationStartResult? {
    return api.refund(
        amount       = BigInteger.valueOf(originalAmountMinorUnits),
        currency     = currency,
        originalTxId = originalId   // links refund to the original authorization
    )
}
```

### Detecting Interac cards

`TransactionResult.cardSchemeName` returns the card network name (e.g. `"Interac"`, `"Visa"`). After every result, the demo checks the scheme name and swaps the VOID button in or out accordingly:

```kotlin
override fun onTransactionResult(result: TransactionResult) {
    val isInterac = result.cardSchemeName
        ?.lowercase()
        ?.contains("interac") == true

    if (isInterac && config.supportsInterac) {
        btnVoid.visibility        = View.VISIBLE
        btnRefund.visibility      = View.GONE
        btnSaleReversal.visibility = View.GONE
    } else {
        btnVoid.visibility        = View.GONE
        btnRefund.visibility      = if (config.supportsRefund) View.VISIBLE else View.GONE
        btnSaleReversal.visibility = View.VISIBLE
    }
}
```

The VOID button remains visible until the next transaction runs — at that point the result re-evaluates the card scheme and updates the UI again.

---

## Transaction recovery

The demo implements the full recovery pattern documented in [Transaction Recovery — Android SDK](./transaction-recovery-android-sdk.md). Key implementation notes:

### Record the reference *before* the result arrives

`api.sale()` (and all card-present operations) returns an `OperationStartResult` synchronously. Save the `transactionReference` to persistent storage before you let the user do anything else. If the app crashes or the connection drops, this is all you need to recover.

```kotlin
val opResult = api.sale(amount, currency)

if (!opResult.operationStarted) {
    // SDK rejected the call — safe to display error, no card was tapped
    return
}

// Persist BEFORE waiting for the result
val ref = opResult.transactionReference
prefs.edit().putString("pendingRef", ref).apply()
```

:::caution Check `operationStarted` before recording
Only record a pending reference when `operationStarted == true`. If the SDK returned `false`, the operation never started and there is nothing to recover.
:::

### Recover on `InitialisationComplete`

On app restart (or reconnect after a drop), query any saved pending reference as soon as `InitialisationComplete` fires:

```kotlin
override fun currentTransactionStatus(info: StatusInfo, device: Device) {
    if (info.status == StatusInfo.Status.InitialisationComplete) {
        val pendingRef = prefs.getString("pendingRef", null)
        if (pendingRef != null) {
            api.getTransactionStatus(pendingRef)
            // Result arrives in transactionResultReady()
        }
    }
}
```

### Handle `UNDEFINED` finStatus

`UNDEFINED` means the Handpoint Cloud could not yet resolve the outcome — the transaction may still be in flight. Treat it the same as `IN_PROGRESS`: keep polling with exponential backoff until a terminal status is returned or the recovery window closes.

```kotlin
override fun transactionResultReady(result: TransactionResult, device: Device) {
    if (result.finStatus.toString() == "UNDEFINED" ||
        result.finStatus.toString() == "IN_PROGRESS") {
        // Keep polling — outcome not yet known
        scheduleNextPoll(result.transactionReference)
        return
    }
    clearPendingReference()
    handleFinalResult(result)
}
```

### Recovery window

The demo polls for up to **90 seconds** with exponential backoff starting at 5 seconds and capped at 30 seconds. After the window closes without a terminal status, the outcome is unknown. In production, escalate to the acquirer to confirm settlement before showing any outcome to the merchant.

---

## ISV integration: multi-merchant credential management

This section is specifically for **ISVs** (Independent Software Vendors) who distribute one app to many merchants. If you are building a single-merchant app, the credential setup section above is sufficient.

### Credentials are per-merchant, not per-ISV

Each merchant enrolled with Handpoint receives a unique pair of credentials:

| Credential | What it identifies | Where it lives |
|---|---|---|
| **Shared Secret Key (SSK)** | A single merchant in TMS. The Payments App on the device is enrolled with this value — it is the link between your app and that merchant's terminal. | TMS merchant record (`sharedSecret` field) |
| **Cloud API Key** | The same merchant in the Handpoint Cloud (for MOTO / cloud-payment mode). Required for cloud-mode operations; SDK still initializes without it. | TMS merchant record (`cloudApiKey` field) |

Two different merchants always have different SSKs. There is no ISV-level SSK.

### TMS as the credential source of truth

When Handpoint provisions a new merchant for you, that merchant is created in the TMS Partner Portal under your partner account. The SSK and Cloud API Key are stored on the merchant object and can be retrieved at any time:

```
GET /partner/partner/{partnerId}/merchant/{merchantId}?detail=merchantobject
Authorization: Bearer <your-partner-token>
```

The response includes a `sharedSecret` field. This is the SSK your app must pass to `HandpointCredentials` for that merchant's terminal.

### Backend mapping pattern

ISVs need a backend service that maps each of your merchants to their Handpoint credentials. A typical pattern:

```
Your Backend
├── merchants table
│   ├── merchant_id        (your internal ID)
│   ├── hp_shared_secret   (SSK from TMS — treat as a secret)
│   └── hp_cloud_api_key   (Cloud API Key from TMS)
│
└── credential endpoint
    GET /api/credentials?merchant_id=123
    → { "sharedSecret": "...", "cloudApiKey": "..." }
```

At runtime, the Android app calls your backend to fetch the active merchant's credentials and passes them to the SDK:

```kotlin
// Fetch at login or merchant-switch time — NOT at app compile time
val creds = yourBackend.getCredentials(activeMerchantId)

val api = HapiFactory.getAsyncInterface(
    delegate  = this,
    context   = this,
    credentials = HandpointCredentials(
        sharedSecret = creds.sharedSecret,
        cloudApiKey  = creds.cloudApiKey
    )
)
api.connect(device)
```

This means a single APK can serve any merchant — you do not need to recompile per merchant or hardcode any credentials.

:::caution Re-initialize the SDK when switching merchants
If your app switches between merchants at runtime, you must call the SDK initialization sequence again with the new credentials. The SDK binds to the terminal's enrolled SSK at connection time — presenting the wrong SSK produces a `Configuration update failed` error.
:::

### Staging vs production

Handpoint provides two environments for development and go-live:

| Environment | TMS URL | Purpose |
|---|---|---|
| **Staging** | TMS staging portal | Integration development, RC testing |
| **Production** | TMS production portal | Live merchant transactions |

**Staging credentials only work in the staging environment.** A staging SSK or Cloud API Key presented to the production SDK endpoint will fail. When developing, enroll your test device in staging TMS with staging credentials. Before going live, re-enroll the device (or migrate the merchant config) in production.

:::info Test devices stay in staging
Test devices used during integration or RC verification should remain enrolled in staging TMS. Never route test transactions through a production merchant.
:::

### Diagnosing "Configuration update failed"

This error means the Payments App on the terminal could not sync its configuration from Handpoint Cloud. Likely causes:

| Cause | How to check | Fix |
|---|---|---|
| **SSK mismatch** | The SSK passed to `HandpointCredentials` differs from the one the Payments App was enrolled with | Verify the SSK in TMS matches `local.properties` |
| **Device not enrolled** | Device serial is not assigned to any merchant in TMS | Assign the device to a merchant in TMS, then trigger a publish |
| **Staging credential on production endpoint** | Device enrolled with staging credentials; SDK hitting production cloud | Use a device enrolled in the correct environment, or contact Handpoint to provision staging access |
| **Payments App not updated** | TMS has a new config but the Payments App has not synced | Open Payments App → Settings → Sync, or power-cycle the device |

---

## Best practices summary

| Pattern | Recommendation |
|---|---|
| **Credentials** | Load from `local.properties` → `BuildConfig`. Never hardcode in source files. |
| **Currency** | Always drive currency from the acquirer config — never hardcode it alongside the operation. |
| **Pending reference** | Persist `transactionReference` to `SharedPreferences` or a DB *before* waiting for the result; clear it only when a terminal `finStatus` is received. |
| **`operationStarted`** | Check this field before recording any pending reference. If `false`, the SDK rejected the call — there is nothing to recover. |
| **`UNDEFINED` finStatus** | Poll again. Do not treat it as a failure. Do not show the merchant a result until you have a terminal finStatus. |
| **Interac VOID** | Use a standard linked `refund()` call — there is no separate VOID operation. Card must be present. Perform before batch close. |
| **Signature** | `signatureRequired` is called by the SDK when the card requires manual signature. In production, display a signature pad and call `api.signatureResult(accepted)`. Auto-accepting (as the demo does) is only appropriate for testing. |
| **Recovery window** | 90 seconds is a reasonable upper bound. If no terminal status after that time, halt and contact the acquirer — do not retry the original operation. |
