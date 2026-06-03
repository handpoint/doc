---
title: Transaction result object
sidebar_position: 2
description: Transaction result schema per integration path — REST API, Android SDK, iOS SDK, and Cordova.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Transaction result object

All payment operations return a transaction result asynchronously. The structure varies by integration path — select yours below.

<Tabs groupId="integration-path">

<TabItem value="rest-api" label="REST API">

## REST API — response body

The transaction result is delivered as a JSON callback (webhook) or via polling the transaction status endpoint.

```json
{
  "transactionId": "a1b2c3d4-...",
  "type": "SALE",
  "statusMessage": "Approved",
  "authorisedAmountInCents": 1000,
  "totalAmountInCents": 1100,
  "tipAmountInCents": 100,
  "currency": "USD",
  "cardEntryType": "CONTACTLESS",
  "maskedCardNumber": "****1234",
  "cardExpiryDate": "1226",
  "cardToken": "tok_abc123",
  "cardTokenProvider": "TSYS",
  "merchantReceipt": "...",
  "customerReceipt": "...",
  "originalTransactionId": null,
  "deviceStatus": { ... },
  "errorMessage": null
}
```

### Fields

| Field | Type | Description |
|---|---|---|
| `transactionId` | string | Unique transaction GUID. Store for reversals, tip adjustments, status queries. |
| `type` | string | `SALE` `REFUND` `REVERSAL` `VOID` `TOKENIZE` `MOTO_SALE` etc. |
| `statusMessage` | string | `"Approved"` `"Declined"` `"Cancelled"` etc. |
| `authorisedAmountInCents` | integer | Authorised amount in smallest currency unit |
| `totalAmountInCents` | integer | Total including tip |
| `tipAmountInCents` | integer | Tip amount (0 if none) |
| `currency` | string | ISO 4217 code: `"USD"` `"GBP"` `"EUR"` etc. |
| `cardEntryType` | string | `EMV` `CONTACTLESS` `SWIPE` `MANUAL` |
| `maskedCardNumber` | string | `"****1234"` |
| `cardExpiryDate` | string | `"MMYY"` format |
| `cardToken` | string | Token (only if tokenization was requested) |
| `cardTokenProvider` | string | Token provider: `TSYS` `PAYSAFE` `TOKENEX` |
| `merchantReceipt` | string | Merchant receipt (print or display) |
| `customerReceipt` | string | Customer receipt |
| `originalTransactionId` | string | For refunds/reversals — original transaction GUID |
| `deviceStatus` | object | Terminal state at time of transaction |
| `errorMessage` | string | Error details if failed |

### Status values

| Value | Meaning |
|---|---|
| `APPROVED` | Approved by issuer |
| `DECLINED` | Declined by issuer |
| `PARTIALLY_APPROVED` | Partially approved (rare) |
| `REFERRAL` | Requires manual authorisation |
| `CANCELLED` | Cardholder cancelled |
| `FAILED` | Technical failure |
| `TIMEOUT` | Terminal did not respond |
| `REVERSED` | Transaction reversed |
| `UNDEFINED` | No result received — query transaction status endpoint |

</TabItem>

<TabItem value="android-pax" label="Android (PAX)">

## Android SDK — `TransactionResult`

The result is delivered asynchronously via the `Events.Required` interface, specifically the `endOfTransaction` callback.

```kotlin
override fun endOfTransaction(
    result: TransactionResult,
    transactionReference: TransactionReference
) {
    if (result.type == TransactionResultType.APPROVED) {
        val id = result.transactionID        // store for reversals
        val amount = result.authorisedAmountInCents
        val receipt = result.merchantReceipt
    }
}
```

### `TransactionResult` fields

| Field | Type | Description |
|---|---|---|
| `transactionID` | String | Unique transaction GUID |
| `type` | TransactionResultType | See enum below |
| `statusMessage` | String | Human-readable status |
| `authorisedAmountInCents` | Long | Authorised amount in minor units |
| `requestedAmountInCents` | Long | Amount requested (may differ on partial approvals) |
| `totalAmountInCents` | Long | Total including tip |
| `tipAmountInCents` | Long | Tip amount (0 if none) |
| `currency` | Currency | Currency enum |
| `cardEntryType` | CardEntryType | `EMV` `CONTACTLESS` `SWIPE` `MANUAL` |
| `maskedCardNumber` | String | `"****1234"` |
| `cardExpiryDate` | String | `"MMYY"` |
| `cardToken` | String | Token (if tokenization requested) |
| `cardTokenProvider` | String | Token provider |
| `cardBrand` | CardBrand | `VISA` `MASTERCARD` `AMEX` `JCB` `UNIONPAY` etc. |
| `merchantReceipt` | String | Merchant receipt text |
| `customerReceipt` | String | Customer receipt text |
| `originalEFTTransactionID` | String | For refunds/reversals — original GUID |
| `deviceStatus` | DeviceStatus | Terminal state |
| `errorMessage` | String | Error details if failed |
| `customerReference` | String | Echoed-back merchant reference (if sent) |
| `batchNumber` | String | Batch number (if returned by acquirer) |
| `metadata` | Metadata | Custom fields echoed from the request |

### `TransactionResultType` enum

