# SDK Operations → TXN Feed / Analytics Mapping

End-to-end developer reference: for every Handpoint SDK operation, this document shows the exact method call per platform, the V2T action it produces, and the fields that appear in the **TXN Feed API** (queen-api-dev) and **analytics** (Keen.IO / cardstream-analytics-dev).

For the internal pipeline detail (V2T → TxnType → logstash name logic), see `TRANSACTION_MAPPING.md`.

---

## 1. Pipeline Overview

Which SDK connects to which pipeline and which TXN Feed index to query:

| SDK / Integration | Gateway | OpenSearch index | TXN Feed `transactionStreams` |
|---|---|---|---|
| Android SDK (Bluetooth) | viscus-dev (V2T) | `txn_feed` | `["handpoint"]` (default) |
| Android SDK (Cloud / PAX) | viscus-dev via cloudapi-dev (V2T) | `txn_feed` | `["handpoint"]` (default) |
| iOS SDK | viscus-dev (V2T) | `txn_feed` | `["handpoint"]` (default) |
| Windows C# SDK | viscus-dev (V2T) | `txn_feed` | `["handpoint"]` (default) |
| JS Cloud SDK | cloudapi-dev → viscus-dev (V2T) | `txn_feed` | `["handpoint"]` (default) |
| Cordova Plugin | viscus-dev (V2T) | `txn_feed` | `["handpoint"]` (default) |
| PHP Online Payments SDK | CardStream gateway | `txn_cardstream` | `["ecommerce"]` — must be explicit |
| Web checkout (CardStream) | CardStream gateway | `txn_cardstream` | `["ecommerce"]` — must be explicit |

**Analytics (Keen.IO):** All card-present + MOTO transactions (via viscus-capture → analytics-sender-dev). Not exposed externally. ECOM is not in Keen.IO.

---

## 2. Cross-Platform Operation Matrix

Method names for each transaction operation across all device SDKs.

> Amount is always in **minor units** (integer): €12.50 → `1250`. Currency is ISO 4217.

### Sale

| Platform | Method | Key Parameters |
|---|---|---|
| **Android** | `api.sale(amount, currency)` | `BigInteger amount`, `Currency currency`, optional `SaleOptions` |
| **iOS** | `[client saleWithAmount:currency:cardholder:reference:]` | `NSInteger amount`, `HPACurrency`, cardholder name, reference |
| **Windows C#** | `hapi.Sale(amount, currency)` | `BigInteger amount`, `Currency currency`, optional `Dictionary<string,string> map` |
| **JS Cloud** | `handpoint.sale(amount, currency, options, statusCb)` | `Number amount`, `String currency`, returns `Promise<TransactionResult>` |
| **Cordova** | `cordova.plugins.Handpoint.sale(config, success, error)` | `config.amount`, `config.currency` |

**V2T action:** `PAYMENT_REQUEST` (MSR) or `AUTHORIZATION_REQUEST` + `PAYMENT_COMPLETION_REQUEST` (EMV chip)

**TXN Feed result:**

| `paymentScenario` | `name` | `type` | `status` |
|---|---|---|---|
| `CHIP` (approved) | `"EMV Sale"` | `"Sale"` | 200 |
| `CHIPCONTACTLESS` (approved) | `"EMV Sale"` | `"Sale"` | 200 |
| `MAGSTRIPE` (approved) | `"MSR Sale"` | `"Sale"` | 200 |
| `CHIP` (declined) | `"Declined EMV Sale"` | `"Sale"` | 4xx |
| `MAGSTRIPE` (declined) | `"Declined MSR Sale"` | `"Sale"` | 4xx |

---

### Sale and Tokenize

| Platform | Method |
|---|---|
| **Android** | `api.saleAndTokenizeCard(amount, currency)` |
| **Windows C#** | `hapi.SaleAndTokenizeCard(amount, currency)` |
| **JS Cloud** | `handpoint.saleAndTokenization(amount, currency, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.saleAndTokenizeCard(config, success, error)` |

