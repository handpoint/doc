---
title: Android SDK — Events Reference
sidebar_position: 11
description: Complete reference for all Android SDK Events interfaces — SmartposRequired, MposRequired, PosRequired, Log, ReceiptEvent, SignatureRequired, and all optional event interfaces.
---

# Android SDK — Events Reference

The Handpoint Android SDK delivers all results and status updates through listener interfaces in the `Events` namespace. Your delegate class implements one or more of these interfaces and is registered via `api.registerEventsDelegate(this)`.

---

## Required interfaces

Implement exactly one of the following depending on your terminal type. Your delegate class must implement every method of the chosen interface — the SDK will not compile or will throw at runtime if any method is missing.

### `Events.SmartposRequired`

For PAX / Telpo SmartPOS terminals (`ConnectionMethod.ANDROID_PAYMENT`). Implement this when your app runs directly on the terminal.

```kotlin
class MyEventHandler : Events.SmartposRequired {

    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
        // Terminal connection state changed. See ConnectionStatus enum for all values.
        // Key states: Connected, CloudConnected, Disconnected, NotConfigured
    }

    override fun currentTransactionStatus(statusInfo: StatusInfo, device: Device) {
        // Mid-transaction status updates AND the InitialisationComplete signal.
        // statusInfo.status == StatusInfo.Status.InitialisationComplete means the
        // SDK is fully ready — call recoverIfPending() and enable transaction buttons.
        when (statusInfo.status) {
            StatusInfo.Status.InitialisationComplete -> { /* SDK ready */ }
            StatusInfo.Status.UserCancelled -> { /* dismiss waiting overlay */ }
            else -> { /* mid-transaction update — show statusInfo.message in UI */ }
        }
    }

    override fun endOfTransaction(result: TransactionResult, device: Device) {
        // Final result of every financial operation. Fires at most once per transaction.
        // Branch on result.finStatus for the outcome.
    }

    override fun transactionResultReady(result: TransactionResult, device: Device) {
        // Fired by getTransactionStatus() polling or autoRecoverTransactionResult.
        // Implement the idempotency guard — this can fire concurrently with endOfTransaction.
    }
}

// Register the delegate after creating the Hapi instance
api.registerEventsDelegate(myEventHandler)
```

| Method | Signature | When it fires |
|---|---|---|
| `connectionStatusChanged` | `(status: ConnectionStatus, device: Device)` | Every time the terminal connection state changes. |
| `currentTransactionStatus` | `(statusInfo: StatusInfo, device: Device)` | Every mid-transaction update, and `InitialisationComplete` on SDK ready. |
| `endOfTransaction` | `(result: TransactionResult, device: Device)` | Final result of every financial operation. At most once per transaction. |
| `transactionResultReady` | `(result: TransactionResult, device: Device)` | Result from `getTransactionStatus()` polling or `autoRecoverTransactionResult` reconnect. |

---

### `Events.MposRequired`

For HiLite / Bluetooth card readers (`ConnectionMethod.BLUETOOTH`). Extends `SmartposRequired` with two additional methods for device discovery and signature.

```kotlin
class MyEventHandler : Events.MposRequired {

    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) { }
    override fun currentTransactionStatus(statusInfo: StatusInfo, device: Device) { }
    override fun endOfTransaction(result: TransactionResult, device: Device) { }
    override fun transactionResultReady(result: TransactionResult, device: Device) { }

    // Called after api.searchDevices(ConnectionMethod.BLUETOOTH) completes.
    // Connect to the desired terminal from this list.
    override fun deviceDiscoveryFinished(devices: List<Device>) {
        if (devices.isNotEmpty()) api.connect(devices[0])
    }

    // HiLite cannot render a signature screen — your app must present one.
    // Call api.signatureResult(accepted) to respond.
    override fun signatureRequired(signatureRequest: SignatureRequest, device: Device) {
        // signatureRequest.merchantReceipt — display to let merchant verify signature
        // signatureRequest.timeout — time (seconds) before auto-cancel
        val accepted = /* show signature UI */ true
        api.signatureResult(accepted)
    }
}
```

