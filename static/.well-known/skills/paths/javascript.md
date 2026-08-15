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

await hp.init(API_KEY, isDev, (pendingEoT) => {
    // recover pending transaction on startup
    hp.getTransactionStatus(pendingEoT.transactionReference)
        .then(result => handleFinalResult(result));
});
```

`isDev: true` routes to `cloud.handpoint.io` (debug devices). `isDev: false` routes to `cloud.handpoint.com` (production/DEMO).

## Connect

```javascript
// deviceName = serialNumber-terminalType, e.g. '0821032395-PAXA920'
await hp.connect(deviceName);
// Connect once and keep alive — do NOT connect/disconnect per transaction
```

## Sale

```javascript
const { transactionReference, transactionResult } = hp.sale('1000', 'USD');
// ⚠ Persist transactionReference BEFORE awaiting
await db.savePendingTransaction(transactionReference);
const result = await transactionResult;
```

## finStatus values

| Value | Meaning | Action |
|---|---|---|
| `'AUTHORISED'` | Approved | Store `transactionID`, fulfil order |
| `'DECLINED'` | Declined | Clear pending |
| `'CANCELLED'` | Cardholder cancelled | Clear pending |
| `'FAILED'` | Technical failure | Clear pending |
| `'PARTIALLY_APPROVED'` | Partial amount approved | Wait 60 s — split tender or reverse |
| `'IN_PROGRESS'` / `'UNDEFINED'` | No final status yet | Poll `getTransactionStatus` |

## Recovery

```javascript
const status = await hp.getTransactionStatus(transactionReference);
```

If `IN_PROGRESS` or `UNDEFINED`, poll again after 10 s. On `AUTHORISED` with no DB record, send a reversal.

## All operations

`sale`, `refund`, `saleReversal`, `refundReversal`, `preAuthorization`, `preAuthorizationCapture`, `preAuthorizationIncrease`, `preAuthorizationReversal`, `moToSale`, `tokenizeCard`, `saleAndTokenization`, `tipAdjustment`, `getTransactionStatus`, `closeBatch`, `batchSummary`, `batchDetail`, `stopCurrentTransaction`, `listDevices`, `connect`, `disconnect`.

## See also

- Underlying protocol: load `paths/cloud-api.md`
- Acquirer constraints: load `acquirers/{acquirer}.md`
- Transaction recovery full guide: https://developer.handpoint.com/reference/transaction-recovery-javascript-sdk