**V2T action:** `PAYMENT_COMPLETION_REQUEST` with tokenization flag

**TXN Feed result:** Same as Sale. Card token returned in `cardToken` field of `TransactionResult`.

---

### Refund

| Platform | Method | Notes |
|---|---|---|
| **Android** | `api.refund(amount, currency)` | Standalone (unlinked) |
| **Android** | `api.refund(amount, currency, originalTransactionID)` | Linked refund |
| **iOS** | `[client refundWithAmount:currency:cardholder:reference:]` | |
| **Windows C#** | `hapi.Refund(amount, currency)` | |
| **Windows C#** | `hapi.Refund(amount, currency, originalTransactionID)` | Linked |
| **JS Cloud** | `handpoint.refund(amount, currency, originalTransactionId, options, statusCb)` | |
| **Cordova** | `cordova.plugins.Handpoint.refund(config, success, error)` | |

**V2T action:** `REFUND_REQUEST`

**TXN Feed result:**

| `paymentScenario` | `name` | `type` | `status` |
|---|---|---|---|
| `CHIP` / `CHIPCONTACTLESS` (approved) | `"EMV Refund"` | `"Refund"` | 200 |
| `MAGSTRIPE` (approved) | `"MSR Refund"` | `"Refund"` | 200 |
| `CHIP` (declined) | `"Declined EMV Refund"` | `"Refund"` | 4xx |
| `MAGSTRIPE` (declined) | `"Declined MSR Refund"` | `"Refund"` | 4xx |

> **TNS protocol exception:** On TNS terminals, refunds appear as `"Sale Reversal"` with `type: "Reversal"`. See `TRANSACTION_MAPPING.md §Special Cases`.

---

### Automatic Refund (Android only)

| Platform | Method |
|---|---|
| **Android** | `api.automaticRefund(originalTransactionID)` |
| **Android** | `api.automaticRefund(amount, currency, originalTransactionID)` (partial) |

Behaves identically to a linked refund in the TXN Feed.

---

### Sale Reversal (Void)

| Platform | Method |
|---|---|
| **Android** | `api.saleReversal(amount, currency, originalTransactionID)` |
| **iOS** | `[client reversalWithAmount:currency:cardholder:reference:originalReference:]` |
| **Windows C#** | `hapi.SaleReversal(amount, currency, originalTransactionID)` |
| **JS Cloud** | `handpoint.saleReversal(amount, currency, originalTransactionId, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.saleReversal(config, success, error)` |

**V2T action:** `REVERSAL_REQUEST`

**TXN Feed result:** `name: "Sale Reversal"`, `type: "Reversal"`, `status: 200`

---

### Refund Reversal (Void Refund)

| Platform | Method |
|---|---|
| **Android** | `api.refundReversal(amount, currency, originalTransactionID)` |
| **Windows C#** | `hapi.RefundReversal(amount, currency, originalTransactionID)` |
| **JS Cloud** | `handpoint.refundReversal(amount, currency, originalTransactionId, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.refundReversal(config, success, error)` |

**V2T action:** `REVERSAL_REQUEST`

**TXN Feed result:** `name: "Refund Reversal"`, `type: "Reversal"`, `status: 200`

---

### Pre-Authorization

| Platform | Method |
|---|---|
| **Android** | `api.preAuthorization(amount, currency)` |
| **Windows C#** | `hapi.PreAuthorization(amount, currency)` |
| **JS Cloud** | `handpoint.preAuthorization(amount, currency, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.preAuthorization(config, success, error)` |

**V2T action:** `PREAUTHORIZATION_REQUEST`

**TXN Feed result:** `name: "Pre-authorization"`, `type: "Pre-authorization"`, `status: 200`

**SDK `finStatus`:** `AUTHORISED_DEFERRED` (SDK 7.1012+) or `AUTHORISED`

---

