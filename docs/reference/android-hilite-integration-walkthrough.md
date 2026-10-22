---
title: Android SDK — HILITE Integration Walkthrough
sidebar_position: 4
description: Production-ready integration requirements for the Handpoint Android SDK on HILITE (Datecs) Bluetooth terminals — connection management, device discovery, signature handling, transaction lifecycle, recovery, and error handling.
---

# Android SDK — HILITE Integration Walkthrough

:::note For PAX / SmartPOS terminals
For ANDROID_PAYMENT (PAX SmartPOS integrated terminal), see [Android SDK Integration Walkthrough](android-integration-walkthrough).
:::

A production-ready HILITE integration has five non-negotiable requirements that must all be implemented before go-live:

1. **Initialization** — create the SDK instance, select a paired device, connect explicitly, and gate all operations behind `InitialisationComplete`
2. **Device management** — discover and persist the chosen device; restore it on app restart
3. **Transaction lifecycle** — persist the reference before the result; check `operationStarted`
4. **Signature handling** — respond to `signatureRequired` with `signatureResult`; never leave it unanswered
5. **Recovery** — poll `getTransactionStatus` as a complementary safety net; keep polling for 90 seconds from when `UNDEFINED` is first received

The sections below walk through each requirement with complete implementation patterns and the reasoning behind them.

---

## Overview

The HILITE (Datecs) is an external Bluetooth card terminal that pairs with your Android POS device. Unlike PAX SmartPOS terminals — where your app runs directly on the terminal hardware — the HILITE communicates with your Android app over Bluetooth and handles its own EMV kernel and display.

This external device model changes the integration in several important ways:

| Concern | PAX SmartPOS (`ANDROID_PAYMENT`) | HILITE (`BLUETOOTH`) |
|---|---|---|
| Connection | Auto-connect at SDK init | Explicit `connect(device)` call required |
| Delegate interface | `Events.SmartposRequired` (4 methods) | `Events.MposRequired` (6 methods) |
| Device discovery | Not needed — one device, one app | `searchDevices()` / `getPairedDevices()` required |
| Signature | Never fires | `signatureRequired` fires for signature-CVM transactions |
| `ConnectionStatus` values | `Connected`, `CloudConnected`, `Disconnected`, `NotConfigured` | `Connected`, `Connecting`, `Disconnected`, `Disconnecting`, `NotConfigured` |
| Credentials | Shared secret + cloud API key | Shared secret + cloud API key (no hiKeyLoader step) |
| Gradle dependencies | Same — no additional dependencies needed |

The SDK itself is identical — the same Gradle dependency, same `Hapi` interface, same financial operation methods. Only the connection path and delegate interface differ.

---

## Prerequisites

Before writing any code:

- **HILITE terminal powered on and paired** via the Android Bluetooth settings (one-time physical setup). The terminal must appear in the device's paired devices list before the SDK can connect to it.
- **Shared secret key (SSK)** from Handpoint — unique per merchant, obtained from your Handpoint integration team.
- **Cloud API key** from Handpoint — required for recovery polling via `getTransactionStatus`.
- **Gradle build configuration** — exactly the same as for PAX SmartPOS. See the [Android SDK Setup guide](android-sdk-setup) for the full dependency, Maven repository, and packaging configuration. No additional dependencies are needed for Bluetooth terminals.
- **Bluetooth permissions** declared in `AndroidManifest.xml` (shown below).

:::info HILITE terminal setup
Unlike PAX SmartPOS, HILITE terminals do not use the hiKeyLoader app for key injection. The shared secret is provided to the SDK at runtime via `HandpointCredentials` — no terminal-side key injection step is required during development.
:::

---

## AndroidManifest.xml — Bluetooth permissions

