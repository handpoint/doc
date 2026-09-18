---
title: Windows SDK — Objects & Enums Reference
sidebar_position: 7
description: Complete reference for all C# objects and enumerations in the Handpoint Windows SDK — TransactionResult, FinancialStatus, CardEntryType, ConnectionMethod, and all other types.
---

# Windows SDK — Objects & Enums Reference

This page documents every object and enumeration returned by or passed to the `HandpointSDK` NuGet package.

---

## TransactionResult

`TransactionResult` is the main result object delivered to `EndOfTransaction` and `TransactionResultReady`. All financial outcome fields are on this object.

:::tip Receipt and signature URL formats
`customerReceipt` and `merchantReceipt` are normally delivered as HTTPS URLs pointing to HTML files stored in Handpoint cloud. If the terminal cannot reach the Handpoint servers, the raw HTML is delivered instead. Always test both paths.

`signatureUrl` is similarly a URL under normal operation. If the upload fails, the terminal delivers a base64-encoded PNG. Check with `value.StartsWith("http")` to distinguish.

```csharp
string sig = result.SignatureUrl;
if (!string.IsNullOrEmpty(sig))
{
    if (sig.StartsWith("http"))
        DisplayImage(sig);                     // load URL
    else
        DisplayImage(Convert.FromBase64String(sig)); // decode binary
}
```
:::

| Property | C# Type | Description |
|---|---|---|
| `aid` | `string` | EMV Application Identifier (tag 9F06) |
| `arc` | `string` | EMV Authorisation Response Code (tag 8A) |
| `authorisationCode` | `string` | Acquirer authorisation code |
| `balance` | `BigInteger?` | Available balance on the card (if returned by issuer) |
| `budgetNumber` | `string` | Budget instalment number (South Africa acquirers) |
| `cardEntryType` | `CardEntryType` | How the card was read — see enum below |
| `cardLanguagePreference` | `string` | Preferred language on the card (EMV tag 5F2D) |
| `cardSchemeName` | `CardSchemeName` | Card brand (Visa, MasterCard, etc.) |
| `cardToken` | `string` | PAN token — populated for `TokenizeCard` and `SaleAndTokenizeCard` |
| `chipTransactionReport` | `string` | Full EMV tag dump from the chip |
| `currency` | `Currency` | Currency used for the transaction |
| `customerReceipt` | `string` | URL or raw HTML of the customer receipt |
| `customerReference` | `string` | Echoed from the optional parameter sent at request time |
| `deviceStatus` | `DeviceStatus` | Terminal battery and app version at time of transaction |
| `dueAmount` | `BigInteger` | Remaining amount in a partial approval (US only) |
| `efttimestamp` | `long` | Transaction timestamp (milliseconds since epoch, terminal clock) |
| `efttransactionID` | `string` | Handpoint GUID — use this as `originalTransactionID` for reversals and linked refunds |
| `errorMessage` | `string` | Human-readable error description when `finStatus` is `FAILED` |
| `expiryDateMMYY` | `string` | Card expiry in MMYY format |
| `finStatus` | `FinancialStatus` | Final outcome — the field you act on first |
| `gratuityAmount` | `BigInteger` | Tip amount in minor units (deprecated in SDK 5.0 — use `tipAmount`) |
| `gratuityPercentage` | `double` | Tip percentage (deprecated in SDK 5.0 — use `tipPercentage`) |
| `iad` | `string` | EMV Issuer Application Data (tag 9F10) |
| `issuerResponseCode` | `string` | Response code from card issuer |
| `maskedCardNumber` | `string` | Masked PAN, e.g. `************1456` |
| `merchantAddress` | `string` | Merchant address from TMS |
| `merchantName` | `string` | Merchant name from TMS |
| `merchantReceipt` | `string` | URL or raw HTML of the merchant receipt |
| `metadata` | `Metadata` | Echo of Metadata1–5 sent at request time |
| `mid` | `string` | Merchant Identifier |
| `originalEFTTransactionID` | `string` | For reversals — the ID of the original transaction being reversed |
| `paymentScenario` | `PaymentScenario` | Card entry scenario (chip, contactless, magstripe, MOTO, etc.) |
| `recoveredTransaction` | `bool` | `true` if result arrived via `GetTransactionStatus` recovery flow |
| `requestedAmount` | `BigInteger` | Amount sent to the terminal |
| `rrn` | `string` | Retrieval Reference Number (acquirer-assigned unique ID) |
| `signatureUrl` | `string` | URL of captured signature image, or base64-encoded PNG if upload failed |
| `statusMessage` | `string` | Human-readable status, e.g. "Approved or completed successfully" |
| `tenderType` | `TenderType` | Credit or debit |
| `tid` | `string` | Terminal Identifier |
| `tipAmount` | `BigInteger` | Tip amount in minor currency units |
| `tipPercentage` | `double` | Tip as a percentage of the base amount |
| `totalAmount` | `BigInteger` | Total charged (base + tip) |
| `transactionID` | `string` | Terminal-internal counter ID |
| `tsi` | `string` | EMV Transaction Status Information (tag 9B) |
| `tvr` | `string` | EMV Terminal Verification Results (tag 95) |
| `type` | `TransactionType` | Transaction type: SALE, REFUND, VOID_SALE, etc. |
| `unMaskedPan` | `string` | Full PAN — only for non-payment (loyalty) cards |
| `verificationMethod` | `VerificationMethod` | Cardholder verification used (PIN, SIGNATURE, etc.) |

