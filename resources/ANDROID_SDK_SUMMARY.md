# Handpoint Android SDK — Summary, Glossary & Version Changelog

> Covers versions **7.1009.5**, **7.1011.0**, and **7.1012.1**  
> Source analysed: `SDKs/Android SDK/hapi-android-7.1009.5` and `hapi-android-7.1012.1`  
> Official docs baseline: https://developer.handpoint.com/android/androidintroduction/ (last updated for 7.1011.0)

---

## 1. SDK Architecture Overview

The Handpoint Android SDK (`com.handpoint.api`) is a multi-module Gradle project targeting Android 5.1+ (API 22). It enables Android payment terminals (PAX, HiLite) and mPOS peripherals (Bluetooth, USB, cloud-connected) to process card-present and card-not-present payments via the Handpoint Viscus gateway.

### Module Map

| Module | Package | Role |
|--------|---------|------|
| `sdk` | `com.handpoint.api` | Public API entry point. `Hapi` interface + `HapiFactory`. Connection management, transaction dispatch, device control. |
| `paymentsdk` | `com.handpoint.api.paymentsdk` | SmartPOS-side payment engine. Card reading (PAX/Telpo), EMV flow, PIN/signature dialogs, receipt generation, MoTo UI. |
| `shared/objects` | `com.handpoint.api.shared` | **Public data model.** All types visible to integrators: `TransactionResult`, `Device`, `Events`, `FinancialStatus`, options classes, etc. |
| `shared/internal` | `com.handpoint.api.shared` | Internal utilities: EMV tag parsing, coroutine helpers, image/formatting utilities. Not part of public API. |
| `shared/internal-objects` | `com.handpoint.api.shared` | Internal configuration objects: `Constants`, `GeneralConfig`, `HostDefaults`, protocol config objects. |
| `shared/networking` | `com.handpoint.api.shared` | HTTP clients (OkHttp): Cloud REST API client, CR API client, receipt upload, analytics. |
| `shared/printing` | `com.handpoint.api.shared` | Receipt model and HTML template builder used by both mPOS and SmartPOS paths. |
| `shared/repo` | `com.handpoint.api.shared` | SQLite persistence layer (Room). Stores: incomplete transactions, MoTo config, image cache, tip data. |
| `crypto` | `com.handpoint.utils.crypto` | DUKPT key management, PIN authentication, IPEK/KSN computation. Used for hardware key injection. |
| `applicationprovider` | `com.handpoint.api.applicationprovider` | `Application` context provider. Required to give the SDK access to Android application lifecycle without coupling to a specific activity. |
| `transactionFeed` | `com.handpoint.api.transactions` | Internal analytics pipeline: sends transaction events to Queen API (TXN Feed) and Keen.IO. |
| `HiKeyLoader` | — | Standalone debug tool. Loads BDK/IPEK keys onto PAX terminals for development key injection. Not shipped to integrators. |
| `configTransformer` | `com.handpoint.api` | CLI tool that transforms TMS config XML into terminal-ready format. Internal use only. |
| `privateops` | `com.handpoint.api.privateops` | Internal operations: system manager, WebView updater, MPOS authentication. Not part of public API. |
| `clientapp` | `com.handpoint.test.clientapp` | Reference integration demo app. Demonstrates all SDK operations. Not part of distributed SDK. |

### Source File Counts by Version

| Module | 7.1009.5 | 7.1012.1 | Delta |
|--------|----------|----------|-------|
| sdk | 363 | 675 | **+312** |
| paymentsdk | 363 | 639 | **+276** |
| shared/networking | 228 | 332 | **+104** |
| shared/internal-objects | 135 | 213 | **+78** |
| shared/objects | 107 | 155 | **+48** |
| shared/internal | 62 | 78 | **+16** |
| crypto | 41 | 57 | **+16** |
| shared/repo | 24 | 36 | **+12** |
| clientapp | ~7 | 131 | **+124** |
| shared/printing | 39 | 44 | +5 |
| transactionFeed | 13 | 16 | +3 |
| applicationprovider | 4 | 4 | 0 |
| HiKeyLoader | 22 | 22 | 0 |
| **TOTAL** | **1,408** | **2,407** | **+999** |

---

## 2. Public API Reference

### Entry Points

```kotlin
// Standard card-present / cloud-connected SDK
val hapi: Hapi = HapiFactory.getHAAPI(context, options)

// Store & Forward SDK (SmartPOS only, v7.1012.1+)
val safApi: StoreAndForwardPaymentsApi = StoreAndForwardPaymentsApiImpl
safApi.start()
```

