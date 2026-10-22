---
# iOS SDK — HiLite Bluetooth/Lightning path skill

Use this path when your iPhone or iPad app communicates with a HiLite card reader via Bluetooth or Lightning (EAAccessory). The iOS device runs your POS app; the HiLite handles card reading and P2PE encryption.

Also load your acquirer skill: `acquirers/{acquirer}.md`

## Capabilities not available on this path

- Pre-authorization (no on-device pre-auth flow)
- MOTO / remote sale on-terminal (no manual card entry keypad)
- `getTransactionStatus` — NOT available on iOS SDK; use Transaction Feed API for UNDEFINED recovery

## SDK version

iOS SDK 4.0.2. Headers: `HandpointAll.h`. Library: `libheft.a`. Framework: `HandpointSDK.framework`.

## CocoaPods / Swift Package setup

```ruby
# Podfile
pod 'HandpointSDK'
```

Or add `HandpointSDK.framework` via Carthage / Swift Package Manager (contact Handpoint for the URL).

Manual: add `HandpointAll.h` + `libheft.a` to your project. Linker flag: `-lc++`. Build Active Architecture Only: `YES`.

## Info.plist requirements

```xml
<!-- Lightning (HiPro) external accessory -->
<key>UISupportedExternalAccessoryProtocols</key>
<array><string>com.datecs.pinpad</string></array>

<!-- Background mode keeps session alive -->
<key>UIBackgroundModes</key>
<array><string>external-accessory</string></array>

<!-- Bluetooth (iOS 13+) -->
<key>NSBluetoothAlwaysUsageDescription</key>
<string>Used to connect to the HiLite card reader</string>
<key>NSBluetoothPeripheralUsageDescription</key>
<string>Used to connect to the HiLite card reader</string>
```

## Core architecture

Two protocols your view controller must implement:
- `HeftDiscoveryDelegate` — set on `HeftManager.delegate`; receives discovery events
- `HeftStatusReportDelegate` — set via `clientForDevice:…:delegate:`; receives transaction events

`HeftManager` → discovery → `HeftRemoteDevice` → `clientForDevice:…` → `HeftClient` → transactions → `responseFinanceStatus:`

## Initialization — Bluetooth

```objc
// Objective-C
#import "HandpointAll.h"

@interface ViewController () <HeftDiscoveryDelegate, HeftStatusReportDelegate>
@property HeftManager *manager;
@property id<HeftClient> heftClient;
@end

- (void)viewDidLoad {
    [super viewDidLoad];
    self.manager = [HeftManager sharedManager];
    self.manager.delegate = self;
    [self.manager startDiscovery];
}

- (void)didFindAccessoryDevice:(HeftRemoteDevice *)newDevice {
    // Fires for each BT device found — show in picker or auto-connect
}

- (void)didDiscoverFinished {
    HeftRemoteDevice *device = [self.manager.connectedCardReaders.allValues firstObject];
    NSString *secret = @"0102030405060708091011121314151617181920212223242526272829303132";
    [self.manager clientForDevice:device sharedSecret:secret delegate:self];
}

- (void)didConnect:(id<HeftClient>)client {
    self.heftClient = client;
    // Check for pending transaction before starting new ones
    if ([client isTransactionResultPending]) {
        [client retrievePendingTransaction];
    }
}
```

```swift
// Swift
import HandpointSDK

class PaymentVC: UIViewController, HeftDiscoveryDelegate, HeftStatusReportDelegate {
    var manager: HeftManager!
    var heftClient: HeftClient?

    override func viewDidLoad() {
        super.viewDidLoad()
        manager = HeftManager.sharedManager()
        manager.delegate = self
        manager.startDiscovery()
    }

    func didDiscoverFinished() {
        guard let device = manager.connectedCardReaders?.values.first as? HeftRemoteDevice else { return }
        manager.clientForDevice(device,
            sharedSecret: "0102030405060708091011121314151617181920212223242526272829303132",
            delegate: self)
    }

    func didConnect(_ client: HeftClient!) {
        heftClient = client
        if client.isTransactionResultPending { client.retrievePendingTransaction() }
    }
}
```

## Initialization — Lightning (HiPro)

Skip discovery. Reader is already accessible via `connectedCardReaders`.

```objc
HeftRemoteDevice *device = [self.manager.connectedCardReaders.allValues firstObject];
[self.manager clientForDevice:device sharedSecret:secret delegate:self];
```

## Sale

```objc
// Objective-C — minimal
[heftClient saleWithAmount:1000 currency:@"GBP" cardholder:YES];

// With options
SaleOptions *options = [SaleOptions new];
options.customerReference = @"ORDER-123";
[heftClient saleWithAmount:1000 currency:Currency.GBP.alpha cardholder:YES options:options];
```

