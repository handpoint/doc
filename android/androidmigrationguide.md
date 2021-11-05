---
sidebar_position: 3
id: androidmigrationguide
---


# Migration from 5.X{#1}


Version 6.0.0 introduces a well defined, typed, way of passing extra values, options, parameters or flags to the financial transactions.

We have unified all the extra and optional parameters in an Options object. Different operations have different options.

**1. For a [Sale](androidtransactions.md#sale-reversal) or [Sale and Tokenize](androidtransactions.md#3) operation, please see [SaleOptions](androidobjects.md#4)**

If you use a customer reference:

```java
options.setCustomerReference("Your customer reference");
```

If you need Multi MID / Custom merchant Authentication:

```java
	MerchantAuth auth = new MerchantAuth();
	Credential credential = new Credential();
	//Optionally
	credential.setAcquirer(YOUR_ACQUIRER);
	//Optionally
	credential.setMerchantId(mid);
	//Optionally
	credential.setTerminalId(tid);
	//Add as many credentials as Acquirers your merchant have agreements with
	auth.add(credential);
	options.setMerchantAuth(auth);
```

If you need to enable pin bypass:

```java
options.setPinBypass(true);
```
If you want to specify the budget period **Only available for SureSwipe**:

```java
options.setBudgetNumber(YOUR_BUDGET_NUMBER);
```

If you want to specify tip options **Only available for PAX and Telpo terminals**:

```java
TipConfiguration config = new TipConfiguration();
	//Optionally
	config.setHeaderName(HEADER);
	//Optionally
	config.setFooter(FOOTER);
	//Optionally
	config.setEnterAmountEnabled(true);
	//Optionally
	config.setSkipEnabled(true);
	//Optionally
	config.setTipPercentages(percentages);

	options.setTipConfiguration(config);
```

Alternatively, you can set the tip amount directly:

```java
	options.setTipConfiguration(new TipConfiguration(AMOUNT));
```

Finally:

```java
api.sale(amount, currency, options);
```

**2. Similar to SaleOptions, but with less possible parameters, for a [Refund](androidtransactions.md#5) operation, please see [RefundOptions](androidobjects.md#6)**

If you use a customer reference:

```java
options.setCustomerReference("Your customer reference");
```

If you need Multi MID / Custom merchant Authentication:

```java
	MerchantAuth auth = new MerchantAuth();
	Credential credential = new Credential();
	//Optionally
	credential.setAcquirer(YOUR_ACQUIRER);
	//Optionally
	credential.setMerchantId(mid);
	//Optionally
	credential.setTerminalId(tid);
	//Add as many credentials as Acquirers your merchant have agreements with
	auth.add(credential);
	options.setMerchantAuth(auth);
```

If you need to enable pin bypass:

```java
options.setPinBypass(true);
```

Finally:

```java
	api.refund(amount, currency, options);
```

**3. For the rest of operations, please see [Options](androidobjects.md#7)**

If you use a customer reference:

```java
options.setCustomerReference("Your customer reference");
```
