---
sidebar_position: 3
id: androidmigrationguide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migration from 6.X to 7.X{#1}
The new version 7.X.X of our Android SDK introduces the following changes: 
1. We removed the `Events.Required` interface and divided it into [3 different interfaces](androidmigrationguide.md#1-new-integration-interfaces) for a simpler and smoother integration.
2. All [financial operations](androidmigrationguide.md#3) will now be returning an [OperationStartResult](androidobjects.md#operation-start-result) object instead of a boolean to indicate that the operation was successfully sent to the payment terminal: 
	- The MAIN reason why we are now returning an object is because we want to give you access to the `transactionReference` field inside the `OperationStartResult` object. The `transactionReference` field is a unique identifier for the transaction that you will receive immediately after sending the transaction request to the terminal. If for any reason you do not receive the `TransactionResult` object at the end of the transaction you will now be able to use the `transactionReference` to directly query our Gateway and know instantly if the transaction for which you do not know the outcome was approved or declined.
3. We are introducing a new feature called **duplicate payment check**. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge, this menu is pushed by our SDK and will automatically be displayed on top of your own UI when required. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. The duplicate payment check feature will be **enabled by default** in the Android sdk 7.0.0 and can be disabled by passing a false value as part of the sale options [`saleOptions.setCheckDuplicates(false);`](androidmigrationguide.md#4).
4. The `deviceCapabilities` event has been renamed to `supportedCardBrands`

## 1. New Interfaces

For an easier integration with our SDK we removed the `Events.Required` interface and divided it into 3 different interfaces:

- `Events.SmartposRequired` which are the mandatory events to subscribe to for a PAX integration.
- `Events.MposRequired` which are the mandatory events to subscribe to for an HiLite integration.
- `Events.PosRequired` which are the mandatory events to subscribe to if you are doing both a PAX AND HiLite integration.

Here is the list of events being part of each interface: 

#### Interface SmartposRequired
- `Events.PendingResults`
- `Events.ConnectionStatusChanged`
- `Events.CurrentTransactionStatus`
- `Events.EndOfTransaction`

#### Interface MposRequired
- `Events.PendingResults`
- `Events.ConnectionStatusChanged`
- `Events.CurrentTransactionStatus`
- `Events.EndOfTransaction`
- `Events.DeviceDiscoveryFinished`
- `Events.SignatureRequired`

#### Interface PosRequired
- `Events.PendingResults`
- `Events.ConnectionStatusChanged`
- `Events.CurrentTransactionStatus`
- `Events.EndOfTransaction`
- `Events.DeviceDiscoveryFinished`
- `Events.SignatureRequired`




The changes required for each of the above scenarios is described below.


### Android Native Integration (PAX)

#### Older Implementation (Android SDK 6.X)
<Tabs>
<TabItem value="Java">

```java
public class HandpointDelegate implements 
	Events.Required,
	Events.CurrentTransactionStatus,
	Events.ConnectionStatusChanged,
	Events.EndOfTransaction,
	Events.TransactionResultReady {
```

</TabItem>

<TabItem value="Kotlin">

```java
class KotlinClient: 
	Events.Required,
    Events.CurrentTransactionStatus,
    Events.ConnectionStatusChanged {
```

</TabItem>
</Tabs>

#### Current Implementation (Android SDK 7.X)
<Tabs>
<TabItem value="Java">

```java
public class HandpointDelegate implements
    Events.SmartposRequired,
    Events.CurrentTransactionStatus,
    Events.ConnectionStatusChanged,
    Events.EndOfTransaction,
    Events.TransactionResultReady {
```

</TabItem>

<TabItem value="Kotlin">

```java
class KotlinClient: Events.SmartposRequired {
```

</TabItem>
</Tabs>

### Bluetooth Integration (HiLite)

#### Older Implementation (Android SDK 6.X)
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
class KotlinClient: 
    Events.Required, 
	Events.ConnectionStatusChanged, 
	Events.CurrentTransactionStatus {
```

</TabItem>
</Tabs>

#### Current Implementation (Android SDK 7.X)
<Tabs>
<TabItem value="Java">

```java
public class JavaClient implements
	Events.MposRequired,
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
class KotlinClient: Events.MposRequired {
```

</TabItem>
</Tabs>

### Bluetooth and Android Native Integration (PAX & HiLite)

#### Older Implementation (Android SDK 6.X)
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
class KotlinClient: 
    Events.Required, 
	Events.ConnectionStatusChanged, 
	Events.CurrentTransactionStatus {
```

</TabItem>
</Tabs>

#### Current Implementation (Android SDK 7.X)
<Tabs>
<TabItem value="Java">

```java
public class JavaClient implements
	Events.PosRequired,
	Events.ConnectionStatusChanged, 
	Events.CurrentTransactionStatus,
	Events.SignatureRequired,
	Events.EndOfTransaction,
	Events.DeviceDiscoveryFinished,
	Events.TransactionResultReady  {
```

</TabItem>

<TabItem value="Kotlin">

```java
class KotlinClient: Events.PosRequired {
```

</TabItem>
</Tabs>


## 2. All financial operations are now returning an [OperationStartResult](androidobjects.md#operation-start-result) object instead of a boolean{#3}

The methods affected by this change are the following:

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


## 3. Disabling the duplicate payment check service{#4}

**This functionality is only available for SmartPos devices (PAX).**

By default, the duplicate payment check service is enabled. If you want to manually disable this service you will need to set the `checkDuplicate` field to `false` using the `SaleOptions` parameter. Here is an example: 

```java
public void pay(BigInteger amount, Currency currency) {
	SaleOptions saleOptions = new SaleOptions();
	saleOptions.setCheckDuplicates(false);
	this.api.sale(amount, currency, saleOptions);
}
```
You can disable the duplicate check functionality for the following financial operations: 
- [Sale](androidtransactions.md#2)
- [Sale and Tokenize](androidtransactions.md#3)
- [Refund](androidtransactions.md#5)

## 4. The `deviceCapabilities` event has been renamed to `supportedCardBrands`

 Check out the [card brand display](androideventlisteners.md#cardBrandDisplay) object.