### Pre-Authorization Increase

| Platform | Method |
|---|---|
| **Android** | `api.preAuthorizationIncrease(amount, currency, originalTransactionID)` |
| **Windows C#** | `hapi.PreAuthorizationIncrease(amount, currency, originalTransactionID)` |
| **JS Cloud** | `handpoint.preAuthorizationIncrease(amount, currency, originalTransactionId, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.preAuthorizationIncrease(config, success, error)` |

**V2T action:** `PREAUTHORIZATION_INCREASE_REQUEST`

**TXN Feed result:** `name: "Incremental Authorization"`, `type: "Incremental Authorization"`, `status: 200`

---

### Pre-Authorization Capture

| Platform | Method |
|---|---|
| **Android** | `api.preAuthorizationCapture(amount, currency, originalTransactionID)` |
| **Windows C#** | `hapi.PreAuthorizationCapture(amount, currency, originalTransactionID)` |
| **JS Cloud** | `handpoint.preAuthorizationCapture(amount, currency, originalTransactionId, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.preAuthorizationCapture(config, success, error)` |

**V2T action:** `PREAUTHORIZATION_CAPTURE_REQUEST`

**TXN Feed result:** `name: "Pre-authorization Capture"`, `type: "Pre-authorization Capture"`, `status: 200`

**SDK `finStatus`:** `CAPTURED` or `AUTHORISED`

---

### Pre-Authorization Reversal

| Platform | Method |
|---|---|
| **Android** | `api.preAuthorizationReversal(originalTransactionID)` |
| **Windows C#** | `hapi.PreAuthorizationReversal(originalTransactionID)` |
| **JS Cloud** | `handpoint.preAuthorizationReversal(originalTransactionId, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.preAuthorizationReversal(config, success, error)` |

**V2T action:** `REVERSAL_REQUEST` (referencing original PREAUTHORIZATION)

**TXN Feed result:** `name: "Pre-authorization Reversal"`, `type: "Reversal"`, `status: 200`

---

### Tip Adjustment

| Platform | Method |
|---|---|
| **Android** | `api.tipAdjustment(tipAmount, currency, originalTransactionID)` → returns `FinancialStatus` directly |
| **Windows C#** | `await hapi.TipAdjustment(tipAmount, originalTransactionID)` → `Task<FinancialStatus>` |
| **JS Cloud** | `handpoint.tipAdjustment(amount, guid)` → `Promise` |

> **Note:** Tip adjustment does NOT go through the normal `endOfTransaction` callback. On Android the result is the direct return value; on C# it is an awaitable Task.

**V2T action:** `TIP_ADJUSTMENT_REQUEST`

**TXN Feed result:** `name: "Tip Adjustment"`, `type: "Tip Adjustment"`, `status: 200`

---

### Tokenize Card

| Platform | Method |
|---|---|
| **Android** | `api.tokenizeCard()` |
| **Windows C#** | `hapi.TokenizeCard()` |
| **JS Cloud** | `handpoint.tokenizeCard(options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.tokenizeCard(config, success, error)` |

**V2T action:** `CARDTOKENIZATION_REQUEST`

**TXN Feed result:** `name: "Card Tokenization"`, `type: "Token"`, `status: 200`

**SDK result field:** `transactionResult.cardToken` contains the token string.

---

### Card PAN

| Platform | Method |
|---|---|
| **Android** | `api.cardPan()` |
| **JS Cloud** | `handpoint.cardPan(options, statusCb)` |

**V2T action:** `CARDPAN_REQUEST`

**TXN Feed result:** `name: "Card Pan"`, `type: "Card Pan"`, `status: 200`

---

### MOTO Sale

| Platform | Method |
|---|---|
| **Android** | `api.motoSale(amount, currency, MoToOptions)` |
| **Windows C#** | `hapi.MoToSale(amount, currency)` |
| **JS Cloud** | `handpoint.moToSale(amount, currency, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.motoSale(config, success, error)` |

