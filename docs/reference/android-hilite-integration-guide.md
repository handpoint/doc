---
title: Android SDK (HiLite) — Integration Guide
sidebar_position: 3
description: Step-by-step guide to integrating the Handpoint Android SDK with a HiLite Bluetooth card reader — setup, device discovery, transaction flow, and certification.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Android SDK (HiLite) — Integration Guide

:::info AI coding agents
Fetch the integration-path skill for machine-readable setup guidance and code examples: [`/.well-known/skills/paths/android-hilite.md`](/.well-known/skills/paths/android-hilite.md)
:::

## What is this integration path?

The Android HiLite path runs your Android application on a **phone or tablet** and communicates with a HiLite Bluetooth card reader. Your POS app lives on the mobile device; the HiLite handles card reading, chip/tap/swipe, and P2PE encryption.

Choose this path when merchants need to accept payments away from a fixed counter — table-side, market stalls, field sales, or any mobile payment scenario.

## When to use it

| ✅ Good fit | ❌ Not a good fit |
|---|---|
| Your Android app runs on a phone or tablet paired with a HiLite reader | Your app runs on the PAX terminal itself — use the [Android PAX path](/reference/android-pax-integration-guide) |
| Merchants need to take payments on the move | You need a fixed counter with a networked terminal — use the [Cloud API](/reference/cloud-api-integration-guide) |
| You want a compact, battery-powered card reader | You need iOS support — use the [iOS HiLite path](/reference/ios-hilite-integration-guide) |

## Capabilities not available on HiLite

- **Pre-authorization** — no on-device pre-auth flow on HiLite
- **Remote sale on-terminal** — HiLite has no manual card entry keypad
- **`getTransactionStatus` polling** — currently PAX only

## How it works

```
Your Android App (phone / tablet)
    │  hapi.sale() …
    ▼
Handpoint Android SDK
    │  Bluetooth
    ▼
HiLite Card Reader
    │  chip / tap / swipe + P2PE
    ▼
Acquirer / Card Network (via mobile data or Wi-Fi)
    │
    ▼
endOfTransaction(TransactionResult)
```

## Authentication

| Credential | Purpose | Provisioned by |
|---|---|---|
| `sharedSecret` | Authenticates your app to the HiLite reader | Handpoint Integration Support |

The HiLite Bluetooth path does not use a `cloudApiKey` — the reader connects directly over Bluetooth, not through the Handpoint Cloud.

## Setup

### 1. Request credentials and hardware

Contact your Handpoint Integration Support engineer for:
- A merchant `sharedSecret`
- A HiLite Bluetooth reader

### 2. Add the SDK dependency

```groovy
// build.gradle (app module)
dependencies {
    implementation 'com.handpoint.api:sdk:7.x.x'
}

// Top-level build.gradle
allprojects {
    repositories {
        google()
        mavenCentral()
    }
}
```

**Required `build.gradle` settings:**

```groovy
android {
    defaultConfig {
        minSdkVersion 22
        multiDexEnabled true
        // No NDK abiFilters needed for HiLite-only integrations
    }
    packaging {
        jniLibs { pickFirsts += ['**/*.so'] }
    }
}
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

Add Bluetooth permissions (Android 12+):
```xml
<uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
```

### 4. Implement the Events interface and initialise

```kotlin
class MainActivity : AppCompatActivity(), Events.MposRequired {

    private lateinit var hapi: Hapi

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val credentials = HandpointCredentials(
            sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132"
        )
        hapi = HapiFactory.getHapiInstance(this, this, credentials)
    }

    // Required: fires when an operation completes
    override fun endOfTransaction(result: TransactionResult, device: Device) { }

    // Required: SDK status updates
    override fun currentTransactionStatus(statusInfo: StatusInfo, device: Device) { }

    // Required: connection state changes
    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) { }

    // Required: list of discovered Bluetooth devices
    override fun deviceDiscoveryFinished(devices: List<Device>) {
        // Connect to the user-selected device
        if (devices.isNotEmpty()) {
            hapi.connect(devices.first())
        }
    }

    // Required: signature prompt (HiLite has no signature screen — always accept)
    override fun signatureRequired(signatureRequest: SignatureRequest, device: Device) {
        hapi.signatureResult(true)
    }

    override fun transactionResultReady(result: TransactionResult, device: Device) { }
}
```

## Connecting to the HiLite

### Option A — Discovery

```kotlin
hapi.searchDevices(ConnectionMethod.BLUETOOTH)
// deviceDiscoveryFinished fires with a list of nearby readers
```

### Option B — Direct connect by MAC address

```kotlin
val device = Device(
    name    = "PP0513901435",
    address = "68:AA:D2:00:D5:27",   // always UPPER CASE
    port    = "",
    connectionMethod = ConnectionMethod.BLUETOOTH
)
hapi.connect(device)
```

By default, the SDK reconnects automatically if the connection is lost. To disable:
```kotlin
Settings.automaticReconnection = false
```

## Your first transaction

```kotlin
// Amount in smallest currency unit — £10.00 = BigInteger("1000")
val op: OperationStartResult = hapi.sale(BigInteger("1000"), Currency.GBP)
// Final result arrives in endOfTransaction
```

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

HiLite does not support `getTransactionStatus`. If the result is not delivered:

1. Mark the transaction as pending in your database.
2. If a Cloud API key is available, poll `GET https://cloud.handpoint.com/transactions/{transactionReference}` from your server.
3. On `AUTHORISED` with no prior record, send a remote reversal via the Cloud API.

Always persist `transactionReference` before starting a transaction.

## Operations available

| Operation | HiLite support |
|---|---|
| **Sale** | ✅ |
| **Refund** | ✅ |
| **Reversal** | ✅ |
| **Tokenization** | ✅ |
| **Pre-Authorization** | ❌ (not supported on HiLite) |
| **MOTO Sale** | ❌ (no keypad) |
| **Tip Adjustment** | ✅ (EPI only) |
| **Get Transaction Status** | ❌ (PAX only) |

Acquirer-specific availability: [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) — `android-hilite` column.

## Validation & certification

**Required for every integration:**

- [ ] Bluetooth discovery and direct connect both tested
- [ ] `signatureRequired` callback handled — always call `signatureResult(true)` and display merchant receipt for actual signature verification
- [ ] `transactionReference` persisted before each operation
- [ ] Automatic reconnection behaviour verified (or disabled intentionally)

→ Full scenario checklist: [Validate your integration](/reference/validate-integration)

→ Error codes: [Error codes](/reference/error-codes)
