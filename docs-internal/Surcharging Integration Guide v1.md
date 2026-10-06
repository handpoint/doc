# Surcharging Integration Guide

**Product:** Handpoint Android SDK (hapi-android)  
**Audience:** EPI Pay  
**Feature:** Surcharging with terminal-driven configuration  
**Related:** [ConfigurationManager Partner Guide](https://file+.vscode-resource.vscode-cdn.net/Users/ecunado/projects/prompts/docs/sdk-configuration-manager-partner-guide.md), [Surcharging Spec](https://file+.vscode-resource.vscode-cdn.net/Users/ecunado/projects/prompts/docs/surcharging-spec.md)

---

## Overview

This guide explains how to implement surcharging in your Android application using the Handpoint SDK. The surcharge behavior is driven entirely by the terminal's configuration, accessed through the ConfigurationManager API — your app reads whether surcharging is enabled, what rate to apply, and which transaction components (tax and/or tip) are included in the surcharge base.

**You own the transaction amounts.** The SDK does not know your tax or tip figures — you must calculate them in your application and pass the resulting surchargeAmount to the SDK. The gateway then validates and records the surcharge; TransactionResult.surcharge on the response confirms what was actually applied.

---

## Configuration parameters

The following parameters must be provisioned on the terminal via the Handpoint Terminal Management System before your integration can use them.

**Note (Handpoint internal):** These parameters must be added to the EPI Pay terminal template in the TMS.

| Key | Type | Access | Description |
| ----- | ----- | ----- | ----- |
| surcharge | boolean | read-only | Master switch. true means the terminal is configured to accept a surcharge. |
| surchargePercent | float | read-only | Surcharge rate as a percentage (e.g. 2.5 means 2.5 %). |
| surchargeApplyToTax | boolean | read-only | Include the tax amount in the surcharge base. |
| surchargeApplyToTip | boolean | read-only | Include the tip amount in the surcharge base. |
| bypassSurcharge | boolean | read-only | When true, the app may offer the merchant the option to waive the surcharge on a per-transaction basis, even when surcharging is enabled. |
|  |  |  |  |

**Tip customization.** If you need the cardholder to choose from a set of tip options, the predefined values configured in the terminal are available via the tipValues property through ConfigurationManager. Use this array to build your tip-selection UI without hard-coding percentages in the app.

---

## Prerequisites

* Handpoint Android SDK version that includes the ConfigurationManager implementation or later.  
* ConfigurationManager provisioned on your terminal with the five parameters above.  
* The Hapi instance is already initialized and connected to the terminal.

---

## Compliance requirement — Surcharge disclosure

**Note (EPI Pay):** Card network rules and US state regulations require that cardholders are informed that a surcharge may apply **before** the transaction is processed. Your application must display a clear disclosure message at the point of sale — for example, a notice on-screen or signage visible to the customer stating that credit card transactions are subject to a surcharge.

---

## Step 1 — Initialize the SurchargeCalculator

SurchargeCalculator is a class you write once and keep as a field in your checkout component. It reads the surcharge configuration from ConfigurationManager on construction and exposes a single calculate() method. Call refresh() whenever the terminal configuration changes (see Handling live updates).

// Kotlin  
class SurchargeCalculator(private val configurationManager: ConfigurationManager) {

    private var enabled        \= false  
    private var percent        \= 0f  
    private var applyToTax     \= false  
    private var applyToTip     \= false  
    var bypassAllowed          \= false  
        private set

    init { refresh() }

    fun refresh() {  
        enabled \= try {  
            configurationManager\[configurationManager.getBooleanKey("surcharge")\]  
        } catch (e: ConfigurationNotFoundException) {  
            false  
        }  
        if (\!enabled) return  
        percent       \= configurationManager\[configurationManager.getFloatKey("surchargePercent")\]  
        applyToTax    \= configurationManager\[configurationManager.getBooleanKey("surchargeApplyToTax")\]  
        applyToTip    \= configurationManager\[configurationManager.getBooleanKey("surchargeApplyToTip")\]  
        bypassAllowed \= configurationManager\[configurationManager.getBooleanKey("bypassSurcharge")\]  
    }

    /\*\*  
     \* Returns the surcharge amount in minor units to pass to the SDK,  
     \* or null if surcharging is disabled or the merchant chose to bypass it.  
     \*  
     \* @param saleAmount      base sale amount in minor units (before tax/tip)  
     \* @param taxAmount       tax amount in minor units — your system provides this  
     \* @param tipAmount       tip amount in minor units — your system or user selection provides this  
     \* @param merchantBypassed true when the merchant explicitly waived the surcharge for this  
     \*                         transaction. Only honoured if bypassAllowed is true.  
     \*/  
    fun calculate(saleAmount: Long, taxAmount: Long, tipAmount: Long, merchantBypassed: Boolean \= false): BigInteger? {  
        if (\!enabled || (bypassAllowed && merchantBypassed)) return null

        var base \= saleAmount  
        if (applyToTax) base \+= taxAmount  
        if (applyToTip) base \+= tipAmount

        return BigDecimal(base)  
            .multiply(BigDecimal(percent.toDouble()))  
            .divide(BigDecimal(100), 0, RoundingMode.HALF\_UP)  
            .toBigInteger()  
    }  
}

// Java  
public class SurchargeCalculator {

    private final ConfigurationManager configurationManager;  
    private boolean enabled        \= false;  
    private float   percent        \= 0f;  
    private boolean applyToTax     \= false;  
    private boolean applyToTip     \= false;  
    private boolean bypassAllowed  \= false;

    public SurchargeCalculator(ConfigurationManager configurationManager) {  
        this.configurationManager \= configurationManager;  
        refresh();  
    }

    public boolean isBypassAllowed() { return bypassAllowed; }

    public void refresh() {  
        try {  
            enabled \= configurationManager.get(configurationManager.getBooleanKey("surcharge"));  
        } catch (ConfigurationNotFoundException e) {  
            enabled \= false;  
            return;  
        }  
        if (\!enabled) return;  
        percent       \= configurationManager.get(configurationManager.getFloatKey("surchargePercent"));  
        applyToTax    \= configurationManager.get(configurationManager.getBooleanKey("surchargeApplyToTax"));  
        applyToTip    \= configurationManager.get(configurationManager.getBooleanKey("surchargeApplyToTip"));  
        bypassAllowed \= configurationManager.get(configurationManager.getBooleanKey("bypassSurcharge"));  
    }

    /\*\*  
     \* Returns the surcharge amount in minor units to pass to the SDK,  
     \* or null if surcharging is disabled or the merchant chose to bypass it.  
     \*  
     \* @param merchantBypassed true when the merchant waived the surcharge for this transaction.  
     \*                         Only honoured if isBypassAllowed() is true.  
     \*/  
    public BigInteger calculate(long saleAmount, long taxAmount, long tipAmount, boolean merchantBypassed) {  
        if (\!enabled || (bypassAllowed && merchantBypassed)) return null;

        long base \= saleAmount;  
        if (applyToTax) base \+= taxAmount;  
        if (applyToTip) base \+= tipAmount;

        return new BigDecimal(base)  
            .multiply(new BigDecimal(percent))  
            .divide(new BigDecimal(100), 0, RoundingMode.HALF\_UP)  
            .toBigInteger();  
    }  
}

Instantiate it once, after Hapi is ready:

// Kotlin  
private val surchargeCalculator \= SurchargeCalculator(hapi.configurationManager)

// Java  
private final SurchargeCalculator surchargeCalculator \=  
    new SurchargeCalculator(hapi.getConfigurationManager());

---

## Step 2 — Calculate the surcharge amount

The calculation logic is:

surchargeBase  \=  saleAmount  
surchargeBase \+=  taxAmount   (if surchargeApplyToTax)  
surchargeBase \+=  tipAmount   (if surchargeApplyToTip)

surchargeAmount \= round(surchargeBase × surchargePercent / 100\)

**You are responsible for providing taxAmount and tipAmount** — the SDK has no access to these values. All amounts are in **minor units** (e.g. cents for USD/EUR).

Call surchargeCalculator.calculate() before building the options object, passing bypassSurcharge when the merchant chooses to waive the surcharge for this transaction:

// Kotlin  
val surchargeAmount \= surchargeCalculator.calculate(saleAmount, taxAmount, tipAmount, bypassSurcharge)

// Java  
BigInteger surchargeAmount \= surchargeCalculator.calculate(saleAmount, taxAmount, tipAmount, bypassSurcharge);

calculate() returns null when surcharging is disabled — passing null to the SDK options field is safe and causes the \<surchargeAmount\> element to be omitted from the request entirely.

**Units note.** Both the `surchargeAmount` sent to the SDK (BigInteger) and the `TransactionResult.surcharge.amount` returned by the gateway are in **minor units** (e.g. USD 12.50 → 1250), consistent with all other SDK amount fields.

---

## Step 3 — Pass the surcharge amount to the SDK

Set the value returned by calculate() on the options object for the relevant operation.

### Card-present sale

// Kotlin  
val options \= SaleOptions().apply {  
    surchargeAmount  \= surchargeCalculator.calculate(saleAmount, taxAmount, tipAmount, merchantBypassed)  
    tipConfiguration \= TipConfiguration(BigInteger.valueOf(tipAmount))  
    this.taxAmount   \= taxAmount  
    // set other options (budget number, etc.) as usual  
}  
hapi.sale(amount, currency, options)

// Java  
SaleOptions options \= new SaleOptions();  
options.setSurchargeAmount(surchargeCalculator.calculate(saleAmount, taxAmount, tipAmount, merchantBypassed));  
options.setTipConfiguration(new TipConfiguration(BigInteger.valueOf(tipAmount)));  
options.setTaxAmount(taxAmount);  
hapi.sale(amount, currency, options);

### MOTO sale

Tip is not supported for MOTO transactions — only taxAmount is forwarded.

// Kotlin  
val options \= MoToOptions().apply {  
    surchargeAmount \= surchargeCalculator.calculate(saleAmount, taxAmount, 0L, merchantBypassed)  
    this.taxAmount  \= taxAmount  
}  
hapi.moToSale(amount, currency, options)

// Java  
MoToOptions options \= new MoToOptions();  
options.setSurchargeAmount(surchargeCalculator.calculate(saleAmount, taxAmount, 0L, merchantBypassed));  
options.setTaxAmount(taxAmount);  
hapi.moToSale(amount, currency, options);

### Pre-authorization capture

Tip is not supported for pre-authorization capture — only taxAmount is forwarded.

// Kotlin  
val options \= PreAuthorizationCaptureOptions().apply {  
    surchargeAmount \= surchargeCalculator.calculate(captureAmount, taxAmount, 0L, merchantBypassed)  
    this.taxAmount  \= taxAmount  
}  
hapi.preAuthorizationCapture(captureAmount, currency, originalTransactionId, options)

// Java  
PreAuthorizationCaptureOptions options \= new PreAuthorizationCaptureOptions();  
options.setSurchargeAmount(surchargeCalculator.calculate(captureAmount, taxAmount, 0L, merchantBypassed));  
options.setTaxAmount(taxAmount);  
hapi.preAuthorizationCapture(captureAmount, currency, originalTransactionId, options);

---

## Step 4 — Read the gateway's response

After a successful transaction, inspect TransactionResult.surcharge to confirm what the gateway actually applied.

// Kotlin — inside your HapiEventHandler.transactionResultReady callback  
override fun transactionResultReady(result: TransactionResult, device: Device) {  
    val surcharge \= result.surcharge  
    if (surcharge \!= null && surcharge.applied) {  
        val appliedAmount \= surcharge.amount   // BigInteger, major units  
        val reason        \= surcharge.reason   // SurchargeReason.CREDIT / DEBIT / UNKNOWN  
        // display confirmation to the user, store for accounting  
    }  
}

// Java  
@Override  
public void transactionResultReady(TransactionResult result, Device device) {  
    Surcharge surcharge \= result.getSurcharge();  
    if (surcharge \!= null && surcharge.isApplied()) {  
        BigInteger appliedAmount \= surcharge.getAmount();  
        SurchargeReason reason   \= surcharge.getReason();  
        // display confirmation, store for accounting  
    }  
}

| TransactionResult.surcharge field | Meaning |
| ----- | ----- |
| amount | Surcharge in major units as recorded by the gateway. null if the gateway sent an empty amount. |
| applied | true if the gateway confirms the surcharge was applied to this transaction. |
| reason | CREDIT, DEBIT, or UNKNOWN — the card type that triggered the surcharge. |

---

## Handling live updates

Terminal configuration can be updated remotely by the TMS. When this happens the SDK calls HapiConfigurationListener.newConfiguration(). Call surchargeCalculator.refresh() in this callback so your next transaction uses the current values.

// Kotlin  
class CheckoutActivity : AppCompatActivity(), HapiConfigurationListener {

    private lateinit var surchargeCalculator: SurchargeCalculator

    override fun onCreate(savedInstanceState: Bundle?) {  
        super.onCreate(savedInstanceState)  
        surchargeCalculator \= SurchargeCalculator(hapi.configurationManager)  
        hapi.addConfigurationListener(this)  
    }

    override fun newConfiguration(newValues: List\<ConfigurationKeyValuePair\<Any\>\>) {  
        val surchargeKeys \= setOf("surcharge", "surchargePercent", "surchargeApplyToTax", "surchargeApplyToTip", "bypassSurcharge")  
        if (newValues.any { it.key.name in surchargeKeys }) {  
            surchargeCalculator.refresh()  
        }  
    }

    override fun onDestroy() {  
        super.onDestroy()  
        hapi.removeConfigurationListener(this)  
    }  
}

// Java  
public class CheckoutActivity extends AppCompatActivity implements HapiConfigurationListener {

    private SurchargeCalculator surchargeCalculator;  
    private static final Set\<String\> SURCHARGE\_KEYS \= new HashSet\<\>(Arrays.asList(  
        "surcharge", "surchargePercent", "surchargeApplyToTax", "surchargeApplyToTip", "bypassSurcharge"  
    ));

    @Override  
    protected void onCreate(Bundle savedInstanceState) {  
        super.onCreate(savedInstanceState);  
        surchargeCalculator \= new SurchargeCalculator(hapi.getConfigurationManager());  
        hapi.addConfigurationListener(this);  
    }

    @Override  
    public void newConfiguration(List\<ConfigurationKeyValuePair\<Object\>\> newValues) {  
        boolean affected \= newValues.stream().anyMatch(p \-\> SURCHARGE\_KEYS.contains(p.getKey().getName()));  
        if (affected) surchargeCalculator.refresh();  
    }

    @Override  
    protected void onDestroy() {  
        super.onDestroy();  
        hapi.removeConfigurationListener(this);  
    }  
}

---

## Complete end-to-end example

// Kotlin  
class CheckoutActivity : AppCompatActivity(), HapiConfigurationListener {

    private lateinit var hapi: Hapi  
    private lateinit var surchargeCalculator: SurchargeCalculator

    override fun onCreate(savedInstanceState: Bundle?) {  
        super.onCreate(savedInstanceState)  
        hapi \= // ... your Hapi singleton  
        surchargeCalculator \= SurchargeCalculator(hapi.configurationManager)  
        hapi.addConfigurationListener(this)  
    }

    /\*\* Called when the user taps "Charge". All amounts are in minor units. \*/  
    fun onChargeClicked(saleAmount: Long, taxAmount: Long, tipAmount: Long, merchantBypassed: Boolean \= false) {  
        val currency    \= Currency.getInstance("EUR")  
        val totalAmount \= BigInteger.valueOf(saleAmount \+ taxAmount \+ tipAmount)

        val options \= SaleOptions().apply {  
            surchargeAmount  \= surchargeCalculator.calculate(saleAmount, taxAmount, tipAmount, merchantBypassed)  
            tipConfiguration \= TipConfiguration(BigInteger.valueOf(tipAmount))  
            this.taxAmount   \= taxAmount  
        }

        hapi.sale(totalAmount, currency, options)  
    }

    // HapiConfigurationListener  
    override fun newConfiguration(newValues: List\<ConfigurationKeyValuePair\<Any\>\>) {  
        val surchargeKeys \= setOf("surcharge", "surchargePercent", "surchargeApplyToTax", "surchargeApplyToTip", "bypassSurcharge")  
        if (newValues.any { it.key.name in surchargeKeys }) {  
            surchargeCalculator.refresh()  
        }  
    }

    // HapiEventHandler (wire this up in your existing listener)  
    fun onTransactionResult(result: TransactionResult) {  
        val s \= result.surcharge  
        if (s \!= null) {  
            Log.d("Surcharge", "applied=\${s.applied}, amount=\${s.amount}, reason=\${s.reason}")  
        }  
    }

    override fun onDestroy() {  
        super.onDestroy()  
        hapi.removeConfigurationListener(this)  
    }  
}

---

## Edge cases

| Scenario | Recommended behaviour |
| ----- | ----- |
| surcharge key is absent from terminal config | Treat as disabled. ConfigurationNotFoundException is caught in refresh() and defaults to disabled — calculate() returns null. |
| surchargePercent is 0.0 | Do not pass a surcharge amount. A zero-percent surcharge is equivalent to no surcharge and may cause gateway validation errors. |
| Tax or tip is 0 | Passing zero still produces zero contribution to the surcharge base — no special handling needed. |
| Both surchargeApplyToTax and surchargeApplyToTip are false | The surcharge is calculated on the base sale amount only. This is valid and expected. |
| TransactionResult.surcharge is null | Should not happen in normal operation. Treat as no surcharge applied — do not record a surcharge amount for this transaction. |
| TransactionResult.surcharge.applied is false | The gateway returned a surcharge block but did not apply it — for example, the card was identified as debit. Do not record a surcharge for this transaction. |
| bypassSurcharge config is true and merchant bypasses | calculate() returns null. Use bypassAllowed / isBypassAllowed() to decide whether to show the bypass option in your UI. |

---

## Partial linked refund

When a cardholder returns part of a purchase, the surcharge must be refunded proportionally to the base amount being returned. EPI Pay calculates the refund surcharge; the SDK validates it before forwarding to the gateway.

**Note (Handpoint internal):** RefundOptions will need a surchargeAmount field — analogous to SaleOptions — before this flow can be implemented.

### What to persist after a successful sale

Store the following fields from TransactionResult in your local transaction record:

| Field to store | Source | Notes |
| ----- | ----- | ----- |
| originalTransactionId | TransactionResult.transactionId | Required to link the refund |
| baseAmount | Your local variable at sale time | The sale amount before tax/tip/surcharge |
| taxAmount | Your local variable at sale time |  |
| tipAmount | Your local variable at sale time |  |
| appliedSurchargeAmount | TransactionResult.surcharge.amount | Gateway-confirmed value, in **major units** — convert to minor units on storage |
| surchargeApplyToTax | SurchargeCalculator.applyToTax at sale time | The config that was active when the sale ran |
| surchargeApplyToTip | SurchargeCalculator.applyToTip at sale time |  |

### Proportional surcharge calculation

For a partial refund of refundBaseAmount (the portion of the original base sale being returned):

refundRatio     \= refundBaseAmount / originalBaseAmount  
refundSurcharge \= round(appliedSurchargeAmount × refundRatio)  
refundTax       \= round(originalTaxAmount × refundRatio)   // only if surchargeApplyToTax was true  
refundTotal     \= refundBaseAmount \+ refundTax \+ refundSurcharge

Tip is **not refunded proportionally** in a partial refund — it is either excluded entirely or refunded in full on the final partial refund, depending on your business rules.

**Open item — rounding mode (Handpoint internal):** The examples below use RoundingMode.HALF\_UP (i.e. \$0.5¢ rounds up). This has not been formally decided. Alternatives to consider:

* **HALF\_UP** — standard banker/consumer expectation. Rounds \$0.5¢ toward the cardholder (refunds slightly more). Simplest to explain.  
* **HALF\_DOWN** — rounds \$0.5¢ toward the merchant (refunds slightly less). Less common in consumer contexts.  
* **HALF\_EVEN** (banker's rounding) — rounds to the nearest even digit on ties, minimizing cumulative rounding error across many transactions. Used in accounting systems.  
* **FLOOR** — always rounds down, ensuring the refund never exceeds the proportional share. Conservative from a merchant liability perspective.

The choice affects only the half-cent boundary case but must be consistent between EPI Pay's calculation and any server-side validation in viscus. **Confirm with the Handpoint gateway team before finalizing.**

// Kotlin  
data class StoredTransaction(  
    val transactionId: String,  
    val baseAmount: Long,  
    val taxAmount: Long,  
    val tipAmount: Long,  
    val appliedSurchargeAmount: Long,   // minor units  
    val surchargeApplyToTax: Boolean,  
    val surchargeApplyToTip: Boolean  
)

object PartialRefundCalculator {

    /\*\*  
     \* Returns the surcharge amount to refund in minor units,  
     \* or null if no surcharge was applied on the original transaction.  
     \*  
     \* NOTE: RoundingMode.HALF\_UP is a placeholder — rounding mode is pending  
     \* confirmation with the Handpoint gateway team (see open item above).  
     \*/  
    fun calculate(original: StoredTransaction, refundBaseAmount: Long): BigInteger? {  
        if (original.appliedSurchargeAmount \== 0L) return null

        return BigDecimal(original.appliedSurchargeAmount)  
            .multiply(BigDecimal(refundBaseAmount))  
            .divide(BigDecimal(original.baseAmount), 0, RoundingMode.HALF\_UP) // TODO: confirm rounding mode  
            .toBigInteger()  
    }

    fun refundTax(original: StoredTransaction, refundBaseAmount: Long): Long {  
        if (\!original.surchargeApplyToTax) return 0L  
        return BigDecimal(original.taxAmount)  
            .multiply(BigDecimal(refundBaseAmount))  
            .divide(BigDecimal(original.baseAmount), 0, RoundingMode.HALF\_UP) // TODO: confirm rounding mode  
            .toLong()  
    }  
}

// Java  
public class PartialRefundCalculator {

    /\*\*  
     \* Returns the surcharge amount to refund in minor units,  
     \* or null if no surcharge was applied on the original transaction.  
     \*  
     \* NOTE: RoundingMode.HALF\_UP is a placeholder — rounding mode is pending  
     \* confirmation with the Handpoint gateway team (see open item above).  
     \*/  
    public static BigInteger calculate(StoredTransaction original, long refundBaseAmount) {  
        if (original.getAppliedSurchargeAmount() \== 0L) return null;

        return new BigDecimal(original.getAppliedSurchargeAmount())  
            .multiply(new BigDecimal(refundBaseAmount))  
            .divide(new BigDecimal(original.getBaseAmount()), 0, RoundingMode.HALF\_UP) // TODO: confirm rounding mode  
            .toBigInteger();  
    }

    public static long refundTax(StoredTransaction original, long refundBaseAmount) {  
        if (\!original.isSurchargeApplyToTax()) return 0L;  
        return new BigDecimal(original.getTaxAmount())  
            .multiply(new BigDecimal(refundBaseAmount))  
            .divide(new BigDecimal(original.getBaseAmount()), 0, RoundingMode.HALF\_UP) // TODO: confirm rounding mode  
            .longValue();  
    }  
}

### Issuing the partial refund

// Kotlin  
fun onPartialRefundClicked(original: StoredTransaction, refundBaseAmount: Long) {  
    val refundSurcharge \= PartialRefundCalculator.calculate(original, refundBaseAmount)  
    val refundTax       \= PartialRefundCalculator.refundTax(original, refundBaseAmount)  
    val refundTotal     \= BigInteger.valueOf(refundBaseAmount \+ refundTax) \+ (refundSurcharge ?: BigInteger.ZERO)

    val options \= RefundOptions().apply {  
        surchargeAmount \= refundSurcharge  
    }

    hapi.refund(refundTotal, currency, original.transactionId, options)  
}

// Java  
public void onPartialRefundClicked(StoredTransaction original, long refundBaseAmount) {  
    BigInteger refundSurcharge \= PartialRefundCalculator.calculate(original, refundBaseAmount);  
    long refundTax             \= PartialRefundCalculator.refundTax(original, refundBaseAmount);  
    BigInteger refundTotal     \= BigInteger.valueOf(refundBaseAmount \+ refundTax)  
                                     .add(refundSurcharge \!= null ? refundSurcharge : BigInteger.ZERO);

    RefundOptions options \= new RefundOptions();  
    options.setSurchargeAmount(refundSurcharge);

    hapi.refund(refundTotal, currency, original.getTransactionId(), options);  
}

### Full refund

For a full refund, pass refundBaseAmount \= original.baseAmount. The proportional calculation yields the full appliedSurchargeAmount, and refundTotal equals the original totalAmount.

| Scenario | Behavior |
| ----- | ----- |
| appliedSurchargeAmount is 0 | PartialRefundCalculator.calculate() returns null — no surcharge refunded. |
| refundBaseAmount equals originalBaseAmount | Full surcharge is returned — equivalent to a full refund. |
| surchargeApplyToTax was false | refundTax() returns 0 — tax is not included in the refund surcharge base. |
| Tip refund | Handle separately according to your business rules; do not include in surcharge base for the refund. |

## Appendix A — Surcharging and taxAmount in MOTO sale and pre-authorization capture

This appendix shows how to pass the surcharge and tax amounts in two operations beyond the card-present sale of Step 3: MOTO sale and pre-authorization capture. The SurchargeCalculator from Step 1 is reused unchanged.

Note — both operations forward surchargeAmount and taxAmount to the gateway in SDK 7.1014.0. Amounts are in minor units (BigInteger), consistent with the other SDK amount fields.

Note — tip is not supported for MOTO transactions, so pass 0 for the tip argument of calculate() in the MOTO sale example below. Pre-authorization capture does support tip; pass the tip portion when applicable.

Note — calculate() returns null when surcharging is disabled or the merchant bypasses it; passing null is safe and omits the field from the request.

### A.1  MOTO sale

Use MoToOptions and call hapi.moToSale().

// Kotlin — MOTO sale (tip not supported, pass 0L)  
val tax \= BigInteger.valueOf(taxMinorUnits)  
val options \= MoToOptions().apply {  
    surchargeAmount \= surchargeCalculator.calculate(saleAmount, taxMinorUnits, 0L, merchantBypassed)  
    taxAmount \= tax  
}  
hapi.moToSale(amount, currency, options)

// Java — MOTO sale  
MoToOptions options \= new MoToOptions();  
options.setSurchargeAmount(  
        surchargeCalculator.calculate(saleAmount, taxMinorUnits, 0L, merchantBypassed));  
options.setTaxAmount(BigInteger.valueOf(taxMinorUnits));  
hapi.moToSale(amount, currency, options);

### A.2  Pre-authorization capture

The capture takes the base Options type — there is no PreAuthorizationCaptureOptions class in the SDK (the snippet in Step 3 should read Options). Call hapi.preAuthorizationCapture().

// Kotlin — pre-authorization capture (options is the base Options type)  
val options \= Options().apply {  
    surchargeAmount \= surchargeCalculator.calculate(captureAmount, taxMinorUnits, 0L, merchantBypassed)  
    taxAmount \= BigInteger.valueOf(taxMinorUnits)  
}  
hapi.preAuthorizationCapture(captureAmount, currency, originalTransactionId, options)

// Java — pre-authorization capture  
Options options \= new Options();  
options.setSurchargeAmount(  
        surchargeCalculator.calculate(captureAmount, taxMinorUnits, 0L, merchantBypassed));  
options.setTaxAmount(BigInteger.valueOf(taxMinorUnits));  
hapi.preAuthorizationCapture(captureAmount, currency, originalTransactionId, options);