`MoToOptions` / `options` includes the card number, expiry, CVV — cardholder not physically present.

**V2T action:** `MOTO_SALE_REQUEST`

**TXN Feed result:** `name: "Card Not Present Sale"`, `type: "Card Not Present Sale"`, `status: 200`, `paymentScenario: "MOTO"`

---

### MOTO Refund

| Platform | Method |
|---|---|
| **Android** | `api.moToRefund(amount, currency, originalTransactionId, MoToOptions)` |
| **Windows C#** | `hapi.MoToRefund(amount, currency, originalTransactionID)` |
| **JS Cloud** | `handpoint.moToRefund(amount, currency, originalTransactionId, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.motoRefund(config, success, error)` |

**V2T action:** `MOTO_REFUND_REQUEST`

**TXN Feed result:** `name: "Card Not Present Refund"`, `type: "Card Not Present Refund"`, `status: 200`

---

### MOTO Reversal

| Platform | Method |
|---|---|
| **Android** | `api.moToReversal(originalTransactionId, ...)` |
| **Windows C#** | `hapi.MoToReversal(originalTransactionID)` |
| **JS Cloud** | `handpoint.moToReversal(originalTransactionId, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.motoReversal(config, success, error)` |

**V2T action:** `MOTO_REVERSAL_REQUEST`

**TXN Feed result:** `name: "Card Not Present Reversal"`, `type: "Card Not Present Reversal"`, `status: 200`

---

### MOTO Pre-Authorization

| Platform | Method |
|---|---|
| **Android** | `api.motoPreauthorization(amount, currency, MoToOptions)` |
| **Windows C#** | `hapi.moToPreAuthorization(amount, currency)` |
| **JS Cloud** | `handpoint.moToPreAuthorization(amount, currency, options, statusCb)` |
| **Cordova** | `cordova.plugins.Handpoint.motoPreauthorization(config, success, error)` |

**V2T action:** `MOTO_PREAUTH_REQUEST`

**TXN Feed result:** `type` and `name` are empty strings — the logstash config has no mapping for `MOTO_PREAUTH_REQUEST`. TxnType stored as `"Preauthorization"`. See `TRANSACTION_MAPPING.md §Special Cases`.

---

### ECOM (PHP SDK / CardStream direct)

The PHP SDK does not produce V2T messages. Transactions go directly to the CardStream gateway.

```php
// Direct integration
$response = Gateway::directRequest([
    'merchantID'  => 12345,
    'action'      => 'SALE',
    'type'        => 1,
    'currencyCode'=> 978,         // EUR
    'amount'      => 1250,        // €12.50 in minor units
    'cardNumber'  => '4929...',
    'orderRef'    => 'order-001',
    'remoteAddress' => $_SERVER['REMOTE_ADDR'],
    'threeDSRedirectURL' => 'https://yoursite.com/3ds-callback',
]);
```

**Response code:** `$response['responseCode'] == 0` → success (not HTTP status — CardStream-specific).

**TXN Feed result (via cardstream-analytics-dev):**

| CardStream `action` | Success (`rc=0`) | Declined (`rc≠0`) | Canceled |
|---|---|---|---|
| `SALE` | `"Ecom Sale"` | `"Ecom Declined Sale"` | `"Ecom Canceled Sale"` |
| `REFUND` | `"Ecom Refund"` | `"Ecom Declined Refund"` | — |
| `PREAUTH` | `"Ecom Preauth"` | — | `"Ecom Canceled Preauth"` |
| `CAPTURE` | `"Ecom Capture"` | `"Ecom Declined Capture"` | — |

`paymentScenario` is always `"ECOM"`. Query with `transactionStreams: ["ecommerce"]`.

**`terminalSerialNumber`:** Synthetic — `"ecom-<merchantIdAlpha>"` (no physical device).

---

## 3. SDK TransactionResult Fields → TXN Feed API Fields

