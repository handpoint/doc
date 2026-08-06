## v7.1013.0

### New Features

- **Deferred Card Tokenization** — New `deferredTokenization(originalTransactionID)` method. Allows tokenization of a card after the original card-present transaction has completed, using the transaction ID from the original result.
- **MOTO duplicate check** — Duplicate transaction detection is now applied to MOTO operations, preventing accidental double-charges on repeated requests.
- **MOTO partial approval** — MOTO transactions now correctly handle partial approval responses from the issuer.
- **`NO_CURRENT_TRANSACTION_TO_CANCEL` status** — `stopCurrentTransaction()` now returns this specific status when called with no transaction in progress, making it easier to handle the idle-state case.

### Bug Fixes

- **Pre-authorization reversal amount** — Fixed an issue where the reversal amount for pre-authorization operations was not correctly calculated in certain acquirer configurations.
- **MOTO UNDEFINED response** — Fixed an issue where MOTO transactions could return `UNDEFINED` finStatus in cases that should have returned a definitive result.