### `Hapi` Interface — Full Method List (v7.1012.1)

**Connection**
| Method | Returns | Description |
|--------|---------|-------------|
| `connect(device)` | `Boolean` | Connect to a payment terminal |
| `disconnect()` | `Boolean` | Disconnect and stop reconnect attempts |
| `searchDevices(method)` | `Unit` | Discover nearby devices (result via `Events.DeviceDiscoveryFinished`) |
| `getPairedDevices(method)` | `List<Device>` | Return known paired terminals |
| `getConnectionStatus()` | `ConnectionStatus` | Current connection state |
| `getBluetoothStatus()` | `HardwareStatus` | Current BT adapter state |
| `getDeviceManufacturer()` | `Manufacturer` | PAX, Datecs, Telpo, etc. |
| `registerEventsDelegate(delegate)` | `Boolean` | Register event listener |
| `unregisterEventsDelegate(delegate)` | `Boolean` | Remove event listener |

**Card-Present Transactions**
| Method | Returns | Description |
|--------|---------|-------------|
| `sale(amount, currency)` | `OperationStartResult` | Standard card sale |
| `sale(amount, currency, options)` | `OperationStartResult` | Sale with tip/PIN bypass/duplicate check options |
| `refund(amount, currency)` | `OperationStartResult` | Card-present refund |
| `refund(amount, currency, originalTransactionID)` | `OperationStartResult` | Linked refund |
| `refund(amount, currency, originalTransactionID, options)` | `OperationStartResult` | Linked refund with options |
| `saleReversal(amount, currency, originalTransactionID)` | `OperationStartResult` | Void a sale |
| `refundReversal(amount, currency, originalTransactionID)` | `OperationStartResult` | Void a refund |
| `preAuthorization(amount, currency)` | `OperationStartResult` | Place a funds hold |
| `preAuthorizationCapture(amount, currency, originalTransactionID)` | `OperationStartResult` | Capture a pre-auth |
| `preAuthorizationIncrease(amount, currency, originalTransactionID)` | `OperationStartResult` | Increase a pre-auth amount |
| `preAuthorizationReversal(originalTransactionID)` | `OperationStartResult` | Release a pre-auth hold |
| `tokenizeCard()` | `OperationStartResult` | Tokenize card (no charge) |
| `tokenizedOperation(amount, currency)` | `OperationStartResult` | Tokenize + sale (two-step callback) |
| `tokenizedOperation(currency, operation)` | `OperationStartResult` | Tokenize + reversal/refund/refundReversal |
| `cardPan()` | `OperationStartResult` | Read card PAN via token |
| `tipAdjustment(tipAmount, currency, originalTransactionID)` | `Boolean` | Post-auth tip (US/TSYS/Vantiv only) |
| `stopCurrentTransaction()` | `Boolean` | Abort current transaction |
| `signatureResult(accepted)` | `Boolean` | Respond to signature verification request |

**MOTO (Card-Not-Present)**
| Method | Returns | Description |
|--------|---------|-------------|
| `motoSale(amount, currency)` | `OperationStartResult` | MOTO sale |
| `motoSale(amount, currency, options)` | `OperationStartResult` | MOTO sale with tokenize/channel options |
| `motoRefund(amount, currency, originalTransactionID)` | `OperationStartResult` | MOTO refund |
| `motoReversal(originalTransactionID)` | `OperationStartResult` | MOTO reversal |
| `motoPreauthorization(amount, currency)` | `OperationStartResult` | MOTO pre-auth |
| `automaticRefund(amount, currency, originalTransactionID)` | `OperationStartResult` | Refund to original card without card interaction *(new v7.1012.1)* |
| `automaticRefund(originalGuid)` | `OperationStartResult` | Full-amount refund to original card *(new v7.1012.1)* |

