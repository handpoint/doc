## v7.1013.0

### New Features

- **Deferred Card Tokenization** — New `deferredTokenization(originalTransactionID)` method. Allows tokenization of a card after the original card-present transaction has completed, using the transaction ID from the original result. Eligible source transaction types: `sale`, `refund`, `preAuthorizationCapture`, `moToSale`, `moToRefund`.

  ```java
  // Retrieve the EFTTransactionID from the original TransactionResult
  String originalTransactionID = transactionResult.getEFTTransactionID();

  // Tokenize without requiring the card to be presented again
  api.deferredTokenization(originalTransactionID);

  // The card token is returned via the endOfTransaction event in TransactionResult.cardToken
  ```
- **MOTO duplicate check** — Duplicate transaction detection is now applied to MOTO operations, preventing accidental double-charges on repeated requests.
- **MOTO partial approval** — MOTO transactions now correctly handle partial approval responses from the issuer.
- **`NO_CURRENT_TRANSACTION_TO_CANCEL` status** — `stopCurrentTransaction()` now returns this specific status when called with no transaction in progress, making it easier to handle the idle-state case.

### Improvements

- **MoTo Sale status recovery** — MoTo Sale transactions that return an UNDEFINED result can now recover the approved result via the Get Transaction Status service. Previously, MoTo Sale did not include a `transactionReference`, making status recovery impossible.

### Bug Fixes

- **Pre-authorization reversal amount** — Fixed an issue where the reversal amount for pre-authorization operations was not correctly calculated in certain acquirer configurations.