Add these permissions to your `AndroidManifest.xml` in addition to the standard permissions listed in the [setup guide](android-sdk-setup#2-androidmanifestxml):

```xml
<!-- Bluetooth — pre-API 31 (Android 11 and below) -->
<uses-permission android:name="android.permission.BLUETOOTH"
    android:maxSdkVersion="30" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"
    android:maxSdkVersion="30" />

<!-- Bluetooth — API 31+ (Android 12 and above) -->
<!-- Required to connect to a paired device -->
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
<!-- Required to scan for nearby Bluetooth devices via searchDevices() -->
<uses-permission android:name="android.permission.BLUETOOTH_SCAN" />

<!-- Required for Bluetooth device discovery on API < 31 -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"
    android:maxSdkVersion="30" />
```

:::caution Runtime permissions on API 31+
`BLUETOOTH_CONNECT` and `BLUETOOTH_SCAN` are runtime permissions on Android 12 (API 31) and above — declaring them in the manifest is not enough. You must request them at runtime before calling `connect()` or `searchDevices()`. If `BLUETOOTH_CONNECT` is not granted when `connect()` is called, `connectionStatusChanged` will never fire and the connection will fail silently.

```kotlin
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
    ActivityCompat.requestPermissions(
        this,
        arrayOf(
            Manifest.permission.BLUETOOTH_CONNECT,
            Manifest.permission.BLUETOOTH_SCAN
        ),
        REQUEST_BLUETOOTH_PERMISSIONS
    )
}
```
:::

:::note `ACCESS_FINE_LOCATION` and discovery on API &lt; 31
On Android 11 and below, `searchDevices()` (active BT scan) requires `ACCESS_FINE_LOCATION` — this is an Android platform requirement. If you only use `getPairedDevices()`, which reads the already-bonded list without scanning, `ACCESS_FINE_LOCATION` is not needed.
:::

---

## Building the HpSdk singleton

The samples below use `HpSdk` as a Kotlin `object` singleton — an ISV-created wrapper that encapsulates the `Hapi` interface, connection state, recovery state, and `SharedPreferences` persistence in one place.

:::note HpSdk is an ISV-created wrapper, not an SDK class
`HpSdk` is not part of the Handpoint SDK library — it is a pattern you create and own. You may name it or structure it differently in your own project. The full reference implementation is available in the [demo app](./android-demo-app.md).
:::

### Define the listener interface

`HpSdk` notifies the rest of your app through a listener interface you define. Declare it once and implement it in your Activity or ViewModel:

```kotlin
interface SdkListener {
    /** Timestamped log entry — display in a debug log view or write to a file. */
    fun onLog(entry: String)
    /** Connection state changed. `connected` is true only when transport is established. */
    fun onConnectionChanged(connected: Boolean)
    /** InitialisationComplete received — SDK is ready for financial operations. */
    fun onInitialized()
    /** Mid-transaction status update (e.g. "Chip card inserted", "PIN entry in progress"). */
    fun onTransactionStatusUpdate(status: String)
    /** Terminal finStatus received — AUTHORISED, DECLINED, etc. (never UNDEFINED or IN_PROGRESS). */
    fun onTransactionResult(result: TransactionResult)
    /** Recovery started for the given reference — show a "processing" state to the merchant. */
    fun onRecoveryStarted(transactionReference: String)
    /** 90s recovery window expired while online — outcome unknown for this reference. */
    fun onRecoveryFailed(transactionReference: String)
    /** Device scan completed. Show this list in a picker UI. */
    fun onDevicesDiscovered(devices: List<Device>)
    /** Signature verification required — show signature UI; call HpSdk.signatureResult() when done. */
    fun onSignatureRequired(merchantReceipt: String)
}
```

Your Activity implements `SdkListener` and sets itself as the listener before calling `init()`.

:::note
`onSignatureRequired` fires only for transactions where the acquirer configuration requires a manual signature instead of PIN. Many modern acquirer configurations use PIN for all chip transactions — whether `signatureRequired` ever fires depends on your acquirer setup. Always implement it; in practice it may fire rarely.
:::

### Wire the listener before calling `init()`

SDK callbacks can arrive before `init()` returns. Set your listener first:

```kotlin
HpSdk.listener = this   // must be set BEFORE init()
HpSdk.init(applicationContext)
```

### State variables

```kotlin
object HpSdk : Events.MposRequired {

    private var api: Hapi? = null
    private lateinit var appContext: Context   // set in init() — always applicationContext
    private val mainHandler = Handler(Looper.getMainLooper())
    var listener: SdkListener? = null
    var connected: Boolean = false; private set
    var initialized: Boolean = false; private set
    var lastTransactionId: String? = null; private set

    // ── Recovery state ─────────────────────────────────────────────────────────
    private const val RECOVERY_WINDOW_MS  = 90_000L
    private const val INITIAL_RETRY_MS    = 5_000L
    private const val MAX_RETRY_MS        = 30_000L
    private const val PREFS_NAME          = "HpSdkRecovery"
    private const val PREFS_KEY_REF       = "pendingRef"
    private const val PREFS_KEY_START     = "pendingStartMs"  // epoch ms of first UNDEFINED
    private const val PREFS_KEY_DEV_NAME  = "deviceName"
    private const val PREFS_KEY_DEV_ADDR  = "deviceAddress"

    private var recoveryRef: String? = null
    private var recoveryStartMs: Long = 0L
    private var recoveryNextDelayMs: Long = INITIAL_RETRY_MS
    private var recoveryActive: Boolean = false

    private val recoveryHandler = Handler(Looper.getMainLooper())
    private val recoveryRunnable = Runnable { attemptRecovery() }
    private val TAG = "HpSdk"
```

### `init()` — create the SDK instance

`init()` creates the `Hapi` interface. For Bluetooth terminals it does **not** auto-connect — connection requires an explicit `connect(device)` call after the user selects a terminal.

```kotlin
    fun init(context: Context) {
        appContext = context.applicationContext
        loadRecoveryState()   // ← load before connecting so ref is ready when InitialisationComplete fires
        val credentials = HandpointCredentials(
            sharedSecret = BuildConfig.HANDPOINT_SHARED_SECRET,
            cloudApiKey  = BuildConfig.HANDPOINT_CLOUD_API_KEY
        )
        val settings = Settings().apply {
            automaticReconnection = true   // SDK auto-reconnects after BT drop
        }
        // context is accepted for API compatibility but not used internally —
        // the SDK provisions its own Application context via a ContentProvider at process start.
        // Activity context, Application context, and null all behave identically.
        api = HapiFactory.getAsyncInterface(
            delegate    = this,
            context     = context,
            credentials = credentials,
            settings    = settings
        )
        log("HpSdk initialized — call connect(device) to establish Bluetooth connection")
    }
```

### `connect()` and `disconnect()`

```kotlin
    /**
     * Connect to the given HILITE device. Saves the device to SharedPreferences so it
     * can be restored on the next app launch via getSavedDevice().
     *
     * Returns true if the SDK accepted the connect request. Connection is asynchronous —
     * wait for connectionStatusChanged(Connected) and then currentTransactionStatus(InitialisationComplete).
     */
    fun connect(device: Device): Boolean {
        val result = api?.connect(device) ?: false
        if (result) {
            saveDevicePrefs(device)
            log("[APP] connect() accepted for ${device.name} (${device.address})")
        } else {
            log("[APP] connect() rejected — api may not be initialized")
        }
        return result
    }

    /**
     * Disconnect from the currently connected device.
     * connectionStatusChanged(Disconnected) fires when the disconnect completes.
     */
    fun disconnect(): Boolean {
        val result = api?.disconnect() ?: false
        log("[APP] disconnect() called — result=$result")
        return result
    }
```

### Device discovery — `searchDevices()` and `getPairedDevices()`

```kotlin
    /**
     * Trigger an active Bluetooth scan. Results arrive asynchronously in
     * deviceDiscoveryFinished(). Requires BLUETOOTH_SCAN permission on API 31+.
     */
    fun searchDevices() {
        log("[APP] searchDevices() called")
        api?.searchDevices(ConnectionMethod.BLUETOOTH)
    }

    /**
     * Return the list of devices already bonded (paired) in Android Bluetooth settings.
     * Synchronous — returns immediately. Does not require BLUETOOTH_SCAN permission.
     * If the list is empty, the HILITE must be paired via Settings → Bluetooth first.
     */
    fun getPairedDevices(): List<Device> {
        return api?.getPairedDevices(ConnectionMethod.BLUETOOTH) ?: emptyList()
    }

    /**
     * Retrieve the last-connected device from SharedPreferences. Returns null if none saved.
     * Call on app launch to offer auto-reconnect to the previously used terminal.
     */
    fun getSavedDevice(): Device? {
        val prefs   = appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val name    = prefs.getString(PREFS_KEY_DEV_NAME, null) ?: return null
        val address = prefs.getString(PREFS_KEY_DEV_ADDR, null) ?: return null
        return Device(
            name             = name,
            address          = address,
            connectionMethod = ConnectionMethod.BLUETOOTH
        )
    }

    private fun saveDevicePrefs(device: Device) {
        appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit()
            .putString(PREFS_KEY_DEV_NAME, device.name)
            .putString(PREFS_KEY_DEV_ADDR, device.address)
            .apply()
    }
```

### Financial operations

All financial operations share the same guard pattern: verify initialization, verify no active recovery, call the SDK method, check `operationStarted`, and persist the reference before waiting for the result.

```kotlin
    private fun requireInit(): Boolean {
        if (!initialized) {
            log("[APP] operation rejected — not initialized (wait for InitialisationComplete)")
        }
        return initialized
    }

    private fun requireNoRecovery(): Boolean {
        if (recoveryActive) {
            log("[APP] operation rejected — recovery in progress for ref=$recoveryRef")
        }
        return !recoveryActive
    }

    fun sale(amount: BigInteger, currency: Currency): OperationStartResult? {
        if (!requireInit() || !requireNoRecovery()) return null
        val result = api?.sale(amount, currency) ?: return null
        if (result.operationStarted) {
            log("[APP] sale started | ref=${result.transactionReference} | amount=$amount | currency=$currency")
            recordPending(result.transactionReference)
        } else {
            log("[APP] sale rejected by SDK: ${result.errorMessage}")
        }
        return result
    }

    fun refund(amount: BigInteger, currency: Currency, originalTransactionID: String? = null): OperationStartResult? {
        if (!requireInit() || !requireNoRecovery()) return null
        val result = if (originalTransactionID != null) {
            api?.refund(amount, currency, originalTransactionID)
        } else {
            api?.refund(amount, currency)
        } ?: return null
        if (result.operationStarted) {
            log("[APP] refund started | ref=${result.transactionReference} | amount=$amount")
            recordPending(result.transactionReference)
        } else {
            log("[APP] refund rejected by SDK: ${result.errorMessage}")
        }
        return result
    }

    fun saleReversal(amount: BigInteger, currency: Currency, originalTransactionID: String): OperationStartResult? {
        if (!requireInit() || !requireNoRecovery()) return null
        val result = api?.saleReversal(amount, currency, originalTransactionID) ?: return null
        if (result.operationStarted) {
            log("[APP] saleReversal started | ref=${result.transactionReference}")
            recordPending(result.transactionReference)
        } else {
            log("[APP] saleReversal rejected by SDK: ${result.errorMessage}")
        }
        return result
    }

    fun preAuthorization(amount: BigInteger, currency: Currency): OperationStartResult? {
        if (!requireInit() || !requireNoRecovery()) return null
        val result = api?.preAuthorization(amount, currency) ?: return null
        if (result.operationStarted) {
            log("[APP] preAuthorization started | ref=${result.transactionReference} | amount=$amount")
            recordPending(result.transactionReference)
        } else {
            log("[APP] preAuthorization rejected by SDK: ${result.errorMessage}")
        }
        return result
    }

    fun preAuthorizationCapture(amount: BigInteger, currency: Currency, originalTransactionID: String): OperationStartResult? {
        if (!requireInit() || !requireNoRecovery()) return null
        val result = api?.preAuthorizationCapture(amount, currency, originalTransactionID) ?: return null
        if (result.operationStarted) {
            log("[APP] preAuthorizationCapture started | ref=${result.transactionReference}")
            recordPending(result.transactionReference)
        } else {
            log("[APP] preAuthorizationCapture rejected by SDK: ${result.errorMessage}")
        }
        return result
    }

    fun preAuthorizationReversal(originalTransactionID: String): OperationStartResult? {
        if (!requireInit() || !requireNoRecovery()) return null
        val result = api?.preAuthorizationReversal(originalTransactionID) ?: return null
        if (result.operationStarted) {
            log("[APP] preAuthorizationReversal started | ref=${result.transactionReference}")
            recordPending(result.transactionReference)
        } else {
            log("[APP] preAuthorizationReversal rejected by SDK: ${result.errorMessage}")
        }
        return result
    }

    fun motoSale(amount: BigInteger, currency: Currency): OperationStartResult? {
        if (!requireInit() || !requireNoRecovery()) return null
        val result = api?.motoSale(amount, currency) ?: return null
        if (result.operationStarted) {
            log("[APP] motoSale started | ref=${result.transactionReference} | amount=$amount")
            recordPending(result.transactionReference)
        } else {
            log("[APP] motoSale rejected by SDK: ${result.errorMessage}")
        }
        return result
    }

    fun motoRefund(amount: BigInteger, currency: Currency, originalTransactionID: String? = null): OperationStartResult? {
        if (!requireInit() || !requireNoRecovery()) return null
        val result = api?.motoRefund(amount, currency, originalTransactionID) ?: return null
        if (result.operationStarted) {
            log("[APP] motoRefund started | ref=${result.transactionReference}")
            recordPending(result.transactionReference)
        } else {
            log("[APP] motoRefund rejected by SDK: ${result.errorMessage}")
        }
        return result
    }

    fun motoReversal(originalTransactionID: String?): OperationStartResult? {
        if (!requireInit() || !requireNoRecovery()) return null
        val result = api?.motoReversal(originalTransactionID) ?: return null
        if (result.operationStarted) {
            log("[APP] motoReversal started | ref=${result.transactionReference}")
            recordPending(result.transactionReference)
        } else {
            log("[APP] motoReversal rejected by SDK: ${result.errorMessage}")
        }
        return result
    }

    fun tokenizeCard(): OperationStartResult? {
        if (!requireInit() || !requireNoRecovery()) return null
        val result = api?.tokenizeCard() ?: return null
        if (result.operationStarted) {
            log("[APP] tokenizeCard started | ref=${result.transactionReference}")
            recordPending(result.transactionReference)
        } else {
            log("[APP] tokenizeCard rejected by SDK: ${result.errorMessage}")
        }
        return result
    }

    fun stopCurrentTransaction(): Boolean = api?.stopCurrentTransaction() ?: false

    fun printReceipt(receipt: String): Boolean = api?.printReceipt(receipt) ?: false
```

### `Events.MposRequired` — all six implementations

#### `endOfTransaction`

`endOfTransaction` is the primary result delivery path. It is always authoritative.

```kotlin
    override fun endOfTransaction(result: TransactionResult, device: Device) {
        logTransactionResult(result)
        val fin = result.finStatus.toString()
        when {
            fin == "UNDEFINED" -> {
                // Outcome unknown — start or continue recovery polling.
                // Never surface UNDEFINED as a payment result to the merchant.
                val ref = recoveryRef ?: run {
                    log("[Recovery] UNDEFINED finStatus but no pending ref — nothing to recover")
                    mainHandler.post { listener?.onTransactionResult(result) }
                    return
                }
                if (!recoveryActive) {
                    startRecovery(ref)
                } else {
                    log("[Recovery] still UNDEFINED — re-scheduling next poll")
                    scheduleRecovery(immediate = false)
                }
                return
            }
            fin == "IN_PROGRESS" -> {
                // Transaction still processing — continue polling.
                scheduleRecovery(immediate = false)
                return
            }
        }
        // Terminal finStatus (AUTHORISED, DECLINED, CANCELLED, FAILED, etc.)
        // Cancel any in-flight recovery — whichever path delivers first wins.
        if (recoveryActive) log("[Recovery] resolved via endOfTransaction (finStatus=$fin)")
        clearRecovery()
        lastTransactionId = result.transactionID?.takeIf { it.isNotBlank() }
        mainHandler.post { listener?.onTransactionResult(result) }
    }
```

#### `connectionStatusChanged`

```kotlin
    // Bluetooth ConnectionStatus values:
    //   Connected     — transport layer connected (not yet ready for transactions)
    //   Connecting    — BT connection attempt in progress
    //   Disconnected  — connection dropped; initialized gate reset; SDK auto-reconnects if
    //                   automaticReconnection = true
    //   Disconnecting — orderly disconnect in progress
    //   NotConfigured — device not recognized as a supported Datecs/HILITE terminal;
    //                   verify pairing and that you selected the correct device
    //
    // Note: CloudConnected does not apply to Bluetooth — it is ANDROID_PAYMENT only.
    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
        connected = (status == ConnectionStatus.Connected)
        if (status == ConnectionStatus.Disconnected || status == ConnectionStatus.Disconnecting) {
            // Reset the initialized gate — operations are not allowed until InitialisationComplete
            // fires again after the next successful connection.
            initialized = false
        }
        log("[SDK] CONNECTION $status | device=${device.name} | address=${device.address}")
        if (status == ConnectionStatus.NotConfigured) {
            log("[SDK] NotConfigured — verify device is a supported HILITE terminal and is properly paired")
        }
        mainHandler.post { listener?.onConnectionChanged(connected) }
    }
```

#### `currentTransactionStatus`

```kotlin
    override fun currentTransactionStatus(info: StatusInfo, device: Device) {
        log("[SDK] STATUS ${info.status} | ${info.message ?: ""}")
        if (info.status == StatusInfo.Status.InitialisationComplete) {
            initialized = true
            api?.setLogLevel(LogLevel.Info)
            log("[SDK] InitialisationComplete — SDK ready for financial operations")
            mainHandler.post { listener?.onInitialized() }
            recoverIfPending()   // always check for a pending recovery on every InitialisationComplete
        } else {
            mainHandler.post {
                listener?.onTransactionStatusUpdate(info.message ?: info.status.toString())
            }
        }
    }
```

#### `transactionResultReady`

`transactionResultReady` is the recovery delivery path — it fires when `getTransactionStatus` resolves a result. Guard against duplicate delivery: `endOfTransaction` may have already resolved the result while a `getTransactionStatus` request was in-flight.

```kotlin
    override fun transactionResultReady(result: TransactionResult, device: Device) {
        log("[SDK] transactionResultReady")
        logTransactionResult(result)
        val fin = result.finStatus.toString()

        // Idempotency guard: if endOfTransaction already cleared recovery (e.g. it delivered
        // the terminal result first while a getTransactionStatus call was in-flight), skip.
        // getTransactionStatus is complementary — whichever path arrives first wins.
        if (recoveryRef == null && !recoveryActive) {
            log("[Recovery] transactionResultReady — already resolved, skipping duplicate")
            return
        }

        // Track first UNDEFINED on the recovery path (app-restart case — window may not have started)
        if (fin == "UNDEFINED" && recoveryStartMs == 0L) {
            recoveryStartMs = System.currentTimeMillis()
        }

        if (fin == "UNDEFINED" || fin == "IN_PROGRESS") {
            log("[Recovery] still pending (finStatus=$fin) — scheduling next attempt")
            scheduleRecovery(immediate = false)
            return
        }

        log("[Recovery] resolved via polling (finStatus=$fin ref=$recoveryRef)")
        clearRecovery()
        lastTransactionId = result.transactionID?.takeIf { it.isNotBlank() }
        mainHandler.post { listener?.onTransactionResult(result) }
    }
```

#### `deviceDiscoveryFinished`

```kotlin
    // Fires after api.searchDevices(BLUETOOTH) completes the active scan.
    // SDK fires on a background thread — post to main before notifying the listener.
    override fun deviceDiscoveryFinished(devices: List<Device>) {
        log("[SDK] deviceDiscoveryFinished — found ${devices.size} device(s): ${devices.map { "${it.name} (${it.address})" }}")
        mainHandler.post { listener?.onDevicesDiscovered(devices) }
    }
```

#### `signatureRequired`

```kotlin
    // Fires when the EMV kernel or acquirer configuration requires manual signature verification.
    // You MUST respond by calling api.signatureResult(accepted: Boolean).
    // The terminal waits indefinitely — never leave signatureRequired unanswered.
    override fun signatureRequired(request: SignatureRequest, device: Device) {
        log("[SDK] signatureRequired — timeout=${request.timeout}s | merchantReceipt length=${request.merchantReceipt.length}")
        // Production: forward to the UI layer for merchant approval.
        // See the Signature Handling section below for the full production pattern.
        mainHandler.post { listener?.onSignatureRequired(request.merchantReceipt) }

        // Demo / development only: uncomment to auto-accept without showing a UI.
        // NEVER ship auto-accept to production — it bypasses CVM verification.
        // api?.signatureResult(true)
    }

    /**
     * Call this after the merchant approves or declines the signature.
     * accepted = true  → merchant accepts the signature (transaction proceeds)
     * accepted = false → merchant declines the signature (transaction is declined)
     */
    fun signatureResult(accepted: Boolean): Boolean {
        log("[APP] signatureResult(accepted=$accepted)")
        return api?.signatureResult(accepted) ?: false
    }
```

### Recovery implementation

```kotlin
    // ── Called on every InitialisationComplete ────────────────────────────────────

    private fun recoverIfPending() {
        val ref = recoveryRef ?: return
        // If the app crashed before endOfTransaction ever fired, recoveryStartMs was never set.
        // Start the window now — better than refusing to poll.
        if (recoveryStartMs == 0L) recoveryStartMs = System.currentTimeMillis()
        val elapsed = System.currentTimeMillis() - recoveryStartMs
        log("[Recovery] pending ref=$ref found on InitialisationComplete (windowAge=${elapsed}ms)")
        recoveryActive = true
        scheduleRecovery(immediate = true)
    }

    // ── Called by endOfTransaction when finStatus == UNDEFINED ────────────────────

    private fun startRecovery(ref: String) {
        recoveryRef         = ref
        recoveryStartMs     = System.currentTimeMillis()   // window starts NOW, at first UNDEFINED
        recoveryNextDelayMs = INITIAL_RETRY_MS
        recoveryActive      = true
        saveRecoveryState()
        log("[Recovery] started for ref=$ref")
        mainHandler.post { listener?.onRecoveryStarted(ref) }
        scheduleRecovery(immediate = false)
    }

    // ── Polling loop ──────────────────────────────────────────────────────────────

    private fun attemptRecovery() {
        val ref             = recoveryRef ?: return
        val elapsed         = System.currentTimeMillis() - recoveryStartMs
        val windowRemaining = RECOVERY_WINDOW_MS - elapsed
        val online          = isNetworkAvailable()

        log("[Recovery] attempt ref=$ref elapsed=${elapsed}ms windowRemaining=${windowRemaining}ms online=$online")

        if (windowRemaining <= 0 && online) {
            // 90-second window expired while online — gateway will not resolve further.
            // Surface to the merchant: outcome unknown, contact acquirer before retrying.
            log("[Recovery] 90s window expired — outcome unknown for ref=$ref")
            clearRecovery()
            mainHandler.post { listener?.onRecoveryFailed(ref) }
            return
        }

        // getTransactionStatus returns true if submitted to the cloud, false if the SDK
        // rejected the request (e.g. not yet initialized, network unavailable).
        // On false, re-schedule and retry after backoff — the built-in retry handles transient SDK rejection.
        if (api?.getTransactionStatus(ref) != true) {
            log("[Recovery] getTransactionStatus rejected — retrying after backoff")
            scheduleRecovery(immediate = false)
        }
        // On success, result arrives asynchronously in transactionResultReady()
    }

    private fun scheduleRecovery(immediate: Boolean) {
        recoveryHandler.removeCallbacks(recoveryRunnable)
        val delay = if (immediate) 0L else recoveryNextDelayMs
        recoveryNextDelayMs = minOf(recoveryNextDelayMs * 2, MAX_RETRY_MS)  // 5s → 10s → 20s → 30s cap
        log("[Recovery] next attempt in ${delay}ms")
        recoveryHandler.postDelayed(recoveryRunnable, delay)
    }

    // ── State persistence ─────────────────────────────────────────────────────────

    private fun recordPending(ref: String) {
        recoveryRef         = ref
        recoveryStartMs     = 0L    // set when endOfTransaction fires UNDEFINED, not at operation start
        recoveryNextDelayMs = INITIAL_RETRY_MS
        recoveryActive      = false
        saveRecoveryState()
        log("[Recovery] recorded pending ref=$ref")
    }

    private fun saveRecoveryState() {
        appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit()
            .putString(PREFS_KEY_REF,   recoveryRef)
            .putLong(PREFS_KEY_START,   recoveryStartMs)
            .apply()
    }

    private fun clearRecoveryPrefs() {
        appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit()
            .remove(PREFS_KEY_REF).remove(PREFS_KEY_START).apply()
    }

    private fun loadRecoveryState() {
        val prefs       = appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        recoveryRef     = prefs.getString(PREFS_KEY_REF, null)
        recoveryStartMs = prefs.getLong(PREFS_KEY_START, 0L)
    }

    private fun clearRecovery() {
        recoveryHandler.removeCallbacks(recoveryRunnable)
        recoveryRef         = null
        recoveryStartMs     = 0L
        recoveryNextDelayMs = INITIAL_RETRY_MS
        recoveryActive      = false
        clearRecoveryPrefs()
    }

    // ── Network availability ──────────────────────────────────────────────────────

    private fun isNetworkAvailable(): Boolean {
        val cm = appContext.getSystemService(Context.CONNECTIVITY_SERVICE) as? ConnectivityManager
            ?: return true
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            cm.activeNetwork?.let { net ->
                cm.getNetworkCapabilities(net)
                    ?.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
            } == true
        } else {
            @Suppress("DEPRECATION")
            cm.activeNetworkInfo?.isConnected == true
        }
    }
```

### Logging helpers

```kotlin
    fun log(message: String) {
        val ts    = SimpleDateFormat("HH:mm:ss.SSS", Locale.US).format(Date())
        val entry = "[$ts] $message"
        Log.d(TAG, entry)
        mainHandler.post { listener?.onLog(entry) }
    }

    private fun logTransactionResult(result: TransactionResult) {
        log("""
            [TXN RESULT]
            finStatus         : ${result.finStatus}
            type              : ${result.type}
            totalAmount       : ${result.totalAmount} ${result.currency}
            transactionID     : ${result.transactionID}
            transactionRef    : ${result.transactionReference}
            cardSchemeName    : ${result.cardSchemeName}
            maskedCardNumber  : ${result.maskedCardNumber}
            cardEntryType     : ${result.cardEntryType}
            verificationMethod: ${result.verificationMethod}
            errorMessage      : ${result.errorMessage}
            isRecovered       : ${result.isRecoveredTransaction}
        """.trimIndent())
    }

} // end object HpSdk
```

---

## Device selection flow

The HILITE requires the user to select a terminal before the first connection. The recommended pattern is:

1. On app launch, call `HpSdk.getSavedDevice()`. If a device was saved from a previous session, offer to reconnect immediately — no picker required.
2. A "Select Device" button opens a picker. Call `HpSdk.getPairedDevices()` first:
   - **Non-empty list** — show the paired devices in an `AlertDialog`. The user taps a device to connect.
   - **Empty list** — the HILITE must be paired via Android Settings → Bluetooth before the SDK can connect. Show instructions, not an error.
3. Optionally, offer a "Scan for devices" path via `HpSdk.searchDevices()`. This requires `BLUETOOTH_SCAN` at runtime on API 31+ and triggers `onDevicesDiscovered` when the scan completes.
4. On device selection, call `HpSdk.connect(device)`.
5. Monitor progress via `onConnectionChanged` and `onInitialized`.
6. Enable transaction buttons only after `onInitialized` fires.

### Auto-reconnect on app launch

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    HpSdk.listener = this
    HpSdk.init(applicationContext)

    val savedDevice = HpSdk.getSavedDevice()
    if (savedDevice != null) {
        HpSdk.log("[APP] reconnecting to saved device: ${savedDevice.name} (${savedDevice.address})")
        HpSdk.connect(savedDevice)
    } else {
        // No saved device — prompt user to select one
        showDevicePicker()
    }
}
```

### Device picker — paired devices

```kotlin
private fun showDevicePicker() {
    val paired = HpSdk.getPairedDevices()
    if (paired.isEmpty()) {
        AlertDialog.Builder(this)
            .setTitle("No paired terminals")
            .setMessage(
                "No Handpoint HILITE terminals are paired with this device.\n\n" +
                "Power on the HILITE terminal, then pair it via:\n" +
                "Android Settings → Connected devices → Bluetooth"
            )
            .setPositiveButton("Open Bluetooth Settings") { _, _ ->
                startActivity(Intent(Settings.ACTION_BLUETOOTH_SETTINGS))
            }
            .setNegativeButton("Cancel", null)
            .show()
        return
    }

    val displayNames = paired.map { "${it.name} (${it.address})" }.toTypedArray()
    AlertDialog.Builder(this)
        .setTitle("Select terminal")
        .setItems(displayNames) { _, index ->
            val device = paired[index]
            HpSdk.log("[APP] user selected device: ${device.name} (${device.address})")
            HpSdk.connect(device)
        }
        .setNeutralButton("Scan for devices") { _, _ ->
            requestBluetoothScanPermissionAndSearch()
        }
        .setNegativeButton("Cancel", null)
        .show()
}