When the SDK returns a `TransactionResult`, many of its fields correspond to filterable/returnable fields in the TXN Feed API. This table maps between them.

| SDK field (`TransactionResult`) | TXN Feed API field | Notes |
|---|---|---|
| `efttransactionID` | Use as lookup key in `/transactions/{idAlpha}` with GUID filter | The primary Handpoint transaction identifier |
| `transactionReference` | `transactionReference` | Use for `getTransactionStatus()` — MUST be saved before the result arrives |
| `type` (TransactionType enum) | `type` (string) | See §2 for each mapping |
| `finStatus` | `status` (HTTP code: 200 / 4xx) | AUTHORISED/REFUNDED/CAPTURED → 200; DECLINED/CANCELLED/FAILED → 4xx |
| `amount` | `requestedAmount` | Original requested amount in minor units |
| `totalAmount` | `totalAmount` | Final charged amount including tip |
| `tipAmount` | `tipAmount` | Tip in minor units |
| `currency` | `currency` (ISO 4217 alpha, e.g. `"EUR"`) | SDK uses enum; TXN Feed uses string |
| `cardSchemeName` | `cardSchemeName` | e.g. `"Visa"`, `"MasterCard"`, `"Maestro"` |
| `maskedCardNumber` | `maskedPan` | Last 4 digits visible |
| `cardToken` | `cardToken` | Set when tokenization was requested |
| `cardEntryType` | `paymentScenario` | ICC → `CHIP`, Contactless → `CHIPCONTACTLESS`, MSR → `MAGSTRIPE`, CNP → `MOTO` |
| `mid` | `mid` | Merchant ID assigned by acquirer |
| `tid` | `tid` | Terminal ID |
| `authorisationCode` | `authCode` | Acquirer approval code |
| `rrn` | `rrn` | Retrieval Reference Number |
| `efttimestamp` | `createdAt` | UTC timestamp |
| `merchantName` | `merchantName` | |
| `originalEFTTransactionID` | — | Used to link reversal to original; not a direct TXN Feed field |
| `paymentScenario` | `paymentScenario` | Direct mapping |
| `aid` | `emvAid` | EMV tag 9F06 |
| `tvr` | `emvTvr` | EMV tag 95 |
| `tsi` | `emvTsi` | EMV tag 9B |
| `iad` | `emvIad` | EMV tag 9F10 |
| `arc` | `emvArc` | EMV tag 8A |
| `verificationMethod` | `verificationMethod` | PIN, SIGNATURE, etc. |
| `deviceStatus.serialNumber` | `terminalSerialNumber` | Physical device serial |
| `metadata.metadata1..5` | `metadata1..5` | Custom fields passed through |
| `customerReceipt` | `customerReceipt` | URL or HTML |
| `merchantReceipt` | `merchantReceipt` | URL or HTML |

---

## 4. How to Look Up an SDK Transaction in TXN Feed

### By `efttransactionID` (GUID)

The `efttransactionID` returned in `TransactionResult` is the Handpoint-assigned GUID. To retrieve the transaction from TXN Feed:

```json
POST https://txnfeed.handpoint.com/transactions/{idAlpha}
Authorization: Bearer <api_key>
Content-Type: application/json

{
  "dateFrom": "2024-01-01T00:00:00Z",
  "dateTo":   "2024-12-31T23:59:59Z",
  "filters": {
    "efttransactionID": "<efttransactionID>"
  }
}
```

### By `transactionReference` (real-time status check)

`transactionReference` must be saved **before** the transaction completes (it is returned from `sale()` / `OperationStartResult`). Used for polling:

```javascript
// JS Cloud SDK
const status = await handpoint.getTransactionStatus(transactionReference);
```

```csharp
// Windows C#
var result = hapi.GetTransactionStatus(transactionReference);
```

This calls the Cloud API's status endpoint, which queries viscus directly — not the TXN Feed index.

### By date range and terminal