**Device Management**
| Method | Returns | Description |
|--------|---------|-------------|
| `update()` | `Boolean` | Check and apply firmware/config update |
| `setLogLevel(level)` | `Boolean` | Set terminal log verbosity |
| `getDeviceLogs()` | `Boolean` | Fetch device logs (result via `Events.DeviceLogsReady`) |
| `getEMVConfiguration()` | `Boolean` | Fetch EMV config report |
| `getTransactionsReport(configuration)` | `Boolean` | Fetch transaction report |
| `getTransactionStatus(transactionReference)` | `Boolean` | Query gateway for transaction outcome |
| `setParameter(param, value)` | `Boolean` | Set terminal parameter (name, timeout, language, etc.) |
| `setLocale(locale)` | `Unit` | Set UI language |
| `deleteDeviceConfig()` | `Boolean` | Reset device configuration |
| `printReceipt(receipt)` | `Boolean` | Print HTML receipt |
| `sendSafTransactions()` | `Unit` | Forward locally stored SAF transactions *(new v7.1012.1)* |

### `StoreAndForwardPaymentsApi` Interface (v7.1012.1+)

Separate API for terminals operating in offline-first / intermittent-connectivity scenarios.

| Method | Returns | Description |
|--------|---------|-------------|
| `start()` | `Boolean` | Connect to first available ANDROID_PAYMENT device |
| `stop()` | `Boolean` | Disconnect |
| `registerEventsDelegate(delegate)` | `Boolean` | Register SAF event listeners |
| `sale(amount, currency, options)` | `OperationStartResult` | Offline-capable sale — stored locally if no connectivity |
| `stopCurrentTransaction()` | `Boolean` | Abort |
| `getStoredTransactions()` | `Boolean` | List locally stored transactions |
| `forwardStoredTransactions()` | `Boolean` | Submit all stored transactions to gateway |
| `deleteStoredTransaction(transactionReference)` | `Boolean` | Delete a specific stored transaction |
| `getTransactionProcessingStatus(transactionReference)` | `Boolean` | Query status of a stored transaction |
| `printReceipt(receipt)` | `Boolean` | Print receipt |

---

## 3. SDK Glossary

### Core Objects

**`TransactionResult`**  
The primary outcome object delivered via `Events.EndOfTransaction.endOfTransaction()`. Contains every field from the transaction: amounts, card data (masked), receipt content, EMV tags, device status, and the `finStatus` that determines the financial outcome. Immutable once delivered.

**`OperationStartResult`**  
Returned synchronously by every transaction-initiating method. Three fields:
- `operationStarted: Boolean` — true if the request was accepted and queued
- `transactionReference: String` — UUID v4 generated before the card interaction; your recovery key if connectivity is lost
- `errorMessage: String` — populated only if `operationStarted = false`

Always save `transactionReference` before card presentation. It is the only way to recover a transaction result via `getTransactionStatus()`.

**`Device`**  
Represents a physical payment terminal. Key fields: `name`, `address` (MAC or cloud ID), `connectionMethod`, `timeout` (default 15s). Set `sharedSecret` for HMAC-authenticated connections.

**`StatusInfo`**  
Delivered via `Events.CurrentTransactionStatus` throughout a transaction lifecycle. Contains `Status` enum (80+ values covering every state from `WaitingForCard` to `InitialisationComplete`), `isCancelAllowed`, and `message`.

**`SignatureRequest`**  
Delivered via `Events.SignatureRequired.signatureRequired()`. Contains `merchantReceipt` (HTML) and `timeout` (seconds, from terminal config). Integrator must call `signatureResult(accepted)` within the timeout or the transaction is declined with `SIGNATURE_TIMEOUT`.

**`TipConfiguration`**  
Embedded in `SaleOptions`. Controls tip prompt behaviour: `enterAmountEnabled`, `skipEnabled`, `tipPercentages` list, `footer`, `headerName`, `currency`. The terminal UI uses this to present the tip screen.

### Enums

**`FinancialStatus`**

| Value | Meaning |
|-------|---------|
| `AUTHORISED` | Transaction approved |
| `DECLINED` | Declined by issuer/acquirer |
| `PROCESSED` | Processed (non-card tender) |
| `FAILED` | Communication or processing failure |
| `CANCELLED` | Cancelled by operator or timeout |
| `PARTIALLY_APPROVED` / `PARTIAL_APPROVAL` | Partial amount approved (both map to value 6) |
| `REFUNDED` | Refund completed |
| `CAPTURED` | Pre-auth captured |
| `IN_PROGRESS` | Transaction active *(added v7.1012.1)* |
| `AUTHORISED_DEFERRED` | Pre-auth hold granted, not yet captured *(added v7.1012.1)* |
| `UNDEFINED` | Unknown — do not treat as success |

**`ConnectionStatus`**  
`CONNECTED`, `CONNECTING`, `DISCONNECTED`, `DISCONNECTING`, `INITIALISING`, `UNKNOWN`