private fun requestBluetoothScanPermissionAndSearch() {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S &&
        checkSelfPermission(Manifest.permission.BLUETOOTH_SCAN) != PackageManager.PERMISSION_GRANTED) {
        ActivityCompat.requestPermissions(
            this,
            arrayOf(Manifest.permission.BLUETOOTH_SCAN),
            REQUEST_BLUETOOTH_SCAN
        )
        // searchDevices() called from onRequestPermissionsResult when granted
    } else {
        HpSdk.searchDevices()
        showScanProgressDialog()
    }
}
```

### Handling discovery results

`onDevicesDiscovered` fires on the main thread (via `mainHandler.post` in `deviceDiscoveryFinished`):

```kotlin
override fun onDevicesDiscovered(devices: List<Device>) {
    dismissScanProgressDialog()
    if (devices.isEmpty()) {
        Toast.makeText(
            this,
            "No devices found — ensure the HILITE is powered on and in range",
            Toast.LENGTH_LONG
        ).show()
        return
    }
    val displayNames = devices.map { "${it.name} (${it.address})" }.toTypedArray()
    AlertDialog.Builder(this)
        .setTitle("Devices found")
        .setItems(displayNames) { _, index ->
            HpSdk.connect(devices[index])
        }
        .setNegativeButton("Cancel", null)
        .show()
}
```

:::tip Already-paired devices may not appear in active scans
On some Android versions, devices that are already bonded do not appear in the results of an active Bluetooth scan (`searchDevices`). If the HILITE is already paired, use `getPairedDevices()` to find it instead of relying on `searchDevices()`.
:::

---

## Signature handling

`signatureRequired` fires when the EMV kernel or acquirer configuration determines that the cardholder's identity should be verified by a manual signature rather than PIN. This typically occurs for:

- Chip cards where the Cardholder Verification Method (CVM) list specifies signature
- Mag-stripe fallback transactions on some acquirer configurations
- Some legacy card programs

When `signatureRequired` fires, the HILITE terminal displays the transaction amount and waits. The merchant checks the cardholder's signature and indicates acceptance. **You must call `HpSdk.signatureResult(accepted)` in response** — the terminal waits indefinitely without it. Never implement `signatureRequired` as an empty method.

### Production implementation — show signature UI

```kotlin
// In HpSdk — forward the merchant receipt to the UI layer
override fun signatureRequired(request: SignatureRequest, device: Device) {
    log("[SDK] signatureRequired — timeout=${request.timeout}s | merchantReceipt length=${request.merchantReceipt.length}")
    mainHandler.post { listener?.onSignatureRequired(request.merchantReceipt) }
}

