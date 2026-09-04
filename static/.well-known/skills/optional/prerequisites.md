# Integration prerequisites — optional skill

Load this skill when the user asks how to get set up, what credentials they need, what hardware is required, or how a test merchant is created.

---

## Who handles what

The referral partner or acquirer (EPI, PAYSAFE, EmerchantPay, Paystrax) is responsible for:
- Merchant onboarding with the acquirer
- Creating and configuring merchant records in TMS
- Enabling capabilities (remote sale, tokenization, pre-auth) per merchant
- Providing the ISV with credentials for their integration

The ISV is responsible for the integration only. The ISV does not have TMS access and does not manage merchant records.

---

## Credentials

The partner/acquirer provides two types of credentials depending on the integration path:

| Integration path | Processing credential | Analytics credential |
|---|---|---|
| REST API / Cloud API | `cloudApiKey` → `ApiKeyCloud` header | — |
| Android SDK — PAX | `sharedSecret` → `hapi.init()` | `cloudApiKey` → optional, enables cloud listening mode |
| Android SDK — HiLite | `sharedSecret` → `hapi.init()` | `cloudApiKey` → txnFeedAPI only (not passed to SDK) |
| iOS SDK — HiLite | `sharedSecret` → `HapiManager(apiKey:)` | `cloudApiKey` → txnFeedAPI only (not passed to SDK) |
| Cordova plugin | `sharedSecret` → `HAPI.init({ apiKey: '...' })` | — |
| Transaction Feed API | — | `cloudApiKey` → `Authorization: Bearer` header |
| Windows SDK / JavaScript SDK | `cloudApiKey` | REST API wrappers — command the terminal via cloud |

`cloudApiKey` and `ApiKeyCloud` are the same credential — the REST API, txnFeedAPI, and deprecated wrappers all use the same key.

The partner provides staging credentials for development and production credentials for go-live. These are separate — never use production credentials during development.

---

## Cloud API (REST)

**What the partner provides:** staging `cloudApiKey` for the test merchant.

**What the ISV needs:**
- A PAX SmartPOS terminal with the Handpoint Payments App installed, connected to Wi-Fi
- The `cloudApiKey` in the `ApiKeyCloud` header — no other setup required

The terminal and Payments App setup is handled by the partner. The ISV only needs the API key.

---

## Android SDK — PAX on-device

**What the partner provides:**
- Staging `sharedSecret`
- Nexus repository credentials (username + password for `nexus.handpoint.ninja`)
- The specific SDK RC version to use

**What the ISV needs for development:**

The ISV requires a **debug PAX device** — production terminals cannot load sideloaded apps. A debug unit is sourced through the partner or Handpoint.

**1. Inject staging keys — hiKeyloader**

Use the **hiKeyloader** app to inject Handpoint staging payment keys onto the debug PAX device. Without this the Payments App cannot process test transactions. The hiKeyloader APK and staging key package are provided by the partner or Handpoint Support.

**2. Verify key injection — Payments App RC**

Install the Payments App RC version on the debug device and run a test transaction to confirm the staging keys are correctly injected before building your own app. The RC version is specified by the partner.

**3. Configure Nexus**

`build.gradle` (project level):
```groovy
allprojects {
    repositories {
        maven {
            url 'https://nexus.handpoint.ninja/repository/maven-releases/'
            credentials {
                username = NEXUS_USERNAME  // from local.properties — never commit
                password = NEXUS_PASSWORD
            }
        }
    }
}
```

`local.properties` (add to `.gitignore`):
```
nexus.username=YOUR_NEXUS_USERNAME
nexus.password=YOUR_NEXUS_PASSWORD
```

**4. Add the SDK dependency**

```groovy
// app/build.gradle
dependencies {
    implementation 'com.handpoint.api:sdk:7.x.x-RCx'  // exact version from partner
}
```

**5. Initialise with the sharedSecret**

```kotlin
hapi.init("YOUR_SHARED_SECRET")
```

---

## Android SDK — HiLite Bluetooth

**What the partner provides:** staging `sharedSecret`, Nexus credentials, SDK RC version.

**What the ISV needs:**
- HiLite Bluetooth card reader (charged and powered on)
- Android phone or tablet

The HiLite does not require key injection — staging keys are not stored on the reader. The `sharedSecret` is used in the app on the phone/tablet.

Same Nexus + SDK dependency setup as the PAX path. Bluetooth permissions required in `AndroidManifest.xml`:

```xml
<!-- Android 12+ -->
<uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />

<!-- Android 11 and below -->
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

HiLite firmware updates are automatic — the reader self-updates when it connects to Handpoint's backend. No ISV action required.

---

## iOS SDK — HiLite Bluetooth

**What the partner provides:** staging `sharedSecret`, iOS SDK version.

**What the ISV needs:**
- HiLite Bluetooth card reader
- iPhone or iPad (iOS 13+)

**Setup:**

CocoaPods:
```ruby
pod 'HandpointSDK'
```

Or add via Swift Package Manager from the Handpoint iOS SDK repository.

`Info.plist` permissions:
```xml
<key>NSBluetoothAlwaysUsageDescription</key>
<string>Used to connect to the HiLite card reader</string>
<key>NSBluetoothPeripheralUsageDescription</key>
<string>Used to connect to the HiLite card reader</string>
```

HiLite firmware updates are automatic. No ISV action required.

---

## Cordova / Ionic

**What the partner provides:** staging `cloudApiKey`, plugin version.

```bash
cordova plugin add cordova-plugin-handpoint
# or for Ionic:
npm install cordova-plugin-handpoint && ionic cap sync
```

Underlying hardware requirements follow the Android or iOS HiLite path.

---

## Contacting the partner

The ISV's point of contact for credentials and merchant setup is their referral partner or acquirer — not Handpoint directly. The partner contacts Handpoint on the ISV's behalf for anything that requires TMS or acquirer-side configuration.