| Method | Signature | When it fires |
|---|---|---|
| `deviceDiscoveryFinished` | `(devices: List<Device>)` | After `api.searchDevices()` completes. May fire multiple times as devices come in range. |
| `signatureRequired` | `(signatureRequest: SignatureRequest, device: Device)` | Card requires manual signature verification. PAX SmartPOS never fires this — the terminal handles it internally. |

---

### `Events.PosRequired`

For integrations supporting **both** PAX SmartPOS and HiLite Bluetooth terminals from a single delegate class. Combines all methods from `SmartposRequired` and `MposRequired`.

```kotlin
class MyEventHandler : Events.PosRequired {
    // Implement all six methods from SmartposRequired + MposRequired
}
```

Use this when building a universal POS app that connects to different terminal types based on merchant configuration.

---

## Optional interfaces

Add any of these to your delegate class and register with the same `api.registerEventsDelegate(this)` call. The SDK routes events to your delegate based on which interfaces it implements at runtime.

### `Events.Log`

Receive diagnostic output from the SDK and terminal.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.Log {

    // Fires for every internal SDK log entry as it occurs.
    override fun onMessageLogged(level: LogLevel, message: String) {
        Log.d("SDK-LOG", "[${level}] $message")
    }

    // Fires when a full terminal log dump completes (after api.getDeviceLogs()).
    override fun deviceLogsReady(logs: String, device: Device) {
        Log.d("SDK-LOG", "Terminal logs (${logs.length} chars)")
        // logs is the full log string — save to file for support submission
    }
}
```

| Method | When it fires |
|---|---|
| `onMessageLogged(level, message)` | Every SDK log entry. Useful for routing SDK output to your own logging infrastructure. |
| `deviceLogsReady(logs, device)` | After `api.getDeviceLogs()` returns the full terminal log dump. |

---

### `Events.SignatureRequired`

Handle signature verification in your app UI. Required for HiLite/Bluetooth. Optional but safe for PAX SmartPOS (SDK ignores `signatureResult()` calls on PAX).

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.SignatureRequired {

    override fun signatureRequired(signatureRequest: SignatureRequest, device: Device) {
        // Display signatureRequest.merchantReceipt and capture signature
        // Respond: true = signature accepted, false = rejected
        api.signatureResult(true)  // PAX ignores this; HiLite uses it
    }
}
```

**Recommendation:** Implement this even in a PAX-only integration if you plan to add HiLite support later. Call `api.signatureResult(true)` unconditionally — the SDK ignores it on PAX.

---

### `Events.MessageHandling`

Receive show/hide messages that the SDK wants displayed on the Android host screen. Use this to integrate SDK prompts into your own UI instead of relying on `showSDKUIComponents`.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.MessageHandling {

    override fun showMessage(message: String, dismissible: Boolean, duration: Int) {
        // Show `message` on your UI.
        // If duration == 0: keep visible until hideMessage() fires.
        // If duration > 0: auto-dismiss after `duration` milliseconds.
        // If dismissible == true: allow merchant to dismiss manually.
        runOnUiThread { showStatusOverlay(message, dismissible, duration) }
    }

    override fun hideMessage(message: String) {
        // Dismiss the message previously shown by showMessage().
        runOnUiThread { hideStatusOverlay() }
    }
}
```

| Method | Parameters | Description |
|---|---|---|
| `showMessage` | `message: String, dismissible: Boolean, duration: Int` | Display a message. `duration` is milliseconds; `0` means keep until `hideMessage` fires. |
| `hideMessage` | `message: String` | Dismiss the currently displayed message. |

---

### `Events.ReceiptEvent`

Receive receipt content as inline HTML approximately 1.5 seconds after `endOfTransaction`. This is the lowest-latency receipt delivery path.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.ReceiptEvent {

    override fun receiptIsReady(guid: String, merchantReceipt: String, customerReceipt: String) {
        // customerReceipt is full HTML — pass directly to printReceipt()
        // No URL fetch needed, no S3 wait.
        api.printReceipt(customerReceipt)
    }
}
```

| Parameter | Description |
|---|---|
| `guid` | Transaction GUID — same as `TransactionResult.transactionID`. |
| `merchantReceipt` | Full merchant receipt as HTML. |
| `customerReceipt` | Full customer receipt as HTML. |