// Expose signatureResult as a public method — Activity calls this when the merchant approves/declines
fun signatureResult(accepted: Boolean): Boolean {
    log("[APP] signatureResult(accepted=$accepted)")
    return api?.signatureResult(accepted) ?: false
}
```

In your Activity:

```kotlin
override fun onSignatureRequired(merchantReceipt: String) {
    // Display the merchant receipt and your signature UI.
    // The merchantReceipt is an HTML string — render it in a WebView or extract the key fields.
    // Call HpSdk.signatureResult() after the merchant approves or declines.
    showSignatureDialog(
        receiptHtml = merchantReceipt,
        onAccepted  = { HpSdk.signatureResult(true) },
        onDeclined  = { HpSdk.signatureResult(false) }
    )
}
```

### Demo / development — auto-accept

For demos and early testing where you do not have a signature UI yet:

```kotlin
override fun signatureRequired(request: SignatureRequest, device: Device) {
    log("[SDK] signatureRequired — auto-accepting for demo; production must show signature UI")
    api?.signatureResult(true)
}
```

:::caution
Auto-accepting signatures bypasses CVM verification. Never ship auto-accept to production — always show a signature UI and let the merchant confirm.
:::

---

## Transaction result handling

### The three-step operation

```kotlin
// Step 1 — call the operation
val result = HpSdk.sale(BigInteger.valueOf(amountMinorUnits), Currency.EUR)