```json
{
  "dateFrom": "2024-06-01T00:00:00Z",
  "dateTo":   "2024-06-30T23:59:59Z",
  "filters": {
    "terminalSerialNumber": "1234567890"
  },
  "orderBy": [{ "field": "createdAt", "order": "DESC" }]
}
```

### ECOM transactions

ECOM data is in a separate index. Must explicitly include `"ecommerce"` stream:

```json
{
  "dateFrom": "2024-06-01T00:00:00Z",
  "dateTo":   "2024-06-30T23:59:59Z",
  "transactionStreams": ["ecommerce"]
}
```

Or to query both card-present and ECOM together:

```json
{ "transactionStreams": ["handpoint", "ecommerce"] }
```

---

## 5. `finStatus` → TXN Feed `status` Mapping

The SDK `FinancialStatus` does not directly appear in the TXN Feed. It maps to an HTTP status code and a viscus internal status string.

| SDK `finStatus` | Viscus internal status | TXN Feed `status` (HTTP) | Meaning |
|---|---|---|---|
| `AUTHORISED` | `Pending` or `Completed` | 200 | Approved |
| `REFUNDED` | `Pending` | 200 | Refund approved |
| `CAPTURED` | `Completed` | 200 | Pre-auth capture approved |
| `PARTIALLY_APPROVED` | `Pending` | 200 | Partial amount approved |
| `AUTHORISED_DEFERRED` | `Completed` | 200 | Pre-auth hold placed |
| `DECLINED` | `Decline` | 403 | Acquirer declined |
| `FAILED` | `Error` | 408 / 500 | Comms or processing failure |
| `CANCELLED` | `Completed` (cancellation) or `Error` | 200 / 4xx | Operator cancelled or timeout |
| `PROCESSED` | `Completed` | 200 | Generic non-financial operation |
| `IN_PROGRESS` | *(not yet in DB)* | — | Transaction still processing |
| `UNDEFINED` | *(not yet in DB)* | — | Unresolved initial state |

> **Note on Authorization Granted:** When viscus internal status is `"Authorization Granted"` the TXN Feed `status` is `200` but the transaction is NOT yet complete — the second leg (`PAYMENT_COMPLETION_REQUEST`) has not arrived. The SDK `finStatus` at this point is `AUTHORISED` (first leg approved). Display as informational, not as an error.

---

## 6. Analytics (Keen.IO) Event Mapping

Handled by `analytics-sender-dev`. Reads from `transaction_info` table (same source as Logstash). Internal use only — not exposed via API.

| SDK operation | Keen.IO collection | Sent? | Notes |
|---|---|---|---|
| Any card-present sale | `transactions` | Yes | |
| Refund | `transactions` | Yes | |
| Reversal / void | `transactions` | Yes | |
| Pre-auth | `transactions` | Yes | |
| Pre-auth capture | `transactions` | Yes | |
| Tip adjustment | `transactions` | Yes | |
| Tokenize card | `transactions` | Yes | |
| **Double-message EMV first leg** | — | **No** | Filtered out to prevent double-counting. Only the `PAYMENT_COMPLETION_REQUEST` leg is sent. |
| MOTO | `transactions` | Yes | |
| ECOM (CardStream) | — | **No** | Handled separately by `cardstream-analytics-dev`, NOT sent to Keen.IO |

---

## 7. Connection Method → Terminal Type

The connection method determines which protocol path is used internally.

| SDK Connection | Terminal type | How identified | Internal path |
|---|---|---|---|
| `BLUETOOTH` | HiLites / Datecs | Device MAC address | Direct BT → viscus V2T |
| `ANDROID_PAYMENT` | Built-in Android POS | No separate device object | Local Android → viscus V2T |
| `CLOUD` / `CLOUD_PROXY` | PAX SmartPOS | Serial number (e.g. `"PAX-1234567"`) | JS/Cloud SDK → cloudapi-dev → viscus V2T |
| `USB` | Desktop PIN pad | USB serial | USB → viscus V2T |
| PHP / Web checkout | No physical device | Merchant ID | CardStream gateway (no V2T) |