Fires even when `settings.receiptsAsURLs = true`. In URL mode the inline HTML may differ slightly from the hosted version — if you need the exact hosted receipt (e.g. for email delivery), use `Events.ReceiptUploadingEvent` instead.

---

### `Events.ReceiptUploadingEvent`

Fires when both receipts finish uploading to cloud storage (4–8 seconds after `endOfTransaction`). The URLs returned are immediately accessible (HTTP 200 guaranteed). Use this when you need the hosted URL.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.ReceiptUploadingEvent {

    override fun receiptsUploaded(guid: String, merchantUrl: String, customerUrl: String) {
        // URLs are safe to fetch now — both return HTTP 200
        api.printReceipt(customerUrl)
        // Or pass customerUrl to your email/web receipt system
    }
}
```

| Parameter | Description |
|---|---|
| `guid` | Transaction GUID. |
| `merchantUrl` | Hosted merchant receipt URL (`https://receipts.handpoint.com/...`). |
| `customerUrl` | Hosted customer receipt URL. |

:::caution Do not use `result.customerReceipt` from `endOfTransaction` when `receiptsAsURLs = true`
The URL exists in the result immediately but the content returns HTTP 404 for 4–8 seconds while S3 upload completes. Always wait for `receiptsUploaded()` before using the URL.
:::

---

### `Events.CardBrandDisplay`

Receive notifications about supported card brands and the brand of the card being used during a transaction. Used to update card brand logos in your UI.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.CardBrandDisplay {

    // Fires at the start of a transaction with the brands the terminal supports.
    override fun supportedCardBrands(cardBrandsList: List<CardBrands>) {
        // Show card brand logos for: cardBrandsList
    }

    // Fires when the card brand of the presented card is identified.
    override fun readCard(usedCard: CardBrands) {
        // Highlight the matching brand logo
    }
}
```

`CardBrands` enum values: `VISA`, `MASTERCARD`, `MAESTRO`, `AMEX`, `DISCOVER`, `DINERS`, `JCB`, `INTERAC`, `OTHER`.

---

### `Events.CardTokenization`

Receive an intermediate callback during a tokenization operation, before the transaction proceeds. Allows your app to inspect or store the token before the payment completes.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.CardTokenization {

    override fun cardTokenized(callback: ResumeCallback, cardTokenizationData: CardTokenizationData) {
        // cardTokenizationData.token — the card token
        // cardTokenizationData.expiryDate — token expiry
        // cardTokenizationData.tenderType — CREDIT / DEBIT
        // cardTokenizationData.issuerCountryCode — ISO 3166-1

        // Store the token, then resume the operation:
        callback.continueWithValue(true)  // true = proceed; false = abort
    }
}
```

---

### `Events.PrinterEvents`

Receive success and error notifications from the terminal printer.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.PrinterEvents {

    override fun printSuccess() {
        // Receipt printed successfully
    }

    override fun printError(error: PrintError) {
        // Handle print error — check PrintError enum for all codes
    }
}
```

| Method | Parameters | Description |
|---|---|---|
| `printSuccess()` | — | The print operation completed successfully. |
| `printError(error: PrintError)` | `error: PrintError` | The print operation failed. See [`PrintError`](/reference/android-objects-reference#printerror). |

---

### `Events.ReportResult`

Receive the result of `api.getTransactionsReport()` or `api.getEMVConfiguration()`.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.ReportResult {

    override fun reportResult(type: TypeOfResult, report: String, status: Boolean, device: Device) {
        when (type) {
            TypeOfResult.REPORT -> { /* handle transaction report */ }
            TypeOfResult.EMVCONFIGURATION -> { /* handle EMV config */ }
            TypeOfResult.BLUETOOTHNAME -> { /* handle BT name response */ }
            TypeOfResult.STATUS -> { /* handle status response */ }
        }
    }
}
```

| Parameter | Type | Description |
|---|---|---|
| `type` | `TypeOfResult` | Identifies which operation produced this result. |
| `report` | `String` | Report content (text, CSV, or JSON depending on type). |
| `status` | `Boolean` | `true` if the operation completed successfully. |
| `device` | `Device` | The terminal that produced the report. |

