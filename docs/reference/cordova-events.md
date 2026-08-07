---
title: Cordova — Events Reference
sidebar_position: 14
description: Complete reference for the Cordova plugin event system — event registration, payload schemas, and platform availability.
---

# Cordova — Events Reference

The Cordova plugin delivers all asynchronous SDK state changes (transaction results, connection changes, status updates) via a single persistent event handler. This is separate from the per-operation callbacks passed to each financial operation call.

## Registering the event handler

Call `handpoint.eventHandler()` **separately from** `handpoint.setup()`. The event handler must be registered before any operations are initiated.

```javascript
// Step 1 — initialize the SDK
handpoint.setup(
  {
    sharedSecret: "YOUR_SHARED_SECRET",
    automaticReconnection: true,
  },
  function(result) { console.log("Setup complete", result); },
  function(error) { console.error("Setup failed", error); }
);

// Step 2 — register the persistent event handler (separate call)
handpoint.eventHandler(
  function(event) {
    // event.event  → event name (string)
    // event.data   → event payload (object)
    switch (event.event) {
      case "endOfTransaction":
        handleResult(event.data.transactionResult);
        break;
      case "currentTransactionStatus":
        updateStatusDisplay(event.data.info.message);
        break;
      // ... handle other events
    }
  },
  function(error) { console.error("Event handler error:", error); }
);
```

All events share the same outer envelope:

```json
{
  "event": "<eventName>",
  "data": { ... }
}
```

---

## Priority events

### `endOfTransaction`

Fires when a financial operation completes. Use this as the primary result handler for all transactions.

**Android payload:**
```json
{
  "event": "endOfTransaction",
  "data": {
    "transactionResult": { ... },
    "device": { ... }
  }
}
```

**iOS payload:**
```json
{
  "event": "endOfTransaction",
  "data": {
    "transactionResult": { ... }
  }
}
```

The `transactionResult` object is the full [Transaction Result](/reference/transaction-result-object). The `device` field is included on Android only.

---

### `currentTransactionStatus`

Fires repeatedly during an active transaction to report in-progress status. Use this to update your UI (e.g. "Waiting for card", "Authorising…").

**Android payload:**
```json
{
  "event": "currentTransactionStatus",
  "data": {
    "info": { ... },
    "device": { ... }
  }
}
```

**iOS payload:**
```json
{
  "event": "currentTransactionStatus",
  "data": {
    "info": {
      "cancelAllowed": true,
      "deviceStatus": { ... },
      "message": "Authorising...",
      "status": "authorising"
    },
    "device": { ... }
  }
}
```

Android passes the full `StatusInfo` object serialized by Gson; iOS extracts only the four fields shown above. The `cancelAllowed` boolean indicates whether `handpoint.cancelRequest()` can be called at this point.

---

## All events

### Cross-platform events (Android + iOS)

| Event | `data` fields | Description |
|---|---|---|
| `endOfTransaction` | `transactionResult`, `device` (Android only) | Financial operation completed — check `transactionResult.finStatus` |
| `connectionStatusChanged` | `status` (string), `device` | Terminal connection state changed |
| `currentTransactionStatus` | `info` (StatusInfo), `device` | Mid-transaction status update |
| `deviceDiscoveryFinished` | `devices` (array) | `listDevices()` scan completed |
| `signatureRequired` | `merchantReceipt` (string), `device` | Terminal requires manual signature verification — display receipt and call `handpoint.signatureResult(accepted)` |

**`connectionStatusChanged` status values:**

| Value | Meaning |
|---|---|
| `"Connected"` | Terminal connected and ready |
| `"Connecting"` | Connection attempt in progress |
| `"Disconnected"` | Terminal disconnected |
| `"Diconnecting"` | Disconnection in progress |
| `"Initializing"` | Terminal initializing after connect |
| `"NotConfigured"` | Terminal connected but not configured |

:::note iOS typo
`"Diconnecting"` (missing the first `n`) is the exact string returned by the iOS SDK — match it exactly in your code.
:::

---

### Android-only events

