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

---

## Device

`Device` is the object used to identify and connect to a payment terminal. Pass it to `Connect()`, `Disconnect()`, `Update()`, and other device management calls.

**Constructor**

```csharp
Device(
    string name,
    string address,
    string port,
    ConnectionMethod connectionMethod,
    string sharedSecret = null,
    int timeout = 0
)
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | A display name for the terminal — used for logging and UI only |
| `address` | `string` | Yes | Bluetooth MAC address (`"68:AA:D2:00:D5:27"`) or Cloud address (`"serialNumber-model"`, e.g. `"9822032398-PAXA920"`) |
| `port` | `string` | Yes | Port string — pass `""` for Cloud; pass `"1"` for Bluetooth |
| `connectionMethod` | `ConnectionMethod` | Yes | How to connect — `BLUETOOTH`, `CLOUD`, or `SIMULATOR` |
| `sharedSecret` | `string` | No | Overrides the default shared secret for this specific device |
| `timeout` | `int` | No | Connection timeout in milliseconds (0 = SDK default) |

**Properties**

| Property | Type | Description |
|---|---|---|
| `Id` | `string` | Unique identifier assigned by the SDK |
| `Name` | `string` | Display name passed at construction |
| `Address` | `string` | Device address passed at construction |
| `Port` | `string` | Port string passed at construction |
| `ConnectionMethod` | `ConnectionMethod` | Connection type passed at construction |

**Example**

```csharp
// HiLite via Bluetooth (MAC address must be UPPER CASE)
Device hilite = new Device("CardReader7", "68:AA:D2:00:D5:27", "1", ConnectionMethod.BLUETOOTH);

// PAX A920 via Cloud (serialNumber-model format)
Device pax = new Device("MyPAX", "9822032398-PAXA920", "", ConnectionMethod.CLOUD);

// Built-in simulator (no hardware required)
Device sim = new Device("Sim", "Address", "Port", ConnectionMethod.SIMULATOR);
```

---

## HandpointCredentials

A class that bundles the authentication credentials passed to `HapiFactory.GetAsyncInterface()`.

**Constructors**

```csharp
// Bluetooth-only — sharedSecret required
HandpointCredentials(string sharedSecret)

// Cloud (PAX) + GetTransactionStatus support — both fields required
HandpointCredentials(string sharedSecret, string cloudApiKey)
```

**Properties**

| Property | Type | Description |
|---|---|---|
| `SharedSecret` | `string` | Authenticates the SDK to the Payments App / HiLite reader. Required. For Cloud connections any non-null string is accepted. |
| `CloudApiKey` | `string` | Merchant API key for Cloud connections and `GetTransactionStatus`. Required for PAX/Cloud; omit for Bluetooth-only integrations. |

**Example**

```csharp
// HiLite (Bluetooth) — shared secret only
var btCreds = new HandpointCredentials("0102030405060708091011121314151617181920212223242526272829303132");

// PAX (Cloud) — shared secret + Cloud API key
var cloudCreds = new HandpointCredentials(
    "0102030405060708091011121314151617181920212223242526272829303132",
    "YOUR_CLOUD_API_KEY"
);
```

---

## HapiFactory

A sealed factory class that creates and returns the single `Hapi` instance. Call `GetAsyncInterface` once during app startup and store the result.

**Static method**

```csharp
static Hapi GetAsyncInterface(Events.Required listener, HandpointCredentials credentials)
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `listener` | `Events.Required` | Yes | Your class implementing `Events.Required` (and optionally `Events.Status`, `Events.Log`, etc.) |
| `credentials` | `HandpointCredentials` | Yes | Shared secret and optional Cloud API key |

Returns the `Hapi` instance. If called again in the same process lifetime, the existing instance is returned unchanged.

**Example**

```csharp
public class PaymentHandler : Events.Required
{
    private Hapi hapi;

    public void Init()
    {
        var credentials = new HandpointCredentials(
            "0102030405060708091011121314151617181920212223242526272829303132",
            "YOUR_CLOUD_API_KEY"
        );
        hapi = HapiFactory.GetAsyncInterface(this, credentials);
    }

    public void EndOfTransaction(TransactionResult result, Device device) { /* ... */ }
    public void CurrentTransactionStatus(StatusInfo info, Device device) { /* ... */ }
    public void DeviceDiscoveryFinished(List<Device> devices) { /* ... */ }
    public void SignatureRequired(SignatureRequest request, Device device) { hapi.SignatureResult(true); }
    public void TransactionResultReady(TransactionResult result, Device device) { /* ... */ }
}
```

:::note
`HapiFactory` is a singleton internally — only one `Hapi` is created per process. If you call `GetAsyncInterface` a second time, the original instance is returned. To switch credentials you must restart the process.
:::