// Step 2 — check operationStarted immediately
if (result == null || !result.operationStarted) {
    // SDK rejected the call — nothing started on the terminal
    // Safe to show an error and let the merchant retry
    showError(result?.errorMessage ?: "Terminal not ready")
    return
}

// Step 3 — the reference is already persisted to SharedPreferences by recordPending() inside sale().
// Log it in your own records as well — before waiting for the result.
//
// NOTE: result.transactionReference (from OperationStartResult) is what you store for recovery.
// It is NOT the same as transactionID in TransactionResult — that is the acquirer-assigned ID
// which only exists after the transaction completes. Use transactionReference for getTransactionStatus().
log("[APP] sale accepted | ref=${result.transactionReference} | amount=$amountMinorUnits")
// → endOfTransaction() or transactionResultReady() will arrive asynchronously
```

:::caution `transactionReference` must be persisted to durable storage
`HpSdk.recordPending()` writes the reference to `SharedPreferences` automatically inside every financial operation wrapper. If your app maintains additional records (a local database, an order management system), also write the reference there — before the result arrives. The recovery flow depends on reading this value after a process restart.
:::

### `finStatus` reference

| finStatus | Meaning | Recommended action |
|---|---|---|
| `AUTHORISED` | Approved and settled | Fulfil the order; print receipt from `customerReceipt` |
| `PROCESSED` | Approved (some acquirers use this instead of AUTHORISED) | Same as `AUTHORISED` |
| `DECLINED` | Declined by acquirer | Display `finStatus` + `errorMessage` to the merchant. The merchant decides whether it is a soft decline worth retrying — do not make this decision in code. |
| `CANCELLED` | Cancelled by terminal or cardholder | Display the reason; safe to offer a retry |
| `FAILED` | Terminal-level error | Display `errorMessage`; log the full result; do not retry automatically |
| `PARTIAL_APPROVAL` | Partial approval — acquirer approved less than the requested amount | Show the approved amount; collect the remaining balance by other means |
| `AUTHORISED_DEFERRED` | Offline auth stored for later submission | Log and track; the result will be submitted when the terminal comes back online |
| `REFUNDED` | Refund processed | Confirm refund to merchant |
| `UNDEFINED` | Outcome unknown — connection may have been lost | **Do not show a payment result.** Start recovery — see below. |
| `IN_PROGRESS` | Transaction still processing | Continue recovery polling |

### UNDEFINED — what to show the merchant

```
The result of this transaction is unknown.
Internet connection may have been lost during processing.