---

### `Events.TransactionStarted`

Fires when a transaction is initiated through the Cloud API channel. Use this to update your UI immediately when a cloud-initiated transaction begins on the terminal.

:::note
This interface is **only** available for cloud-enabled devices. Check `DeviceCapabilities.cloudApi` from `Events.DeviceCapabilitiesReady`.
:::

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.TransactionStarted {

    override fun transactionStarted(
        transactionType: TransactionType,
        amount: BigInteger,
        currency: Currency,
        transactionReference: String
    ) {
        // Show transaction-in-progress UI
        // transactionReference is empty string if not supplied by the cloud caller
    }
}
```

| Parameter | Type | Description |
|---|---|---|
| `transactionType` | `TransactionType` | Type of transaction started (e.g. `SALE`, `REFUND`). |
| `amount` | `BigInteger` | Amount in minor units (e.g. `1000` = £10.00). |
| `currency` | `Currency` | Transaction currency. |
| `transactionReference` | `String` | Transaction reference from the cloud request, or empty string if not provided. |

---

### `Events.NetworkStatusChanged`

Fires when the terminal's network connectivity changes.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.NetworkStatusChanged {

    override fun networkStatusChanged(networkStatus: NetworkStatus, device: Device) {
        // networkStatus — new network state
    }
}
```

| Parameter | Type | Description |
|---|---|---|
| `networkStatus` | `NetworkStatus` | New network status. |
| `device` | `Device` | The terminal that reported the change. |

---

### `Events.DependantRefundReceived`

Fires during a cloud tokenized refund flow. The terminal has tokenized the card and is waiting for the host app to authorize and execute the dependant refund operation.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.DependantRefundReceived {

    override fun dependantRefundReceived(executor: ResumeDependantOperationExecutor) {
        // Call executeDependantOperation() to proceed, or cancel()
        executor.executeDependantOperation(
            BigInteger.valueOf(1000),
            Currency.USD,
            "original-transaction-id"
        )
    }
}
```

The `executor` parameter implements [`ResumeDependantOperationExecutor`](/reference/android-objects-reference#resumedependantoperationexecutor-interface).

---

### `Events.DependantReversalReceived`

Fires during a cloud tokenized reversal flow. The terminal has tokenized the card and is waiting for the host app to execute the dependant reversal.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.DependantReversalReceived {

    override fun dependantReversalReceived(executor: ResumeDependantOperationExecutor) {
        executor.executeDependantOperation(
            BigInteger.valueOf(1000),
            Currency.USD,
            "original-transaction-id"
        )
    }
}
```

---

### `Events.DeviceCapabilitiesReady`

Fires when the terminal reports its capabilities to the SDK.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.DeviceCapabilitiesReady {

    override fun deviceCapabilities(capabilities: DeviceCapabilities, device: Device) {
        val hasPrinter = capabilities.printer    // Boolean
        val hasCloudApi = capabilities.cloudApi  // Boolean
    }
}
```

---

### `Events.HardwareStatusChanged`

Fires when hardware connected to the terminal changes state (e.g. a scanner or peripheral attached to the device).

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.HardwareStatusChanged {

    override fun hardwareStatusChanged(status: HardwareStatus, hardware: ConnectionMethod) {
        // hardware = the ConnectionMethod whose state changed
        // status = new HardwareStatus
    }
}
```

---

### `Events.PhysicalKeyboardEvent`

Receive key press events from the PAX A80's physical keyboard.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.PhysicalKeyboardEvent {

    override fun onKeyPressed(key: String) {
        // key values: "0"-"9", "GREEN", "ORANGE", "RED", "FUNC"
    }
}
```

`PaxA80Keys` string values: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `GREEN`, `ORANGE`, `RED`, `FUNC`.

---

### `Events.Status` (composite)

Convenience composite interface extending `ConnectionStatusChanged`, `HardwareStatusChanged`, `CurrentTransactionStatus`, and `NetworkStatusChanged`. Use when you want a single delegate to cover all connection and status events.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.Status {

    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) { }
    override fun hardwareStatusChanged(status: HardwareStatus, hardware: ConnectionMethod) { }
    override fun currentTransactionStatus(statusInfo: StatusInfo, device: Device) { }
    override fun networkStatusChanged(networkStatus: NetworkStatus, device: Device) { }
}
```

