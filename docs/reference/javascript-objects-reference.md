---
title: JavaScript SDK — Objects Reference
sidebar_position: 6
description: Complete reference for all objects, enums, and result types used by the Handpoint JavaScript SDK.
---

# JavaScript SDK — Objects Reference

This page documents every object, enum, and option type used in the Handpoint JavaScript SDK (`@handpoint/cloud-js-sdk`).

---

## OperationStartedResult

Returned synchronously by every financial operation (except `tipAdjustment`).

| Field | Type | Description |
|---|---|---|
| `transactionReference` | string | UUID generated client-side before the card is presented. **Persist this to your database immediately, before `await transactionResult`.** Used for recovery. |
| `transactionResult` | Promise&lt;TransactionResult&gt; | Resolves with the final transaction outcome once the terminal delivers it via Pusher WebSocket. |

```javascript
const { transactionReference, transactionResult } = hp.sale('1000', 'USD');
await db.savePendingTransaction(transactionReference); // persist FIRST
const result = await transactionResult;
```

---

## TransactionResult

The final outcome object resolved from `transactionResult`.

| Field | Type | Description |
|---|---|---|
| `finStatus` | FinancialStatus | **Primary outcome field.** The financial status of the transaction. Always check this first. |
| `efttransactionID` | string | Handpoint-assigned unique transaction ID. Use this for reversals, linked refunds, and tip adjustments. |
| `transactionID` | string | Terminal's internal transaction counter. |
| `totalAmount` | number | Actual charged amount in the minor unit of currency, including tip. May differ from `requestedAmount` if tip was added. |
| `requestedAmount` | number | Amount originally sent to the terminal. |
| `tipAmount` | number | Tip amount in the minor unit of currency. |
| `tipPercentage` | number | Tip percentage selected by the cardholder (if a tip percentage menu was shown). |
| `dueAmount` | number | Remaining amount after a partial approval (US only). Collect this in another payment form. |
| `cardToken` | string | Card PAN token. Only present on `tokenizeCard` or `saleAndTokenization` operations. |
| `customerReceipt` | string | URL to the customer receipt, or an HTML string if the upload to Handpoint servers failed. See [Receipt handling](#receipt-handling). |
| `merchantReceipt` | string | URL to the merchant receipt, or an HTML string if the upload to Handpoint servers failed. |
| `signatureUrl` | string | URL to a signature image, or base64-encoded binary if the upload failed. See [Signature handling](#signature-handling). |
| `maskedCardNumber` | string | Masked PAN, e.g. `"************1456"`. |
| `cardSchemeName` | CardSchemeName | Card scheme name enum value, e.g. `'MasterCard'`. |
| `cardEntryType` | CardEntryType | How the card was read (chip, contactless, swipe, CNP). |
| `recoveredTransaction` | boolean | `true` if this result was delivered via the recovery loop rather than the primary Pusher connection. |
| `originalEFTTransactionID` | string | For reversal results — the `efttransactionID` of the original transaction that was reversed. |
| `currency` | Currency | ISO 4217 currency code of the transaction. |
| `authorisationCode` | string | Acquirer authorisation code. |
| `errorMessage` | string | Human-readable error description for failed transactions. |
| `metadata` | Metadata | The metadata object echoed from the request, if provided. |
| `cardHolderName` | string | Cardholder name as read from the card. |
| `paymentScenario` | PaymentScenario | How the card interacted with the terminal (chip, contactless, swipe, MOTO). |
| `tenderType` | TenderType | Whether the card is CREDIT or DEBIT. |
| `transactionType` | TransactionType | The type of transaction (SALE, REFUND, VOID_SALE, etc.). |
| `verificationMethod` | VerificationMethod | CVM method used: PIN, SIGNATURE, PIN_SIGNATURE, NOT_REQUIRED, etc. |
| `multiLanguageStatusMessages` | Map | Terminal status messages in multiple languages. |
| `multiLanguageErrorMessages` | Map | Error messages in multiple languages. |

### Reading the result

```javascript
const result = await transactionResult;

switch (result.finStatus) {
    case 'AUTHORISED':
        // Transaction approved — save efttransactionID for potential reversal
        await db.markPaid({
            efttransactionID: result.efttransactionID,
            amount: result.totalAmount,
            receipt: result.customerReceipt
        });
        break;
    case 'PARTIAL_APPROVAL':
        // US only — funds partially approved, remainder needed
        console.log(`Approved ${result.totalAmount}, still owe ${result.dueAmount}`);
        // Collect remainder in another payment form, OR reverse this transaction
        break;
    case 'DECLINED':
    case 'CANCELLED':
    case 'FAILED':
        await db.clearPending(transactionReference);
        break;
}
```

---

## Receipt handling

`customerReceipt` and `merchantReceipt` can be either:
- A **URL** — the receipt has been uploaded to Handpoint servers. Redirect the browser or print the page.
- An **HTML string** — the upload failed due to a connectivity issue. The SDK returns the raw HTML instead.

```javascript
function displayReceipt(value) {
    if (value.startsWith('http')) {
        window.open(value); // URL — open in browser
    } else {
        document.getElementById('receipt').innerHTML = value; // HTML — render inline
    }
}
```

---

## Signature handling

`signatureUrl` can be either:
- A **URL** — the signature image has been uploaded to Handpoint servers.
- A **base64-encoded binary** — the upload failed. Prefix with the appropriate data URI scheme to display it.

```javascript
function displaySignature(value) {
    if (value.startsWith('http')) {
        document.getElementById('sig').src = value; // URL
    } else {
        document.getElementById('sig').src = 'data:image/png;base64,' + value; // base64
    }
}
```

---

## SaleOptions

Options object for `sale()`, `saleAndTokenization()`, `preAuthorization()`, `moToSale()`.

| Property | Type | Default | Description |
|---|---|---|---|
| `customerReference` | string | — | Arbitrary string echoed in the result for cross-reference with your own system |
| `tokenize` | boolean | `false` | Enable card tokenization during the payment flow |
| `duplicate_check` | boolean | `true` | Whether to enable duplicate transaction detection. Set to `false` to bypass the duplicate check prompt. |
| `tipConfiguration` | TipConfiguration | — | Configure the tipping menu shown on the terminal |
| `bypassOptions` | BypassOptions | — | Skip PIN or signature verification steps |
| `merchantAuth` | MerchantAuth[] | — | Route the transaction to a specific merchant in a multi-MID setup |
| `metadata` | Metadata | — | Up to 5 arbitrary strings echoed in the result |
| `moneyRemittanceOptions` | MoneyRemittanceOptions | — | Required for Mastercard money remittance (MCC 4829 and 6540) |

---

## RefundOptions

Options object for `refund()`, `moToRefund()`.

| Property | Type | Default | Description |
|---|---|---|---|
| `customerReference` | string | — | Arbitrary string echoed in the result |
| `tokenize` | boolean | `false` | Enable card tokenization |
| `duplicate_check` | boolean | `true` | Enable duplicate transaction detection |
| `bypassOptions` | BypassOptions | — | Skip PIN or signature |
| `merchantAuth` | MerchantAuth[] | — | Multi-MID routing |
| `metadata` | Metadata | — | Up to 5 arbitrary strings echoed in the result |
| `moneyRemittanceOptions` | MoneyRemittanceOptions | — | Mastercard remittance options |

---

## MerchantAuthOptions

Options for `saleReversal()`, `refundReversal()`.

| Property | Type | Description |
|---|---|---|
| `customerReference` | string | Arbitrary string echoed in the result |
| `merchantAuth` | MerchantAuth[] | Multi-MID routing credentials |

---

## Options

Base options object for `tokenizeCard()`, `moToReversal()`, `preAuthorizationReversal()`.

| Property | Type | Description |
|---|---|---|
| `customerReference` | string | Arbitrary string echoed in the result |
| `metadata` | Metadata | Up to 5 arbitrary strings echoed in the result |

---

## MerchantAuth / Credential

A single element in the `merchantAuth` array. Overrides the MID/TID/MCC configured on the terminal for a specific transaction, enabling multi-merchant terminal usage.

| Property | Type | Description |
|---|---|---|
| `acquirer` | Acquirer | The acquirer this credential set applies to |
| `mid` | string | Merchant ID override |
| `tid` | string | Terminal ID override |
| `mcc` | string | Merchant category code override |
| `externalId` | string | Alternative to MID/TID/MCC — Handpoint looks up credentials by this ID |

```javascript
const merchantAuth = [{
    acquirer: 'TSYS',
    mid: '11111',
    tid: '22222',
    mcc: '5411'
}];
```

---

## TipConfiguration

Configures the tip selection menu displayed on the terminal.

| Property | Type | Description |
|---|---|---|
| `baseAmount` | string | The base amount (before tip) shown on the tip screen |
| `skipEnabled` | boolean | Whether the cardholder can skip the tip prompt |
| `enterAmountEnabled` | boolean | Whether the cardholder can enter a custom tip amount |
| `tipPercentages` | number[] | Array of tip percentage options to display (e.g. `[5, 10, 15, 20]`) |

```javascript
const tipConfiguration = {
    baseAmount: '1000',
    skipEnabled: true,
    enterAmountEnabled: true,
    tipPercentages: [10, 15, 18, 20]
};
```

---

## BypassOptions

| Property | Type | Description |
|---|---|---|
| `pinBypass` | boolean | Skip the PIN entry prompt. Note: chip-enforced cards will still require PIN. |
| `signatureBypass` | boolean | Skip the signature capture step |

---

## Metadata

Up to five arbitrary string fields attached to a transaction and echoed in the `TransactionResult`.

| Property | Type | Max length | Description |
|---|---|---|---|
| `metadata1` | string | 250 chars | Custom field 1 |
| `metadata2` | string | 250 chars | Custom field 2 |
| `metadata3` | string | 250 chars | Custom field 3 |
| `metadata4` | string | 250 chars | Custom field 4 |
| `metadata5` | string | 250 chars | Custom field 5 |

**Valid characters:** `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`

---

## MoneyRemittanceOptions

Required for Mastercard transactions under MCC 4829 (Money Transfer) and MCC 6540 (Prepaid Top-up).

| Property | Type | Description |
|---|---|---|
| `fullName` | string | Full name of the money recipient (alphabetic characters only, a-Z) |
| `countryCode` | string | Destination country code (ISO 3166-1 alpha-3, e.g. `'USA'`, `'GBR'`) |

---

## BatchSummaryResponse

Returned by `hp.batchSummary()`.

| Field | Type | Description |
|---|---|---|
| `batchNumber` | string | Batch identifier |
| `batchStatus` | string | Current status of the batch |
| `batchSummaryGuid` | string | Unique ID for this summary response |
| `transactionCount` | number | Number of transactions in the batch |
| `netAmount` | number | Net total in minor currency unit |
| `customFields` | Array&lt;{key, value}&gt; | Additional acquirer-specific fields |
| `customerReference` | string | Echoed customer reference |
| `httpStatus` | number | HTTP status code from the acquirer |
| `issuerResponseCode` | string | Acquirer response code |
| `issuerResponseText` | string | Acquirer response description |

---

## BatchDetailResponse

Returned by `hp.batchDetail()`.

| Field | Type | Description |
|---|---|---|
| `httpStatus` | number | HTTP status code from the acquirer |
| `batchNumber` | string | Batch identifier |
| `batchStatus` | string | Current batch status |
| `issuerResponseCode` | string | Acquirer response code |
| `issuerResponseText` | string | Acquirer response text |
| `batchDetailGuid` | string | Unique ID for this detail response |
| `details` | Array | Transaction list entries: `{transactionType, amount, batchDetailElementGuid}` |

---

## BatchCloseResponse

Returned by `hp.closeBatch()`.

| Field | Type | Description |
|---|---|---|
| `batchNumber` | string | Batch identifier |
| `closeBatchGuid` | string | Unique ID for this close operation |
| `closedAt` | string | ISO 8601 timestamp of when the batch was closed |
| `customerReference` | string | Echoed customer reference |
| `httpStatus` | number | HTTP status code from the acquirer |
| `issuerResponseCode` | string | Acquirer response code |
| `issuerResponseText` | string | Acquirer response text |

---

## Enumerations

### FinancialStatus

The primary result field in `TransactionResult`. Always check `finStatus` to determine outcome.

| Value | Meaning | Action |
|---|---|---|
| `'AUTHORISED'` | Transaction approved by the acquirer | Fulfil order, store `efttransactionID` |
| `'DECLINED'` | Declined by the acquirer or card issuer | Ask cardholder to try another card |
| `'CANCELLED'` | Cardholder pressed Cancel, or `stopCurrentTransaction()` was called | Clear pending |
| `'FAILED'` | Technical failure — network error, unreadable card, etc. | Card was **not** charged. Clear pending. |
| `'PARTIAL_APPROVAL'` | Funds partially approved (US only) | Collect remainder with another payment method, or reverse the partial approval |
| `'PROCESSED'` | `printReceipt` operation completed successfully | Receipt printed |
| `'IN_PROGRESS'` | (getTransactionStatus only) Transaction known to the gateway but no final result yet | Poll again in 10 s |
| `'REFUNDED'` | (getTransactionStatus only) Original sale has been fully refunded | No action required |
| `'CAPTURED'` | Pre-authorization captured; funds moving to merchant | Update order status |
| `'UNDEFINED'` | (getTransactionStatus only) Transaction not found in the gateway after 90 s | Card was **not** charged. Safe to clear pending. |

---

### CardEntryType

How the card was read at the terminal.

| Value | Description |
|---|---|
| `'UNDEFINED'` | Entry method not determined |
| `'MSR'` | Magnetic stripe read |
| `'ICC'` | Chip (EMV) contact read |
| `'CNP'` | Card not present (MOTO) — card data entered manually |

---

### CardSchemeName

| Value |
|---|
| `'MasterCard'` |
| `'Visa'` |
| `'Maestro'` |
| `'American Express'` |
| `'Discover'` |
| `'JCB'` |
| `'Diners'` |
| `'UnionPay'` |
| `'Interac'` |

---

### PaymentScenario

How the card interacted with the terminal.

| Value | Description |
|---|---|
| `'UNKNOWN'` | Interaction type not determined |
| `'MAGSTRIPE'` | Magnetic stripe swipe |
| `'MAGSTRIPECONTACTLESS'` | Contactless magnetic stripe |
| `'CHIP'` | EMV chip contact |
| `'CHIPCONTACTLESS'` | EMV chip contactless (tap) |
| `'CHIPFAILMAGSTRIPE'` | Chip read failed, fell back to magnetic stripe |
| `'MOTO'` | Mail order / telephone order — manual card entry |

---

### TenderType

| Value | Description |
|---|---|
| `'CREDIT'` | Credit card |
| `'DEBIT'` | Debit card |

---

### TransactionType

| Value | Description |
|---|---|
| `'UNDEFINED'` | Type not determined |
| `'SALE'` | Sale |
| `'VOID_SALE'` | Sale reversal |
| `'REFUND'` | Refund |
| `'VOID_REFUND'` | Refund reversal |
| `'CANCEL_SALE'` | Sale cancelled before authorisation |
| `'CANCEL_REFUND'` | Refund cancelled before authorisation |
| `'TOKENIZE_CARD'` | Card tokenization |
| `'CARD_PAN'` | PAN retrieval |
| `'CANCEL_TRX'` | Generic transaction cancel |
| `'MOTO_SALE'` | MOTO sale |
| `'MOTO_REFUND'` | MOTO refund |
| `'MOTO_REVERSAL'` | MOTO reversal |
| `'SALE_AND_TOKENIZE_CARD'` | Sale + tokenization |
| `'UPDATE'` | Software update operation |
| `'PRINT_RECEIPT'` | Print receipt operation |

---

### VerificationMethod

Cardholder verification method used.

| Value | Description |
|---|---|
| `'UNDEFINED'` | CVM not determined |
| `'SIGNATURE'` | Cardholder signed |
| `'PIN'` | PIN entered |
| `'PIN_SIGNATURE'` | Both PIN and signature |
| `'FAILED'` | CVM failed |
| `'NOT_REQUIRED'` | No CVM required (low-value contactless) |
| `'MOBILE_PASS_CODE'` | Mobile wallet passcode |

---

### Acquirer

Used in `MerchantAuth` credential objects.

| Value |
|---|
| `'AMEX'` |
| `'BORGUN'` |
| `'EVO'` |
| `'OMNIPAY'` |
| `'POSTBRIDGE'` |
| `'INTERAC'` |
| `'TSYS'` |
| `'VANTIV'` |
| `'SANDBOX'` |

---

### Currency

ISO 4217 currency codes. Common values:

| Value | Currency |
|---|---|
| `'AED'` | UAE Dirham |
| `'AUD'` | Australian Dollar |
| `'CAD'` | Canadian Dollar |
| `'CHF'` | Swiss Franc |
| `'DKK'` | Danish Krone |
| `'EUR'` | Euro |
| `'GBP'` | British Pound Sterling |
| `'HKD'` | Hong Kong Dollar |
| `'JPY'` | Japanese Yen |
| `'MXN'` | Mexican Peso |
| `'NOK'` | Norwegian Krone |
| `'NZD'` | New Zealand Dollar |
| `'SEK'` | Swedish Krona |
| `'SGD'` | Singapore Dollar |
| `'USD'` | US Dollar |
| `'ZAR'` | South African Rand |

The SDK accepts any valid ISO 4217 three-letter code.

---

## See also

- [JavaScript SDK — Setup & Integration](/reference/javascript-sdk-setup) — install, init, connect
- [JavaScript SDK — Integration Guide](/reference/javascript-sdk-integration-guide) — all operations with parameter tables and code examples
- [Transaction Recovery — JavaScript SDK](/reference/transaction-recovery-javascript-sdk) — recovery algorithm
