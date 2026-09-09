---
title: Glossary
sidebar_position: 2
description: Definitions for key terms used across Handpoint developer documentation — acquirers, identifiers, transaction lifecycle, and integration concepts.
---

# Glossary

---

### Acquirer

A financial institution or payment company that processes card transactions on behalf of a merchant and settles funds into the merchant's bank account. In Handpoint docs, acquirer names (EPI, PAYSAFE, EmerchantPay, Paystrax) are what ISVs configure per merchant. Acquirers determine which features are available — batch close, tip adjustment, pre-authorization, etc.

See also: [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix)

---

### Authorization code

A short alphanumeric code (e.g. `"123456"`) returned by the card issuer to approve a transaction. Appears as `authorisationCode` in `TransactionResult`. An empty `authorisationCode` on a declined transaction is normal.

---

### AVS (Address Verification Service)

A fraud-reduction tool for card-not-present (MOTO) transactions. The merchant submits the cardholder's billing zip code and/or street address; the issuer verifies them against their records and returns a result code in `TransactionResult.avsResult`. Supported on EPI only. Must be enabled per merchant by Handpoint.

See also: [AVS](/reference/avs)

---

### Batch close

The end-of-day operation that settles all open authorisations with the acquirer. **EPI merchants must call batch close every business day** — missing it causes ERR 005 (batch number mismatch) the next day. EmerchantPay and Paystrax settle automatically; no batch close is needed or supported.

Cloud API: `POST /batch/close`  
Android SDK: `hapi.endOfDay()`

---

### callbackUrl

An optional field in a `POST /transactions` request. When present, Handpoint delivers the `TransactionResult` as an HTTP POST to this URL after the transaction completes — no polling required. The `token` field is echoed in the `AUTH-TOKEN` response header so you can authenticate the delivery.

If omitted, you must poll `GET /transaction-result/{transactionResultId}` for the result.

---

### Card token

A surrogate string that represents a real card number, stored securely by a token provider (ProCharge, TokenEx, or Paysafe vault). Returned as `cardToken` in `TransactionResult` when tokenization is enabled for a merchant. Used for MOTO back-office charges — no cardholder or terminal required. EPI only for back-office remote sale; EmerchantPay and Paystrax support keyed-entry MOTO only.

---

### EMV

"Europay, Mastercard, Visa" — the global standard for chip-based card transactions. Handpoint terminals process EMV chip, NFC (contactless), and magnetic stripe (fallback). EMV data fields are present in `TransactionResult` for chip and tap transactions.

---

### EPI

Handpoint's North American acquirer. Supports Visa, Mastercard, Amex, Discover. Region: US and Canada. Features: batch close, tip adjustment (post-sale), partial reversal, pre-authorization, MOTO (both paths), tokenization (ProCharge / EPI token provider).

---

### EmerchantPay

Handpoint's European acquirer (OMNIPAY integration). Supports Visa, Mastercard, AMEX, UnionPay. Region: Europe. Automatic settlement — no batch close. MOTO keyed entry and linked MOTO refund supported; back-office card-token remote sale is EPI only.

---

### finStatus

The terminal outcome of a transaction. The primary field to check in `TransactionResult`. Possible values:

| Value | Meaning |
|---|---|
| `AUTHORISED` | Approved — funds reserved or captured |
| `DECLINED` | Card declined by issuer |
| `CANCELLED` | Cancelled by operator or terminal (no charge) |
| `PARTIALLY_AUTHORISED` | Issuer approved a smaller amount than requested |
| `FAILED` | Terminal or communication error — not a card decline |
| `UNDEFINED` | Result unknown — check `GET /{txnRef}/status` or Transaction Feed API |

Never infer approval from the absence of an error — always read `finStatus` explicitly.

---

### MOTO (Mail Order / Telephone Order)

Card-not-present transactions where the card number is provided manually rather than read by a terminal. Two paths: on-terminal keyed entry (PAX terminal shows a card entry screen) and back-office remote sale (server charges a stored card token — EPI only). Requires per-merchant enablement by Handpoint.

See also: [MOTO guide](/reference/moto-guide)

---

### P2PE (Point-to-Point Encryption)

Handpoint encrypts card data at the terminal the moment it is read, before it ever leaves the device. Your server never sees unmasked card numbers. This keeps ISVs out of PCI scope for card data handling.

---

### Partial approval

When an issuer approves less than the full requested amount — common with prepaid cards. `finStatus: "PARTIALLY_AUTHORISED"` with `totalAmount` less than `requestedAmount`. Your POS must either collect the remainder via a second tender or void the transaction.

