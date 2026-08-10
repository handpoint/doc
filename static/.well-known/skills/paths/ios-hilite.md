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

## See also

- Acquirer constraints: load `acquirers/{acquirer}.md`
- Devices: https://developer.handpoint.com/reference/devices
