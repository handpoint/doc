---
# JavaScript SDK — path skill

Use this path for Node.js or browser applications using `@handpoint/cloud-js-sdk`. The SDK wraps the Handpoint Cloud API — load `paths/cloud-api.md` for the underlying protocol reference.

Also load your acquirer skill: `acquirers/{acquirer}.md`

## Installation

```bash
npm install @handpoint/cloud-js-sdk
```

## Initialization

```javascript
const hp = require('@handpoint/cloud-js-sdk');
// or: import hp from '@handpoint/cloud-js-sdk';

// isDev: true → cloud.handpoint.io (debug terminals)
// isDev: false → cloud.handpoint.com (production / DEMO terminals)
await hp.init(API_KEY, isDev, (pendingEoT) => {
    // Called on startup if a previous transaction has no stored result
    hp.getTransactionStatus(pendingEoT.transactionReference)
        .then(result => handleFinalResult(result));
});
```

## Connect

```javascript
// deviceName = serialNumber-terminalType, e.g. '0821032395-PAXA920'
await hp.connect(deviceName);
// Connect ONCE and keep alive — never connect/disconnect per transaction
```

## OperationStartedResult pattern

All financial operations (except `tipAdjustment`) return `{ transactionReference, transactionResult }` synchronously.

```javascript
const { transactionReference, transactionResult } = hp.sale('1000', 'USD');
// CRITICAL: persist transactionReference BEFORE awaiting — enables crash recovery
await db.savePendingTransaction(transactionReference);
const result = await transactionResult;
// result is a TransactionResult object
```

`transactionReference` is a UUID generated client-side before the card is presented. Save it to your DB immediately so you can recover if the process crashes after the card is charged but before the result resolves.

---

## All operations

### sale

```javascript
hp.sale(amount, currency, saleOptions?, callback_function)
```

| Param | Type | Notes |
|---|---|---|
| `amount` | string | Minor currency unit, e.g. `'1000'` = $10.00 |
| `currency` | string | ISO 4217 code, e.g. `'USD'` |
| `saleOptions` | SaleOptions | Optional. tipConfiguration, bypassOptions, merchantAuth, metadata, duplicate_check, tokenize, moneyRemittanceOptions |
| `callback_function` | function | Receives intermediate TransactionStatus objects |

Returns `OperationStartedResult`.

### saleAndTokenization

```javascript
hp.saleAndTokenization(amount, currency, saleOptions, callback_function)
```

Same as `sale` but also populates `result.cardToken`. Not available for all acquirers.

### refund

```javascript
hp.refund(amount, currency, originalTransactionID?, refundOptions?, callback_function)
```

Pass `originalTransactionID` (the `efttransactionID` from the original sale) to create a **linked** refund that caps the refundable amount. Pass `undefined` for a standalone refund.

```javascript
// Standalone
hp.refund('1000', 'USD', undefined, {}, onStatus);
// Linked
hp.refund('1000', 'USD', 'original-eft-txn-id', {}, onStatus);
```

### saleReversal

```javascript
hp.saleReversal(amount, currency, originalTransactionID, merchantAuthOptions?, callback_function)
```

Voids a previously authorised sale. Amount must match original. `originalTransactionID` is the `efttransactionID` of the sale.

### refundReversal

```javascript
hp.refundReversal(amount, currency, originalTransactionID, merchantAuthOptions?, callback_function)
```

Voids a previously processed refund.

### preAuthorization

```javascript
hp.preAuthorization(amount, currency, preauthOptions?, callback_function)
```

Places a hold on the card without debiting. Returns `OperationStartedResult`. Save `result.efttransactionID` for subsequent increase/capture/reversal.

### preAuthorizationIncrease

```javascript
hp.preAuthorizationIncrease(amount, currency, originalTransactionID, preauthOptions?, callback_function)
```

Increases (positive `amount`) or decreases (negative `amount`) the hold of an existing pre-auth. `originalTransactionID` = `efttransactionID` of the pre-auth.

### preAuthorizationCapture

```javascript
hp.preAuthorizationCapture(amount, currency, originalTransactionID, preauthOptions?, callback_function)
```

Captures the pre-auth, debiting the cardholder. Can only be captured **once**. `result.finStatus === 'CAPTURED'` on success. Capture window is 7–31 days depending on MCC and scheme.

### preAuthorizationReversal

```javascript
hp.preAuthorizationReversal(originalTransactionID, preauthOptions?, callback_function)
```

Releases all funds held by a pre-auth, or reverts a capture before settlement. No amount parameter — always releases the full amount.

