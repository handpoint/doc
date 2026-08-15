---
# iOS SDK — HiLite Bluetooth path skill

Use this path when your iPhone or iPad app communicates with a HiLite Bluetooth card reader.

Also load your acquirer skill: `acquirers/{acquirer}.md`

## Capabilities not available on HiLite

- Pre-authorization
- Remote sale on-terminal (no manual card entry keypad)

## CocoaPods / Swift Package setup

```ruby
# Podfile
pod 'HandpointSDK'
```

Or add via Swift Package Manager from the Handpoint iOS SDK repository.

## Initialization

```swift
import HandpointSDK

class PaymentManager: NSObject, HapiManagerDelegate {

    var hapiManager: HapiManager!
    var connectedDevice: Device?

    func setup() {
        hapiManager = HapiManager(delegate: self, apiKey: "YOUR_SHARED_SECRET",
                                  connectionMethod: .bluetooth)
        hapiManager.startMonitoring()
    }

    // Called when nearby HiLite devices are found
    func didFinishDeviceDiscovery(_ devices: [Device]) {
        if let device = devices.first {
            connectedDevice = device
            hapiManager.connect(device)
        }
    }

    func transactionResultReady(_ result: TransactionResult, device: Device) {
        let status = result.finStatus    // .authorised, .declined, .cancelled, .failed, .undefined
        let txId   = result.transactionID
    }
}
```

## Sale

```swift
let options = SaleOptions()
options.customerReference = "ORDER-123"
// EmerchantPay / Paystrax only:
// options.tipAmount = 150

hapiManager.sale(amount: 1000, currency: .USD, options: options)
// Result in transactionResultReady delegate method
```

## Refund

```swift
// Linked
hapiManager.refund(amount: 1000, currency: .USD,
                   originalTransactionId: "transactionID", options: RefundOptions())

// Unlinked
hapiManager.refund(amount: 1000, currency: .USD, options: RefundOptions())
```

## Reversal

```swift
hapiManager.reversal(originalTransactionId: "transactionID")
```

## Tip adjustment (EPI only)

```swift
hapiManager.tipAdjustment(tipAmount: 200, originalTransactionId: "transactionID")
```

## Batch close (EPI only)

```swift
hapiManager.endOfDay()
```

## finStatus values

| Value | Meaning | Action |
|---|---|---|
| `.authorised` | Approved | Store `transactionID`, fulfil order |
| `.declined` | Declined | Do not retry same card |
| `.cancelled` | Cardholder cancelled | Allow retry |
| `.failed` | Terminal error | Check `statusMessage` |
| `.undefined` | No result received | Do not retry — recover via status call |

## UNDEFINED recovery

`UNDEFINED` means no result was received. **Do not retry** — the transaction may have processed.

**HiLite does not support `transactionReference`** — `hapiManager.getTransactionStatus()` and the `/status/{transactionReference}` endpoint are not available on this path. The only recovery mechanism is the Transaction Feed API.

Recovery steps:
1. Query the feed for the terminal serial number and the time window around the original request
2. Match the candidate transaction by amount, currency, and masked card number (if available to your UI)
3. Found with `finStatus: AUTHORISED` → transaction processed; do not retry; store the `transactionID`
4. Not found → safe to retry

Load `optional/transaction-feed.md` for the full feed query and field reference.

## Bluetooth connection lifecycle

Call `startMonitoring()` on startup. `didFinishDeviceDiscovery` may be called multiple times. Re-call `startMonitoring()` if the device disconnects.

## Required Info.plist keys

```xml
<key>NSBluetoothAlwaysUsageDescription</key>
<string>Used to connect to the HiLite card reader</string>
<key>NSBluetoothPeripheralUsageDescription</key>
<string>Used to connect to the HiLite card reader</string>
```

## Logging

Logging is required for integration validation. Log every delegate callback; use `toDictionary()` on the finance result for the canonical log entry.

### Set device log level

```objc
// Objective-C — call after didConnect:
[self.api logSetLevel:eLogFull];  // eLogNone=0 eLogError=1 eLogInfo=2 eLogFull=3 eLogDebug=4
[self.api logReset];              // clear prior device logs
```