---

## 8. Complete Operation → TXN Feed Name Quick Reference

Full lookup from operation + outcome → TXN Feed `name` and `type`:

| Operation | finStatus | paymentScenario | `name` | `type` |
|---|---|---|---|---|
| Sale | AUTHORISED | CHIP / CHIPCONTACTLESS | `"EMV Sale"` | `"Sale"` |
| Sale | AUTHORISED | MAGSTRIPE | `"MSR Sale"` | `"Sale"` |
| Sale | DECLINED | CHIP | `"Declined EMV Sale"` | `"Sale"` |
| Sale | DECLINED | MAGSTRIPE | `"Declined MSR Sale"` | `"Sale"` |
| Sale | PARTIALLY_APPROVED | any | `"MSR Sale"` / `"EMV Sale"` | `"Sale"` |
| Sale (first leg only) | AUTHORISED | CHIP | `"EMV Sale"` (Authorization Granted) | `"Sale"` |
| Refund | AUTHORISED / REFUNDED | CHIP | `"EMV Refund"` | `"Refund"` |
| Refund | AUTHORISED / REFUNDED | MAGSTRIPE | `"MSR Refund"` | `"Refund"` |
| Refund | DECLINED | CHIP | `"Declined EMV Refund"` | `"Refund"` |
| Refund (TNS protocol) | AUTHORISED | any | `"Sale Reversal"` | `"Reversal"` |
| Sale Reversal | AUTHORISED | any | `"Sale Reversal"` | `"Reversal"` |
| Refund Reversal | AUTHORISED | any | `"Refund Reversal"` | `"Reversal"` |
| Sale Cancellation | CANCELLED | any | `"Sale Cancellation"` | `"Cancellation"` |
| Pre-Auth | AUTHORISED_DEFERRED | CHIP | `"Pre-authorization"` | `"Pre-authorization"` |
| Pre-Auth | DECLINED | CHIP | `"Declined Pre-authorization"` | `"Pre-authorization"` |
| Pre-Auth Increase | AUTHORISED | CHIP | `"Incremental Authorization"` | `"Incremental Authorization"` |
| Pre-Auth Capture | CAPTURED | CHIP | `"Pre-authorization Capture"` | `"Pre-authorization Capture"` |
| Pre-Auth Reversal | AUTHORISED | any | `"Pre-authorization Reversal"` | `"Reversal"` |
| Pre-Auth Capture Reversal | — | any | `"Pre-authorization Capture Reversal"` | `"Reversal"` |
| Tip Adjustment | AUTHORISED | any | `"Tip Adjustment"` | `"Tip Adjustment"` |
| Tokenize Card | AUTHORISED | any | `"Card Tokenization"` | `"Token"` |
| Card PAN | AUTHORISED | any | `"Card Pan"` | `"Card Pan"` |
| MOTO Sale | AUTHORISED | MOTO | `"Card Not Present Sale"` | `"Card Not Present Sale"` |
| MOTO Sale | DECLINED | MOTO | `"Declined Card Not Present Sale"` | `"Card Not Present Sale"` |
| MOTO Refund | AUTHORISED | MOTO | `"Card Not Present Refund"` | `"Card Not Present Refund"` |
| MOTO Reversal | AUTHORISED | MOTO | `"Card Not Present Reversal"` | `"Card Not Present Reversal"` |
| MOTO Cancellation | CANCELLED | MOTO | `"Card Not Present Cancellation"` | `"Card Not Present Cancellation"` |
| MOTO Pre-Auth | AUTHORISED | MOTO | *(empty — no logstash mapping)* | `""` |
| ECOM Sale | — | ECOM | `"Ecom Sale"` | `"ECOM SALE"` |
| ECOM Sale (declined) | — | ECOM | `"Ecom Declined Sale"` | `"ECOM DECLINED SALE"` |
| ECOM Sale (canceled) | — | ECOM | `"Ecom Canceled Sale"` | `"ECOM CANCELED SALE"` |
| ECOM Refund | — | ECOM | `"Ecom Refund"` | `"ECOM REFUND"` |
| ECOM Pre-Auth | — | ECOM | `"Ecom Preauth"` | `"ECOM PREAUTH"` |
| ECOM Capture | — | ECOM | `"Ecom Capture"` | `"ECOM CAPTURE"` |

