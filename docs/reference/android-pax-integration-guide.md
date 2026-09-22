---
title: Android SDK (PAX) — Integration Guide
sidebar_position: 2
description: Step-by-step guide to integrating the Handpoint Android SDK on a PAX SmartPOS terminal — setup, initialization, transaction flow, recovery, and certification.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Android SDK (PAX) — Integration Guide

:::info AI coding agents
Fetch the integration-path skill for machine-readable setup guidance and code examples: [`/.well-known/skills/paths/android-pax.md`](pathname:///.well-known/skills/paths/android-pax.md)
:::

:::info Cloud API integrated mode
Need the terminal to also accept transactions triggered by a back-office server or a separate POS? See [Android SDK (PAX) — Cloud API Integrated Mode](/reference/android-cloud-api-integration-guide).
:::

## What is this integration path?

The Android SDK (PAX) path runs your application **directly on the PAX SmartPOS terminal**. The Handpoint Android SDK communicates with the Handpoint Payments App on the same device via IPC — no external server or network hop is required for the payment flow.

Choose this path when your POS UI, checkout logic, and payment terminal are all the same device. It gives you complete control of the on-terminal experience with the simplest possible integration surface.

## When to use it

| ✅ Good fit | ❌ Not a good fit |
|---|---|
| Your Android app runs on PAX hardware and owns the full checkout UX | Your POS runs on a separate server — use the [Cloud REST API](/reference/cloud-api-integration-guide) |
| You want to minimise network dependencies in the payment path | You need a Bluetooth card reader — use the [Android HiLite path](/reference/android-hilite-integration-guide) |
| You're targeting PAX A920, A920 Pro, A77, or similar SmartPOS devices | You need iOS support — use the [iOS HiLite path](/reference/ios-hilite-integration-guide) |

:::info Back-office operations are always available
[Backoffice REST API](/reference/backoffice-integration-guide) operations — tip adjustment, reversals, refunds, MOTO charges, batch management, deferred tokenization — are available **alongside any integration path** you choose. They go server-side directly to the payment gateway with no terminal or SDK required. Subject only to acquirer support.
:::

## How it works

```
Your Android Activity
    │  hapi.sale() / hapi.refund() …
    ▼
Handpoint Android SDK
    │  IPC — same device
    ▼
Handpoint Payments App (PAX)
    │  chip / tap / swipe + P2PE
    ▼
Acquirer / Card Network
    │
    ▼
endOfTransaction(TransactionResult)
```

1. Your app calls an SDK method (e.g. `hapi.sale()`).
2. The SDK passes the command to the Handpoint Payments App on the same device via IPC.
3. The Payments App reads the card, encrypts, and processes with the acquirer.
4. The result is delivered to your `endOfTransaction` callback.

Your app never handles raw card data — Handpoint keeps you out of PCI scope.

## Authentication

| Credential | Purpose | Provisioned by |
|---|---|---|
| `sharedSecret` | Authenticates your app to the Payments App on the terminal | Handpoint Integration Support |
| `cloudApiKey` | Optional. Required for keyed entry operations, SDK-initiated transaction recovery (`getTransactionStatus()`), and cloud channel (integrated mode). Not required for card-present operations. | Handpoint Integration Support |

The `sharedSecret` is a 64-character hex string unique to the merchant. The `cloudApiKey` is not required for standard card-present integrations.

## Environments & credentials

| Terminal type | Notes |
|---|---|
| PAX **debug** terminal | Development — uses `cloud.handpoint.io` for Cloud features |
| PAX **production** terminal (DEMO merchant) | Simulated acquirer — funds not moved |
| PAX **production** terminal (live merchant) | Real transactions — live merchant credentials |

See [Development hardware](/reference/development-hardware) to identify your terminal type. Debug and production credentials are not interchangeable.

## Setup

### 1. Request credentials

Contact your Handpoint Integration Support engineer for:
- Merchant `sharedSecret`
- DEMO merchant `cloudApiKey`
- A PAX DEMO or debug terminal

### 2. Add the SDK dependency

```groovy
// build.gradle (app module)
dependencies {
    implementation 'com.handpoint.api:sdk:7.x.x'  // latest: see release notes
}

// Top-level build.gradle
allprojects {
    repositories {
        google()
        mavenCentral()
    }
}
```

RC (debug terminal) builds require the Handpoint Nexus server — contact Integration Support for credentials.

**Required `build.gradle` settings:**

```groovy
android {
    defaultConfig {
        minSdkVersion 22
        multiDexEnabled true
        ndk {
            abiFilters "armeabi-v7a"
        }
    }
    // AGP 7 / 8
    packaging {
        jniLibs { pickFirsts += ['**/*.so'] }
    }
}
```

If using AndroidX, add to `gradle.properties`:
```
android.useAndroidX=true
android.enableJetifier=true
```

### 3. Update AndroidManifest.xml

```xml
<application
    android:extractNativeLibs="true"
    ...>

    <activity
        android:launchMode="singleTask"
        ...>
```

### 4. Implement the Events interface and initialise

```kotlin
class MainActivity : AppCompatActivity(), Events.SmartposRequired {

    private lateinit var hapi: Hapi

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val credentials = HandpointCredentials(
            sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132",
            cloudApiKey  = "YOUR_CLOUD_API_KEY"   // omit if not using recovery
        )
        hapi = HapiFactory.getAsyncInterface(this, this, credentials, Settings())
    }

    // Fires when any operation completes
    override fun endOfTransaction(result: TransactionResult, device: Device) { }

    // SDK status — InitialisationComplete fires here
    override fun currentTransactionStatus(statusInfo: StatusInfo, device: Device) {
        if (statusInfo.status == StatusInfo.Status.InitialisationComplete) {
            // Safe to start financial operations now
        }
    }

    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) { }

    // Fires when getTransactionStatus returns a result
    override fun transactionResultReady(result: TransactionResult, device: Device) { }
}
```

:::warning Wait for InitialisationComplete
Do not call `hapi.sale()` or any financial operation until `currentTransactionStatus` fires with `InitialisationComplete`. Calling before initialisation results in `CommandNotAllowed` or `NotInitialised`.
:::

## Your first transaction

### Sale

```kotlin
// Amount in smallest currency unit — £10.00 = BigInteger("1000")
val op: OperationStartResult = hapi.sale(BigInteger("1000"), Currency.GBP)

// op.operationStarted == true → SDK accepted the command
// Final result arrives in endOfTransaction
```

`OperationStartResult.operationStarted` means the SDK accepted the command, **not** that the transaction was approved. The outcome is always in `endOfTransaction`.

### Reading the result

```kotlin
override fun endOfTransaction(result: TransactionResult, device: Device) {
    when (result.finStatus) {
        FinancialStatus.AUTHORISED         -> chargeCard(result)
        FinancialStatus.DECLINED           -> showDeclined()
        FinancialStatus.CANCELLED          -> showCancelled()
        FinancialStatus.FAILED             -> showError()
        FinancialStatus.PARTIAL_APPROVAL -> handlePartialApproval(result)
        else                               -> {}
    }
}
```

## Transaction recovery

Always persist the `transactionReference` to your database **before** calling any financial operation. If the result does not arrive in `endOfTransaction` within your timeout (typically 90 s), poll in the background:

```kotlin
// Save ref before the call
val ref = UUID.randomUUID().toString()
db.savePendingTransaction(ref)

val options = SaleOptions().apply { transactionReference = ref }
hapi.sale(BigInteger("1000"), Currency.GBP, options)

// If endOfTransaction doesn't fire within 90 s:
// → poll every 10 s; result arrives in transactionResultReady
hapi.getTransactionStatus(ref)
```

| `finStatus` | Action |
|---|---|
| `IN_PROGRESS` / `UNDEFINED` | Keep polling |
| `AUTHORISED` (no prior record) | Send automatic reversal via Cloud API |
| `DECLINED` / `FAILED` / `CANCELLED` | Clear pending record — card not charged |
| `PARTIAL_APPROVAL` | Wait 60 s, then collect split tender or reverse |

→ Full implementation with code examples: [Transaction Recovery — Android SDK](/reference/transaction-recovery-android-sdk)

## Additional operations

### Refund

Use for post-settlement returns where the cardholder presents their card at the terminal. For same-day cancellations of unsettled transactions, use [Reversal](#reversal) instead — it is faster and incurs no interchange fees.

```kotlin
// Linked refund — recommended; gateway validates against the original and caps the amount
hapi.refund(BigInteger("1000"), Currency.USD, "01236fc0-8192-11eb-9aca-ad4b0e95f241")

// Unlinked refund — omit originalTransactionID (some acquirers restrict this)
hapi.refund(BigInteger("1000"), Currency.USD)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) { /* refund accepted */ }
}
```

Check `result.finStatus == AUTHORISED`. A linked refund fails if the refund amount exceeds the original `totalAmount`.

### Reversal {#reversal}

Use to cancel an unsettled same-day transaction before batch close. No card presentation is required. After settlement, send a Refund instead.

```kotlin
hapi.saleReversal(
    BigInteger("1000"),
    Currency.USD,
    "01236fc0-8192-11eb-9aca-ad4b0e95f241"  // transactionID from the original sale result
)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        // reversed — hold released, no settlement
    }
}
```

Check `result.finStatus == AUTHORISED`. `DECLINED` means the transaction was not found in the open batch — the batch may have already closed.

### Pre-Authorization

Use for hotel check-ins, car rentals, or any flow where the final amount is unknown at card presentation. Supporting pre-auth means implementing the full lifecycle: Create → (optional Increase / Decrease) → Capture → or Reversal to release unused holds.

```kotlin
// 1. Create a hold — card presented at terminal
hapi.preAuthorization(BigInteger("10000"), Currency.USD)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    when (result.finStatus) {
        FinancialStatus.AUTHORISED -> {
            val preAuthID = result.transactionID  // persist for capture or reversal
        }
        else -> { /* declined or failed */ }
    }
}

// 2. Capture when the final amount is known — no card required
hapi.preAuthorizationCapture(
    BigInteger("9500"),                              // actual charge, may differ from hold
    Currency.USD,
    preAuthID                                        // transactionID from step 1
)

// 3. Release unused hold without charging — no card required
hapi.preAuthorizationReversal(preAuthID)
```

Both Capture and Reversal results arrive in `endOfTransaction`. Always reverse unused pre-auths — unreleased holds affect cardholder available credit and expire after 7–30 days.

### MOTO Sale (Key Entry)

Use when a cardholder reads their card details over the phone and an operator keys them directly on the PAX terminal's touchscreen. Despite using the physical terminal, this is processed as a MOTO (card-not-present) transaction and incurs higher interchange rates — confirm the fee structure with your acquirer.

```kotlin
// Terminal shows manual card entry screen; operator types card number, expiry, CVV
hapi.motoSale(BigInteger("1000"), Currency.USD)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        // store result.transactionID for potential reversal
        // result.paymentScenario == PaymentScenario.MOTO
    }
}
```

Requires `cloudApiKey` in `HandpointCredentials` and MOTO enabled for the merchant by Handpoint. Check `result.finStatus` — `CANCELLED` means the operator exited the entry screen.

### Tokenization

Use to store a reusable card token for future card-not-present charges without charging the card now. Pass `SaleAndTokenizeOptions` to charge and tokenize in one step.

```kotlin
// Tokenize only — no charge, card presented at terminal
hapi.tokenizeCard()

// Charge + tokenize in one step
val options = SaleAndTokenizeOptions()
hapi.sale(BigInteger("1000"), Currency.USD, options)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        val token = result.cardToken          // store securely for future motoSale()
        // result.cardTokenProvider           // "EPI" / "PROCHARGE" — identifies the vault
    }
}
```

`result.cardToken` is non-null only when tokenization succeeded. Use the token in `hapi.motoSale()` with `MoToOptions(cardToken = token)` for future card-not-present charges.

### Tip Adjustment

Use in tip-at-table flows — the cardholder signs a paper receipt after the sale and writes in a tip, and the cashier enters it before batch close. This is distinct from Sale with Tip, which collects the tip at checkout before authorisation.

```kotlin
// Returns Boolean synchronously — no endOfTransaction callback fires
val accepted: Boolean = hapi.tipAdjustment(
    BigInteger("200"),                               // 200 = $2.00 tip in minor units
    Currency.USD,
    "01236fc0-8192-11eb-9aca-ad4b0e95f241"           // transactionID from original sale
)
// To zero out an existing tip: pass BigInteger("0")
```

`true` means the SDK sent the adjustment to the gateway. Must be called before batch close — see the [Utility methods table](#utility-methods--verified-return-values-pax-a920) for confirmed PAX return values.

### Automatic Refund

Use to refund a card-not-present transaction without the cardholder presenting their card — the refund is processed against the stored card token from the original sale. No card tap, dip, or swipe is required.

```kotlin
// Full refund — amount matches the original sale automatically
hapi.automaticRefund("01236fc0-8192-11eb-9aca-ad4b0e95f241")

// Partial refund — specify amount; must not exceed the original sale amount
hapi.automaticRefund(
    BigInteger("500"),                               // 500 = $5.00 in minor units
    Currency.USD,
    "01236fc0-8192-11eb-9aca-ad4b0e95f241"
)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) { /* refund accepted */ }
}
```

The result arrives in `endOfTransaction`. If the partial amount exceeds the original sale amount the transaction is automatically declined.

### Refund Reversal

Use to cancel a refund before the daily batch closes. Like a sale reversal, this voids an unsettled refund before it is submitted for settlement.

```kotlin
hapi.refundReversal(
    BigInteger("1000"),
    Currency.USD,
    "01236fc0-8192-11eb-9aca-ad4b0e95f241"  // transactionID from the original refund
)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        // refund reversed — refund will not settle
    }
}
```

Only possible within the same business day, before batch close. After settlement, the refund cannot be reversed.

### MOTO Refund

Use for card-not-present refunds processed over the phone or through a back-office operator. No card presentation is required.

```kotlin
// Unlinked MOTO refund — not tied to a previous transaction
hapi.motoRefund(BigInteger("1000"), Currency.USD)

// Linked MOTO refund — capped to the original transaction amount
hapi.motoRefund(
    BigInteger("500"),
    Currency.USD,
    "01236fc0-8192-11eb-9aca-ad4b0e95f241"
)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) { /* MOTO refund accepted */ }
}
```

Requires `cloudApiKey` in `HandpointCredentials` and MOTO enabled for the merchant. The linked variant limits the refund amount to that of the original transaction.

### MOTO Reversal

Use to void a MOTO sale or MOTO refund before the batch closes. No card is required.

```kotlin
hapi.motoReversal("01236fc0-8192-11eb-9aca-ad4b0e95f241")  // transactionID of the MOTO operation

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        // MOTO operation voided
    }
}
```

Must be called before batch close. After settlement, use a MOTO Refund instead.

### MOTO Pre-Authorization

Use to place a card-not-present pre-authorization hold — for example, when taking a booking by phone. The cardholder's card details are keyed in by the operator on the terminal.

```kotlin
hapi.motoPreauthorization(BigInteger("10000"), Currency.USD)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    when (result.finStatus) {
        FinancialStatus.AUTHORISED -> {
            val preAuthID = result.transactionID  // persist for later capture or reversal
        }
        else -> { /* declined or failed */ }
    }
}
```

Capture or reverse the hold using `hapi.preAuthorizationCapture()` or `hapi.preAuthorizationReversal()` as with a card-present pre-auth. Requires MOTO to be enabled for the merchant.

### Card PAN

Use to retrieve the full card PAN from a presented card — primarily for loyalty card flows where the PAN is needed to credit points. Only card ranges explicitly whitelisted by Handpoint are returned; all others receive a declined result.

```kotlin
hapi.cardPan()

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        val pan = result.panEntryMode   // full PAN for whitelisted ranges
        val cardBrand = result.cardSchemeName
    }
}
```

Contact Handpoint Integration Support to whitelist the card ranges you need before using this operation.

### Pre-Authorization Increase

Use to adjust the hold amount on an existing open pre-authorization — for example, when a restaurant tab grows beyond the initial hold, or to partially release a hold before capture.

```kotlin
// Increase the hold by an additional amount
hapi.preAuthorizationIncrease(
    BigInteger("2000"),                              // additional amount in minor units
    Currency.USD,
    preAuthID                                        // transactionID from original pre-auth
)

// Decrease the hold by passing a smaller amount than the original hold
hapi.preAuthorizationIncrease(
    BigInteger("500"),                               // new (lower) hold amount
    Currency.USD,
    preAuthID
)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        // hold adjusted; persist the updated preAuthID for capture
    }
}
```

Pass an amount smaller than the original pre-auth to decrease the hold. The result arrives in `endOfTransaction`.

### Tokenized Sale

Use when you want to tokenize the card and then immediately complete a sale in a single card-tap flow. The SDK fires `Events.CardTokenized` after tokenization — your app decides whether to proceed with the sale or cancel.

```kotlin
// Initiate the tokenized sale flow
hapi.tokenizedOperation(BigInteger("1000"), Currency.USD)

// Implement Events.CardTokenized in your Activity
override fun onCardTokenized(
    cardTokenizationData: CardTokenizationData,
    resumeCallback: ResumeCallback
) {
    val token = cardTokenizationData.token          // store for future card-not-present charges
    val cardBrand = cardTokenizationData.cardBrand

    // Proceed with the sale
    resumeCallback.resume(
        OperationDto.Sale(BigInteger("1000"), Currency.USD)
    )

    // Or cancel without charging
    // resumeCallback.cancel()
}

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        // card tokenized and sale approved
    }
}
```

Only `OperationDto.Sale` is valid when calling `resumeCallback.resume()` — passing any other operation type returns `FEATURE_NOT_SUPPORTED`. Calling any `ResumeCallback` method after timeout or cancellation throws an exception.

## Device management

Brief reference for terminal management methods available on the `Hapi` instance.

| Method | Signature | Notes |
|---|---|---|
| **Disconnect** | `hapi.disconnect(): Boolean` | Stops the active connection or reconnection attempt. Do not call mid-transaction — it ignores current state. |
| **Get paired devices** | `hapi.getPairedDevices(method: ConnectionMethod): List<Device>` | Returns all terminals paired with the specified connection type (Bluetooth, Cloud, etc.). |
| **Get EMV configuration** | `hapi.getEMVConfiguration(): Boolean` | Async; fetches the EMV configuration report from the terminal. Result delivered via `Events.ReportResult`. |
| **Flash reset** | `hapi.deleteDeviceConfig()` | Sends a command to delete the terminal's stored configuration (factory-style reset). |
| **Set locale** | `hapi.setLocale(locale: SupportedLocales)` | Sets the SDK UI language and regional number/date formatting. |
| **Get manufacturer** | `hapi.getDeviceManufacturer(): Manufacturer` | Returns the `Manufacturer` enum value for the connected terminal. |

## Operations available

| Operation | Acquirer support |
|---|---|
| **Sale** | See your acquirer's page: [EPI](/acquirers/epi) · [PAYSAFE](/acquirers/paysafe) · [EmerchantPay](/acquirers/emerchantpay) · [Paystrax](/acquirers/paystrax) |
| **Refund** | |
| **Reversal / Void** | |
| **Pre-Authorization** (create, capture, increase, reverse) | |
| **MOTO Sale** | EPI, EmerchantPay |
| **Tokenization** | EPI (Cygma), Paysafe, TokenEx |
| **Tip Adjustment** | EPI, PAYSAFE (non-Interac cards only) |
| **Get Transaction Status** | All (PAX only) |

## Utility methods — verified return values (PAX A920)

| Method | Return | Notes |
|---|---|---|
| `stopCurrentTransaction()` | `false` when idle | Returns `false` when no transaction is in progress — only returns `true` when it successfully interrupts an active transaction. Do not interpret `false` as an error; check `OperationStartResult.operationStarted` instead. |
| `getDeviceLogs()` | `false` on PAX | Returns `false` even when the call was accepted. Device log delivery goes through the `PrinterEvents` channel — implement `Events.PrinterEvents` and handle `onPrintFailure(PrintError.CantConnectToPrinter)` when no host printer is reachable. |
| `update()` | `true` | Returns `true` immediately; update check runs asynchronously. |
| `tipAdjustment()` | `true` | Fire-and-forget; no callback. |
| `getTransactionStatus()` | `true` | Result delivered via `transactionResultReady()`. |

## Test amounts

On a DEMO merchant or debug terminal. Pass amounts in **minor units** (cents / pence) — e.g. `3779` not `37.79`. Use the full trigger table — including partial approval (3757) and timeout (3768) — from [Development Hardware: Testing with trigger amounts](/reference/development-hardware#trigger-amounts). Any amount not in the table approves.

Funds are never moved on DEMO merchants.

## Validation & certification

**Required for every integration:**

- [ ] `InitialisationComplete` gate implemented — no financial operations before SDK is ready
- [ ] `transactionReference` persisted to DB before each operation starts — [scoping rules](/reference/transaction-reference)
- [ ] Transaction recovery tested — app restarted mid-transaction, outcome recovered via `getTransactionStatus`
- [ ] Partial approval handled — `PARTIAL_APPROVAL` detected; collect split tender or send automatic reversal ([partial approval guide](/reference/partial-approval))
- [ ] `OperationStartResult.operationStarted` checked before awaiting result

→ Full scenario checklist: [Validate your integration — Android SDK](/reference/validate-integration-android-sdk)

→ Error codes: [Error codes](/reference/error-codes)

## See Also

- [Android Objects Reference](/reference/android-objects-reference) — full type definitions for transaction results, options, and enums
- [Android Events Reference](/reference/android-events-reference) — all SDK callback events and their payloads
