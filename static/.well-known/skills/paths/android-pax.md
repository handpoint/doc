---
# Android SDK — PAX on-device path skill

Use this path when your Android application runs **directly on the PAX SmartPOS terminal**. The SDK communicates with the Handpoint payment app on the same device.

Also load your acquirer skill: `acquirers/{acquirer}.md`

## Gradle setup

```groovy
// build.gradle (app module)
repositories {
    maven { url 'https://nexus.handpoint.ninja/repository/maven-releases/' }
}
dependencies {
    implementation 'com.handpoint.api:sdk:7.x.x'  // check release notes for latest
}
```

Latest version: https://developer.handpoint.com/release-notes/release-notes

## Initialization

```kotlin
class MainActivity : AppCompatActivity(), Events.SmartposRequired {
    // Use Events.SmartposRequired for PAX on-device. Events.Required is for HiLite BT path.

    private lateinit var hapi: Hapi

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val credentials = HandpointCredentials(
            sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132",
            cloudApiKey  = "YOUR_CLOUD_API_KEY"  // omit if not using Cloud API / getTransactionStatus
        )
        hapi = HapiFactory.getHapiInstance(this, this, credentials)
        // Do NOT call hapi.init() separately — credentials are passed to getHapiInstance.
    }

    // Fires when any card-present operation completes (sale, refund, reversal, pre-auth, etc.)
    override fun endOfTransaction(result: TransactionResult, device: Device) {
        val status = result.finStatus           // FinancialStatus enum
        val txId   = result.transactionID       // store — needed for reversal/refund
        val token  = result.cardToken           // present if tokenization enabled
    }

    // Fires when hapi.getTransactionStatus() returns (UNDEFINED recovery)
    override fun transactionResultReady(result: TransactionResult, device: Device) { }

    // SDK status callback — wait for InitialisationComplete before starting transactions
    override fun currentTransactionStatus(statusInfo: StatusInfo, device: Device) {
        if (statusInfo.status == StatusInfo.Status.InitialisationComplete) {
            // Safe to call hapi.sale() and other financial operations now
        }
    }

    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) { }

    // Fires after hapi.endOfDay() — EPI only
    override fun endOfDayResult(result: String, device: Device) {}
}
```

## Sale

```kotlin
val options = SaleOptions().apply {
    customerReference = "ORDER-123"
    // EmerchantPay / Paystrax only:
    // tipAmount = BigInteger("150")
}
hapi.sale(BigInteger("1000"), Currency.USD, options)
// Result arrives in endOfTransaction — store result.transactionID and result.transactionReference
```

## Refund

```kotlin
// Linked refund
hapi.refund(BigInteger("1000"), Currency.USD, "transactionID-from-sale", RefundOptions())

// Unlinked refund (requires acquirer enablement)
hapi.refund(BigInteger("1000"), Currency.USD, RefundOptions())
```

## Reversal

```kotlin
// Full reversal
hapi.reversal("transactionID-from-sale")

// Partial reversal (EPI only)
hapi.reversal("transactionID", BigInteger("500"), Currency.USD, ReversalOptions())
```

## Pre-authorization (EPI, EmerchantPay, Paystrax)

```kotlin
// Create pre-auth
hapi.preAuthorization(BigInteger("1000"), Currency.USD, PreAuthOptions())

// Capture
hapi.preAuthorizationCapture(BigInteger("1000"), Currency.USD, "transactionID", PreAuthOptions())

// Increase
hapi.preAuthorizationIncrease(BigInteger("200"), Currency.USD, "transactionID", PreAuthOptions())

// Reversal
hapi.preAuthorizationReversal("transactionID", PreAuthOptions())
```

## Tip adjustment (EPI only — post-sale)

```kotlin
hapi.tipAdjustment(BigInteger("200"), "transactionID-from-sale", TipOptions())
```

Do not call for EmerchantPay / Paystrax — include tipAmount in SaleOptions at sale time.

## Batch close (EPI only)

```kotlin
hapi.endOfDay()
// Result arrives in endOfDayResult callback
```

Do not call for EmerchantPay or Paystrax.

## Remote sale / MOTO (EPI, EmerchantPay, Paystrax — on-terminal)