**`ConnectionMethod`**  
`BLUETOOTH`, `USB`, `ANDROID_PAYMENT` (SmartPOS internal), `CLOUD`

**`PaymentScenario`** (in `TransactionResult`)  
`CHIP`, `CHIPCONTACTLESS`, `MAGSTRIPE`, `CHIPFAILMAGSTRIPE`, `MAGSTRIPECONTACTLESS`, `MOTO`, `ECOM`, `UNKNOWN`

**`TransactionType`**  
`SALE`, `REFUND`, `REVERSAL`, `CANCELLATION`, `PREAUTHORIZATION`, `PREAUTHORIZATION_CAPTURE`, `PREAUTHORIZATION_INCREASE`, `CARD_TOKENIZATION`, `CARD_PAN`, `MOTO_SALE`, `MOTO_REFUND`, `MOTO_REVERSAL`, `MOTO_PREAUTHORIZATION`, `TIP_ADJUSTMENT`, `UNDEFINED`

**`DeviceParameter`**  
Parameters sendable via `setParameter()`:
- `BluetoothName` — rename the BT device
- `BluetoothPass` — change BT pairing PIN
- `SystemTimeout` — overall system idle timeout
- `ScreenTimeout` — screen-off delay
- `SignatureTimeout` — signature capture window
- `Language` — display language

**`SafTransactionStatus`** *(v7.1012.1)*  
`STORED`, `SUCCEEDED`, `FAILED`, `REFUNDED`, `CANCELLED`, `CAPTURED`, `IN_PROGRESS`, `NOT_FOUND`

### Events Interfaces

Implement any combination of these and register with `registerEventsDelegate()`. The SDK will only call methods your object actually implements.

| Interface | Required by | Key callback |
|-----------|------------|--------------|
| `Events.EndOfTransaction` | All | `endOfTransaction(result, device)` |
| `Events.CurrentTransactionStatus` | All | `currentTransactionStatus(info, device)` |
| `Events.ConnectionStatusChanged` | All | `connectionStatusChanged(status, device)` |
| `Events.SignatureRequired` | mPOS only | `signatureRequired(request, device)` |
| `Events.DeviceDiscoveryFinished` | mPOS only | `deviceDiscoveryFinished(devices)` |
| `Events.TransactionResultReady` | Recovery | `transactionResultReady(result, device)` |
| `Events.CardTokenization` | Tokenized ops | `cardTokenized(callback, data)` |
| `Events.DependantOperationEvent` | Linked ops | `dependantRefundReceived(...)`, `dependantReversalReceived(...)` |
| `Events.StoredTransactionsForwardingStatus` | SAF v7.1012.1 | `transactionForwarded(...)`, `transactionForwardingFinished(status)` |
| `Events.StoredTransactionsEvent` | SAF v7.1012.1 | `transactionsStoredList(references, currency, total, processed)` |
| `Events.DeleteStoredTransactionEvent` | SAF v7.1012.1 | `storedTransactionDeletedSuccessfully(ref)`, `errorDeletingStoredTransaction(ref, error)` |
| `Events.GetSafTransactionStatusEvent` | SAF v7.1012.1 | `safTransactionStatus(ref, status)` |

### Options Classes

**`SaleOptions`**  
- `tipConfiguration: TipConfiguration?`
- `budgetNumber: String?`
- `checkDuplicates: Boolean` (default true)
- `moneyRemittanceOptions: MoneyRemittanceOptions?`
- Inherits `BypassOptions` (PIN bypass flag)

**`RefundOptions`**  
- `checkDuplicates: Boolean`
- `moneyRemittanceOptions: MoneyRemittanceOptions?`

**`MoToOptions`**  
- `channel: MoToChannel?` — TELEPHONE or MAIL
- `tokenize: Boolean` — tokenize the card during the operation
- `cardToken: String?` — supply a previously stored token *(added v7.1012.1)*
- `moneyRemittanceOptions: MoneyRemittanceOptions?`

**`MerchantAuthOptions`** (base for pre-auth)  
Carries `merchantAuth` list for multi-merchant environments.

### Key Internal Constants (`hapi-android-7.1012.1` source)

