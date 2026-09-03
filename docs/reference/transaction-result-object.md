---
title: Transaction result object
sidebar_position: 2
description: Complete transaction result schema per integration path — Cloud API, Android SDK, iOS SDK, and Cordova.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Transaction result object

All payment operations return a transaction result asynchronously. The structure varies by integration path — select yours below.

<Tabs groupId="integration-path">

<TabItem value="cloud-api" label="Cloud API">

## Cloud API — transaction result

The result is delivered as a JSON POST to your `callbackUrl`, or retrieved via `GET /transaction-result/{transactionResultId}` if no callback URL was provided.

```json
{
  "transactionID": "9985dba0-9cbb-11f1-b018-b122502914b1",
  "efttransactionID": "9985dba0-9cbb-11f1-b018-b122502914b1",
  "efttimestamp": 1787246502000,
  "transactionReference": "5ad2dcf3-56b8-4295-b73f-0628a45d21b9",
  "transactionOrigin": "CLOUD",
  "type": "SALE",
  "finStatus": "AUTHORISED",
  "statusMessage": "Aprobado o completado con éxito",
  "errorMessage": "",
  "multiLanguageStatusMessages": {},
  "multiLanguageErrorMessages": {},
  "recoveredTransaction": false,

  "requestedAmount": 1002,
  "totalAmount": 1002,
  "tipAmount": 0,
  "tipPercentage": 0,
  "dueAmount": 0,
  "taxAmount": null,
  "surcharge": {
    "amount": 0,
    "applied": false,
    "reason": ""
  },
  "currency": "USD",

  "cardEntryType": "ICC",
  "paymentScenario": "CHIPCONTACTLESS",
  "tenderType": "CREDIT",
  "verificationMethod": "NOT_REQUIRED",
  "cardSchemeName": "Visa",
  "maskedCardNumber": "************0936",
  "cardTypeId": "************0936",
  "expiryDateMMYY": "1027",
  "cardHolderName": "",
  "cardLanguagePreference": "es_ES",
  "cardToken": "",
  "accountType": "",
  "unMaskedPan": "",
  "balance": null,

  "authorisationCode": "123456",
  "issuerResponseCode": "00",
  "rrn": "0000820374195",

  "aid": "A0000000031010",
  "applicationLabel": "VISA CLASICA",
  "tvr": "0000000000",
  "tsi": "",
  "iad": "06011203A00000",
  "arc": "0000",
  "chipTransactionReport": "",

  "mid": "630000026730",
  "tid": "08215994",
  "merchantName": "Postman Test1",
  "merchantAddress": "Test Address 2 10111 London",
  "customerReference": "",
  "budgetNumber": "",
  "batchNumber": "123",
  "originalEFTTransactionID": "",
  "metadata": null,
  "customFields": null,
  "customData": "",

  "customerReceipt": "https://receipts.handpoint.io/receipts/9985dba0-9cbb-11f1-b018-b122502914b1/customer.html",
  "merchantReceipt": "https://receipts.handpoint.io/receipts/9985dba0-9cbb-11f1-b018-b122502914b1/merchant.html",
  "signatureUrl": "",

  "deviceStatus": {
    "applicationName": "Payments",
    "applicationVersion": "20.4.14.0-RC.66",
    "batteryCharging": "Not Charging",
    "batteryStatus": "59",
    "batterymV": "3829",
    "bluetoothName": "PAXA920",
    "externalPower": "Unknown",
    "serialNumber": "0821599465",
    "statusMessage": ""
  }
}
```

### Core identifiers

| Field | Type | Description |
|---|---|---|
| `transactionID` | string | UUID v4 — the primary transaction identifier. Store for reversals, tip adjustments, and status queries. |
| `efttransactionID` | string | Alias of `transactionID`. Same value. |
| `efttimestamp` | number | Transaction timestamp — Unix epoch in **milliseconds**. |
| `transactionReference` | string | The UUID v4 you sent in the request, echoed back. Use to correlate with your own system. |
| `originalEFTTransactionID` | string | For refunds, reversals, captures: the `transactionID` of the original transaction. Empty on original transactions. |
| `transactionOrigin` | string | `CLOUD` when processed via Cloud API. `STANDALONE` when processed directly on terminal. |

### Status

