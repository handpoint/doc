---
title: Android SDK — Objects Reference
sidebar_position: 10
description: Complete reference for all Android SDK objects, enums, and options — Device, OperationStartResult, StatusInfo, Settings, SaleOptions, MerchantAuth, and all enums.
---

# Android SDK — Objects Reference

This page is the authoritative reference for every class, object, and enum in the Handpoint Android SDK. The `TransactionResult` field-by-field reference lives in [Transaction Result Object](/reference/transaction-result-object) — the Android (PAX) tab covers all fields with types and per-operation population notes.

---

## Core SDK classes

### `HandpointCredentials`

A class holding the credentials used to authenticate with the payment terminal.

| Property | Type | Required | Description |
|---|---|---|---|
| `sharedSecret` | `String` | Yes | 64-character hex string unique per merchant. Authenticates the app to the terminal's payment subsystem. Obtained from Handpoint support. |
| `cloudApiKey` | `String` | No | Required only for: keyed-entry MOTO operations, SDK-initiated transaction recovery (`getTransactionStatus()`), and cloud channel (integrated mode). Not required for card-present operations. |

```kotlin
// Card-present only — no MOTO or recovery polling
val credentials = HandpointCredentials("YOUR_SHARED_SECRET")

// Full credentials — enables MOTO, recovery polling, and cloud channel
val credentials = HandpointCredentials("YOUR_SHARED_SECRET", "YOUR_CLOUD_API_KEY")
```

---

### `HapiFactory`

A factory that creates the `Hapi` interface instance. Use the static method:

```kotlin
// Four-argument form (current SDK — use this)
api = HapiFactory.getAsyncInterface(
    eventsDelegate,   // Events.SmartposRequired or Events.MposRequired implementor
    context,          // Android Context (accepted but not used internally — any value is safe)
    credentials,      // HandpointCredentials
    settings          // Settings
)

// After factory call, explicitly register your delegate (required in SDK 7.1014.0+)
api.registerEventsDelegate(eventsDelegate)
```

`HapiFactory` is a Java class — use positional arguments, not named arguments.

---

### `Settings`

Controls SDK behavior at initialization time.

| Property | Type | Default | Description |
|---|---|---|---|
| `automaticReconnection` | `Boolean` | `false` | Automatically reconnect to the terminal on disconnect. The SDK uses exponential backoff between reconnection attempts. |
| `autoRecoverTransactionResult` | `Boolean` | `false` | When `true`, the SDK automatically delivers any stored transaction result via `transactionResultReady()` on reconnect. Complementary to manual `getTransactionStatus()` polling — implement the idempotency guard in `transactionResultReady` to handle both paths. |
| `sendToDeviceMaxAttempts` | `Int` | `3` | Maximum command delivery attempts before failure. |
| `timeBetweenAttempts` | `Int` | `5000` | Milliseconds between delivery retry attempts. |
| `showSDKUIComponents` | `Boolean` | `false` | When `true`, the SDK shows "Please Wait" dialogs and toast messages on the **host app's** Android screen. The PAX terminal's own PIN, signature, and duplicate-check screens are always shown regardless of this setting. |
| `receiptsAsURLs` | `Boolean` | `false` | When `true`, receipts are delivered as cloud-hosted URLs. URLs are not immediately accessible — implement `Events.ReceiptUploadingEvent` to receive notification when uploads complete. |
| `softwareVersion` | `String` | `""` | Your app's version string, reported to Handpoint for support. Use 3 numbers (e.g. `"3.1.5"`). |
| `locale` | `String` | `"en_US"` | SDK UI locale. |

```kotlin
val settings = com.handpoint.api.Settings().apply {
    automaticReconnection = true
    autoRecoverTransactionResult = true
    receiptsAsURLs = false
    softwareVersion = "1.0.0"
}
```

:::note Settings class package
In SDK 7.1014.0+ RC builds, `Settings` moved from `com.handpoint.api.shared.Settings` to `com.handpoint.api.Settings`. If you get `Unresolved reference: Settings`, change the import to `com.handpoint.api.Settings`.
:::

---

### `Device`

