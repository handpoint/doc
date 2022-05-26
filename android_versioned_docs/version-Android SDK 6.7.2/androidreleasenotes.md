---
sidebar_position: 2
id: androidreleasenotes
---



# Release Notes

:::tip
Do not miss any news from Handpoint releases. [Subscribe](https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e) to our Handpoint Newsletter!
:::

## 6.7.2

**Fixes**:
- `requestedAmount` fix
- Cloud sync when assigning device from one merchant to another (SSK)
- Retry token and config download if missing for MoTo trasnactions


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
- Deadman mechanism for not completed trx. App dies in the middle of a trx, will be auto cancelled in the restart.

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
