---
title: Android SDK (PAX) — Integration Guide
sidebar_position: 2
description: Step-by-step guide to integrating the Handpoint Android SDK on a PAX SmartPOS terminal — setup, initialization, transaction flow, recovery, and certification.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Android SDK (PAX) — Integration Guide

:::info AI coding agents
Fetch the integration-path skill for machine-readable setup guidance and code examples: [`/.well-known/skills/paths/android-pax.md`](/.well-known/skills/paths/android-pax.md)
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
| `cloudApiKey` | Enables `getTransactionStatus` recovery endpoint (optional but recommended) | Handpoint Integration Support |

The `sharedSecret` is a 64-character hex string unique to the merchant. The `cloudApiKey` is needed only for Cloud/bridge mode and transaction recovery polling.

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
            abiFilters "arm64-v8a", "armeabi-v7a", "x86", "x86_64"
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
        hapi = HapiFactory.getHapiInstance(this, this, credentials)
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
        FinancialStatus.PARTIALLY_APPROVED -> handlePartialApproval(result)
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
| `PARTIALLY_APPROVED` | Wait 60 s, then collect split tender or reverse |

→ Full implementation with code examples: [Transaction Recovery — Android SDK](/reference/transaction-recovery-android-sdk)

## Operations available

| Operation | Acquirer support |
|---|---|
| **Sale** | [Acquirer matrix](/reference/acquirer-capabilities-matrix) — `android-pax` column |
| **Refund** | |
| **Reversal / Void** | |
| **Pre-Authorization** (create, capture, increase, reverse) | |
| **MOTO Sale** | EPI, EmerchantPay |
| **Tokenization** | EPI (proCharge), Paysafe, TokenEx |
| **Tip Adjustment** | EPI, Paysafe + Interac |
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
- [ ] Partial approval handled — `PARTIALLY_APPROVED` detected; collect split tender or send automatic reversal ([partial approval guide](/reference/partial-approval))
- [ ] `OperationStartResult.operationStarted` checked before awaiting result

→ Full scenario checklist: [Validate your integration — Android SDK](/reference/validate-integration-android-sdk)

→ Error codes: [Error codes](/reference/error-codes)
