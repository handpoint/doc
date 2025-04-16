---
sidebar_position: 2
id: androidreleasenotes
---



# Release Notes

:::tip
Do not miss any news from Handpoint releases. [Subscribe](https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e) to our Handpoint Newsletter!
:::

## 7.1008.4
**Fixes**:

- Several minor stability issues have been fixed 


## 7.1008.3
**Features**:

- In account type selection, the order is first "Credit" and then "Debit" now.

**Fixes**:

- An issue with the remove card event has been addressed


## 7.1008.1
**Fixes**:

- Several certification issues have been addressed


## 7.1008.0
**Features**:

- Brightness level control is offered as a public method now

- Internal payments libraries of PAX devices have been updated

**Fixes**:

- Some EMV related issues have been solved

- Volume controls were accessible during payment signature screen in some use cases where the shouldn't


## 7.1006.3
**Fixes**:

- Signature was missing in receipts in some use cases


## 7.1006.2
**Fixes**:

- Several minor stability issues have been fixed 


## 7.1006.1
**Fixes**:

- Fix for language selection menu (only for Interac cards)


## 7.1006.0
**Features**:

- The "kiosk mode" command has been renamed to "unattended mode"

- Now just "CARD" in shown in receipts when the card brand is not in the language library

**Fixes**:

- Tokenize and Modify: A second "remove card" was being displayed after providing phone number

- Some EMV related issues have been solved


## 7.1005.4
**Fixes**:

- The RRN was missing in the ReceiptDataKeeper object 


## 7.1005.3
**Fixes**:

- Several minor stability issues have been fixed 


## 7.1005.2
**Fixes**:

- Operations with 0 amount and/or tip supported

- Receipt uploaded event's behavior has been fixed

- Transactions corrections

- Minor fixes in tokenization


## 7.1005.1
**Fixes**:

- Several minor stability issues have been fixed


## 7.1005.0
**Features**:

- Speed improvements: We're excited to announce the release of Handpoint Android SDK version **7.1005.0**, focused on delivering significant improvements in transaction processing speeds. This update empowers your app to handle transactions quicker and more efficiently, enhancing the overall user experience for your customers.

- Enhanced Cloud Mode Performance: Cloud initialization will now be faster, leading to quicker overall transaction processing. Cloud transactions will benefit from these optimizations as well.

:::caution
**Cloud Mode** users: There might be a short delay in accessing your receipt after a transaction is completed in Cloud Mode. While the transaction itself will process successfully, the receipt URL you receive might return a 404 error message for a few seconds after the transaction finishes.
:::

## 7.1004.2
**Features**:

Automatic Refunds. These new methods empowers users to seamlessly process refunds without the need for any physical card or card details.