### moToSale

```javascript
hp.moToSale(amount, currency, saleOptions?, callback_function)
```

Card-not-present sale. Terminal displays a form for the merchant to key in card number, expiry, and CVV. `result.cardEntryType === 'CNP'`.

### moToRefund

```javascript
hp.moToRefund(amount, currency, originalTransactionID?, refundOptions?, callback_function)
```

Card-not-present refund. Pass `originalTransactionID` to create a linked refund.

### moToReversal

```javascript
hp.moToReversal(originalTransactionID, options?, callback_function)
```

Voids a MOTO sale or refund. No amount parameter. Must be within 24 h or before the daily batch.

### moToPreAuthorization

```javascript
hp.moToPreAuthorization(amount, currency, options?, callback_function)
```

Card-not-present pre-authorization.

### tokenizeCard

```javascript
hp.tokenizeCard(options?, callback_function)
```

Presents the terminal to the cardholder, returns `result.cardToken` in a TransactionResult without charging anything. Not available for all acquirers.

### tipAdjustment

```javascript
// Returns Promise<{finStatus}> directly — NOT OperationStartedResult
const status = await hp.tipAdjustment(tipAmount, originalTransactionID);
// 'Tip adjusted' = OK; 'ERROR' = NOK
```

US-only. TSYS and WORLDPAY/VANTIV only. Restaurant industry. Must be called before the daily batch settlement. No `transactionReference` — no recovery possible.

### stopCurrentTransaction

```javascript
await hp.stopCurrentTransaction();
// pending transactionResult will resolve with finStatus: 'CANCELLED'
```

### getTransactionStatus (recovery)

```javascript
const status = await hp.getTransactionStatus(transactionReference);
// Returns TransactionResult with finStatus indicating current state
```

---

## finStatus — primary outcome field

| Value | Meaning | Action |
|---|---|---|
| `'AUTHORISED'` | Approved | Fulfil order, store `efttransactionID` |
| `'DECLINED'` | Declined by acquirer/issuer | Clear pending, prompt cardholder |
| `'CANCELLED'` | Cardholder cancelled | Clear pending |
| `'FAILED'` | Technical failure | Card NOT charged. Clear pending. |
| `'PARTIAL_APPROVAL'` | US only — partial funds approved | Collect remainder, or reverse the partial |
| `'CAPTURED'` | Pre-auth captured | Funds moving to merchant |
| `'IN_PROGRESS'` | (getTransactionStatus) No final result yet | Poll again in 10 s |
| `'UNDEFINED'` | (getTransactionStatus) Not found after 90 s | Card NOT charged. Safe to clear. |
| `'REFUNDED'` | (getTransactionStatus) Original sale refunded | Informational |

---

## TransactionResult key fields

| Field | Notes |
|---|---|
| `finStatus` | Always check first |
| `efttransactionID` | Handpoint unique ID — use for reversal, linked refund, tip adjustment |
| `transactionID` | Terminal internal counter — not used for reversal |
| `totalAmount` | Actual charged amount (includes tip) |
| `requestedAmount` | Amount sent to terminal |
| `tipAmount` | Tip in minor currency unit |
| `dueAmount` | Remainder after partial approval (US only) |
| `cardToken` | PAN token — only on tokenize/saleAndTokenization |
| `customerReceipt` | URL or HTML string |
| `merchantReceipt` | URL or HTML string |
| `signatureUrl` | URL or base64 binary |
| `maskedCardNumber` | e.g. `"************1456"` |
| `cardSchemeName` | `'MasterCard'`, `'Visa'`, etc. |
| `cardEntryType` | `'MSR'`, `'ICC'`, `'CNP'` |
| `recoveredTransaction` | `true` if delivered via recovery loop |
| `metadata` | Echoed metadata1–metadata5 |
| `errorMessage` | Human-readable error on failure |

---

## Receipt and signature: URL vs fallback

`customerReceipt`, `merchantReceipt`, and `signatureUrl` are normally URLs. If the upload to Handpoint servers failed, the SDK returns the raw content instead:

```javascript
// Receipt: URL or HTML string
if (result.customerReceipt.startsWith('http')) {
    window.open(result.customerReceipt);
} else {
    document.getElementById('receipt').innerHTML = result.customerReceipt;
}

// Signature: URL or base64 binary
if (result.signatureUrl.startsWith('http')) {
    imgEl.src = result.signatureUrl;
} else {
    imgEl.src = 'data:image/png;base64,' + result.signatureUrl;
}
```