---

## OperationStartResult

Returned synchronously by every financial operation (except `TipAdjustment`, which returns `Task<FinancialStatus>`).

| Property | C# Type | Description |
|---|---|---|
| `OperationStarted` | `bool` | `true` if the SDK accepted and sent the command to the terminal. Does **not** mean approved. |
| `TransactionReference` | `string` | UUID to persist before the operation. Use it with `GetTransactionStatus` if `EndOfTransaction` does not fire. Linked refunds and reversals do not generate a new reference — they reuse the original. |
| `ErrorMessage` | `string` | Reason the operation was rejected (populated when `OperationStarted` is `false`). |

---

## StatusInfo

Delivered to `CurrentTransactionStatus` throughout the operation lifecycle.

| Property | C# Type | Description |
|---|---|---|
| `CancelAllowed` | `bool` | `true` if `StopCurrentTransaction()` will be accepted at this point |
| `status` | `Status` | Current status code — see the `Status` enum |
| `message` | `string` | Human-readable status string |
| `DeviceStatus` | `DeviceStatus` | Snapshot of terminal battery and app info |

---

## SignatureRequest

Delivered to `SignatureRequired` when a chip-and-signature or swipe transaction needs operator confirmation.

| Property | C# Type | Description |
|---|---|---|
| `Timeout` | `int` | Seconds before the SDK times out waiting for `SignatureResult` |
| `MerchantReceipt` | `string` | URL or raw HTML merchant receipt to display to the operator |

Call `hapi.SignatureResult(true)` to approve or `hapi.SignatureResult(false)` to decline.

---

## DeviceStatus

Embedded inside `TransactionResult` and `StatusInfo`.

| Property | C# Type | Description |
|---|---|---|
| `SerialNumber` | `string` | Terminal serial number |
| `BatteryStatus` | `string` | Battery percentage, e.g. "100" |
| `BatterymV` | `string` | Battery millivolts |
| `BatteryChargingt` | `string` | Charging state, e.g. "Not Charging" or "USB" |
| `ExternalPower` | `string` | External power source status |
| `ApplicationName` | `string` | Payments app name on the terminal |
| `ApplicationVersion` | `string` | Payments app version on the terminal |

---

## FinancialStatus (enum)

The primary field to switch on in `EndOfTransaction`.

