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

```kotlin
android {
    defaultConfig {
        val props = java.util.Properties().also { props ->
            rootProject.file("local.properties")
                .takeIf { it.exists() }
                ?.inputStream()?.use(props::load)
        }
        buildConfigField(
            "String", "HANDPOINT_SHARED_SECRET",
            "\"${props["HANDPOINT_SHARED_SECRET"] ?: "YOUR_SHARED_SECRET_KEY"}\""
        )
        buildConfigField(
            "String", "HANDPOINT_CLOUD_API_KEY",
            "\"${props["HANDPOINT_CLOUD_API_KEY"] ?: "YOUR_CLOUD_API_KEY"}\""
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