```swift
// Swift
heftClient?.saleWithAmount(1000, currency: "GBP", cardholder: true)
```

**Parameters:**

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `amount` | `NSInteger` | Yes | Minor unit (1000 = £10.00) |
| `currency` | `NSString` | Yes | ISO 4217 alpha, e.g. `@"GBP"` or `Currency.GBP.alpha` |
| `cardholder` | `BOOL` | Yes | `YES` for card-present |
| `reference` | `NSString` | No | Merchant reference, echoed in result |
| `options` | `SaleOptions` | No | `customerReference`, `merchantAuth`, `divideByMonths` |

Returns `BOOL` — `YES` if sent to terminal. Result: `responseFinanceStatus:`.

## Sale and Tokenize

Performs a sale and simultaneously tokenizes the card. Token returned in `CardToken` field of the result.

```objc
[heftClient saleAndTokenizeWithAmount:1000 currency:Currency.EUR.alpha];
```

## Sale Reversal (Void)

Reverts a previous sale. Must match original `amount`, `currency`, and `eFTTransactionID`. Same-day only.

```objc
[heftClient saleReversalWithAmount:1000
                           currency:Currency.EUR.alpha
                      transactionId:@"<eFTTransactionID from original sale>"
                            options:nil];
```

## Refund

Moves funds from merchant back to cardholder. `transaction` links to original sale and limits max refund amount.

```objc
// Linked refund
[heftClient refundWithAmount:1000
                    currency:Currency.EUR.alpha
                 transaction:@"<eFTTransactionID of sale>"];

// With merchant auth options
MerchantAuthOptions *opts = [MerchantAuthOptions new];
opts.customerReference = @"REF-456";
[heftClient refundWithAmount:500 currency:Currency.GBP.alpha transaction:txId options:opts];
```

## Refund Reversal (Void Refund)

Voids a previous refund. Must match original refund's `amount`, `currency`, and `eFTTransactionID`. Same-day only.

```objc
[heftClient refundReversalWithAmount:1000
                             currency:Currency.EUR.alpha
                        transactionId:@"<eFTTransactionID of refund>"
                              options:nil];
```

## Tokenize Card

Tokenizes the card without any payment. Token in `CardToken` field. Not available for all acquirers.

```objc
[heftClient tokenizeCard];
```

## Accept Signature

Called in response to `requestSignature:`. Must be called to continue or abort the transaction.

```objc
[heftClient acceptSignature:YES];  // Signature valid — continue
[heftClient acceptSignature:NO];   // Signature rejected — abort
```

## Retrieve Pending Transaction

Call in `didConnect:` when `isTransactionResultPending == YES`. Starting a new transaction discards the pending result.

```objc
- (void)didConnect:(id<HeftClient>)client {
    heftClient = client;
    if ([client isTransactionResultPending]) {
        [client retrievePendingTransaction]; // result in responseRecoveredTransactionStatus:
    }
}
```

## Tip Adjustment (EPI / TSYS / VANTIV — US only)

Cloud API call — no card reader required. Must call `setupHandpointApiConnection` first.

```objc
#include "HapiRemoteService.h"

setupHandpointApiConnection(@"<sharedSecret>");
tipAdjustment(@"<eFTTransactionID>", 1000, ^(TipAdjustmentStatus status) {
    if (status == TipAdjustmentAuthorised) { /* success */ }
    else if (status == TipAdjustmentDeclined) { /* declined */ }
    else if (status == TipAdjustmentFailed) { /* timeout — retry */ }
});
```

## Cancel

```objc
[heftClient cancel];
```

## Device management methods

| Method | Object | Notes |
|---|---|---|
| `+ sharedManager` | `HeftManager` | Singleton — call once |
| `- startDiscovery` | `HeftManager` | Starts BT scan; fires `didFindAccessoryDevice:` + `didDiscoverFinished` |
| `- clientForDevice:sharedSecret:delegate:` | `HeftManager` | Creates `HeftClient`; fires `didConnect:` on success |
| `- resetDevices` | `HeftManager` | Clears device list |
| `- financeInit` | `HeftClient` | Checks/downloads software+config updates |
| `- logSetLevel:` | `HeftClient` | `eLogNone=0 eLogInfo=1 eLogFull=2 eLogDebug=3` |
| `- logGetInfo` | `HeftClient` | Fetches device logs; result in `responseLogInfo:` |
| `- logReset` | `HeftClient` | Clears device logs |
| `- cancel` | `HeftClient` | Cancels current transaction |
| `- getEMVConfiguration` | `HeftClient` | Retrieves EMV configuration from terminal |

