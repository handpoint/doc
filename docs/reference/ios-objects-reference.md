---
id: ios-objects-reference
title: "iOS HiLite — Objects Reference"
sidebar_label: "iOS Objects Reference"
sidebar_position: 11
description: Complete reference for all iOS HiLite SDK objects, protocols, delegates, enums, and the FinanceResponseInfo result object.
---

# iOS HiLite — Objects Reference

This page is the authoritative reference for every class, protocol, delegate method, and enum in the Handpoint iOS HiLite SDK. For the step-by-step integration walkthrough, see the [iOS HiLite Integration Guide](/reference/ios-hilite-integration-guide).

:::info Threading
All delegate callbacks (`responseFinanceStatus:`, `responseStatus:`, `didConnect:`, etc.) are delivered on a **background thread**. Always dispatch to the main queue before touching UIKit or any UI state:

```objc
dispatch_async(dispatch_get_main_queue(), ^{
    self.statusLabel.text = info.status;
});
```

```swift
DispatchQueue.main.async {
    self.statusLabel.text = info.status
}
```
:::

---

## Core SDK classes

### `HeftManager`

The SDK entry point. Obtain the singleton instance with `sharedManager`. Set its `delegate` to receive discovery events, then call `startDiscovery` to find Bluetooth readers.

```objc
HeftManager *manager = [HeftManager sharedManager];
manager.delegate = self;
[manager startDiscovery];
```

**Properties:**

| Property | Type | Notes |
|---|---|---|
| `connectedCardReaders` | `NSArray` | All discovered terminals |
| `delegate` | `id<HeftDiscoveryDelegate>` | Receives discovery and connection callbacks |
| `version` | `NSString` | Current SDK version string |

**Methods:**

| Method | Returns | Notes |
|---|---|---|
| `+ sharedManager` | `HeftManager *` | Returns the singleton — call once and store the reference |
| `- startDiscovery` | `void` | Starts Bluetooth scan; fires `didFindAccessoryDevice:` per device found, then `didDiscoverFinished` |
| `- clientForDevice:sharedSecret:delegate:` | `void` | Creates a `HeftClient` connection; fires `didConnect:` on success |
| `- resetDevices` | `void` | Clears the discovered device list |

**`clientForDevice:sharedSecret:delegate:` parameters:**

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `device` | `HeftRemoteDevice *` | Yes | Device from `connectedCardReaders` or discovery |
| `sharedSecret` | `NSString *` | Yes | 64-character hex string — provided by Handpoint Integration Support |
| `delegate` | `NSObject<HeftStatusReportDelegate> *` | Yes | Object to receive all transaction and connection callbacks |

For Lightning (HiPro) readers, skip discovery and call `clientForDevice:…` directly using the device already present in `connectedCardReaders`.

---

### `HeftClient`

The transaction interface. Obtained via `didConnect:` — **do not call any financial operation before this callback fires.** All transaction methods return `BOOL` (`YES` if accepted and sent to the terminal; the actual result arrives asynchronously via `responseFinanceStatus:`).

**Properties:**

| Property | Type | Notes |
|---|---|---|
| `sharedSecret` | `NSString` | Shared secret used to authenticate this session |
| `mpedInfo` | `NSDictionary` | Terminal details (serial number, firmware, etc.) |
| `isTransactionResultPending` | `BOOL` | `YES` if a previous transaction result is waiting for recovery — check this in `didConnect:` |

**`mpedInfo` dictionary keys:**

| Key constant | Value |
|---|---|
| `kSerialNumberInfoKey` | Terminal serial number |
| `kPublicKeyVersionInfoKey` | Public key version |
| `kEMVParamVersionInfoKey` | EMV parameters version |
| `kAppNameInfoKey` | Terminal application name |
| `kAppVersionInfoKey` | Terminal application version |
| `kManufacturerCodeInfoKey` | Hardware manufacturer |
| `kModelCodeInfoKey` | Hardware model |
| `kGeneralParamInfoKey` | General parameter version |
| `kXMLDetailsInfoKey` | Full XML details string |