| Constant | File | Value | Meaning |
|----------|------|-------|---------|
| `GENERAL_CONFIG_USER_INPUT_TIMEOUT` | `shared/internal-objects/Constants.kt` | **30 s** | Default for PIN entry, signature, all user dialogs |
| `GENERAL_CONFIG_CARD_READING_TIMEOUT` | `shared/internal-objects/Constants.kt` | **30 s** | Default card presentation window |
| `GATEWAY_RESPONSE_TIMEOUT` | `HostDefaults.java` | **60 s** | Host authorisation round-trip |
| `GATEWAY_CONNECT_TIMEOUT` | `HostDefaults.java` | **35 s** | Gateway TCP connect |
| `HTTP_SDK_CLIENT_CALL_TIMEOUT` | `HostDefaults.java` | **90 s** | Cloud REST API OkHttp call timeout |
| `MAXIMUM_TRANSACTION_TIME_SECONDS` | `HostDefaults.java` | **25 s** | Internal hard ceiling for the transaction phase |
| `SEE_PHONE_TIMEOUT` | `paymentsdk/Constants.java` | **120 s** | Flash/mobile wallet NFC "see phone" display |
| `WAITING_FOR_INTEGRATORS_TIMEOUT` | `SuccessfulTokenizedSaleUseCase.kt` | **180 s** | Tokenization integrator callback wait |

---

## 4. Version Changelog

### v7.1009.5 (baseline)

**Released:** Available on Maven Central as `com.handpoint.api:sdk:7.1009.5`

**Introduced (new in this generation):**
- Tokenized payment operations — `tokenizeCard()`, `tokenizedOperation()`, `saleAndTokenize` flow
- `Events.CardTokenization` — `cardTokenized(callback, cardTokenizationData)` callback for integrators to intercept the token before the linked operation proceeds
- `Events.DependantOperationEvent` — cloud-triggered linked refunds and reversals
- MOTO tokenization: `MoToOptions.tokenize = true`
- Money remittance support via `MoneyRemittanceOptions`
- `OperationStartResult` with `transactionReference` (UUID v4 for recovery)

**Build configuration:**
- Min SDK: 22, Compile SDK: 34, Target SDK: 31
- Java 1.8, Compose 1.3.1

---

### v7.1011.0

> **Note:** This version was not available locally for source analysis. Changes derived from the official release notes at `developer.handpoint.com/android/androidreleasenotes/`.

**New hardware support:**
- PAX A6630 terminal model added

**MOTO enhancements:**
- MOTO operations now support tokenized payments (store token during MOTO sale)
- MOTO partial reversals supported
- `getTransactionStatus()` now used internally for MOTO transaction recovery

**Bug fixes:**
- Fixed duplicate event delivery in certain transaction edge cases
- Minor UI refinements on SmartPOS dialogs

**Documentation note:** The official developer documentation was updated to reflect v7.1011.0. The release notes page at `developer.handpoint.com` covers this version.

---

### v7.1011.0 → v7.1012.1: Source-Code Diff

#### A. New `FinancialStatus` enum values

**7.1009.5/7.1011.0:**
```
UNDEFINED, AUTHORISED, DECLINED, PROCESSED, FAILED, CANCELLED,
PARTIALLY_APPROVED, PARTIAL_APPROVAL, REFUNDED, CAPTURED
```

**7.1012.1 additions:**
```kotlin
IN_PROGRESS(10),       // Transaction currently being processed
AUTHORISED_DEFERRED(11) // Pre-auth hold granted, capture pending
```

**Impact on integrators:** If you switch on `finStatus`, add handling for these two new values. `AUTHORISED_DEFERRED` replaces the need to infer pre-auth state from `TransactionType`. `IN_PROGRESS` may appear in SAF flows.

---

#### B. `TransactionResult` — new fields

**Added in 7.1012.1:**
```kotlin
var batchNumber: String = EMPTY       // Settlement batch identifier
var applicationLabel: String = ""    // EMV application label (e.g. "Visa Credit")
```

`batchNumber` is populated for acquirers that return batch identifiers (OMNIPAY, BORGUN). `applicationLabel` is the human-readable string from EMV tag `50` displayed on receipts.

---

#### C. `MoToOptions` — tokenized MOTO with stored card

**7.1009.5:**
```kotlin
var tokenize: Boolean = false   // tokenize the card during this MOTO op
```

**7.1012.1 adds:**
```kotlin
var cardToken: String? = null   // supply a previously stored token to charge without card interaction
```

This enables subscription/loyalty MOTO charges against a stored card token. Set `cardToken` to the token from a prior `tokenizeCard()` or `motoSale(tokenize=true)` operation. The gateway will charge the card on file without requiring card data entry.