## Delegate methods — HeftDiscoveryDelegate

| Method | When it fires |
|---|---|
| `didFindAccessoryDevice:(HeftRemoteDevice *)newDevice` | Each BT device found during discovery |
| `didDiscoverFinished` | Discovery complete — call `clientForDevice:…` here |
| `didLostAccessoryDevice:(HeftRemoteDevice *)oldDevice` | BT device went out of range |

## Delegate methods — HeftStatusReportDelegate

| Method | When it fires |
|---|---|
| `didConnect:(id<HeftClient>)client` | Connection established — store client, gate all operations here |
| `responseStatus:(id<ResponseInfo>)info` | Mid-transaction status update (progress) |
| `responseError:(id<ResponseInfo>)info` | Error during transaction |
| `responseFinanceStatus:(id<FinanceResponseInfo>)info` | Transaction complete — primary result callback |
| `requestSignature:(NSString *)receipt` | Terminal needs customer signature |
| `cancelSignature` | Terminal cancelled signature request |
| `responseRecoveredTransactionStatus:(id<FinanceResponseInfo>)info` | Result from `retrievePendingTransaction` |
| `responseLogInfo:(id<LogInfo>)info` | Result from `logGetInfo` |

## requestSignature: handling

The `receipt` parameter is either a URL or a base64 image binary. Always check before use:

```objc
- (void)requestSignature:(NSString *)receipt {
    if ([receipt hasPrefix:@"http"]) {
        NSURL *url = [NSURL URLWithString:receipt];
        // Display image from URL
    } else {
        NSData *data = [[NSData alloc] initWithBase64EncodedString:receipt options:0];
        UIImage *img = [UIImage imageWithData:data];
        // Display image
    }
    // After customer signs, call acceptSignature:
}
```

## FinanceResponseInfo fields (complete)

Delivered via `responseFinanceStatus:` and `responseRecoveredTransactionStatus:`.

| Field | Type | Notes |
|---|---|---|
| `finStatus` | `NSString` | `"AUTHORISED"` `"DECLINED"` `"CANCELLED"` `"FAILED"` `"PARTIAL_APPROVAL"` `"PROCESSED"` `"UNDEFINED"` |
| `financialResult` | `NSInteger` | 0x00=UNDEFINED 0x01=APPROVED 0x02=DECLINED 0x03=PROCESSED 0x04=FAILED 0x05=CANCELLED |
| `statusMessage` | `NSString` | Human-readable result message |
| `type` | `NSString` | `"SALE"` `"REFUND"` `"VOID_SALE"` `"VOID_REFUND"` `"TOKENIZE_CARD"` `"SALE_AND_TOKENIZE_CARD"` |
| `authorisedAmount` | `NSInteger` | Authorised amount in minor unit |
| `requestedAmount` | `NSString` | Original requested amount |
| `totalAmount` | `NSString` | Total charged (requested + tip, or partial approval) |
| `gratuityAmount` | `NSString` | Tip amount entered by cardholder |
| `gratuityPercentage` | `NSString` | Tip as percentage of requested amount |
| `dueAmount` | `NSString` | Remaining amount after partial approval (US only) |
| `currency` | `NSString` | ISO 4217 alpha code |
| `eFTTransactionID` | `NSString` | **Primary transaction GUID** — store for reversal/refund |
| `originalEFTTransactionID` | `NSString` | GUID of original transaction (refunds/reversals only) |
| `transactionId` | `NSString` | Internal transaction number |
| `eFTTimestamp` | `NSString` | ISO timestamp: YYYYMMDDHHmmSS |
| `authorisationCode` | `NSString` | Processor approval code |
| `cardSchemeName` | `NSString` | `"Visa"` `"Mastercard"` `"Amex"` etc. |
| `cardEntryType` | `NSString` | `"ICC"` (chip) `"NFC"` (tap) `"MSR"` (swipe) |
| `verificationMethod` | `NSString` | `"PIN"` `"SIGNATURE"` `"NO_VERIFICATION"` |
| `CardToken` | `NSString` | Card token (tokenization operations) |
| `customerReceipt` | `NSString` | Customer receipt HTML |
| `merchantReceipt` | `NSString` | Merchant receipt HTML |
| `errorMessage` | `NSString` | Error detail (non-empty on DECLINED/FAILED) |
| `customerReference` | `NSString` | Reference passed at transaction start |
| `budgetNumber` | `NSString` | Budget period (SureSwipe/Altech only) |
| `balance` | `NSString` | Card balance (if acquirer supports) |
| `chipTransactionReport` | `NSString` | Full EMV parameter report |
| `recoveredTransaction` | `BOOL` | `YES` if from a recovered pending transaction |
| `isRestarting` | `BOOL` | `YES` = terminal about to restart — disconnect and wait |