**Financial methods:**

| Method | Parameters | Returns | Notes |
|---|---|---|---|
| `saleWithAmount:currency:cardholder:` | `amount` (NSInteger), `currency` (NSString), `cardholder` (BOOL) | `BOOL` | Basic sale |
| `saleWithAmount:currency:cardholder:options:` | + `options` (SaleOptions) | `BOOL` | Sale with options |
| `saleAndTokenizeWithAmount:currency:` | `amount`, `currency` | `BOOL` | Sale + tokenize card simultaneously |
| `saleAndTokenizeWithAmount:currency:options:` | + `options` (SaleOptions) | `BOOL` | Sale + tokenize with options |
| `saleReversalWithAmount:currency:transactionId:options:` | `amount`, `currency`, `transactionId` (NSString), `options` (Options) | `BOOL` | Void a previous sale — same day only |
| `refundWithAmount:currency:transaction:` | `amount`, `currency`, `transaction` (NSString) | `BOOL` | Linked refund |
| `refundWithAmount:currency:transaction:options:` | + `options` (MerchantAuthOptions) | `BOOL` | Linked refund with options |
| `refundReversalWithAmount:currency:transactionId:options:` | `amount`, `currency`, `transactionId`, `options` (Options) | `BOOL` | Void a previous refund — same day only |
| `tokenizeCard` | — | `BOOL` | Tokenize card without payment |
| `acceptSignature:` | `flag` (BOOL) | `void` | Respond to `requestSignature:` — `YES` to accept, `NO` to reject |
| `retrievePendingTransaction` | — | `BOOL` | Fetch pending result after Bluetooth reconnect |
| `cancel` | — | `void` | Cancel the current in-progress transaction |
| `financeStartOfDay` | — | `BOOL` | Start of day batch operation |
| `financeEndOfDay` | — | `BOOL` | End of day batch operation / settlement |
| `financeInit` | — | `BOOL` | Check and download terminal software/config updates |

**Device management methods:**

| Method | Parameters | Returns | Notes |
|---|---|---|---|
| `logSetLevel:` | `level` (eLogLevel) | `BOOL` | Set log verbosity on terminal |
| `logGetInfo` | — | `BOOL` | Fetch terminal logs; result via `responseLogInfo:` |
| `logReset` | — | `BOOL` | Clear terminal logs |
| `getEMVConfiguration` | — | `BOOL` | Retrieve EMV configuration from terminal |

**Scanner methods:**

:::note HiPro hardware only
The following methods require a HiPro (Lightning/barcode-equipped) terminal. They are not available on Bluetooth HiLite readers.
:::

| Method | Parameters | Returns | Notes |
|---|---|---|---|
| `enableScanner` | — | `BOOL` | Enable barcode scanner with default settings |
| `enableScannerWithMultiScan:` | `multiScan` (BOOL) | `BOOL` | `YES` allows multiple consecutive scans; `NO` disables after the first scan |
| `enableScannerWithMultiScan:buttonMode:` | `multiScan` (BOOL), `buttonMode` (BOOL) | `BOOL` | `buttonMode:YES` requires operator to press the scan button; `NO` turns the scanner on immediately |
| `enableScannerWithMultiScan:buttonMode:timeoutSeconds:` | `multiScan`, `buttonMode`, `timeoutSeconds` (NSInteger) | `BOOL` | `timeoutSeconds:0` lets the terminal determine the inactivity timeout |
| `disableScanner` | — | `void` | Disable barcode scanner and exit scan mode |

**Log level values (`eLogLevel`):**

| Value | Level |
|---|---|
| `eLogNone` | No logging |
| `eLogError` | Error messages only |
| `eLogInfo` | Informational only |
| `eLogFull` | Full logging — recommended during integration and validation |
| `eLogDebug` | Debug output |

---

### `HeftRemoteDevice`

Returned during Bluetooth discovery and passed to `clientForDevice:…`.

| Property | Type | Notes |
|---|---|---|
| `name` | `NSString` | Bluetooth display name of the reader |
| `address` | `NSString` | Bluetooth MAC address — use for logging and device identification |
| `accessory` | `EAAccessory` | Underlying EAAccessory object (Lightning / HiPro connections only) |