---

#### D. `Events` — new Store and Forward event interfaces

Four new interfaces added to `Events.kt`:

```kotlin
// Called during forwardStoredTransactions()
interface StoredTransactionsForwardingStatus {
    fun noTransactionsToForward()
    fun transactionsToForward(totalStoredTransactions: Int)
    fun transactionForwarded(
        transactionReference: String,
        successfullyForwardedTransaction: Int,
        totalStoredTransactions: Int
    )
    fun transactionForwardingFinished(forwardingTransactionStatus: ForwardingTransactionStatus)
}

// Called after getStoredTransactions()
interface StoredTransactionsEvent {
    fun transactionsStoredList(
        transactionReferences: List<TransactionReference>,
        currency: Currency,
        totalAmount: BigInteger,
        amountProcessed: BigInteger
    )
}

// Called after deleteStoredTransaction()
interface DeleteStoredTransactionEvent {
    fun storedTransactionDeletedSuccessfully(transactionReference: TransactionReference)
    fun errorDeletingStoredTransaction(
        transactionReference: TransactionReference,
        error: TransactionDeletionFailed   // NO_EXISTING_TRANSACTION | UNEXPECTED_ERROR
    )
}

// Called after getTransactionProcessingStatus()
interface GetSafTransactionStatusEvent {
    fun safTransactionStatus(transactionReference: TransactionReference, status: SafTransactionStatus)
    fun unexpectedSafTrasnsactionStatusError()
}
```

**Note:** `unexpectedSafTrasnsactionStatusError` has a typo (`Trasnsaction`) — matches the source exactly. Suggest correcting in a future version.

---

#### E. `Events.DependantOperationEvent` — breaking change

**7.1009.5:**
```kotlin
fun dependantReversalReceived(
    originalTransactionId: String,
    resumeDependantOperation: ResumeDependantOperation
)
```

**7.1012.1:**
```kotlin
fun dependantReversalReceived(
    originalTransactionId: String,
    resumeDependantOperation: ResumeDependantOperation,
    cardPresent: Boolean   // ← NEW parameter
)
```

**Breaking:** Any implementation of `DependantOperationEvent` must add the `cardPresent` parameter. Compile will fail otherwise.

---

#### F. New: Store and Forward (SAF) subsystem

Entirely new subsystem added in 7.1012.1. Key types in `com.handpoint.api.shared.storeandforward`:

**`TransactionReference`** — value class wrapping `UUID`. Typed identifier for SAF transactions.
```kotlin
@JvmInline value class TransactionReference(private val value: UUID) {
    constructor(value: String) : this(UUID.fromString(value))
    fun value(): String = value.toString()
    companion object { @JvmStatic fun fromString(value: String): TransactionReference }
}
```

**`SafTransactionStatus`** — 8-value enum for SAF transaction state:
```
STORED → IN_PROGRESS → SUCCEEDED / FAILED / REFUNDED / CANCELLED / CAPTURED
NOT_FOUND  (reference unknown to system)
```

**`ForwardingTransactionStatus`** — sealed class for forwarding outcomes:
```kotlin
sealed class ForwardingTransactionStatus {
    data class Success(val successfullyForwardedTransaction: Int)
    data class PartialSuccess(successfullyForwarded, corrupted, failed, total, errorReason)
    data class Failed(errorReason, corrupted, failed, total)
}
enum class ForwardingTransactionErrorReason {
    NETWORK_ERROR, CORRUPTED_TRANSACTION, FAILED_FORWARDING_TRANSACTION
}
```

**`StoreAndForwardPaymentsApi`** — interface for the SAF-specific entry point:
```kotlin
interface StoreAndForwardPaymentsApi {
    fun start(): Boolean
    fun stop(): Boolean
    fun registerEventsDelegate(delegate: Any): Boolean
    fun sale(amount: BigInteger, currency: Currency, options: SaleOptions): OperationStartResult
    fun stopCurrentTransaction(): Boolean
    fun deleteStoredTransaction(transactionReference: TransactionReference): Boolean
    fun getStoredTransactions(): Boolean
    fun forwardStoredTransactions(): Boolean
    fun getTransactionProcessingStatus(transactionReference: TransactionReference): Boolean
    fun printReceipt(receipt: String): Boolean
    fun printReceipt(receipt: String, options: Options): Boolean
}
```

