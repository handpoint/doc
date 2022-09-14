---
sidebar_position: 3
id: androidmigrationguide
---

# Migration from 6.X to 7.X{#1}
The new version 7 of our SDK introduces the next changes: 
- The [operations described below](androidmigrationguide.md#2), return the OperationStartResult object instead of a boolean
- The new duplicate check service is enabled by default. To disable it, please check this [section](androidmigrationguide.md#3) 

## 1. OperationStartResult class is returned now on Hapi Operations{#2}

With the aim of improving the information on our customers' transactions, now, Hapi object returns this class instead of a boolean. The methods that are affected by this change, and that should be modified for a correct implementation are the following:

- [Sale](androidtransactions.md#2)
- [Sale and Tokenize](androidtransactions.md#3)
- [SaleReversal](androidtransactions.md#4)
- [Refund](androidtransactions.md#5)
- [RefundReversal](androidtransactions.md#6)
- [MotoSale](androidtransactions.md#7)
- [MotoRefund](androidtransactions.md#8)
- [MotoReversal](androidtransactions.md#9)
- [TokenizeCard](androidtransactions.md#12)
- [CardPan](androidtransactions.md#13)


## 2. Disable duplicate check service{#3}

To disable it, set the checkDuplicate field to false for the corresponding operations, as in the following example: 

```java
public void pay(BigInteger amount, Currency currency) {
	SaleOptions saleOptions = new SaleOptions();
	saleOptions.setCheckDuplicates(false);
	this.api.sale(amount, currency, saleOptions);
}
```
This step apply for the followings operations: 
- [Sale](androidtransactions.md#2) and [Sale and Tokenize](androidtransactions.md#3)
- [Refund](androidtransactions.md#5)