---

## Protocols (delegates)

### `HeftDiscoveryDelegate`

Set on `HeftManager.delegate`. Receives Bluetooth discovery events and the initial connection callback.

#### `didFindAccessoryDevice:`

```objc
- (void)didFindAccessoryDevice:(HeftRemoteDevice *)newDevice;
```

Fires once for each Bluetooth terminal found during a `startDiscovery` scan. `newDevice.name` and `newDevice.address` identify the device. Populate a picker or auto-connect if the address matches a previously paired reader.

#### `didDiscoverFinished`

```objc
- (void)didDiscoverFinished;
```

Fires when the Bluetooth discovery scan completes. All found devices are now in `manager.connectedCardReaders`. This is the typical place to call `clientForDevice:sharedSecret:delegate:`.

```objc
- (void)didDiscoverFinished {
    HeftRemoteDevice *device = [self.manager.connectedCardReaders firstObject];
    if (device) {
        [self.manager clientForDevice:device sharedSecret:@"<sharedSecret>" delegate:self];
    }
}
```

#### `didLostAccessoryDevice:`

```objc
- (void)didLostAccessoryDevice:(HeftRemoteDevice *)oldDevice;
```

Fires when a previously discovered Bluetooth reader goes out of range or disconnects. Re-run `startDiscovery` if reconnection is needed.

---

### `HeftStatusReportDelegate`

Set via `clientForDevice:…:delegate:`. Receives all transaction lifecycle events and the post-connection callback.

#### `didConnect:`

```objc
- (void)didConnect:(id<HeftClient>)client;
```

Fires when the connection to the terminal is established and the SDK is fully initialized. Store `client` and use it for all subsequent transaction calls. **Do not start any financial operations before this fires.**

Always check `isTransactionResultPending` here to recover any result lost during a Bluetooth drop:

```objc
- (void)didConnect:(id<HeftClient>)client {
    self.heftClient = client;
    NSLog(@"didConnect: mpedInfo=%@", client.mpedInfo);

    if ([client isTransactionResultPending]) {
        [client retrievePendingTransaction];
        // Result delivered via responseRecoveredTransactionStatus:
        // Do NOT start a new transaction before retrieving — it discards the pending result permanently
    }
}
```

#### `responseStatus:`

```objc
- (void)responseStatus:(id<ResponseInfo>)info;
```

Fires multiple times during a transaction with intermediate status updates from the terminal (e.g. "Waiting for card", "PIN entry", "Connecting to host"). Use to update transaction-progress UI.

