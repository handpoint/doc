---
title: iOS SDK (HiLite) — Integration Guide
sidebar_position: 4
description: Step-by-step guide to integrating the Handpoint iOS SDK with a HiLite Bluetooth or Lightning card reader — setup, discovery, transaction flow, and certification.
---

# iOS SDK (HiLite) — Integration Guide

:::info AI coding agents
Fetch the integration-path skill for machine-readable setup guidance and code examples: [`/.well-known/skills/paths/ios-hilite.md`](pathname:///.well-known/skills/paths/ios-hilite.md)
:::

## What is this integration path?

The iOS HiLite path runs your iOS application on an iPhone or iPad and communicates with a HiLite card reader via **Bluetooth** or **Lightning**. Your POS app lives on the iOS device; the HiLite handles card reading and P2PE encryption.

Choose this path for mobile merchants on iPhone or iPad who need to accept payments anywhere.

## When to use it

| ✅ Good fit | ❌ Not a good fit |
|---|---|
| Your app runs on iPhone or iPad with a HiLite reader | You need Android — use the [Android HiLite path](/reference/android-hilite-integration-guide) |
| Merchants need to accept payments away from a fixed counter | You need a fixed PAX terminal — use the [Cloud API](/reference/cloud-api-integration-guide) |
| You want a compact, battery-powered reader | — |

:::info Back-office operations are always available
[Backoffice REST API](/reference/backoffice-integration-guide) operations — tip adjustment, reversals, refunds, MOTO charges, batch management, deferred tokenization — are available **alongside any integration path** you choose. They go server-side directly to the payment gateway with no terminal or SDK required. Subject only to acquirer support.
:::

## Capabilities not available on HiLite

- **Pre-authorization** — no on-device pre-auth flow
- **MOTO / remote sale on-terminal** — HiLite has no manual entry keypad
- **`getTransactionStatus`** — not available on iOS SDK

## How it works

```
Your iOS App (iPhone / iPad)
    │  heftClient.saleWithAmount:currency:cardholder:
    ▼
Handpoint iOS SDK (HeftManager)
    │  Bluetooth or Lightning
    ▼
HiLite Card Reader
    │  chip / tap / swipe + P2PE
    ▼
Acquirer / Card Network (via mobile data or Wi-Fi)
    │
    ▼
responseFinanceStatus: (result delegate callback)
```

## Authentication

| Credential | Purpose | Provisioned by |
|---|---|---|
| `sharedSecret` | Authenticates your app to the HiLite reader | Handpoint Integration Support |

## Setup

### 1. Request credentials and hardware

Contact your Handpoint Integration Support engineer for:
- A merchant `sharedSecret`
- A HiLite Bluetooth or Lightning reader

### 2. Add the SDK

**CocoaPods:**
```ruby
# Podfile
pod 'HandpointSDK'
```

**Carthage / Swift Package Manager:** contact Integration Support for the framework URL.

**Manual:**
- Add `HandpointAll.h` (header) and `libheft.a` (library) to your project.
- Or use `HandpointSDK.framework` for the Carthage build.

### 3. Configure Info.plist

```xml
<!-- External accessory protocol (Lightning HiPro) -->
<key>UISupportedExternalAccessoryProtocols</key>
<array>
    <string>com.datecs.pinpad</string>
</array>

<!-- Background mode (keeps session alive when app goes to background) -->
<key>UIBackgroundModes</key>
<array>
    <string>external-accessory</string>
</array>

<!-- Bluetooth (required for BT HiLite, iOS 13+) -->
<key>NSBluetoothAlwaysUsageDescription</key>
<string>Used to connect to the HiLite card reader</string>
<key>NSBluetoothPeripheralUsageDescription</key>
<string>Used to connect to the HiLite card reader</string>
```

### 4. Configure Build Settings

- **Other Linker Flags:** add `-lc++`
- **Build Active Architecture Only:** `YES`

### 5. Implement delegates and initialise

```objc
// ViewController.m

#import "HandpointAll.h"

@interface ViewController () <HeftDiscoveryDelegate, HeftStatusReportDelegate>
@property (nonatomic, strong) HeftManager *manager;
@property (nonatomic, strong) id<HeftClient> heftClient;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    self.manager = [HeftManager sharedManager];
    self.manager.delegate = self;        // HeftDiscoveryDelegate

    // Start Bluetooth discovery (skip for Lightning — use connectedCardReaders directly)
    [self.manager startDiscovery];
}

// Discovery — fires for each Bluetooth device found
- (void)didFindAccessoryDevice:(HeftRemoteDevice *)newDevice {
    // Show in picker, or auto-connect if known device
}

// Discovery complete — get the full list
- (void)didDiscoverFinished {
    NSArray *devices = [self.manager connectedCardReaders];
    HeftRemoteDevice *device = [devices firstObject];
    if (device) {
        NSString *secret = @"0102030405060708091011121314151617181920212223242526272829303132";
        [self.manager clientForDevice:device sharedSecret:secret delegate:self];
    }
}

// HeftStatusReportDelegate — connection established
- (void)didConnect:(id<HeftClient>)client {
    self.heftClient = client;
    // Safe to start financial operations
}

// Transaction result
- (void)responseFinanceStatus:(id<FinanceResponseInfo>)info {
    NSString *status = info.statusMessage;
    BOOL approved = [status isEqualToString:@"AUTHORISED"];
}

// Status updates during a transaction
- (void)responseStatus:(id<ResponseInfo>)info { }

@end
```

**Swift:**
```swift
import HandpointSDK   // or import HandpointAll

class ViewController: UIViewController, HeftDiscoveryDelegate, HeftStatusReportDelegate {

    var manager: HeftManager!
    var heftClient: HeftClient?

    override func viewDidLoad() {
        super.viewDidLoad()
        manager = HeftManager.sharedManager()
        manager.delegate = self
        manager.startDiscovery()
    }

    func didConnect(_ client: HeftClient!) {
        heftClient = client
    }

    func responseFinanceStatus(_ info: FinanceResponseInfo!) {
        let approved = info.statusMessage == "AUTHORISED"
    }
}
```

## Connecting for Lightning (HiPro)

Skip discovery — the reader is already accessible:

```objc
HeftRemoteDevice *device = [[self.manager connectedCardReaders] firstObject];
NSString *secret = @"0102030405060708091011121314151617181920212223242526272829303132";
[self.manager clientForDevice:device sharedSecret:secret delegate:self];
```

## Your first transaction

```objc
// Amount in smallest currency unit — £10.00 = 1000
[self.heftClient saleWithAmount:1000 currency:@"GBP" cardholder:YES];
```

```swift
heftClient?.saleWithAmount(1000, currency: "GBP", cardholder: true)
```

`cardholder:YES` / `cardholder: true` — pass `YES` for card-present transactions.

### Reading the result

```objc
- (void)responseFinanceStatus:(id<FinanceResponseInfo>)info {
    if ([info.statusMessage isEqualToString:@"AUTHORISED"]) {
        [self chargeCard];
    } else if ([info.statusMessage isEqualToString:@"DECLINED"]) {
        [self showDeclined];
    }
    // Also available: info.customerReceipt, info.merchantReceipt, info.transactionID
}
```

## Transaction recovery

:::warning No getTransactionStatus on iOS
The iOS SDK does **not** have a `getTransactionStatus` method. Recovery must be performed server-side via the Cloud API. This makes pre-call persistence of the `transactionReference` mandatory — it is the only key your server can use to locate the transaction.
:::

Recovery flow when `responseFinanceStatus` does not fire (app backgrounded, Bluetooth drop, timeout):

1. **Before every call**, generate a UUID v4 `transactionReference` and save it to your server.
2. On timeout or app restart with a pending reference, your **server** calls:

```http
GET https://transactions.handpoint.com/transactions/{transactionReference}/status
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

3. Check `finStatus` in the response. If `UNDEFINED` or not yet returned, poll every 10 s.
4. If `AUTHORISED` and your DB shows no completed record, send a reversal from your server:

```http
POST https://cloud.handpoint.com/reversal
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{ "originalGuid": "<transactionID from status response>" }
```

5. Clear the pending reference.

The iOS app cannot recover directly — your backend must own the recovery path.

→ Full recovery reference: [Back-office REST API](/reference/backoffice-integration-guide)

## Simulator test amounts

When testing with the SDK simulator (`libheft.a` from `HeftSimulatorLibrary`):

| Amount | Behaviour |
|---|---|
| `1000` | Declined |
| `2000` | User Cancelled |
| `3000` | Signature Requested |
| Any other | Approved |

For production trigger amounts (DEMO terminal), see [Development Hardware: Testing with trigger amounts](/reference/development-hardware#trigger-amounts).

---

## Transaction operations reference

All transaction methods are called on `heftClient` (the `id<HeftClient>` returned in `didConnect:`). Each method returns `BOOL` — `YES` if the operation was successfully sent to the terminal. The actual result is delivered asynchronously through `responseFinanceStatus:`.

### Sale

`saleWithAmount:currency:cardholder:` — initiates a payment operation.

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `amount` | `NSInteger` | Yes | Amount in minor currency unit (e.g. 1000 = £10.00) |
| `currency` | `NSString` | Yes | ISO 4217 alpha code, e.g. `@"GBP"` or `Currency.GBP.alpha` |
| `cardholder` | `BOOL` | Yes | `YES` for card-present transactions |
| `reference` | `NSString` | No | Customer reference string (returned in result) |
| `options` | `SaleOptions` | No | Extended options: `customerReference`, `merchantAuth`, `divideByMonths` |

```objc
// Plain sale
[api saleWithAmount:1000 currency:Currency.GBP.alpha cardholder:YES];

// Sale with options
SaleOptions *options = [SaleOptions new];
options.customerReference = @"ORDER-123";

// Multi-MID / custom merchant auth (optional)
MerchantAuth *auth = [MerchantAuth new];
Credential *cred = [Credential new];
cred.acquirer = [Credential getAcquirerFromString:@"acquirer"];
cred.mid = @"mid";
cred.tid = @"tid";
[auth add:cred];
options.merchantAuth = auth;

// Budget period — SureSwipe/Altech only (e.g. 3 months)
options.divideByMonths = @"3";

[api saleWithAmount:1000 currency:Currency.EUR.alpha options:options];
```

**Events invoked:** `responseStatus`, `responseError`, `requestSignature`, `responseFinanceStatus`

---

### Sale and Tokenize

`saleAndTokenizeWithAmount:currency:options:` — performs a sale and simultaneously tokenizes the card. The card token is returned in `responseFinanceStatus` via the `CardToken` field.

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `amount` | `NSInteger` | Yes | Amount in minor currency unit |
| `currency` | `NSString` | Yes | ISO 4217 alpha code |
| `options` | `SaleOptions` | No | Same options as Sale |

```objc
// Plain sale and tokenize
[api saleAndTokenizeWithAmount:1000 currency:Currency.EUR.alpha];

// With options
SaleOptions *options = [SaleOptions new];
options.customerReference = @"Your customer reference";
[api saleAndTokenizeWithAmount:1000 currency:Currency.EUR.alpha options:options];
```

**Events invoked:** `responseStatus`, `responseError`, `requestSignature`, `responseFinanceStatus`

---

### Sale Reversal

`saleReversalWithAmount:currency:transactionId:options:` — voids a previous sale. Amount, currency, and the original `transactionId` are required. Reversals can only be performed the same day as the original transaction.

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `amount` | `NSInteger` | Yes | Must match the original sale amount |
| `currency` | `NSString` | Yes | Must match the original sale currency |
| `transactionId` | `NSString` | Yes | `eFTTransactionID` from the original sale result |
| `options` | `Options` | No | `customerReference` |

```objc
// Plain sale reversal
[api saleReversalWithAmount:1000
                   currency:Currency.EUR.alpha
              transactionId:originalTransactionID
                    options:nil];

// With customer reference
Options *options = [Options new];
options.customerReference = @"Your customer reference";
[api saleReversalWithAmount:1000
                   currency:Currency.EUR.alpha
              transactionId:@"00000000-0000-0000-0000-000000000000"
                    options:options];
```

**Events invoked:** `responseStatus`, `responseError`, `responseFinanceStatus`

---

### Refund

`refundWithAmount:currency:transaction:options:` — moves funds from the merchant account back to the cardholder. The `transaction` parameter links the refund to an original sale, which limits the maximum refundable amount.

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `amount` | `NSInteger` | Yes | Amount in minor currency unit |
| `currency` | `NSString` | Yes | ISO 4217 alpha code |
| `transaction` | `NSString` | Yes | `eFTTransactionID` of the original sale (limits max refund) |
| `options` | `MerchantAuthOptions` | No | `customerReference`, `merchantAuth` |

```objc
// Linked refund
[api refundWithAmount:1000
             currency:Currency.EUR.alpha
         transaction:@"00000000-0000-0000-0000-000000000000"];

// With options and merchant auth
MerchantAuthOptions *options = [MerchantAuthOptions new];
options.customerReference = @"Your customer reference";
MerchantAuth *auth = [MerchantAuth new];
Credential *cred = [Credential new];
cred.acquirer = [Credential getAcquirerFromString:@"acquirer"];
cred.mid = @"mid";
cred.tid = @"tid";
[auth add:cred];
options.merchantAuth = auth;

[api refundWithAmount:1000
             currency:Currency.EUR.alpha
         transaction:@"00000000-0000-0000-0000-000000000000"
             options:options];
```

**Events invoked:** `responseStatus`, `responseError`, `responseFinanceStatus`

---

### Refund Reversal

`refundReversalWithAmount:currency:transactionId:options:` — voids a previous refund. Amount, currency, and the original refund's `transactionId` are required.

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `amount` | `NSInteger` | Yes | Must match the original refund amount |
| `currency` | `NSString` | Yes | Must match the original refund currency |
| `transactionId` | `NSString` | Yes | `eFTTransactionID` from the original refund result |
| `options` | `Options` | No | `customerReference` |

```objc
Options *options = [Options new];
options.customerReference = @"Your customer reference";

[api refundReversalWithAmount:1000
                      currency:Currency.EUR.alpha
                 transactionId:@"00000000-0000-0000-0000-000000000000"
                       options:options];
```

**Events invoked:** `responseStatus`, `responseError`, `responseFinanceStatus`

---

### Tokenize Card

`tokenizeCard` — initiates a card tokenization operation without any payment. The card token is returned in the `CardToken` field of `responseFinanceStatus`. Not available for all acquirers — confirm with Handpoint.

```objc
[heftClient tokenizeCard];
```

**Events invoked:** `responseStatus`, `responseError`, `requestSignature`, `responseRecoveredTransactionStatus`

---

### Accept Signature

`acceptSignature:` — called in response to a `requestSignature:` delegate event during a transaction. Pass `YES` if the signature is valid, `NO` to decline.

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `flag` | `BOOL` | Yes | `YES` if signature accepted, `NO` if declined |

```objc
// In your UI action handlers
- (IBAction)acceptSignatureTapped {
    [heftClient acceptSignature:YES];
}

- (IBAction)declineSignatureTapped {
    [heftClient acceptSignature:NO];
}
```

**Events invoked:** `responseStatus`, `responseError`, `responseFinanceStatus`

---

### Retrieve Pending Transaction

`retrievePendingTransaction` — fetches a transaction result that was lost due to a Bluetooth disconnection between the terminal and app. Call this immediately in `didConnect:` if `isTransactionResultPending` is `YES`.

:::warning Discard before new transaction
Starting a new transaction without first calling `retrievePendingTransaction` will discard the pending result permanently.
:::

```objc
- (void)didConnect:(id<HeftClient>)client {
    heftClient = client;

    if ([heftClient isTransactionResultPending] == YES) {
        // A pending transaction result was detected — fetch it
        [heftClient retrievePendingTransaction];
    }
}
```

The result is delivered via `responseRecoveredTransactionStatus:` (not `responseFinanceStatus:`).

**Events invoked:** `responseStatus`, `responseError`, `responseRecoveredTransactionStatus`

---

### Tip Adjustment

`tipAdjustment` — adjusts the tip amount of a completed sale before the day's batch is settled. This method does **not** use the card reader — it calls the Handpoint cloud API directly via `HapiRemoteService`.

Acquirer availability: EPI (TSYS, VANTIV) in the United States restaurant industry only. Limited to HiLite terminals.

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `transaction` | `NSString` | Yes | `eFTTransactionID` (GUID) of the original sale |
| `tipAmount` | `NSInteger` | Yes | Tip amount in minor currency unit (e.g. 1000 = $10.00) |

```objc
#include "HapiRemoteService.h"

// 1. Initialize the shared secret once
NSString *sharedSecret = @"0102030405060708091011121314151617181920212223242526272829303132";
BOOL initialized = setupHandpointApiConnection(sharedSecret);

// 2. Adjust tip on a completed sale ($10.00 tip)
NSString *transaction = @"d50af540-a1b0-11e6-85e6-07b2a5f091ec";

BOOL result = tipAdjustment(transaction, 1000, ^(TipAdjustmentStatus status) {
    if (status == TipAdjustmentAuthorised) {
        // Successfully adjusted
    } else if (status == TipAdjustmentDeclined) {
        // Declined by the processor
    } else if (status == TipAdjustmentFailed) {
        // System error or timeout — prompt user to retry
    }
});
```

**TipAdjustmentStatus values:**

| Value | Meaning |
|---|---|
| `TipAdjustmentAuthorised` | Tip adjustment approved by the processor |
| `TipAdjustmentDeclined` | Tip adjustment declined by the processor |
| `TipAdjustmentFailed` | System error or timeout — retry recommended |

If two tip adjustments are sent for the same transaction, the second overrides the first.

---

### Stop / Cancel

`cancel` — cancels the current in-progress transaction.

```objc
[heftClient cancel];
```

---

## Device management reference

### sharedManager

`+ (HeftManager *)sharedManager` — returns the singleton `HeftManager` instance. Call once to obtain the manager, set its `delegate`, then call `startDiscovery`.

```objc
HeftManager *manager = [HeftManager sharedManager];
manager.delegate = self;
[manager resetDevices]; // Clear previously discovered devices
```

---

### startDiscovery

`- (void)startDiscovery` — starts Bluetooth discovery. Each device found fires `didFindAccessoryDevice:`. When discovery completes, `didDiscoverFinished` fires. For Lightning (HiPro) readers skip discovery and use `connectedCardReaders` directly.

```objc
[heftManager startDiscovery];
```

---

### clientForDevice:sharedSecret:delegate:

`- (void)clientForDevice:(HeftRemoteDevice *)device sharedSecret:(NSString *)sharedSecret delegate:(NSObject<HeftStatusReportDelegate> *)delegate` — creates a `HeftClient` connection to a specific terminal. On success, the client is returned via `didConnect:`.

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `device` | `HeftRemoteDevice *` | Yes | Device from `connectedCardReaders` or discovery |
| `sharedSecret` | `NSString *` | Yes | 64-character hex shared secret provided by Handpoint |
| `delegate` | `NSObject<HeftStatusReportDelegate> *` | Yes | Object to receive delegate callbacks |

```objc
NSString *sharedSecret = @"0102030405060708091011121314151617181920212223242526272829303132";
[heftManager clientForDevice:[heftManager.connectedCardReaders firstObject]
                sharedSecret:sharedSecret
                    delegate:self];
```

**Events invoked:** `didConnect:`

---

### financeInit (Update Terminal)

`- (BOOL)financeInit` — checks for and downloads available software or configuration updates for the terminal. Call after connecting if you want to ensure the terminal is up to date.

```objc
[heftClient financeInit];
```

**Events invoked:** `responseStatus`, `responseError`, `responseFinanceStatus`

---

### logSetLevel

`- (BOOL)logSetLevel:(eLogLevel)level` — sets the log level on the terminal.

| Level | Value | Description |
|---|---|---|
| `eLogNone` | 0 | No logging |
| `eLogError` | 1 | Error messages only |
| `eLogInfo` | 2 | Informational only |
| `eLogFull` | 3 | Full logging (recommended for integration) |
| `eLogDebug` | 4 | Debug logging |

```objc
[heftClient logSetLevel:eLogFull];
```

---

### logGetInfo

`- (BOOL)logGetInfo` — retrieves logs stored on the terminal. Result delivered via `responseLogInfo:`.

```objc
[heftClient logGetInfo];
```

---

### logReset

`- (BOOL)logReset` — clears logs stored on the terminal.

```objc
[heftClient logReset];
```

---

## Barcode scanner (HiPro only)

The barcode scanner API is available on HiPro (Lightning) terminals equipped with a barcode scanner. **HiLite Bluetooth readers do not have a barcode scanner.**

### Enabling the scanner

Call `enableScanner` (or one of its parameterised variants) to put the terminal into scan mode. The terminal waits for the scan button to be pressed and fires `responseScannerEvent:` for each code read.

```objc
// Enable with defaults — multi-scan on, button-activated, terminal-determined timeout
[self.heftClient enableScanner];

// Single-scan mode — scanner disables automatically after the first read
[self.heftClient enableScannerWithMultiScan:NO];

// Multi-scan, immediate (buttonless) activation, 30-second inactivity timeout
[self.heftClient enableScannerWithMultiScan:YES buttonMode:NO timeoutSeconds:30];
```

### Receiving scan codes

Implement `responseScannerEvent:` in your `HeftStatusReportDelegate` to receive each scanned barcode. This method is `@optional`.

```objc
- (void)responseScannerEvent:(id<ScannerEventResponseInfo>)info {
    NSString *barcode = info.scanCode;
    NSLog(@"Scanned: %@", barcode);
    dispatch_async(dispatch_get_main_queue(), ^{
        self.barcodeLabel.text = barcode;
    });
}

- (void)responseScannerDisabled:(id<ScannerDisabledResponseInfo>)info {
    // Scanner mode exited — update UI if needed
    NSLog(@"Scanner disabled: %@", info.status);
}
```

### Disabling the scanner

Call `disableScanner` to exit scan mode explicitly. In single-scan mode (`multiScan:NO`) the terminal exits scan mode automatically after one read.

```objc
[self.heftClient disableScanner];
```

---

## Events and delegate callbacks

Your view controller must conform to two protocols: **`HeftDiscoveryDelegate`** (set on `HeftManager`) and **`HeftStatusReportDelegate`** (set on `HeftManager.clientForDevice:…:delegate:`).

### HeftDiscoveryDelegate

#### didFindAccessoryDevice:

```objc
- (void)didFindAccessoryDevice:(HeftRemoteDevice *)newDevice;
```

Fired during Bluetooth discovery each time a new terminal is found. `newDevice` has `name` and `address` properties. Typically used to populate a device picker or auto-connect to a known device.

```objc
- (void)didFindAccessoryDevice:(HeftRemoteDevice *)newDevice {
    NSLog(@"Found device: %@ address: %@", newDevice.name, newDevice.address);
    // Auto-connect if this is the known device
}
```

---

#### didDiscoverFinished

```objc
- (void)didDiscoverFinished;
```

Fired when Bluetooth discovery completes. Access all found devices via `manager.connectedCardReaders`.

```objc
- (void)didDiscoverFinished {
    HeftRemoteDevice *device = [self.manager.connectedCardReaders firstObject];
    if (device) {
        [self.manager clientForDevice:device sharedSecret:sharedSecret delegate:self];
    }
}
```

---

#### didLostAccessoryDevice:

```objc
- (void)didLostAccessoryDevice:(HeftRemoteDevice *)oldDevice;
```

Fired when a previously-discovered Bluetooth terminal goes out of range or disconnects. Re-run discovery if reconnection is needed.

---

### HeftStatusReportDelegate

#### didConnect:

```objc
- (void)didConnect:(id<HeftClient>)client;
```

Fired when a connection to a terminal is successfully established. The `client` parameter is the `HeftClient` to use for all subsequent transaction calls. **Do not start any financial operations before this fires.**

Also check `isTransactionResultPending` here to recover any pending transaction result.

```objc
- (void)didConnect:(id<HeftClient>)client {
    heftClient = client;
    NSLog(@"didConnect: mpedInfo=%@", client.mpedInfo);

    if ([heftClient isTransactionResultPending]) {
        [heftClient retrievePendingTransaction];
    }
}
```

---

#### responseStatus:

```objc
- (void)responseStatus:(id<ResponseInfo>)info;
```

Fired multiple times during a transaction with intermediate status updates from the terminal (e.g. "Waiting for card", "PIN entry", "Connecting to host"). Use to update your UI to show transaction progress.

| `info` property | Type | Notes |
|---|---|---|
| `statusCode` | `int` | Numeric status code (see EFT_PP_STATUS table in skill) |
| `status` | `NSString` | Human-readable status string |
| `xml` | `NSDictionary` | Detailed XML state of the terminal |

```objc
- (void)responseStatus:(id<ResponseInfo>)info {
    NSLog(@"responseStatus: code=0x%04lX status=%@", (long)info.statusCode, info.status);
    dispatch_async(dispatch_get_main_queue(), ^{
        self.statusLabel.text = info.status;
    });
}
```

---

#### responseError:

```objc
- (void)responseError:(id<ResponseInfo>)info;
```

Fired when an error occurs during a transaction. `info.status` contains the error message.

```objc
- (void)responseError:(id<ResponseInfo>)info {
    NSLog(@"responseError: code=0x%04lX status=%@", (long)info.statusCode, info.status);
}
```

---

#### responseFinanceStatus:

```objc
- (void)responseFinanceStatus:(id<FinanceResponseInfo>)info;
```

The primary transaction result callback. Fired when the terminal finishes processing a transaction. `info` is a `FinanceResponseInfo` object — see the [FinanceResponseInfo reference](#financeresponseinfo) below for all fields.

```objc
- (void)responseFinanceStatus:(id<FinanceResponseInfo>)info {
    // Use toDictionary for a canonical log entry (all non-empty fields)
    NSLog(@"responseFinanceStatus: %@", [info toDictionary]);

    NSString *finStatus = info.finStatus;   // "AUTHORISED", "DECLINED", "CANCELLED", etc.

    if ([finStatus isEqualToString:@"AUTHORISED"]) {
        // Store the eFTTransactionID — needed for reversal/refund
        NSString *txId = info.eFTTransactionID;
        [self fulfillOrder:txId];
    } else if ([finStatus isEqualToString:@"DECLINED"]) {
        [self showDeclined:info.errorMessage];
    } else if ([finStatus isEqualToString:@"CANCELLED"]) {
        [self showCancelled];
    } else if ([finStatus isEqualToString:@"PARTIAL_APPROVAL"]) {
        // US only — cardholder did not have enough funds
        NSInteger authorised = info.authorisedAmount;
        NSInteger due = [info.dueAmount integerValue];
        [self collectRemainder:due];
    }
}
```

---

#### requestSignature:

```objc
- (void)requestSignature:(NSString *)receipt;
```

Fired during a financial operation when the terminal requires cardholder signature verification. The `receipt` parameter is the merchant receipt to display or print for the customer to sign.

:::note signatureUrl handling
`receipt` may be either a URL (starting with `http`) pointing to an image, or a base64-encoded image binary (fallback when the upload fails). Always check with `hasPrefix("http")` before treating it as a URL.
:::

```objc
- (void)requestSignature:(NSString *)receipt {
    if ([receipt hasPrefix:@"http"]) {
        // Load image from URL
        NSURL *url = [NSURL URLWithString:receipt];
        // ... display image
    } else {
        // Decode base64 image
        NSData *imageData = [[NSData alloc] initWithBase64EncodedString:receipt options:0];
        UIImage *image = [UIImage imageWithData:imageData];
        // ... display image
    }

    // After customer signs, call acceptSignature: YES or NO
    [heftClient acceptSignature:YES];
}
```

---

#### cancelSignature

```objc
- (void)cancelSignature;
```

Fired when the terminal cancels the signature request (e.g. cardholder timeout on the terminal side).

---

#### responseRecoveredTransactionStatus:

```objc
- (void)responseRecoveredTransactionStatus:(id<FinanceResponseInfo>)info;
```

Fired in response to `retrievePendingTransaction`. `info` contains the recovered transaction result, or `nil` if no pending transaction was found. The `recoveredTransaction` field on the result is `YES`.

```objc
- (void)responseRecoveredTransactionStatus:(id<FinanceResponseInfo>)info {
    if (info == nil) {
        NSLog(@"No pending transaction found");
        return;
    }
    NSLog(@"Recovered transaction: %@", [info toDictionary]);
    // Treat as a normal responseFinanceStatus result
}
```

---

#### responseLogInfo:

```objc
- (void)responseLogInfo:(id<LogInfo>)info;
```

Fired in response to `logGetInfo`. `info.log` contains the device log as a string.

```objc
- (void)responseLogInfo:(id<LogInfo>)info {
    NSLog(@"deviceLog: %@", info.log);
}
```

---

## Key objects

### HeftManager

`HeftManager` is the entry point for the SDK. Obtain the singleton with `[HeftManager sharedManager]`. Set its `delegate` to receive `HeftDiscoveryDelegate` events.

| Property | Type | Notes |
|---|---|---|
| `connectedCardReaders` | `NSArray` | All discovered payment terminals |
| `delegate` | `NSObject<HeftDiscoveryDelegate>` | Discovery event receiver |
| `version` | `NSString` | Current SDK version |

**Key methods:**

| Method | Notes |
|---|---|
| `+ sharedManager` | Returns the singleton manager |
| `- startDiscovery` | Starts Bluetooth discovery |
| `- clientForDevice:sharedSecret:delegate:` | Creates a `HeftClient` connection |
| `- resetDevices` | Clears the discovered device list |

---

### HeftClient

`HeftClient` is the transaction interface. Obtained via `didConnect:`. All financial operations are called on this object.

| Property | Type | Notes |
|---|---|---|
| `sharedSecret` | `NSString` | The shared secret used to authenticate |
| `mpedInfo` | `NSDictionary` | Terminal details (serial number, firmware version, etc.) |
| `isTransactionResultPending` | `BOOL` | `YES` if a previous transaction result is pending recovery |

**`mpedInfo` dictionary keys:**

| Key constant | Notes |
|---|---|
| `kSerialNumberInfoKey` | Terminal serial number |
| `kPublicKeyVersionInfoKey` | Public key version |
| `kEMVParamVersionInfoKey` | EMV parameters version |
| `kAppNameInfoKey` | Terminal application name |
| `kAppVersionInfoKey` | Terminal application version |
| `kManufacturerCodeInfoKey` | Hardware manufacturer |
| `kModelCodeInfoKey` | Hardware model |

---

### HeftRemoteDevice

Returned during discovery; passed to `clientForDevice:…`.

| Property | Type | Notes |
|---|---|---|
| `name` | `NSString` | Device name (Bluetooth display name) |
| `address` | `NSString` | Bluetooth address |
| `accessory` | `EAAccessory` | The underlying EAAccessory object (Lightning only) |

---

### SaleOptions

Options object for `saleWithAmount` and `saleAndTokenizeWithAmount`.

| Property | Type | Notes |
|---|---|---|
| `customerReference` | `NSString` | Merchant-defined reference, returned unchanged in the result |
| `merchantAuth` | `MerchantAuth` | Multi-MID authentication credentials |
| `divideByMonths` | `NSString` | Budget period in months (SureSwipe/Altech only) |

---

### MerchantAuth / Credential

Used for multi-MID scenarios where a single terminal can process transactions for multiple merchant accounts.

```objc
MerchantAuth *auth = [MerchantAuth new];
Credential *cred = [Credential new];
cred.acquirer = [Credential getAcquirerFromString:@"acquirer_name"];
cred.mid = @"merchant_id";
cred.tid = @"terminal_id";
[auth add:cred];
// Add multiple credentials if needed
```

---

### FinanceResponseInfo

The full transaction result object delivered to `responseFinanceStatus:`. Inherits from `ResponseInfo`.

| Property | Type | Notes |
|---|---|---|
| `finStatus` | `NSString` | Financial outcome: `"AUTHORISED"`, `"DECLINED"`, `"CANCELLED"`, `"FAILED"`, `"PARTIAL_APPROVAL"`, `"PROCESSED"`, `"UNDEFINED"` |
| `financialResult` | `NSInteger` | Numeric code: 0x00=UNDEFINED, 0x01=APPROVED, 0x02=DECLINED, 0x03=PROCESSED, 0x04=FAILED, 0x05=CANCELLED |
| `statusMessage` | `NSString` | Human-readable result message (e.g. `"AUTHORISED"`, `"DECLINED"`) |
| `type` | `NSString` | Transaction type: `"SALE"`, `"REFUND"`, `"VOID_SALE"`, `"VOID_REFUND"`, `"TOKENIZE_CARD"`, `"SALE_AND_TOKENIZE_CARD"` |
| `authorisedAmount` | `NSInteger` | Amount authorised in minor currency unit |
| `requestedAmount` | `NSString` | Amount originally requested |
| `totalAmount` | `NSString` | Total charged (requested + gratuity, or partial approval amount) |
| `gratuityAmount` | `NSString` | Tip amount entered by cardholder on terminal |
| `gratuityPercentage` | `NSString` | Tip as percentage of requested amount |
| `dueAmount` | `NSString` | Remaining amount after partial approval (US only) |
| `currency` | `NSString` | Currency used for the transaction |
| `eFTTransactionID` | `NSString` | Unique GUID for this transaction — store for reversal/refund |
| `originalEFTTransactionID` | `NSString` | GUID of the original transaction (refunds and reversals only) |
| `transactionId` | `NSString` | Internal transaction ID |
| `eFTTimestamp` | `NSString` | Transaction timestamp in ISO format (YYYYMMDDHHmmSS) |
| `authorisationCode` | `NSString` | Approval code from the processor |
| `cardSchemeName` | `NSString` | Card brand: `"Visa"`, `"Mastercard"`, `"Amex"`, etc. |
| `cardEntryType` | `NSString` | How card was read: `"ICC"` (chip), `"NFC"` (tap), `"MSR"` (swipe) |
| `verificationMethod` | `NSString` | Cardholder verification: `"PIN"`, `"SIGNATURE"`, `"NO_VERIFICATION"` |
| `CardToken` | `NSString` | Card token (tokenization operations) |
| `customerReceipt` | `NSString` | Customer receipt in HTML format |
| `merchantReceipt` | `NSString` | Merchant receipt in HTML format |
| `errorMessage` | `NSString` | Detailed error reason (non-empty on DECLINED/FAILED) |
| `customerReference` | `NSString` | Customer reference passed at transaction start |
| `budgetNumber` | `NSString` | Budget period reference (SureSwipe/Altech only) |
| `chipTransactionReport` | `NSString` | Full EMV parameter report (if present) |
| `balance` | `NSString` | Cardholder card balance (if acquirer supports it) |
| `recoveredTransaction` | `BOOL` | `YES` if this result is from a recovered pending transaction |
| `isRestarting` | `BOOL` | `YES` if the terminal will restart (e.g. after firmware update) — disconnect and wait for reconnect |

**FinancialStatus values:**

| `finStatus` string | `financialResult` hex | Meaning | Action |
|---|---|---|---|
| `"AUTHORISED"` | `0x01` | Transaction approved | Store `eFTTransactionID`, fulfil order |
| `"DECLINED"` | `0x02` | Declined by issuer | Show decline, do not retry same card |
| `"CANCELLED"` | `0x05` | Cardholder or operator cancelled | Allow retry |
| `"FAILED"` | `0x04` | Processing error | Check `errorMessage` |
| `"PARTIAL_APPROVAL"` | — | Partial funds available (US only) | Collect remaining via `dueAmount` |
| `"PROCESSED"` | `0x03` | Non-financial operation complete (e.g. `financeInit`) | N/A |
| `"UNDEFINED"` | `0x00` | No result received | Do not retry — recover server-side |

---

## Operations available

| Operation | iOS HiLite support |
|---|---|
| **Sale** | ✅ |
| **Refund** | ✅ |
| **Sale Reversal** | ✅ |
| **Refund Reversal** | ✅ |
| **Sale and Tokenize** | ✅ |
| **Tokenize Card** | ✅ |
| **Pre-Authorization** | ❌ |
| **Tip Adjustment** | ✅\* remote API call (no device required) |

\* `tipAdjustment()` in `HapiRemoteService` calls the Handpoint cloud API directly — not a device command. Requires `setupHandpointApiConnection(sharedSecret:)` to be called first. Alternatively, use the [Back Office integration guide](/reference/backoffice-integration-guide) server-side with `ApiKeyCloud`. Acquirers: EPI, PAYSAFE (non-Interac cards only).

Acquirer-specific availability: [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) — `ios-hilite` column.

## Validation & certification

**Required for every integration:**

- [ ] Bluetooth discovery and Lightning direct-connect both tested (if supporting both reader types)
- [ ] `didConnect` gate verified — no financial operations before callback fires
- [ ] `isTransactionResultPending` checked in `didConnect:` — `retrievePendingTransaction` called when pending
- [ ] `responseFinanceStatus:` handles all `finStatus` values: AUTHORISED, DECLINED, CANCELLED, FAILED, PARTIAL_APPROVAL, UNDEFINED
- [ ] `eFTTransactionID` stored on every AUTHORISED result — required for reversal/refund
- [ ] `requestSignature:` implemented — `hasPrefix("http")` check before URL rendering
- [ ] `transactionReference` generated and persisted to server before every call — required for server-side recovery (no `getTransactionStatus` on iOS SDK)
- [ ] Server-side UNDEFINED recovery implemented and tested — `GET /transactions/{ref}/status` + auto-reversal
- [ ] Background mode configured and app tested with screen locked during transaction
- [ ] `toDictionary` log line emitted for every `responseFinanceStatus:` callback

→ Full scenario checklist: [Validate your integration](/reference/validate-integration)

→ Error codes: [Error codes](/reference/error-codes)

## See Also

- [iOS Objects Reference](/reference/ios-objects-reference) — full type definitions for transaction results, options, and enums