- [Automatic Refund](androidtransactions.md#automatic-refund), users can effortlessly initiate a refund transaction without requiring the cardholder to dip, tap, or swipe their card.  Users only need to pass the Original Transaction ID (GUID) to the Automatic Refund function. The system will automatically process the refund, and the refunded amount will mirror the original sale amount, simplifying the entire refund process.


- [Automatic Partial Refunds](androidtransactions.md#automatic-partial-refund). This operation allows you to PARTIALLY refund a card automatically without requiring the cardholder to dip/tap/swipe his card. In its simplest form you only have to pass the amount, currency and the Original Transaction ID (GUID).


 By eliminating the need for physical card involvement, Automatic Refund streamlines the refund process, saving time for both merchants and customers. This efficiency boost enhances overall transaction management, contributing to a more seamless and customer-centric experience.


**Fixes**:

- Inconsistency when formatting currencies using Slovenian as the locale.


## 7.1004.1
**Features**:

We're excited to announce the latest update to our Android SDK, featuring support of Mastercard MoneySend fields for money remittance merchants. In order to use this functionality, we provide you with an object called [Money Remittance Options](androidobjects.md#money-remittance-options) which must be sent for all Mastercard transactions.

The supported operations are Sale, Sale & Tokenize, Refund, Linked Refunds, Reversals, MoTo Sale, MoTo Refund. For Linked Refunds and Reversals, Money Remittance fields should be taken from the original Sale/MoTo/Refund when using the field `originalTransactionID`.

***Please note**: Money Remittance is available only for some acquirers and geographies. Please check with your Handpoint relationship manager about the availability of this functionality for your merchants.

## 7.1004.0
**Features**:

We are introducing a new transaction type called [Pre-Authorization](androidtransactions.md#pre-auth). A pre-authorization charge, also known as a pre-auth or authorization hold, is a temporary hold placed on a customer's payment card. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront. 

A pre-authorized transaction can be increased or decreased ([Pre-Auth Increase](androidtransactions.md#pre-auth-increasedecrease)), for example if a tab was opened and the consumer is adding new orders going above the initial pre-authorized amount.  

A pre-authorized transaction can be captured ([Pre-Auth Capture](androidtransactions.md#pre-auth-capture)) to actually debit the cardholder's account. Depending on the merchant category code, the capture needs to happen between 7 and 31 days after the original pre-authorization. If not captured the funds will be automatically released by the issuing bank. 

A pre-authorized transaction can be fully released ([Pre-Auth Reversal](androidtransactions.md#pre-authcapture-reversal)), for example when renting a car, the pre-auth reversal allows the merchant to release the funds if the car was not damaged

We are also introducing the [Tokenize And Modify](androidtransactions.md#tokenize-and-modify) operation. A tokenize and modify operation allows you to start a financial operation for an initial amount, tokenize the card being dipped/tapped/swiped and modify the amount before the transaction is sent for processing. This feature allows you to bring your own loyalty engine and apply for example an instant discount at the point of sale for loyal customers.  


## 7.1002.0
**Features**:

We are introducing a new feature called [Get Transaction Status](androiddevicemanagement.md#getTransactionStatus). This new feature allows you to query the Handpoint Gateway for the status of a transaction at any given time. For example, in case of an app crash, timeout, or connection problem, you are now able to use the [transaction reference](androidobjects.md#OperationStartResult) returned at the start of a financial operation to get the status of a transaction in real time. You can use this feature to track the progress of your payments and troubleshoot any issues that may arise. This feature is available for all payment methods and currencies.

- Cloud integrations: A new parameter called `transactionReference` has been added to the [transactionStarted](androideventlisteners.md#transactionStarted) method. This means that when implementing this method in a class, you need to update the method signature to include the new parameter.

Added Estonian language 🇪🇪


## 7.1001.0
**Features**:

 We are introducing a new feature called [Transaction Metadata](androidobjects.md#metadata). This new feature helps the customer to persist and echo back some data that belongs to the customer business domain at transaction time. The Transaction Metadata is sent in the request and echoed back in the response from the gateway. In addition, customers will be able to use the Transaction Metadata to search matching transactions from our Transaction Feed API.*****

The Transaction Metadata feature will be available when the Handpoint Android SDK **v7.1001.0** or higher is used. 

***Please note**: Transactions will be available in TXN Feed API only if the request has reached the gateway.

- German language support.
- Support for PAX A800 devices.

**Fixes**:
- Bug related to automatic printing.
- Log improvements.

## 7.0.2

**Features**:
- Norwegian and Italian language support.

**Fixes**:
- Card reader capabilities identification.
- Kiosk mode management.
- Log improvements for support purposes.

## 7.0.1
 
- Removed the `Events.Required` interface and divided it into [3 different interfaces](androidmigrationguide.md#1-new-integration-interfaces)
- All [financial operations](androidmigrationguide.md#3) will now be returning an [OperationStartResult](androidobjects.md#operation-start-result) object instead of a boolean to indicate that the operation was successfully sent to the payment terminal.
- Introducing a new feature called **duplicate payment check**. 
- The `deviceCapabilities` event has been renamed to `supportedCardBrands`
- For more information please check our [migration guide](androidmigrationguide.md).

## 6.7.4

- `customerReference` correctly populated when card is removed in the middle of a transaction
- MOTO: Correct handling of expired access and refresh tokens
- CLOUD: Channel connection/subscription handling

## 6.7.3

**Fixes**:
- MOTO: Linked Refund only with GUID.
- Correctly populated transaction result the `originalEFTTransactionID` on Linked Refunds.
- Correctly populated on transaction result amounts on "Already reversed" operations.
- Crashes identified in the field.


## 6.7.2

**Fixes**:
- MOTO: Retry token and configuration download if missing for MoTo transactions
- CLOUD: device status moving terminals between merchants.
- CLOUD: REST-API transaction result delivery.
- `requestedAmount` field in Transaction Result correctly populated.


## 6.7.0

**Features**
- A35 support added
- Swedish language support
- Field customerReference added to TransactionResult

**Fixes**:
- Cloud client shows "Unable to process your request" while the request reach the device
- Contactless card tokenization fixed
- CVM fixed in receipts for MOTO transactions
- Amount fields are now populated in case of FAILURE and DECLINE
- Interact/AMEX certification fixes
- Fix minor issues and app crashes

## 6.6.7
**Fixes**:
- SCA scenarios on PAX A80
- CLOUD: receipt printing
- Deadman mechanism for not completed trx. App dies in the middle of a trx, will be auto cancelled in the restart

## 6.6.3

**Fixes**:
- DATECS: Stop reconnection loop on api.disconnect()

## 6.6.0

**Features**:
 - MoTo (Mail Order Telephone Order)

**Fixes**:
 - CLOUD: Connection stability.
 - AID parsing for Discover cards.
 - PIN input on physical keyboards.


## 6.5.0

**Features**:
 - Card brand display: 2 new events deviceCapabilities (supportedCardBrands) and readCard to show the supported card brands and card used during a transaction respectively.
 - Update webview for devices that do not support co-branding.

**Fixes**:
 - Correct handling of stopCurrentTransaction operation result for cloud operations.
 - Pin bypass for contactless transactions.
 - Automatic reconnection logic for android Datecs devices.

## 6.4.1

**Fixes**:
- Automatic Cancellation parameters.



## 6.4.0

**Features**:
- Populate operation timeout on CLOUD operations.
- Max attempts on Cancellation retries.
- Generic screen to show text messages.

**Fixes**:
- Base amount handling in TipDialog
- Cancellation service max retry window
- Verification method on transaction result object
- Correct population of MessageReasonCode
- Error message multi-language translation
- Cardholder name for contact operations
- Amount presentation in transactions report
- Analytics and Cloud services stability moving terminals between merchants

**Refactor**:

- Deprecated jcenter repository
- Improved structure of cryptography module
- Legacy code removal

## 6.3.0

 **Features**:

- Print Report v2.
- PAXA80 physical keyboard full support.
- Deadman mechanism for not completed trx.
- Addition of customer reference on transaction result for cancelled of timed out trx

**Fixes**:

- Certification scenarios.
- Unification of sdk dialogs styles.
- Card reading during tokenizations.
- Contactless light thread handling.
- Xml parsing.
- Printing html using uncommon characters.
- Monospace font for printing.
- SCA cases on contact.
- PAX A80 Pin bypass handling.
- Receipts for partial approvals.
- Correct message on empty config update.

 **Refactor**:

- Internal Emv Classes to improve performance.
***

## 6.2.2

**Fixes**:

- Compatibility issues with Android 11 devices.
- CLOUD: Improved logic to wake up device and start trx during device sleep mode.
***

## 6.2.1

**Fixes**:

- Improved bluetooth connection logic (Datecs)
***



## 6.2.0

**Features**:

- New Tip Dialog.
- Multi-mid Phase 2.
- Physical Keyboard PAX-A80.
- Visa debit US app selection.
- cardHolderName filed in Transaction Result object

**Fixes**:

- Temporarily block during consecutive operations (Datecs devices).
- Translations.
- Compatibility with Android 11.
***


## 6.1.1   

**Fixes**:

- Translations
***



## 6.1.0

**Features**:

- End of the day report.
- New printing framework.
- Transaction limit exceeds event.
- Multi-language in Status and End of Transaction → Transaction Result new fields: multiLanguageStatusMessages and multiLanguageErrorMessages.
- Support for MerchantAuth and Bypass options for Cloud + REST-API.

**Fixes**:

- Receipt adjustments for mobile wallets.
- Receipt adjustments for empty tags.
- Fields in TransactionResult.
- Contactless lights after card reading error.
- REST-API ACK.
- Translations
- Error handling prior connecting to device
