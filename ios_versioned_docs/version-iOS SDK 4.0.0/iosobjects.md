---
sidebar_position: 10
id: iosobjects
---


# Objects

## HeftManager{#19}	

`HeftManager`

The HeftManager is used for discovering devices and to connect and create a HeftClient object for the appropriate device. The manager reports messages to HeftDiscoveryDelegate protocol during the discovery process. Starting the manager is usually the first thing that should be done after loading up an UIView that enables the user to search for and connect to BT devices. When starting the manager an object (usually the UIViewController itself) is passed as the HeftDiscoveryDelegate delegate to report to.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `devicesCopy`  <br />*NSArray* | **DEPRECATED_ATTRIBUTE**: Stored array which contains all found devices.|
| `connectedCardReaders`  <br />*NSArray* | Stored array which contains all found devices.|
| `delegate`  <br />*NSObject<HeftDiscoveryDelegate\>*| Key for value in mpedInfo|
| `version`  <br />*NSString* | Current HeftManager version.|

**Code example**

````objectivec
// Create a manager on view load
- (void)viewDidLoad{
	[super viewDidLoad];
	HeftManager* manager = [HeftManager sharedManager];
	manager.delegate = self;
	[manager resetDevices]; // Clean out device list
}
````

**Methods**

[**Start Discovery**](iosdevicemanagement.md#32)

- (void)startDiscovery;
***

[**Shared Manager**](iosdevicemanagement.md#11)

+ (HeftManager `*`)sharedManager;
***

[**Client for device (NSString)**](iosdevicemanagement.md#12)

- (void)clientForDevice:(HeftRemoteDevice `*`)device sharedSecret:(NSString `*`)sharedSecret delegate:(NSObject HeftStatusReportDelegate `*`)delegate;

## HeftClient{#22}	

`HeftClient`

High level interface for Headstart API. HeftClient handles the communication between the mPos app and the card reader. The HeftClient object also stores information about it's card reader device in the mpedInfo dictionary. Device Log operations are also implemented in HeftClient. To create a new HeftClient object the clientForDevice method is called from an instance of the HeftManager. Transaction and log requests (and the acceptSignature response) are done by calling HeftClient methods with the relevant input. The library reports the status of the requests by calling delegates of the HeftStatusReportDelegate protocol.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `sharedSecret`  <br />*NSString* | The shared secret is a key provided by Handpoint when you get your account that enables you to perform live operations with the card reader. However, if you're developing with a starter kit, the test shared secret is specified in the example.|
| `mpedInfo`  <br />*NSDictionary* | Dictionary with card reader info details, obtained by querying it from device on interface creation.|
| `isTransactionResultPending`  <br />*BOOL* | Indicates whether a transaction result is pending on the card reader. <br/>**Note: A pending transaction result is retained by the card reader if a disconnect occurs between card reader and app before the transaction result can be delivered during a SALE, REFUND or VOID processing.**|
| `kSerialNumberInfoKey`  <br />*NSString Constant* | Key for value in mpedInfo|
| `kPublicKeyVersionInfoKey`  <br />*NSString Constant* | Key for value in mpedInfo|
| `kEMVParamVersionInfoKey`  <br />*NSString Constant* | Key for value in mpedInfo|
| `kGeneralParamInfoKey`  <br />*NSString Constant* | Key for value in mpedInfo|
| `kManufacturerCodeInfoKey`  <br />*NSString Constant* | Key for value in mpedInfo|
| `kModelCodeInfoKey`  <br />*NSString Constant* | Key for value in mpedInfo|
| `kAppNameInfoKey`  <br />*NSString Constant* | Key for value in mpedInfo|
| `kAppVersionInfoKey`  <br />*NSString Constant* | Key for value in mpedInfo|
| `kXMLDetailsInfoKey`  <br />*NSString Constant* | Key for value in mpedInfo|


**Code example**

````objectivec
//clientForDevice:sharedSecret:delegate:
//Creates a HeftClient object(connection to device)
-(void)connectToFirstCardReaderWith:(NSData*)sharedSecret;
{
	//Try to connect to first device in devices array
	[heftManager clientForDevice:[[heftManager devicesCopy] objectAtIndex:0] sharedSecret:sharedSecret delegate:self];
	//Client calls the didConnect delegate function if successful 
}

//....

//didConnect:
//Called when a connection to specified device was created.
-(void)didConnect:(id<HeftClient>)client 
{
	// connected successfully to a device
	// assigne the client to our heftClient property
	heftClient = client;
}

// .....

// Do one sale later in code
[heftClient saleWithAmount:1000 currency:@"GBP" cardholder:YES];
````	

**Methods**

[**cancel**](#32)

- (void)cancel;
***

[**saleWithAmount**](iostransactions.md#2)

- (BOOL)saleWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present;
***

[**saleWithAmount**](iostransactions.md#2)

- (BOOL)saleWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present reference:(NSString*)reference;
***

[**saleWithAmount**](iostransactions.md#2)

- (BOOL)saleWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present reference:(NSString*)reference;
***

[**refundWithAmount**](iostransactions.md#5)

- (BOOL)refundWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present;
***

[**refundWithAmount**](iostransactions.md#5)

- (BOOL)refundWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present reference:(NSString*)reference;
***

[**saleVoidWithAmount**](iostransactions.md#3)

- (BOOL)saleVoidWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present transaction:(NSString*)transaction;
***

[**refundVoidWithAmount**](iostransactions.md#6)

- (BOOL)refundVoidWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present transaction:(NSString*)transaction;
***

[**retrievePendingTransaction**](iostransactions.md#8)

- (BOOL)retrievePendingTransaction;
***

[**enableScanner**](iosdevicemanagement.md#36)

- (BOOL)enableScanner;
***

**enableScannerWithMultiScan**

- (BOOL)enableScannerWithMultiScan:(BOOL)multiScan;
***

**enableScannerWithMultiScan**

- (BOOL)enableScannerWithMultiScan:(BOOL)multiScan buttonMode:(BOOL)buttonMode;
***

**enableScannerWithMultiScan**

- (BOOL)enableScannerWithMultiScan:(BOOL)multiScan buttonMode:(BOOL)buttonMode timeoutSeconds:(NSInteger)timeoutSeconds;
***

[**Disable scanner**](iosdevicemanagement.md#disable-scanner)

- (BOOL)disableScanner;
***

**financeStartOfDay**

- (BOOL)financeStartOfDay;
***

**financeEndOfDay**

- (BOOL)financeEndOfDay;
***

[**financeInit**](iosdevicemanagement.md#47)

- (BOOL)financeInit;
***

[**logSetLevel**](iosdevicemanagement.md#33)

- (BOOL)logSetLevel:(eLogLevel)level;
***

[**logReset**](iosdevicemanagement.md#35)

- (BOOL)logReset;
***

[**logGetInfo**](iosdevicemanagement.md#34)

- (BOOL)logGetInfo;
***

[**acceptSignature**](iostransactions.md#7)

- (void)acceptSignature:(BOOL)flag;
***

**getEMVConfiguration**

- (BOOL)getEMVConfiguration;
***

## HeftRemoteDevice{#23}	

`HeftRemoteDevice`

An object containing a reference to the accessory device which is passed to the HeftClient on creation.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `name`  <br />*NSString* | Name of device|
| `accessory`  <br/>*EAAccessory* | The EAAccessory object|
| `address`  <br />*NSString* | Address of device|


## HeftDiscoveryDelegate	

`HeftDiscoveryDelegate`

Notifications sent by the SDK on various events - new available device found, connection lost, connection found, etc

**Methods**

[**didDiscoverFinished**](iosevents.md#37)

- (void)didDiscoverFinished;
***

[**didFindAccessoryDevice**](iosevents.md#38)

- (void)didFindAccessoryDevice:(HeftRemoteDevice*)newDevice;
***

[**didLostAccessoryDevice**](iosevents.md#39)

- (void)didLostAccessoryDevice:(HeftRemoteDevice*)oldDevice;
***

## HeftStatusReportDelegate	

`HeftStatusReportDelegate`

Notifications sent by the SDK on various events - connected to device, request signature, response on error etc.

**Methods**

[**didConnect**](iosevents.md#20)

- (void)didConnect:(id-HeftClient)client;
***

[**responseStatus**](iosevents.md#14)

- (void)responseStatus:(id-ResponseInfo)info;
***

[**responseError**](iosevents.md#15)

- (void)responseError:(id-ResponseInfo)info;
***

[**responseFinanceStatus**](iosevents.md#16)

- (void)responseFinanceStatus:(id-FinanceResponseInfo)info;
***

[**responseLogInfo**](iosevents.md#43)

- (void)responseLogInfo:(id-LogInfo)info;
***

[**requestSignature**](iosevents.md#17)

- (void)requestSignature:(NSString*)receipt;
***

[**cancelSignature**](iosevents.md#40)

- (void)cancelSignature;
***

[**responseRecoveredTransactionStatus**](iosevents.md#44)

- (void)responseRecoveredTransactionStatus:(id-FinanceResponseInfo)info;
***

[**responseScannerEvent**](iosevents.md#41)

- (void)responseScannerEvent:(id-ScannerEventResponseInfo)info;
***

[**responseScannerDisabled **](iosevents.md#42)

- (void)responseScannerDisabled:(id-ScannerDisabledResponseInfo)info;
***

**responseEMVReport**

- (void)responseEMVReport:(NSString *)report;
***


## ResponseInfo{#24}	

`ResponseInfo`

A ResponseInfo object is passed to the ResponseStatus delegate. It contains information from the card reader about the status of the current transaction. There are two properties: status and xml. status is a string and xml is a dictionary. Usually status contains a message descriptive enough to know whats going on and is useful for displaying to user. The xml dictionary contains all elements of the XML formatted data passed from the card reader and has detailed information on the current state of the card reader.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `statusCode`  <br />*int* | A numerical representation of the status.|
| `status`  <br />[*Status as NSString*](#45) | Financial transaction status message.|
| `xml`  <br />[*XML as NSDictionary*](#46) | Feedback with xml details about transaction from the card reader.|


## FinanceResponseInfo{#25}	

`FinanceResponseInfo`

A FinanceResponseInfo is passed to the responseFinanceStatus delegate at the end of transaction. It contains all necessary information needed about the relevant transaction. FinanceResponseInfo inherits from ResponseInfo so it includes the status string and xml dictionary in addition to authorisedAmount, transactionId and the html formatted receipts.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `financialResult`  <br />*NSInteger* | A numerical representation of a financial status result. **Status**							  **Value**		EFT_FINANC_STATUS_UNDEFINED				0x00 	EFT_FINANC_STATUS_TRANS_APPROVED		0x01 EFT_FINANC_STATUS_TRANS_DECLINED		0x02 EFT_FINANC_STATUS_TRANS_PROCESSED		0x03 EFT_FINANC_STATUS_TRANS_NOT_PROCESSED	0x04 EFT_FINANC_STATUS_TRANS_CANCELLED		0x05|
| `isRestarting`  <br />*BOOL* | Indicates whether the card reader is about to restart or not (usually indicated after a software update was received on the card reader).If a restart is indicated then you have 2 seconds to start fetching the logs (before the card reader restarts).After fetching the logs you should disconnect from the card reader and wait for it to be visible again.|
| `authorisedAmount`  <br />*NSInteger* | In the smallest unit for the given CurrencyCode - for the transaction. ISO 4217 defines number of digits in fractional part of currency for every currency code. Example 1000 in the case where CurrencyCode is "0826" (GBP) the amount would be 10.00 pounds or 1000 pense.|
| `transactionId`  <br />*NSString* | The id of current transaction.|
| `customerReceipt`  <br />*NSString* | Customer receipt in html format.|
| `merchantReceipt`  <br />*NSString* | Merchant receipt in html format.|
| `statusMessage`  <br />*NSString* | A human readable message describing the result of the transaction.|
| `type`  <br />*NSString* | The transaction type represents which type of transaction was done. "SALE" for example.|
| `finStatus`  <br />*NSString* | The financial status describes the conclusion of the transaction as received from the card reader. "AUTHORISED" for example.|
| `requestedAmount`  <br />*NSString* | The requested amount is the payment amount sent in the original request to the card reader, i.e. the amount which was to charge the card with.|
| `gratuityAmount`  <br />*NSString* | The gratuity amount is an additional amount added to the requested payment amount which represents additional fee added to the requested amount. This is used when the card reader is supporting the tipping functionality. An example: A sale is started with the amount 1000 and the card reader is set to support tipping. The card reader asks if a tip should be applied by the customer. The customer inputs an additional amount as a tip, lets say 100. The card is then charged for the requested amount, 1000, as well as the additional gratuity amount, 100. The result will be that the card will be charged for 1100. A calculated gratuity percentage will also be returned.|
| `gratuityPercentage`  <br />*NSString* | The gratuity percentage is used to calculate an additional amount to the requested amount. The card reader calculates that amount, rounded up to the closest whole number. This is used when the card reader is supporting the tipping functionality. An example: A sale is started with the amount 1000 and the card reader is set to support tipping. The card reader asks if a tip should be applied by the customer. Instead of the customer adding a value he selects the percentage of the requested amount to be applied as a tip, lets say 10%. The card is then charged for the requested amount, 1000, as well as the additional gratuity percentage, 10%. The result will be that the card will be charged for 1100. A calculated gratuity amount will also be returned.|
| `totalAmount`  <br />*NSString* | The total amount is the amount the card was charged for. It is possible that the total amount is not the same as the requested amount since an additional fee can be added, with the customer's approval, via the tipping functionality.|
| `currency`  <br />*NSString* | The currency used in this transaction.|
| `eFTTransactionID`  <br />*NSString* | The EFT (electronic funds transfer) transaction id is a unique GUID from the servers which is linked to this transaction in order to search for a particual transaction. This id is used if a transaction is to be reversed.|
| `originalEFTTransactionID`  <br />*NSString* | The original EFT (electronic funds transfer) transaction id is a unique GUID previously received from the servers in order to reverse a transaction. This id is sent with the new eFTTransactionID in order to reference the original transaction. An example: A transaction is made. An eFTTransactionID is received. That transaction has to be reversed. A new transaction is started, now a reverse transaction, with the previously received eFTTransactionID as a parameter in the transaction. In the end result there will be a new eFTTransactionID, for the reverse transaction, and an originalEFTTransactionID referencing the original transaction.|
| `eFTTimestamp`  <br />*NSString* | The eFTTimestamp represents the time when the transaction was done. This time is set by the device communicating to the card reader when the connection is established to the card reader.|
| `authorisationCode`  <br />*NSString* | If the transaction was authorised the value represented can be used to search for a transaction in our system.|
| `verificationMethod`  <br />*NSString* | The verification method represents the card holder verification method used to allow the payment. "PIN" for an example.|
| `cardEntryType`  <br />*NSString* | The card entry type is the method the card information was input to card reader. "ICC" for an example represents "Integrated Circuit Card" i.e. the information was read from the chip of the card.|
| `cardSchemeName`  <br />*NSString* | The scheme which was used when the transaction was made. (VISA, Mastercard, etc...)|
| `errorMessage`  <br />*NSString* | If there was an error during the transaction it is represented here in a human readable text.|
| `customerReference`  <br />*NSString* | If a customer reference was added, as an optional parameter, when the transaction was started. It is received here, unaltered. The customer reference can be used to reference in internal systems.|
| `budgetNumber`  <br />*NSString* | If a budget number was added, as an optional parameter, when the transaction was started. It is received here, unaltered. The budget number can be used to split payments over a period of months.|
| `recoveredTransaction`  <br />*NSString* | This flag is true if the transaction result is from a previous transaction which failed to get sent from the card reader, false otherwise. In the case that the communication between the device and the card reader breaks down, the card reader will attempt to send the result of the previous transaction as an immediate reply when the next transaction is started. If this happens the transaction is flagged as a "RecoveredTransaction". This should be displayed very well in the UI since this is *NOT* the result from the transaction just started.|
| `cardTypeId`  <br />*NSString* | The card type id is an identifier inside the Handpoint gateway which represents what kind of card was used. "U015" for an example represents SAS Airline-Systems in our systems.|
| `chipTransactionReport`  <br />*NSString* | If present, a full EMV report by the card reader on the Card and Terminal involved in the transaction.|
| `deviceStatus`  <br />*NSString* | Gets the device status.|
| `dueAmount`  <br />*NSString* | If there's still a part of the amount to be paid.|
| `balance`  <br />*NSString* | The balance of the Cardholder's cards if the bank/acquirer supports it.|
| `CardToken`  <br />*String* | Gets the card token if it's available, null otherwise.|


## ScannerEventResponseInfo{#26}	

`ScannerEventResponseInfo`

A ScannerEventResponseInfo is passed to the responseScannerEvent delegate during scanner mode when a scan is detected. It contains all necessary information needed about the relevant operation. ScannerEventResponseInfo inherits from ResponseInfo so it includes the status string and xml dictionary in addition to scanCode string.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `statusCode`  <br />*int* | A numerical representation of the status.|
| `status`  <br />[*Status as NSString*](#45) | Financial transaction status message.|
| `xml`  <br />[*XML as NSDictionary*](#46) | Feedback with xml details about transaction from the card reader.|
| `scanCode`  <br />*NSString* | The code that was scanned.|

## ScannerDisabledResponseInfo{#27}	

`ScannerDisabledResponseInfo`

The info object contains information about the scanner operation.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `statusCode`  <br />*int* | A numerical representation of the status.|
| `status`  <br />[*Status as NSString*](#45) | Financial transaction status message.|
| `xml`  <br />[*XML as NSDictionary*](#46) | Feedback with xml details about transaction from the card reader.|

## LogInfo{#28}	

`LogInfo`

A LogInfo object is passed to the ResponseLogInfo delegate when logs have been downloaded from the card reader.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `statusCode`  <br />*int* | A numerical representation of the status.|
| `status`  <br />[*Status as NSString*](#45) | Financial transaction status message.|
| `xml`  <br />[*XML as NSDictionary*](#46) | Feedback with xml details about transaction from the card reader.|
| `log`  <br />*NSString* | String containing the logging information.|

## eLogLevel{#13}	

`eLogLevel`

An enum describing the different levels of logging used in the SDK and in the device.

**Possible values**

`eLogNone` `eLogError` `eLogInfo` `eLogFull` `eLogDebug`

## Transaction Details{#46}	

`XML as NSDictionary`

The contents of the xml property depend on which type of operation the card reader is responding to. Listed below are all possible keys in the dictionary. Note that not all fields are included all the time.

## Dictionary keys

**StatusMessage**

A human readable description for the returned Status.
***

**TransactionType**

The type of transaction performed: UNDEFINED, SALE, VOID_SALE, REFUND, VOID_REFUND, CANCEL_SALE, CANCEL_REFUND
***

**FinancialStatus**

The result of the transaction: UNDEFINED, APPROVED, DECLINED, PROCESSED, FAILED, CANCELLED
***

Description of the different financial statuses:

| Parameter      | Notes |
| ----------- | ----------- |
| `UNDEFINED`   <br/>  | Any Financial Status other than the below mentioned financial statuses will be `UNDEFINED`.  UNDEFINED means that the SDK couldn't get a response from the Gateway. An automatic cancellation service will try to cancel the transaction in case it was approved. |
| `AUTHORISED` <br/>    | The transaction (Sale, Refund,...) has been authorised. Consider this value as "successful". |
| `DECLINED` <br/>   | The transaction has been declined by the acquirer or issuer. |
| `PROCESSED`  <br/>   | The `update` operation was successful.|
| `FAILED`  <br/>   | Status generated due to a network error, a card which can not be read etc. As a general rule, errors are mapped to `FAILED`.  |
| `CANCELLED`  <br/>   | The transaction has been cancelled. For example if the `stopCurrentTransaction` operation has been used or the cancel button on the terminal has been pressed.   |
| `PARTIAL_APPROVAL`  <br/>   | A partial approval is the ability to partially authorize a transaction if the cardholder does not have the funds to cover the entire cost on their card. The merchant can obtain the remainder of the purchase amount in another form of payment. `PARTIAL_APPROVAL` is **only**  applicable to the United States market. |


**RequestedAmount**

The amount requested by the POS, as requested by the POS (i.e. no decimal point).
***

**GratuityAmount**

The gratuity amount entered by the cardholder, if any.
***

**GratuityPercentage**

The gratuity amount, as a percentage of the requested amount.
***

**TotalAmount**

The total of the gratuity and requested amount.
***

**TransactionID**

The transaction number used for this transaction, as maintained by the Eft Client.
***

**EFTTransactionID**

The EFT reference, given by the system, to make the transaction unique.
***

**OriginalEFTTransactionID**

The original EFT reference, given by the POS, as part of a VOID_SALE or a VOID_REFUND transaction.
***

**EFTTimestamp**

The date and time of the transaction, in ISO format (YYYYMMDDHHmmSS).
***

**AuthorisationCode**

The transaction authorization code, as given by the system.
***

**CVM**

The Cardholder Verfication Method: UNDEFINED, SIGNATURE, PIN, PIN_SIGNATURE, FAILED, NOT_REQUIRED
***

**CardEntryType**

The card data acquisition type: UNDEFINED, MSR, ICC, CNP
***

**CardSchemeName**

The card, reported, scheme name.
***

**CardTypeId**

The ID of the Card Type.
***

**SerialNumber**

The serial number of the PED.
***

**BatteryStatus**

A number, followed by the % sign, which indicates current charge level of the battery.
***

**BatterymV**

An integer, which represent the batter charge, in mV.
***

**BatteryCharging**

Indicates whether the battery is charging, or not. Values are true or false.
***

**ExternalPower**

Indicates whether the PED is connected to an external power source (e.g. a AC adapter). Values are true or false.
***

**ApplicationName**

The name of the application running on the PED.
***

**ApplicationVersion**

A version string of the form major.minor.build”(e.g. 1.2.118).
***

**ErrorMessage**

Description of the error, if any.
***

**RecoveredTransaction**

Indicates that the transaction result is a recovered transaction. The key is only included if value is true.
***

## CmdIds	

`card reader Status messages`

Status messages received from card reader:

## Possible values

`EFT_PP_STATUS_SUCCESS`
`EFT_PP_STATUS_INVALID_DATA`
`EFT_PP_STATUS_PROCESSING_ERROR`
`EFT_PP_STATUS_COMMAND_NOT_ALLOWED`
`EFT_PP_STATUS_NOT_INITIALISED`
`EFT_PP_STATUS_CONNECT_TIMEOUT`
`EFT_PP_STATUS_CONNECT_ERROR`
`EFT_PP_STATUS_SENDING_ERROR`
`EFT_PP_STATUS_RECEIVING_ERROR`
`EFT_PP_STATUS_NO_DATA_AVAILABLE`
`EFT_PP_STATUS_TRANS_NOT_ALLOWED`
`EFT_PP_STATUS_UNSUPPORTED_CURRENCY`
`EFT_PP_STATUS_NO_HOST_AVAILABLE`
`EFT_PP_STATUS_CARD_READER_ERROR`
`EFT_PP_STATUS_CARD_READING_FAILED`
`EFT_PP_STATUS_INVALID_CARD`
`EFT_PP_STATUS_INPUT_TIMEOUT`
`EFT_PP_STATUS_USER_CANCELLED`
`EFT_PP_STATUS_INVALID_SIGNATURE`
`EFT_PP_STATUS_WAITING_CARD`
`EFT_PP_STATUS_CARD_INSERTED`
`EFT_PP_STATUS_APPLICATION_SELECTION`
`EFT_PP_STATUS_APPLICATION_CONFIRMATION`
`EFT_PP_STATUS_AMOUNT_VALIDATION`
`EFT_PP_STATUS_PIN_INPUT`
`EFT_PP_STATUS_MANUAL_CARD_INPUT`
`EFT_PP_STATUS_WAITING_CARD_REMOVAL`
`EFT_PP_STATUS_TIP_INPUT`
`EFT_PP_STATUS_SHARED_SECRET_INVALID`
`EFT_PP_STATUS_SHARED_SECRET_AUTH`
`EFT_PP_STATUS_WAITING_SIGNATURE`
`EFT_PP_STATUS_CONNECTING`
`EFT_PP_STATUS_SENDING`
`EFT_PP_STATUS_RECEIVEING`
`EFT_PP_STATUS_DISCONNECTING`
`EFT_PP_STATUS_PIN_INPUT_COMPLETED`
`EFT_PP_STATUS_POS_CANCELLED`
`EFT_PP_STATUS_REQUEST_INVALID`
`EFT_PP_STATUS_CARD_CANCELLED`
`EFT_PP_STATUS_CARD_BLOCKED`
`EFT_PP_STATUS_REQUEST_AUTH_TIMEOUT`
`EFT_PP_STATUS_REQUEST_PAYMENT_TIMEOUT`
`EFT_PP_STATUS_RESPONSE_AUTH_TIMEOUT`
`EFT_PP_STATUS_RESPONSE_PAYMENT_TIMEOUT`
`EFT_PP_STATUS_ICC_CARD_SWIPED`
`EFT_PP_STATUS_REMOVE_CARD`
`EFT_PP_STATUS_SCANNER_IS_NOT_SUPPORTED`
`EFT_PP_STATUS_SCANNER_EVENT`
`EFT_PP_STATUS_BATTERY_TOO_LOW`
`EFT_PP_STATUS_ACCOUNT_TYPE_SELECTION`
`EFT_PP_STATUS_BT_IS_NOT_SUPPORTED`
`EFT_PP_STATUS_PAYMENT_CODE_SELECTION`
`EFT_PP_STATUS_PARTIAL_APPROVAL`
`EFT_PP_STATUS_AMOUNT_DUE_VALIDATION`
`EFT_PP_STATUS_INVALID_URL`
`EFT_PP_STATUS_WAITING_CUSTOMER_RECEIPT`
`EFT_PP_STATUS_PRINTING_MERCHANT_RECEIPT`
`EFT_PP_STATUS_PRINTING_CUSTOMER_RECEIPT`
`EFT_PP_STATUS_WAITING_HOST_MSG_TO_HOST`
`EFT_PP_STATUS_WAITING_HOST_MSG_RESP`
`EFT_PP_STATUS_INITIALISATION_COMPLETE`


## Status strings{#45}	

`Status as NSString`

An NSString containing the status message - can be one of the following:
	
## Possible values

`Success`
`Invalid data`
`Processing error`
`Not allowed`
`Not initialized`
`Connect timeout`
`Connect error`
`Sending error`
`Receiveing error`
`No data available`
`Transaction not allowed`
`Unsupported currency`
`No host available`
`Card reader error`
`Card reading failed`
`Invalid card`
`Input timeout`
`User cancelled`
`Invalid signature`
`Waiting card`
`Card inserted`
`Application selection`
`Application confirmation`
`Amount validation`
`PIN input`
`Manual card input`
`Waiting card removal`
`Tip input`
`Shared secret invalid`
`Connecting`
`Sending`
`Receiving`
`Disconnecting`
`PIN entry completed`
`Merchant cancelled the transaction`
`Request invalid`
`Card cancelled the transaction`
`Blocked card`
`Request for authorisation timed out`
`Request for payment timed out`
`Response to authorisation request timed out`
`Response to payment request timed out`
`Please insert card in chip reader`
`Remove the card from the reader`
`This device does not have a scanner`
`Scanner is not supported`
`Scanner event`

## Process details

The following table contains result codes that can occur in the COMMAND response STATUS field (see section 1.3 above).

In addition the following table contains the text information presented in the StatusMessage field that is part of the FinancialTransactionResponse Xml response object.

All values are in hex in the following table.

| Status ID	      | Value 	|		StatusMessage| 	Details	|
| ----------- | ----------- |----------- | ----------- |
| EFT_SUCCESS   | 0001| One of the following: "" (an empty string) "AUTH CODE #" "REFUND ACCEPTED" "REVERSAL ACCEPTED"|Operation completed successfully. No further actions required.|
| EFT_INVALID_DATA   | 0002|"Invalid data"|Invalid COMMAND request object, from the POS App, at the start of an operation. Please retry the operation. If the issue persists please contact technical support and provide card reader logs.|
|EFT_PROCESSING_ERROR	|0003|	"Processing error"|	An unexpected error occurred during processing. Please retry the operation. If the issue persists please contact technical support and provide card reader logs.|
|EFT_COMMAND_NOT_ALLOWED|	0004|	"Command not allowed"|	The card reader is currently busy processing another command. Please retry the operation once the current operation has completed.||
|EFT_NOT_INITIALISED	|0005	|"Device is not initialized"|	The current operation can’t be completed because there is a pending software update that must be applied before processing can continue. Please retry the operation after the card reader has restarted itself.|
|EFT_CONNECT_TIMEOUT	|0006	|"Connection time out detected"|	The back end connection timed out during an update. Please retry the operation. If the issue persists please contact technical support and provide card reader logs.|
|EFT_CONNECT_ERROR	|0007	|"Connection error"	|It was not possible to establish a connection to the back end system during an update operation. Please retry the operation. If the issue persists please contact technical support and provide card reader logs.|
|EFT_SENDING_ERROR	|0008	|"Send error"	|A failure was detected during communication with the back end system. If a SALE or a REFUND transaction was in progress when this occurred then you MUST contact technical support and verify whether the transaction went through or not. If you fail to do so then you may be liable for any costs incurred due to any double charges. Note: You may be asked to provide the card reader logs. Once verified please retry the operation.|
|EFT_RECEIVING_ERROR	|0009|	"Receiving error"|	A failure was detected during communication with the back end system. If a SALE or a REFUND transaction was in progress when this occurred then you MUST contact technical support and verify whether the transaction went through or not. If you fail to do so then you may be liable for any costs incurred due to any double charges. Note: You may be asked to provide the card reader logs. Once verified please retry the operation.|
|EFT_NO_DATA_AVAILABLE	|000A|	"No data available"|	The POS App is trying to fetch the card reader log file but there is no data stored in the log file. If logs are required then please set the log level to an appropriate value and retry the operation.|
|EFT_TRANS_NOT_ALLOWED	|000B|	"Transaction not allowed"|	`Currently not used`|
|EFT_UNSUPPORTED_CURRENCY|	000C|	"Currency not supported"|	A currency has been selected that the card reader has not been configured for. Please select the correct currency and retry the operation. Alternatively, please contact technical support and ask for the specific currency to be supported.|
|EFT_NO_HOST_AVAILABLE|	000D	|"No host configuration found"|	An update was initiated but the card reader could not find any host information for the back end system, even though it otherwise contains valid configuration. This is indicative of an invalid `hostBlock` block with in the `HostList` block in this device configuration, which was placed on the card reader during a previous update. Please contact technical support and provide card reader logs and ask for a replacement device. The card reader will be unable to update itself and must be replaced.|
|EFT_CARD_READER_ERROR	|000E	|"Card reader error"|	Error detected in the chip reader or the magnetic stripe reader. Please retry the operation. If the issue persists please contact technical support and provide them with the card reader logs as well as asking for a replacement reader.|
|EFT_CARD_READING_FAILED|	000F|	"Failed to read card data"|	The card reader could not read any data from the card. Please retry the operation. If the issue persists the card may be faulty, please try another card. If the issue still persists the card reader may require replacement, please contact technical support.|
|EFT_INVALID_CARD	|0010	|"INVALID CARD"	|The card reader detected invalid card data. Please retry the operation. If the issue persists the card may be faulty, please try another card. If the issue still persists the card reader may require replacement, please contact technical support.|
|EFT_INPUT_TIMEOUT	|0011|	"Timeout waiting for user input"|	The card reader timed out while waiting for a user action. No further actions required.|
|EFT_USER_CANCELLED	|0012|	"TRANSACTION VOID" "User cancelled the transaction"	|The current operation was cancelled by card holder. No further actions required.|
|EFT_SHARED_SECRET_INVALID|	001D|	"Shared Secret invalid"|	The card reader believes that the POS App has an incorrect shared secret. No financial operations will be possible (e.g. SALE, REFUND). Please type the correct shared secret into the POS App or contact technical support for further assistance.|
|EFT_SHARED_SECRET_AUTH	|001E	|"Authenticating POS"|	The card reader is about to challenge the POS App for a correct shared secret. No further actions are required.|
 | REPORT STATUS SPECIFIC|
|EFT_INVALID_SIGNATURE	|0013|	"TRANSACTION VOID"|	The merchant indicated that the signature provided by the card holder was invalid. No further actions are required.|
|EFT_WAITING_CARD	|0014|	"Waiting for card"	|The card reader is waiting for a card to be inserted into the chip reader or for a card to be swiped (only applies to card readers with external MSR). Insert or swipe a card to continue with the transaction.|
|EFT_CARD_INSERTED	|0015|	"Card detected"	|`Currently not used`|
|EFT_APPLICATION_SELECTION	|0016|	"Waiting for application selection"	|The card reader is waiting for the card holder to select a card application to be used for the transaction. The card holder must select an application for use (e.g. VISA, MASTERCARD, etc.) and should then press either the OK button to continue. Press the C/Cancel button to abort the transaction.|
|EFT_APPLICATION_CONFIRMATION|	0017|	"Waiting for application confirmation"|	The card reader is waiting for the card holder to confirm that the displayed card application should be used for the transaction. The card holder should press either the OK or the C/Cancel button.|
|EFT_AMOUNT_VALIDATION|	0018	|"Waiting for amount validation"|	The card reader is waiting for the card holder to confirm that the amount presented is correct. The card holder should press either the OK or the C/Cancel button.|
|EFT_PIN_INPUT	|0019|	"Waiting for PIN entry"|	The card reader is waiting for the card holder to enter his/her PIN. The card holder should enter his PIN and then press the OK button to continue. For PIN bypass press the OK button without entering any PIN digits (this will trigger signature fallback). Press the C/Cancel button to abort the transaction. Note: It is not possible to cancel this operation from the POS App.|
|EFT_MANUAL_CARD_INPUT	|001A|	"Waiting for manual card data"|	`Currently not used`|
|EFT_WAITING_CARD_REMOVAL|	001B|	"Waiting for card removal"|	A card was detected in the card reader at the start of a transaction, presumably left there from a previous transaction. Please remove the card and restart the operation.|
|EFT_TIP_INPUT	|001C|	"Waiting for gratuity"	|The card reader is waiting for the card holder to enter/confirm tip/gratuity information.|
|EFT_WAITING_SIGNATURE	|001F|	"Waiting for signature"	|The card reader is waiting for confirmation from the merchant that the card holder signature is valid. The merchant should press either the Accepted or Declined/Cancel in the POS App. Pressing Cancel or OK on the card reader will not have any effect.|
|EFT_WAITING_HOST_CONNECT	|0020|	"Connecting to host"|	The card reader is establishing a connection to the back end system. No further actions are required.|
|EFT_WAITING_HOST_SEND|	0021	|"Sending data to host"	|The card reader is sending data to the back end system. No further actions are required.|
|EFT_WAITING_HOST_RECEIVE|	0022|	"Waiting for data from host"	|The card reader is waiting for data from to the back end system. No further actions are required.|
|EFT_WAITING_HOST_DISCONNECT|	0023|	"Disconnecting from host"|	The card reader is disconnecting from the back end system. No further actions are required.|
|EFT_PIN_INPUT_COMPLETED|	0024|	"PIN entry completed"|	PIN entry has been completed. No further actions required.|
|EFT_POS_CANCELLED	|0025|	"TRANSACTION VOID"	|The current operation was cancelled by merchant. No further actions required.|
|EFT_REQUEST_INVALID|	0026|	"Request invalid"|	Card not allowed with this transaction type.|
|EFT_CARD_CANCELLED	|0027|	"TRANSACTION VOID"|	The chip on the card cancelled the transaction. No further actions required.|
|EFT_CARD_BLOCKED	|0028|	|"CARD BLOCKED"	|The card used in the transaction is blocked. Please retry the transaction with a non-blocked card.|
|EFT_REQUEST_AUTH_TIMEOUT	|0029|	"Request for authorisation timed out"|	Indicates that the card reader detected a communication failure between itself and the back end system during the authorization phase. Please make sure the phone/pc has an internet connection and then retry the operation. If the problem persists then please contact technical support. Note: You may be asked to provide the card reader logs.|
|EFT_REQUEST_PAYMENT_TIMEOUT|	002A|	"Request for payment timed out"	|Indicates that the card reader detected a communication failure between itself and the back end system during the payments phase. Please make sure the phone/pc has an internet connection and then retry the operation. If the problem persists then please contact technical support. Note: You may be asked to provide the card reader logs.|
|EFT_RESPONSE_AUTH_TIMEOUT	|002B|	"Response to authorisation request timed out"	|Indicates that the card reader detected a communication failure between itself and the back end system during the authorization phase. Please make sure the phone/pc has an internet connection and then retry the operation. If the problem persists then please contact technical support. Note: You may be asked to provide the card reader logs.|
|EFT_RESPONSE_PAYMENT_TIMEOUT|	002C|	"Response to payment request timed out"	|Indicates that the card reader detected a communication failure between itself and the back end system during the payments phase. You MUST contact technical support and verify whether the transaction went through or not. If you fail to do so then you may be liable for any costs incurred due to any double charges.   Note: You may be asked to provide the card reader logs. Once you have verified that the transaction did not go through then please make sure the phone/pc has an internet connection and then retry the operation.|
|EFT_ICC_CARD_SWIPED|	002D|	"Please insert card in chip reader"	|`Currently not used`|
|EFT_REMOVE_CARD	|002E|	"Remove the card from the reader"	|`Currently not used`|
|EFT_SCANNER_IS_NOT_SUPPORTED|	002F|	"This device does not have a scanner"	|Bar-code scanner hardware is not present on this card reader. No further actions are required.|
|EFT_SCANNER_EVENT|	0030|	""	|Bar-code data was just read with the bar-code scanner and returned to the POS App. No further actions are required.|
|EFT_BATTERY_TOO_LOW|	0031|	"Operation cancelled, the battery is too low. Please charge."|	An operation was started, but the battery charge level is too low to complete the operation. Please recharge the card reader.|
|EFT_ACCOUNT_TYPE_SELECTION|	0032|	"Waiting for account type selection"|	The card reader is waiting for the card holder to choose an account type for the transaction (i.e. default, credit, cheque/debit or savings).|