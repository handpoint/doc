---
# Android SDK — PAX on-device path skill

Use this path when your Android application runs **directly on the PAX SmartPOS terminal**. The SDK communicates with the Handpoint payment app on the same device.

Also load your acquirer skill: `acquirers/{acquirer}.md`

Full object/enum reference: https://developer.handpoint.com/reference/android-objects-reference
Full events interface reference: https://developer.handpoint.com/reference/android-events-reference

## Gradle setup

```kotlin
// app/build.gradle.kts
dependencies {
    implementation("com.handpoint.api:sdk:VERSION") {
        exclude(group = "com.handpoint.api", module = "paymentsdk")
    }
    implementation("com.handpoint.api:paymentsdk:VERSION")
}
```

Both lines must use the IDENTICAL version string. RC builds (e.g. `7.1014.0-RC.72-SNAPSHOT`) for development; stable builds (e.g. `7.1012.3`) for production PAXStore. Add Nexus repo to `settings.gradle.kts` — credentials from Handpoint support.

Latest stable version: https://developer.handpoint.com/release-notes/release-notes

## Initialization

```kotlin
class MainActivity : AppCompatActivity(), Events.SmartposRequired {
    // Use Events.SmartposRequired for PAX on-device.
    // Use Events.MposRequired for HiLite BT path.
    // Use Events.PosRequired to support both in one delegate.

    private lateinit var hapi: Hapi

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // HandpointCredentials is a Java class — use positional args, not named args
        val credentials = HandpointCredentials(
            "0102030405060708091011121314151617181920212223242526272829303132",  // sharedSecret
            "YOUR_CLOUD_API_KEY"  // required for MOTO and getTransactionStatus(); omit for card-present only
        )
        val settings = com.handpoint.api.Settings().apply {
            automaticReconnection = true
        }
        hapi = HapiFactory.getAsyncInterface(this, this, credentials, settings)
        // REQUIRED in SDK 7.1014.0+: explicitly register delegate BEFORE connect()
        hapi.registerEventsDelegate(this)
        val device = Device("PAX A920", "localhost", "", ConnectionMethod.ANDROID_PAYMENT)
        hapi.connect(device)
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

    // Optional interfaces — add to this class and re-register:
    // Events.Log — onMessageLogged(level, message) + deviceLogsReady(logs, device)
    // Events.ReceiptEvent — receiptIsReady(guid, merchantReceipt, customerReceipt) ~1.5s after EOT
    // Events.ReceiptUploadingEvent — receiptsUploaded(guid, merchantUrl, customerUrl) ~4-8s after EOT
    // Events.MessageHandling — showMessage(msg, dismissible, duration) / hideMessage(msg)
    // Events.SignatureRequired — signatureRequired(request, device); call hapi.signatureResult(true)
    //                            PAX ignores signatureResult(); safe to implement for HiLite compat
    // Events.CardBrandDisplay — supportedCardBrands(list) + readCard(usedCard)
}
```

## Sale

```kotlin
// All amounts in MINOR UNITS (BigInteger): 1000 = $10.00
val result = hapi.sale(BigInteger("1000"), Currency.USD) ?: return
if (!result.operationStarted) return  // SDK rejected — check result.errorMessage
val ref = result.transactionReference ?: return  // persist to durable storage immediately
// Result arrives in endOfTransaction — store result.transactionID (for reversal/refund)
// result.transactionReference (for getTransactionStatus() recovery)

// With options
val options = SaleOptions().apply {
    customerReference = "ORDER-123"
    tipConfiguration = TipConfiguration().apply {
        tipPercentages = listOf(10, 15, 20)
        isEnterAmountEnabled = true
        isSkipEnabled = true
        footer = "Thank you!"
    }
    pinBypass = false        // true = show PIN screen but allow skip (chip-enforced cards ignore)
    checkDuplicates = true   // false = disable duplicate payment check
}
hapi.sale(BigInteger("1000"), Currency.USD, options)
```

## Sale and tokenize

```kotlin
// Returns cardToken in result.cardToken alongside the normal sale result
hapi.sale(BigInteger("1000"), Currency.USD, SaleAndTokenizeOptions())
```

## Tokenize card only (no charge)

```kotlin
// No financial transaction — card is read and tokenized only
// Result: result.finStatus == PROCESSED, result.cardToken populated
hapi.tokenizeCard()
```

## Refund

```kotlin
// Linked refund — pass original transactionID
hapi.refund(BigInteger("1000"), Currency.USD, "transactionID-from-sale", RefundOptions())

// Unlinked refund (requires acquirer enablement — card interaction required)
hapi.refund(BigInteger("1000"), Currency.USD, RefundOptions())

// Automatic full refund — no card interaction, no amount needed
hapi.automaticRefund("transactionID-from-sale")
// Result: result.type == MOTO_REFUND, result.finStatus == AUTHORISED
```

## Reversal

```kotlin
// Sale reversal (saleReversal) — cancels a sale before settlement
// Use result.transactionID from the original sale (NOT transactionReference)
hapi.saleReversal(BigInteger("1000"), Currency.USD, "transactionID-from-sale")

// Refund reversal — cancels a previously issued refund
hapi.refundReversal(BigInteger("1000"), Currency.USD, "transactionID-from-refund")
```

## Pre-authorization (EPI, EmerchantPay, Paystrax)