**Extends:** `ConnectionStatusChanged` · `HardwareStatusChanged` · `CurrentTransactionStatus` · `NetworkStatusChanged`

---

### `Events.PaymentProvider` (composite)

Composite interface covering all payment-related events. Extends `SignatureRequired`, `EndOfTransaction`, `OnMessageLogged`, and `CurrentTransactionStatus`.

```kotlin
class MyEventHandler : Events.SmartposRequired, Events.PaymentProvider {

    override fun signatureRequired(signatureRequest: SignatureRequest, device: Device) { }
    override fun endOfTransaction(result: TransactionResult, device: Device) { }
    override fun onMessageLogged(level: LogLevel, message: String) { }
    override fun currentTransactionStatus(statusInfo: StatusInfo, device: Device) { }
}
```

**Extends:** `SignatureRequired` · `EndOfTransaction` · `OnMessageLogged` · `CurrentTransactionStatus`

---

## Individual event interfaces

The SDK also exposes granular single-event interfaces for cases where you want to compose specific callbacks without implementing a full required interface. Register any combination with `api.registerEventsDelegate(this)`.

| Interface | Method | Description |
|---|---|---|
| `Events.ConnectionStatusChanged` | `connectionStatusChanged(status, device)` | Connection state changes only. |
| `Events.CurrentTransactionStatus` | `currentTransactionStatus(statusInfo, device)` | Mid-transaction status only. |
| `Events.EndOfTransaction` | `endOfTransaction(result, device)` | Transaction result only. |
| `Events.PendingResults` | `transactionResultReady(result, device)` | Recovery results only. |
| `Events.DeviceDiscoveryFinished` | `deviceDiscoveryFinished(devices)` | Device list from `searchDevices()`. |
| `Events.OnMessageLogged` | `onMessageLogged(level, message)` | SDK log entries. |
| `Events.NetworkStatusChanged` | `networkStatusChanged(networkStatus, device)` | Terminal network state changes. |
| `Events.PrinterEvents` | `printSuccess()` / `printError(error)` | Printer operation result. |
| `Events.ReportResult` | `reportResult(type, report, status, device)` | Transaction report or EMV config result. |
| `Events.TransactionStarted` | `transactionStarted(type, amount, currency, reference)` | Cloud-initiated transaction started (cloud-enabled devices only). |

---

## Registration pattern

Multiple delegates can be registered with `registerEventsDelegate`. Each receives all events for the interfaces it implements.

```kotlin
// Primary delegate
api.registerEventsDelegate(primaryHandler)

// Secondary delegate (e.g. for UI-specific events)
api.registerEventsDelegate(uiHandler)

// Remove a delegate when no longer needed
api.unregisterEventsDelegate(uiHandler)
```

:::caution Register before calling `connect()`
In SDK 7.1014.0+ RC builds, `HapiFactory.getAsyncInterface()` no longer auto-registers the delegate. You must call `api.registerEventsDelegate(this)` explicitly after creating the `Hapi` instance and before calling `api.connect()`. Without this call, all callbacks are silently dropped.
:::

---

## Threading

| Terminal type | SDK callback thread |
|---|---|
| `ConnectionMethod.ANDROID_PAYMENT` (PAX SmartPOS) | Main thread — safe to update UI directly. |
| `ConnectionMethod.BLUETOOTH` (HiLite) | Background thread — wrap all UI and listener calls in `Handler(Looper.getMainLooper()).post {}`. |

If you build a shared wrapper for both PAX and HiLite, always use `mainHandler.post` on listener calls to be safe on both paths.

---

## See also

- [Android SDK — Objects Reference](/reference/android-objects-reference) — all objects, enums, and options classes
- [Android SDK — Setup & Initialization](/reference/android-sdk-setup) — initialization pattern with `Events.SmartposRequired`
- [Android SDK — Integration Walkthrough](/reference/android-integration-walkthrough) — full recovery state machine and logging patterns
- [Transaction Result Object](/reference/transaction-result-object) — `TransactionResult` field reference
