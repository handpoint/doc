---
title: JavaScript SDK — Integration Guide
sidebar_position: 5
description: Step-by-step guide to integrating the Handpoint JavaScript SDK — npm setup, initialization, transaction flow, result delivery, recovery, and certification.
---

# JavaScript SDK — Integration Guide

:::info AI coding agents
The JavaScript SDK wraps the Handpoint Cloud API. Load the Cloud API path skill for the underlying protocol: [`/.well-known/skills/paths/cloud-api.md`](/.well-known/skills/paths/cloud-api.md)
:::

## What is the JavaScript SDK?

The Handpoint JavaScript SDK (`@handpoint/cloud-js-sdk`) is an npm package that wraps the Cloud REST API for Node.js and browser applications. It manages the connection, authentication, and result delivery for you — you call `hp.sale()` and `await` the result Promise, without managing raw HTTP or WebSocket frames.

Under the hood it routes commands through the Handpoint Cloud to a PAX SmartPOS terminal — the same network path as the [Cloud REST API](/reference/cloud-api-integration-guide).

## When to use it

| ✅ Good fit | ❌ Not a good fit |
|---|---|
| Your POS is a Node.js or browser application | You need a mobile SDK — use [Android PAX](/reference/android-pax-integration-guide) or [iOS HiLite](/reference/ios-hilite-integration-guide) |
| You prefer a Promise-based JS interface over raw REST | You need fine-grained control of HTTP headers/retries — use the [Cloud REST API](/reference/cloud-api-integration-guide) directly |
| You're building a web-based kiosk, café POS, or server-side Node.js app | You need Bluetooth reader support — use the Android or iOS SDK |
| You want zero-boilerplate WebSocket/Pusher handling | — |

## How it works

```
Your Node.js / Browser App
    │  hp.sale('1000', 'GBP')
    ▼
Handpoint JS SDK
    │  POST https://cloud.handpoint.com/transactions
    ▼
Handpoint Cloud API
    │
    ▼
PAX SmartPOS Terminal
    │  chip / tap / swipe + P2PE
    ▼
Transaction result
    │  Delivered over Pusher WebSocket → transactionResult Promise resolves
```

## Authentication

```
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

The SDK uses your merchant API key for all requests. One API key per merchant; multi-merchant systems must map each merchant to their own key.

Credentials provisioned by Handpoint Integration Support. See [Authentication](/reference/authentication).

## Environments & credentials

| Terminal type | `environmentIsDevelopment` | Notes |
|---|---|---|
| PAX **debug** device | `true` | Routes to `cloud.handpoint.io` |
| PAX **production** device (DEMO) | `false` | Simulated acquirer — funds not moved |
| PAX **production** device (live) | `false` | Real transactions |

## Setup

### 1. Request credentials

Contact your Handpoint Integration Support engineer for:
- A DEMO merchant API key
- A PAX DEMO terminal (or debug terminal for lower-level testing)

### 2. Install the SDK

```bash
npm install @handpoint/cloud-js-sdk
```

### 3. Initialise

```javascript
const hp = require('@handpoint/cloud-js-sdk');
// or: import hp from '@handpoint/cloud-js-sdk';

const API_KEY = 'YOUR_MERCHANT_API_KEY';
const IS_DEV  = false;  // true for debug terminal

// onPendingEot fires on startup if a previous transaction has no stored result
await hp.init(API_KEY, IS_DEV, (pendingEoT) => {
    console.log('Recovered transaction:', pendingEoT.transactionReference);
    // retrieve outcome via hp.getTransactionStatus(pendingEoT.transactionReference)
});
```

### 4. Connect to the terminal

```javascript
// deviceName = serialNumber + '-' + terminalType
// e.g. '0821032395-PAXA920'
await hp.connect('0821032395-PAXA920');
```

Maintain the connection at all times — connect once and keep it alive, not per-transaction. The SDK manages the secure channel.

## Your first transaction

### Sale

```javascript
// Amount in smallest currency unit — £10.00 = '1000'
const { transactionReference, transactionResult } = hp.sale('1000', 'GBP');

// ⚠ Persist transactionReference BEFORE awaiting the result
await db.savePendingTransaction(transactionReference);

const result = await transactionResult;