```kotlin
val options = MoToOptions()
hapi.motoSale(BigInteger("1000"), Currency.USD, options)

// Remote refund (linked)
hapi.motoRefund(BigInteger("1000"), Currency.USD, options)
```

Requires remote sale enablement. Load `optional/back-office.md` for back-office (card token) remote sale.

## Money remittance (EmerchantPay)

```kotlin
hapi.moneyRemittance(BigInteger("1000"), Currency.EUR, MoneyRemittanceOptions())
```

## finStatus values

| Value | Meaning | Action |
|---|---|---|
| `FinancialStatus.AUTHORISED` | Approved | Store `transactionID`, fulfil order |
| `FinancialStatus.DECLINED` | Declined | Do not retry same card |
| `FinancialStatus.CANCELLED` | Cardholder cancelled | Allow retry |
| `FinancialStatus.FAILED` | Terminal error | Check `statusMessage` |
| `FinancialStatus.UNDEFINED` | No result — do not retry | Query feed for recovery |

## PAX on-device vs HiLite BT — key differences

| | PAX on-device (this skill) | HiLite BT (`paths/android-hilite.md`) |
|---|---|---|
| `HapiFactory.getHapiInstance(ctx)` | No extra args | Add `ConnectionMethod.BLUETOOTH` |
| `hapi.startMonitoring()` | Not needed | Required |
| `deviceDiscoveryFinished` | Unused | Handle to get `Device` reference |
| `hapi.sale(amount, currency, opts)` | ✅ | Pass `device` as 4th argument |
| Pre-auth | ✅ | ❌ Not supported on HiLite |
| Remote sale on-terminal | ✅ | ❌ No manual entry keypad |

## Logging

Logging is required for integration validation. Use `android.util.Log` throughout.

### Set SDK log level

```kotlin
// Call before the first transaction — levels: None, Info, Warning, Full, Debug
hapi.setLogLevel(LogLevel.Debug)
```

### Log every operation before sending

```kotlin
Log.d("HandpointSDK", "sale: amount=$amount currency=$currency ref=$customerReference")
hapi.sale(amount, currency, options)
```

Apply the same pattern for refund, reversal, pre-auth, etc.

### Log all SDK callbacks

```kotlin
// Main result callback — fires for all financial operations (sale, refund, reversal, pre-auth, etc.)
override fun endOfTransaction(result: TransactionResult, device: Device) {
    Log.d("HandpointSDK",
        "endOfTransaction | " +
        "finStatus=${result.finStatus} " +
        "txId=${result.transactionID} " +
        "amount=${result.amount} " +
        "currency=${result.currency} " +
        "card=${result.maskedCardNumber} " +
        "scheme=${result.cardSchemeName} " +
        "ref=${result.customerReference} " +
        "transactionRef=${result.transactionReference} " +
        "error=${result.errorMessage} " +
        "device=${device.name}"
    )
}

// Recovery callback — fires when hapi.getTransactionStatus() completes
override fun transactionResultReady(result: TransactionResult, device: Device) {
    Log.d("HandpointSDK", "transactionResultReady (recovery) | finStatus=${result.finStatus} txId=${result.transactionID}")
}

override fun endOfDayResult(result: String, device: Device) {
    Log.d("HandpointSDK", "endOfDayResult: $result device=${device.name}")
}
```

### Minimum fields to capture per result

| Field | Why |
|---|---|
| `finStatus` | Outcome — must be `AUTHORISED` to fulfil order |
| `transactionID` | Required for reversal and refund |
| `amount` | Actual authorised amount in minor units |
| `currency` | Currency |
| `maskedCardNumber` | Cardholder match for recovery |
| `cardSchemeName` | Visa / Mastercard / Amex / etc. |
| `customerReference` | Links to your order |
| `transactionReference` | Returned by the gateway in the result — store for `hapi.getTransactionStatus()` UNDEFINED recovery. Applies to all original operations: sale, pre-auth, unlinked refund |
| `errorMessage` | Non-empty on DECLINED or FAILED |
| `device.name` / `device.serialNumber` | Terminal that processed the transaction |

## See also

- Acquirer constraints: load `acquirers/{acquirer}.md`
- Android SDK setup reference: https://developer.handpoint.com/reference/android-sdk-setup
- Authentication: https://developer.handpoint.com/reference/authentication
- Release notes: https://developer.handpoint.com/release-notes/release-notes
