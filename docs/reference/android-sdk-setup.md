---
title: Android SDK — Setup & Initialization
sidebar_position: 1
description: Step-by-step guide to adding the Handpoint Android SDK to a new integration — Gradle, AndroidManifest, and initialization code.
---

# Android SDK — Setup & Initialization

This guide covers everything required to integrate the Handpoint Android SDK into a new project, from adding the Gradle dependency through receiving your first `InitialisationComplete` signal.

:::info SDK variants
- **PAX / SmartPOS terminals** — the terminal runs your app directly; use `ConnectionMethod.ANDROID_PAYMENT`.
- **HiLite / Bluetooth terminals** — your Android app connects via Bluetooth; use `ConnectionMethod.BLUETOOTH`.

The initialization pattern is the same for both. The difference is in how you construct the `Device` object and trigger discovery.
:::

---

## 1. Add the Gradle dependency

In your **app-level** `build.gradle`:

```groovy
dependencies {
    // Exclude paymentsdk from sdk to avoid duplicate class errors; add it directly.
    // Do NOT exclude com.handpoint.api.shared — it provides Currency, TransactionResult, etc.
    implementation('com.handpoint.api:sdk:7.1012.3') {
        exclude group: 'com.handpoint.api', module: 'paymentsdk'
    }
    implementation 'com.handpoint.api:paymentsdk:7.1012.3'
}
```

The Handpoint SDK is distributed via the Handpoint Nexus server — credentials are required even for stable releases. Contact your Handpoint integration engineer to obtain access.

In your **top-level** `build.gradle`, add the Handpoint Maven repository:

```groovy
allprojects {
    repositories {
        google()
        mavenCentral()
        maven {
            name = "Handpoint Nexus"
            url = uri("http://nexus.handpoint.ninja:8081/repository/public/")
            allowInsecureProtocol = true  // required — Nexus endpoint is HTTP
            credentials {
                username = 'PROVIDED_BY_HANDPOINT'
                password = 'PROVIDED_BY_HANDPOINT'
            }
        }
    }
}
```

:::tip Keep credentials out of source control
Store your Nexus username and password in `local.properties` (gitignored) and load them via `providers.gradleProperty()` in your Gradle scripts — never hardcode them.
:::

### JDK requirement

