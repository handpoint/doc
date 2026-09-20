---
title: JavaScript SDK — Integration Guide
sidebar_position: 5
description: Step-by-step guide to integrating the Handpoint JavaScript SDK — npm setup, initialization, transaction flow, result delivery, recovery, and certification.
---

# JavaScript SDK — Integration Guide

:::info AI coding agents
The JavaScript SDK wraps the Handpoint Cloud API. Load the Cloud API path skill for the underlying protocol: [`/.well-known/skills/paths/cloud-api.md`](pathname:///.well-known/skills/paths/cloud-api.md)
:::

## What is the JavaScript SDK?

The Handpoint JavaScript SDK (`@handpoint/cloud-js-sdk`) is an npm package that wraps the Cloud REST API for Node.js and browser applications. It manages the connection, authentication, and result delivery for you — you call `hp.sale()` and `await` the result Promise, without managing raw HTTP or WebSocket frames.

Under the hood it routes commands through the Handpoint Cloud to a PAX SmartPOS terminal — the same network path as the [Cloud REST API](/reference/cloud-api-integration-guide).

## When to use it

| Good fit | Not a good fit |
|---|---|
| Your POS is a Node.js or browser application | You need a mobile SDK — use [Android PAX](/reference/android-pax-integration-guide) or [iOS HiLite](/reference/ios-hilite-integration-guide) |
| You prefer a Promise-based JS interface over raw REST | You need fine-grained control of HTTP headers/retries — use the [Cloud REST API](/reference/cloud-api-integration-guide) directly |
| You're building a web-based kiosk, café POS, or server-side Node.js app | You need Bluetooth reader support — use the Android or iOS SDK |
| You want zero-boilerplate WebSocket/Pusher handling | |

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

---

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

---

## Your first transaction

### Sale

```javascript
// Amount in smallest currency unit — £10.00 = '1000'
const { transactionReference, transactionResult } = hp.sale('1000', 'GBP');

// Persist transactionReference BEFORE awaiting the result
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
        await db.markPaid(result.efttransactionID);
        break;
    case 'DECLINED':
    case 'CANCELLED':
    case 'FAILED':
        await db.clearPending(transactionReference);
        break;
    case 'PARTIAL_APPROVAL':
        // Wait 60 s, then collect split tender or reverse
        await handlePartialApproval(result);
        break;
}
```

---

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

---

## Operations — detailed reference

All financial operations (except `tipAdjustment`) return an `OperationStartedResult` object with:
- `transactionReference` — a UUID generated client-side before the card is presented. **Save this before awaiting.**
- `transactionResult` — a Promise that resolves with a `TransactionResult` object.

### Sale

`sale(amount, currency, saleOptions?, callback_function)`

A sale initiates a payment transaction with the terminal.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | string | Required | Amount in the minor unit of currency (e.g. `'1000'` = £10.00) |
| `currency` | string | Required | ISO 4217 currency code (e.g. `'USD'`, `'GBP'`) |
| `saleOptions` | SaleOptions | Optional | Customisation options: tip configuration, bypass options, merchant auth, metadata, etc. Pass `{}` or omit if not needed |
| `callback_function` | function | Optional | Callback receiving intermediate `TransactionStatus` updates during the operation. Omit if status events are not needed. |

**Code example**

```javascript
const saleOptions = {
    customerReference: 'MyCustomReference',
    tipConfiguration: {
        baseAmount: '100',
        skipEnabled: true,
        enterAmountEnabled: true,
        tipPercentages: [1, 2, 3, 5]
    },
    bypassOptions: {
        signatureBypass: true,
        pinBypass: true
    },
    merchantAuth: [{ acquirer: 'ACQUIRER', mid: '11111', tid: '22222', mcc: '33333' }],
    metadata: { metadata1: 'data1', metadata2: 'data2' },
    moneyRemittanceOptions: { fullName: 'John Doe', countryCode: 'USA' }
};

const operationStartedResult = hp.sale('1000', 'USD', saleOptions, (stat) => {
    console.log('Transaction status ->', stat.message);
});

const transactionReference = operationStartedResult.transactionReference;
// Save transactionReference to DB immediately
const result = await operationStartedResult.transactionResult;
console.log(result.finStatus); // 'AUTHORISED', 'DECLINED', etc.
```

---

### Sale and Tokenization

`saleAndTokenization(amount, currency, saleOptions, callback_function)`

A sale that also returns a card token. Requires tokenization support from your acquirer — check with Handpoint.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | string | Required | Amount in the minor unit of currency |
| `currency` | string | Required | ISO 4217 currency code |
| `saleOptions` | SaleOptions | Required | Customisation options (pass `{}` if none required) |
| `callback_function` | function | Required | Callback for intermediate status updates |

The result `TransactionResult` includes a `cardToken` field with the token representing the card's PAN.

**Code example**

```javascript
const operationStartedResult = hp.saleAndTokenization('1000', 'USD', {}, (stat) => {
    console.log('Status ->', stat.message);
});

const result = await operationStartedResult.transactionResult;
if (result.finStatus === 'AUTHORISED') {
    console.log('Card token:', result.cardToken); // store for future use
}
```

---

### Refund

`refund(amount, currency, originalTransactionID?, refundOptions?, callback_function)`

Moves funds from the merchant account back to the cardholder's card. Pass `originalTransactionID` to create a linked refund (limits the refundable amount to the original transaction). Omit it for a standalone refund.

For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the daily batch.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | string | Required | Amount in the minor unit of currency |
| `currency` | string | Required | ISO 4217 currency code |
| `originalTransactionID` | string | Optional | The `efttransactionID` from the original sale. Makes this a linked refund. Pass `undefined` for standalone. |
| `refundOptions` | RefundOptions | Optional | Customisation options: bypass options, merchant auth, metadata, etc. |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
const refundOptions = {
    customerReference: 'MyCustomReference',
    bypassOptions: { signatureBypass: true, pinBypass: true },
    merchantAuth: [{ acquirer: 'ACQUIRER', mid: '11111', tid: '22222', mcc: '33333' }],
    metadata: { metadata1: 'data1' }
};

// Standalone refund
const operationStartedResult = hp.refund('1000', 'USD', undefined, refundOptions, (stat) => {
    console.log('Status ->', stat.message);
});
const result = await operationStartedResult.transactionResult;

// Linked refund — tied to original sale
hp.refund('1000', 'USD', 'OriginalSaleGUID', refundOptions, (stat) => { /* ... */ });
```

---

### Sale Reversal (Void)

`saleReversal(amount, currency, originalTransactionID, merchantAuthOptions?, callback_function)`

Reverses (voids) a previous sale. The original transaction must not have settled. Reversals are identical to the original transaction amount.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | string | Required | Must match the original sale amount |
| `currency` | string | Required | ISO 4217 currency code |
| `originalTransactionID` | string | Required | The `efttransactionID` of the sale to void |
| `merchantAuthOptions` | MerchantAuthOptions | Optional | Options including `customerReference` and `merchantAuth` |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
const saleReversalOptions = {
    customerReference: 'MyCustomReference',
    merchantAuth: [{ acquirer: 'ACQUIRER', mid: '11111', tid: '22222', mcc: '33333' }]
};

const operationStartedResult = hp.saleReversal('1000', 'USD', 'OriginalSaleGUID',
    saleReversalOptions, (stat) => { console.log('Status ->', stat.message); });

const transactionReference = operationStartedResult.transactionReference;
const result = await operationStartedResult.transactionResult;
```

---

### Refund Reversal (Void Refund)

`refundReversal(amount, currency, originalTransactionID, merchantAuthOptions?, callback_function)`

Reverses a previous refund operation.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | string | Required | Must match the original refund amount |
| `currency` | string | Required | ISO 4217 currency code |
| `originalTransactionID` | string | Required | The `efttransactionID` of the refund to void |
| `merchantAuthOptions` | MerchantAuthOptions | Optional | Options including `customerReference` and `merchantAuth` |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
const refundReversalOptions = {
    customerReference: 'MyCustomReference',
    merchantAuth: [{ acquirer: 'ACQUIRER', mid: '11111', tid: '22222', mcc: '33333' }]
};

const operationStartedResult = hp.refundReversal('1000', 'USD', 'OriginalRefundGUID',
    refundReversalOptions, (stat) => { console.log('Status ->', stat.message); });

const result = await operationStartedResult.transactionResult;
```

---

### Pre-Authorization

`preAuthorization(amount, currency, preauthOptions?, callback_function)`

Places a temporary hold on a cardholder's card. The card is verified and funds are reserved, but not debited until a capture is performed. Used in hospitality, car rental, and other industries where the final amount is not known at check-in.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | string | Required | Amount to hold, in the minor unit of currency |
| `currency` | string | Required | ISO 4217 currency code |
| `preauthOptions` | SaleOptions | Optional | Customisation options |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
const operationStartedResult = hp.preAuthorization('1234', 'EUR', {}, (stat) => {
    console.log('Status ->', stat.message);
});

const transactionReference = operationStartedResult.transactionReference;
const preAuthResult = await operationStartedResult.transactionResult;
const preAuthId = preAuthResult.efttransactionID; // save for capture/increase/reversal
```

---

### Pre-Authorization Increase / Decrease

`preAuthorizationIncrease(amount, currency, originalTransactionID, preauthOptions?, callback_function)`

Adjusts the hold amount of an existing pre-authorization. Pass a positive `amount` to increase the hold (e.g. a restaurant tab growing) or a **negative** amount to partially release funds.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | string | Required | Delta amount (positive to increase, negative to decrease) in minor currency unit |
| `currency` | string | Required | ISO 4217 currency code |
| `originalTransactionID` | string | Required | The `efttransactionID` of the original pre-auth |
| `preauthOptions` | Options | Optional | Merchant authentication options |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
// Increase by £12.34
const operationStartedResult = hp.preAuthorizationIncrease('1234', 'EUR',
    '00000000-0000-0000-0000-000000000000', preauthOptions, (stat) => {
        console.log('Status ->', stat.message);
    });

// Decrease by £12.34 — note negative amount string
hp.preAuthorizationIncrease('-1234', 'EUR', '00000000-0000-0000-0000-000000000000',
    preauthOptions, (stat) => { console.log('Status ->', stat.message); });
```

---

### Pre-Authorization Capture

`preAuthorizationCapture(amount, currency, originalTransactionID, preauthOptions?, callback_function)`

Captures a previously authorized pre-auth, actually debiting the cardholder's account. A pre-auth can only be captured **once**. The capture amount may differ from the original pre-auth within scheme-allowed tolerances.

Capture must happen within the card-scheme authorization window (varies by scheme and MCC — generally 7 to 31 days).

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | string | Required | Amount to capture, in the minor unit of currency |
| `currency` | string | Required | ISO 4217 currency code |
| `originalTransactionID` | string | Required | The `efttransactionID` of the pre-auth |
| `preauthOptions` | Options | Optional | Merchant authentication options |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
const operationStartedResult = hp.preAuthorizationCapture('1234', 'EUR',
    '00000000-0000-0000-0000-000000000000', preauthOptions, (stat) => {
        console.log('Status ->', stat.message);
    });

const result = await operationStartedResult.transactionResult;
// result.finStatus === 'CAPTURED' on success
```

---

### Pre-Authorization Reversal

`preAuthorizationReversal(originalTransactionID, preauthOptions?, callback_function)`

Releases all funds held by a pre-auth (or reverts a capture before settlement). Releases the **entire** amount — use `preAuthorizationIncrease` with a negative amount for partial releases.

A capture reversal is only possible before funds are settled at end of day. Not all acquirers support capture reversal.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `originalTransactionID` | string | Required | The `efttransactionID` of the pre-auth or capture to reverse |
| `preauthOptions` | Options | Optional | Merchant authentication options |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
const operationStartedResult = hp.preAuthorizationReversal(
    '00000000-0000-0000-0000-000000000000', preauthOptions, (stat) => {
        console.log('Status ->', stat.message);
    });

const result = await operationStartedResult.transactionResult;
```

---

### MOTO Sale (Mail/Telephone Order)

`moToSale(amount, currency, saleOptions?, callback_function)`

Initiates a card-not-present sale. The terminal displays a card entry form for the merchant to key in the card number, expiry date, and CVV. The cardholder is not physically present.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | string | Required | Amount in the minor unit of currency |
| `currency` | string | Required | ISO 4217 currency code |
| `saleOptions` | SaleOptions | Optional | Customisation options (customerReference, moneyRemittanceOptions, etc.) |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
const saleOptions = {
    customerReference: 'MyCustomReference',
    moneyRemittanceOptions: { fullName: 'John Doe', countryCode: 'USA' }
};

const operationStartedResult = hp.moToSale('1000', 'USD', saleOptions, (stat) => {
    console.log('Status ->', stat.message);
});

const result = await operationStartedResult.transactionResult;
```

---

### MOTO Refund

`moToRefund(amount, currency, originalTransactionID?, refundOptions?, callback_function)`

Initiates a card-not-present refund. The terminal prompts for manual card entry. Optionally link to an original sale by providing `originalTransactionID` to cap the refundable amount.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | string | Required | Amount in the minor unit of currency |
| `currency` | string | Required | ISO 4217 currency code |
| `originalTransactionID` | string | Optional | Links the refund to an original sale, limiting the refundable amount |
| `refundOptions` | RefundOptions | Optional | Customisation options |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
// Standalone MOTO refund
const operationStartedResult = hp.moToRefund('1000', 'USD', undefined, {}, (stat) => {
    console.log('Status ->', stat.message);
});

// Linked MOTO refund
hp.moToRefund('1000', 'USD', '00000000-0000-0000-0000-000000000000', {}, (stat) => { /* ... */ });
```

---

### MOTO Reversal

`moToReversal(originalTransactionID, options?, callback_function)`

Reverses a previous MOTO sale or refund. Only possible within 24 hours or before the daily batch is submitted.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `originalTransactionID` | string | Required | The `efttransactionID` of the MOTO sale or refund to reverse |
| `options` | Options | Optional | Customisation options (customerReference, metadata) |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
const options = { customerReference: 'MyCustomReference' };

const operationStartedResult = hp.moToReversal(
    '00000000-0000-0000-0000-000000000000', options, (stat) => {
        console.log('Status ->', stat.message);
    });

const result = await operationStartedResult.transactionResult;
```

---

### Tokenize Card

`tokenizeCard(options?, callback_function)`

Prompts the cardholder to present their card on the terminal and returns a card token representing the PAN — without charging anything. Not available for all acquirers; check with Handpoint.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | Options | Optional | Customisation options (customerReference, metadata) |
| `callback_function` | function | Required | Callback for intermediate status updates |

**Code example**

```javascript
const options = { customerReference: 'MyCustomReference' };

const operationStartedResult = hp.tokenizeCard(options, (stat) => {
    console.log('Status ->', stat.message);
});

const result = await operationStartedResult.transactionResult;
if (result.finStatus === 'AUTHORISED') {
    console.log('Card token:', result.cardToken);
}
```

---

### Tip Adjustment

`tipAdjustment(tipAmount, originalTransactionID)` → `Promise<{finStatus, statusMessage}>`

Adjusts the tip amount of a previously authorised sale or pre-auth capture **before** the batch is settled at end of day. This method returns a Promise directly (no `transactionReference`).

**US restaurant industry only.** Supported processors: TSYS and WORLDPAY/VANTIV.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `tipAmount` | string | Required | New tip amount in the minor unit of currency (e.g. `'200'` = $2.00) |
| `originalTransactionID` | string | Required | The `efttransactionID` of the original authorised transaction |

**Code example**

```javascript
// Adjust tip to $2.00 on a previous sale
const status = await hp.tipAdjustment('200', '00000000-0000-0000-0000-000000000000');
// Returns: { finStatus: 'Tip adjusted' } on success or { finStatus: 'ERROR' } on failure
```

---

### Stop Current Transaction

`stopCurrentTransaction()` → `Promise`

Cancels a transaction currently in progress on the terminal. Equivalent to the cardholder pressing the Cancel button. The pending `transactionResult` Promise will resolve with `finStatus: 'CANCELLED'`.

**Code example**

```javascript
await hp.stopCurrentTransaction();
```

---

### Get Transaction Status

`getTransactionStatus(transactionReference)` → `Promise<TransactionResult>`

Queries the Handpoint Cloud for the current status of any transaction by its `transactionReference`. Use this for recovery after a network interruption.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `transactionReference` | string | Required | The UUID returned by `operationStartedResult.transactionReference` |

**Code example**

```javascript
const status = await hp.getTransactionStatus('transactionReference-uuid');
console.log(status.finStatus); // 'AUTHORISED', 'DECLINED', 'IN_PROGRESS', 'UNDEFINED', …
```

---

## SaleOptions object

Applies to `sale`, `saleAndTokenization`, `preAuthorization`, `moToSale`.

| Property | Type | Description |
|---|---|---|
| `customerReference` | string | Arbitrary string echoed back in the result, for your own cross-reference |
| `tokenize` | boolean | Enable tokenization in the payment flow |
| `duplicate_check` | boolean | Disable duplicate transaction detection (default: `true` — detection is on). Set to `false` to suppress the duplicate check menu |
| `tipConfiguration` | TipConfiguration | Configure the tipping menu on the terminal |
| `bypassOptions` | BypassOptions | Skip PIN (`pinBypass`) or signature (`signatureBypass`) prompts |
| `merchantAuth` | MerchantAuth[] | Override MID/TID/MCC for multi-merchant terminals |
| `metadata` | Metadata | Up to 5 arbitrary strings echoed in the result (metadata1–metadata5) |
| `moneyRemittanceOptions` | MoneyRemittanceOptions | Required for Mastercard money remittance (MCC 4829/6540) |

## RefundOptions object

Applies to `refund`, `moToRefund`.

| Property | Type | Description |
|---|---|---|
| `customerReference` | string | Arbitrary string echoed back in the result |
| `tokenize` | boolean | Enable tokenization flow |
| `duplicate_check` | boolean | Disable duplicate detection (default: `true`) |
| `bypassOptions` | BypassOptions | Skip PIN or signature |
| `merchantAuth` | MerchantAuth[] | Multi-merchant terminal routing |
| `metadata` | Metadata | Up to 5 arbitrary string fields |
| `moneyRemittanceOptions` | MoneyRemittanceOptions | Mastercard remittance options |

## MerchantAuth credential

Used in `merchantAuth` arrays to route a transaction to a specific merchant account in a multi-MID scenario.

| Property | Type | Description |
|---|---|---|
| `acquirer` | string | Acquirer identifier (`TSYS`, `VANTIV`, `INTERAC`, `SANDBOX`, etc.) |
| `mid` | string | Override the merchant ID in terminal configuration |
| `tid` | string | Override the terminal ID in terminal configuration |
| `mcc` | string | Override the merchant category code |
| `externalId` | string | Alternative to MID/TID/MCC — looks up credentials in Handpoint backend |

---

## Status callback (intermediate updates)

The `callback_function` parameter receives `TransactionStatus` objects during a transaction. These are **not** the final result — they describe what the terminal is doing at each step.

```javascript
function onStatus(stat) {
    // stat.status — an enum value, e.g. 'WaitingForCard', 'CardTapped', 'Processing'
    // stat.message — human-readable string
    // stat.isCancelAllowed — boolean, whether stopCurrentTransaction() will work now
    // stat.deviceStatus — optional DeviceStatus with battery/app info
    console.log(`[${stat.status}] ${stat.message}`);
    if (stat.isCancelAllowed) {
        // you may offer a Cancel button to the operator
    }
}
```

---

## Batch operations

Back-office operations that do not require a terminal connection.

```javascript
// Summary of a batch
const summary = await hp.batchSummary(serialNumber, deviceType, batchNumber);
// Returns BatchSummaryResponse: batchNumber, batchStatus, transactionCount, netAmount, customFields

// Detailed transaction list for a batch
const detail = await hp.batchDetail(serialNumber, deviceType, batchNumber);
// Returns BatchDetailResponse: batchNumber, batchStatus, details (array of transactions)

// Close a batch
const closed = await hp.closeBatch(serialNumber, deviceType, batchNumber);
// Returns BatchCloseResponse: batchNumber, closeBatchGuid, closedAt, issuerResponseCode
```

---

## Test amounts

| Amount | Behaviour |
|---|---|
| `'3779'` (£37.79) | Issuer — Refer to issuer |
| `'3784'` (£37.84) | Issuer — Not authorized |
| `'3793'` (£37.93) | Issuer — Pick up card |
| `'3757'` (£37.57) | Partial approval (US only) |
| `'3768'` (£37.68) | Request timeout |
| Other | Approved |

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `hp.init()` rejects with 403 | Invalid API key | Verify key in Handpoint Portal |
| `hp.connect()` rejects with 403 | Terminal not assigned to this API key | Contact Integration Support |
| `transactionResult` never resolves | Pusher WebSocket dropped | Implement recovery flow — poll `getTransactionStatus` on startup |
| `hp.listDevices()` returns empty | Terminal offline or not provisioned | Check terminal Wi-Fi, open Payments App |

---

## Validation & certification

**Required for every integration:**

- [ ] `transactionReference` persisted before `await transactionResult`
- [ ] Recovery on app restart — pending transactions polled at startup
- [ ] Partial approval handled — `PARTIAL_APPROVAL` triggers split tender or reversal
- [ ] Connection maintained at all times (not per-transaction)

→ Full scenario checklist: [Validate your integration](/reference/validate-integration)

→ Error codes: [Error codes](/reference/error-codes)

→ Objects reference: [JavaScript Objects Reference](/reference/javascript-objects-reference)

## See Also

- [JavaScript Objects Reference](/reference/javascript-objects-reference) — full type definitions for transaction results, options, and enums
