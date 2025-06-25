---
sidebar_position: 8
id: iostransactions
---



# Transaction Types

## Sale{#2}

`saleWithAmount` <span class="badge badge--info">Method</span>

A sale initiates a payment operation to the card reader. In it's simplest form you only have to pass the **amount** and **currency** but it also accepts a map with optional parameters.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*NSInteger*   | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency ` <span class="badge badge--primary">Required</span> <br />*NSString*     | 3 letter currency code in accordance to ISO4217|
| `options` <br />*SaleOptions*      | An object to store all the customization options for a sale.|

**Code example**

````objectivec
//If you just need a plain vanilla sale:
[api saleWithAmount:100
           currency:Currency.EUR.alpha];

//But you can customize your sale:
SaleOptions *options = [SaleOptions new];
//Optionally
options.customerReference = @"Your customer reference";
//If you need Multi MID / Custom merchant Authentication:
MerchantAuth *auth = [MerchantAuth new];
Credential *cred = [Credential new];
//Optionally
cred.acquirer = [Credential getAcquirerFromString:@"acquirer"];
//Optionally
cred.mid = @"mid";
//Optionally
cred.tid = @"tid";
//Add as many credentials as Acquirers your merchant have agreements with
[auth add:cred];
options.merchantAuth = auth;
//If you want to specify the budget period
//Only available for SureSwipe/Altech
//Here it's 3 months
options.divideByMonths = @"3";

[api saleWithAmount:100
           currency:Currency.EUR.alpha
            options:options];
````			

**Events invoked**