## finStatus values and required actions

| `finStatus` | Meaning | Required action |
|---|---|---|
| `"AUTHORISED"` | Approved | Store `eFTTransactionID`, fulfil order |
| `"DECLINED"` | Issuer declined | Do not retry same card |
| `"CANCELLED"` | Cardholder/operator cancelled | Allow retry |
| `"FAILED"` | Processing error | Check `errorMessage`; may retry |
| `"PARTIAL_APPROVAL"` | Partial funds (US only) | Collect remaining via `dueAmount` |
| `"PROCESSED"` | Non-financial op complete | No payment action needed |
| `"UNDEFINED"` | No result received | **Do not retry** — recover server-side via Transaction Feed |

## UNDEFINED recovery

`UNDEFINED` means no result was received. **Do not retry** — the transaction may have processed.

**HiLite does not support `transactionReference`** — `getTransactionStatus()` and the `/status/{transactionReference}` endpoint are NOT available on this path.

Recovery steps:
1. Query the Transaction Feed API for the terminal serial number and the time window around the original request
2. Match by amount, currency, and masked card number (if available)
3. Found with `finStatus: AUTHORISED` → transaction processed; store `transactionID`; do NOT retry
4. Not found → safe to retry

Load `optional/transaction-feed.md` for the full feed query and field reference.

## On-device pending recovery (reconnect scenario)

```objc
// In didConnect: — always check before starting new transactions
- (void)didConnect:(id<HeftClient>)client {
    heftClient = client;
    if ([client isTransactionResultPending]) {
        [client retrievePendingTransaction];
        // Result arrives in responseRecoveredTransactionStatus:
        // Starting a new transaction without retrieving discards the pending result
    }
}
```

## EFT_PP_STATUS codes (responseStatus: / responseError:)

Mid-transaction codes in `info.statusCode`:

| Code | String | When it fires |
|---|---|---|
| `0x0014` | `WaitingForCard` | Terminal waiting for card tap/insert/swipe |
| `0x0019` | `PinInput` | Cardholder entering PIN |
| `0x001F` | `WaitingSignature` | Signature prompt displayed |
| `0x0020` | `WaitingHostConnect` | Connecting to acquirer |
| `0x0035` | `PartialApproval` | Partial approval — prompt cardholder for remaining |
| `0x0006` | `ConnectTimeout` | Reader connection timed out |
| `0x0007` | `ConnectError` | Connection error — retry `clientForDevice:…` |
| `0x0012` | `UserCancelled` | Cardholder pressed Cancel |
| `0x001D` | `SharedSecretInvalid` | Wrong shared secret — check credentials |
| `0x9999` | `InitialisationComplete` | Reader ready for transactions |

## Key objects

### HeftManager

Singleton. Entry point for the SDK.

| Property | Type | Notes |
|---|---|---|
| `connectedCardReaders` | `NSArray` | All discovered terminals |
| `delegate` | `HeftDiscoveryDelegate` | Discovery event receiver |
| `version` | `NSString` | SDK version |

### HeftClient (id<HeftClient>)

Transaction interface. Obtained via `didConnect:`.

| Property | Type | Notes |
|---|---|---|
| `sharedSecret` | `NSString` | Shared secret in use |
| `mpedInfo` | `NSDictionary` | Terminal details |
| `isTransactionResultPending` | `BOOL` | Pending recovery needed |

`mpedInfo` keys: `kSerialNumberInfoKey`, `kPublicKeyVersionInfoKey`, `kEMVParamVersionInfoKey`, `kAppNameInfoKey`, `kAppVersionInfoKey`, `kManufacturerCodeInfoKey`, `kModelCodeInfoKey`.

### HeftRemoteDevice

| Property | Type | Notes |
|---|---|---|
| `name` | `NSString` | Display name |
| `address` | `NSString` | BT address |
| `accessory` | `EAAccessory` | Underlying accessory (Lightning) |

### SaleOptions

| Property | Notes |
|---|---|
| `customerReference` | Echoed in result |
| `merchantAuth` | `MerchantAuth` — multi-MID credentials |
| `divideByMonths` | Budget period string (SureSwipe/Altech only) |

### MerchantAuth / Credential (multi-MID)