| Value | Meaning |
|---|---|
| `AUTHORISED` | Transaction approved. Store `efttransactionID` and fulfil the order. |
| `DECLINED` | Declined by acquirer or issuer. Do not fulfil the order. |
| `CANCELLED` | Cardholder or operator cancelled (e.g. `StopCurrentTransaction`, cancel button). |
| `FAILED` | Technical failure — network error, unreadable card, etc. Check `errorMessage`. The card was not charged. |
| `PARTIAL_APPROVAL` | US only — acquirer approved partial funds. `dueAmount` contains the remaining balance. Either collect the remainder separately or call `SaleReversal` to void. |
| `PROCESSED` | Used specifically for `PrintReceipt` success. |
| `CAPTURED` | Pre-auth captured. Only returned for `PreAuthorizationCapture`. |
| `IN_PROGRESS` | Returned by `GetTransactionStatus` only — gateway knows the transaction but has no final result yet. Poll again in 10 s. |
| `REFUNDED` | Returned by `GetTransactionStatus` only — the original sale has been refunded. |
| `UNDEFINED` | Any other status, or returned by `GetTransactionStatus` when the transaction ID is unknown to the gateway. If `UNDEFINED` is returned after 90 s from transaction start, the card was not charged. |

---

## CardEntryType (enum)

| Value | Meaning |
|---|---|
| `UNDEFINED` | Entry method not determined |
| `MSR` | Magnetic stripe swipe |
| `ICC` | Chip (contact) |
| `CNP` | Card not present (MOTO, keyed entry) |

---

## CardSchemeName (enum)

`MasterCard` `Visa` `Maestro` `American Express` `Discover` `JCB` `Diners` `UnionPay` `Interac`

---

## ConnectionMethod (enum)

Windows SDK supports **BLUETOOTH**, **CLOUD**, and **SIMULATOR**. The others exist in the SDK but are not supported on Windows.

| Value | Support |
|---|---|
| `BLUETOOTH` | HiLite readers |
| `CLOUD` | PAX SmartPOS terminals |
| `SIMULATOR` | Built-in simulator (no hardware required) |
| `USB` | Not supported on Windows |
| `SERIAL` | Not supported on Windows |
| `HTTPS` | Not supported on Windows |
| `WIFI` | Not supported on Windows |
| `ETHERNET` | Not supported on Windows |

---

## ConnectionStatus (enum)

`Connected` `Connecting` `Disconnected` `Disconnecting` `Initializing` `NotConfigured`

---

## PaymentScenario (enum)

| Value | Meaning |
|---|---|
| `UNKNOWN` | Scenario not determined |
| `MAGSTRIPE` | Contact magnetic stripe |
| `MAGSTRIPECONTACTLESS` | Contactless magnetic stripe |
| `CHIP` | Contact chip |
| `CHIPCONTACTLESS` | Contactless chip |
| `CHIPFAILMAGSTRIPE` | Chip fallback to magnetic stripe |
| `MOTO` | Mail order / telephone order |

---

## TenderType (enum)

`NOT_SET` `CREDIT` `DEBIT`

---

## VerificationMethod (enum)

`UNDEFINED` `SIGNATURE` `PIN` `PIN_SIGNATURE` `FAILED` `NOT_REQUIRED` `MOBILE_PASS_CODE`

---

## TransactionType (enum)

`UNDEFINED` `SALE` `VOID_SALE` `REFUND` `VOID_REFUND` `CANCEL_SALE` `CANCEL_REFUND` `TOKENIZE_CARD` `SALE_AND_TOKENIZE_CARD` `REVERSAL` `UPDATE` `HOST_INIT` `PRINT_RECEIPT` `CARD_PAN` `CANCEL_TRX` `MOTO_SALE` `MOTO_REFUND` `MOTO_REVERSAL`

---

## DeviceParameter (enum)

Used with device configuration calls to send settings to the terminal.

`BluetoothName` `BluetoothPass` `SystemTimeout` `ScreenTimeout` `SignatureTimeout` `Language`

---

## Optional Transaction Parameters (XmlTag map keys)

Any financial operation that accepts a `Dictionary<string, string> map` supports these keys:

| Key | Available for | Description |
|---|---|---|
| `XmlTag.CustomerReference.Tag()` | All transactions | Up to 36-character string echoed back in `TransactionResult.customerReference` |
| `XmlTag.Metadata1.Tag()` – `XmlTag.Metadata5.Tag()` | All transactions | Up to 250 characters each; echoed in `TransactionResult.metadata`. Allowed chars: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,` |
| `XmlTag.Budget.Tag()` | Sale only | Two-digit string ("03", "24") to split across months |
| `XmlTag.DuplicateCheck.Tag()` | Sale, SaleAndTokenize, SaleReversal, Refund, RefundReversal | Pass `"0"` to disable duplicate-payment detection (enabled by default from SDK 3.3.0) |
| `XmlTag.MoneyRemittanceCountryCode.Tag()` | All transactions | ISO 3166-1 alpha-3 country code for Mastercard money remittance |
| `XmlTag.MoneyRemittanceFullName.Tag()` | All transactions | Recipient full name for Mastercard money remittance |

---

## Currency (enum)

The `Currency` enum covers all ISO 4217 currency codes. Common values: `AED` `AUD` `CAD` `CHF` `DKK` `EUR` `GBP` `HKD` `JPY` `MXN` `NOK` `NZD` `SEK` `SGD` `USD` — and many more. Pass as `Currency.USD`, `Currency.EUR`, etc.

---

## Status (enum)

The `Status` enum covers every intermediate status that can appear in `StatusInfo.status` during `CurrentTransactionStatus`. Common values include: `WaitingForCard`, `CardInserted`, `CardTapped`, `PinInput`, `PinInputCompleted`, `WaitingSignature`, `WaitingHostConnect`, `WaitingHostSend`, `WaitingHostReceive`, `RemoveCard`, `PartialApproval`, `UserCancelled`, `PosCancelled`, `UpdateStarted`, `UpdateFinished`, `UpdateFailed`, `PrintingMerchantReceipt`, `PrintingCustomerReceipt`.

Full list (not exhaustive): `Undefined` `Success` `InvalidData` `ProcessingError` `CommandNotAllowed` `NotInitialised` `ConnectTimeout` `ConnectError` `SendingError` `ReceivingError` `NoDataAvailable` `TransactionNotAllowed` `UnsupportedCurrency` `NoHostAvailable` `CardReaderError` `CardReadingFailed` `InvalidCard` `InputTimeout` `UserCancelled` `InvalidSignature` `WaitingForCard` `CardInserted` `ApplicationSelection` `ApplicationConfirmation` `AmountValidation` `PinInput` `ManualCardInput` `WaitingForCardRemoval` `TipInput` `SharedSecretInvalid` `SharedSecretAuth` `WaitingSignature` `WaitingHostConnect` `WaitingHostSend` `WaitingHostReceive` `WaitingHostDisconnect` `PinInputCompleted` `PosCancelled` `RequestInvalid` `CardCancelled` `CardBlocked` `RequestAuthTimeout` `RequestPaymentTimeout` `ResponseAuthTimeout` `ResponsePaymentTimeout` `IccCardSwiped` `RemoveCard` `ScannerIsNotSupported` `ScannerEvent` `BatteryTooLow` `AccountTypeSelection` `BtIsNotSupported` `PaymentCodeSelection` `PartialApproval` `AmountDueValidation` `InvalidUrl` `WaitingCustomerReceipt` `PrintingMerchantReceipt` `PrintingCustomerReceipt` `UpdateStarted` `UpdateFinished` `UpdateFailed` `UpdateProgress` `WaitingHostPostSend` `WaitingHostPostReceive` `Rebooting` `PrinterOutOfPaper` `ErrorConnectingToPrinter` `CardTapped` `ReceiptPrintSuccess` `InvalidPinLength` `OfflinePinAttempt` `OfflinePinLastAttempt` `ProcessingSignature` `CardRemoved` `TipEntered` `CardLanguagePreference` `AutomaticPrintingStarted` `CancelOperationNotAllowed` `UpdateSoftwareStarted` `UpdateSoftwareFinished` `UpdateSoftwareFailed` `UpdateSoftwareProgress` `InstallSoftwareStarted` `InstallSoftwareFinished` `InstallSoftwareFailed` `InstallSoftwareProgress` `UpdateConfigStarted` `UpdateConfigFinished` `UpdateConfigFailed` `UpdateConfigProgress` `InitialisationComplete`