```kotlin
// Create pre-auth — holds funds on the card
hapi.preAuthorization(BigInteger("1000"), Currency.USD)

// Capture — completes the pre-auth (can capture different amount than held)
hapi.preAuthorizationCapture(BigInteger("1000"), Currency.USD, "transactionID-from-preauth")

// Increase — raises the held amount before capture
hapi.preAuthorizationIncrease(BigInteger("200"), Currency.USD, "transactionID-from-preauth")

// Reversal — cancels an uncaptured pre-auth (no card interaction)
hapi.preAuthorizationReversal("transactionID-from-preauth")
// Partial release (acquirer-dependent):
hapi.preAuthorizationReversal(BigInteger("500"), Currency.USD, "transactionID-from-preauth")
```

## Tip adjustment (EPI only — post-sale)

```kotlin
// Returns Boolean directly (not OperationStartResult), does NOT fire endOfTransaction
val accepted: Boolean = hapi.tipAdjustment(BigInteger("200"), Currency.USD, "transactionID-from-sale")
// true = tip recorded; false = rejected (unsupported by acquirer or wrong reference)
```

Do not call for EmerchantPay / Paystrax — include tip in SaleOptions.tipConfiguration at sale time.

## Batch close (EPI only)

```kotlin
hapi.endOfDay()
// Result arrives asynchronously — implement the appropriate callback
```

Do not call for EmerchantPay or Paystrax.

## Remote sale / MOTO (EPI, EmerchantPay, Paystrax — on-terminal)

```kotlin
// Basic MOTO sale — cardholder keys card details on the terminal keypad
val options = MoToOptions()
hapi.motoSale(BigInteger("1000"), Currency.USD, options)

// With channel and tokenization
val options = MoToOptions().apply {
    channel = MoToChannel.TO    // TO = telephone order, MO = mail order
    tokenize = true             // also tokenize the card
}

// MOTO refund (linked)
hapi.motoRefund(BigInteger("1000"), Currency.USD, "transactionID-from-moto-sale", MoToOptions())

// MOTO reversal
hapi.motoReversal("transactionID-from-moto-sale")

// MOTO pre-authorization (note: lowercase 'a' — motoPreauthorization, not motoPreAuthorization)
hapi.motoPreauthorization(BigInteger("1000"), Currency.USD, MoToOptions())
```

Requires MOTO enablement on the merchant account. Requires `cloudApiKey` in `HandpointCredentials`.
Load `optional/back-office.md` for back-office (card token) remote sale.

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

## Device management

```kotlin
// Connection
hapi.connect(device)          // connect or reconnect
hapi.disconnect()             // cleanly disconnect

// Transaction control
hapi.stopCurrentTransaction() // cancel in-progress operation; fires UserCancelled then CANCELLED
hapi.getTransactionStatus("transactionReference")  // UNDEFINED recovery; result in transactionResultReady()

// Printing
hapi.printReceipt(receiptHtmlOrUrl)  // prints HTML or a hosted receipt URL; returns Boolean

// Terminal management
hapi.update()                // check for and apply terminal software/config updates
hapi.setLogLevel(LogLevel.Info)  // call after InitialisationComplete
hapi.getDeviceLogs()         // fetch terminal logs; fires deviceLogsReady on Events.Log implementor
hapi.getPairedDevices(ConnectionMethod.BLUETOOTH)  // list paired BT terminals
hapi.searchDevices(ConnectionMethod.BLUETOOTH)     // discover BT terminals; fires deviceDiscoveryFinished
hapi.getTransactionsReport(ReportConfiguration(...))  // fetch transactions report
hapi.setLocale(SupportedLocales.en_US)             // set SDK UI locale
```

## Key types

| Type | Package | Description |
|---|---|---|
| `OperationStartResult` | `com.handpoint.api.shared` | Returned by every financial op. Check `operationStarted`; persist `transactionReference`. |
| `TransactionResult` | `com.handpoint.api.shared` | Full result in `endOfTransaction`. See transaction-result-object reference. |
| `StatusInfo` | `com.handpoint.api.shared` | Mid-transaction updates + InitialisationComplete. |
| `DeviceStatus` | `com.handpoint.api.shared` | Terminal state snapshot (battery, app version, serial). |
| `SaleOptions` | `com.handpoint.api.shared.options` | Options for sale/saleAndTokenize. |
| `MoToOptions` | `com.handpoint.api.shared.options` | Options for MOTO operations. |
| `TipConfiguration` | `com.handpoint.api.shared.options` | On-device tip prompt config. |
| `MerchantAuth` | `com.handpoint.api.shared.options` | Multi-MID credential override. |
| `Metadata` | `com.handpoint.api.shared` | Custom key-value data echoed in result. |

Full reference: https://developer.handpoint.com/reference/android-objects-reference

## See also

- Acquirer constraints: load `acquirers/{acquirer}.md`
- Android SDK setup reference: https://developer.handpoint.com/reference/android-sdk-setup
- Android objects reference: https://developer.handpoint.com/reference/android-objects-reference
- Android events reference: https://developer.handpoint.com/reference/android-events-reference
- Integration walkthrough (recovery, logging): https://developer.handpoint.com/reference/android-integration-walkthrough
- Transaction result object: https://developer.handpoint.com/reference/transaction-result-object
- Fee mitigation: https://developer.handpoint.com/reference/fee-mitigation
- Authentication: https://developer.handpoint.com/reference/authentication
- Release notes: https://developer.handpoint.com/release-notes/release-notes
