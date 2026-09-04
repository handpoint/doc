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

## Development vs production environments

Handpoint has two separate environments, each requiring different hardware, credentials, and SDK builds:

| | Development / Staging | Production |
|---|---|---|
| **Device type** | Debug device | Production device |
| **Key injection** | Manual via **hiKeyLoader** app | Remote via **PAXStore RKI** |
| **TMS environment** | Staging (`.io` domain) | Production (`.com` domain) |
| **SDK version** | **RC build** (e.g. `7.1014.0-RC.72-SNAPSHOT`) | **Stable build** (e.g. `7.1012.3`) |
| **App distribution** | Side-loaded via ADB | Deployed via PAXStore |
| **Credentials** | Staging SSK + staging Cloud API Key | Production SSK + production Cloud API Key |

**The two environments are not interchangeable.** A production device enrolled in production TMS will not accept staging credentials, and an RC SDK build should never be submitted to PAXStore.

### Development workflow

1. Obtain a **debug device** from Handpoint.
2. Use the **hiKeyLoader** app to inject staging keys (SSK + cloudApiKey) into the device. This enrolls the device in staging TMS.
3. Build your app using the **latest RC SDK version**. Contact your Handpoint integration engineer for the current RC version and Nexus credentials.
4. Side-load your APK via ADB: `adb install app-debug.apk`
5. Iterate until the integration is validated.

### Production workflow

1. Obtain a **production device** from your PAXStore account.
2. Create a production merchant in TMS and obtain production credentials.
3. Build your app with a **stable SDK version** using the standard Nexus or Maven Central dependency.
4. Upload the signed APK to PAXStore and deploy via Remote Key Injection (RKI) from the PAXStore portal.

:::caution RC versions are for development only
Never submit an RC build to PAXStore or install it on a production device. RC versions connect to staging infrastructure and are not validated for live transaction processing.
:::

---

## ISV integration checklist

### How the integration process starts

1. **Send an integration request** to [support@handpoint.com](mailto:support@handpoint.com) describing your use case and target markets.
2. **Scoping call** — Handpoint will discuss the integration path (Android SDK, Cloud API, etc.) and confirm supported acquirers and features.
3. **Handpoint provisions your staging environment** — creates a test merchant in TMS Staging, assigns a debug device serial, and documents everything in a shared Slack Canva.
4. **Dedicated Slack channel** — once provisioned, all integration support happens in this channel. It is the fastest way to reach the integration team throughout development and go-live.

Use the checklist below as your reference throughout. If anything is unclear, ask in your Slack channel.

### Staging (development)

- [ ] **Supported PAX model in DEBUG mode** — obtain a debug device from Handpoint. Only debug-mode hardware can accept manually injected staging keys.
- [ ] **Keys injected via hiKeyLoader** — install the hiKeyLoader app on the device and inject your staging SSK and Cloud API Key. This enrolls the device in TMS Staging.
- [ ] **Serial number assigned in TMS Staging** — Handpoint must assign the device's serial number under a test/demo merchant in TMS Staging with the transaction types you need enabled (MOTO, Pre-Auth, Interac, etc.).
- [ ] **RC SDK version** — use the RC version provided by Handpoint (not a stable release). RC builds target staging infrastructure.
- [ ] **Nexus credentials** — required to resolve the RC dependency. Store as `nexusUsername` / `nexusPassword` in `local.properties` (never in source files).
- [ ] **Merchant credentials**:
  - **SSK** (required for all card-present operations)
  - **Cloud API Key** (only needed for Keyed Entry / MOTO or Cloud REST API calls through the SDK)

### Production (go-live)

