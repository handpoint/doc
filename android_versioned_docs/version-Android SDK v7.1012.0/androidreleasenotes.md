## v7.1012.0

### New Features

**Store and Forward (SAF)**
- Introduced Store and Forward (SAF) transaction support. When connectivity is unavailable, transactions are captured locally, stored securely, and forwarded to the Viscus backend when the connection is restored.
- Transactions stored in the SAF queue are hashed and ciphered before local persistence.
- Configurable limits are enforced per transaction and per card before a transaction is accepted into the SAF queue.
- SAF mode availability is validated at SDK initialization time; the SDK will not initialize in SAF mode if the merchant configuration does not permit it.
- Transaction date/time is included in all SAF submissions to the backend.

**Receipt Enhancements**
- PIN verification on receipts now correctly distinguishes between contactless and chip transactions.
- Receipts now indicate "PIN verified by device" when the CVM result confirms on-device PIN verification.
- When issuer scripts are received in the authorization response, the terminal now processes them and sets TSI bit 3 ("Script processing was performed") as required by the EMV specification.

**MoTo (Mail Order / Telephone Order)**
- `transactionReference` is now propagated through MoTo pre-authorization requests when provided via options.
- Transaction status responses now include the `transactionReference` field.

### Bug Fixes

- **AAC decline classification**: Transactions where the card returns an AAC (Application Authentication Cryptogram) in the first GAC are now correctly classified as `DECLINED` rather than `FAILED`.
- **Interac refunds**: Corrected an incorrect TTT (Transaction Type Tag) value being sent in Interac refund requests.
- **EMV tag 9F52**: Fixed an incorrect hardcoded value for EMV tag 9F52.
- **Amounts above transaction limit**: Terminals now correctly accept amounts above the configured transaction limit, which were previously blocked in error.
- **No AID match**: When no common AID is found between the ICC and the terminal, the terminal now displays a clear cardholder prompt ("Please insert, swipe, or try another card") rather than failing silently.
- **Cancellation amount reset**: Transaction amount is now correctly reset to zero when a dependant refund or reversal operation is cancelled, preventing stale amount data from affecting subsequent operations.
- **MAGSTRIPECONTACTLESS scenario**: The `isSwipe()` utility now correctly classifies `MAGSTRIPECONTACTLESS` as a swipe-based payment scenario.
- **Payment scenario version tag**: Fixed the SDK version tag value reported per payment scenario type.

### Data Model

- Added `transactionNature` field to the `DataStoreTransactionData` message.

### Internal Improvements

- Migrated transaction event handling across all payment flows (chip, contactless, magstripe, pre-authorization, refund, reversal, tokenization, card PAN) to a unified `SdkEventHandler` architecture, improving reliability and maintainability.
- `Hapi` is now expressed as an interface, enabling cleaner dependency injection and separation of Datecs/PAX device logic via a CQRS pattern.
- Updated native EMV, DPS, JNI Entry (v107 â†’ v109), and JNI MC (v101 â†’ v102) libraries.
- Upgraded Android Gradle Plugin to 8.11.0 and Gradle wrapper to 8.13.
