---
sidebar_position: 9
id: iosdevicemanagement
---



# Terminal Management

## Update terminal{#47}	

`financeInit` <span class="badge badge--info">Method</span>

The update operation checks for available software or configuration update for the payment terminal and initiates a download if needed.

**Code example**

````objectivec
//financeInit
//Initializes the card reader and updates config.
-(IBAction)updateCardReader
{
	[heftClient financeInit];
}
````

**Events invoked**

[**responseStatus**](iosevents.md#14)

Invoked during a transaction with different statuses from the payment terminal.
***

[**responseError**](iosevents.md#15)

Invoked when an error response happens.
***

[**responseFinanceStatus**](iosevents.md#16)

Invoked when the payment terminal finishes processing the transaction.
***
**Returns**


| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| This method always returns YES|

## Shared Manager{#11} 

`sharedManager` <span class="badge badge--info">Method</span>

Provides access to the heftManager. The heft manager is used for discovering devices and creating a HeftClient with a connection to selected payment terminals.

**Code example**

````objectivec
//SharedManager
//Provides access to the heftManager

//Create an instance of the shared manager at set it's delegate
HeftManager* heftManager = [HeftManager sharedManager];
heftManager.delegate = self;
````

**Returns**


| Parameter      | Notes |
| ----------- | ----------- |
| [**HeftManager**](iosobjects.md#19)| The heftManager instance|





## Client for device (NSString){#12}

`clientForDevice` <span class="badge badge--info">Method</span>

Creates a HeftClient object. If a connection is successful, the HeftClient object is returned in the didConnect event. All transactions are done using the heftClient.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span>  <br />*NSInteger*  | The payment terminal to connect to.|
| `sharedSecret` <span class="badge badge--primary">Required</span>  <br />*NSString*  | Shared secret only known by the merchant and Handpoint.|
| `aDelegate` <span class="badge badge--primary">Required</span>  <br />*BOOL*  | The HeftStatusReportDelegate for the HeftClient to report to.|


**Code example**

````objectivec
//clientForDevice:sharedSecretString:delegate:
//Creates a HeftClient object(connection to device)
NSString* sharedSecret = @"0102030405060708091011121314151617181920212223242526272829303132";
-(void)connectToFirstCardReaderWith:(NSString*)sharedSecret;
{
	//Try to connect to the first payment terminal in the array
	[heftManager clientForDevice:[[heftManager devicesCopy] objectAtIndex:0] sharedSecretString:sharedSecret delegate:self];
	//Client calls the didConnect delegate function if successful 
}
````

**Events invoked**

[**didConnect**](iosevents.md#20)

Called when a connection to specified device was created.

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| YES if operation starts successfully|


  

## Start Discovery	{#32}

`startDiscovery` <span class="badge badge--info">Method</span>

Displays a list of available accessory devices in a modal window.

**Code example**

````objectivec
//startDiscovery
//Starts the BT discovery process
-(void)startDiscovery; 
{
	[heftManager startDiscovery];
	//Start search activity indicator or other desired functions
}
````

## Set log level{#33}	

`logSetLevel` <span class="badge badge--info">Method</span>

Sets the log level of the payment terminal. There are four levels of logging: none, info, full, debug. Setting the log level means that relevant information concerning the application operation will be stored.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `level` <span class="badge badge--primary">Required</span>  <br />[eLogLevel](iosobjects.md#13) | eLogLevel available types: eLogNone, eLogInfo, eLogFull, eLogDebug|

**Code example**

````objectivec
//logSetLevel:
//Sets the log level of the card reader.
-(void)disableCardReaderLogs
{
	[heftClient logSetLevel:eLogNone];
}
-(void)enableCardReaderDebugLogs
{
	[heftClient logSetLevel:eLogDebug];
}
````

**Returns**


| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| This method always returns YES|






## Fetch logs{#34}

`logGetInfo` <span class="badge badge--info">Method</span>

Retrieves the logging info. Returns them in the responseLogInfo event.

**Code example**

````objectivec
//logGetInfo
//Retrieves the logging info.
-(void)getLogsFromCardReader
{
	[heftClient logGetInfo];
}
````

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| This method always returns YES|

## Reset logs{#35}	

`logReset` <span class="badge badge--info">Method</span>

Clears the logging information stored so far.

**Code example**

````objectivec
//logReset
//Clears the logging information stored so far
-(void)clearLogs
{
	[heftClient logReset];
}
````

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| This method always returns YES|

## Enable scanner{#36}	

`enableScanner` <span class="badge badge--info">Method</span>

Switches the payment terminal in scan mode. Only if the card reader supports it. To cancel/stop scan mode, call the cancel method of the heft client.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `multiScan`  <br />*Boolean* | Yes [default] to activate multiScan mode. <br /> No to activate singleScan mode. <br /><br />Multi-scan mode allows the user to scan until the scan operation is canceled, or a timeout occurs, single-scan mode is active until one scan has occurred then it disables the scan mode.|
| `buttonMode`  <br />*Boolean* | Yes [default] if buttonMode is on. <br />No otherwise. <br /><br />If button mode is on then the operator needs to press the scan button to activate the scanner (during scan mode).|
| `timeoutSeconds`  <br />*NSInteger* | 0 [default] - The payment terminal will determine when scanning should time out.<br /> x - the scanner will time out if x seconds of inactivity occur.|

**Code example**

````objectivec
//enableScanner:multiScan:buttonMode:timeoutSeconds
//Places the card reader in a scan only mode. 
//To cancel/stop scan mode call cancel function.
-(IBAction)startScan 
{
	[heftClient enableScanner];
}
-(IBAction)startMultiScan
{
	[heftClient enableScannerWithMultiScan:YES];
}
````

**Events invoked**

[**responseScannerEvent**](iosevents.md#41)

Called to inform that a scan has been performed, several calls can be expected. The info object contains scanCode, status and a dictionary (xml).

## Disable scanner	

`disableScanner` <span class="badge badge--info">Method</span>

Disables the scanner, if possible.

**Code example**

````objectivec
//disableScanner
//Disable the scanner
	-(IBAction)disableScanner
{
[heftClient disableScanner];
}
````

**Events invoked**

[**responseScannerDisabled**](iosevents.md#42)

Called to inform that a scan has been performed, several calls can be expected. The info object contains scanCode, status and a dictionary (xml).

## Get SDK version	

`getSDKVersion` <span class="badge badge--info">Method</span>

Returns the current SDK version as a string.

**Code example**

````objectivec
//getSDKVersion
//Log SDK version number
	NSLOG(@"SDK version: %@", [heftManager getSDKVersion];
````

## Get SDK build number	

`getSDKBuildNumber` <span class="badge badge--info">Method</span>

Returns the current SDK build as a string.

**Code example**

````objectivec
//getSDKBuildNumber
//Log SDK build number
	NSLOG(@"SDK build: %@", [heftManager getSDKBuildNumber];
````