**JDK 17 or 21 is required.** The Kotlin Gradle plugin cannot parse JDK 23+ version strings and will crash during configuration. If your `JAVA_HOME` points to a newer JDK (e.g. Android Studio's bundled JBR), pin the build JDK in `gradle.properties`:

```properties
org.gradle.java.home=/path/to/jdk-17
```

### defaultConfig flags

```groovy
android {
    defaultConfig {
        minSdkVersion 22          // Required — covers all supported PAX and Telpo models
        multiDexEnabled true      // Required
        ndk {
            abiFilters "arm64-v8a", "armeabi-v7a", "x86", "x86_64"
        }
    }
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
```

### Packaging block

**AGP 8.x (recommended):**

```groovy
android {
    packaging {
        jniLibs {
            pickFirsts += ["**/*.so"]
            useLegacyPackaging true   // equivalent to android:extractNativeLibs="true"
        }
        resources {
            excludes += [
                "META-INF/INDEX.LIST",
                "META-INF/DEPENDENCIES",
                "META-INF/LICENSE*",
                "META-INF/NOTICE*",
                "META-INF/*.version",
                "AndroidManifest.xml",
                "resources.arsc",
                "**/anim/*.xml",
                "**/layout/*.xml",
                "**/animator/*.xml",
            ]
        }
    }
}
```

**AGP 6/7 (classic syntax):**

```groovy
android {
    packagingOptions {
        pickFirst '**/*.so'
        exclude 'META-INF/INDEX.LIST'
        exclude 'META-INF/DEPENDENCIES'
        exclude 'META-INF/LICENSE*'
        exclude 'META-INF/NOTICE*'
        exclude 'META-INF/*.version'
        exclude 'AndroidManifest.xml'
        exclude 'resources.arsc'
        exclude '**/anim/*.xml'
        exclude '**/layout/*.xml'
        exclude '**/animator/*.xml'
    }
}
```

---

## 2. AndroidManifest.xml

### Required on the `<application>` tag

```xml
<application
    android:extractNativeLibs="true"
    ...>
```

:::note AGP 8.x equivalent
With AGP 8.x, use `jniLibs { useLegacyPackaging true }` in the packaging block instead — both achieve the same result.
:::

### Required on your main Activity

```xml
<activity
    android:name=".MainActivity"
    android:launchMode="singleTask"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
```

`launchMode="singleTask"` is required to ensure only one instance of your activity handles SDK callbacks.

### Permissions your app must declare

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"
    android:maxSdkVersion="32" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"
    android:maxSdkVersion="29" />
```

For USB-connected terminals, additionally add:

```xml
<uses-feature android:name="android.hardware.usb.host" />
<uses-permission android:name="android.permission.USB_PERMISSION" />
```

:::note SDK-merged permissions
The SDK's own `AndroidManifest.xml` automatically merges PAX-specific permissions (`com.pax.permission.ICC`, `com.pax.permission.PED`, etc.) into your APK — you do not need to declare them manually.
:::

---

## 3. Implement the events interface

Your activity or delegate class must implement one of the following interfaces depending on your terminal type:

| Interface | Terminal type | Extra methods |
|---|---|---|
| `Events.SmartposRequired` | PAX / Telpo (Android terminal) | — |
| `Events.MposRequired` | HiLite / Bluetooth | `deviceDiscoveryFinished`, `signatureRequired` |
| `Events.PosRequired` | Both | `deviceDiscoveryFinished`, `signatureRequired` |

**Minimum required methods for any integration:**

| Method | Description |
|---|---|
| `endOfTransaction(TransactionResult, Device)` | Final result of every financial operation |
| `transactionResultReady(TransactionResult, Device)` | Recovered or pending transaction result |
| `connectionStatusChanged(ConnectionStatus, Device)` | Terminal connection state changes |
| `currentTransactionStatus(StatusInfo, Device)` | Mid-transaction status updates + `InitialisationComplete` signal |

For HiLite / Bluetooth additionally implement:

| Method | Description |
|---|---|
| `deviceDiscoveryFinished(List<Device>)` | Called after `searchDevices()` completes |
| `signatureRequired(SignatureRequest, Device)` | Card requires manual signature |

---

## 4. Initialize the SDK

```kotlin
// Kotlin — SmartPOS / PAX
class MyActivity : AppCompatActivity(), Events.SmartposRequired {

    private lateinit var api: Hapi

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val credentials = HandpointCredentials(
            sharedSecret = "YOUR_SHARED_SECRET",   // hex string from Handpoint
            cloudApiKey = "YOUR_CLOUD_API_KEY"     // only needed for Cloud/integrated mode
        )

        val settings = Settings().apply {
            automaticReconnection = true
        }

        api = HapiFactory.getAsyncInterface(
            delegate = this,
            context = this,
            credentials = credentials,
            settings = settings
        )

        // Connect to the terminal
        val device = Device("Terminal", "1", "", ConnectionMethod.ANDROID_PAYMENT)
        api.connect(device)

        // Alternatively, discover paired PAX devices:
        // val devices = api.getPairedDevices(ConnectionMethod.ANDROID_PAYMENT)
        // if (devices.isNotEmpty()) api.connect(devices[0])
    }

    override fun currentTransactionStatus(info: StatusInfo, device: Device) {
        if (info.status == StatusInfo.Status.InitialisationComplete) {
            // SDK is fully initialized — safe to call financial operations
        }
    }

    override fun endOfTransaction(result: TransactionResult, device: Device) {
        // Handle final transaction result
        if (result.finStatus == FinancialStatus.AUTHORISED) {
            // store result.transactionID for potential reversal
        }
    }

    override fun transactionResultReady(result: TransactionResult, device: Device) {
        // Recovered pending result — handle identically to endOfTransaction
    }

    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
        // e.g. update UI to show Connected / Disconnected
    }
}
```

```java
// Java — same pattern
public class HandpointDelegate implements Events.SmartposRequired {

    private Hapi api;

