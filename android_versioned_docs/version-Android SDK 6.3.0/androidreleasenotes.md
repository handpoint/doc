---
sidebar_position: 2
id: androidreleasenotes
---



# Release Notes

:::tip
Do not miss any news from Handpoint releases. [Subscribe](https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e) to our Handpoint Newsletter!
:::




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
