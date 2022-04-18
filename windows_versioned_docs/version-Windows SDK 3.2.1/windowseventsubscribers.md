---
sidebar_position: 7
id: windowseventssubscribers
---


# Events Subscribers

## Register events delegate

`RegisterEventsDelegate` <span class="badge badge--info">Method</span>

Registers a delegate for the SDK events. The method getAsyncInterface in HapiFactory executes internally this subscription.

##### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `listener` <span class="badge badge--primary">Required</span><br />*Object*     | 		Any Object implementing one or more of the available delegate interfaces|

**Code example**

```csharp
public class ObjectHelper : Events.Required, Events.Status, Events.Log {
	...
	private void RegisterEventHandler() {
		// Register this class as listener for events 
		this.api.RegisterEventsDelegate(this);
		...
	}

}
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the new delegate was added successfully.|



## Unregister events delegate

`UnregisterEventsDelegate` <span class="badge badge--info">Method</span>

Unregisters an object from SDK events.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `listener` <span class="badge badge--primary">Required</span><br />*Object*     | 		Any Object implementing one or more of the available delegate interfaces|

**Code example**

```csharp
public class ObjectHelper : Events.Required, Events.Status, Events.Log {
	...
	private void Unsubscribe() {
	// Stop receiving events
	this.api.UnregisterEventsDelegate(this);
	...
}
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the new delegate was removedded successfully.|