---

## Recovery pattern

```javascript
// On application startup — recover any unresolved transaction
async function recoverOnStartup() {
    const pending = await db.getPendingTransaction();
    if (!pending) return;

    const status = await hp.getTransactionStatus(pending.transactionReference);

    if (status.finStatus === 'IN_PROGRESS' || status.finStatus === 'UNDEFINED') {
        // Not yet resolved — check again in 10 s
        setTimeout(recoverOnStartup, 10_000);
        return;
    }
    if (status.finStatus === 'AUTHORISED') {
        // Transaction charged but DB record missing — send a reversal
        await hp.saleReversal(status.totalAmount, status.currency, status.efttransactionID,
            {}, () => {});
    }
    await db.clearPending(pending.transactionReference);
}
```

---

## Status callback

The third argument to every financial operation receives intermediate `TransactionStatus` objects while the transaction is in progress.

```javascript
function onStatus(stat) {
    // stat.status — e.g. 'WaitingForCard', 'CardTapped', 'Processing'
    // stat.message — human-readable description
    // stat.isCancelAllowed — whether stopCurrentTransaction() will work now
    console.log(`[${stat.status}] ${stat.message}`);
}
```

---

## SaleOptions quick reference

```javascript
const saleOptions = {
    customerReference: 'POS-REF-001',
    tokenize: false,
    duplicate_check: true,     // false to bypass the duplicate check menu
    tipConfiguration: {
        baseAmount: '1000',
        skipEnabled: true,
        enterAmountEnabled: true,
        tipPercentages: [10, 15, 18, 20]
    },
    bypassOptions: {
        pinBypass: false,
        signatureBypass: true
    },
    merchantAuth: [{
        acquirer: 'TSYS',      // TSYS | VANTIV | INTERAC | SANDBOX | etc.
        mid: '11111',
        tid: '22222',
        mcc: '5411'
    }],
    metadata: {
        metadata1: 'table-5',
        metadata2: 'cover-3'
    },
    moneyRemittanceOptions: {  // Required for MCC 4829 / 6540 Mastercard
        fullName: 'John Doe',
        countryCode: 'USA'     // ISO 3166-1 alpha-3
    }
};
```

---

## Batch operations (no terminal connection needed)

```javascript
const summary = await hp.batchSummary(serialNumber, deviceType, batchNumber);
// Returns: { batchNumber, batchStatus, transactionCount, netAmount, customFields, ... }

const detail  = await hp.batchDetail(serialNumber, deviceType, batchNumber);
// Returns: { batchNumber, batchStatus, details: [{transactionType, amount, ...}], ... }

const closed  = await hp.closeBatch(serialNumber, deviceType, batchNumber);
// Returns: { batchNumber, closeBatchGuid, closedAt, issuerResponseCode, ... }
```

---

## Enums — quick reference

**CardEntryType:** `'UNDEFINED'` | `'MSR'` | `'ICC'` | `'CNP'`

**PaymentScenario:** `'UNKNOWN'` | `'MAGSTRIPE'` | `'MAGSTRIPECONTACTLESS'` | `'CHIP'` | `'CHIPCONTACTLESS'` | `'CHIPFAILMAGSTRIPE'` | `'MOTO'`

**TenderType:** `'CREDIT'` | `'DEBIT'`

**VerificationMethod:** `'UNDEFINED'` | `'SIGNATURE'` | `'PIN'` | `'PIN_SIGNATURE'` | `'FAILED'` | `'NOT_REQUIRED'` | `'MOBILE_PASS_CODE'`

**TransactionType:** `'SALE'` | `'VOID_SALE'` | `'REFUND'` | `'VOID_REFUND'` | `'TOKENIZE_CARD'` | `'MOTO_SALE'` | `'MOTO_REFUND'` | `'MOTO_REVERSAL'` | `'SALE_AND_TOKENIZE_CARD'` | `'PRINT_RECEIPT'` | others

**Acquirer:** `'TSYS'` | `'VANTIV'` | `'INTERAC'` | `'AMEX'` | `'BORGUN'` | `'EVO'` | `'OMNIPAY'` | `'POSTBRIDGE'` | `'SANDBOX'`

---

## See also

- Underlying protocol: load `paths/cloud-api.md`
- Acquirer constraints: load `acquirers/{acquirer}.md`
- Full objects reference: https://developer.handpoint.com/reference/javascript-objects-reference
- Integration guide with all operations: https://developer.handpoint.com/reference/javascript-sdk-integration-guide