console.log(result.finStatus);  // 'AUTHORISED', 'DECLINED', 'CANCELLED', 'FAILED', …
```

:::warning Persist before await
`transactionReference` is available immediately — before the card is presented. Save it to your database before calling `await transactionResult`. If your server crashes after the card is charged but before you save the reference, you lose the ability to recover.
:::

### Reading the result

```javascript
switch (result.finStatus) {
    case 'AUTHORISED':
        await db.markPaid(result.transactionID);
        break;
    case 'DECLINED':
    case 'CANCELLED':
    case 'FAILED':
        await db.clearPending(transactionReference);
        break;
    case 'PARTIALLY_APPROVED':
        // Wait 60 s, then collect split tender or reverse
        await handlePartialApproval(result);
        break;
}
```

## Transaction recovery

If `await transactionResult` never resolves (WebSocket dropped, server restart), poll the outcome:

```javascript
// On application startup — check for any unresolved transactions
const pending = await db.getPendingTransaction();
if (pending) {
    const status = await hp.getTransactionStatus(pending.transactionReference);
    await handleFinalResult(status, pending.transactionReference);
}

// handleFinalResult:
async function handleFinalResult(result, ref) {
    if (result.finStatus === 'IN_PROGRESS' || result.finStatus === 'UNDEFINED') {
        // Keep polling every 10 s
        setTimeout(() => hp.getTransactionStatus(ref).then(r => handleFinalResult(r, ref)), 10_000);
        return;
    }
    if (result.finStatus === 'AUTHORISED') {
        // Wait 60 s (covers partial approval window), then send reversal if no receipt in DB
        await sendReversalIfNeeded(result);
    }
    await db.clearPending(ref);
}
```

→ Full implementation: [Transaction Recovery — JavaScript SDK](/reference/transaction-recovery-javascript-sdk)

## Operations available

| Operation | Method |
|---|---|
| **Sale** | `hp.sale(amount, currency, options?)` |
| **Refund** | `hp.refund(amount, currency, options?)` |
| **Reversal** | `hp.saleReversal(amount, currency, options?)` |
| **Refund Reversal** | `hp.refundReversal(amount, currency, options?)` |
| **Pre-Authorization** | `hp.preAuthorization(amount, currency, options?)` |
| **Pre-Auth Capture** | `hp.preAuthorizationCapture(amount, currency, options?)` |
| **Pre-Auth Increase** | `hp.preAuthorizationIncrease(amount, currency, options?)` |
| **Pre-Auth Reversal** | `hp.preAuthorizationReversal(amount, currency, options?)` |
| **MOTO Sale** | `hp.moToSale(amount, currency, options?)` |
| **Tokenize Card** | `hp.tokenizeCard(options?)` |
| **Sale and Tokenize** | `hp.saleAndTokenization(amount, currency, options?)` |
| **Tip Adjustment** | `hp.tipAdjustment(amount, originalTransactionId)` |
| **Get Transaction Status** | `hp.getTransactionStatus(transactionReference)` |
| **Batch Summary** | `hp.batchSummary(serialNumber, deviceType, batchNumber)` |
| **Batch Detail** | `hp.batchDetail(serialNumber, deviceType, batchNumber)` |
| **Close Batch** | `hp.closeBatch(serialNumber, deviceType, batchNumber?)` |
| **Stop Transaction** | `hp.stopCurrentTransaction()` |

Acquirer-specific availability: [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) — `cloud-api` column.

## Test amounts

| Amount | Behaviour |
|---|---|
| `'3779'` (£37.79) | Issuer — Refer to issuer |
| `'3784'` (£37.84) | Issuer — Not authorized |
| `'3793'` (£37.93) | Issuer — Pick up card |
| `'3757'` (£37.57) | Partial approval (US only) |
| `'3768'` (£37.68) | Request timeout |
| Other | Approved |

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `hp.init()` rejects with 403 | Invalid API key | Verify key in Handpoint Portal |
| `hp.connect()` rejects with 403 | Terminal not assigned to this API key | Contact Integration Support |
| `transactionResult` never resolves | Pusher WebSocket dropped | Implement recovery flow — poll `getTransactionStatus` on startup |
| `hp.listDevices()` returns empty | Terminal offline or not provisioned | Check terminal Wi-Fi, open Payments App |

## Validation & certification

**Required for every integration:**

- [ ] `transactionReference` persisted before `await transactionResult`
- [ ] Recovery on app restart — pending transactions polled at startup
- [ ] Partial approval handled — `PARTIALLY_APPROVED` triggers split tender or reversal
- [ ] Connection maintained at all times (not per-transaction)

→ Full scenario checklist: [Validate your integration](/reference/validate-integration)

→ Error codes: [Error codes](/reference/error-codes)