Retry processing the payment. During processing you will be
alerted if this transaction was already charged — if so, cancel
the new transaction (duplicate detected).
```

Never display `AUTHORISED` or `DECLINED` when `finStatus` is `UNDEFINED`. The outcome is genuinely unknown until recovery resolves it.

### `endOfTransaction` vs `transactionResultReady`

`endOfTransaction` is always authoritative. It does not need an idempotency guard. When it fires with a terminal `finStatus`, it calls `clearRecovery()`, which removes all pending `recoveryHandler` callbacks before any further `getTransactionStatus` poll can be scheduled.

`transactionResultReady` is the complementary recovery delivery path. It carries an idempotency guard (`if (recoveryRef == null && !recoveryActive) return`) to handle the case where `endOfTransaction` delivered the terminal result while a `getTransactionStatus` request was already in-flight.

### Receipt printing

`customerReceipt` in `TransactionResult` contains inline HTML or a hosted URL (depending on the `getReceiptsAsURLs` setting in `Settings`). Pass it to `HpSdk.printReceipt()` — the SDK sends it to the HILITE terminal's printer:

```kotlin
if (result.finStatus == FinancialStatus.AUTHORISED || result.finStatus == FinancialStatus.PROCESSED) {
    result.customerReceipt?.let { HpSdk.printReceipt(it) }
}
```

Print only after `AUTHORISED` or `PROCESSED`. Never print for `UNDEFINED` or `IN_PROGRESS`.

---

## Recovery

Recovery is **mandatory**. Every integration must implement it. Missing recovery means a transaction that was processed by the acquirer can be silently lost if the app crashes or the Bluetooth connection drops before `endOfTransaction` fires.

### How it works

```
app calls sale()
    → operationStarted = true
    → persist { ref, recoveryStartMs = 0 }   ← recordPending() writes to SharedPreferences

[Bluetooth drop, app crash, or process kill]

app restarts → HpSdk.init() → loadRecoveryState() reads the saved ref
    → connect(savedDevice) → InitialisationComplete fires
    → recoverIfPending() immediately calls getTransactionStatus(ref)
    → result arrives in transactionResultReady()
