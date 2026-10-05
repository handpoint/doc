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

## Fee mitigation (EPI only — under development)

Surcharge, admin fee and dual pricing travel in one `Fee` object. Set it on `SaleOptions` or
`MoToOptions`, never on a pre-authorization — the fee belongs to the capture.

```kotlin
val options = SaleOptions().apply {
    fee = Fee(
        amount            = BigInteger("360"),  // the whole fee, minor units
        mitigationProgram = FeeMitigationProgram.SURCHARGE,
        taxOnFee          = BigInteger("60")    // the tax part inside amount
    )
}
hapi.sale(BigInteger("10000"), Currency.USD, options)   // pass the BASE amount

override fun endOfTransaction(result: TransactionResult, device: Device) {
    val fee = result.fee ?: return          // null when no fee was sent
    if (fee.applied) { /* print a fee line */ } else { /* fee.reason says why */ }
}
```

- **Pass the base amount to the operation.** The SDK adds `fee.amount` to it. Never pre-add it.
- **`taxOnFee` sits inside `amount`.** It is never added on top.
- Request amounts are minor units (`BigInteger`). `result.fee` amounts are major units
  (`BigDecimal`), like `result.taxAmount`.
- Wire values of `mitigationProgram`: `surcharge`, `adminFee`, `cashDiscount`, `dualPricing`.
- `FeeResult.reason`: `APPLIED`, `NOT_ELIGIBLE_DEBIT`, `NOT_ELIGIBLE_PREPAID`,
  `PROGRAM_NOT_ENABLED`, `PROGRAM_NOT_SUPPORTED`, `UNKNOWN`. Only the first two occur today.
- `Options.surchargeAmount` and `result.surcharge` are deprecated and still work. Never set both
  `fee` and `surchargeAmount` with different amounts — the gateway returns error `4268`.
- The receipt rule differs per program. Dual pricing prints **no** fee line.

## finStatus values

| Value | Meaning | Action |
|---|---|---|
| `FinancialStatus.AUTHORISED` | Approved. Edge case: if card was removed mid-chip-processing, the SDK may send a forced-reversal and a subsequent `endOfTransaction` with `DECLINED` may arrive — always wait for `endOfTransaction` rather than acting on intermediate status. | Store `transactionID`, fulfil order |
| `FinancialStatus.DECLINED` | Declined | Do not retry same card |
| `FinancialStatus.CANCELLED` | Cardholder cancelled | Allow retry |
| `FinancialStatus.FAILED` | Terminal error | Check `statusMessage` |
| `FinancialStatus.UNDEFINED` | No result — do not retry | Query feed for recovery |
| `FinancialStatus.PARTIAL_APPROVAL` | Partial amount approved (US only) | Fulfil at `totalAmount`; prompt for remaining balance or send reversal |
| `FinancialStatus.PROCESSED` | Non-financial operation completed | Treat as success |
| `FinancialStatus.REFUNDED` | Transaction refunded | Record refund |
| `FinancialStatus.CAPTURED` | Pre-auth captured | Record capture |

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

## Partial approval — ISV requirements (US only)

`PARTIAL_APPROVAL` is **enabled by default**. Every US integration will receive it in production. You must handle it.

**Option 1 — Accept partial approvals** (required for specific MCCs — consult acquirer):
- Fulfil at `totalAmount`. Prompt cardholder for remaining `dueAmount` via a second tender.

**Option 2 — Do not support partial approvals**:
1. Call `hapi.saleReversal(result.authorisedAmount, currency, result.transactionID)` using `totalAmount` (the authorized amount — **never** `requestedAmount`).
2. Display "Insufficient funds — transaction cancelled" or equivalent.
3. Log **both** transactions: the `PARTIAL_APPROVAL` sale and the reversal. Both receipts must be accessible.
4. Prompt for an alternative payment method.

Self-validation test: trigger amount `BigInteger("3757")`. Required for Handpoint certification.

## Common agent mistakes

| Mistake | Correct behaviour |
|---|---|
| Sending amounts in major units (`BigDecimal("37.57")`) | Always minor units: `BigInteger("3757")` — `BigInteger("1000")` = $10.00 / £10.00 |
| Acting on `endOfTransaction` with `UNDEFINED` before running recovery | `UNDEFINED` means unknown outcome — never show a payment result; run `getTransactionStatus` recovery first |
| Calling `hapi.sale()` before `InitialisationComplete` | Gate ALL financial operations behind the `InitialisationComplete` status event |
| Not persisting `transactionReference` before calling `hapi.sale()` | Persist the reference to DB **before** the call — if the app crashes after the card is charged, the reference is your only recovery key |
| Reversing `requestedAmount` on a partial approval | Reverse `totalAmount` (what was authorized), never `requestedAmount` |
| Using `FinancialStatus.UNDEFINED` comparison on older SDK builds | Some SDK builds don't have `UNDEFINED` as a named constant — use `.toString() == "UNDEFINED"` instead |
| Adding the fee to the amount passed to `hapi.sale()` | Pass the base amount — the SDK adds `fee.amount` itself, so pre-adding it double-charges the fee |
| Setting `fee` on a pre-authorization | The SDK drops it. Set it on the capture, which decides what the customer pays |
| Treating `fee.applied == false` as a failure | The transaction succeeded; the gateway removed the fee. Print no fee line and settle the total that the result carries |

## See also

- Acquirer constraints: load `acquirers/{acquirer}.md`
- Android SDK setup reference: https://developer.handpoint.com/reference/android-sdk-setup
- Fee mitigation: https://developer.handpoint.com/reference/fee-mitigation
- Authentication: https://developer.handpoint.com/reference/authentication
- Release notes: https://developer.handpoint.com/release-notes/release-notes