| Event | `data` fields | Description |
|---|---|---|
| `networkStatusChanged` | `networkStatus`, `device` | Terminal network connectivity changed |
| `receiptsReady` | `merchantReceipt` (string HTML), `customerReceipt` (string HTML), `guid` (string) | Receipt HTML is ready for display or printing |
| `receiptsUploaded` | `merchantReceiptUrl` (string), `customerReceiptUrl` (string), `guid` (string) | Receipts uploaded to cloud storage (only fires when `getReceiptsAsURLs: true` in setup) |
| `transactionResultReady` | `transactionResult`, `device` | Transaction result available for retrieval |
| `cardTokenized` | `cardTokenizationData` | Card tokenization data ready during `tokenizedOperation` two-phase flow |
| `authStatus` | `info` (AuthenticationResponse) | mPOS authentication status update |
| `showMessage` | `message` (string), `dismissible` (string `"true"`/`"false"`), `duration` (string of integer ms) | SDK requests your app display a message; `dismissible` and `duration` are serialized as strings |
| `hideMessage` | `message` (string) | SDK requests your app hide a previously shown message |
| `hardwareStatusChanged` | `status` (HardwareStatus enum string), `connectionMethod` (ConnectionMethod enum string) | Hardware connection state changed |
| `transactionStarted` | `type` (string), `amount` (string), `currency` (ISO alpha string), `transactionReference` (string) | Transaction initiated on the terminal |
| `dependantRefundReceived` | `amount` (string), `currency` (string), `originalTransactionId` (string), `resumeDependantOperation` | Dependent refund awaiting execution — call `resumeDependantOperation()` to proceed |
| `dependantReversalReceived` | `originalTransactionId` (string), `resumeDependantOperation`, `cardPresent` (boolean) | Dependent reversal awaiting execution |
| `enrich` | `transactionResult` | Transaction result paused for enrichment (fires only when `enrichTransactionResult: true` in setup) |
| `printError` | `error` (PrintError object) | Printer encountered an error |
| `printSuccess` | _(empty `{}`)_ | Print completed successfully |
| `reportResult` | `htmlReport` (string) | `getTransactionsReport()` result ready |
| `deviceLogsReady` | `logs` (string), `device` | Device log data fetched |
| `controlCommand` | `command` (string), `payload` (string) | Internal device control command echoed from the SDK — values: `setKioskMode`, `setLocale`, `setPasswordProtection`, `setScreenBrightness` |
| `onMessageLogged` | `level` (LogLevel enum string), `message` (string) | SDK internal log message |
| `cardLanguage` | `locale` (SupportedLocales enum string) | Card language preference detected |
| `onKeyPressed` | `key` (string) | Physical keyboard key pressed on the terminal |
| `supportedCardBrands` | `cardBrandsList` (array of strings) | Terminal reports its supported card brands |
| `readCard` | `usedCard` (CardBrands enum string) | Card brand detected at card read |
| `webViewUpdated` | `success` (string `"true"`/`"false"`) | WebView content update completed |

---

### iOS-only events

| Event | `data` fields | Description |
|---|---|---|
| `exception` | `message` (string) | SDK error or unhandled exception |
| `scannerResults` | `scannedCodes` (array) | QR/barcode scan results from `enableScanner()` |
| `scannerOff` | _(empty `{}`)_ | Scanner deactivated |

---

## Platform availability summary

| Event | Android | iOS |
|---|---|---|
| `endOfTransaction` | Yes | Yes |
| `connectionStatusChanged` | Yes | Yes |
| `currentTransactionStatus` | Yes | Yes |
| `deviceDiscoveryFinished` | Yes | Yes |
| `signatureRequired` | Yes | Yes |
| `networkStatusChanged` | Yes | No |
| `receiptsReady` | Yes | No |
| `receiptsUploaded` | Yes | No |
| `transactionResultReady` | Yes | No |
| `cardTokenized` | Yes | No |
| `authStatus` | Yes | No |
| `showMessage` | Yes | No |
| `hideMessage` | Yes | No |
| `hardwareStatusChanged` | Yes | No |
| `transactionStarted` | Yes | No |
| `dependantRefundReceived` | Yes | No |
| `dependantReversalReceived` | Yes | No |
| `enrich` | Yes | No |
| `printError` | Yes | No |
| `printSuccess` | Yes | No |
| `reportResult` | Yes | No |
| `deviceLogsReady` | Yes | No |
| `controlCommand` | Yes | No |
| `onMessageLogged` | Yes | No |
| `exception` | No | Yes |
| `scannerResults` | No | Yes |
| `scannerOff` | No | Yes |
