---
sidebar_position: 3
id: androidmigrationguide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migration from 6.X to 7.X{#1}
The new version 7 of our SDK introduces the next changes: 
- Removed **required** interface and created [3 kind of interfaces in function of the integration](androidmigrationguide.md#2)
- The [operations described below](androidmigrationguide.md#3), return the OperationStartResult object instead of a boolean
- The new duplicate check service is enabled by default. To disable it, please check this [section](androidmigrationguide.md#4) 

## 1. New integration interfaces

For an easier integration with our SDK, we have created 3 interfaces, which have each of the mandatory events to be implemented correctly:
- **MposRequired**: for Bluetooth integrations
- **SmartposRequired**: Android Native Integration
- **PosRequired**: For integrations that include both

The changes required in each of the scenarios are described below.

### Bluetooth Integration

#### Older Implementation
<Tabs>
<TabItem value="Java">

```java
public class HandpointDelegate implements 
	Events.Required, 
	Events.ConnectionStatusChanged, 
	Events.CurrentTransactionStatus,
	Events.SignatureRequired,
	Events.EndOfTransaction,
	Events.DeviceDiscoveryFinished,
	Events.TransactionResultReady {
```

</TabItem>

<TabItem value="Kotlin">

```java
class KotlinClient: Events.Required, Events.ConnectionStatusChanged, Events.CurrentTransactionStatus {
```

</TabItem>
</Tabs>

#### Current Implementation
<Tabs>
<TabItem value="Java">

```java
public class JavaClient implements
	Events.MposRequired,
	Events.CurrentTransactionStatus,
	Events.ConnectionStatusChanged,
	Events.SignatureRequired,
	Events.EndOfTransaction,
	Events.DeviceDiscoveryFinished,
	Events.TransactionResultReady
```

</TabItem>

<TabItem value="Kotlin">

```java
class KotlinClient: Events.MposRequired {
```

</TabItem>
</Tabs>

### Android Native Integration

#### Older Implementation
<Tabs>
<TabItem value="Java">

```java
public class HandpointDelegate implements 
	Events.Required,
	Events.CurrentTransactionStatus,
	Events.ConnectionStatusChanged,
	Events.SignatureRequired,
	Events.EndOfTransaction,
	Events.DeviceDiscoveryFinished,
	Events.TransactionResultReady {
```

</TabItem>

<TabItem value="Kotlin">

```java
class KotlinClient: 
	Events.Required, 
	Events.ConnectionStatusChanged, 
	Events.CurrentTransact {
```

</TabItem>
</Tabs>

#### Current Implementation
<Tabs>
<TabItem value="Java">

```java
public class HandpointDelegate implements 
	Events.SmartposRequired,
	Events.CurrentTransactionStatus,
	Events.ConnectionStatusChanged,
	Events.SignatureRequired,
	Events.EndOfTransaction,
	Events.DeviceDiscoveryFinished,
	Events.TransactionResultReady {
```

</TabItem>

<TabItem value="Kotlin">

```java
class KotlinClient: Events.SmartposRequired {
```

</TabItem>
</Tabs>


### Bluetooth and Android Native Integration

#### Older Implementation
<Tabs>
<TabItem value="Java">

```java
public class HandpointDelegate implements 
	Events.Required, 
	Events.ConnectionStatusChanged, 
	Events.CurrentTransactionStatus,
	Events.SignatureRequired,
	Events.EndOfTransaction,
	Events.DeviceDiscoveryFinished,
	Events.TransactionResultReady {
```

</TabItem>

<TabItem value="Kotlin">

```java
class KotlinClient: Events.Required, Events.ConnectionStatusChanged, Events.CurrentTransactionStatus {
```

</TabItem>
</Tabs>

#### Current Implementation
<Tabs>
<TabItem value="Java">

```java
public class JavaClient implements
	Events.PosRequired,
	Events.CurrentTransactionStatus,
	Events.ConnectionStatusChanged,
	Events.SignatureRequired,
	Events.EndOfTransaction,
	Events.DeviceDiscoveryFinished,
	Events.TransactionResultReady
```

</TabItem>

<TabItem value="Kotlin">

```java
class KotlinClient: Events.PosRequired {
```

</TabItem>
</Tabs>


## 2. OperationStartResult class is returned now on Hapi Operations{#3}

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


## 3. Disable duplicate check service{#4}

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