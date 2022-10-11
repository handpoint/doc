---
sidebar_position: 7
id: androideventsubscribers
---


# Events Subscribers

## Register events delegate

`registerEventsDelegate` <span class="badge badge--info">Method</span>

Registers a delegate for the SDK events.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `listener` <span class="badge badge--primary">Required</span> <br />*Object*    | Any object implementing one or more of the available delegate interfaces.|

**Code example**

```java
public class ObjectHelper implements Events.SmartposRequired, Events.Status, Events.Log, Events.TransactionStarted,  Events.CurrentTransactionStatus, Events.ConnectionStatusChanged, Events.EndOfTransaction, Events.TransactionResultReady {
	...
	private void setEventsHandler() {
		// Register this class as listener for events
		this.api.registerEventsDelegate(this);
		...
	}

}
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the new delegate was added successfully.|



## Unregister events delegate

`unregisterEventsDelegate` <span class="badge badge--info">Method</span>

Unregisters an object from SDK events.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `listener` <span class="badge badge--primary">Required</span> <br />*Object*     | Any object implementing one or more of the available delegate interfaces.|

**Code example**

```java
public class ObjectHelper implements Events.SmartposRequired, Events.Status, Events.Log, Events.TransactionStarted,  Events.CurrentTransactionStatus, Events.ConnectionStatusChanged, Events.EndOfTransaction, Events.TransactionResultReady {
	...
	private void unsubscribeEventsDelegate() {
	// Stop receiving events
	this.api.unregisterEventsDelegate(this);
	...
}
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the new delegate was removed successfully.|