```

### `getTransactionStatus` is complementary, not a replacement

`getTransactionStatus` runs **alongside** the SDK's own result delivery via `endOfTransaction` — it does not replace it. Both paths are active simultaneously:

- **Normal path**: `endOfTransaction` fires with a terminal `finStatus` (AUTHORISED, DECLINED, etc.) — this is the primary delivery. When it arrives, cancel any in-flight recovery polling.
- **Recovery path**: `endOfTransaction` fires with `UNDEFINED` — start polling `getTransactionStatus`. The result arrives via `transactionResultReady`.

Whichever path delivers a terminal result first is the result. Both paths must be implemented, and the app must handle both without processing the same result twice.

:::tip Field data — how fast does the cloud resolve?
In a documented real-world case (PAX A80, chip card, EUR 285): the transaction started, the card was tapped, and the result was in the Handpoint Cloud 15 seconds later. The ISV's app failed to receive it, retried on a second terminal, and reversed the original. `getTransactionStatus` polling at 5-second intervals would have found the AUTHORISED result on the second or third poll — no reversal needed.

In connectivity-loss cases, the terminal retries pushing the result after it comes back online. Once the result is in the cloud, a single `getTransactionStatus` call resolves it regardless of the original delivery failure.
:::

### The 90-second rule

**Poll `getTransactionStatus` for at least 90 seconds from when `UNDEFINED` is first received in `endOfTransaction`** — not from when the operation was started.

Why the distinction matters: a slow card-present flow (slow PIN entry, chip fallback retries, sluggish acquirer) can take 45–60 seconds before `endOfTransaction` even fires. If the window started at operation start, it could be nearly exhausted by the time you begin recovery polling. Starting it at first-UNDEFINED gives the full 90 seconds for the gateway to resolve its internal state.

:::info Confirm the window with Handpoint
The 90-second value is a conservative buffer. Under normal conditions, results appear in the cloud within 15–30 seconds. The window covers the tail case where the gateway itself is still processing. Confirm the recommended value with your Handpoint integration team before go-live.
:::

| Condition | Action |
|---|---|
| `finStatus == IN_PROGRESS` | Always retry (within backoff window) |
| `finStatus == UNDEFINED` AND within 90s of first UNDEFINED | Retry — gateway may still be processing |
| `finStatus == UNDEFINED` AND past 90s AND **online** | Stop retrying. Outcome unknown — surface to merchant for acquirer verification |
| `finStatus == UNDEFINED` AND **offline** | Keep retrying until the device comes back online |

### Exponential backoff

```
Attempt 1: 5 s delay
Attempt 2: 10 s delay
Attempt 3: 20 s delay
Attempt 4+: 30 s delay (cap)
```

### `isRecoveredTransaction`

When `transactionResultReady` fires with a terminal `finStatus`, check `result.isRecoveredTransaction`:

```kotlin
override fun onTransactionResult(result: TransactionResult) {
    if (result.isRecoveredTransaction) {
        // This result is from a previous session — the merchant may have already moved on.
        // Show the recovered result clearly, with context.
        log("[APP] recovered transaction | finStatus=${result.finStatus} | txnId=${result.transactionID}")
    }
    // Handle identically to a normal endOfTransaction result
    when (result.finStatus) {
        FinancialStatus.AUTHORISED, FinancialStatus.PROCESSED -> fulfilOrder(result)
        FinancialStatus.DECLINED  -> showDeclined(result)
        FinancialStatus.CANCELLED -> showCancelled(result)
        else -> log("[APP] unexpected finStatus: ${result.finStatus}")
    }
}
```

:::caution Storage migration
If you are adding recovery to an existing integration, existing queued transactions will not have `pendingStartMs`. Set `recoveryStartMs = System.currentTimeMillis()` when first loading from storage — this grants up to 90 additional seconds of polling for already-queued items rather than prematurely stopping retries.
:::

---

## Disconnection handling

The HILITE connects over Bluetooth. Drops are more likely than on a wired ANDROID_PAYMENT terminal — the user may walk out of range, the terminal may power off, or the Android OS may terminate the BT connection.

### `automaticReconnection = true` (default)

When `Settings.automaticReconnection = true`, the SDK automatically attempts to re-establish the Bluetooth connection after a drop. You do not need to call `connect()` again manually after a disconnect.

After reconnection succeeds, `connectionStatusChanged(Connected)` fires, followed by `currentTransactionStatus(InitialisationComplete)`. Your `currentTransactionStatus` implementation must call `recoverIfPending()` on every `InitialisationComplete` — including after reconnects — to resume any interrupted recovery polling.

### Resetting the `initialized` gate

When `connectionStatusChanged(Disconnected)` fires, `initialized` must be reset to `false`. This ensures that any operation call that arrives in the gap between a BT drop and the next `InitialisationComplete` is correctly rejected instead of being forwarded to an unresponsive SDK:

```kotlin
override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
    connected = (status == ConnectionStatus.Connected)
    if (status == ConnectionStatus.Disconnected || status == ConnectionStatus.Disconnecting) {
        initialized = false   // re-gate all operations
    }
    // ...
}
```

### What to show during a disconnect

```kotlin
override fun onConnectionChanged(connected: Boolean) {
    runOnUiThread {
        if (!connected) {
            setTransactionButtonsEnabled(false)
            statusText.text = "Terminal disconnected — reconnecting..."
            // onInitialized() fires again when reconnect + InitialisationComplete completes
        }
        // onInitialized() re-enables buttons — do not re-enable here on connected=true
    }
}

override fun onInitialized() {
    runOnUiThread {
        setTransactionButtonsEnabled(true)
        statusText.text = "Terminal ready"
    }
}
```

:::note Do not enable transaction buttons on `Connected` — wait for `onInitialized()`
`connectionStatusChanged(Connected)` means the Bluetooth transport is up, not that the SDK is ready for transactions. `InitialisationComplete` (surfaced as `onInitialized()`) is the safe gate. The gap between `Connected` and `InitialisationComplete` is typically a few seconds as the SDK syncs configuration with the terminal.
:::

---

## Connection status reference

| `ConnectionStatus` | Meaning | ISV action |
|---|---|---|
| `Connecting` | Bluetooth connection attempt in progress | Show a spinner; do not enable transaction buttons |
| `Connected` | Transport layer established | Continue waiting — enable buttons only after `InitialisationComplete` |
| `Disconnected` | Connection lost | Set `initialized = false`; disable buttons; show reconnecting message; SDK auto-reconnects if `automaticReconnection = true` |
| `Disconnecting` | Orderly disconnect in progress (after `disconnect()` call) | Set `initialized = false`; disable buttons; wait for `Disconnected` |
| `NotConfigured` | Device not recognized as a supported HILITE terminal | Log; show error; verify the selected device is a Datecs/HILITE terminal and BT pairing was successful |

:::note `CloudConnected` does not apply to Bluetooth
`CloudConnected` is only used by `ANDROID_PAYMENT` (PAX SmartPOS) in cloud-relay mode. The Bluetooth connection path uses only the five statuses listed above.
:::

---

## Logging

Logging is a support requirement, not a debugging convenience. When an issue reaches the support team, logs are the primary diagnostic tool. Capture everything.

### SDK callbacks — log all of them

Every SDK listener method should produce a log entry. Do not filter at the callback level.

```kotlin
// Log every currentTransactionStatus update — not just InitialisationComplete
override fun currentTransactionStatus(info: StatusInfo, device: Device) {
    log("[SDK] STATUS ${info.status} | ${info.message ?: ""}")
    if (info.status == StatusInfo.Status.InitialisationComplete) {
        initialized = true
        api?.setLogLevel(LogLevel.Info)
        log("[SDK] InitialisationComplete — SDK ready")
        mainHandler.post { listener?.onInitialized() }
        recoverIfPending()
    }
}
```

### App-level events to log

Log your own application's decisions alongside the SDK events. Support needs to understand the full picture, not just what the SDK did.

```kotlin
// When an operation starts
log("[APP] sale started | ref=${result.transactionReference} | amount=$amount | currency=$currency")