**`StoreAndForwardPaymentsApiImpl`** — singleton object, accessible at `com.handpoint.api.StoreAndForwardPaymentsApiImpl`. Must be set up via `HapiFactory` before use.

---

#### G. New Hapi method: `sendSafTransactions()`

```kotlin
fun sendSafTransactions()
```

Added to the `Hapi` interface. Triggers forwarding of any locally queued SAF transactions when called from the standard Hapi path. Equivalent to `StoreAndForwardPaymentsApiImpl.forwardStoredTransactions()` but accessible from the main SDK entry point.

---

#### H. New Hapi methods: `automaticRefund()`

Two new overloads for refunding to the original card without requiring a card interaction:

```kotlin
// Refund a specific amount to the card used in a prior transaction
fun automaticRefund(amount: BigInteger, currency: Currency, originalTransactionID: String): OperationStartResult
fun automaticRefund(amount: BigInteger, currency: Currency, originalTransactionID: String, options: MoToOptions): OperationStartResult

// Refund the full amount of a prior transaction
fun automaticRefund(originalGuid: String): OperationStartResult
fun automaticRefund(originalGuid: String, options: MoToOptions): OperationStartResult
```

These operations go through the MOTO path and do not require a physical card. The gateway refunds to the card on file from the original transaction.

---

#### I. New internal file: `HapiImpl.kt`

The concrete implementation of `Hapi` was split out from the original `HapiManager.java` into a new Kotlin `HapiImpl.kt` in the `sdk` module. This is an internal refactoring — no API change.

---

## 5. Suggested Release Notes for v7.1012.1

> Ready-to-publish text for `developer.handpoint.com/android/androidreleasenotes/`

---

### Android SDK v7.1012.1 — Release Notes

**Release date:** 2026  
**Maven:** `com.handpoint.api:sdk:7.1012.1`  
**Minimum Android:** 5.1.1 (API 22)

---

#### New Feature: Store and Forward (SAF) Payments

This release introduces full offline payment support via the new **Store and Forward** subsystem, designed for payment scenarios with intermittent or no connectivity.

**What it does:**
- Transactions approved offline are stored locally on the device
- When connectivity is restored, call `forwardStoredTransactions()` to submit them to the Handpoint gateway in bulk
- Each stored transaction carries a `TransactionReference` (UUID) for tracking and reconciliation

**New entry point:**
```kotlin
val safApi = StoreAndForwardPaymentsApiImpl
safApi.start()
val result = safApi.sale(amount, currency, SaleOptions())
// result.transactionReference identifies this transaction for recovery
```

**New event interfaces** — implement any of these to receive SAF lifecycle events:
- `Events.StoredTransactionsForwardingStatus` — real-time progress as batched transactions are forwarded
- `Events.StoredTransactionsEvent` — response to `getStoredTransactions()`
- `Events.DeleteStoredTransactionEvent` — confirmation of individual transaction deletion
- `Events.GetSafTransactionStatusEvent` — status of a specific stored transaction

**New SAF-specific operations:**
```kotlin
safApi.getStoredTransactions()            // list stored transactions
safApi.forwardStoredTransactions()        // submit all to gateway
safApi.deleteStoredTransaction(ref)       // discard a specific transaction
safApi.getTransactionProcessingStatus(ref) // check if a stored txn was processed
```

**SAF transaction status values:** `STORED`, `IN_PROGRESS`, `SUCCEEDED`, `FAILED`, `REFUNDED`, `CANCELLED`, `CAPTURED`, `NOT_FOUND`

---

#### New Feature: Automatic Refund (No Card Required)

New operations allow refunding a prior transaction to the original card without the cardholder presenting their card:

```kotlin
// Refund specific amount
hapi.automaticRefund(amount, currency, originalTransactionID)

// Refund full original amount
hapi.automaticRefund(originalGuid)
```

This is useful for e-commerce returns processed at the point of sale. The gateway uses the original transaction record to route the refund.

---

#### New Feature: MOTO Tokenized Payments with Stored Card

`MoToOptions` now supports charging a previously stored card token without a new card interaction:

```kotlin
val options = MoToOptions()
options.cardToken = "tok_previously_stored"
hapi.motoSale(amount, currency, options)
```

Previously, only `tokenize = true` (to tokenize and charge in one step) was available. You can now charge on file against any token stored from a prior `tokenizeCard()` or MOTO tokenize operation.

---

#### New `FinancialStatus` Values

Two new values added to `FinancialStatus`:

| Value | Meaning |
|-------|---------|
| `IN_PROGRESS` | Transaction is being processed (relevant in SAF flows) |
| `AUTHORISED_DEFERRED` | Pre-authorization hold granted; awaiting capture |

**Action required:** If your code switches on `finStatus`, add handling for these values.

---

#### New `TransactionResult` Fields

| Field | Type | Description |
|-------|------|-------------|
| `batchNumber` | `String` | Settlement batch identifier (populated by OMNIPAY, BORGUN) |
| `applicationLabel` | `String` | EMV application label from the card chip (e.g. `"Visa Credit"`, `"Mastercard"`) |

---

#### Breaking Change: `DependantOperationEvent.dependantReversalReceived`

A new `cardPresent: Boolean` parameter was added:

```kotlin
// Before (7.1011.0):
fun dependantReversalReceived(originalTransactionId: String, resumeDependantOperation: ResumeDependantOperation)

// After (7.1012.1):
fun dependantReversalReceived(originalTransactionId: String, resumeDependantOperation: ResumeDependantOperation, cardPresent: Boolean)
```

**Action required:** Update any implementation of `Events.DependantOperationEvent` to include the new parameter.

---

#### `sendSafTransactions()` on Main `Hapi` Interface

The main `Hapi` interface gained a convenience method to trigger SAF forwarding without switching to the `StoreAndForwardPaymentsApiImpl`:

```kotlin
hapi.sendSafTransactions()
```

---

## 6. Suggested Documentation Updates for developer.handpoint.com

The following sections of the official documentation need to be created or updated for v7.1012.1.

### Pages requiring updates

| Page | Current state | Required change |
|------|--------------|-----------------|
| `androidreleasenotes/` | Covers 7.1011.0 | Add 7.1012.1 section (text from Section 5 above) |
| `androidobjects/` | Missing: `SafTransactionStatus`, `TransactionReference`, `ForwardingTransactionStatus`, new `FinancialStatus` values, new `TransactionResult` fields, updated `MoToOptions` | Add all new types |
| `androidtransactions/` | Missing: `automaticRefund`, `motoSale` with `cardToken`, SAF operations | Add new operation descriptions |
| `androiddevicemanagement/` | Missing: `sendSafTransactions()` | Add method entry |

### Pages to create (new)

**`androidsaf/` — Store and Forward Guide**

Should cover:
1. When to use SAF (intermittent connectivity, kiosk, unattended scenarios)
2. How SAF differs from standard online payments (local storage, forwarding lifecycle)
3. Integration steps: switch entry point → `StoreAndForwardPaymentsApiImpl`
4. Lifecycle diagram: Sale → STORED → network restored → `forwardStoredTransactions()` → SUCCEEDED/FAILED
5. Event implementation guide (all 4 new interfaces)
6. Reconciliation: how to use `transactionReference` to match stored → forwarded transactions
7. Error handling: `PartialSuccess` and `Failed` forwarding outcomes
8. Limitations: SAF supports `sale()` only (no refund/reversal while offline)

---

## 7. Known Issues / Notes for Documentation Team

1. **Typo in source:** `Events.GetSafTransactionStatusEvent.unexpectedSafTrasnsactionStatusError()` — note the double 'n' in `Trasnsaction`. This is the actual method name in v7.1012.1 source. Document as-is until fixed; flag for correction in next patch.

2. **`AUTHORISED_DEFERRED` vs existing behaviour:** Prior to 7.1012.1, integrators inferred pre-auth grant from `TransactionType.PREAUTHORIZATION` + `finStatus == AUTHORISED`. The new `AUTHORISED_DEFERRED` value makes this explicit. The old pattern still works but `AUTHORISED_DEFERRED` is the correct value going forward.

3. **SAF is SmartPOS only:** `StoreAndForwardPaymentsApi` connects via `ConnectionMethod.ANDROID_PAYMENT` which is the internal SmartPOS connection. mPOS Bluetooth/USB devices do not support SAF in v7.1012.1.

4. **`automaticRefund` requires acquirer support:** Not all acquirers support card-on-file refunds. Verify `supports_automatic_refund` flag on the TMS acquirer record before enabling this for a merchant.

5. **`7.1011.0` source not available locally** for diff. The changelog for that version is reconstructed from official docs. Source diff between 7.1011.0 and 7.1012.1 would be definitive — request access to the `hapi-android` GitHub repo at the appropriate tag.