| Field | Type | Description |
|---|---|---|
| `finStatus` | string | **Primary result indicator.** See [finStatus values](#finstatus-values) below. |
| `type` | string | Transaction type. See [type values](#type-values) below. |
| `statusMessage` | string | Human-readable status in the **cardholder's card language** (`cardLanguagePreference`), not the terminal's configured language. For example, a Spanish-issued Visa card returns `"Aprobado o completado con éxito"` even if the terminal is configured in English. |
| `errorMessage` | string | Error detail if `finStatus` is `FAILED` or `DECLINED`. Empty on success. |
| `multiLanguageStatusMessages` | object | Map of locale code → localised status message. May be empty. |
| `multiLanguageErrorMessages` | object | Map of locale code → localised error message. May be empty. |
| `issuerResponseCode` | string | ISO 8583 response code from the issuer. `"00"` = approved. |
| `authorisationCode` | string | 6-character approval code from the acquirer. Present on approved transactions. |
| `recoveredTransaction` | boolean | `true` if this result was delivered via the terminal recovery loop (callback was retried after a network failure). |

### Amounts

All amounts are in the **smallest currency unit** (cents for USD/EUR/GBP, etc.).

| Field | Type | Description |
|---|---|---|
| `requestedAmount` | integer | Amount originally requested. May differ from `totalAmount` on partial approvals or tip adjustments. |
| `totalAmount` | integer | Total amount charged, including tip. |
| `tipAmount` | integer | Tip amount. `0` if no tip. |
| `tipPercentage` | number | Tip as a percentage of the base amount. |
| `dueAmount` | integer | Outstanding amount after partial payment (if applicable). |
| `taxAmount` | integer | Tax amount included in the total (App 4.14.0 / REST API 2.28.0+). `0` if not applicable or not yet available. |
| `surcharge` | integer | Surcharge applied by the acquirer (App 4.14.0 / REST API 2.28.0+). `0` if not applicable. |
| `currency` | string | ISO 4217 currency code: `"USD"` `"GBP"` `"EUR"` etc. |

### Card

| Field | Type | Description |
|---|---|---|
| `cardEntryType` | string | How the card was read. See [cardEntryType values](#cardentrytype-values). |
| `paymentScenario` | string | Detailed entry path. See [paymentScenario values](#paymentscenario-values). |
| `tenderType` | string | `CREDIT` `DEBIT` `NOT_SET` |
| `verificationMethod` | string | How the cardholder was verified. See [verificationMethod values](#verificationmethod-values). |
| `cardSchemeName` | string | Card network name as returned by the terminal: `"Visa"` `"Mastercard"` `"Amex"` etc. |
| `maskedCardNumber` | string | PAN masked as `"************1234"`. |
| `cardTypeId` | string | Alternative masked PAN representation (same format). |
| `expiryDateMMYY` | string | Card expiry date in `MMYY` format, e.g. `"1027"` = October 2027. |
| `cardHolderName` | string | Cardholder name as read from the card. May be empty. |
| `cardLanguagePreference` | string | Language preference from the card chip (IETF tag, e.g. `"es_ES"`). |
| `cardToken` | string | Tokenized card number. Non-empty only when `tokenizeCard` or `saleAndTokenizeCard` was used. |
| `accountType` | string | Account type selected by the cardholder (e.g. `"CHEQUE"` `"SAVINGS"`). |
| `unMaskedPan` | string | Full PAN. Empty in standard operation — only populated in specific acquirer configurations. |
| `balance` | object\|null | Balance returned by the issuer (e.g. for prepaid or debit cards). `null` if not provided. |

### EMV fields

Present on chip (ICC) and contactless chip transactions. Empty on swipe (MSR) or card-not-present (CNP).

| Field | Type | Description |
|---|---|---|
| `aid` | string | EMV Application Identifier (tag 9F06), e.g. `"A0000000031010"` for Visa. |
| `applicationLabel` | string | Human-readable application name from the card chip, e.g. `"VISA CLASICA"` `"MASTERCARD"`. |
| `tvr` | string | Terminal Verification Results (tag 95). 5-byte hex string. |
| `tsi` | string | Transaction Status Information (tag 9B). 2-byte hex string. |
| `iad` | string | Issuer Application Data (tag 9F10). |
| `arc` | string | Authorisation Response Code (tag 8A), e.g. `"0000"` = approved. |
| `chipTransactionReport` | string | Full chip transaction data report. May be empty. |

### Merchant & terminal

| Field | Type | Description |
|---|---|---|
| `mid` | string | Merchant ID assigned by the acquirer. |
| `tid` | string | Terminal ID assigned by the acquirer. |
| `merchantName` | string | Merchant name configured on the terminal. |
| `merchantAddress` | string | Merchant address configured on the terminal. |
| `rrn` | string | Retrieval Reference Number — acquirer-assigned reference for this transaction. |
| `customerReference` | string | Echoed-back value from `customerReference` in the request, if sent. |
| `budgetNumber` | string | Budget/instalment number (South African acquirers). |
| `batchNumber` | string | Batch number returned by the acquirer (App 4.14.0 / REST API 2.28.0+). Empty string if not yet available or acquirer does not return it. |
| `metadata` | object\|null | Custom metadata echoed from the request, if used. |
| `customFields` | array\|null | Key-value pairs for acquirer-specific data. Present on terminal-initiated reversals — see [Terminal-Initiated Reversals](/reference/terminal-reversals) for the `messageReasonCode` values. `null` otherwise. |

### Receipts

| Field | Type | Description |
|---|---|---|
| `merchantReceipt` | string | Full merchant receipt as an HTML string. Print or display to the operator. |
| `customerReceipt` | string | Full customer receipt as an HTML string. Print or hand to the cardholder. |
| `signatureUrl` | string | URL of the captured signature image (if signature CVM was used). Empty otherwise. |

### Device

| Field | Type | Description |
|---|---|---|
| `deviceStatus.applicationName` | string | Name of the payment app on the terminal. |
| `deviceStatus.applicationVersion` | string | Version of the payment app. |
| `deviceStatus.batteryStatus` | string | Battery level as a percentage string, e.g. `"79"`. |
| `deviceStatus.batteryCharging` | string | `"Charging"` or `"Not Charging"`. |
| `deviceStatus.batterymV` | string | Battery voltage in millivolts. |
| `deviceStatus.externalPower` | string | Power source: `"USB"` `"AC"` `"None"`. |
| `deviceStatus.bluetoothName` | string | Bluetooth device name of the terminal. |
| `deviceStatus.serialNumber` | string | Terminal serial number. |
| `deviceStatus.statusMessage` | string | Terminal status message. |

---

### `finStatus` values

| Value | Meaning |
|---|---|
| `AUTHORISED` | Approved by the issuer. Funds captured (or held, for pre-auth). |
| `DECLINED` | Declined by the issuer or gateway. |
| `CANCELLED` | Cancelled by the cardholder at the terminal, or reversed automatically by the terminal after host approval. For terminal-initiated reversals, inspect `customFields.messageReasonCode` for the specific cause — see [Terminal-Initiated Reversals](/reference/terminal-reversals). |
| `FAILED` | Technical failure — check `errorMessage`. |
| `UNDEFINED` | No result received from the gateway. Query `/status` endpoint — see [Transaction Recovery](/reference/transaction-recovery). |
| `PARTIALLY_APPROVED` | Partial approval — `totalAmount` is less than `requestedAmount`. `PARTIAL_APPROVAL` is a **alias** for the same value (integer 6 in all SDKs) — both names are emitted. |
| `REFUNDED` | Transaction was subsequently refunded. Returned on status queries for original transactions that have been fully refunded. |
| `PROCESSED` | Operation processed (used for non-financial operations — Start of Day, Host Init). |
| `CAPTURED` | Pre-authorization was captured. |
| `IN_PROGRESS` | Transaction is still being processed (Windows SDK only; also returned by `GET /transactions/{ref}/status` while in flight). |

---

### `type` values

| Value | Description |
|---|---|
| `SALE` | Card-present sale |
| `REFUND` | Refund (linked or unlinked) |
| `REVERSAL` | Sale reversal |
| `PRE_AUTHORIZATION` | Pre-auth hold |
| `PRE_AUTHORIZATION_INCREASE` | Pre-auth increase |
| `PRE_AUTHORIZATION_CAPTURE` | Pre-auth capture |
| `MOTO_SALE` | MOTO sale |
| `MOTO_REFUND` | MOTO refund |
| `MOTO_REVERSAL` | MOTO reversal |
| `TOKENIZE_CARD` | Card tokenization only |
| `SALE_AND_TOKENIZE_CARD` | Sale + tokenize |
| `TIP_ADJUSTMENT` | Tip adjustment on an existing sale |
| `VOID_SALE` | Interac / TNS void |
| `TRANSACTION_STATUS` | Status query result |
| `UNDEFINED` | Unknown |

---

### `cardEntryType` values

| Value | Description |
|---|---|
| `ICC` | Integrated Circuit Card — chip insert **or** contactless chip (NFC). Use `paymentScenario` to distinguish. |
| `MSR` | Magnetic Stripe Reader — swipe. |
| `CNP` | Card Not Present — MOTO / back-office. |
| `UNDEFINED` | Unknown entry method. |

---

### `paymentScenario` values

| Value | Description |
|---|---|
| `CHIP` | Card inserted, EMV chip processed. |
| `CHIPCONTACTLESS` | Card tapped, EMV chip processed over NFC. |
| `MAGSTRIPE` | Card swiped (magnetic stripe). |
| `MAGSTRIPECONTACTLESS` | Contactless magnetic stripe (legacy contactless cards). |
| `CHIPFAILMAGSTRIPE` | Chip failed — fell back to magnetic stripe. |
| `MOTO` | Mail order / telephone order (card not present). |
| `SWIPED` | Swiped (alias for MAGSTRIPE on some acquirers). |
| `FALLBACK_SWIPE` | Contactless and chip failed — swiped as final fallback. |
| `UNKNOWN` | Unknown scenario. |

---

### `verificationMethod` values

| Value | Description |
|---|---|
| `NOT_REQUIRED` | No cardholder verification required (e.g. low-value contactless). |
| `PIN` | Offline or online PIN entered. |
| `SIGNATURE` | Signature captured. |
| `PIN_SIGNATURE` | Both PIN and signature. |
| `MOBILE_PASS_CODE` | On-device biometric / passcode ("See Phone" — Apple Pay, Google Pay). |
| `PIN_BYPASS` | PIN bypass by cardholder. |
| `CVC` | Card verification code (CNP transactions). |
| `FAILED` | Verification attempted but failed. |
| `UNDEFINED` | Unknown. |

</TabItem>

<TabItem value="android-pax" label="Android (PAX)">

## Android SDK — `TransactionResult`

The result is delivered asynchronously via the `Events.Required` interface.

```kotlin
override fun endOfTransaction(
    result: TransactionResult,
    device: Device
) {
    when (result.finStatus) {
        FinancialStatus.AUTHORISED -> {
            val id = result.transactionID       // store for reversals
            val total = result.totalAmount      // BigInteger, minor units
            val receipt = result.merchantReceipt
        }
        FinancialStatus.DECLINED -> { /* handle decline */ }
        FinancialStatus.CANCELLED -> { /* cardholder cancelled */ }
        else -> { /* handle other states */ }
    }
}
```

### Sample field values

The following shows what a `TransactionResult` looks like for a successful contactless chip sale.

```kotlin
// --- Core identifiers ---
result.transactionID            // "e6254050-65ab-11f1-a9af-ffa530c6e21f"
result.eFTTransactionID         // "e6254050-65ab-11f1-a9af-ffa530c6e21f"  (alias)
result.eFTTimestamp             // Date(1781192438000)
result.transactionReference     // "cd5c85cf-e8be-4a62-ba0a-3abd7362f610"
result.originalEFTTransactionID // ""  (empty on original transactions)
result.transactionOrigin        // TransactionOrigin.CLOUD

// --- Status ---
result.finStatus                // FinancialStatus.AUTHORISED
result.type                     // TransactionType.SALE
result.statusMessage            // "Approved"
result.errorMessage             // ""
result.issuerResponseCode       // "00"
result.authorisationCode        // "123456"
result.isRecoveredTransaction   // false

// --- Amounts (BigInteger, minor units) ---
result.requestedAmount          // BigInteger("100")   →  USD 1.00
result.totalAmount              // BigInteger("100")
result.tipAmount                // BigInteger("0")
result.tipPercentage            // 0.0
result.dueAmount                // BigInteger("0")
result.taxAmount                // null or BigInteger("0")  (App 4.14.0 / SDK 7.1014.0+; null when not applicable)
result.surcharge                // BigInteger("0")  (App 4.14.0 / SDK 7.1014.0+)
result.currency                 // Currency.USD

// --- Card ---
result.cardEntryType            // CardEntryType.ICC
result.paymentScenario          // PaymentScenario.CHIPCONTACTLESS
result.tenderType               // TenderType.CREDIT
result.verificationMethod       // VerificationMethod.NOT_REQUIRED
result.cardSchemeName           // "Visa"
result.maskedCardNumber         // "************0936"
result.cardTypeId               // "************0936"
result.expiryDateMMYY           // "1027"
result.cardHolderName           // ""
result.cardLanguagePreference   // "es_ES"
result.cardToken                // ""  (non-empty only on tokenize operations)
result.accountType              // ""
result.unMaskedPan              // ""  (empty in standard operation)
result.balance                  // null

// --- Authorisation ---
result.rrn                      // "0000611561639"

// --- EMV ---
result.aid                      // "A0000000031010"
result.tvr                      // "0000000000"
result.tsi                      // "0000"
result.iad                      // "06011203A00000"
result.arc                      // "0000"
result.chipTransactionReport    // ""

// --- Merchant & terminal ---
result.mid                      // "123456789010102"
result.tid                      // "123456789010102"
result.merchantName             // "DEMO MERCHANT"
result.merchantAddress          // "7800 Congress Ave STE 112 33487 Boca Raton"
result.customerReference        // ""
result.budgetNumber             // ""
result.batchNumber              // ""  (App 4.14.0 / SDK 7.1014.0+)
result.metadata                 // null
result.applicationLabel         // "VISA CREDIT"
result.customData               // ""

// --- Receipts ---
result.merchantReceipt          // "<html>...</html>"
result.customerReceipt          // "<html>...</html>"
result.signatureUrl             // ""

// --- Device ---
result.deviceStatus.applicationName     // "Payments"
result.deviceStatus.applicationVersion  // "20.4.4.4"
result.deviceStatus.batteryStatus       // "79"
result.deviceStatus.batteryCharging     // "Not Charging"
result.deviceStatus.batterymV           // "3908"
result.deviceStatus.externalPower       // "USB"
result.deviceStatus.bluetoothName       // "PAXA920PRO"
result.deviceStatus.serialNumber        // "1850025030"
```

### Core identifiers

| Field | Type | Description |
|---|---|---|
| `transactionID` | String | UUID v4 — primary transaction identifier. Store for reversals, captures, tip adjustments. |
| `eFTTransactionID` | String | Alias of `transactionID`. |
| `eFTTimestamp` | Date | Transaction timestamp. |
| `transactionReference` | String | UUID v4 echoed from the request. |
| `originalEFTTransactionID` | String | Original `transactionID` for refunds, reversals, captures. Empty on original transactions. |
| `transactionOrigin` | TransactionOrigin? | `CLOUD` or `STANDALONE`. |

### Status

| Field | Type | Description |
|---|---|---|
| `finStatus` | FinancialStatus | **Primary result indicator.** See [FinancialStatus](#financialstatus-enum) below. |
| `type` | TransactionType | Transaction type. See [TransactionType](#transactiontype-enum) below. |
| `statusMessage` | String | Human-readable status in the **cardholder's card language** (`cardLanguagePreference`), not the terminal's configured language. |
| `errorMessage` | String | Error detail on failure. |
| `multiLanguageStatusMessages` | Map&lt;SupportedLocales, String&gt; | Localised status messages map. |
| `multiLanguageErrorMessages` | Map&lt;SupportedLocales, String&gt; | Localised error messages map. |
| `issuerResponseCode` | String | ISO 8583 issuer response code. `"00"` = approved. |
| `authorisationCode` | String | 6-character approval code from acquirer. |
| `isRecoveredTransaction` | Boolean | `true` if delivered via terminal recovery loop. |

### Amounts

All amounts are `BigInteger` in the **smallest currency unit** (cents, pence, etc.).

| Field | Type | Description |
|---|---|---|
| `requestedAmount` | BigInteger | Amount originally requested. |
| `totalAmount` | BigInteger | Total charged, including tip. |
| `tipAmount` | BigInteger | Tip amount. `BigInteger.ZERO` if none. |
| `tipPercentage` | Double | Computed tip percentage. |
| `dueAmount` | BigInteger | Outstanding amount after partial payment. |
| `taxAmount` | BigInteger? | Tax amount (App 4.14.0 / SDK 7.1014.0+). `null` or `BigInteger.ZERO` when not applicable — always null-check before use. |
| `surcharge` | BigInteger | Acquirer surcharge (App 4.14.0 / SDK 7.1014.0+). `BigInteger.ZERO` if not applicable. |
| `currency` | Currency | Currency enum. |

### Card

| Field | Type | Description |
|---|---|---|
| `cardEntryType` | CardEntryType | `ICC` `MSR` `CNP` `UNDEFINED` |
| `paymentScenario` | PaymentScenario | Detailed entry path — `CHIP` `CHIPCONTACTLESS` `MAGSTRIPE` etc. |
| `tenderType` | TenderType | `CREDIT` `DEBIT` `NOT_SET` |
| `verificationMethod` | VerificationMethod | `NOT_REQUIRED` `PIN` `SIGNATURE` `MOBILE_PASS_CODE` etc. |
| `cardSchemeName` | String | Card network: `"Visa"` `"Mastercard"` `"Amex"` etc. |
| `maskedCardNumber` | String | Masked PAN, e.g. `"************1234"`. |
| `cardTypeId` | String | Alternative masked PAN format. |
| `expiryDateMMYY` | String | Expiry in `MMYY` format. |
| `cardHolderName` | String | Cardholder name from chip. May be empty. |
| `cardLanguagePreference` | String | Card's preferred language (IETF tag). |
| `cardToken` | String | Token — non-empty only on tokenize operations. |
| `accountType` | String | Cardholder-selected account type. |
| `unMaskedPan` | String | Full PAN. Empty in standard operation. |
| `balance` | Balance? | Issuer-returned balance. `null` if not provided. |

### EMV fields

| Field | Type | Description |
|---|---|---|
| `aid` | String | Application Identifier (EMV tag 9F06). |
| `tvr` | String | Terminal Verification Results (tag 95). |
| `tsi` | String | Transaction Status Information (tag 9B). |
| `iad` | String | Issuer Application Data (tag 9F10). |
| `arc` | String | Authorisation Response Code (tag 8A). |
| `chipTransactionReport` | String | Full chip transaction report. |

### Merchant & terminal

| Field | Type | Description |
|---|---|---|
| `mid` | String | Merchant ID. |
| `tid` | String | Terminal ID. |
| `merchantName` | String | Merchant name from terminal config. |
| `merchantAddress` | String | Merchant address from terminal config. |
| `rrn` | String | Retrieval Reference Number from acquirer. |
| `customerReference` | String | Echoed-back `customerReference` from request. |
| `budgetNumber` | String | Budget/instalment number (SA acquirers). |
| `batchNumber` | String | Batch number (App 4.14.0 / SDK 7.1014.0+). Empty string if not yet available or acquirer does not return it. |
| `metadata` | Metadata? | Custom metadata echoed from request. |
| `moneyRemittanceOptions` | MoneyRemittance? | Present if `moneyRemittanceOptions` were sent in request. |
| `applicationLabel` | String | Application label from the card (e.g. `"VISA CREDIT"`). |
| `customData` | String | Custom data field — can be used to pass additional information. |

### Receipts

| Field | Type | Description |
|---|---|---|
| `merchantReceipt` | String | HTML merchant receipt. |
| `customerReceipt` | String | HTML customer receipt. |
| `signatureUrl` | String | URL of captured signature image. Empty if no signature. |

### Device

| Field | Type | Description |
|---|---|---|
| `deviceStatus` | DeviceStatus | Terminal state at time of transaction. Same sub-fields as Cloud API. |

---

### `FinancialStatus` enum

| Value | Description |
|---|---|
| `AUTHORISED` | Approved. |
| `DECLINED` | Declined by issuer. |
| `CANCELLED` | Cardholder cancelled, or reversed automatically by the terminal after host approval — see [Terminal-Initiated Reversals](/reference/terminal-reversals). |
| `FAILED` | Technical failure. |
| `UNDEFINED` | No result — call `hapi.getTransactionStatus(transactionReference)` to recover. |
| `PARTIALLY_APPROVED` | Partially approved — `totalAmount` is less than `requestedAmount`. `PARTIAL_APPROVAL` is an accepted alias for the same value. |
| `REFUNDED` | Transaction was refunded. |
| `PROCESSED` | Non-financial operation processed. |
| `CAPTURED` | Pre-auth captured. |

---

### `TransactionType` enum

| Value | Tag string |
|---|---|
| `SALE` | `"SALE"` |
| `REFUND` | `"REFUND"` |
| `REVERSAL` | `"REVERSAL"` |
| `PRE_AUTHORIZATION` | `"PRE AUTHORIZATION"` |
| `PRE_AUTHORIZATION_INCREASE` | `"PRE AUTHORIZATION INCREMENT"` |
| `PRE_AUTHORIZATION_CAPTURE` | `"PRE AUTHORIZATION CAPTURE"` |
| `MOTO_SALE` | `"MOTO SALE"` |
| `MOTO_REFUND` | `"MOTO REFUND"` |
| `MOTO_REVERSAL` | `"MOTO REVERSAL"` |
| `TOKENIZE_CARD` | `"TOKENIZE CARD"` |
| `SALE_AND_TOKENIZE_CARD` | `"SALE AND TOKENIZE CARD"` |
| `TIP_ADJUSTMENT` | `"TIP ADJUSTMENT"` |
| `VOID_SALE` | `"SALE VOID"` |
| `TRANSACTION_STATUS` | `"TRANSACTION STATUS"` |
| `UNDEFINED` | `"UNDEFINED"` |

</TabItem>

<TabItem value="android-hilite" label="Android (HiLite)">

## Android SDK — `TransactionResult` (HiLite BT)

Identical to Android (PAX) — the same `TransactionResult` class and `endOfTransaction` callback are used regardless of whether the terminal is PAX (native on-device) or HiLite (Bluetooth-connected reader).

```kotlin
override fun endOfTransaction(
    result: TransactionResult,
    device: Device
) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        val id = result.transactionID
        val receipt = result.merchantReceipt
    }
}
```

See the **Android (PAX)** tab for the complete field reference — all fields are identical.

</TabItem>

<TabItem value="ios-hilite" label="iOS (HiLite)">

## iOS SDK — `FinanceResponseInfo`

The result is delivered via the `HeftStatusReportDelegate` protocol.

```swift
func responseFinanceStatus(_ info: (any FinanceResponseInfo)!) {
    // statusCode is the SDK communication result — EFT_PP_STATUS_SUCCESS means
    // the terminal transaction completed. Always check finStatus for the payment outcome.
    if info.statusCode == EFT_PP_STATUS_SUCCESS {
        let finStatus = info.finStatus        // "AUTHORISED", "DECLINED", etc.
        let txnId = info.eFTTransactionID     // store for reversals
        let receipt = info.merchantReceipt
    }
}
```

### `FinanceResponseInfo` properties

All fields are strings unless noted. Values are extracted from the terminal's XML response.

| Property | Type | Description |
|---|---|---|
| `statusCode` | Int | SDK communication code — `EFT_PP_STATUS_SUCCESS` (0x0001) on success. See [status codes](#status-codes) below. |
| `status` | String | Raw status string from the terminal. |
| `finStatus` | String | **Primary result indicator.** See [`finStatus` values](#finstatus-values-1) below. |
| `type` | String | Transaction type: `"SALE"` `"REFUND"` `"REVERSAL"` etc. |
| `eFTTransactionID` | String | UUID v4 — primary transaction identifier. Store for reversals and status queries. |
| `originalEFTTransactionID` | String | Original `eFTTransactionID` for refunds and reversals. |
| `eFTTimestamp` | String | Transaction timestamp. |
| `statusMessage` | String | Human-readable status. |
| `errorMessage` | String | Error detail on failure. |
| `authorisedAmount` | NSInteger | Authorised amount in smallest currency unit. |
| `requestedAmount` | String | Requested amount as a string. |
| `totalAmount` | String | Total charged, including gratuity. |
| `gratuityAmount` | String | Gratuity (tip) amount. |
| `gratuityPercentage` | String | Gratuity as a percentage string. |
| `dueAmount` | String | Outstanding amount after partial payment. |
| `currency` | String | ISO 4217 currency code. |
| `authorisationCode` | String | Acquirer approval code. |
| `verificationMethod` | String | `"NOT_REQUIRED"` `"PIN"` `"SIGNATURE"` etc. |
| `cardEntryType` | String | `"ICC"` `"MSR"` `"CNP"` |
| `cardSchemeName` | String | Card network name. |
| `maskedCardNumber` | String | Masked PAN, e.g. `"************1234"`. |
| `expiryDateMMYY` | String | Expiry in `MMYY` format. |
| `cardToken` | String | Token — non-empty only on tokenize operations. |
| `tenderType` | String | `"CREDIT"` `"DEBIT"` |
| `paymentScenario` | String | `"CHIP"` `"CHIPCONTACTLESS"` `"MAGSTRIPE"` etc. |
| `customerLanguagePref` | String | Card's language preference. |
| `mid` | String | Merchant ID. |
| `tid` | String | Terminal ID. |
| `merchantReceipt` | String | HTML merchant receipt. |
| `customerReceipt` | String | HTML customer receipt. |
| `customerReference` | String | Echoed-back merchant reference from request. |
| `budgetNumber` | String | Budget/instalment number (SA acquirers). |
| `chipTransactionReport` | String | Full chip transaction data. |
| `balance` | String | Issuer-returned balance (prepaid/debit cards). |
| `deviceStatus` | DeviceStatus | Terminal state at transaction time. |
| `recoveredTransaction` | Bool | `true` if delivered via terminal recovery loop. |
| `xml` | NSDictionary | Raw XML from the device parsed into a key-value dictionary. Internal — use the named properties above instead. |

### `finStatus` values

`finStatus` is a string extracted from the terminal's XML response. The iOS SDK protocol definition (`CmdIds.h`) defines internal codes up to partial approval (0x06). Values `REFUNDED` and `CAPTURED` may appear on `/status` endpoint queries but are not part of the iOS HiLite protocol spec.

| Value | iOS protocol constant | Meaning |
|---|---|---|
| `AUTHORISED` | `EFT_FINANC_STATUS_TRANS_APPROVED` (0x01) | Approved by the issuer. |
| `DECLINED` | `EFT_FINANC_STATUS_TRANS_DECLINED` (0x02) | Declined by the issuer or gateway. |
| `PROCESSED` | `EFT_FINANC_STATUS_TRANS_PROCESSED` (0x03) | Non-financial operation processed. |
| `FAILED` | `EFT_FINANC_STATUS_TRANS_NOT_PROCESSED` (0x04) | Technical failure. |
| `CANCELLED` | `EFT_FINANC_STATUS_TRANS_CANCELLED` (0x05) | Cancelled by the cardholder, or reversed automatically by the terminal after host approval — see [Terminal-Initiated Reversals](/reference/terminal-reversals). |
| `PARTIALLY_APPROVED` | `EFT_FINANC_STATUS_TRANS_PARTIAL` (0x06) | Partial approval. |
| `UNDEFINED` | `EFT_FINANC_STATUS_UNDEFINED` (0x00) | No result received. |
| `REFUNDED` | *(no iOS constant)* | May appear on status queries for refunded transactions. |
| `CAPTURED` | *(no iOS constant)* | May appear on status queries for captured pre-auths. |

### Status codes

`statusCode` on `ResponseInfo` uses the `EFT_PP_STATUS_*` constants defined in `CmdIds.h`. The following are the most relevant for transaction result handling:

| Value | Constant | Meaning |
|---|---|---|
| `0x0001` (1) | `EFT_PP_STATUS_SUCCESS` | Operation successful |
| `0x0002` (2) | `EFT_PP_STATUS_INVALID_DATA` | Invalid data in request |
| `0x0003` (3) | `EFT_PP_STATUS_PROCESSING_ERROR` | Processing error |
| `0x0004` (4) | `EFT_PP_STATUS_COMMAND_NOT_ALLOWED` | Operation not allowed |
| `0x0011` (17) | `EFT_PP_STATUS_INPUT_TIMEOUT` | Cardholder input timed out |
| `0x0012` (18) | `EFT_PP_STATUS_USER_CANCELLED` | Cardholder cancelled |
| `0x0013` (19) | `EFT_PP_STATUS_INVALID_SIGNATURE` | Signature rejected |
| `0x0027` (39) | `EFT_PP_STATUS_CARD_CANCELLED` | Card cancelled |
| `0x0028` (40) | `EFT_PP_STATUS_CARD_BLOCKED` | Card blocked |
| `0x0035` (53) | `EFT_PP_STATUS_PARTIAL_APPROVAL` | Partial approval |

:::note
The check `info.statusCode == EFT_PP_STATUS_SUCCESS` tests whether the SDK operation itself succeeded (device communication, protocol). A successful SDK operation can still have `finStatus == "DECLINED"` — always check `finStatus` for the payment outcome.
:::

</TabItem>

<TabItem value="cordova" label="Cordova">

## Cordova — result callback object

The result is delivered to the success callback as a JavaScript object.

```javascript
handpoint.sale(
  { amount: 1000, currency: "USD" },
  function(result) {
    if (result.finStatus === 'AUTHORISED') {
      const id = result.EFTTransactionID;   // store for reversals
      const total = result.totalAmount;
      const receipt = result.merchantReceipt;
    }
  },
  function(error) { console.error(error); }
);
```

### Result object fields

| Field | Type | Description |
|---|---|---|
| `EFTTransactionID` | string | UUID v4 — primary transaction identifier. |
| `originalEFTTransactionID` | string | Original `EFTTransactionID` for refunds/reversals. |
| `transactionReference` | string | UUID v4 echoed from request. |
| `finStatus` | string | Primary result indicator — see [`finStatus` values](#finstatus-values-2) below. |
| `type` | string | `"SALE"` `"REFUND"` `"REVERSAL"` `"PRE_AUTHORIZATION"` etc. |
| `statusMessage` | string | Human-readable status. |
| `errorMessage` | string | Error detail on failure. |
| `requestedAmount` | number | Requested amount in minor units. |
| `totalAmount` | number | Total including tip, in minor units. |
| `tipAmount` | number | Tip amount in minor units. |
| `currency` | string | ISO 4217 currency code. |
| `cardEntryType` | string | `"ICC"` `"MSR"` `"CNP"` |
| `paymentScenario` | string | `"CHIP"` `"CHIPCONTACTLESS"` `"MAGSTRIPE"` etc. |
| `tenderType` | string | `"CREDIT"` `"DEBIT"` `"NOT_SET"` |
| `verificationMethod` | string | `"NOT_REQUIRED"` `"PIN"` `"SIGNATURE"` etc. |
| `cardSchemeName` | string | Card network name. |
| `maskedCardNumber` | string | Masked PAN. |
| `expiryDateMMYY` | string | Expiry in `MMYY` format. |
| `cardToken` | string | Token (tokenization operations only). |
| `authorisationCode` | string | Acquirer approval code. |
| `issuerResponseCode` | string | ISO 8583 issuer response code. |
| `rrn` | string | Retrieval Reference Number. |
| `mid` | string | Merchant ID. |
| `tid` | string | Terminal ID. |
| `merchantName` | string | Merchant name. |
| `merchantAddress` | string | Merchant address. |
| `aid` | string | EMV Application Identifier. |
| `tvr` | string | Terminal Verification Results. |
| `tsi` | string | Transaction Status Information. |
| `iad` | string | Issuer Application Data. |
| `arc` | string | Authorisation Response Code. |
| `customerReference` | string | Echoed-back merchant reference. |
| `merchantReceipt` | string | HTML merchant receipt. |
| `customerReceipt` | string | HTML customer receipt. |
| `deviceStatus` | object | Terminal state — same sub-fields as Cloud API. |
| `recoveredTransaction` | boolean | `true` if delivered via recovery loop. |

### `finStatus` values

| Value | Meaning |
|---|---|
| `AUTHORISED` | Approved by the issuer. |
| `DECLINED` | Declined by the issuer or gateway. |
| `CANCELLED` | Cancelled by the cardholder at the terminal, or reversed automatically by the terminal after host approval — see [Terminal-Initiated Reversals](/reference/terminal-reversals). |
| `FAILED` | Technical failure. |
| `UNDEFINED` | No result received — query the `/status` endpoint. |
| `PARTIALLY_APPROVED` | Partial approval — `totalAmount` is less than `requestedAmount`. |
| `REFUNDED` | Transaction was subsequently refunded. |
| `PROCESSED` | Non-financial operation processed. |
| `CAPTURED` | Pre-authorization was captured. |

</TabItem>

</Tabs>