- [ ] **Production PAX device** — a non-debug device from your PAXStore account.
- [ ] **Keys injected via PAXStore RKI** — production keys are injected remotely through the PAXStore portal (Remote Key Injection). No manual hiKeyLoader step.
- [ ] **Serial number assigned in TMS Production** — device must be assigned to a production merchant at `tms.handpoint.com`.
- [ ] **Stable SDK version** — use the latest stable release, not an RC. Nexus credentials are still required (same credentials as staging).
- [ ] **Production merchant credentials** — SSK and (if applicable) Cloud API Key from the production TMS merchant record.
- [ ] **Upload APK to PAXStore** — no APK signing is required by PAXStore. Upload the release APK directly:
  - EMEA: [paxemea.whatspos.com/developer](https://paxemea.whatspos.com/developer#/home)
  - US: [paxstore.us/developer](https://www.paxstore.us/developer)
  - First-time submission approval typically takes **5–7 working days**. In the US, PAX offers a paid expedited review — contact the PAX US team if timeline is a concern.
- [ ] **Notify Handpoint** — share your app's package name and PAXStore listing URL in your Slack channel so Handpoint can request PAX distribution approval for the correct marketplace.

:::info Always confirm the latest SDK version with Handpoint
The stable SDK version required for production depends on the capabilities your integration uses. Confirm with your Handpoint integration team (via your dedicated Slack channel or [support@handpoint.com](mailto:support@handpoint.com)) before go-live that you are on the correct stable build and that the features you tested in staging are available in that release.
:::

---

## 1. Add the Gradle dependency

In your **app-level** `build.gradle.kts` (Kotlin DSL):

```kotlin
// app/build.gradle.kts
android {
    compileSdk = 34
    targetSdk = 34

    defaultConfig {
        minSdk = 22
        multiDexEnabled = true
        ndk {
            // armeabi-v7a covers all supported PAX models including the A6650.
            // Do NOT add arm64-v8a — see the PAX A6650 note below.
            abiFilters += listOf("armeabi-v7a")
        }
    }

    compileOptions {
        isCoreLibraryDesugaringEnabled = true
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }

    buildFeatures {
        buildConfig = true
    }

    packaging {
        jniLibs {
            pickFirsts += listOf("**/*.so")
            useLegacyPackaging = true   // equivalent to android:extractNativeLibs="true"
        }
        resources {
            excludes += setOf(
                "META-INF/INDEX.LIST", "META-INF/DEPENDENCIES",
                "META-INF/LICENSE*", "META-INF/NOTICE*",
                "META-INF/*.version", "AndroidManifest.xml", "resources.arsc",
                "**/anim/*.xml", "**/layout/*.xml", "**/animator/*.xml"
            )
        }
    }
}

dependencies {
    // Required for Java 8+ API desugaring on older Android API levels.
    coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.1.5")

    // Exclude paymentsdk from sdk to avoid duplicate class errors; add it directly.
    // Do NOT exclude com.handpoint.api.shared — it provides Currency, TransactionResult, etc.
    //
    // Replace VERSION with the RC version (development) or stable version (production)
    // provided by your Handpoint integration engineer.
    // ⚠️ BOTH lines must use the IDENTICAL version string. Mismatched versions cause
    // duplicate-class errors or NoSuchMethodError at runtime.
    implementation("com.handpoint.api:sdk:VERSION") {
        exclude(group = "com.handpoint.api", module = "paymentsdk")
    }
    implementation("com.handpoint.api:paymentsdk:VERSION")
}
```

:::note Groovy DSL syntax differences
If your project uses Groovy DSL (`build.gradle` instead of `build.gradle.kts`):
- String args use single quotes: `'com.handpoint.api:sdk:VERSION'`
- Assignment omits `=`: `minSdkVersion 22`, `useLegacyPackaging true`
- `abiFilters` uses `+=` with a quoted string: `abiFilters "armeabi-v7a"`
- Exclude syntax: `exclude group: 'com.handpoint.api', module: 'paymentsdk'`
:::

**RC versions** (e.g. `7.1014.0-RC.72-SNAPSHOT`) are required for development with debug devices and staging TMS. They are only available on the Handpoint Nexus server — contact your Handpoint integration engineer for the current RC version and your Nexus credentials.

**Stable versions** (e.g. `7.1012.3`) are used for production PAXStore builds. They resolve from the same Nexus server.

Add the Handpoint Maven repository to **`settings.gradle.kts`**. Modern Android projects use `dependencyResolutionManagement` here instead of `allprojects { repositories }` in the root `build.gradle`:

```kotlin
// settings.gradle.kts
import java.util.Properties

// Load Nexus credentials from local.properties (gitignored).
// providers.gradleProperty() reads gradle.properties — not local.properties —
// so you must load local.properties explicitly with Properties().
val localProps = Properties().also { props ->
    File(rootDir, "local.properties").takeIf { it.exists() }?.inputStream()?.use(props::load)
}

dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven {
            name = "Handpoint Nexus"
            url = uri("http://nexus.handpoint.ninja:8081/repository/public/")
            isAllowInsecureProtocol = true  // required — Nexus endpoint is HTTP
            credentials {
                username = localProps.getProperty("nexusUsername") ?: "PROVIDED_BY_HANDPOINT"
                password = localProps.getProperty("nexusPassword") ?: ""
            }
        }
    }
}
```

In `local.properties` (gitignored — never commit this file):

```properties
nexusUsername=YOUR_NEXUS_USERNAME
nexusPassword=YOUR_NEXUS_PASSWORD
```

:::note Groovy / legacy projects
If your project uses Groovy DSL and the `allprojects { repositories }` pattern in the root `build.gradle`, add the `maven { }` block there instead of in `settings.gradle.kts`. The credential loading still belongs in a gitignored file — adapt the pattern above using `Properties()` in `build.gradle`.
:::

### JDK requirement

**JDK 17 or 21 is required.** The Kotlin Gradle plugin cannot parse JDK 23+ version strings and will crash during Gradle configuration. If your `JAVA_HOME` points to a newer JDK (e.g. Android Studio's bundled JBR 25), the crash message is just the bare JDK version string — e.g.:

```
FAILURE: Build failed with an exception.
* What went wrong:
25.0.2
```

That version number *is* the error. Fix it by pinning the build JDK in `gradle.properties`:

```properties
org.gradle.java.home=/path/to/jdk-17
```

On Windows with Adoptium: `C\:\\Program Files\\Eclipse Adoptium\\jdk-17.0.20.101-hotspot`

:::caution PAX — do not include `arm64-v8a` (or `x86`, `mips`) in abiFilters
The Handpoint SDK ships `.so` libraries for `armeabi-v7a` only. Including any other ABI produces an APK with empty native-library folders for those ABIs.

**`arm64-v8a` specifically causes crashes on 64-bit OS PAX devices (including the A6650):**
- On **32-bit OS** A6650 devices: Android ignores the empty `lib/arm64-v8a/` folder and loads `armeabi-v7a` — no crash.
- On **64-bit OS** A6650 devices: Android sees the `arm64-v8a` folder, locks the process into 64-bit mode, then crashes at startup when it cannot find the `.so` files.

This crash has been confirmed in field deployments on 64-bit OS A6650 hardware and reproduced in the SDK client app ([hapi-android#3223](https://github.com/handpoint/hapi-android/pull/3223)).

`x86` and `mips` cause no crash on real PAX hardware (those ABIs are never selected on ARM devices) but inflate APK size for no benefit.

**Fix:** use only `"armeabi-v7a"` in `abiFilters`. This works on all A6650 variants and all other supported PAX models.
:::

The `build.gradle.kts` example above already includes the complete packaging block and `buildConfig = true`. Add the credential and SDK-version fields to `defaultConfig`.

:::caution `localProps` must be declared in `app/build.gradle.kts` too
`localProps` is not automatically available from `settings.gradle.kts`. You must declare it again at the **top of `app/build.gradle.kts`** (before the `plugins {}` block), with the `import java.util.Properties` at the very top of the file. Inside the `android { }` block the identifier `java` resolves to the Gradle Java extension, not `java.util`, so the import must be at file level:

```kotlin
// Top of app/build.gradle.kts — BEFORE plugins {}
import java.util.Properties
val localProps = Properties().also { props ->
    rootProject.file("local.properties").takeIf { it.exists() }?.inputStream()?.use(props::load)
}
```
:::

```kotlin
// Inside android { defaultConfig { } }
buildConfigField("String", "HANDPOINT_SHARED_SECRET",
    "\"${localProps.getProperty("HANDPOINT_SHARED_SECRET") ?: ""}\"")
buildConfigField("String", "HANDPOINT_CLOUD_API_KEY",
    "\"${localProps.getProperty("HANDPOINT_CLOUD_API_KEY") ?: ""}\"")
// Used in log messages and support requests to identify which SDK build produced a log.
buildConfigField("String", "HP_SDK_VERSION", "\"VERSION\"")  // match your sdk dependency version
```

:::note AGP 6/7 packaging syntax
If using the older Groovy `packagingOptions` block: replace `packaging { jniLibs { pickFirsts += … useLegacyPackaging = true } }` with `packagingOptions { pickFirst '**/*.so' … }` and add `android:extractNativeLibs="true"` to your `<application>` tag in `AndroidManifest.xml`.
:::

---

## 2. AndroidManifest.xml

### Required on the `<application>` tag

**AGP 6/7:** Add the attribute directly to the manifest:

```xml
<application
    android:extractNativeLibs="true"
    ...>
```

**AGP 8.x:** Do **not** add `android:extractNativeLibs` to the manifest — AGP 8.x generates a warning telling you to remove it. Use only the Gradle packaging block (`jniLibs { useLegacyPackaging = true }`), which has the same effect and is the correct AGP 8.x approach.

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

**Required methods for `SmartposRequired`** (confirmed from SDK source — exactly these four, no others):

:::info
`Events.SmartposRequired` is for `ConnectionMethod.ANDROID_PAYMENT` (PAX SmartPOS integrated terminals) only. For Bluetooth external terminals (HILITE / Datecs), implement `Events.MposRequired` instead — see the [HILITE Integration Guide](android-hilite-integration-walkthrough).
:::

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
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.handpoint.api.Hapi
import com.handpoint.api.HapiFactory
import com.handpoint.api.HandpointCredentials
import com.handpoint.api.shared.ConnectionMethod
import com.handpoint.api.shared.ConnectionStatus
import com.handpoint.api.shared.Currency
import com.handpoint.api.shared.Device
import com.handpoint.api.shared.Events
// import com.handpoint.api.shared.FinancialStatus  // uncomment only if using direct enum comparisons (result.finStatus == FinancialStatus.AUTHORISED); the template below uses .toString() throughout
import com.handpoint.api.shared.LogLevel
import com.handpoint.api.shared.OperationStartResult
// com.handpoint.api.shared.Settings — used as a FQN in the code below to avoid
// collision with android.provider.Settings (a common import). Do not add a short import
// for Settings if you also import android.provider.Settings — use the FQN at each use site.
import com.handpoint.api.shared.SignatureRequest  // needed if implementing Events.SignatureRequired
import com.handpoint.api.shared.StatusInfo
import com.handpoint.api.shared.TransactionResult
import com.handpoint.api.shared.options.Options
import com.handpoint.api.shared.options.SaleOptions
import com.handpoint.api.shared.options.SaleAndTokenizeOptions
import com.handpoint.api.shared.options.MoToOptions
import java.math.BigInteger

class MyActivity : AppCompatActivity(), Events.SmartposRequired {

    private lateinit var api: Hapi
    private var initialized = false   // gate: true only after InitialisationComplete
    private var connected = false     // true when connectionStatusChanged fires Connected/CloudConnected

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // ⚠️ Activity-based init is shown here for clarity only. In production, initialize
        // the SDK in a Kotlin `object` singleton (not inside an Activity), so it survives
        // configuration changes and screen rotation. A new Activity instance after rotation
        // has its own `api` field — the `::api.isInitialized` guard below only protects
        // within the same instance and will NOT prevent a second SDK instance on recreation.
        // See HpSdk.kt in the demo app for the correct singleton pattern.
        if (::api.isInitialized) return

        // HandpointCredentials is a Java class — use positional arguments, not named arguments.
        val credentials = HandpointCredentials(
            "YOUR_SHARED_SECRET",   // sharedSecret — hex string from Handpoint
            "YOUR_CLOUD_API_KEY"    // cloudApiKey — only needed for Cloud/integrated mode
        )

        val settings = com.handpoint.api.shared.Settings().apply {
            automaticReconnection = true
        }

        // Restore any pending transaction reference BEFORE connecting.
        // If the app crashed mid-transaction, this loads the saved reference into memory
        // so that recoverIfPending() can poll it when InitialisationComplete fires.
        // Calling connect() before loadRecoveryState() means recoverIfPending() runs
        // with a null reference, silently dropping recovery for any in-flight transaction.
        loadRecoveryState()

        // HapiFactory is a Java class — use positional arguments, not named arguments.
        // Named arguments are only available for Kotlin functions.
        api = HapiFactory.getAsyncInterface(
            this,          // delegate (the Events.SmartposRequired implementor)
            this,          // context — accepted for API compatibility but not used internally;
                           // the SDK provisions its own Application context via a ContentProvider.
                           // Activity, Application, or null all behave identically.
            credentials,
            settings
        )

        // ⚠️ REQUIRED in SDK 7.1014.0+: explicitly register the delegate BEFORE connect().
        // In RC builds, HapiFactory.getAsyncInterface() no longer auto-registers the listener.
        // Without this call, connectionStatusChanged, currentTransactionStatus, and all other
        // callbacks are silently dropped — the app stays at "INIT X" indefinitely.
        // Do NOT call this inside a callback (e.g. currentTransactionStatus) — the delegate
        // must be registered before any callbacks can fire.
        api.registerEventsDelegate(this)

        // Connect to the terminal.
        // For ANDROID_PAYMENT the string arguments (name, address, port) are ignored
        // by the SDK — pass any non-null values.
        //
        // The SDK auto-detects the device via Build.MODEL and loads bundled PAX JNI
        // libraries (.so files) included in the paymentsdk dependency. No external
        // "Payments App" needs to be installed — the payment logic is inside your APK.
        // If the device is not a recognized PAX model, connectionStatusChanged fires
        // with ConnectionStatus.NotConfigured.
        val device = Device("PAX A920", "", "", ConnectionMethod.ANDROID_PAYMENT)
        api.connect(device)

    }

    override fun currentTransactionStatus(info: StatusInfo, device: Device) {
        if (info.status == StatusInfo.Status.InitialisationComplete) {
            // SDK is fully initialized — safe to call financial operations.
            initialized = true   // ← arm the gate declared above
            // LogLevel.Info for production; use LogLevel.Debug or LogLevel.Full for verbose
            // diagnostic output during development. Never use LogLevel.Sensitive in production.
            api.setLogLevel(LogLevel.Info)
            // ⚠️ REQUIRED: call your private recoverIfPending() here on every InitialisationComplete.
            // This is one of the four non-negotiable production requirements. Define it in your
            // SDK singleton wrapper (not in the Activity). See the Integration Walkthrough for the
            // full implementation. Omitting this silently drops crash recovery.
            recoverIfPending()  // implement in your HpSdk singleton — see Integration Walkthrough
        }
        // This simplified if-form handles InitialisationComplete only. For the full when-block
        // with NotInitialised, CommandNotAllowed, UserCancelled, and mid-transaction status
        // update handling, see Section 5 of this guide below.
    }

    override fun endOfTransaction(result: TransactionResult, device: Device) {
        // ⚠️ This is a STATUS-ONLY reference stub. Do NOT use as-is — the UNDEFINED branch
        // below is a no-op placeholder. Omitting recovery here means a network-interrupted
        // transaction silently produces no result. The full implementation — including the
        // complete recovery state machine — is in Section 5 of the Integration Walkthrough.
        //
        // Using .toString() for all finStatus values is safe, consistent, and is what
        // the reference implementation (HpSdk.kt) does. Direct enum comparison is type-safe
        // but requires both PARTIALLY_APPROVED and PARTIAL_APPROVAL, and fails silently for
        // values absent in your SDK version (e.g. UNDEFINED, IN_PROGRESS in older builds).
        val fin = result.finStatus.toString()
        when {
            fin == "AUTHORISED" || fin == "PROCESSED"     -> TODO("fulfil order; print receipt — see Integration Walkthrough Section 5")
            fin == "DECLINED"                             -> TODO("show finStatus + errorMessage + responseText; print result.customerReceipt if non-null — see Integration Walkthrough Section 5")
            fin == "CANCELLED"                            -> TODO("allow retry — see Integration Walkthrough Section 5")
            fin == "FAILED"                               -> TODO("log errorMessage; do not auto-retry — see Integration Walkthrough Section 5")
            // Both names can appear — acquirers vary. Fulfil at approved amount; collect balance via another tender.
            fin == "PARTIALLY_APPROVED" || fin == "PARTIAL_APPROVAL" -> TODO("partial fulfil — see Integration Walkthrough Section 5")
            fin == "REFUNDED"                             -> TODO("record refund; print receipt — see Integration Walkthrough Section 5")
            fin == "CAPTURED"                             -> TODO("capture complete; print receipt — see Integration Walkthrough Section 5")
            // Offline auth — treat as successful; settles when device reconnects.
            fin == "AUTHORISED_DEFERRED"                  -> TODO("fulfil order; print receipt — see Integration Walkthrough Section 5")
            // ⚠️ UNDEFINED REQUIRES RECOVERY — this placeholder is NOT production-ready.
            fin == "UNDEFINED"                            -> throw NotImplementedError("UNDEFINED: implement full recovery state machine — see Integration Walkthrough Section 5")
            // Note: IN_PROGRESS never appears in endOfTransaction(). It arrives via
            // transactionResultReady() either as a getTransactionStatus() response or via
            // autoRecoverTransactionResult on reconnect. No branch needed here.
            else                                          -> TODO("unknown finStatus: $fin — log and handle")
        }
        // ► See Section 5 of the Integration Walkthrough for the complete implementation,
        //   including the full UNDEFINED recovery state machine.
    }

    override fun transactionResultReady(result: TransactionResult, device: Device) {
        // ⚠️ STUB — this method body is intentionally incomplete. An empty body compiles but
        //   silently drops every recovery result (from getTransactionStatus() polling AND from
        //   autoRecoverTransactionResult on reconnect). The transaction is lost with no error.
        // ⚠️ Do NOT copy this stub as-is. Implement the full state machine:
        //   1. Idempotency guard: `if (recoveryRef == null && !recoveryActive) return` (AND, not OR)
        //   2. UNDEFINED / IN_PROGRESS → set recoveryStartMs (if 0), call saveRecoveryState()
        //      BEFORE setting recoveryActive=true; if !recoveryActive, call onRecoveryStarted
        //   3. Terminal status → clear recovery state, surface result to app
        //   4. Never pass UNDEFINED or IN_PROGRESS to the app as a payment result.
        // ► Full implementation: Integration Walkthrough — Section 4 (transactionResultReady).
        throw NotImplementedError("transactionResultReady: implement the full recovery state machine — see Integration Walkthrough Section 4")
    }

    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
        val isConnected = status == ConnectionStatus.Connected ||
                          status == ConnectionStatus.CloudConnected
        connected = isConnected  // store for use by your UI / operations guard
        // Reset the initialized gate on Disconnected — the next InitialisationComplete is required
        // before it is safe to call financial operations again.
        if (status == ConnectionStatus.Disconnected) initialized = false
        // ConnectionStatus.NotConfigured means the device is not a recognized PAX model —
        // check abiFilters, confirm the hardware is a supported PAX device.
        // e.g. update UI to show connected/disconnected state
    }

    // ⚠️ DO NOT add empty-body implementations of these methods in your Activity.
    // They belong in your SDK singleton (e.g. HpSdk.kt). If you copy this class,
    // the throw below ensures a loud runtime failure that points you to the walkthrough.
    private fun loadRecoveryState() = throw NotImplementedError("loadRecoveryState must be in your HpSdk singleton — see Integration Walkthrough")
    private fun recoverIfPending() = throw NotImplementedError("recoverIfPending must be in your HpSdk singleton — see Integration Walkthrough Section 4")
}
```

```java
// Java — same pattern
import android.content.Context;
import com.handpoint.api.Hapi;
import com.handpoint.api.HapiFactory;
import com.handpoint.api.HandpointCredentials;
import com.handpoint.api.shared.ConnectionMethod;
import com.handpoint.api.shared.ConnectionStatus;
import com.handpoint.api.shared.Device;
import com.handpoint.api.shared.Events;
import com.handpoint.api.shared.LogLevel;
import com.handpoint.api.shared.Settings;  // use fully-qualified name if android.provider.Settings is also imported
import com.handpoint.api.shared.StatusInfo;
import com.handpoint.api.shared.TransactionResult;

// Settings fields are Kotlin `var` properties. Without @JvmField, Kotlin generates
// a getter and setter — use the setter form shown below. If direct field access
// (settings.automaticReconnection = true) is ever required (e.g. the field is @JvmField),
// the compiler will tell you — the setter call is the safe default from Java.

public class HandpointDelegate implements Events.SmartposRequired {

    private Hapi api;

    public void init(Context context) {
        HandpointCredentials credentials = new HandpointCredentials(
            "YOUR_SHARED_SECRET",
            "YOUR_CLOUD_API_KEY"
        );

        Settings settings = new Settings();
        // Kotlin var properties — use the generated setter from Java:
        settings.setAutomaticReconnection(true);

        // Restore any pending transaction reference BEFORE connecting (see Kotlin sample above).
        loadRecoveryState();

        api = HapiFactory.getAsyncInterface(this, context, credentials, settings);

        Device device = new Device("PAX A920", "", "", ConnectionMethod.ANDROID_PAYMENT);
        api.connect(device);
    }

    @Override
    public void currentTransactionStatus(StatusInfo statusInfo, Device device) {
        if (statusInfo.getStatus() == StatusInfo.Status.InitialisationComplete) {
            // safe to start transactions
            api.setLogLevel(LogLevel.Info);
            recoverIfPending(); // ⚠️ REQUIRED on every InitialisationComplete — implement in your HpSdk singleton; see Integration Walkthrough Section 4 (Recovery)
        }
    }

    @Override
    public void endOfTransaction(TransactionResult result, Device device) {
        throw new UnsupportedOperationException(
            "endOfTransaction: implement the full recovery state machine — see Integration Walkthrough Section 5");
    }

    @Override
    public void transactionResultReady(TransactionResult result, Device device) {
        throw new UnsupportedOperationException(
            "transactionResultReady: implement the full recovery state machine — see Integration Walkthrough Section 4");
    }

    @Override
    public void connectionStatusChanged(ConnectionStatus status, Device device) {
        throw new UnsupportedOperationException("connectionStatusChanged: implement this — see Integration Walkthrough");
    }
}
```

:::info Optional event interfaces
Beyond the required interface, the SDK exposes additional event interfaces you can implement on the same delegate class for additional callbacks:

| Interface | Callbacks | When to use |
|---|---|---|
| `Events.SignatureRequired` | `signatureRequired(request: SignatureRequest, device: Device)` — respond with `api?.signatureResult(accepted: Boolean)` | **PAX-only integration: not required** — the SDK renders signature, PIN, and duplicate-check screens directly on the terminal and ignores any `signatureResult()` call from the host app. Implementing the interface is nonetheless safe and is recommended if you anticipate adding HiLite/Bluetooth support later. **HiLite/Bluetooth: required** — the SDK cannot render UI on an external terminal, so the host app must show the signature screen. **Shared PAX+HiLite wrapper: implement** — call `api?.signatureResult(true)`; the SDK ignores the callback on PAX. |
| `Events.Log` | `onMessageLogged(level: LogLevel, message: String)` (SDK log lines as they occur) and `deviceLogsReady(logs: String, device: Device)` (full terminal log dump) | Receive diagnostic output from the SDK and terminal |
| `Events.MessageHandling` | `showMessage(message: String, dismissible: Boolean, duration: Int)` and `hideMessage(message: String)` | Display/hide messages the SDK wants to show on the Android host screen |
| `Events.ReceiptEvent` | `receiptIsReady(guid: String, merchantReceipt: String, customerReceipt: String)` | Fires ~1.5 s after `endOfTransaction` with the full receipt HTML as inline strings. Fires even when `receiptsAsURLs = true`. **Recommended for lowest-latency receipt printing** — no URL fetch, no S3 wait, just pass `customerReceipt` directly to `printReceipt()`. Note: when `receiptsAsURLs = true`, the inline HTML may differ slightly from the hosted version — if you need the exact hosted copy (e.g. for email delivery), use `Events.ReceiptUploadingEvent` instead. |
| `Events.ReceiptUploadingEvent` | `receiptsUploaded(guid: String, merchantUrl: String, customerUrl: String)` | Fires ~4–8 s after `endOfTransaction` once both receipts finish uploading to S3. The URLs returned here are immediately accessible (HTTP 200). Only needed when `settings.receiptsAsURLs = true` and you must use the hosted URL (e.g. for email delivery or a web receipt page). Do not fetch `result.customerReceipt` from `endOfTransaction` directly — it returns 404 until this event fires. |

For PAX SmartPOS, `Events.SignatureRequired` is not required — the terminal renders its own signature capture screen. For HiLite/Bluetooth, implement it (see the [HILITE guide](android-hilite-integration-walkthrough)).
:::

For HiLite / Bluetooth, trigger discovery instead of calling `connect()` directly:

```kotlin
// Kotlin — HiLite / Bluetooth
class MyActivity : AppCompatActivity(), Events.MposRequired {

    private lateinit var api: Hapi

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val credentials = HandpointCredentials("YOUR_SHARED_SECRET")
        // Four-arg form is the safe default — pass a default Settings() if you have no overrides.
        api = HapiFactory.getAsyncInterface(this, this, credentials, com.handpoint.api.shared.Settings())
        // A three-arg overload (without Settings) may also be available — check with IDE autocomplete.
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

1. `connectionStatusChanged(ConnectionStatus.Connected, device)` — the transport layer is connected. For ANDROID_PAYMENT you typically see `Connected`; `CloudConnected` indicates a concurrent cloud session (e.g., MOTO calls via the Cloud REST API) is also established. Treat both as "connected" for the initialized gate.
2. `currentTransactionStatus(StatusInfo(status = InitialisationComplete), device)` — the SDK has fully initialized and synced configuration from the terminal. **Only after this event is it safe to call financial operations.**

:::note Activity pattern vs singleton/listener pattern
This example uses an Activity pattern with no `SdkListener`. It does **not** call `onTransactionStatusUpdate` — that call belongs in the SDK singleton's implementation (see Integration Walkthrough Section 5), where it is delivered unconditionally before any branch logic. Do not merge this Activity `when` block directly into a singleton that implements `SdkListener` without adding the `onTransactionStatusUpdate` call.
:::

```kotlin
override fun currentTransactionStatus(info: StatusInfo, device: Device) {
    when (info.status) {
        StatusInfo.Status.InitialisationComplete -> {
            initialized = true
            api.setLogLevel(LogLevel.Info)
            recoverIfPending()  // ⚠️ REQUIRED on every InitialisationComplete — implement in your SDK singleton; see Integration Walkthrough Section 4 (Recovery)
        }
        StatusInfo.Status.NotInitialised,
        StatusInfo.Status.CommandNotAllowed -> {
            // Operation was rejected — SDK not yet ready
        }
        StatusInfo.Status.UserCancelled -> {
            // Merchant (or app) called stopCurrentTransaction() — the next endOfTransaction
            // will have finStatus == CANCELLED. Use this to dismiss a "waiting for card" overlay.
        }
        else -> {
            // Mid-transaction status update (card inserted, PIN entry, contactless detected…)
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
| `cloudApiKey` | `String?` | Optional | Required only for: **keyed entry operations** (`motoSale`, `motoRefund`, etc.), **SDK-initiated transaction recovery** (`getTransactionStatus()`), and **cloud channel** (receiving Pusher-initiated transactions in integrated mode). Not required for card-present operations. |

`HandpointCredentials` can be constructed with one or two arguments:
- `HandpointCredentials(sharedSecret)` — card-present only; keyed entry and cloud channel are disabled.
- `HandpointCredentials(sharedSecret, cloudApiKey)` — enables keyed entry operations, SDK transaction recovery, and cloud channel.

## Common SDK types

### `Currency`

Pass a `Currency` constant to financial operations. Common values:

```kotlin
Currency.EUR   // Euro
Currency.USD   // US Dollar
Currency.GBP   // British Pound
Currency.CAD   // Canadian Dollar
Currency.SEK   // Swedish Krona
// … and all ISO 4217 currencies supported by your acquirer
```

Your acquirer determines which currencies are active on your merchant account. Use the `Currency` constant that matches the settlement currency configured in your TMS merchant profile.

### `FinancialStatus` values

| Value | Meaning |
|---|---|
| `AUTHORISED` | Approved — settlement occurs at batch close (typically end-of-day) |
| `PROCESSED` | Approved (some acquirers use this instead of AUTHORISED) |
| `DECLINED` | Card declined by acquirer |
| `CANCELLED` | Cancelled by terminal or cardholder |
| `FAILED` | Terminal-level error |
| `PARTIALLY_APPROVED` / `PARTIAL_APPROVAL` | Partial approval (e.g. prepaid card with insufficient balance). **Both names may appear** — acquirers vary which they return. These are distinct enum constants with different ordinals; check for both: `result.finStatus.toString().let { it == "PARTIALLY_APPROVED" \|\| it == "PARTIAL_APPROVAL" }` |
| `REFUNDED` | Refund processed |
| `CAPTURED` | Pre-auth captured |
| `AUTHORISED_DEFERRED` | Offline/deferred auth — stored for later settlement. Use `.toString() == "AUTHORISED_DEFERRED"` — this value may not be exposed as a named `FinancialStatus` constant in all SDK versions |
| `IN_PROGRESS` | Transaction still processing — never appears in `endOfTransaction`. Arrives via `transactionResultReady()` either as a `getTransactionStatus()` response or via `autoRecoverTransactionResult` on reconnect. Continue polling. |
| `UNDEFINED` | Outcome unknown — start recovery |

### `api.getTransactionStatus()` return value

`api.getTransactionStatus(transactionReference: String): Boolean` — returns `true` if the request was successfully submitted to the cloud, `false` if the SDK rejected it (e.g., not initialized, network unavailable). The actual result arrives asynchronously in `transactionResultReady()`. If it returns `false`, re-schedule the poll:

```kotlin
if (api?.getTransactionStatus(ref) != true) {
    scheduleRecovery(immediate = false)  // retry after backoff
}
```

---

## `Settings` fields

| Field | Type | Default | Description |
|---|---|---|---|
| `automaticReconnection` | `Boolean` | `true` | Automatically reconnect to the terminal if the connection drops |
| `autoRecoverTransactionResult` | `Boolean` | `true` | When `true`, the SDK calls `transactionResultReady()` for any result it has stored when the connection is re-established. This is complementary to — not a replacement for — the manual `getTransactionStatus()` recovery pattern. Both can trigger `transactionResultReady()`; implement the [idempotency guard](#4-recovery) in the walkthrough to handle both paths. |
| `sendToDeviceMaxAttempts` | `Int` | `3` | Max command delivery attempts before failure |
| `timeBetweenAttempts` | `Int` | `5000` | Milliseconds between delivery retry attempts |
| `showSDKUIComponents` | `Boolean` | `false` | Controls UI on the **host app's Android screen** (not the PAX terminal display). When `true`, the SDK shows a "Please Wait" spinner dialog and toast status messages on the host app screen. When `false` (default), the SDK shows nothing on the host screen — your app handles status display via `currentTransactionStatus` callbacks. The PAX terminal's own PIN, signature, and duplicate-check screens are always shown by the terminal regardless of this setting. |
| `receiptsAsURLs` (Kotlin) / `getReceiptsAsURLs()` (Java getter) | `Boolean` | `false` | Deliver receipts as cloud-hosted URLs. Set via `settings.receiptsAsURLs = true` in Kotlin or `settings.setReceiptsAsURLs(true)` in Java. URL format: `https://receipts.handpoint.com/receipts/{guid}/{merchant\|customer}.html`. **URLs return 404 immediately after `endOfTransaction`** — the SDK uploads asynchronously after the transaction completes. Implement `Events.ReceiptUploadingEvent` to receive `receiptsUploaded(guid, merchantUrl, customerUrl)` when the URLs are safe to fetch. `Events.ReceiptEvent.receiptIsReady` fires first (inline HTML immediately available) but the cloud URLs may not yet be accessible at that point. |
| `locale` | `String` | `"en_US"` | SDK UI locale |
| `softwareVersion` | `String` | `""` | Your app's version string reported to Handpoint for support and diagnostics. Use **3 numbers** (e.g. `"3.1.5"`). Handpoint prepends the first segment internally to form the full 4-part version — do not include a 4th number yourself. |

---

## Available operations

All financial operations return `OperationStartResult` (except where noted). Check `operationStarted` before persisting the reference — see the [Integration Walkthrough](android-integration-walkthrough) for the full transaction lifecycle.

**Amounts are always in minor units** (cents, pence, etc.) as `BigInteger`. 100 = $1.00 USD, 100 = £1.00 GBP.

### Card-present operations

Require a physical card interaction on the terminal (chip, contactless, or swipe).

| Operation | Signature | Notes |
|---|---|---|
| Sale | `sale(amount, currency)` | Standard card-present sale |
| Sale with options | `sale(amount, currency, options: SaleOptions)` | Tip, pinBypass, signatureBypass |
| Sale and tokenize | `sale(amount, currency, options: SaleAndTokenizeOptions)` | Returns a card token alongside the result. `SaleAndTokenizeOptions` is a marker subclass of `SaleOptions` with no additional fields — `SaleAndTokenizeOptions()` with no args is sufficient. |
| Tokenize card | `tokenizeCard()` | Card tokenization without a sale; result contains `cardToken` (opaque alphanumeric string managed by your token provider; the token itself typically does not expire, but the underlying card data — PAN, expiry — may become stale when the physical card is replaced) |
| Pre-authorization | `preAuthorization(amount, currency)` | Holds funds; complete with `preAuthorizationCapture` |
| Refund (unlinked) | `refund(amount, currency)` | Standalone refund — requires a card interaction on the terminal |

### Reference-based operations

No card interaction. Operate on a previously completed transaction by its ID, GUID, or token.

| Operation | Signature | Notes |
|---|---|---|
| Sale reversal | `saleReversal(amount, currency, originalTransactionID)` | Reverses a completed sale — no card presented |
| Refund (linked) | `refund(amount, currency, originalTransactionID)` | Linked refund against original transaction |
| Refund reversal | `refundReversal(amount, currency, originalTransactionID)` | Reverses a previously issued refund |
| Pre-auth capture | `preAuthorizationCapture(amount, currency, originalTransactionID)` or `preAuthorizationCapture(amount, currency, originalTransactionID, options: Options)` | Captures a previously authorized hold. `Options` carries `customerReference` and `metadata` only. |
| Pre-auth increase | `preAuthorizationIncrease(amount, currency, originalTransactionID)` | Increases an existing pre-auth hold before capture |
| Pre-auth reversal | `preAuthorizationReversal(originalTransactionID)` or `preAuthorizationReversal(amount, currency, originalTransactionID)` | Cancels an uncaptured pre-auth hold. Amount and currency are optional — omit to cancel the full hold; include for a partial release. |
| Tip adjustment | `tipAdjustment(tipAmount, currency, originalTransactionID): Boolean` | See note below |
| Automatic refund | `automaticRefund(originalTransactionID)` | Full refund by original transaction ID — no card interaction, no amount required. Useful for post-transaction refunds from a back-office flow. Result delivered via `endOfTransaction`. |

### Keyed entry operations

The cardholder keys their card details directly into the PAX terminal — no physical card read. **Requires merchant-level enablement** — contact Handpoint support. `cloudApiKey` must be present in `HandpointCredentials`.

| Operation | Signature | Notes |
|---|---|---|
| Keyed entry sale | `motoSale(amount, currency, options: MoToOptions)` | Card details entered on terminal keypad |
| Keyed entry refund | `motoRefund(amount, currency, originalTransactionID, options: MoToOptions)` | Refund against a prior keyed entry sale |
| Keyed entry reversal | `motoReversal(originalTransactionID)` or `motoReversal(originalTransactionID, options: MoToOptions)` or `motoReversal(amount: String?, currency: String?, originalTransactionID)` (partial) | Reverses a keyed entry sale. ⚠️ **The partial-amount overload uses `String?` for amount and `String?` for currency** — not `BigInteger`/`Currency` like every other operation. Example: `motoReversal("100", "USD", originalId)` for a $1.00 partial reversal. Passing `BigInteger`/`Currency` types will cause a compile error or overload resolution failure. |
| Keyed entry pre-auth | `motoPreauthorization(amount, currency)` or `motoPreauthorization(amount, currency, options: MoToOptions)` | Note: lowercase 'a' — `motoPreauthorization`, not `motoPreAuthorization`. |

### Device and session management

| Operation | Signature | Notes |
|---|---|---|
| Connect | `connect(device: Device)` | Connects (or reconnects) to a terminal; call again after `disconnect()` to reconnect |
| Disconnect | `disconnect()` | Cleanly disconnects from the terminal |
| Stop transaction | `stopCurrentTransaction(): Boolean` | Cancels the in-progress operation. Returns `true` if the stop was accepted. Fires `currentTransactionStatus(UserCancelled)` then `endOfTransaction(CANCELLED)`. Calling during recovery (while polling `getTransactionStatus`) is a no-op. |
| Poll recovery | `getTransactionStatus(transactionReference: String): Boolean` | Submits a cloud recovery query; result arrives in `transactionResultReady()`. Requires `cloudApiKey` in `HandpointCredentials`. Returns `false` if the SDK rejected the request (not initialized, offline) — retry after backoff. |
| Print receipt | `printReceipt(receiptData: String): Boolean` | Prints inline HTML or a hosted URL. Returns `true` if the print was accepted. **If `settings.receiptsAsURLs = true`: do not call from `endOfTransaction`** — the URL is not ready for 4–8 s while S3 upload completes. Use `Events.ReceiptUploadingEvent.receiptsUploaded()` for the URL, or `Events.ReceiptEvent.receiptIsReady()` for inline HTML (~1.5 s after EOT, zero fetch). |
| Signature result | `signatureResult(accepted: Boolean): Boolean` | **HiLite/Bluetooth only** — respond to the `Events.SignatureRequired.signatureRequired()` callback. Not needed for PAX SmartPOS (terminal handles signature internally). |

:::note Reversals vs refunds
`saleReversal` reverses a **sale** (cancels the auth before settlement, before the cardholder leaves). `refundReversal` reverses a **refund** (cancels a previously issued refund). Both require the original transaction ID and exact original amount. Reversal availability is acquirer-dependent — check your acquirer contract. Once a batch closes, use a refund instead of a reversal.
:::

:::note `originalTransactionID` vs `transactionReference`
The `originalTransactionID` parameter in reversal, refund, and capture operations is `TransactionResult.transactionID` from the prior **completed** transaction — the acquirer-assigned ID available after the card interaction finishes. It is **not** the same as `OperationStartResult.transactionReference`, which is used only for recovery polling via `getTransactionStatus()`. Passing the wrong ID will silently fail at the acquirer. See the [Integration Walkthrough](android-integration-walkthrough) Section 2 for the distinction.
:::

:::note `tipAdjustment` return type and concurrent safety
`tipAdjustment` returns `Boolean` directly (the underlying SDK method) — not `OperationStartResult`. It does **not** interact with the card and does **not** fire `endOfTransaction`. `true` means the tip was recorded successfully; `false` means it was rejected (e.g. unsupported by acquirer, wrong transaction reference). No recovery polling is needed. **Note:** wrapper implementations that gate behind `requireInit()` (as HpSdk.kt does) will return `Boolean?` — callers should use `== true` rather than trusting a non-null return.

Unlike all other financial operations, **`tipAdjustment` does not need to be blocked during active recovery** — it adjusts a previously completed transaction and does not risk double-charge. If you implement a `requireNoRecovery()` guard in your wrapper, do not apply it to `tipAdjustment`.
:::

---

## Transaction options

Options classes live in `com.handpoint.api.shared.options`. Add the relevant imports alongside the Section 4 imports:

```kotlin
import com.handpoint.api.shared.options.Options
import com.handpoint.api.shared.options.SaleOptions
import com.handpoint.api.shared.options.SaleAndTokenizeOptions
import com.handpoint.api.shared.options.MoToOptions
import com.handpoint.api.shared.options.MoToChannel
import com.handpoint.api.shared.options.TipConfiguration
import com.handpoint.api.shared.options.MerchantAuth
import com.handpoint.api.shared.options.Credential
```

`SaleOptions` inherits from `BypassOptions`, which inherits from `MerchantAuthOptions`:

```kotlin
// ⚠️ ILLUSTRATIVE ONLY — do not copy these class declarations into your project.
// These classes are defined in the SDK. Declaring them again causes "duplicate class" errors.
// They are shown here to explain the inheritance hierarchy and available fields.
//
// Options inheritance chain (left = root base class, right = most derived):
// Options → MerchantAuthOptions → BypassOptions → SaleOptions → SaleAndTokenizeOptions
//
// Options (root): customerReference: String, metadata: Map<String, String>?
// MerchantAuthOptions adds: merchantAuth: MerchantAuth?
// BypassOptions adds: pinBypass, signatureBypass
// SaleOptions adds: tipConfiguration, budgetNumber

// Fields in SaleOptions (SDK-defined):
//   var tipConfiguration: TipConfiguration? = null    // configures on-device tip prompt
//   var budgetNumber: String? = null                  // South Africa installment budget number

// Fields in BypassOptions (SDK-defined):
//   var pinBypass: Boolean = false         // shows PIN screen but allows cardholder to skip
//   var signatureBypass: Boolean = false   // skips signature step
```

### `TipConfiguration`

Field names below are shown as Kotlin property names. If the underlying SDK class is Java, the IDE will synthesize Kotlin property accessors from getters/setters — verify the exact names with IDE autocomplete on a `TipConfiguration()` instance.

```kotlin
// ⚠️ ILLUSTRATIVE ONLY — do not copy this class declaration into your project.
// TipConfiguration is defined in the SDK. Declaring it again causes "duplicate class" errors.
class TipConfiguration {
    var baseAmount: BigInteger? = null           // base amount before tip (null = use sale amount)
    var headerName: String = "Tip"               // header text on device tip screen
    var tipPercentages: List<Int> = listOf(5, 10, 15, 20)  // percentage options shown
    var isEnterAmountEnabled: Boolean = true     // allow manual tip amount entry
    var isSkipEnabled: Boolean = true            // allow cardholder to skip tip
    var footer: String = ""                      // footer text on tip screen
}
```

### Usage example

```kotlin
val options = SaleOptions().apply {
    tipConfiguration = TipConfiguration().apply {
        headerName = "Add a tip?"
        tipPercentages = listOf(10, 15, 20)
        isEnterAmountEnabled = true
        isSkipEnabled = true
        footer = "Thank you!"
    }
    pinBypass = false   // true shows PIN screen with skip option (chip-enforced cards ignore this)
}
api.sale(amount, currency, options)
```

:::note `pinBypass` behavior
`pinBypass = true` shows the PIN entry screen but allows the cardholder to press Green/OK to skip. Cards that enforce PIN at the chip level will require PIN regardless of this setting.
:::

### `MoToOptions`

Used for all MOTO operations. Inherits `customerReference` and `metadata` from `Options`, and `merchantAuth` from `MerchantAuthOptions` — MOTO operations support multi-MID credential overrides via `merchantAuth`.

```kotlin
// ⚠️ ILLUSTRATIVE ONLY — do not copy this class declaration into your project.
// MoToOptions is defined in the SDK. Declaring it again causes "duplicate class" errors.
class MoToOptions : MerchantAuthOptions() {
    var channel: MoToChannel? = null   // ECOMMERCE, MOTO, or null (acquirer default)
    var tokenize: Boolean = false      // true to also tokenize the card
    var cardToken: String? = null      // pass a token to perform a de-tokenized MOTO charge
}
```

`MoToChannel` is an enum in `com.handpoint.api.shared.options`:

```kotlin
import com.handpoint.api.shared.options.MoToChannel

options.channel = MoToChannel.MOTO       // mail/telephone order
options.channel = MoToChannel.ECOMMERCE  // e-commerce / online
// null — let the acquirer apply its default channel classification
```

For basic MOTO, `MoToOptions()` with no configuration is sufficient.

### `MerchantAuthOptions` and multi-MID authentication

`Options` (the root base class) exposes two fields available on every options object:

| Field | Type | Description |
|---|---|---|
| `customerReference` | `String` | Arbitrary identifier passed through to the transaction result — useful for order IDs, booking references, etc. |
| `metadata` | `Map<String, String>?` | Key-value pairs passed through to the transaction result for your own use |

`MerchantAuthOptions` extends `Options` and adds one additional field:

| Field | Type | Description |
|---|---|---|
| `merchantAuth` | `MerchantAuth?` | Overrides the terminal's default MID/TID for this transaction. Used for multi-merchant (sub-merchant) scenarios. |

`MerchantAuth` holds one or more `Credential` objects. A `Credential` can specify:
- `externalId: String` — looks up the merchant configuration in the Handpoint backend. **This is the only field you normally need for multi-MID.**
- `acquirer`, `mid`, `tid`, `mcc` — lower-level overrides if `externalId` is not available.

**Multi-MID example (recommended approach):**

```kotlin
val options = SaleOptions().apply {
    if (!subMerchantExternalId.isNullOrBlank()) {
        val credential = Credential().apply { externalId = subMerchantExternalId }
        merchantAuth = MerchantAuth().also { it.add(credential) }
    }
}
api.sale(amount, currency, options)
```

Only `externalId` is required — Handpoint resolves the full MID/TID/MCC from it server-side.

### `LogLevel` values

Pass to `api.setLogLevel()` after `InitialisationComplete`:

| Value | Verbosity |
|---|---|
| `LogLevel.Error` | Errors only |
| `LogLevel.Info` | Informational events (recommended for production — captures enough detail for support without excessive verbosity) |
| `LogLevel.Debug` | Debug-level output — use during development |
| `LogLevel.Full` | Full message payloads — more verbose than `Debug`; includes raw message content |
| `LogLevel.Sensitive` | Maximum verbosity — includes sensitive card data. Never use in production. |

---

## Troubleshooting SDK initialization

This section documents real integration issues encountered during SDK setup, how to diagnose them, and how to fix them. It is intended for both human developers and AI coding agents using this documentation.

---

### App shows "not connected / INIT X" — no callbacks arrive

**Symptom:** The app starts, the SDK logs "connecting via ANDROID\_PAYMENT", but `connectionStatusChanged` and `currentTransactionStatus` never fire. The UI stays at "not initialized". You do not see any `STATUS [InitialisationComplete]` log lines from your own code.

**Logcat pattern:** You see `SDK-Detailed-Logger` entries firing internally — including a `Current transaction status: InitialisationComplete` line — but no corresponding log from your delegate callbacks.

```
W SDK-Detailed-Logger: Current transaction status: InitialisationComplete object: {...}
# ← expected but MISSING: D HpSdk: STATUS [39321] Initialisation complete
```

**Root cause in RC SDK builds (7.1014.0+):** Calling `HapiFactory.getAsyncInterface(this, context, credentials, settings)` alone is **not sufficient** to register your delegate as an event receiver. In RC builds, you must explicitly call `api.registerEventsDelegate(this)` after creating the `Hapi` instance.

Without this call, the SDK initializes internally and fires events, but your class never receives any callbacks — regardless of how many `Events.*` interfaces it implements.

**Fix — Kotlin:**

```kotlin
api = HapiFactory.getAsyncInterface(this, appContext, credentials, settings)
api?.registerEventsDelegate(this)   // ← required in RC builds; skipping = no callbacks
val device = Device("PAX A920", "", "", ConnectionMethod.ANDROID_PAYMENT)
api?.connect(device)
```

**Fix — Java:**

```java
api = HapiFactory.getAsyncInterface(this, appContext, credentials, settings);
api.registerEventsDelegate(this);   // ← required in RC builds; skipping = no callbacks
Device device = new Device("PAX A920", "", "", ConnectionMethod.ANDROID_PAYMENT);
api.connect(device);
```

:::note RC vs stable SDK
This requirement was introduced in RC builds of the 7.1014.0 series. In older stable builds (7.1012.x and earlier), passing `this` to `getAsyncInterface` was sufficient. When upgrading to an RC or newer SDK, always verify that your `init()` function calls `registerEventsDelegate` after the factory call.
:::

---

### `setLogLevel` fails with `DeviceIsBusyVerification` right after InitialisationComplete

**Symptom:** You call `api.setLogLevel(LogLevel.Info)` in your `currentTransactionStatus(InitialisationComplete)` handler and the SDK logs:
```
ERROR: OperationInitializerCommandDecorator: Error while executing command: SetLogLevelCommand, exception type: DeviceIsBusyVerification
```

**Cause:** When `InitialisationComplete` fires, the cloud MOTO service initialization is still running in parallel. This briefly blocks the PAX terminal from accepting new commands.

**Fix:** This error is non-critical. The SDK remains fully functional for card-present operations. You can either ignore the error (the log level defaults to `Info` in production builds) or retry `setLogLevel` after a short delay.

---

### `com.handpoint.api.shared.Settings` — Unresolved reference

**Symptom:** Build fails with `Unresolved reference: Settings` when you write `com.handpoint.api.shared.Settings()`.

**Cause:** In RC builds (7.1014.0+), the `Settings` class moved from `com.handpoint.api.shared` to `com.handpoint.api`.

**Fix:**

```kotlin
// ❌ Stable SDK (≤ 7.1012.x)
val settings = com.handpoint.api.shared.Settings()

// ✅ RC / new SDK (7.1014.0+)
val settings = com.handpoint.api.Settings()
```

---

### `result.responseText` — Unresolved reference

**Symptom:** Build fails with `Unresolved reference: responseText` on a `TransactionResult` object.

**Cause:** The `responseText` field was removed from `TransactionResult` in RC builds. Use `result.errorMessage` for the acquirer's decline reason, or `result.finStatus` for the settlement outcome.

---

### Cloud init returns 400 — `CloudApiService failed to start`

**Symptom:** Logcat shows:
```
W SDK-Detailed-Logger: --> GET https://cloud.handpoint.io/init
W SDK-Detailed-Logger: timestamp: 20260903093653
W SDK-Detailed-Logger: CrKeyCloud: 0821599465_PAXA920_98161...
W SDK-Detailed-Logger: <-- 400 https://cloud.handpoint.io/init (1618ms)
W SDK-Detailed-Logger: CLOUD - CloudApiService failed to start
```

**What this affects:** Only MOTO (mail-order / telephone-order) and cloud-initiated operations. **Card-present terminal operations (sale, refund, reversal, pre-auth) are not affected** — the terminal initializes via the PAX JNI path, independently of the cloud service.

**Authentication mechanism:** `cloud.handpoint.io/init` authenticates via the `ApiKeyCloud` header (the merchant's Cloud API Key). It does **not** use `CrKeyCloud`. The correct request looks like:
```
GET https://cloud.handpoint.io/init
ApiKeyCloud: <your-cloud-api-key>
```
A successful response delivers Pusher connection parameters: `{"key":"...","cluster":"..."}`.

**Root cause of 400 in RC SDK builds:** In RC builds (7.1014.0+), the cloud init HTTP client sends `CrKeyCloud` (an SSK-derived HMAC) instead of `ApiKeyCloud`. The cloud service rejects this with 400 because it expects `ApiKeyCloud`. This is a known RC regression — the CloudApiKey from `HandpointCredentials` is not being forwarded to the cloud init request interceptor.

**Prerequisite — pass both credentials to HandpointCredentials:**
```kotlin
// ❌ Only SSK — cloud init will be missing ApiKeyCloud → 400
val credentials = HandpointCredentials(SHARED_SECRET)

// ✅ Both SSK and Cloud API Key — SDK can authenticate to both card-present and cloud
val credentials = HandpointCredentials(SHARED_SECRET, CLOUD_API_KEY)
```

For MOTO operations to work, the Cloud API Key **must** be passed as the second argument to `HandpointCredentials`. Without it, the SDK cannot authenticate to `cloud.handpoint.io` even when the RC authentication bug is fixed in a stable build.

**Diagnostic steps for other 400 causes:**

1. **Verify device enrollment:** Call `GET https://cloud.handpoint.io/devices` with header `ApiKeyCloud: <your-cloud-api-key>`. The response lists devices assigned to your merchant. Confirm your device's serial number appears.

2. **Verify SSK match:** The SSK in your app must match TMS exactly. Check `local.properties` → `BuildConfig` and compare with the TMS merchant record.

3. **Check environment:**
   | Environment | Cloud domain | SDK type |
   |---|---|---|
   | Staging | `cloud.handpoint.io` | RC build |
   | Production | `cloud.handpoint.com` | Stable build |
   
   A staging Cloud API Key will not work against the production cloud endpoint, and vice versa.

4. **Check merchant TMS config:** Call `GET /partner/{partnerId}/merchant/{merchantId}?detail=merchantobject` to confirm the merchant is active and has the correct acquirer configured for MOTO.

---

### hiKeyLoader vs SSK — they are different things

This is one of the most common points of confusion in a new integration.

| | hiKeyLoader | SSK (sharedSecretKey) |
|---|---|---|
| **What it is** | A PAX app that injects a master key into the device's secure element | A merchant credential string (hex) |
| **What it does** | Allows the device to **authenticate to an environment** (staging vs production) | Allows the **app to authenticate to a merchant account** |
| **Where it goes** | Directly into device hardware via the hiKeyLoader app | Into your Android app code via `HandpointCredentials(ssk, cloudApiKey)` |
| **Who provides it** | Handpoint hardware team | Handpoint TMS merchant record |
| **Needed for** | Device-level environment selection | Every SDK initialization |

The SSK is **never injected via hiKeyLoader**. It is passed directly to `HandpointCredentials` in your app code. hiKeyLoader's key is a separate device-level authentication key; it does not carry or encode the SSK.

If you have the wrong SSK in `HandpointCredentials`, the SDK will start but transactions will be rejected or the cloud will return a credential error. hiKeyLoader cannot fix this.

:::note Best practice for credentials
Store credentials in `local.properties` (gitignored) and read them via `BuildConfig` fields. Never hardcode them in source files or commit them to version control.

```kotlin
// In app/build.gradle.kts inside android { defaultConfig { } }:
buildConfigField("String", "HANDPOINT_SHARED_SECRET",
    "\"${localProps.getProperty("HANDPOINT_SHARED_SECRET") ?: ""}\"")
buildConfigField("String", "HANDPOINT_CLOUD_API_KEY",
    "\"${localProps.getProperty("HANDPOINT_CLOUD_API_KEY") ?: ""}\"")

// In HpSdk.kt:
private val SHARED_SECRET: String get() = BuildConfig.HANDPOINT_SHARED_SECRET
private val CLOUD_API_KEY: String get() = BuildConfig.HANDPOINT_CLOUD_API_KEY
```
:::

---

### Diagnosing "not initialized" vs "credentials wrong"

Use this decision tree when the app doesn't reach `InitialisationComplete`:

```
App not initializing
│
├─ Is there a D HpSdk / D YourSdkClass log line for each callback?
│   └─ No → registerEventsDelegate(this) is missing — add it after getAsyncInterface()
│
├─ Is there a <-- 400 https://cloud.handpoint.io/init in logcat?
│   ├─ Yes, and card-present ALSO not working → SSK mismatch; check local.properties
│   └─ Yes, but card-present works → MOTO cloud service only; not a blocker
│
├─ Build error "Unresolved reference: Settings"
│   └─ → Change com.handpoint.api.shared.Settings to com.handpoint.api.Settings
│
└─ Build error "Unresolved reference: responseText"
    └─ → Remove the field access; use result.errorMessage or result.finStatus instead
```