```objc
MerchantAuth *auth = [MerchantAuth new];
Credential *cred = [Credential new];
cred.acquirer = [Credential getAcquirerFromString:@"acquirer_name"];
cred.mid = @"merchant_id";
cred.tid = @"terminal_id";
[auth add:cred];
options.merchantAuth = auth;
```

## Logging requirements

Logging is required for integration validation.

```objc
// After didConnect: — set level and clear prior logs
[heftClient logSetLevel:eLogFull];
[heftClient logReset];

// Log every delegate callback
- (void)didConnect:(id<HeftClient>)client {
    NSLog(@"didConnect: %@ mpedInfo=%@", client ? @"success" : @"failed", client.mpedInfo);
    heftClient = client;
}
- (void)didFindAccessoryDevice:(HeftRemoteDevice *)newDevice {
    NSLog(@"didFindAccessoryDevice: name=%@ address=%@", newDevice.name, newDevice.address);
}
- (void)responseStatus:(id<ResponseInfo>)info {
    NSLog(@"responseStatus: code=0x%04lX status=%@", (long)info.statusCode, info.status);
}
- (void)responseError:(id<ResponseInfo>)info {
    NSLog(@"responseError: code=0x%04lX status=%@", (long)info.statusCode, info.status);
}
- (void)responseFinanceStatus:(id<FinanceResponseInfo>)info {
    // toDictionary serializes every non-empty field — canonical log line
    NSLog(@"responseFinanceStatus: %@", [info toDictionary]);
}
```

```swift
func responseFinanceStatus(_ info: FinanceResponseInfo!) {
    print("responseFinanceStatus: \(info.toDictionary() ?? [:])")
}
```

## Minimum fields to extract from result

```objc
NSString  *finStatus    = info.finStatus;           // "AUTHORISED", "DECLINED", etc.
NSString  *eftTxId      = info.eFTTransactionID;    // store — needed for reversal/refund
NSInteger  authAmount   = info.authorisedAmount;    // in minor units
NSString  *currency     = info.currency;
NSString  *cardScheme   = info.cardSchemeName;      // "Visa", "Mastercard", etc.
NSString  *errorMsg     = info.errorMessage;        // non-empty on DECLINED/FAILED
NSString  *cardToken    = info.CardToken;           // tokenization only
// Note: transactionReference is NOT available on this path
// Use Transaction Feed API for UNDEFINED recovery
```

## Simulator test amounts

| Amount | Behaviour |
|---|---|
| 1000 | Declined |
| 2000 | User Cancelled |
| 3000 | Signature Requested |
| Any other | Approved |

## Fee mitigation

Not supported on this path. Use PAX terminal with Android SDK.
Reference: https://developer.handpoint.com/reference/fee-mitigation

## Objects Reference

Full type reference: `/reference/ios-objects-reference`

Key types and where they appear:

| Type / Field | Notes |
|---|---|
| `HeftManager` | Singleton entry point — `sharedManager`, `startDiscovery`, `clientForDevice:sharedSecret:delegate:` |
| `HeftClient` | Transaction interface from `didConnect:` — all sale/refund/reversal methods return `BOOL` |
| `HeftDiscoveryDelegate` | `didFindAccessoryDevice:`, `didDiscoverFinished`, `didLostAccessoryDevice:` |
| `HeftStatusReportDelegate` | `didConnect:`, `responseStatus:`, `responseFinanceStatus:`, `requestSignature:`, `responseRecoveredTransactionStatus:` |
| `FinanceResponseInfo.finStatus` | `"AUTHORISED"` `"DECLINED"` `"CANCELLED"` `"FAILED"` `"PARTIAL_APPROVAL"` `"PROCESSED"` `"UNDEFINED"` |
| `FinanceResponseInfo.eFTTransactionID` | Primary GUID — store on AUTHORISED; use for reversal/refund |
| `FinanceResponseInfo.transactionId` | Internal ID — used for `tipAdjustment(transaction:…)` only |
| `FinanceResponseInfo.dueAmount` | Remaining balance after partial approval (US only) |
| `requestSignature:` receipt param | Either `https://` URL or raw base64 — always check `hasPrefix("http")` before use |
| `tipAdjustment()` | C function in `HapiRemoteService.h`; `TipAdjustmentStatus`: Authorised / Declined / Failed |
| Threading | All callbacks on background thread — `dispatch_async(dispatch_get_main_queue(), …)` for UI |

## See also

- Acquirer constraints: load `acquirers/{acquirer}.md`
- Devices: https://developer.handpoint.com/reference/devices
- Back-office API (tip adjustment, reversals, server-side): load `paths/backoffice-api.md`
- Transaction Feed (UNDEFINED recovery): load `optional/transaction-feed.md`