See also: [Partial approval](/reference/partial-approval)

---

### PAYSAFE

Handpoint's North American acquirer for merchants requiring Interac (Canada) support. Supports Visa, Mastercard, Amex, Discover, and Interac debit. Credit/debit cards and Interac route through separate internal networks. Tip adjustment supported for non-Interac cards. Interac Void uses a linked refund (not a standard reversal).

---

### Paystrax

Handpoint's European acquirer for Iceland. Same OMNIPAY integration as EmerchantPay. Supports Visa, Mastercard, AMEX, UnionPay. Automatic settlement — no batch close.

---

### Pre-authorization

A two-step payment flow: an auth-only capture reserves funds on the cardholder's card without charging; a subsequent capture charges the reserved amount. Common in hospitality (hotels, restaurants with large tabs). Supported on EPI (US and Canada), EmerchantPay, and Paystrax — not on HiLite paths.

See also: [Pre-authorization guide](/reference/pre-authorization-guide)

---

### ProCharge

EPI's card tokenization vault. `cardToken` values beginning with a ProCharge-specific prefix are stored in ProCharge. Used for EPI back-office remote sale. Not available for EmerchantPay or Paystrax back-office charges (those acquirers do not support back-office card-token remote sale).

---

### Settlement

The process by which authorised transaction funds are transferred from the cardholder's bank to the merchant's bank. EPI requires a manual batch close to trigger settlement. EmerchantPay and Paystrax settle automatically at end of day without any ISV action.

---

### Shared secret (`HANDPOINT_SHARED_SECRET`)

A server-to-device authentication credential used by the Android and iOS SDKs to establish a secure connection between your app and the PAX terminal (or HiLite reader). Never expose in source code — store in `local.properties` (gitignored). Different from the Cloud API key.

---

### Tip adjustment

A post-sale operation that adds a gratuity amount to a completed transaction before it settles. EPI only — add `tipAmount` to the sale request body for EmerchantPay and Paystrax instead. Not supported on HiLite paths or Cordova. Must be called before batch close.

Cloud API: `POST /transactions/{transactionID}/tip-adjustment`

---

### TokenEx

An external card tokenization vault used by some PAYSAFE merchants as an alternative to the ProCharge token provider. `cardToken` values from TokenEx merchants are formatted differently from ProCharge tokens.

---

### transactionID

A Handpoint-assigned UUID identifying a specific completed transaction. Returned in `TransactionResult.transactionID`. **Use this for reversals, refunds, tip adjustments, and token retrieval.** Immutable — does not change if the transaction is partially reversed.

Not to be confused with `transactionReference` (your own ID) or `transactionResultId` (polling handle).

---

### transactionReference

A UUID v4 that **you** generate and attach to a transaction request. Returned in `TransactionResult.transactionReference` (echoed back). Use it to correlate Handpoint results with your own system's records. Must be unique per transaction. For `GET /{txnRef}/status` recovery, this is the value used in the URL.

---

### transactionResultId

A handle returned in the immediate `202 Accepted` response to `POST /transactions`. Format: `{serial_number}-{timestamp}` (e.g. `082104578-1786020446467`). Use it to poll `GET /transaction-result/{transactionResultId}` for the final result. Not the same as `transactionID` — do not store one as the other.

---

### Transaction Feed API

A separate reporting and reconciliation API backed by an Elasticsearch index. Used for historical transaction queries — find transactions by merchant, time window, card scheme, finStatus, etc. **Not** the primary result delivery mechanism — use polling or callbackUrl for real-time results. Use the Transaction Feed for UNDEFINED recovery when `transactionReference` recovery is unavailable.

---

### UNDEFINED

A `finStatus` value meaning the Cloud API did not receive a definitive result from the acquirer within the timeout window. Does not mean declined — the transaction may have authorised. Recovery: call `GET /{txnRef}/status` for a status check; if still UNDEFINED, query the Transaction Feed API by serial number and time window.

See also: [Transaction recovery](/reference/transaction-recovery-cloud-api), [Error codes](/reference/error-codes)

---

### ViscusDummy

A simulated acquirer used on the Handpoint DEMO merchant (production environment). Transactions run end-to-end including card read and receipt generation, but no real funds move. Supports trigger amounts to force specific outcomes (DECLINED, CANCELLED, partial approval, etc.). Recommended for ISV testing.

See also: [Development hardware](/reference/development-hardware)