Represents a payment terminal connection target.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `String` | Yes | A descriptive name for the device (any string). |
| `address` | `String` | Yes | For Bluetooth: the Bluetooth MAC address (e.g. `"08:00:69:02:01:FC"`). For `ANDROID_PAYMENT`: any non-null identifier (e.g. `"localhost"`). |
| `port` | `String` | Yes | Port number. For `ANDROID_PAYMENT`: pass `""`. |
| `connectionMethod` | `ConnectionMethod` | Yes | The connection type. |
| `sharedSecret` | `String` | No | Overrides the default shared secret for this device only. |
| `timeout` | `Int` | No | Connection timeout in milliseconds. Default: 15,000 ms. |

```kotlin
// PAX SmartPOS (ANDROID_PAYMENT)
val device = Device("PAX A920", "localhost", "", ConnectionMethod.ANDROID_PAYMENT)

// HiLite Bluetooth
val device = Device("CardReader7", "08:00:69:02:01:FC", "1", ConnectionMethod.BLUETOOTH)
```

The `Device.serialNumber` property (or `device.address`) identifies the terminal in logs and support requests.

---

### `OperationStartResult`

Returned synchronously by every financial operation (`sale()`, `refund()`, etc.).

| Property | Type | Description |
|---|---|---|
| `operationStarted` | `Boolean` | `true` if the SDK accepted and started the operation. `false` if rejected (another operation in progress, SDK not initialized, etc.). |
| `transactionReference` | `String?` | UUID v4. **Must be persisted to durable storage immediately.** Used to query the Handpoint Gateway via `getTransactionStatus()` if the result is not delivered. Not returned for linked refunds or reversals — those use the reference of the original transaction. Can be `null` even when `operationStarted == true` in rare edge cases; log and alert the merchant if `null`. |
| `errorMessage` | `String` | Reason the operation was rejected (`operationStarted == false`). Empty on success. |

```kotlin
val result = api.sale(BigInteger.valueOf(1000), Currency.USD) ?: return
if (!result.operationStarted) {
    log("Operation rejected: ${result.errorMessage}")
    return
}
val ref = result.transactionReference ?: run {
    log("WARNING: operationStarted but transactionReference is null")
    return
}
persistTransactionReference(ref)  // save to durable storage BEFORE waiting for result
```

---

### `StatusInfo`

Delivered via `currentTransactionStatus(statusInfo, device)` for every mid-transaction update.

