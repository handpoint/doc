---
title: JavaScript SDK — Setup & Integration
sidebar_position: 2
description: Complete guide to integrating the Handpoint Cloud JavaScript SDK — install, initialise, connect, and run transactions from Node.js or a browser application.
---

# JavaScript SDK — Setup & Integration

The Handpoint JavaScript SDK (`@handpoint/cloud-js-sdk`) wraps the Handpoint Cloud REST API and Pusher WebSocket layer into a single npm package. Your server or browser application calls methods like `hp.sale()` and `hp.refund()`, and the SDK handles authentication, command routing, and result delivery transparently.

**Supported environments:** Node.js 16+ and any modern browser (via webpack bundle).  
**Hardware:** PAX SmartPOS terminals (A920, A920 Pro, and equivalents) registered in the Handpoint TMS.  
**PCI scope:** Out of scope — card data is captured directly by the terminal, never by your application.

:::info GitHub
Source: [github.com/handpoint/cloud-js-sdk](https://github.com/handpoint/cloud-js-sdk)
:::

---

## Prerequisites

| Requirement | Detail |
|---|---|
| Node.js | 16.0 or higher |
| Cloud API Key | Obtain from the Handpoint TMS or your Handpoint integration engineer |
| PAX SmartPOS terminal | Registered and connected to Wi-Fi, running the Handpoint Payments App |

---

## Step 1 — Install

```bash
npm install @handpoint/cloud-js-sdk
```

> **Note:** If the package is not yet on the public npm registry, install from the internal Nexus feed — contact your Handpoint engineer for credentials.

---

## Step 2 — Import

### Node.js

```javascript
const hp = require('@handpoint/cloud-js-sdk');
```

Or with ES modules:

```javascript
import hp from '@handpoint/cloud-js-sdk';
```

### Browser (webpack bundle)

Build the bundle with the npm script provided in the package, then include it:

```html
<script src="dist/handpoint-bundle.js"></script>
```

The `Handpoint` class is a singleton — multiple imports return the same instance.

---

## Step 3 — Initialise

Call `hp.init()` once at application start. It authenticates the SDK, selects the correct Cloud endpoints, and returns a Promise that resolves with the list of terminals registered to your API key.

```javascript
const API_KEY = 'your-cloud-api-key';

const devices = await hp.init(API_KEY);
console.log('Registered terminals:', devices);
// devices[n].device_name === '<serialNumber>-<terminalType>'
```

### Production vs development

```javascript
// Production (default)
await hp.init(API_KEY);

// Development / staging
await hp.init(API_KEY, true);   // second argument true = dev endpoints
```

### With a pending-EOT callback

If a transaction result may arrive after a network interruption, register a callback so late results are never lost:

```javascript
function onPendingEot(result) {
  // A result arrived for a transaction whose Promise already timed out
  console.log('Late result:', result.finStatus, result.eFTTransactionID);
  // Persist this to your database — do not treat it as a new transaction
}

await hp.init(API_KEY, false, onPendingEot);
```

---

## Step 4 — Connect to a terminal

Use the `device_name` from the list returned by `init()`. The format is `<serialNumber>-<terminalType>` (e.g., `1851075595-PAXA920PRO`).

```javascript
const deviceName = devices[0].device_name;
await hp.connect(deviceName);
console.log('Connected to', deviceName);
```

> **One connection at a time.** Call `connect()` for the terminal the current operator session is using. Call `disconnect()` before switching to a different terminal.

---

## Step 5 — Run a sale

Amounts are always in the **smallest currency unit** — cents for USD, pence for GBP, etc. Never pass a float.

```javascript
const amount   = 1250;     // $12.50 USD
const currency = 'USD';

const { transactionReference, transactionResult } = hp.sale(amount, currency);

// Persist transactionReference immediately — before awaiting the result
await db.savePendingTransaction(transactionReference);

const result = await transactionResult;

switch (result.finStatus) {
  case 'AUTHORISED':
    console.log('Approved — receipt:', result.customerReceipt);
    break;
  case 'DECLINED':
    console.log('Declined');
    break;
  case 'CANCELLED':
  case 'FAILED':
  case 'NO_CONNECTION':
    console.log('Not charged:', result.errorMessage);
    break;
}
```

### Why save transactionReference before awaiting?

`transactionReference` is generated client-side before the card is presented. If your process crashes or the network drops after the card is tapped but before the result arrives, you can recover the final status by polling `getTransactionStatus(transactionReference)`. See [Transaction Recovery — JavaScript SDK](transaction-recovery-javascript-sdk.md).

---

## Step 6 — Optional: status callback

Pass a fourth argument to receive intermediate status updates (card presented, processing, etc.) during the transaction:

```javascript
function onStatus(statusInfo) {
  // statusInfo.status: 'WaitingForCard', 'CardTapped', 'Processing', ...
  console.log('Status:', statusInfo.status);
}

const { transactionReference, transactionResult } = hp.sale(
  1250, 'USD', {}, onStatus
);
```

The status callback is **not** the final result. Always await `transactionResult` for the authorisation outcome.

---

## All financial operations

Every financial method follows the same return shape: `{ transactionReference, transactionResult }`.

```javascript
// Refund — standalone (no card on file)
hp.refund(500, 'USD');

// Linked refund — tied to a previous sale
hp.refund(500, 'USD', 'original-eft-txn-id');

// Void a sale (reversal)
hp.saleReversal(1250, 'USD', 'original-eft-txn-id');

// Void a refund
hp.refundReversal(500, 'USD', 'original-eft-txn-id');

// Pre-authorisation (hold)
const { transactionResult: preAuthResult } = hp.preAuthorization(5000, 'USD');
const preAuth = await preAuthResult;
const preAuthTxnId = preAuth.eFTTransactionID;

// Capture a pre-auth
hp.preAuthorizationCapture(5000, 'USD', preAuthTxnId);

// Increase a pre-auth hold before capture
hp.preAuthorizationIncrease(6000, 'USD', preAuthTxnId);

// Void a pre-auth
hp.preAuthorizationReversal(preAuthTxnId);

// Mail-order / telephone-order sale (card data entered on terminal)
hp.moToSale(1250, 'USD');

// Tokenise card without charging
hp.tokenizeCard();

// Sale + tokenise in one terminal interaction
hp.saleAndTokenization(1250, 'USD');
```

### Tip adjustment

`tipAdjustment()` returns a Promise directly (no `transactionReference`), since the tip is adjusted post-authorisation via the REST back-office API:

```javascript
// Adjust settled amount — tipAmount in smallest currency unit
const status = await hp.tipAdjustment(200, 'eft-txn-id');
console.log('Tip status:', status.finStatus);
```

### Transaction status query

Query the Cloud for the current status of any transaction by reference. Use this for recovery after a network interruption:

```javascript
const status = await hp.getTransactionStatus('transactionReference-uuid');
console.log(status.finStatus); // 'AUTHORISED', 'DECLINED', 'IN_PROGRESS', ...
```

See [Transaction Recovery — JavaScript SDK](transaction-recovery-javascript-sdk.md) for the full recovery algorithm.

---

## Batch operations

Available as standalone back-office REST calls — no terminal connection required:

```javascript
// Batch summary for a device
const summary = await hp.batchSummary(batchNumber, deviceType, serialNumber);

// Batch detail (individual transaction list)
const detail = await hp.batchDetail(batchNumber, deviceType, serialNumber);

// Close a batch
const closed = await hp.closeBatch(batchNumber, deviceType, serialNumber);
```

---

## Terminal utility operations

```javascript
// List registered terminals (re-fetches from TMS)
const terminals = await hp.listDevices();

// Ping the connected terminal to verify it is online
await hp.pingDevice();

// Cancel a transaction in progress
await hp.stopCurrentTransaction();

// Disconnect from the terminal
await hp.disconnect(deviceName);

// Trigger firmware update on the terminal
hp.update();

// Print a receipt on the terminal printer
hp.printReceipt(receiptHtmlString);
```

---

## Complete minimal example

```javascript
const hp = require('@handpoint/cloud-js-sdk');

async function runPayment() {
  // 1. Initialise
  const devices = await hp.init('YOUR_API_KEY');
  if (!devices.length) throw new Error('No terminals registered');

  // 2. Connect
  const deviceName = devices[0].device_name;
  await hp.connect(deviceName);

  // 3. Sale
  const { transactionReference, transactionResult } = hp.sale(1000, 'USD');
  console.log('Reference:', transactionReference);   // save this before awaiting

  const result = await transactionResult;
  console.log('Final status:', result.finStatus);

  // 4. Disconnect
  await hp.disconnect(deviceName);
}

runPayment().catch(console.error);
```

---

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| `init()` rejects with 403 | Invalid or expired API key |
| `connect()` rejects with 403 | Pusher auth failed — check API key and terminal registration in TMS |
| `transactionResult` never resolves | Terminal offline or Pusher channel subscription failed |
| `listDevices()` returns empty | No terminals registered for this API key |
| Status callback fires but `transactionResult` never resolves | Network dropped after card tap — use `getTransactionStatus()` to recover |

---

## Next steps

- [Transaction Recovery — JavaScript SDK](transaction-recovery-javascript-sdk.md) — handling dropped connections and late results
- [Authentication](authentication.md) — API key setup and scopes
- [Testing edge cases](testing-edge-cases.md) — simulating declines, timeouts, and reversals
