---
title: iOS SDK (HiLite) — Integration Guide
sidebar_position: 4
description: Step-by-step guide to integrating the Handpoint iOS SDK with a HiLite Bluetooth or Lightning card reader — setup, discovery, transaction flow, and certification.
---

# iOS SDK (HiLite) — Integration Guide

:::info AI coding agents
Fetch the integration-path skill for machine-readable setup guidance and code examples: [`/.well-known/skills/paths/ios-hilite.md`](/.well-known/skills/paths/ios-hilite.md)
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
    NSMutableDictionary *devices = [self.manager connectedCardReaders];
    HeftRemoteDevice *device = [devices.allValues firstObject];
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
HeftRemoteDevice *device = [[self.manager connectedCardReaders].allValues firstObject];
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

## Simulator test amounts

When testing with the SDK simulator (`libheft.a` from `HeftSimulatorLibrary`):

| Amount | Behaviour |
|---|---|
| `1000` | Declined |
| `2000` | User Cancelled |
| `3000` | Signature Requested |
| Any other | Approved |

## Operations available

| Operation | iOS HiLite support |
|---|---|
| **Sale** | ✅ |
| **Refund** | ✅ |
| **Reversal** | ✅ |
| **Tokenization** | ✅ |
| **Pre-Authorization** | ❌ |
| **Tip Adjustment** | ✅ (EPI only) |

Acquirer-specific availability: [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) — `ios-hilite` column.

## Validation & certification

**Required for every integration:**

- [ ] Bluetooth discovery and Lightning direct-connect both tested (if supporting both reader types)
- [ ] `didConnect` gate verified — no financial operations before callback fires
- [ ] `responseFinanceStatus` handles all `statusMessage` values correctly
- [ ] Background mode configured and app tested with screen locked during transaction

→ Full scenario checklist: [Validate your integration](/reference/validate-integration)

→ Error codes: [Error codes](/reference/error-codes)