[**responseStatus**](iosevents.md#14)

Invoked during a transaction with different statuses from the payment terminal.
***
[**responseError**](iosevents.md#15)

Invoked when an error response happens.
***
[**requestSignature**](iosevents.md#17)

Invoked if card verification requires signature.
***
[**responseFinanceStatus **](iosevents.md#16)

Invoked when the payment terminal finishes processing the transaction.
***


**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `YES` if operation starts successfully.|

## Sale And Tokenize Card{#4}

`saleAndTokenizeCardWithAmount` <span class="badge badge--info">Method</span>

A sale and tokenize operation initiates a payment operation with the payment terminal.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*NSInteger*     | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />*NSString*     | 3 letter currency code in accordance to ISO4217|
| `options` <br />*SaleOptions*   | An object to store all the customization options for a sale.|

**Code example**

````objectivec
//If you just need a plain vanilla sale tokenization:
[api saleAndTokenizeWithAmount:100
                      currency:Currency.EUR.alpha];

//But you can customize your sale:
SaleOptions *options = [SaleOptions new];
//Optionally
options.customerReference = @"Your customer reference";
//If you need Multi MID / Custom merchant Authentication:
MerchantAuth *auth = [MerchantAuth new];
Credential *cred = [Credential new];
//Optionally
cred.acquirer = [Credential getAcquirerFromString:@"acquirer"];
//Optionally
cred.mid = @"mid";
//Optionally
cred.tid = @"tid";
//Add as many credentials as Acquirers your merchant have agreements with
[auth add:cred];
options.merchantAuth = auth;
//If you want to specify the budget period
//Only available for SureSwipe/Altech
//Here it's 3 months
options.divideByMonths = @"3";

[api saleAndTokenizeWithAmount:100
                      currency:Currency.EUR.alpha
                       options:options];
````

**Events invoked**

[**responseStatus**](iosevents.md#14)

Invoked during a transaction with different statuses from the payment terminal.
***

[**responseError**](iosevents.md#15)

Invoked when an error response happens.
***

[**requestSignature**](iosevents.md#17)

Invoked if card verification requires signature.
***

[**responseFinanceStatus**](iosevents.md#16)

Invoked when the payment terminal finishes processing the transaction.
***


**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `YES` if operation starts successfully.|

## Sale Reversal{#3}

`saleVoidWithAmount` <span class="badge badge--info">Method</span>

Request a void of a previous sale transaction. Amount, currency and transactionID of the original sale must be sent as parameters. This operation reverts (if possible) a specific sale identified with a transaction id. Note that transactions can only be reversed the same day as when the transaction was made.

**Parameters**


| Parameter        | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*NSInteger*     | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />*NSString*    | 3 letter currency code in accordance to ISO4217 |
| `transaction` <span class="badge badge--primary">Required</span> <br/> *NSString*   | TransactionID of the sale transaction to be voided |
| `options` <br />*Options*     | An object to store all the customization options for this operation.|

**Code example**

```objectivec
//If you just need a plain vanilla sale reversal:
[api saleReversalWithAmount:100
                   currency:Currency.EUR.alpha
              transactionId:originalTransactionID
                    options:options];

//But you can customize your reversal:
Options *options = [Options new];
//Optionally
options.customerReference = @"Your customer reference";

[api saleReversalWithAmount:100
                   currency:Currency.EUR.alpha
              transactionId:@"00000000-0000-0000-0000-000000000000"
                    options:options];
```

**Events invoked**

[**responseStatus**](iosevents.md#14)

Invoked during a transaction with different statuses from the payment terminal.
***
[**responseError **](iosevents.md#15)

Invoked when an error response happens.
***
[**responseFinanceStatus**](iosevents.md#16)

Invoked when the payment terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `YES` if operation starts successfully.|

## Refund{#5}

`refundWithAmount` <span class="badge badge--info">Method</span>

A refund initiates a refund operation with the payment terminal. This operation moves funds from the merchant account to the cardholder's card.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*NSInteger*    | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />*NSString*     | Currency of the charge|
| `transaction` <span class="badge badge--primary">Required</span> <br />*NSString*     | If present it links the refund with a previous sale. It effectively limits the maximum amount refunded to that of the original transaction.|
| `options` <br />*MerchantAuthOptions*    | An object to store all the customization options for a refund.|

**Code example**

````objectivec
//If you just need a plain vanilla refund:
[api refundWithAmount:100
		     currency:Currency.EUR.alpha
		  transaction:@"00000000-0000-0000-0000-000000000000"];

//But you can customize your sale:
MerchantAuthOptions *options = [MerchantAuthOptions new];
//Optionally
options.customerReference = @"Your customer reference";
//If you need Multi MID / Custom merchant Authentication:
MerchantAuth *auth = [MerchantAuth new];
Credential *cred = [Credential new];
//Optionally
cred.acquirer = [Credential getAcquirerFromString:@"acquirer"];
//Optionally
cred.mid = @"mid";
//Optionally
cred.tid = @"tid";
//Add as many credentials as Acquirers your merchant have agreements with
[auth add:cred];
options.merchantAuth = auth;

[api refundWithAmount:100
		     currency:Currency.EUR.alpha
		  transaction:@"00000000-0000-0000-0000-000000000000"
			  options:options];
````

** Events invoked**

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
| `Boolean`| `YES` if operation starts successfully.|


## Refund reversal{#6}

`refundVoidWithAmount` <span class="badge badge--info">Method</span>

Request a void of a previous refund transaction. Amount, currency and transactionID of the original refund must be sent as parameters. This operation reverts (if possible) a specific refund identified with a transaction id. Note that transactions can only be reversed the same day as when the transaction was made.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*NSInteger*     | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />*NSString*    | 3 letter currency code in accordance to ISO4217|
| `transaction` <span class="badge badge--primary">Required</span> <br />*NSString*     | TransactionID of the refund transaction to be voided|
| `options` <br />*Options*     | An object to store all the customization options for this operation.|

**Code example**

````objectivec
//If you just need a plain vanilla refund reversal:
[api refundReversalWithAmount:100
                    currency:Currency.EUR.alpha
               transactionId:originalTransactionID
                     options:options];

//But you can customize your sale:
Options *options = [Options new];
//Optionally
options.customerReference = @"Your customer reference";

[api refundReversalWithAmount:100
                     currency:Currency.EUR.alpha
                transactionId:@"00000000-0000-0000-0000-000000000000"
                      options:options];
````

** Events invoked**

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
| `Boolean`| `YES` if the operation was successfully sent to device.|

## Tokenize Card{#10}

`tokenizeCard` <span class="badge badge--info">Method</span>

Initiates a card tokenization operation with the payment terminal (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice).

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `reference` <span class="badge badge--primary">Required</span>  <br />*NSString*     | string for customer reference|


**Code example**

````objectivec
//Initiates a card tokenization operation.
[heftClient tokenizeCard];
````


** Events invoked**

[**responseStatus**](iosevents.md#14)

Invoked during a transaction with different statuses from the payment terminal.
***

[**responseError**](iosevents.md#15)

Invoked when an error response happens.

***

[**requestSignature**](iosevents.md#17)

Invoked if card verification requires signature.

***

[**responseRecoveredTransactionStatus**](iosevents.md#44)

Invoked when the card reader finishes processing the transaction.

***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `YES` if operation starts successfully.|

## Accept signature{#7}

`acceptSignature` <span class="badge badge--info">Method</span>

A [*requestSignature*](iosevents.md#17) event is invoked during a transaction if signature verification is needed. The merchant is required to ask the cardholder for signature and approve (or decline) the signature. signatureRequired lets the payment terminal know if the signature was approved (by passing YES to the function) or declined by the merchant (by passing NO to the function).

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `flag` <span class="badge badge--primary">Required</span>  <br />*Boolean*    | YES if signature is valid, NO otherwise|


**Code example**

````objectivec
//acceptSignature:
//Inform the card reader if signature is valid or not
-(IBAction)accept
{
	[heftClient acceptSignature:YES];
}
-(IBAction)decline
{
	[heftClient acceptSignature:NO];
}
````

** Events invoked**

[**responseStatus**](iosevents.md#14)

Invoked during a transaction with different statuses from the payment terminal.
***

[**responseError**](iosevents.md#15)

Invoked when an error response happens.
***

[**responseFinanceStatus**](iosevents.md#16)

Invoked when the payment terminal finishes processing the transaction.
***

## Retrieve Pending Transaction{#8}

`retrievePendingTransaction` <span class="badge badge--info">Method</span>

Retrieving a pending transaction fetches a transaction result that was lost due to an unexpected disconnection between the payment terminal and the associated application.

**Code example**

````objectivec
//retrievePendingTransaction:
//Called when a pending transaction is discovered upon connecting to a specific card reader
- (void)didConnect:(id<HeftClient>)client{
	heftClient = client;

	if(heftClient){
		if([heftClient isTransactionResultPending] == YES) {
			// a pending transaction has been detected ...
			// ... so, lets get it
			[heftClient retrievePendingTransaction];
		}
	}
}
````

** Events invoked**

[**responseStatus**](iosevents.md#14)

Invoked during a transaction with different statuses from the payment terminal.
***

[**responseError**](iosevents.md#15)

Invoked when an error response happens.
***

[**responseRecoveredTransactionStatus**](iosevents.md#44)

Invoked when the card reader has returned a recovered transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `YES` if operation starts successfully.|

<br></br>

**Notes**

***On starting a new transaction***

If a new transaction is started without fetching first a pending transaction result, then the pending transaction result will be discarded.
***

***User notifications while a transaction result is pending***

The payment terminal will not give any visible indication that a transaction result is pending.
***

***User notifications when fetching a pending transaction result***

The payment terminal will briefly display a message when a pending transaction result is recovered.
***

## Tip Adjustment{#9}

`tipAdjustment` <span class="badge badge--info">Method</span>

A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day.
The tip adjustment method does not rely on a card reader and is therefore a separate method that must be initialized with a shared secret. The function is defined in the file HapiRemoteService.h
Note: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV. This functionality is limited to HiLite terminals.


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `tipAmount` <span class="badge badge--primary">Required</span>  <br />*NSInteger*     | Tip amount added to the original (base) transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `transaction` <span class="badge badge--primary">Required</span> <br />*NSString*   | TransactionID (GUID) of the original sale transaction to be adjusted|


**Code example**

````objectivec
//First, you need to include the following dependency
#include "HapiRemoteService.h"

//Second, the shared secret needs to be initialized
NSString* shared_secret = @"0102030405060708091011121314151617181920212223242526272829303132";
BOOL result = setupHandpointApiConnection(shared_secret);

//Third, you need to retrieve the unique transaction id of the original sale transaction you want to adjust. The below GUID is only an example and will result in a decline from the host if used for tip adjustment
NSString* transaction = @"d50af540-a1b0-11e6-85e6-07b2a5f091ec";

//Fourth, let's tip adjust a transaction for $10.00!
-(IBAction)tipAdjustment:(UIButton*) sender
{
	BOOL result = tipAdjustment(transaction, 1000, ^(TipAdjustmentStatus status)
	{
		if(status == TipAdjustmentAuthorised) {

			//Successfully adjusted!

		}

		else if(status == TipAdjustmentDeclined) {

			//Declined!

		}

		else if(status == TipAdjustmentFailed) {

			//Timeout!

		}
	});
}
````

**Returns**

Result of the tip adjustment transaction, possible values :

| Parameter      | Notes |
| ----------- | ----------- |
| **status**| - **TipAdjustmentAuthorised** (tip adjustment approved by the processor) <br />- **TipAdjustmentFailed** (system error or timeout) <br /> - **TipAdjustmentDeclined** (tip adjustment declined by the processor)|





If two tip adjustments are sent for the same sale transaction, the second tip adjustment will override the first one. In case the transaction fails (not declined) we recommend that you prompt the user of the POS to retry the adjustment.
