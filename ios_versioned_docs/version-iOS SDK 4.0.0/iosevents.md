---
sidebar_position: 9
id: iosevents
---



# Events

### didConnect{#20}	

`didConnect`

Called when a connection to the client has been established through the method clientForDevice.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `client` <span class="badge badge--primary">Required</span>  <br />[HeftClient](iosobjects.md#22) | Yes [default] to activate multiScan mode - No to activate singleScan mode. Multi-scan mode allows the user to scan until scan operation is canceled or timeout occurs, single-scan mode is active until one scan has occurred then it disables the scan mode.|

**Code example**

````objectivec
//didConnect:
//Called when a connection to specified device was created.
-(void)didConnect:(id<HeftClient>)client 
{
	// connected successfully to a device
	// assign the client to our heftClient property
	heftClient = client;
}
````

### didDiscoverFinished {#37}	

`didDiscoverFinished`

When the modal window from startDiscovery is closed then this event is called.

**Code example**

````objectivec
//didDiscoverFinished
// This function gets called when discovery is finished
- (void)didDiscoverFinished;
{
	NSLog(@"Discover finished"); 
	//Stop search activity indicator or other desired functions 
}
````


### didFindAccessoryDevice{#38}	

`didFindAccessoryDevice`

Notifies that new accessory device was found. When a card reader is detected this delegate is called. You can take the newDevice object and create a new heft client for that particular device or store it in memory to connect to it later.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `newDevice` <span class="badge badge--primary">Required</span>  <br />[HeftRemoteDevice](iosobjects.md#23) | An object containing a reference to the accessory device|

**Code example**

````objectivec
//didFindAccessoryDevice
//Delegate that notifies that new accessory device was found.
- (void)didFindAccessoryDevice:(HeftRemoteDevice*)newDevice
{
	NSLog(@"Found new device");
	//Connect to device or store found device for later
}
````


### didLostAccessoryDevice{#39}
	

`didLostAccessoryDevice`

Notifies that accessory device was disconnected.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `oldDevice` <span class="badge badge--primary">Required</span>  <br />[HeftRemoteDevice](iosobjects.md#23) | An object containing a reference to the accessory device|

**Code example**

````objectivec
//didLostAccessoryDevice
//Delegate that notifies that accessory device was disconnected
- (void)didLostAccessoryDevice:(HeftRemoteDevice*)oldDevice
{
	NSLog(@"Device disconnected");
	//Remove device from devices array
	[heftManager.devicesCopy removeObject:oldDevice];
	//Do some cleanup after disconnecting if necessary 
	
} 
````

### responseStatus{#14}	

`responseStatus`

Called to inform about the status of the transaction, several calls can be expected. Several calls to this method happen after a transaction is initiated from the HeftClient to inform about status of operation. The info object contains a string (status) and a dictionary (xml).

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `info` <span class="badge badge--primary">Required</span>  <br />[ResponseInfo](iosobjects.md#24) | Includes status code, status text and detailed xml.|

**Code example**

````objectivec
//responseStatus:
//Called to inform about the status of the transaction
-(void)esponseStatus:(id<ResponseInfo>)info
{
	NSLog(info.status);
	NSLog(info.xml.description);
}
````

### responseFinanceStatus{#16}	

`responseFinanceStatus`

Notifies that transaction has completed.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `info` <span class="badge badge--primary">Required</span>  <br />[FinanceResponseInfo](iosobjects.md#25) | Information about current transaction status.|

**Code example**

````objectivec
//responseFinanceStatus:
//Called at the end of transaction to inform about the result of the operation
-(void)responseFinanceStatus:(id<FinanceResponseInfo>)info
{
	NSLog(info.status);
	NSLog(info.customerReceipt);
	//print receipts
}
````

### responseError{#15}	

`responseError`

Called to inform about the status of the transaction, several calls can be expected. Several calls to this method happen after a transaction is initiated from the HeftClient to inform about status of operation. The info object contains a string (status) and a dictionary (xml).

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `info` <span class="badge badge--primary">Required</span>  <br />[ResponseInfo](iosobjects.md#24) | The info object contains a string (status) and a dictionary (xml).|

**Code example**

````objectivec
//responseError:
//Called when to inform when an error response happens.
-(void)responseError:(id<ResponseInfo>)info
{
	NSLog(info.status);
	NSLog(info.xml.description);
}
````

### requestSignature{#17}	

`requestSignature`

Is called if during a financial operation a signature from the customer is needed. The requestSignature delegate should be implemented to print out or display the receipt for the customer to sign and provide the merchant with the means to confirm the signature.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `receipt` <span class="badge badge--primary">Required</span>  <br />*NSString* | The receipt is a html formatted string containing a receipt for the customer to sign|

**Code example**

````objectivec
//requestSignature:
//Is called if a signature from the customer is needed.
-(void)requestSignature:(NSString*)receipt
{
	NSLog(receipt);
	//Display buttons to accept or decline customer signature
	UIAlertView* alert = [[UIAlertView alloc] initWithTitle:@"" message:@"sign?" delegate:self cancelButtonTitle:@"No" otherButtonTitles:@"Yes", nil];
	[alert show];
}
````

### cancelSignature{#40}	

`cancelSignature`

Called if the signature request times out. If the card reader does not receive an approval for the signature within a certain timeframe (45 sec) it cancels the transaction and sends a notification to the app.

**Code example**

````objectivec
//cancelSignature
//Called if the signature request times out.
-(void)cancelSignature
{
	NSLog(@"Signature request timed out");
}
````

### responseScannerEvent{#41}	

`responseScannerEvent`

Called to inform that a scan has been performed, several calls can be expected.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `info` <span class="badge badge--primary">Required</span>  <br />[ScannerEventResponseInfo](iosobjects.md#26) | The info object contains scanCode, status and a dictionary (xml).|

**Code example**

````objectivec
//responseScannerEvent:
//Called to inform that a scan has been performed
-(void)responseScannerEvent:(id<ScannerEventResponseInfo>)info
{
	NSLog(info.scanCode); //barcode scanned
	NSLog(info.xml.description);
}
````

### responseScannerDisabled{#42}	

`responseScannerDisabled`

Called to notify that the scanner has been disabled.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `info` <span class="badge badge--primary">Required</span>  <br />[ScannerDisabledResponseInfo](iosobjects.md#27) | The info object contains information about the scanner operation.|

**Code example**

````objectivec
//responseScannerDisabled:
//Called to notify that the scanner has been disabled. 
-(void)responseScannerDisabled:(id<ScannerDisabledResponseInfo>)info
{
	NSLog(info.status);
}
````

### responseLogInfo{#43}	

`responseLogInfo`

Called when logs have been downloaded from the card reader by using the logGetInfo method.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `info` <span class="badge badge--primary">Required</span>  <br />[LogInfo](iosobjects.md#28) | The info object has the string property log which holds the log info in text with carriage returns.|

**Code example**

````objectivec
//responseLogInfo:
//Called when logs have been downloaded from the card reader by using the logGetInfo method.
-(void)responseLogInfo:(id<LogInfo>)info
{
	NSLog(info.log);
	//write to log file
}
````

### responseRecoveredTransactionStatus{#44}	

`responseRecoveredTransactionStatus`

Notifies that a transaction has been recovered.

This method is **OPTIONAL** and only required if retrievePendingTransaction will be called.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `info` <span class="badge badge--primary">Required</span>  <br />[*FinanceResponseInfo*](iosobjects.md#25) | Information about the recovered transaction status.<br/>**If an attempt was made to recover a transaction when none was pending then this parameter WILL be nil.**|


**Code example**

````objectivec
//responseRecoveredTransactionStatus:
//Called when a pending transaction result has been recovered from the card reader
- (void)responseRecoveredTransactionStatus:(id<FinanceResponseInfo>)info{
	if(info != nil) {
		if(info.statusCode == EFT_PP_STATUS_SUCCESS) {
			NSLog(info.status);
			NSLog(info.customerReceipt);
			NSLog(info.merchantReceipt);
			// print receipts and/or save receipts in transaction log

			if(info.financialResult == EFT_FINANC_STATUS_TRANS_APPROVED){
				// Process recovered authorized transaction result
			} else if(info.financialResult == EFT_FINANC_STATUS_TRANS_DECLINED) {
				// Process recovered declined transaction result
			}
		} else if(info.statusCode != EFT_PP_STATUS_NO_DATA_AVAILABLE) {
			// some other error was detected while waiting for a pending transaction result
		}
	}
	// else a pending transaction result was not found on the card reader
}
````

### Card Reader Requirements

**Version Requirements**

Card reader software v1.7.0+ and v2.1.7+ is required in order for this response to be received.
