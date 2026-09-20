---
id: cordova-objects-reference
title: "Cordova Plugin — Objects Reference"
sidebar_label: "Cordova Objects Reference"
description: Complete reference for all objects, enums, and method signatures in the Handpoint Cordova plugin.
---

# Cordova Plugin — Objects Reference

This page is the authoritative reference for every object, enum, and method in the Handpoint Cordova plugin (`cordova-plugin-handpoint`). For event payloads and the persistent event handler pattern, see [Cordova — Events Reference](/reference/cordova-events).

---

## Plugin initialization

Call `handpoint.setup()` once on app start, before any other operations. Register the persistent event handler separately with `handpoint.eventHandler()` — see [Cordova — Events Reference](/reference/cordova-events) for the full event registration pattern.

### `handpoint.setup(params, successCb, errorCb)`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.sharedSecret` | string | Yes | 64-character hex string authenticating the app to the payment terminal. Obtained from Handpoint Integration Support. |
| `params.serialNumber` | string | Conditional | Serial number of the HiLite Bluetooth reader. Required when connecting via `USB_HID`. Not used for PAX SmartPOS. |
| `params.device` | Device | No | The device to connect to immediately after setup. If omitted, call `handpoint.connect()` separately. |
| `params.automaticReconnection` | boolean | No | Automatically reconnect on disconnect. Default: `true`. |

```javascript
// PAX SmartPOS (Cloud path)
handpoint.setup(
  {
    sharedSecret: 'YOUR_SHARED_SECRET',
    automaticReconnection: true,
  },
  function(result) { console.log('Setup complete', result); },
  function(error) { console.error('Setup failed', error); }
);

// HiLite Bluetooth
handpoint.setup(
  {
    sharedSecret: 'YOUR_SHARED_SECRET',
    serialNumber: 'HILITE-XXXX',
    device: {
      name: 'HiLite-XXXX',
      address: 'XX:XX:XX:XX:XX:XX',
      connectionMethod: 'USB_HID',
    },
    automaticReconnection: true,
  },
  function(result) { console.log('Setup complete', result); },
  function(error) { console.error('Setup failed', error); }
);
```

---

## Device object