// When the reference is persisted
log("[APP] persisted ref=${ref} to storage")

// When a result is saved to your database
log("[APP] order ${orderId} updated | finStatus=${result.finStatus} | txnId=${result.transactionID}")

// When recovery starts
log("[APP] recovery started | ref=${ref}")

// On each recovery attempt
log("[APP] recovery attempt | ref=${ref} | windowRemaining=${windowRemaining}ms | online=$online")

// When recovery resolves
log("[APP] recovery resolved | ref=${ref} | finalStatus=${result.finStatus}")

// When recovery times out
log("[APP] recovery timeout — outcome unknown | ref=${ref} | elapsed=${elapsed}ms")

// Signature events
log("[APP] signatureResult sent: accepted=$accepted")
log("[APP] connecting to ${device.name} (${device.address})")
```

### Logcat tags for support

When sending logs to Handpoint support, include output from all of these tags:

| Tag | What it contains |
|---|---|
| `HpSdk` | Your SDK wrapper log output |
| `HP-SDK-Detail` | SDK internal events |
| `SDK-Detailed-Logger` | Full SDK trace including HTTP requests/responses |

```bash
# Capture relevant logs to a file (run for the duration of the reproduction)
adb logcat -s HpSdk HP-SDK-Detail SDK-Detailed-Logger > sdk_logs.txt
```

Include the Android device model, HILITE terminal serial number, SDK version (`BuildConfig.HP_SDK_VERSION`), and the approximate time of the issue when filing a support request.

---

## Common issues

| Issue | Cause | Fix |
|---|---|---|
| `getPairedDevices()` returns empty list | HILITE not paired in Android Bluetooth settings | Pair via Settings → Connected devices → Bluetooth first |
| App stuck at "Connecting" indefinitely | HILITE powered off, out of range, or BT refused | Power on HILITE; move closer; toggle Bluetooth off/on on the Android device |
| `connectionStatusChanged(NotConfigured)` fires | Wrong device selected (non-Datecs hardware) or Bluetooth init failed | Verify the device is a HILITE terminal; unpair and re-pair if needed |
| `connectionStatusChanged` never fires after `connect()` | Missing `BLUETOOTH_CONNECT` runtime permission on API 31+ | Add the runtime permission request before calling `connect()` |
| `CommandNotAllowed` in `currentTransactionStatus` | Operation called before `InitialisationComplete` | Gate all operations behind `onInitialized()`; never enable buttons on `Connected` alone |
| `operationStarted == false` after a successful prior transaction | A previous recovery is still active | Wait for `onTransactionResult` or `onRecoveryFailed` before starting a new operation |
| `getTransactionStatus` returns `false` on first recovery attempt | SDK not yet initialized when `recoverIfPending` runs | Built-in retry handles this — `scheduleRecovery(immediate = false)` retries after backoff until the SDK accepts the request |
| `signatureRequired` fires but transaction stalls on terminal | `api.signatureResult()` was never called | Always call `HpSdk.signatureResult(true or false)` — the terminal waits indefinitely without it |
| `deviceDiscoveryFinished` returns empty list | HILITE is already paired (bonded devices may not appear in active scans on some Android versions) | Use `getPairedDevices()` instead of `searchDevices()` for devices that are already bonded |
| Duplicate `onTransactionResult` delivered | Both `endOfTransaction` and `transactionResultReady` resolved independently | Idempotency guard in `transactionResultReady` (`if (recoveryRef == null && !recoveryActive) return`) prevents double-processing — verify it is present |

---

## Production readiness checklist

Complete this before go-live. Every item is required.

**Initialization**
- [ ] `HpSdk.listener` set before `init()` is called
- [ ] `HpSdk.init()` called with `applicationContext` (not Activity context)
- [ ] `loadRecoveryState()` called inside `init()` before `HapiFactory.getAsyncInterface()`
- [ ] All transaction buttons disabled until `onInitialized()` fires
- [ ] `recoverIfPending()` called inside `currentTransactionStatus` on every `InitialisationComplete` — including after reconnects

**Bluetooth permissions**
- [ ] All Bluetooth permissions declared in `AndroidManifest.xml`
- [ ] `BLUETOOTH_CONNECT` requested at runtime before `connect()` on API 31+
- [ ] `BLUETOOTH_SCAN` requested at runtime before `searchDevices()` on API 31+ (if used)

**Device management**
- [ ] Selected device persisted to `SharedPreferences` inside `connect()`
- [ ] `getSavedDevice()` called on app launch; auto-reconnect if a saved device exists
- [ ] `initialized = false` reset in `connectionStatusChanged` for both `Disconnected` and `Disconnecting`

**Signature handling**
- [ ] `signatureRequired` implemented — never left as an empty stub
- [ ] `api.signatureResult()` always called — `true` or `false` — and never left unanswered
- [ ] Production signature UI shown to merchant using `merchantReceipt` content
- [ ] Auto-accept removed before go-live

**Transaction lifecycle**
- [ ] `operationStarted` checked before any further action
- [ ] `transactionReference` persisted to durable storage when `operationStarted == true` (before result arrives)
- [ ] `recoveryStartMs` written when `endOfTransaction` fires `UNDEFINED` — not at operation start
- [ ] Pending reference cleared only when a terminal `finStatus` is received

**Recovery**
- [ ] `getTransactionStatus()` called on every `InitialisationComplete` when a pending ref exists
- [ ] `UNDEFINED` treated as "keep polling" for 90 seconds from first-UNDEFINED timestamp
- [ ] `UNDEFINED` while offline continues polling regardless of elapsed time
- [ ] After 90s + online + still `UNDEFINED`: surface to merchant for acquirer verification — do not silently fail or clear the reference without notifying the merchant
- [ ] `windowRemainingMs` logged on every recovery attempt

**Result handling**
- [ ] `UNDEFINED` never shown as a payment result to the customer
- [ ] `DECLINED` shows `finStatus` + `errorMessage` — merchant decides on retry
- [ ] Receipt printed only on `AUTHORISED` / `PROCESSED`
- [ ] Idempotency guard present in `transactionResultReady`

**Logging**
- [ ] Every SDK callback (`endOfTransaction`, `connectionStatusChanged`, `currentTransactionStatus`, `transactionResultReady`, `deviceDiscoveryFinished`, `signatureRequired`) produces a log entry
- [ ] Full `TransactionResult` logged on every result
- [ ] App-level events logged: operation start, storage persist, order update, recovery attempts, recovery resolution, signature events
- [ ] `windowRemainingMs` logged on each recovery attempt