| Value | Meaning |
|---|---|
| `APPROVED` | Approved |
| `DECLINED` | Declined |
| `PARTIALLY_APPROVED` | Partially approved |
| `REFERRAL` | Requires authorisation |
| `CANCELLED` | Cancelled by cardholder |
| `FAILED` | Technical failure |
| `TIMEOUT` | No response from terminal |
| `REVERSED` | Reversed |
| `UNDEFINED` | No result — use `getTransactionStatus()` to recover |

</TabItem>

<TabItem value="android-hilite" label="Android (HiLite)">

## Android SDK — `TransactionResult` (HiLite BT)

Identical to Android (PAX) — the same `TransactionResult` class and `endOfTransaction` callback are used regardless of whether the terminal is PAX (native) or HiLite (Bluetooth).

```kotlin
override fun endOfTransaction(
    result: TransactionResult,
    transactionReference: TransactionReference
) {
    if (result.type == TransactionResultType.APPROVED) {
        val id = result.transactionID
        val receipt = result.merchantReceipt
    }
}
```

See the **Android (PAX)** tab for the full field reference — all fields are the same.

</TabItem>

<TabItem value="ios-hilite" label="iOS (HiLite)">

## iOS SDK — `ResponseInfo`

The result is delivered via the `HeftClientDelegate` protocol method.

```swift
func heftClient(
    _ client: HeftClient!,
    didGetTransactionResponse info: ResponseInfo!
) {
    if info.statusCode == EFT_PROTOCOL_RESULT_SUCCESS {
        let transactionId = info.xml   // full result as XML string
        let statusCode = info.statusCode
        let userInfo = info.userInfo   // dictionary of result fields
    }
}
```

### `ResponseInfo` fields

| Field | Type | Description |
|---|---|---|
| `statusCode` | Int | `EFT_PROTOCOL_RESULT_SUCCESS` (0) or error code |
| `statusMessage` | String | Human-readable status |
| `xml` | String | Full transaction result as XML string |
| `userInfo` | [String: Any] | Dictionary of parsed result fields (see below) |
| `type` | String | Transaction type |
| `finStatus` | String | Financial status: `"AUTHORISED"` `"DECLINED"` etc. |
| `authorisedAmount` | String | Authorised amount as string |
| `totalAmount` | String | Total amount including tip |
| `currency` | String | ISO 4217 currency code |
| `maskedPan` | String | Masked card number |
| `cardSchemeName` | String | Card brand |
| `cardToken` | String | Token (if tokenization requested) |
| `merchantReceipt` | String | Merchant receipt text |
| `customerReceipt` | String | Customer receipt text |
| `EFTTransactionID` | String | Unique transaction GUID |
| `originalEFTTransactionID` | String | For refunds/reversals |

### Status codes

| Code | Constant | Meaning |
|---|---|---|
| `0` | `EFT_PROTOCOL_RESULT_SUCCESS` | Approved |
| `1` | `EFT_PROTOCOL_RESULT_INVALID_DATA` | Invalid data |
| `2` | `EFT_PROTOCOL_RESULT_PROCESSING_ERROR` | Processing error |
| `3` | `EFT_PROTOCOL_RESULT_COMMAND_NOT_ALLOWED` | Not allowed |
| `5` | `EFT_PROTOCOL_RESULT_CANCEL` | Cancelled |

</TabItem>

<TabItem value="cordova" label="Cordova">

## Cordova — result callback object

The result is delivered to the success callback as a JavaScript object.

```javascript
handpoint.sale(
  { amount: 1000, currency: "USD" },
  function(result) {
    if (result.finStatus === 'AUTHORISED') {
      console.log(result.EFTTransactionID);   // store for reversals
      console.log(result.authorisedAmountInCents);
      console.log(result.merchantReceipt);
    }
  },
  function(error) { console.error(error); }
);
```

### Result object fields

| Field | Type | Description |
|---|---|---|
| `EFTTransactionID` | string | Unique transaction GUID |
| `type` | string | `SALE` `REFUND` `REVERSAL` etc. |
| `finStatus` | string | `"AUTHORISED"` `"DECLINED"` `"CANCELLED"` `"FAILED"` |
| `statusMessage` | string | Human-readable status |
| `authorisedAmountInCents` | number | Authorised amount in minor units |
| `totalAmountInCents` | number | Total including tip |
| `tipAmountInCents` | number | Tip amount |
| `currency` | string | ISO 4217 code |
| `maskedPan` | string | Masked card number |
| `cardSchemeName` | string | Card brand |
| `cardToken` | string | Token (if tokenization requested) |
| `cardTokenProvider` | string | Token provider |
| `merchantReceipt` | string | Merchant receipt text |
| `customerReceipt` | string | Customer receipt text |
| `originalEFTTransactionID` | string | Original GUID for refunds/reversals |
| `deviceStatus` | object | Terminal state |
| `errorMessage` | string | Error details if failed |

### `finStatus` values

| Value | Meaning |
|---|---|
| `AUTHORISED` | Approved |
| `DECLINED` | Declined |
| `CANCELLED` | Cancelled |
| `FAILED` | Technical failure |
| `TIMEOUT` | No response |
| `REVERSED` | Reversed |

</TabItem>

</Tabs>