Represents a payment terminal connection target. Pass as `params.device` in `handpoint.setup()` or directly to `handpoint.connect()`.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Descriptive name for the device (any string). Used for display and discovery matching. |
| `address` | string | Conditional | Bluetooth MAC address (e.g. `"XX:XX:XX:XX:XX:XX"`). Required for `USB_HID` (HiLite). Not needed for `ANDROID_PAYMENT` or `SIMULATOR`. |
| `connectionMethod` | string | Yes | How the plugin connects to the terminal. One of the [ConnectionMethod](#connectionmethod-enum) values. |

```javascript
// PAX SmartPOS (integrated mode)
const device = {
  name: 'PAX A920',
  connectionMethod: 'ANDROID_PAYMENT',
};

// HiLite Bluetooth reader
const device = {
  name: 'HiLite-XXXX',
  address: 'XX:XX:XX:XX:XX:XX',
  connectionMethod: 'USB_HID',
};

// Simulator (development)
const device = {
  name: 'Simulator',
  connectionMethod: 'SIMULATOR',
};
```

---

## Transaction methods

All financial operations share the same signature: `handpoint.<method>(params, successCb, errorCb)`.

- **`successCb(result)`** — called when the operation completes. The argument is a [TransactionResult](#transactionresult-object). On some platforms the result also arrives via the `endOfTransaction` event — register a persistent event handler with `handpoint.eventHandler()` to handle both paths.
- **`errorCb(error)`** — called immediately if the SDK rejects the operation before it starts (not on a card decline). See [Error handling](#error-handling).

### Sale operations

#### `handpoint.sale(params, successCb, errorCb)`

Initiates a card-present sale.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.amount` | number | Yes | Amount in the minor unit of the currency (e.g. `1000` = $10.00 USD). |
| `params.currency` | string | Yes | ISO 4217 three-letter currency code (e.g. `'USD'`). See [Currency enum](#currency-enum). |
| `params.customerReference` | string | No | Arbitrary string echoed in `TransactionResult.customerReference`. Max 25 characters. Use for order IDs. |
| `params.tipConfiguration` | TipConfiguration | No | Configures the tipping prompt on the terminal. See [TipConfiguration](#tipconfiguration-object). |
| `params.transactionReference` | string | No | UUID you generate to identify this operation. Store persistently before calling — used for UNDEFINED recovery. |

```javascript
handpoint.sale(
  {
    amount: 1000,
    currency: 'USD',
    customerReference: 'ORDER-123',
    tipConfiguration: {
      tipPercentages: [10, 15, 18, 20],
      enterAmountEnabled: true,
      skipEnabled: true,
      footer: 'Thank you!',
    },
  },
  function(result) { handleResult(result); },
  function(error) { console.error('Sale rejected:', error); }
);
```

---

#### `handpoint.saleReversal(params, successCb, errorCb)`

Reverses a previous sale. Cancels an authorised transaction before batch settlement.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.originalTransactionID` | string | Yes | The `transactionID` from the original sale's `TransactionResult`. |
| `params.customerReference` | string | No | Reference string echoed in the result. |

---

### Refund operations

#### `handpoint.refund(params, successCb, errorCb)`

Issues a refund. Can be linked (referencing a prior sale) or unlinked (standalone).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.amount` | number | Yes | Refund amount in minor units. Must be ≤ original sale amount for linked refunds. |
| `params.currency` | string | Yes | ISO 4217 currency code. |
| `params.originalTransactionID` | string | No | The `transactionID` from the original sale. Omit for an unlinked refund. |
| `params.customerReference` | string | No | Reference string echoed in the result. |

```javascript
// Linked refund
handpoint.refund(
  { amount: 1000, currency: 'USD', originalTransactionID: 'txn-id-from-sale' },
  successCb, errorCb
);

// Unlinked refund
handpoint.refund(
  { amount: 1000, currency: 'USD' },
  successCb, errorCb
);
```

---

#### `handpoint.refundReversal(params, successCb, errorCb)`

Reverses a previously issued refund.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.originalTransactionID` | string | Yes | The `transactionID` from the refund to reverse. |
| `params.customerReference` | string | No | Reference string echoed in the result. |

---

### Pre-authorization operations

Pre-authorization is available on PAX SmartPOS only. It is **not supported on HiLite via Cordova**.

#### `handpoint.preAuthorization(params, successCb, errorCb)`

Places a hold on cardholder funds without capturing them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.amount` | number | Yes | Hold amount in minor units. |
| `params.currency` | string | Yes | ISO 4217 currency code. |
| `params.customerReference` | string | No | Reference string echoed in the result. |

---

#### `handpoint.preAuthorizationIncrease(params, successCb, errorCb)`

Adjusts the authorized hold amount of a pending pre-authorization. Available on PAX SmartPOS only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.amount` | number | Yes | Adjustment amount in minor units (e.g. `500` = $5.00). |
| `params.currency` | string | Yes | ISO 4217 currency code. Must match the original pre-authorization. |
| `params.originalTransactionID` | string | Yes | The `transactionID` from the original pre-authorization result. |
| `params.tipAmount` | number | No | Tip amount in minor units to include in the hold adjustment. |
| `params.customerReference` | string | No | Reference string echoed in the result. |

```javascript
handpoint.preAuthorizationIncrease(
  {
    amount: 500,
    currency: 'USD',
    originalTransactionID: 'pre-auth-txn-id',
  },
  function(result) { console.log('Hold adjusted', result); },
  function(error) { console.error('Increase failed', error); }
);
```

---

#### `handpoint.preAuthorizationCapture(params, successCb, errorCb)`

Captures a previously placed pre-authorization hold, moving funds to settlement.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.amount` | number | Yes | Capture amount in minor units. May be less than or equal to the original pre-auth amount. |
| `params.originalTransactionID` | string | Yes | The `transactionID` from the original pre-authorization result. |
| `params.customerReference` | string | No | Reference string echoed in the result. |

---

#### `handpoint.preAuthorizationReversal(params, successCb, errorCb)`

Releases a pre-authorization hold without capturing it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.originalTransactionID` | string | Yes | The `transactionID` from the original pre-authorization result. |
| `params.customerReference` | string | No | Reference string echoed in the result. |

---

### MOTO operations

Mail order / telephone order (card not present) operations. PAX SmartPOS only.

#### `handpoint.motoSale(params, successCb, errorCb)`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.amount` | number | Yes | Amount in minor units. |
| `params.currency` | string | Yes | ISO 4217 currency code. |
| `params.customerReference` | string | No | Reference string echoed in the result. |

---

#### `handpoint.motoRefund(params, successCb, errorCb)`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.amount` | number | Yes | Amount in minor units. |
| `params.currency` | string | Yes | ISO 4217 currency code. |
| `params.originalTransactionID` | string | No | `transactionID` from the original MOTO sale for a linked refund. Omit for unlinked. |
| `params.customerReference` | string | No | Reference string echoed in the result. |

---

### Card tokenization

#### `handpoint.tokenizeCard(params, successCb, errorCb)`

Tokenizes a card without charging it. The card token is returned in `TransactionResult.cardToken`. `finStatus` will be `PROCESSED` on success (not `AUTHORISED`).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerReference` | string | No | Reference string echoed in the result. |

:::caution `saleAndTokenize` is not available in this plugin
The combined sale-and-tokenize operation (`saleAndTokenize`) is **not implemented** in the Cordova plugin. To run a sale and tokenize the card simultaneously, use the Android SDK directly or the Cloud API [`saleAndTokenizeCard`](/reference/cloud-api-operations#sale-and-tokenize) operation. To tokenize a card without a charge, use `handpoint.tokenizeCard()` above.
:::

---

### Transaction control

#### `handpoint.stopCurrentTransaction({}, successCb, errorCb)`

Requests cancellation of the active transaction on the terminal. The terminal can only be stopped at specific points — while waiting for card insertion or on the PIN screen. Check `cancelAllowed` in the `currentTransactionStatus` event payload before calling.

No parameters are required — pass an empty object `{}`.

If the terminal accepts the stop, the `endOfTransaction` event (and `successCb`) fires with `finStatus: 'CANCELLED'`. If the terminal is past the point where cancellation is allowed, the transaction continues and completes normally.

```javascript
// Only cancel if the terminal says it's allowed
document.addEventListener('handpoint.currentTransactionStatus', function(event) {
  if (event.detail.info.cancelAllowed) {
    handpoint.stopCurrentTransaction(
      {},
      function() { console.log('Stop request sent'); },
      function(error) { console.error('Stop failed', error); }
    );
  }
});
```

---

### Tip adjustment

#### `handpoint.tipAdjustment(params, successCb, errorCb)`

Adjusts the tip amount on a previously completed sale before batch settlement. Available for acquirers that support tip adjustment (EPI, Paysafe).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tipAmount` | number | Yes | Tip amount in minor units (e.g. `150` = $1.50). |
| `params.originalTransactionID` | string | Yes | The `transactionID` from the original sale's `TransactionResult`. |

```javascript
handpoint.tipAdjustment(
  { tipAmount: 150, originalTransactionID: 'txn-id-from-sale' },
  function(result) { console.log('Tip adjusted', result); },
  function(error) { console.error('Tip adjustment failed', error); }
);
```

---

## TransactionResult object

The `TransactionResult` is delivered to the `successCb` of each financial operation and as the `transactionResult` payload of the `endOfTransaction` event. Always check `finStatus` first.

| Field | Type | Description |
|---|---|---|
| `finStatus` | string | **Primary outcome field.** Financial outcome of the operation. See [FinancialStatus enum](#financialstatus-enum). |
| `transactionID` | string | Terminal-assigned transaction identifier. Use as `originalTransactionID` in reversals, linked refunds, and pre-auth captures. |
| `eFTTransactionID` | string | Handpoint gateway-assigned unique transaction ID. Use for support queries and back-office operations. |
| `totalAmount` | number | Actual charged amount in the minor unit of the currency, including any tip. May differ from the requested amount. |
| `tipAmount` | number | Tip amount in minor units. `0` if no tip was collected. |
| `currency` | string | ISO 4217 currency code of the transaction. |
| `cardSchemeName` | string | Card network name (e.g. `"Visa"`, `"MasterCard"`). See [CardSchemeName](#cardschemename). |
| `maskedCardNumber` | string | Masked PAN, e.g. `"************1456"`. |
| `cardEntryType` | string | How the card was read. See [CardEntryType](#cardentrytype). |
| `signatureUrl` | string | Signature image — either a URL or base64-encoded binary. See [Signature handling](#signature-handling). |
| `customerReceipt` | string | Customer receipt — either a URL or an HTML string. See [Receipt handling](#receipt-handling). |
| `merchantReceipt` | string | Merchant receipt — either a URL or an HTML string. See [Receipt handling](#receipt-handling). |
| `errorMessage` | string | Human-readable error description. Non-empty when `finStatus` is `DECLINED` or `FAILED`. |
| `transactionReference` | string | UUID identifying this operation in the Handpoint gateway. **Store persistently before initiating the operation.** Used with `handpoint.getTransactionStatus()` for UNDEFINED recovery (PAX/Cloud path). |
| `customerReference` | string | Echoed from `params.customerReference` in the operation call. |
| `cardToken` | string | Card PAN token. Only present on `tokenizeCard` operations. |
| `dueAmount` | string | Amount still outstanding after a `PARTIAL_APPROVAL`. Non-zero only on partial approval. Collect this remainder via another payment method or reverse for `totalAmount`. |
| `metadata` | string | Echoed from `params.metadata` in the operation call, if provided. |
| `originalEFTTransactionID` | string | `eFTTransactionID` of the transaction this result is linked to (e.g. the original sale for a reversal). Empty for standalone transactions. |
| `requestedAmount` | number | Amount submitted to the terminal. Distinct from `totalAmount`, which may include tip or reflect a partial approval amount. |
| `type` | string | Transaction type that produced this result. Common values: `SALE`, `REFUND`, `REVERSAL`, `TOKENIZE_CARD`, `PRE_AUTHORIZATION`, `PRE_AUTHORIZATION_CAPTURE`, `MOTO_SALE`, `MOTO_REFUND`, `MOTO_REVERSAL`. |
| `recoveredTransaction` | boolean | `true` when this result arrived via the terminal's recovery loop after a server restart or network interruption. Use to detect and deduplicate recovered results. |
| `paymentScenario` | string | How the card was processed. Common values: `CHIP`, `CHIPCONTACTLESS`, `MAGSTRIPE`, `MOTO`, `UNKNOWN`. |
| `merchantName` | string | Merchant name from terminal configuration. |
| `merchantAddress` | string | Merchant address from terminal configuration. |

### Reading the result

```javascript
function handleResult(result) {
  switch (result.finStatus) {
    case 'AUTHORISED':
      // Approved — fulfil the order
      saveTransaction({
        transactionID:        result.transactionID,
        eFTTransactionID:     result.eFTTransactionID,
        amount:               result.totalAmount,
        customerReceipt:      result.customerReceipt,
        transactionReference: result.transactionReference,
      });
      break;

    case 'PARTIAL_APPROVAL':
      // US acquirers only — partially approved
      // Collect remainder with another payment method, OR reverse for totalAmount
      console.log('Approved', result.totalAmount, '— remainder owed');
      break;

    case 'DECLINED':
    case 'CANCELLED':
      // Card was not charged — allow retry
      clearPending(result.transactionReference);
      break;

    case 'FAILED':
      // Technical error — card was not charged
      console.error('Transaction failed:', result.errorMessage);
      clearPending(result.transactionReference);
      break;

    case 'UNDEFINED':
      // Outcome unknown — do NOT retry; begin recovery
      beginRecovery(result.transactionReference);
      break;
  }
}
```

### Receipt handling

`customerReceipt` and `merchantReceipt` are dual-format strings: either a URL (receipt uploaded successfully) or an HTML string (upload failed due to connectivity).

```javascript
function displayReceipt(value) {
  if (value && value.startsWith('http')) {
    window.open(value);  // URL — open in browser or iframe
  } else {
    document.getElementById('receipt').innerHTML = value;  // HTML — render inline
  }
}
```

### Signature handling

`signatureUrl` is also dual-format: either a URL or a base64-encoded binary string.

```javascript
function displaySignature(value) {
  if (value && value.startsWith('http')) {
    document.getElementById('sig').src = value;
  } else {
    document.getElementById('sig').src = 'data:image/png;base64,' + value;
  }
}
```

---

## StatusInfo object

The `StatusInfo` object is delivered as `event.detail.info` in the `handpoint.currentTransactionStatus` DOM event. It describes the mid-transaction state of the terminal and whether the active operation can be cancelled.

| Field | Type | Description |
|---|---|---|
| `cancelAllowed` | boolean | `true` when the active transaction can be cancelled by calling `handpoint.stopCurrentTransaction()`. Typically `true` while waiting for card insertion and on the PIN screen. `false` once the transaction is being authorized. |
| `status` | string | Current transaction state. Values include `WAITING_CARD`, `CARD_INSERTED`, `APPLICATION_SELECTION`, `PIN_INPUT`, `CONNECTING_TO_HOST`, `TRANSACTION_COMPLETED`. |
| `message` | string | Human-readable description of the current status, in the terminal's configured language. Suitable for display in a progress indicator. |
| `deviceStatus` | object | Device health snapshot. Fields: `serialNumber` (string), `batteryStatus` (string, 0–100), `batteryCharging` (string), `applicationName` (string), `applicationVersion` (string). |

```javascript
document.addEventListener('handpoint.currentTransactionStatus', function(event) {
  const info = event.detail.info;
  // info.status      — machine-readable state
  // info.message     — display string
  // info.cancelAllowed — whether to show a Cancel button
  // info.deviceStatus — device health

  updateProgressBar(info.message);
  setCancelButtonVisible(info.cancelAllowed);
});
```

---

## FinancialStatus enum

The `finStatus` field in `TransactionResult`. Always evaluate this before updating your order state.

| Value | Description | Action |
|---|---|---|
| `'AUTHORISED'` | Approved by the acquirer. Funds are held; settlement occurs at batch close. | Fulfil the order. Store `transactionID` and `eFTTransactionID`. |
| `'DECLINED'` | Declined by the acquirer or card issuer. Card was not charged. | Do not retry the same card. Prompt for another payment method. |
| `'CANCELLED'` | Cardholder pressed Cancel on the terminal, or `handpoint.cancelRequest()` was called. Card was not charged. | Allow retry. |
| `'FAILED'` | Technical failure — unreadable card, terminal error, or network issue during authorisation. Card was not charged. | Check `errorMessage`. Allow retry with a different card. |
| `'UNDEFINED'` | No result received from the terminal within the timeout. The transaction may or may not have processed. | **Do not retry.** Begin recovery using the stored `transactionReference`. See [Transaction Recovery — Cordova](/reference/transaction-recovery-cordova-sdk). |
| `'PARTIAL_APPROVAL'` | Partial amount approved (US acquirers only). `totalAmount` is the approved amount, which is less than what was requested. | Collect the remainder with another payment method, or send a reversal for `totalAmount`. |
| `'PROCESSED'` | Transaction processed successfully without a traditional authorisation. Returned for `tokenizeCard` success and `preAuthorizationCapture`. | Treat as success. For `tokenizeCard`, store the `cardToken`. |
| `'IN_PROGRESS'` | Transaction still being processed. Returned by `getTransactionStatus` while UNDEFINED recovery is in progress. | Poll again after a short delay (10 s) until a terminal status is returned. |
| `'REFUNDED'` | Transaction has been refunded. Returned by `getTransactionStatus`. | No further action required; record the refund outcome. |
| `'CAPTURED'` | Pre-authorization has been captured (funds moved to settlement). Returned by `getTransactionStatus`. | Fulfil the order. |

:::caution UNDEFINED recovery
When `finStatus` is `'UNDEFINED'`, the transaction may have processed on the acquirer's side. Do not retry and do not assume the card was not charged. Use the stored `transactionReference` to query status. See [Transaction Recovery — Cordova](/reference/transaction-recovery-cordova-sdk).
:::

---

## Currency enum

Pass ISO 4217 three-letter currency codes as strings. Common values:

| Value | Currency |
|---|---|
| `'USD'` | US Dollar |
| `'EUR'` | Euro |
| `'GBP'` | British Pound Sterling |
| `'CAD'` | Canadian Dollar |
| `'AUD'` | Australian Dollar |
| `'NZD'` | New Zealand Dollar |
| `'SEK'` | Swedish Krona |
| `'DKK'` | Danish Krone |
| `'NOK'` | Norwegian Krone |
| `'CHF'` | Swiss Franc |
| `'SGD'` | Singapore Dollar |
| `'HKD'` | Hong Kong Dollar |
| `'ZAR'` | South African Rand |

The plugin accepts any valid ISO 4217 three-letter code. Your acquirer determines which currencies are active for your merchant.

---

## ConnectionMethod enum

How the plugin connects to the payment terminal. Pass as `connectionMethod` in the [Device object](#device-object).

| Value | Description | When to use |
|---|---|---|
| `'ANDROID_PAYMENT'` | Integrated PAX/Telpo SmartPOS — plugin communicates via IPC on the same Android device. | PAX SmartPOS terminals where the Cordova app runs on the terminal itself. |
| `'USB_HID'` | HiLite Bluetooth card reader — plugin connects to an external HiLite reader over Bluetooth. | HiLite readers paired to an Android or iOS host device. |
| `'SIMULATOR'` | Built-in test simulator — no physical terminal required. Generates deterministic responses based on amount. | Development and automated testing. |

---

## TipConfiguration object

Configures the tip selection prompt displayed on the terminal during a sale. Pass as `params.tipConfiguration` in `handpoint.sale()`.

| Field | Type | Default | Description |
|---|---|---|---|
| `baseAmount` | number | Transaction amount | Base amount in minor units used for percentage calculations. If omitted, uses the sale amount. |
| `tipPercentages` | number[] | `[5, 10, 15, 20]` | Percentage options displayed on the tipping screen. Required unless `tipAmount` is set. |
| `enterAmountEnabled` | boolean | `true` | Whether the cardholder can enter a custom tip amount. |
| `skipEnabled` | boolean | `true` | Whether the cardholder can skip the tip step. |
| `footer` | string | `""` | Footer text shown at the bottom of the tipping screen. |
| `tipAmount` | number | — | Pre-set fixed tip amount in minor units. If set, skips percentage selection and applies this amount directly. |

```javascript
// Percentage menu with optional custom amount
const tipConfiguration = {
  tipPercentages: [10, 15, 18, 20],
  enterAmountEnabled: true,
  skipEnabled: true,
  footer: 'Thank you for dining with us!',
};

// Fixed pre-set tip (e.g. automatic service charge)
const tipConfiguration = {
  tipAmount: 150,  // $1.50 fixed tip
};

handpoint.sale(
  { amount: 1000, currency: 'USD', tipConfiguration },
  successCb,
  errorCb
);
```

---

## DOM Events

The plugin delivers all asynchronous state changes as DOM events on `document`. Register handlers with `document.addEventListener('handpoint.<eventName>', handler)`. See [Cordova — Events Reference](/reference/cordova-events) for full payload schemas and platform availability tables.

| Event | Key `event.detail` fields | Description |
|---|---|---|
| `handpoint.endOfTransaction` | `transactionResult`, `device` (Android) | Financial operation completed. Use `transactionResult.finStatus` to determine outcome. This is the primary result handler. |
| `handpoint.connectionStatusChanged` | `status`, `device` | Terminal connection state changed. `status` is one of `"Connected"`, `"Connecting"`, `"Disconnected"`, `"Initializing"`, `"NotConfigured"`. |
| `handpoint.currentTransactionStatus` | `info.message`, `info.cancelAllowed`, `info.status` | Mid-transaction status update — use to drive UI progress display during the transaction. |
| `handpoint.signatureRequired` | `merchantReceipt` | Terminal requests manual signature verification. Display the receipt and respond with `handpoint.signatureResult(accepted)`. |
| `handpoint.deviceDiscoveryFinished` | `devices` (array) | Result of `handpoint.listDevices()` — array of discovered device objects with `name` and `address`. |

```javascript
// Primary result handler
document.addEventListener('handpoint.endOfTransaction', function(event) {
  const result = event.detail.transactionResult;
  handleResult(result);
});

// Mid-transaction status updates
document.addEventListener('handpoint.currentTransactionStatus', function(event) {
  const info = event.detail.info;
  updateStatusDisplay(info.message);
  if (info.cancelAllowed) {
    showCancelButton();
  }
});

// Signature verification (HiLite path)
document.addEventListener('handpoint.signatureRequired', function(event) {
  const receipt = event.detail.merchantReceipt;
  showSignatureUI(receipt, function(accepted) {
    handpoint.signatureResult(accepted, function() {}, function() {});
  });
});

// Device discovery (HiLite path)
document.addEventListener('handpoint.deviceDiscoveryFinished', function(event) {
  const devices = event.detail.devices;
  if (devices.length > 0) {
    handpoint.connect(devices[0], function() {}, function() {});
  }
});
```

:::note Event handler vs per-operation callbacks
The `successCb` passed to each financial operation and the `handpoint.endOfTransaction` DOM event both carry the `TransactionResult`. Register the persistent event handler with `handpoint.eventHandler()` in addition to per-operation callbacks to handle edge cases where the result arrives after a page navigation or reload. See [Cordova — Events Reference](/reference/cordova-events).
:::

---

## Error handling

### `errorCb` — immediate rejection

`errorCb(error)` fires when the SDK rejects an operation before it starts. The card was never presented when `errorCb` fires. This is distinct from a card decline, which arrives via `successCb` as a normal `TransactionResult`.

Common `errorCb` error strings:

| Error string | Cause |
|---|---|
| `"Can't send <operation> operation to device"` | SDK not connected or another operation is in progress. Check connection status before retrying. |
| `"Can't send <operation> operation to device. Incorrect parameters"` | JSON parse error in the params object — check required fields and types. |
| `"Handpoint SDK method not defined: <action>"` | Unknown method name — verify the plugin version and the method spelling. |
| `"Error initializing Handpoint SDK <error>"` | `setup()` failed — check that `sharedSecret` is a valid 64-character hex string. |

### Decline vs error

| Scenario | `errorCb` fires | `finStatus` in result |
|---|---|---|
| Operation rejected before starting | Yes | — |
| Card presented and declined | No | `'DECLINED'` |
| Cardholder cancelled on terminal | No | `'CANCELLED'` |
| Terminal communication lost mid-transaction | No | `'UNDEFINED'` |
| Technical failure during authorisation | No | `'FAILED'` |

---

## CardSchemeName

Card network name as returned by the terminal. Appears in `TransactionResult.cardSchemeName`.

| Value |
|---|
| `'Visa'` |
| `'MasterCard'` |
| `'Maestro'` |
| `'American Express'` |
| `'Discover'` |
| `'JCB'` |
| `'Diners'` |
| `'UnionPay'` |
| `'Interac'` |

---

## CardEntryType

How the card was physically read by the terminal. Appears in `TransactionResult.cardEntryType`.

| Value | Description |
|---|---|
| `'ICC'` | Chip insert (contact EMV). |
| `'MSR'` | Magnetic stripe swipe. |
| `'CNP'` | Card Not Present — MOTO / keyed entry. |
| `'UNDEFINED'` | Unknown. Common on reversals and cancelled transactions where no card was fully presented. |

---

## See also

- [Cordova — Events Reference](/reference/cordova-events) — full event payloads, platform availability, and the `handpoint.eventHandler()` registration pattern
- [Cordova — Integration Guide](/reference/cordova-integration-guide) — step-by-step setup, credentials, and transaction lifecycle
- [Transaction Recovery — Cordova](/reference/transaction-recovery-cordova-sdk) — UNDEFINED recovery algorithm
- [Transaction Result Object](/reference/transaction-result-object) — cross-SDK field reference with per-operation population notes
