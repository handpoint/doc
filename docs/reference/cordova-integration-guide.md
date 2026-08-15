---
title: Cordova SDK — Integration Guide
sidebar_position: 7
description: Step-by-step guide to integrating the Handpoint Cordova plugin for cross-platform Cordova and Ionic apps — setup, device connection, transaction flow, recovery, and certification.
---

# Cordova SDK — Integration Guide

:::info AI coding agents
Fetch the integration-path skill for machine-readable setup guidance and code examples: [`/.well-known/skills/paths/cordova.md`](/.well-known/skills/paths/cordova.md)
:::

## What is this integration path?

The Handpoint Cordova plugin (`cordova-plugin-handpoint`) brings payment capabilities to **cross-platform Cordova and Ionic applications**. It supports both PAX SmartPOS terminals (via Cloud) and HiLite Bluetooth readers.

Choose this path when your team is already building in Cordova or Ionic and wants payment without a separate native SDK.

## When to use it

| ✅ Good fit | ❌ Not a good fit |
|---|---|
| Your app is built with Cordova or Ionic | You're building a native Android app — use the [Android PAX](/reference/android-pax-integration-guide) or [Android HiLite](/reference/android-hilite-integration-guide) path |
| You need a single codebase for Android and iOS | You need iOS + HiLite — the [iOS HiLite path](/reference/ios-hilite-integration-guide) is the native option |
| You're targeting PAX Cloud or HiLite Bluetooth | You need advanced pre-auth — not supported on HiLite via Cordova |

## Capabilities not available on HiLite via Cordova

- Pre-authorization
- MOTO / remote sale on-terminal

## How it works

```
Your Cordova / Ionic App
    │  HAPI.sale({ amount, currency })
    ▼
cordova-plugin-handpoint
    │  Cloud (PAX) or Bluetooth (HiLite)
    ▼
PAX Terminal or HiLite Reader
    │  chip / tap / swipe + P2PE
    ▼
handpoint.transactionResultReady DOM event
```

## Authentication

| Credential | Purpose | Provisioned by |
|---|---|---|
| `apiKey` | Merchant API key for Cloud connection | Handpoint Integration Support |
| `sharedSecret` | For Bluetooth (HiLite) — authenticates to reader | Handpoint Integration Support |

## Setup

### 1. Request credentials

Contact your Handpoint Integration Support engineer for:
- A merchant API key (PAX Cloud) or shared secret (HiLite)
- A PAX DEMO terminal or HiLite reader

### 2. Install the plugin

**Cordova:**
```bash
cordova plugin add cordova-plugin-handpoint
```

**Ionic:**
```bash
npm install cordova-plugin-handpoint
ionic cap sync
```

### 3. Initialise

```javascript
// PAX Cloud path
HAPI.init({
    apiKey:           'YOUR_MERCHANT_API_KEY',
    connectionMethod: 'CLOUD'
}, successCallback, errorCallback);

// HiLite Bluetooth path
HAPI.init({
    apiKey:           'YOUR_MERCHANT_API_KEY',
    connectionMethod: 'BLUETOOTH'
}, successCallback, errorCallback);
```

Call `HAPI.init()` once on app start. Do not re-initialise per transaction.

### 4. Register event listeners

```javascript
// Transaction result
document.addEventListener('handpoint.transactionResultReady', function(event) {
    const result = event.detail;
    handleResult(result);
});

// Device discovery (HiLite Bluetooth path)
document.addEventListener('handpoint.deviceDiscoveryFinished', function(event) {
    const devices = event.detail.devices;
    if (devices.length > 0) {
        HAPI.connect({ deviceName: devices[0].name }, success, error);
    }
});
```

### 5. Connect to a terminal

**PAX Cloud:**
```javascript
// Connect by device name (serial-model format)
HAPI.connect({ deviceName: '0821032395-PAXA920' }, successCallback, errorCallback);
```

**HiLite Bluetooth — discovery:**
```javascript
HAPI.startMonitoring(successCallback, errorCallback);
// deviceDiscoveryFinished event fires with the list
```

## Your first transaction

