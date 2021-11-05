---
sidebar_position: 3
id: iosmigration
---




# Migration from 3.X


:::tip
Version 4.0.0 introduces a well defined, typed, way of passing extra values, options, parameters or flags to the financial transactions.
:::


We have unified all the extra and optional parameters in an Options object. Different operations have different options.

**1. For a [Sale](iostransactions.md#2) or [Sale and Tokenize operation](iostransactions.md#4) please see SaleOptions**<br />If you use a customer reference:

```
	SaleOptions *options = [SaleOptions new];
	options.customerReference = @"Your customer reference";
```                 

 
If you need Multi MID / Custom merchant Authentication:

   
````objectivec  
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
````

If you want to specify the budget period `Only available for SureSwipe`:

````objectivec  
options.divideByMonths = @"YOUR_BUDGET_NUMBER";
 ````

Finally:

````objectivec   
[self.api saleWithAmount:amount currency:currency options:options];
````    

   
**2. Similar to SaleOptions, but with less possible parameters, for a [Refund](iostransactions.md#5) operation, please see RefundOptions**<br />If you use a customer reference:
  
````objectivec
	SaleOptions *options = [SaleOptions new];
	options.customerReference = @"Your customer reference";
````
    
If you need Multi MID / Custom merchant Authentication:

````objectivec
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
````                       
Finally:

```objectivec
[self.api refundWithAmount:amount currency:currency transaction:originalTransactionID options:options];
```             

**3. For the rest of operations, please see Options**<br />If you use a customer reference:

```objectivec
options.customerReference = @"Your customer reference";
```