---

## HapiManager

A static class that exposes runtime status and configuration of the SDK. All members are static methods.

**Static methods**

| Method | Return type | Description |
|---|---|---|
| `HapiManager.GetDefaultSharedSecret()` | `string` | Returns the shared secret currently in use |
| `HapiManager.GetLogLevel()` | `LogLevel` | Returns the current log level of the SDK |
| `HapiManager.InTransaction()` | `bool` | `true` while a transaction is in progress on the default device. May return `true` if there is a communication error but the terminal has completed the transaction. |
| `HapiManager.InTransaction(Device device)` | `bool` | Same check, scoped to a specific device |
| `HapiManager.GetSdkVersion()` | `Version` | Returns the SDK assembly version |
| `HapiManager.IsTransactionResultPending()` | `bool` | `true` if the terminal has a transaction result that has not yet been delivered. Check this when reconnecting after a communication failure. |
| `HapiManager.IsTransactionResultPending(Device device)` | `bool` | Same check, scoped to a specific device |

**Settings**

Pass a `Settings` object as a third argument to `HapiFactory.GetAsyncInterface()` to configure SDK behaviour:

| Property | Type | Default | Description |
|---|---|---|---|
| `AutomaticReconnection` | `bool` | `true` | When `true`, the SDK automatically reconnects after a connection drop |
| `ShowSDKUIComponents` | `bool` | `false` | Shows SDK-provided UI overlays (progress screens) |
| `GetReceiptsAsURLs` | `bool` | `false` | When `true`, receipts are delivered as HTTPS URLs rather than raw HTML |
| `Locale` | `string` | `"en_US"` | Locale string used for terminal UI language selection |

**Example**

```csharp
bool inTxn = HapiManager.InTransaction();
LogLevel level = HapiManager.GetLogLevel();
bool pending = HapiManager.IsTransactionResultPending();

// Custom settings
var settings = new Settings { AutomaticReconnection = false };
hapi = HapiFactory.GetAsyncInterface(this, credentials, settings);
```

---

## LogLevel (enum)

Controls the verbosity of SDK logging. Set via `hapi.SetLogLevel()`. The current level is read with `HapiManager.GetLogLevel()`.

| Value | Description |
|---|---|
| `None` | No logging |
| `Info` | Informational messages (default) |
| `Full` | All messages including request/response frames |
| `Debug` | Maximum verbosity — includes internal state changes |

```csharp
hapi.SetLogLevel(LogLevel.Debug);
```

---

## Metadata

The `Metadata` object echoes back the five optional metadata fields that were sent with the transaction request. It is delivered inside `TransactionResult.metadata`.

**Properties**

| Property | Type | Max length | Description |
|---|---|---|---|
| `Metadata1` | `string` | 250 chars | Arbitrary data field 1 |
| `Metadata2` | `string` | 250 chars | Arbitrary data field 2 |
| `Metadata3` | `string` | 250 chars | Arbitrary data field 3 |
| `Metadata4` | `string` | 250 chars | Arbitrary data field 4 |
| `Metadata5` | `string` | 250 chars | Arbitrary data field 5 |

Valid characters for all fields: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`

**How to set metadata on a transaction**

```csharp
var map = new Dictionary<string, string>();
map.Add(XmlTag.Metadata1.Tag(), "table-7");
map.Add(XmlTag.Metadata2.Tag(), "server-42");
OperationStartResult op = hapi.Sale(new BigInteger(1000), Currency.EUR, map);

// In EndOfTransaction:
Console.WriteLine(result.Metadata.Metadata1); // "table-7"
Console.WriteLine(result.Metadata.Metadata2); // "server-42"
```

---

## MoneyRemittanceOptions

Encapsulates recipient details required for Mastercard money remittance transactions. Merchants with MCC 4829 (wire transfers) or 6540 (stored-value card purchase) must supply these fields for Mastercard. VISA transactions do not require them.

**Properties**

| Property | Type | Required | Description |
|---|---|---|---|
| `fullName` | `string` | Yes | First and last name of the transfer recipient (letters and spaces only) |
| `countryCode` | `CountryCode` | Yes | Recipient's country as an [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code |

**How to pass money remittance options**

Money remittance data is passed via the optional `map` parameter using `XmlTag` keys:

```csharp
var map = new Dictionary<string, string>();
map.Add(XmlTag.MoneyRemittanceFullName.Tag(), "John Doe");
map.Add(XmlTag.MoneyRemittanceCountryCode.Tag(), "USA");

OperationStartResult op = hapi.Sale(new BigInteger(5000), Currency.USD, map);
```
