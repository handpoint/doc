---
# Android SDK — HiLite Bluetooth path skill

Use this path when your Android app (on a phone or tablet) communicates with a HiLite Bluetooth card reader.

Also load your acquirer skill: `acquirers/{acquirer}.md`

## Capabilities not available on HiLite

The HiLite is a Bluetooth card reader with no manual entry screen. The following are **not supported** on HiLite:

- Pre-authorization (no on-device pre-auth flow)
- Remote sale on-terminal (no manual card entry keypad)

## Gradle setup

Same as PAX path. Add to `build.gradle`:

```groovy
repositories {
    maven { url 'https://nexus.handpoint.ninja/repository/maven-releases/' }
}
dependencies {
    implementation 'com.handpoint.api:sdk:7.x.x'
}
```

## Initialization with Bluetooth

```kotlin
class MainActivity : AppCompatActivity(), Events.Required {

    private lateinit var hapi: Hapi
    private var connectedDevice: Device? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        hapi = HapiFactory.getHapiInstance(this, ConnectionMethod.BLUETOOTH)
        hapi.init("YOUR_SHARED_SECRET")
        hapi.startMonitoring()  // begins BT device discovery
    }

    // Called when nearby HiLite devices are found — connect to one
    override fun deviceDiscoveryFinished(devices: List<Device>) {
        if (devices.isNotEmpty()) {
            connectedDevice = devices[0]
            hapi.connect(connectedDevice!!)
        }
    }

    override fun transactionResultReady(result: TransactionResult, device: Device) {
        val status = result.finStatus
        val txId   = result.transactionID
    }

    override fun endOfDayResult(result: String, device: Device) {}
}
```

Always pair with exactly one `Device` before initiating transactions. Store the reference.

## Sale

```kotlin
val options = SaleOptions().apply {
    customerReference = "ORDER-123"
    // EmerchantPay / Paystrax only:
    // tipAmount = BigInteger("150")
}
hapi.sale(BigInteger("1000"), Currency.USD, options)
// Result in transactionResultReady
```

## Refund

```kotlin
// Linked
hapi.refund(BigInteger("1000"), Currency.USD, "transactionID", RefundOptions())

// Unlinked
hapi.refund(BigInteger("1000"), Currency.USD, RefundOptions())
```

## Reversal

```kotlin
hapi.reversal("transactionID")
// Partial reversal (EPI only):
hapi.reversal("transactionID", BigInteger("500"), Currency.USD, ReversalOptions())
```

## Tip adjustment (EPI only)

```kotlin
hapi.tipAdjustment(BigInteger("200"), "transactionID", TipOptions())
```

## Batch close (EPI only)

```kotlin
hapi.endOfDay()
```

## Tokenization

`cardToken` is returned in `TransactionResult.cardToken` when enabled. Tokenization works on HiLite — only pre-auth and remote sale on-terminal do not.

## finStatus values

| Value | Meaning | Action |
|---|---|---|
| `FinancialStatus.AUTHORISED` | Approved | Store `transactionID`, fulfil order |
| `FinancialStatus.DECLINED` | Declined | Do not retry same card |
| `FinancialStatus.CANCELLED` | Cardholder cancelled | Allow retry |
| `FinancialStatus.FAILED` | Terminal error | Check `statusMessage` |
| `FinancialStatus.UNDEFINED` | No result received | Do not retry — recover via status call |

## UNDEFINED recovery

`UNDEFINED` means no result was received. **Do not retry** — the transaction may have processed.

**HiLite does not support `transactionReference`** — `hapi.getTransactionStatus()` and the `/status/{transactionReference}` endpoint are not available on this path. The only recovery mechanism is the Transaction Feed API.

Recovery steps:
1. Query the feed for the terminal serial number and the time window around the original request
2. Match the candidate transaction by amount, currency, and masked card number (if available to your UI)
3. Found with `finStatus: AUTHORISED` → transaction processed; do not retry; store the `transactionID`
4. Not found → safe to retry

Load `optional/transaction-feed.md` for the full feed query and field reference.

## Bluetooth connection lifecycle

- Call `hapi.startMonitoring()` once on startup
- `deviceDiscoveryFinished` may be called multiple times as devices come in range
- If the device disconnects, call `hapi.startMonitoring()` again
- HiLite auto-reconnects if it goes out of range temporarily

## Logging

Logging is required for integration validation. Use `android.util.Log` throughout.

### Set SDK log level

```kotlin
// Call before the first transaction — levels: None, Info, Warning, Full, Debug
hapi.setLogLevel(LogLevel.Debug)
```

### Log discovery, connection, and every operation

```kotlin
override fun deviceDiscoveryFinished(devices: List<Device>) {
    Log.d("HandpointSDK", "deviceDiscoveryFinished: ${devices.map { "${it.name}/${it.address}" }}")
    // Connect to the first available device
    if (devices.isNotEmpty()) {
        connectedDevice = devices[0]
        Log.d("HandpointSDK", "connecting to: ${connectedDevice!!.name}")
        hapi.connect(connectedDevice!!)
    }
}
```

Log before each operation:

```kotlin
Log.d("HandpointSDK", "sale: amount=$amount currency=$currency ref=$customerReference device=${connectedDevice?.name}")
hapi.sale(amount, currency, options, connectedDevice)
```

### Log all SDK callbacks

```kotlin
override fun transactionResultReady(result: TransactionResult, device: Device) {
    Log.d("HandpointSDK",
        "transactionResultReady | " +
        "finStatus=${result.finStatus} " +
        "txId=${result.transactionID} " +
        "amount=${result.amount} " +
        "currency=${result.currency} " +
        "card=${result.maskedCardNumber} " +
        "scheme=${result.cardSchemeName} " +
        "ref=${result.customerReference} " +
        "error=${result.errorMessage} " +
        "device=${device.name}"
    )
}
```

### Minimum fields to capture per result

| Field | Why |
|---|---|
| `finStatus` | Outcome — must be `AUTHORISED` to fulfil order |
| `transactionID` | Required for reversal and refund |
| `amount` | Actual authorised amount in minor units |
| `currency` | Currency |
| `maskedCardNumber` | Cardholder match for UNDEFINED recovery |
| `cardSchemeName` | Visa / Mastercard / Amex / etc. |
| `customerReference` | Links to your order |
| `errorMessage` | Non-empty on DECLINED or FAILED |
| `device.name` / `device.address` | Which HiLite processed the transaction |
| ~~`transactionReference`~~ | **Not available on HiLite** — `hapi.getTransactionStatus()` and `/status/{transactionReference}` are not supported. Use Transaction Feed API for UNDEFINED recovery instead |

## See also

- Acquirer constraints: load `acquirers/{acquirer}.md`
- Android SDK setup reference: https://developer.handpoint.com/reference/android-sdk-setup
- Devices: https://developer.handpoint.com/reference/devices
