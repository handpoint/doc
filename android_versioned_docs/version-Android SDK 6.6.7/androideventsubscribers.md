---
sidebar_position: 7
id: androideventsubscribers
---


# Events subscribers

## Register events delegate

`registerEventsDelegate`

Registers a delegate for the SDK events.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `listener` <span class="badge badge--primary">Required</span> <br />*Object*    | Any Object implementing one or more of the available delegate interfaces.|

**Code example**

```java
public class ObjectHelper implements Events.Required, Events.Status, Events.Log, Events.PendingResults, Events.TransactionStarted {
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

`unregisterEventsDelegate`

Unregisters an object from SDK events.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `listener` <span class="badge badge--primary">Required</span> <br />*Object*     | Any Object implementing one or more of the available delegate interfaces.|

**Code example**

```java
public class ObjectHelper implements Events.Required, Events.Status, Events.Log, Events.PendingResults, Events.TransactionStarted {
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