| `info` property | Type | Notes |
|---|---|---|
| `statusCode` | `int` | Numeric EFT_PP_STATUS code (see [Status codes](#status-codes) below) |
| `status` | `NSString` | Human-readable status string — display to operator |
| `xml` | `NSDictionary` | Detailed XML state snapshot of the terminal |

```objc
- (void)responseStatus:(id<ResponseInfo>)info {
    NSLog(@"responseStatus: code=0x%04lX status=%@", (long)info.statusCode, info.status);
    dispatch_async(dispatch_get_main_queue(), ^{
        self.statusLabel.text = info.status;
    });
}
```

#### `responseError:`

```objc
- (void)responseError:(id<ResponseInfo>)info;
```

Fires when a terminal-level error occurs during a transaction. `info.status` contains the error message string. Log `info.statusCode` for support.

#### `responseFinanceStatus:`

```objc
- (void)responseFinanceStatus:(id<FinanceResponseInfo>)info;
```

The **primary transaction result callback**. Fires when the terminal finishes processing any financial operation. `info` is a `FinanceResponseInfo` object — see the [FinanceResponseInfo reference](#financeresponseinfo) below.

```objc
- (void)responseFinanceStatus:(id<FinanceResponseInfo>)info {
    // toDictionary serializes every non-empty field — emit as a canonical log line
    NSLog(@"responseFinanceStatus: %@", [info toDictionary]);

    NSString *finStatus = info.finStatus;

    if ([finStatus isEqualToString:@"AUTHORISED"]) {
        // Store eFTTransactionID — required for reversal or refund
        [self fulfillOrder:info.eFTTransactionID];
    } else if ([finStatus isEqualToString:@"DECLINED"]) {
        [self showDeclined:info.errorMessage];
    } else if ([finStatus isEqualToString:@"CANCELLED"]) {
        [self showCancelled];
    } else if ([finStatus isEqualToString:@"PARTIAL_APPROVAL"]) {
        NSInteger due = [info.dueAmount integerValue];
        [self collectRemainder:due];
    } else if ([finStatus isEqualToString:@"UNDEFINED"]) {
        // Do NOT retry — recover server-side via Transaction Feed API
        [self triggerServerSideRecovery];
    }
}
```

#### `requestSignature:`

```objc
- (void)requestSignature:(NSString *)receipt;
```

Fires during a financial operation when the terminal requires cardholder signature verification. `receipt` is the merchant receipt content — present it to the operator so they can verify the cardholder's signature.

:::warning Dual-format receipt parameter
`receipt` has two forms — always check before use. If the signature image upload succeeded, `receipt` is an `https://` URL. If the upload failed (no connectivity), `receipt` is the raw base64-encoded image binary. **Always check `hasPrefix("http")` before treating it as a URL.**
:::

```objc
- (void)requestSignature:(NSString *)receipt {
    if ([receipt hasPrefix:@"http"]) {
        NSURL *url = [NSURL URLWithString:receipt];
        // Load and display image from URL
    } else {
        NSData *imageData = [[NSData alloc] initWithBase64EncodedString:receipt options:0];
        UIImage *image = [UIImage imageWithData:imageData];
        // Display image directly
    }

    // After cardholder signs, notify the SDK:
    [self.heftClient acceptSignature:YES];   // accepted
    // or:
    [self.heftClient acceptSignature:NO];    // rejected — aborts transaction
}
```

#### `cancelSignature`

```objc
- (void)cancelSignature;
```

Fires when the terminal cancels the signature request on its own (e.g. cardholder timeout on the device side). Dismiss any signature UI.

#### `responseRecoveredTransactionStatus:`

```objc
- (void)responseRecoveredTransactionStatus:(id<FinanceResponseInfo>)info;
```

Fires in response to `retrievePendingTransaction`. `info` contains the recovered transaction result (`info.recoveredTransaction == YES`), or `nil` if no pending transaction was found. Treat it identically to a `responseFinanceStatus:` result.

#### `responseLogInfo:`

```objc
- (void)responseLogInfo:(id<LogInfo>)info;
```

Fires in response to `logGetInfo`. `info.log` is the terminal's log output as a string.

#### `responseScannerEvent:`

```objc
- (void)responseScannerEvent:(id<ScannerEventResponseInfo>)info;
```

Fires each time the barcode scanner reads a code while scan mode is active. `info.scanCode` contains the scanned barcode string. This is an `@optional` delegate method — implement it only on HiPro hardware.

#### `responseScannerDisabled:`

```objc
- (void)responseScannerDisabled:(id<ScannerDisabledResponseInfo>)info;
```

Fires when the scanner exits scan mode — either because `disableScanner` was called, a single scan completed in single-scan mode, or the inactivity timeout elapsed. This is an `@optional` delegate method.

#### `responseEMVReport:`

```objc
- (void)responseEMVReport:(NSString *)report;
```

Fires in response to `getEMVConfiguration`. `report` is the full EMV configuration as an XML string. This is an `@optional` delegate method.

---

## `FinanceResponseInfo`

The complete transaction result object. Delivered to `responseFinanceStatus:` and `responseRecoveredTransactionStatus:`. Conforms to `id<FinanceResponseInfo>`.

Call `[info toDictionary]` to serialize all non-empty fields as an `NSDictionary` — emit this as your canonical log line for every transaction.

### Financial outcome

| Field | Type | Notes |
|---|---|---|
| `finStatus` | `NSString` | Primary result — see [finStatus values](#finstatus-values) below |
| `financialResult` | `NSInteger` | Numeric code: `0x00`=UNDEFINED, `0x01`=APPROVED, `0x02`=DECLINED, `0x03`=PROCESSED, `0x04`=FAILED, `0x05`=CANCELLED |
| `statusMessage` | `NSString` | Human-readable result string (same text as `finStatus` in most cases) |
| `type` | `NSString` | Transaction type: `"SALE"`, `"REFUND"`, `"VOID_SALE"`, `"VOID_REFUND"`, `"TOKENIZE_CARD"`, `"SALE_AND_TOKENIZE_CARD"` |
| `errorMessage` | `NSString` | Detailed error reason — non-empty on `DECLINED` and `FAILED`; display or log for support |

### Transaction identifiers

| Field | Type | Notes |
|---|---|---|
| `eFTTransactionID` | `NSString` | **Primary GUID — store this on every AUTHORISED result.** Required for `saleReversalWithAmount:…:transactionId:` and `refundWithAmount:…:transaction:`. |
| `originalEFTTransactionID` | `NSString` | GUID of the original transaction — populated on refunds and reversals only |
| `transactionId` | `NSString` | Internal transaction number. **Different from `eFTTransactionID`.** Used as the `transaction` parameter in `tipAdjustment(transaction:amount:callback:)`. Do not confuse the two — reversals and refunds use `eFTTransactionID`; tip adjustment uses `transactionId` (the value labeled `eFTTransactionID` in the tip adjustment docs refers to this field). |
| `eFTTimestamp` | `NSString` | Transaction timestamp — format `YYYYMMDDHHmmSS` |
| `authorisationCode` | `NSString` | Processor approval code |

### Amounts

| Field | Type | Notes |
|---|---|---|
| `authorisedAmount` | `NSInteger` | Amount authorised in minor currency unit (e.g. `1000` = £10.00) |
| `requestedAmount` | `NSString` | Amount originally requested at transaction start |
| `totalAmount` | `NSString` | Total charged — equals `requestedAmount` + `gratuityAmount` for tipped sales, or the partial approval amount |
| `gratuityAmount` | `NSString` | Tip entered by cardholder on the terminal |
| `gratuityPercentage` | `NSString` | Tip as a percentage of `requestedAmount` |
| `dueAmount` | `NSString` | Remaining balance after a partial approval (US only) — collect this via a secondary tender |
| `currency` | `NSString` | ISO 4217 alpha code used for the transaction |

### Card information

| Field | Type | Notes |
|---|---|---|
| `cardSchemeName` | `NSString` | Card brand as emitted by terminal firmware (always uppercase) — `"VISA"`, `"MASTERCARD"`, `"AMEX"`, `"MAESTRO"`, `"DISCOVER"`, `"JCB"`, `"DINERS"`, `"UNIONPAY"`, `"INTERAC"` |
| `cardEntryType` | `NSString` | How the card was read — `"ICC"` (chip), `"NFC"` (contactless tap), `"MSR"` (magnetic stripe swipe) |
| `verificationMethod` | `NSString` | Cardholder verification used — `"PIN"`, `"SIGNATURE"`, `"PIN_SIGNATURE"`, `"NOT_REQUIRED"`, `"UNDEFINED"`, `"FAILED"`, `"MOBILE_PASS_CODE"` |
| `CardToken` | `NSString` | Card token returned by `tokenizeCard` and `saleAndTokenize` operations |

### Receipts

| Field | Type | Notes |
|---|---|---|
| `customerReceipt` | `NSString` | Customer receipt in HTML format — present or print for the cardholder |
| `merchantReceipt` | `NSString` | Merchant receipt in HTML format — for your records |

### Flags and metadata

| Field | Type | Notes |
|---|---|---|
| `customerReference` | `NSString` | Reference string passed to the transaction via `options.customerReference` — echoed unchanged |
| `budgetNumber` | `NSString` | Budget period reference (SureSwipe/Altech only) |
| `chipTransactionReport` | `NSString` | Full EMV parameter report from the chip interaction |
| `balance` | `NSString` | Cardholder card balance (if the acquirer supports balance inquiry) |
| `deviceStatus` | `DeviceStatus *` | Device status at time of transaction — includes `serialNumber`, `batteryStatus`, `batterymV`, `batteryCharging`, `externalPower`, `applicationName`, `applicationVersion`, `statusMessage`, and `bluetoothName` |
| `recoveredTransaction` | `BOOL` | `YES` if this result was recovered via `retrievePendingTransaction` |
| `isRestarting` | `BOOL` | `YES` if the terminal is about to restart (e.g. post-firmware update) — disconnect and wait for `didConnect:` to fire again |

---

## `finStatus` values

| `finStatus` string | `financialResult` | Meaning | Required action |
|---|---|---|---|
| `"AUTHORISED"` | `0x01` | Transaction approved | Store `eFTTransactionID`; fulfil the order |
| `"DECLINED"` | `0x02` | Declined by issuer or acquirer | Show decline message; do not retry the same card |
| `"CANCELLED"` | `0x05` | Cardholder or operator cancelled | Allow retry |
| `"FAILED"` | `0x04` | Processing or system error | Check `errorMessage`; may retry |
| `"PARTIAL_APPROVAL"` | — | Partial funds available (US only) | Collect remaining balance via `dueAmount` |
| `"PROCESSED"` | `0x03` | Non-financial operation completed (e.g. `financeInit`) | No payment action needed |
| `"UNDEFINED"` | `0x00` | No result received | **Do not retry** — recover server-side via Transaction Feed API |

:::caution UNDEFINED handling
`UNDEFINED` means the SDK received no outcome from the network. The transaction may or may not have been processed. Never retry automatically. Query the Transaction Feed API for the terminal serial number and time window to determine the actual outcome.

The iOS SDK does **not** support `getTransactionStatus()` or `transactionReference`-based recovery. Recovery is always server-side.
:::

---

## Status codes

Delivered via `responseStatus:` and `responseError:` as `info.statusCode`. Key values:

| Code | `info.status` string | When it fires |
|---|---|---|
| `0x0014` | `WaitingForCard` | Terminal waiting for card tap, insert, or swipe |
| `0x0019` | `PinInput` | Cardholder is entering PIN — show "Enter PIN on reader" |
| `0x001F` | `WaitingSignature` | Signature prompt displayed — prepare signature capture UI |
| `0x0020` | `WaitingHostConnect` | Connecting to acquirer host |
| `0x0035` | `PartialApproval` | Partial approval — prompt cardholder for remaining amount |
| `0x0006` | `ConnectTimeout` | Reader connection timed out — retry connection |
| `0x0007` | `ConnectError` | Connection error — retry `clientForDevice:…` |
| `0x0012` | `UserCancelled` | Cardholder pressed Cancel on terminal |
| `0x001D` | `SharedSecretInvalid` | Wrong shared secret — verify credentials with Handpoint |
| `0x9999` | `InitialisationComplete` | Reader is ready for transactions |

---

## Enums

### `CardEntryType` string values

Returned in `FinanceResponseInfo.cardEntryType`:

| Value | Description |
|---|---|
| `"ICC"` | Contact EMV chip (card inserted) |
| `"NFC"` | Contactless tap (EMV or magnetic stripe contactless) |
| `"MSR"` | Magnetic stripe swipe |
| `"UNDEFINED"` | Entry type not applicable or not determined (e.g. non-payment operations) |

### `CardSchemeName` string values

Returned in `FinanceResponseInfo.cardSchemeName`. The SDK passes this through directly from the terminal firmware — values are always uppercase. Confirmed from live terminal captures: `VISA`, `MASTERCARD`, `DISCOVER`, `AMEX`.

| Value |
|---|
| `"VISA"` |
| `"MASTERCARD"` |
| `"MAESTRO"` |
| `"AMEX"` |
| `"DISCOVER"` |
| `"JCB"` |
| `"DINERS"` |
| `"UNIONPAY"` |
| `"INTERAC"` |

### `TipAdjustmentStatus`

Returned via the callback block passed to `tipAdjustment(…)`:

| Value | Meaning |
|---|---|
| `TipAdjustmentAuthorised` | Tip adjustment approved by the processor |
| `TipAdjustmentDeclined` | Tip adjustment declined by the processor |
| `TipAdjustmentFailed` | System error or timeout — retry recommended |

---

## Options objects

### `SaleOptions`

Options for `saleWithAmount:…:options:` and `saleAndTokenizeWithAmount:…:options:`.

| Property | Type | Notes |
|---|---|---|
| `customerReference` | `NSString` | Arbitrary reference string echoed in `FinanceResponseInfo.customerReference`. Max 25 characters. |
| `merchantAuth` | `MerchantAuth` | Multi-MID credential override — see `MerchantAuth / Credential` below |
| `divideByMonths` | `NSString` | Budget period in months, e.g. `@"3"` for 3 months (SureSwipe/Altech only) |

### `MerchantAuthOptions`

Options for `refundWithAmount:…:options:`. Includes all `SaleOptions` fields plus `merchantAuth` for multi-MID refunds.

### `Options`

Base options object used for reversals.

| Property | Type | Notes |
|---|---|---|
| `customerReference` | `NSString` | Reference string echoed in result |

---

## `MerchantAuth` / `Credential`

Used for multi-MID scenarios where a single terminal processes transactions for multiple merchant accounts.

```objc
MerchantAuth *auth = [MerchantAuth new];
Credential *cred = [Credential new];
cred.acquirer = [Credential getAcquirerFromString:@"acquirer_name"];
cred.mid = @"merchant_id";
cred.tid = @"terminal_id";
[auth add:cred];
options.merchantAuth = auth;
```

| Property | Notes |
|---|---|
| `acquirer` | Acquirer identifier — use `[Credential getAcquirerFromString:@"name"]` |
| `mid` | Override merchant ID for this transaction |
| `tid` | Override terminal ID for this transaction |

---

## `tipAdjustment` C function

Tip adjustment is a C function in `HapiRemoteService.h` — it calls the Handpoint cloud API directly and does **not** require a connected card reader.

**Acquirer availability:** EPI (TSYS, VANTIV) in the United States restaurant industry only.

**Setup** — call once, before any tip adjustment:

```objc
#include "HapiRemoteService.h"

NSString *sharedSecret = @"0102030405060708091011121314151617181920212223242526272829303132";
BOOL initialized = setupHandpointApiConnection(sharedSecret);
```

**Call signature:**

```objc
BOOL tipAdjustment(NSString *transaction, NSInteger tipAmount, void (^callback)(TipAdjustmentStatus));
```

| Parameter | Type | Notes |
|---|---|---|
| `transaction` | `NSString *` | The `eFTTransactionID` GUID from the original sale's `FinanceResponseInfo` |
| `tipAmount` | `NSInteger` | Tip amount in minor currency unit (e.g. `1000` = $10.00) |
| `callback` | Block | Receives a `TipAdjustmentStatus` value |

```objc
NSString *transaction = @"d50af540-a1b0-11e6-85e6-07b2a5f091ec";

tipAdjustment(transaction, 1000, ^(TipAdjustmentStatus status) {
    if (status == TipAdjustmentAuthorised) {
        // Tip applied — update UI
    } else if (status == TipAdjustmentDeclined) {
        // Declined — notify operator
    } else if (status == TipAdjustmentFailed) {
        // Timeout or system error — prompt to retry
    }
});
```

:::note Overwriting tip adjustments
If two tip adjustments are submitted for the same transaction, the second overrides the first. There is no `tipAdjustmentReversal`.
:::

---

## See also

- [iOS HiLite Integration Guide](/reference/ios-hilite-integration-guide) — setup, discovery, transaction lifecycle, simulator test amounts
- [Transaction Recovery](/reference/backoffice-integration-guide) — server-side UNDEFINED recovery via Transaction Feed API
- [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) — per-acquirer operation availability for the `ios-hilite` path
- [Validate your integration](/reference/validate-integration) — certification checklist