```swift
// Swift
api.logSetLevel(eLogFull)
api.logReset()
```

### Fetch device logs

```objc
// Trigger fetch — result arrives in responseLogInfo: delegate
[self.api logGetInfo];

- (void)responseLogInfo:(id<LogInfo>)info {
    NSLog(@"deviceLog: %@", info.log);
}
```

### Log every delegate callback

```objc
// Objective-C
- (void)didConnect:(id<HeftClient>)client {
    NSLog(@"didConnect: %@ mpedInfo=%@", client ? @"success" : @"failed", client.mpedInfo);
}

- (void)didFindAccessoryDevice:(HeftRemoteDevice *)newDevice {
    NSLog(@"didFindAccessoryDevice: name=%@ address=%@", newDevice.name, newDevice.address);
}

- (void)responseStatus:(id<ResponseInfo>)info {
    NSLog(@"responseStatus: code=%ld status=%@", (long)info.statusCode, info.status);
}

- (void)responseError:(id<ResponseInfo>)info {
    NSLog(@"responseError: code=%ld status=%@", (long)info.statusCode, info.status);
}

- (void)responseFinanceStatus:(id<FinanceResponseInfo>)info {
    // toDictionary serializes every non-empty field — use this as the canonical log line
    NSLog(@"responseFinanceStatus: %@", [info toDictionary]);
}
```

```swift
// Swift
func responseFinanceStatus(_ info: FinanceResponseInfo) {
    print("responseFinanceStatus: \(info.toDictionary())")
}
```

### Log before each operation

```objc
NSLog(@"sale: amount=%ld currency=%@", (long)amount, currency);
[self.api saleWithAmount:amount currency:currency];
```

### Minimum fields to extract from result

```objc
NSString  *finStatus    = info.finStatus;           // "AUTHORISED", "DECLINED", "FAILED", etc.
NSString  *eftTxId      = info.eFTTransactionID;    // store — needed for reversal/refund
NSInteger  authAmount   = info.authorisedAmount;    // in minor units
NSString  *currency     = info.currency;            // ISO alpha code
NSString  *cardScheme   = info.cardSchemeName;      // "Visa", "Mastercard", etc.
NSString  *maskedCard   = info.maskedCardNumber;    // for UNDEFINED recovery matching
NSString  *errorMsg     = info.errorMessage;        // non-empty on DECLINED / FAILED
NSString  *statusMsg    = info.statusMessage;       // human-readable result text
```

### FinancialStatus values

| `finStatus` string | `financialResult` int | Meaning |
|---|---|---|
| `"AUTHORISED"` | `1` | Approved — fulfil order |
| `"DECLINED"` | `2` | Declined by issuer |
| `"CANCELLED"` | `5` | Cardholder or operator cancelled |
| `"FAILED"` | `4` | Processing error — check `errorMessage` |
| `"PARTIAL"` | `6` | Partial approval — check `authorisedAmount` vs `requestedAmount` |

### EFT_PP_STATUS codes (in responseStatus: / responseError:)

Mid-transaction status codes appear in `info.statusCode`. Key values used in the transaction flow:

| Code | String | When it fires |
|---|---|---|
| `0x0014` | `WaitingForCard` | Terminal waiting for card tap/insert/swipe |
| `0x0019` | `PinInput` | Cardholder entering PIN |
| `0x001F` | `WaitingSignature` | Signature prompt displayed |
| `0x0020` | `WaitingHostConnect` | Connecting to acquirer |
| `0x0035` | `PartialApproval` | Partial approval — prompt cardholder for remaining |
| `0x0006` | `ConnectTimeout` | Reader connection timed out — check Bluetooth proximity |
| `0x0007` | `ConnectError` | Connection error — retry `clientForDevice:sharedSecret:delegate:` |
| `0x0012` | `UserCancelled` | Cardholder pressed Cancel |
| `0x001D` | `SharedSecretInvalid` | Wrong shared secret — check credentials |
| `0x9999` | `InitialisationComplete` | Reader is ready for transactions |

## See also

- Acquirer constraints: load `acquirers/{acquirer}.md`
- Devices: https://developer.handpoint.com/reference/devices