| Property | Type | Description |
|---|---|---|
| `status` | `StatusInfo.Status` | The current status enum value. See [Status enum](#status-enum) below. |
| `message` | `String` | Human-readable status message. |
| `isCancelAllowed` | `Boolean` | When `true`, the SDK will accept a `stopCurrentTransaction()` call. |
| `cardLanguage` | `SupportedLocales` | The card's language preference. |
| `multiLanguageMessages` | `Map<SupportedLocales, String>` | Status message in all supported locales. |
| `deviceStatus` | `DeviceStatus` | Terminal state at the time of this status update. |

---

### `DeviceStatus`

A snapshot of the payment terminal's state at the time of a callback.

| Property | Type | Description |
|---|---|---|
| `serialNumber` | `String` | Terminal serial number. |
| `batteryStatus` | `String` | Battery charge level as a percentage string, e.g. `"79"`. |
| `batterymV` | `String` | Battery voltage in millivolts, e.g. `"3908"`. |
| `batteryCharging` | `String` | `"Charging"` or `"Not Charging"`. |
| `externalPower` | `String` | External power source: `"USB"`, `"AC"`, `"None"`. |
| `applicationName` | `String` | Name of the Handpoint Payments App on the terminal. |
| `applicationVersion` | `String` | Version of the Payments App, e.g. `"20.4.14.0-RC.66"`. |
| `bluetoothName` | `String` | Bluetooth name of the terminal, e.g. `"PAXA920"`. |
| `statusMessage` | `String` | Human-readable status description, e.g. `"Approved or completed successfully"`. |

`DeviceStatus` appears as `result.deviceStatus` in `TransactionResult`, and as `statusInfo.deviceStatus` in `currentTransactionStatus`.

---

### `SignatureRequest`

Delivered via `Events.SignatureRequired.signatureRequired(request, device)`. Relevant only for HiLite/Bluetooth — PAX SmartPOS handles signature capture internally.

| Property | Type | Description |
|---|---|---|
| `timeout` | `Int` | Time in seconds the merchant has to respond. |
| `merchantReceipt` | `String` | The merchant receipt HTML, used to display cardholder details during signature verification. |

Respond with `api.signatureResult(accepted: Boolean)`.

---

## Enums

### `ConnectionMethod`

How the app connects to the payment terminal.

| Value | Description |
|---|---|
| `ANDROID_PAYMENT` | Integrated PAX/Telpo SmartPOS — SDK communicates via IPC on the same device. |
| `BLUETOOTH` | Bluetooth card reader (HiLite/Datecs). |
| `USB` | USB connection. |

---

### `ConnectionStatus`

Terminal connection state — delivered via `connectionStatusChanged()`.

| Value | Description |
|---|---|
| `Connected` | Transport layer connected. Not yet ready for transactions — wait for `InitialisationComplete`. |
| `Connecting` | Connection in progress. |
| `Disconnected` | Connection lost. Reset the initialized gate; wait for next `InitialisationComplete`. |
| `Disconnecting` | Disconnect in progress. |
| `NotConfigured` | Device not recognized as a supported PAX model. Check `abiFilters` and hardware. |
| `CloudConnected` | Connected with a concurrent cloud session established (cloud/integrated mode). |
| `CloudInitialized` | Cloud service initialized. |
| `CloudAvailable` | Cloud channel available. |
| `CloudDisconnected` | Cloud channel disconnected. |
| `CloudUnavailable` | Cloud channel unavailable. |

:::note
`CloudConnected` and `Connected` should both be treated as "connected" for the purposes of your initialization gate. Card-present operations work when either status is active.

The `Cloud*` statuses are only relevant when a Cloud API Key is provided and cloud/integrated mode is configured. They can be safely ignored for standard card-present integrations.
:::

---

### `FinancialStatus`

The primary result indicator for every financial operation. See [Transaction Result Object](/reference/transaction-result-object) for the full description of each value.

| Value | Description |
|---|---|
| `AUTHORISED` | Approved. Settlement occurs at batch close. |
| `DECLINED` | Declined by acquirer or issuer. |
| `PROCESSED` | Non-financial operation completed (e.g. `tokenizeCard`, print receipt). |
| `FAILED` | Technical error — check `errorMessage`. |
| `CANCELLED` | Cancelled by terminal or cardholder. |
| `PARTIAL_APPROVAL` | Partial approval — `totalAmount` is less than `requestedAmount`. US acquirers only. Use `FinancialStatus.PARTIAL_APPROVAL` for comparison. |
| `IN_PROGRESS` | Transaction still processing — never appears in `endOfTransaction`. Arrives via `transactionResultReady()` only. Continue polling. |
| `REFUNDED` | Transaction was refunded (status query response). |
| `CAPTURED` | Pre-auth captured. |
| `UNDEFINED` | Outcome unknown — start recovery. See [Transaction Recovery](/reference/transaction-recovery-android-sdk). |
| `AUTHORISED_DEFERRED` | Offline deferred auth — treat as successful; settles when device reconnects. Use `.toString() == "AUTHORISED_DEFERRED"` — may not be exposed as a named constant in all SDK versions. |

---

### `CardEntryType`

How the card was physically read by the terminal.

| Value | Description |
|---|---|
| `ICC` | Chip insert (contact EMV). |
| `MSR` | Magnetic stripe swipe. Also emitted as `MAG_STRIPE` in some firmware versions — treat both as equivalent. |
| `CNP` | Card Not Present — MOTO/keyed entry. |
| `UNDEFINED` | Unknown. Common on reversals and cancelled transactions where no card was presented. |

---

### `PaymentScenario`

Detailed card entry path.

| Value | Description |
|---|---|
| `CHIP` | Card inserted, EMV chip processed (contact). |
| `CHIPCONTACTLESS` | Card tapped, EMV chip processed over NFC. |
| `MAGSTRIPE` | Card swiped (magnetic stripe). |
| `MAGSTRIPECONTACTLESS` | Contactless magnetic stripe (legacy contactless cards). |
| `CHIPFAILMAGSTRIPE` | Chip failed — fell back to magnetic stripe. |
| `MOTO` | Mail order / telephone order (card not present). |
| `UNKNOWN` | Unknown scenario — common on reversals and cancelled transactions. |

---

### `VerificationMethod`

How the cardholder was verified.

| Value | Description |
|---|---|
| `NOT_REQUIRED` | No cardholder verification needed (e.g. low-value contactless). |
| `PIN` | Offline or online PIN entered. |
| `SIGNATURE` | Signature captured. |
| `PIN_SIGNATURE` | Both PIN and signature. |
| `MOBILE_PASS_CODE` | On-device biometric/passcode (Apple Pay, Google Pay — "See Phone"). |
| `FAILED` | Verification attempted but failed. |
| `UNDEFINED` | Unknown. |

---

### `TenderType`

The card funding type.

| Value | Description |
|---|---|
| `CREDIT` | Credit card. |
| `DEBIT` | Debit card. |
| `NOT_SET` | Unknown — common on MOTO and cancelled transactions. |

---

### `Currency`

ISO 4217 currency enum. Pass to all financial operations.

```kotlin
Currency.USD   // US Dollar
Currency.EUR   // Euro
Currency.GBP   // British Pound
Currency.CAD   // Canadian Dollar
Currency.SEK   // Swedish Krona
Currency.AUD   // Australian Dollar
Currency.NZD   // New Zealand Dollar
// … all ISO 4217 currencies supported by your acquirer
```

Your acquirer determines which currencies are active for your merchant.

---

### `Status` enum (`StatusInfo.Status`)

Delivered as `statusInfo.status` in `currentTransactionStatus()`. Key values:

| Value | When it fires | Action |
|---|---|---|
| `InitialisationComplete` | SDK fully initialized and synced with terminal. | Enable transaction buttons; call `recoverIfPending()`. |
| `NotInitialised` | Operation called before initialization. | Wait for `InitialisationComplete`. |
| `CommandNotAllowed` | Operation not permitted in current state. | Check guards. |
| `UserCancelled` | `stopCurrentTransaction()` accepted. | Dismiss "waiting" overlay; next `endOfTransaction` will be `CANCELLED`. |
| `WaitingForCard` | Terminal waiting for card tap/insert/swipe. | Show appropriate UI. |
| `CardInserted` | Card inserted into chip reader. | — |
| `CardTapped` | Contactless card detected. | — |
| `PinInput` | PIN entry in progress on terminal. | Show "Enter PIN on terminal" message. |
| `WaitingSignature` | Terminal waiting for signature. | HiLite: show signature capture UI. PAX: terminal renders this. |
| `InputTimeout` | Cardholder did not respond in time. | — |
| `ApplicationSelection` | EMV application selection in progress. | — |
| `AmountValidation` | Terminal prompting cardholder to confirm amount. | — |
| `PrintingMerchantReceipt` | Merchant receipt printing. | — |
| `PrintingCustomerReceipt` | Customer receipt printing. | — |
| `UpdateStarted` | Terminal software update started. | — |
| `UpdateFinished` | Terminal software update complete. | — |
| `UpdateFailed` | Terminal software update failed. | — |

The full `Status` enum contains many values covering every step of the card interaction. Use the `else` branch in your `when` block to handle mid-transaction updates generically (update a status message in your UI with `info.message`).

---

### `LogLevel`

Controls SDK and terminal log verbosity.

| Value | Use |
|---|---|
| `Error` | Errors only — minimum logging. |
| `Info` | Informational events. Recommended for production. |
| `Debug` | Debug-level output. |
| `Full` | Full message payloads — more verbose; use during development. |
| `Sensitive` | Maximum verbosity — includes sensitive card data. **Never use in production.** |

Set via `api.setLogLevel(LogLevel.Info)` after `InitialisationComplete`.

---

### `CardSchemeName`

Card network string as emitted by the terminal firmware (always uppercase). Confirmed from live terminal captures: `VISA`, `MASTERCARD`, `DISCOVER`, `AMEX`. Other brands follow the same pattern.

| Value |
|---|
| `VISA` |
| `MASTERCARD` |
| `MAESTRO` |
| `AMEX` |
| `DISCOVER` |
| `JCB` |
| `DINERS` |
| `UNIONPAY` |
| `INTERAC` |

---

### `TransactionType`

The type of transaction represented by `TransactionResult.type`.

| Value |
|---|
| `UNDEFINED` |
| `SALE` |
| `VOID_SALE` |
| `REFUND` |
| `VOID_REFUND` |
| `REVERSAL` |
| `CANCEL_SALE` |
| `CANCEL_REFUND` |
| `TOKENIZE_CARD` |
| `TOKENIZED_OPERATION` |
| `SALE_AND_TOKENIZE_CARD` |
| `CARD_PAN` |
| `UPDATE` |
| `PRINT_RECEIPT` |
| `TIP_ADJUSTMENT` |
| `PRE_AUTHORIZATION` |
| `PRE_AUTHORIZATION_INCREASE` |
| `PRE_AUTHORIZATION_CAPTURE` |
| `MOTO_SALE` |
| `MOTO_CANCEL` |
| `MOTO_REFUND` |
| `MOTO_REVERSAL` |
| `MOTO_PREAUTHORIZATION` |
| `TRANSACTION_STATUS` |

---

### `Manufacturer`

Terminal manufacturer. Returned by `getDeviceManufacturer()`.

| Value | Description |
|---|---|
| `INVALID` | Unknown or unsupported manufacturer. |
| `DATECS` | Datecs (HiLite) devices. |
| `PAX` | PAX SmartPOS terminals. |
| `TELPO` | Telpo SmartPOS terminals. |

---

### `DeviceParameter`

Admin parameter names for `setDeviceParameter()`. Controls terminal Bluetooth settings and timeouts.

| Value | Description |
|---|---|
| `BluetoothName` | Set the Bluetooth advertising name of the terminal. |
| `BluetoothPass` | Set the Bluetooth pairing passcode. |
| `SystemTimeout` | Set the system idle timeout (seconds). |
| `ScreenTimeout` | Set the screen-off timeout (seconds). |
| `SignatureTimeout` | Set the signature input timeout (seconds). |

---

### `PrintError`

Error codes delivered via `Events.PrinterEvents.printError()`.

| Value |
|---|
| `Unexpected` |
| `InvalidArgument` |
| `CantConnectToPrinter` |
| `NotSupported` |
| `NoPermission` |
| `PrinterDisabled` |
| `NotWhitelisted` |
| `Busy` |
| `OutOfPaper` |
| `DataPacketInvalid` |
| `PrinterHasProblems` |
| `PrinterOverheating` |
| `PrintingUnfinished` |
| `FontNotPresent` |
| `FontFormatError` |
| `TooLong` |
| `BatteryTooLow` |
| `PaperCutterError` |
| `PaperCutterJam` |
| `CoverOpen` |
| `UnsupportedEncoding` |

---

### `TypeOfResult`

Distinguishes the result type in `Events.ReportResult`. Produced by `getTransactionsReport()` and `getEMVConfiguration()`.

| Value | Produced by |
|---|---|
| `STATUS` | Device status query. |
| `REPORT` | `getTransactionsReport()`. |
| `BLUETOOTHNAME` | Bluetooth name query. |
| `EMVCONFIGURATION` | `getEMVConfiguration()`. |

---

### `SupportedLocales`

SDK-supported UI locales. Pass to `setLocale()` and read from `StatusInfo.cardLanguage`.

| Value |
|---|
| `en_CA` |
| `en_UK` |
| `en_US` |
| `es_ES` |
| `hr_HR` |
| `is_IS` |
| `fr_FR` |
| `pt_PT` |
| `it_IT` |
| `no_NO` |
| `de_DE` |
| `sl_SL` |
| `et_EE` |

---

## Options objects

### `Options` (base class)

Available on every options object — the root of the options inheritance chain.

| Property | Type | Description |
|---|---|---|
| `customerReference` | `String` | Arbitrary identifier echoed in `TransactionResult.customerReference`. Use for order IDs, booking references, etc. Max 25 characters. |
| `metadata` | `Metadata?` | Custom key-value data echoed in the transaction result. |

---

### `SaleOptions`

Options for `sale()` and `saleAndTokenize()`. Inherits from `BypassOptions` → `MerchantAuthOptions` → `Options`.

| Property | Type | Description |
|---|---|---|
| `customerReference` | `String` | (inherited) Order/reference identifier. |
| `metadata` | `Metadata?` | (inherited) Custom data. |
| `merchantAuth` | `MerchantAuth?` | (inherited) Multi-MID credential override. |
| `pinBypass` | `Boolean` | Show PIN entry screen but allow cardholder to skip. Cards with chip-enforced PIN ignore this. |
| `signatureBypass` | `Boolean` | Skip signature capture step. |
| `checkDuplicates` | `Boolean` | Default `true`. Enables the duplicate payment check — prompts if the same card is used twice within 5 minutes for the same amount. Set `false` to disable. |
| `tipConfiguration` | `TipConfiguration?` | Configures the on-device tipping prompt. |
| `budgetNumber` | `String?` | South Africa — split payments over a number of months. 2-digit string (e.g. `"06"` = 6 months). |
| `moneyRemittanceOptions` | `MoneyRemittanceOptions?` | Required for Mastercard money remittance (MCC 4829/6540). |

```kotlin
val options = SaleOptions().apply {
    customerReference = "ORDER-123"
    tipConfiguration = TipConfiguration().apply {
        tipPercentages = listOf(10, 15, 20)
        isEnterAmountEnabled = true
        isSkipEnabled = true
        footer = "Thank you!"
    }
    pinBypass = false
    checkDuplicates = true
}
api.sale(BigInteger.valueOf(1000), Currency.USD, options)
```

---

### `TipConfiguration`

Configures the tipping prompt shown on the terminal screen.

| Property | Type | Default | Description |
|---|---|---|---|
| `amount` | `BigInteger?` | `null` | Fixed tip amount in minor units. If set, skips percentage selection and applies this amount directly. |
| `baseAmount` | `BigInteger?` | `null` | Base amount for percentage calculation. If `null`, uses the transaction amount. |
| `headerName` | `String` | `"Tip"` | Header text on the terminal tipping screen. |
| `tipPercentages` | `List<Int>` | `[5, 10, 15, 20]` | Percentage options to display. **Required** if `amount` is not set. |
| `isEnterAmountEnabled` | `Boolean` | `true` | Allow cardholder to enter a custom tip amount. |
| `isSkipEnabled` | `Boolean` | `true` | Allow cardholder to skip the tip step. |
| `footer` | `String` | `""` | Footer text on the tipping screen. |

---

### `RefundOptions`

Options for `refund()`. Inherits `customerReference`, `metadata`, `merchantAuth`, `pinBypass`, `signatureBypass` from parent classes.

Additional field:
- `checkDuplicates: Boolean` — same as `SaleOptions`.
- `moneyRemittanceOptions: MoneyRemittanceOptions?` — Mastercard remittance.

---

### `MoToOptions`

Options for all MOTO/keyed-entry operations.

| Property | Type | Description |
|---|---|---|
| `customerReference` | `String` | (inherited) Reference string. |
| `merchantAuth` | `MerchantAuth?` | (inherited) Multi-MID override. |
| `channel` | `MoToChannel?` | `MO` (mail order) or `TO` (telephone order). `null` uses the acquirer default. |
| `tokenize` | `Boolean` | `true` to also tokenize the card. Token returned in `result.cardToken`. |
| `cardToken` | `String?` | Pass a previously stored token to perform a de-tokenized charge without re-entering card details. |
| `billing` | `Billing?` | Billing address for AVS checks. |
| `enableAvsFields` | `Boolean` | `true` to prompt the cardholder to enter AVS fields on the terminal. Ignored if `billing` is set. |
| `moneyRemittanceOptions` | `MoneyRemittanceOptions?` | Mastercard remittance options. |

---

### `MoToChannel`

| Value | Description |
|---|---|
| `MO` | Mail order. |
| `TO` | Telephone order. |

---

### `MerchantAuth` and `Credential`

Used for multi-MID (sub-merchant) scenarios — overrides the terminal's default MID/TID for a single transaction.

`MerchantAuth` holds one or more `Credential` objects:

```kotlin
val credential = Credential().apply {
    externalId = "YOUR_EXTERNAL_ID"   // recommended — Handpoint resolves MID/TID/MCC
    // Alternative: set acquirer, mid, tid, mcc directly
}
val merchantAuth = MerchantAuth().also { it.add(credential) }
options.merchantAuth = merchantAuth
```

`Credential` fields:

| Property | Description |
|---|---|
| `externalId` | External ID looked up in the Handpoint backend. This is all you normally need. |
| `acquirer` | `Acquirer` enum — required if providing more than one credential. |
| `mid` | Overrides the terminal's default Merchant ID. |
| `tid` | Overrides the terminal's default Terminal ID. |
| `mcc` | Overrides the terminal's default Merchant Category Code. |

---

### `Metadata`

Custom key-value data echoed in the transaction result and in transaction reporting.

| Property | Type | Max length | Valid characters |
|---|---|---|---|
| `metadata1` | `String` | 250 | `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,` |
| `metadata2` | `String` | 250 | (same) |
| `metadata3` | `String` | 250 | (same) |
| `metadata4` | `String` | 250 | (same) |
| `metadata5` | `String` | 250 | (same) |

```kotlin
val metadata = Metadata("Order-123", "Table-7", "", "", "")
options.metadata = metadata
```

---

### `MoneyRemittanceOptions`

Required for Mastercard money remittance transactions (MCC 4829 and 6540).

| Property | Type | Required | Description |
|---|---|---|---|
| `fullName` | `String` | Yes | First and last name of the recipient. |
| `countryCode` | `CountryCode` | Yes | ISO 3166-1 alpha-3 country code of the recipient (e.g. `CountryCode.USA`). |

VISA transactions do not require money remittance options.

---

### `Billing`

Billing address for Address Verification Service (AVS) checks on MOTO transactions.

| Property | Type | Required | Description |
|---|---|---|---|
| `zipCode` | `String` | Yes | Billing postal/ZIP code. |
| `address` | `String` | No | Billing street address. Used for AVS when provided. |

---

### `Balance`

Balance returned by the issuer (e.g. for prepaid or debit cards).

| Property | Type | Description |
|---|---|---|
| `amount` | `Int` | Balance amount in minor units. |
| `currency` | `Currency` | Balance currency. |
| `sign` | `BalanceSign` | `POSITIVE_SIGN` (credit, `C`) or `NEGATIVE_SIGN` (debit, `D`). |

Use `balance.isPositive()` or `balance.isNegative()` for sign checks.

---

## `HapiManager` static class

Provides static access to current SDK state.

| Property/Method | Type | Description |
|---|---|---|
| `DefaultSharedSecret` | `String` | The default shared secret currently configured in the SDK. |
| `inTransaction(device)` | `Boolean` | `true` if the SDK is currently in the middle of a transaction. |
| `getLogLevel()` | `LogLevel` | Current SDK log level. |
| `isTransactionResultPending` | `Boolean` | `true` if a transaction result was not delivered due to a communication failure. Call `api.getPendingTransactionResult()` to fetch it. |
| `SdkVersion` | `String` | Current SDK version string. |

---

## `DeviceCapabilities`

Returned via `Events.DeviceCapabilitiesReady.deviceCapabilities()`.

| Property | Type | Description |
|---|---|---|
| `printer` | `Boolean` | `true` if the terminal has a printer. |
| `cloudApi` | `Boolean` | `true` if the terminal supports cloud API operations. |

---

## `AddressVerification`

AVS result — present on `TransactionResult.addressVerification` for MOTO transactions that performed an AVS check.

| Property | Type | Description |
|---|---|---|
| `resultCode` | `AvsResultCode` | Outcome of the AVS check. |

`AvsResultCode` enum values: `FULL_MATCH`, `EXACT_MATCH`, `ADDRESS_MATCH`, `ZIP_MATCH`, `ZIP9_MATCH`, `NO_MATCH`, `UNSUPPORTED`, `INTERNATIONAL`, `RETRY`, `UNAVAILABLE`, `UNKNOWN`.

---

## `ReportConfiguration`

Parameter for `api.getTransactionsReport()`.

| Property | Type | Description |
|---|---|---|
| `currency` | `Currency` | Currency to filter by. |
| `startDate` | `String` | Start of the reporting window — format `YYYYMMDDHHmmss`. |
| `endDate` | `String` | End of the reporting window — format `YYYYMMDDHHmmss`. |
| `timeZone` | `String` | Time zone offset — format `+HH:MM` (e.g. `"+00:00"`). |
| `terminalSerialNumberList` | `List<String>` | Serial numbers to filter. Pass an empty list for all terminals on the merchant. |

---

## `CardTokenizationData`

Delivered as `cardTokenizationData` in `Events.CardTokenization.cardTokenized()`.

| Property | Type | Description |
|---|---|---|
| `token` | `String` | Token representing the card PAN. |
| `expiryDate` | `String` | Expiry date of the tokenized card. |
| `tenderType` | `TenderType` | Card funding type (`CREDIT` or `DEBIT`). |
| `issuerCountryCode` | `CountryCode` | ISO 3166-1 country code of the card issuer. |
| `cardBrand` | `String` | Card brand / network (e.g. `"VISA"`, `"MASTERCARD"`). |
| `languagePref` | `String` | Card language preference (EMV tag 5F2D). |
| `tipAmount` | `BigInteger` | Tip amount in minor units. Default: `BigInteger.ZERO`. |

---

## `OperationDto` sealed class

Specifies the financial operation to execute after card tokenization. Passed to `ResumeCallback.resume()`.

### Subclasses

| Subclass | Parameters | Description |
|---|---|---|
| `Sale` | `amount: BigInteger, currency: Currency, options: SaleOptions?` | Perform a sale after tokenization. |
| `Refund` | `amount: BigInteger, currency: Currency, originalTransactionId: String?, options: RefundOptions?` | Perform a refund after tokenization. |
| `SaleReversal` | `amount: BigInteger, currency: Currency, originalTransactionId: String, options: Options?` | Reverse a sale after tokenization. |
| `RefundReversal` | `amount: BigInteger, currency: Currency, originalTransactionId: String, options: Options?` | Reverse a refund after tokenization. |

```kotlin
// Resume with a sale after tokenization
callback.resume(OperationDto.Sale(BigInteger.valueOf(1000), Currency.USD))

// Resume with a linked refund
callback.resume(OperationDto.Refund(BigInteger.valueOf(500), Currency.USD, "original-txn-id"))
```

---

## `ResumeCallback` interface

Returned in `Events.CardTokenization.cardTokenized()`. Call one method to continue or abort the tokenized operation.

| Method | Description |
|---|---|
| `resume(operationDto: OperationDto)` | Continue the operation with the specified transaction type. |
| `finishWithoutCardOperation()` | Tokenization complete — finish without executing a card payment. |
| `cancel()` | Abort the tokenized operation entirely. |

---

## `ResumeDependantOperationExecutor` interface

Returned in `Events.DependantRefundReceived` and `Events.DependantReversalReceived` for cloud tokenized flow operations.

| Method | Description |
|---|---|
| `executeDependantOperation(amount: BigInteger, currency: Currency, originalTransactionId: String)` | Execute the dependant refund or reversal on the card. |
| `finishWithoutCardOperation()` | Complete the flow without a card operation. |
| `cancel()` | Cancel the dependant operation. |

---

## `Acquirer` enum

Supported acquirers for merchant authentication.

| Value |
|---|
| `AMEX` |
| `BORGUN` |
| `EVO` |
| `OMNIPAY` |
| `POSTBRIDGE` |
| `INTERAC` |
| `TSYS` |
| `VANTIV` |
| `SANDBOX` |

---

## See also

- [Transaction Result Object](/reference/transaction-result-object) — full `TransactionResult` field reference with types and per-operation population
- [Android SDK — Events Reference](/reference/android-events-reference) — all Events interfaces, when each fires, code examples
- [Android SDK — Setup & Initialization](/reference/android-sdk-setup) — Gradle, AndroidManifest, initialization pattern
- [Android SDK — Integration Walkthrough](/reference/android-integration-walkthrough) — transaction lifecycle, recovery state machine, logging