---

## 9. Platform-Specific Notes

### Android SDK

- `OperationStartResult.transactionReference` — save this **immediately** when the operation starts, before any callbacks arrive. It is required for `getTransactionStatus()` recovery.
- `endOfTransaction(TransactionResult result)` is the primary callback. Check `result.finStatus` first; then `result.type` to identify the operation.
- `InitialisationComplete` event must fire before the first transaction can be called — calling `sale()` before the device is ready returns `OperationStartResult.Result = OPERATION_NOT_PERMITTED`.
- Store-and-forward transactions set `result.storeAndForward = "1"` — the TXN Feed name and type are identical to online transactions.

### iOS SDK

- Uses Objective-C delegate pattern: implement `responseFinanceStatus:` to receive `FinanceResponseInfo`.
- `FinanceResponseInfo` has the same field set as Android's `TransactionResult` — use `transactionID` for the Handpoint GUID.
- `isTransactionResultPending` on `HeftClient` indicates a result has not yet been retrieved after reconnecting.

### Windows C# SDK

- `Sale()` returns `OperationStartResult` synchronously; the actual result arrives asynchronously via the `Events.Required.EndOfTransaction(TransactionResult result)` interface method.
- `TipAdjustment()` is the only method that returns `Task<FinancialStatus>` directly (awaitable).
- **Express Mode** (`Express` project): simplified single-terminal wrapper for quick integrations.

### JavaScript Cloud SDK

- All transaction methods return a `Promise<TransactionResult>`.
- The `transactionStatusCallback` parameter is called with intermediate status updates (useful for displaying progress).
- `init()` must be called first — it connects to the Handpoint Pusher channel and returns the list of available devices.
- `connect(deviceName)` where `deviceName` is in the format `"deviceType-serialNumber"` (e.g. `"A920-123456789"`).
- `pendingEotCallback` passed to `init()` fires if a previous transaction completed while the app was disconnected.

### Cordova Plugin

- Event-driven: register a handler with `cordova.plugins.Handpoint.setEventHandler(fn)` before calling any operation.
- `endOfTransaction` event is fired with the `TransactionResult` JSON object.
- Supports Android, iOS, and Windows platforms from a single JS API.
- `setup(ssKey, currency, success, error)` must be called before any transaction. The `ssKey` is the terminal's Shared Secret Key.

### PHP SDK (ECOM)

- Does **not** produce V2T messages — transactions bypass viscus-dev entirely.
- 3DS flow: initial `directRequest` → ACS redirect (if `rc == 0x1010A`) → cardholder authenticates on bank page → callback POST → verify with `Gateway::verifyResponse()`.
- `signature` field = HMAC-SHA256 of sorted request params using `merchantSecret` as key. `Gateway::sign()` builds this automatically.
- Results appear in TXN Feed only after `cardstream-analytics-dev` polls CardStream (up to 60-second delay).

---

## Related Documents

| Document | Covers |
|---|---|
| `TRANSACTION_MAPPING.md` | Full internal pipeline: V2T actions → TxnType → viscus status → logstash `name` logic; special cases |
| `GLOSSARY.md` | Industry terms and Handpoint platform terms |
| `PROTOCOL_CAPABILITIES.md` | Which protocols support which operations (pre-auth, MOTO, tokenization, etc.) |
| `ACQUIRER_CREATION_GUIDE.md` | How to configure acquirers and card reader config templates in TMS |