    public void init(Context context) {
        HandpointCredentials credentials = new HandpointCredentials(
            "YOUR_SHARED_SECRET",
            "YOUR_CLOUD_API_KEY"
        );

        Settings settings = new Settings();
        settings.automaticReconnection = true;

        api = HapiFactory.getAsyncInterface(this, context, credentials, settings);

        Device device = new Device("Terminal", "1", "", ConnectionMethod.ANDROID_PAYMENT);
        api.connect(device);
    }

    @Override
    public void currentTransactionStatus(StatusInfo statusInfo, Device device) {
        if (statusInfo.getStatus() == StatusInfo.Status.InitialisationComplete) {
            // safe to start transactions
            api.setLogLevel(LogLevel.Info);
        }
    }

    @Override
    public void endOfTransaction(TransactionResult result, Device device) { ... }

    @Override
    public void transactionResultReady(TransactionResult result, Device device) { ... }

    @Override
    public void connectionStatusChanged(ConnectionStatus status, Device device) { ... }
}
```

For HiLite / Bluetooth, trigger discovery instead of calling `connect()` directly:

```kotlin
// Kotlin — HiLite / Bluetooth
class MyActivity : AppCompatActivity(), Events.MposRequired {

    private lateinit var api: Hapi

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val credentials = HandpointCredentials("YOUR_SHARED_SECRET")
        api = HapiFactory.getAsyncInterface(this, this, credentials)
        api.searchDevices(ConnectionMethod.BLUETOOTH)
    }

    override fun deviceDiscoveryFinished(devices: List<Device>) {
        if (devices.isNotEmpty()) api.connect(devices[0])
    }

    // implement endOfTransaction, transactionResultReady,
    // connectionStatusChanged, currentTransactionStatus, signatureRequired
}
```

---

## 5. Wait for `InitialisationComplete` before sending operations

`api.connect()` is asynchronous. The connection goes through two stages:

1. `connectionStatusChanged(ConnectionStatus.Connected, device)` — the transport layer is connected.
2. `currentTransactionStatus(StatusInfo(status = InitialisationComplete), device)` — the SDK has fully initialized and synced configuration from the terminal. **Only after this event is it safe to call financial operations.**

```kotlin
override fun currentTransactionStatus(info: StatusInfo, device: Device) {
    when (info.status) {
        StatusInfo.Status.InitialisationComplete -> {
            // ✓ Ready — start transactions
        }
        StatusInfo.Status.NotInitialised,
        StatusInfo.Status.CommandNotAllowed -> {
            // Operation was rejected — SDK not yet ready
        }
        else -> {
            // Mid-transaction status update — update UI
            updateStatusDisplay(info.message)
        }
    }
}
```

:::caution
Calling a financial operation (e.g. `api.sale()`) before `InitialisationComplete` results in a `CommandNotAllowed` or `NotInitialised` status — the operation will not execute.
:::

---

## `HandpointCredentials` fields

| Field | Type | Required | Description |
|---|---|---|---|
| `sharedSecret` | `String` | Yes | Hex string shared between your app and the terminal. Unique per merchant. Obtained from Handpoint support. |
| `cloudApiKey` | `String?` | Only for Cloud/integrated mode | The merchant API key used to authenticate Cloud REST API calls. Also required when integrated mode is enabled in the Handpoint Payments App. |

## `Settings` fields

| Field | Type | Default | Description |
|---|---|---|---|
| `automaticReconnection` | `Boolean` | `true` | Automatically reconnect to the terminal if the connection drops |
| `autoRecoverTransactionResult` | `Boolean` | `true` | Automatically recover pending results on reconnect |
| `sendToDeviceMaxAttempts` | `Int` | `3` | Max command delivery attempts before failure |
| `timeBetweenAttempts` | `Int` | `5000` | Milliseconds between delivery retry attempts |
| `showSDKUIComponents` | `Boolean` | `false` | Show SDK-owned UI overlays on the Android host app screen |
| `getReceiptsAsURLs` | `Boolean` | `false` | Deliver receipt HTML as hosted URLs instead of inline strings |
| `locale` | `String` | `"en_US"` | SDK UI locale |