```javascript
// Amount in smallest currency unit — £10.00 = 1000
HAPI.sale({
    amount:            1000,
    currency:          'GBP',
    customerReference: 'ORDER-123'
}, successCallback, errorCallback);

// Result arrives in handpoint.transactionResultReady event
```

### Reading the result

```javascript
document.addEventListener('handpoint.transactionResultReady', function(event) {
    const result   = event.detail;
    const status   = result.finStatus;     // 'AUTHORISED', 'DECLINED', etc.
    const txId     = result.transactionID; // store for reversals and refunds

    switch (status) {
        case 'AUTHORISED':
            db.markPaid(txId);
            break;
        case 'DECLINED':
        case 'CANCELLED':
        case 'FAILED':
            db.clearPending();
            break;
        case 'UNDEFINED':
            // Do not retry — recover via getTransactionStatus
            startBackgroundRecovery(savedTransactionReference);
            break;
    }
});
```

:::warning UNDEFINED means unknown — do not retry
`UNDEFINED` indicates no result was received (e.g. connection dropped after card tap). The transaction may have processed. Always recover via `HAPI.getTransactionStatus()` before retrying.
:::

## Transaction recovery

Always save a `transactionReference` you generate before starting any operation.

```javascript
const transactionReference = generateUUID();
db.savePendingTransaction(transactionReference);

HAPI.sale({
    amount:               1000,
    currency:             'GBP',
    transactionReference: transactionReference
}, success, error);
```

On `UNDEFINED` or app restart with a pending reference:

```javascript
function startBackgroundRecovery(ref) {
    HAPI.getTransactionStatus(
        { transactionReference: ref },
        function(result) {
            if (result.finStatus === 'IN_PROGRESS' || result.finStatus === 'UNDEFINED') {
                // Poll again in 10 s
                setTimeout(() => startBackgroundRecovery(ref), 10_000);
                return;
            }
            // Wait 60 s before acting (covers PARTIALLY_APPROVED window)
            setTimeout(() => {
                if (result.finStatus === 'AUTHORISED') {
                    sendReversal(result.transactionID);
                }
                db.clearPending(ref);
            }, 60_000);
        },
        function(error) {
            console.error('getTransactionStatus error:', error);
        }
    );
}

// On app startup
const pending = db.getPendingTransaction();
if (pending) startBackgroundRecovery(pending.ref);
```

→ Full implementation: [Transaction Recovery — Cordova SDK](/reference/transaction-recovery-cordova-sdk)

## Operations available

| Operation | Method |
|---|---|
| **Sale** | `HAPI.sale({ amount, currency, customerReference? })` |
| **Refund** | `HAPI.refund({ amount, currency, originalTransactionId? })` |
| **Reversal** | `HAPI.reversal({ originalTransactionId, amount? })` |
| **Pre-Authorization** | `HAPI.preAuthorization({ amount, currency })` — PAX only |
| **Pre-Auth Capture** | `HAPI.preAuthorizationCapture({ amount, originalTransactionId })` — PAX only |
| **Pre-Auth Reversal** | `HAPI.preAuthorizationReversal({ originalTransactionId })` — PAX only |
| **Tip Adjustment** | `HAPI.tipAdjustment({ tipAmount, originalTransactionId })` — EPI only |
| **Get Transaction Status** | `HAPI.getTransactionStatus({ transactionReference })` |
| **Stop Transaction** | `HAPI.stopCurrentTransaction()` |

Acquirer-specific availability: [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) — `cordova` column.

## Test amounts

| Amount | Behaviour |
|---|---|
| `3779` | Issuer — Refer to issuer |
| `3784` | Issuer — Not authorized |
| `3793` | Issuer — Pick up card |
| Other | Approved |

## Validation & certification

**Required for every integration:**

- [ ] `transactionReference` generated and persisted before each `HAPI.sale()` call
- [ ] `handpoint.transactionResultReady` listener registered before any transaction starts
- [ ] `UNDEFINED` recovery flow implemented and tested
- [ ] App-restart recovery — pending reference polled on startup
- [ ] Partial approval handled

→ Full scenario checklist: [Validate your integration](/reference/validate-integration)

→ Error codes: [Error codes](/reference/error-codes)
