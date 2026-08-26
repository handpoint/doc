# Handpoint Payments Glossary

Terms covering the payments industry standard concepts and Handpoint-specific systems, APIs, and internal identifiers.

---

## Payments Industry Terms

### Acquirer
The financial institution or payment processor that provides transaction processing services to merchants (card acceptors). For transactions below a threshold, the acquirer may authorize on behalf of the issuer. Above the threshold, the transaction is forwarded to the issuer or its agent for authorization. The acquirer is responsible for secure PIN translation, message authentication, and guaranteeing settlement to the merchant.

In Handpoint's context, an **acquirer** is also a configuration entity in the TMS that links a merchant terminal to a specific processor protocol (OMNIPAY, TSYS, TNS, etc.) and its required credentials (MID, TID, Acquirer ID).

See also: `ACQUIRER_CREATION_GUIDE.md`

---

### Card Acceptor (Merchant)
The entity that accepts payment cards as a means of payment for goods or services — typically a retailer, restaurant, or service provider. The card acceptor forwards transaction data to an acquirer and receives an authorization decision in return. Security of the data exchanged with the acquirer (message authentication, PIN secrecy) is the card acceptor's responsibility at the point of interaction.

---

### Card Issuer
The financial institution that issues a payment card to a cardholder and guarantees payment to the acquirer for properly authenticated and authorized transactions. The card carries identifying information (card number, expiry date) and optionally security data (PIN offset). The issuer may delegate PIN verification to a third-party agent.

---

### Cardholder
The individual to whom a payment card is issued. The cardholder and issuer may agree on a PIN for use during transactions. Transaction processing systems are obligated to maintain PIN secrecy from cardholder to issuer.

---

### DUKPT (Derived Unique Key Per Transaction)
A key management scheme that generates a one-time encryption key for every transaction, derived from a shared master key, and then discards it. If any single derived key is compromised, only that one transaction is exposed.

**How it works:**
1. The acquirer holds a **Base Derivation Key (BDK)** — never shared.
2. The BDK generates an **IPEK (Initial PIN Encryption Key)**.
3. The IPEK generates a set of **Future Keys**, which are embedded into PEDs by the manufacturer.
4. The IPEK is then discarded.
5. At transaction time, the PED uses its Future Key to generate a one-time session key, encrypts the PIN/data, and sends the encrypted data plus a **KSN (Key Serial Number)** containing the Device ID and transaction counter.
6. The acquirer uses the KSN to reconstruct the matching key and decrypt the data.

**Key terms:**
- **BDK** — Base Derivation Key; the root secret held by the acquirer/processor
- **IPEK** — Initial PIN Encryption Key; intermediate key generated from BDK
- **Future Key** — device-specific key embedded in the PED at manufacture
- **KSN** — Key Serial Number; identifies which key was used (`Device ID + counter`)
- **PED** — PIN Entry Device; the payment terminal or PIN pad

In Handpoint's config, the `bdkIndex` and `ksnPrefix` fields on protocol configurations identify which BDK slot and KSN namespace to use for a given acquirer.

---

### RKI — Remote Key Injection (Remote Key Loading)
The process of loading encryption keys onto a payment terminal remotely over a secure channel, eliminating the need to ship terminals to a physical Key Injection Facility (KIF).

Traditional key injection requires terminals to be sent to a secure room where keys are loaded manually. RKI allows Handpoint to inject debit PIN keys, P2PE keys, and other encryption keys directly to terminals in the field after deployment, at the point of sale.

Benefits: faster deployment, lower cost, no inventory delays, more secure (no physical interception risk).

Handpoint was an early pioneer of RKI in the mPOS industry.

---

### SSK — Shared Secret Key
A string known only to the terminal (card reader) and the Handpoint server, used to create a digital signature (HMAC hash) on every transaction message to verify integrity and authenticate the sender. The SSK is never transmitted — only the resulting hash is sent.

**Important notes:**
- Each TID (terminal) has its own SSK
- SSKs are set by the merchant or partner; Handpoint does not enforce uniqueness across the environment
- Uses 256-bit encryption (HMAC-SHA256)
- Protects against: terminal substitution attacks, transaction rerouting, unauthorized refunds, wrong-merchant configuration

---

### EMV (Europay, Mastercard, Visa)
The global standard for chip card payment transactions. EMV cards contain an integrated circuit (chip) that participates in a cryptographic dialogue with the terminal to authenticate the card and generate transaction-specific cryptograms, significantly reducing card-present fraud compared to magnetic stripe.

In Handpoint systems, EMV transactions use `CHIP` or `CHIPCONTACTLESS` as the `paymentScenario` field.

**Key EMV data tags stored in TXN Feed:**

| Tag | Name | Description |
|-----|------|-------------|
| `9F06` | AID | Application Identifier — identifies the card application (Visa, Mastercard, etc.) |
| `95` | TVR | Terminal Verification Results — bitmask of checks performed by terminal |
| `9F10` | IAD | Issuer Application Data — issuer-specific cryptographic data |
| `9B` | TSI | Transaction Status Information — which functions were completed |
| `8A` | ARC | Authorisation Response Code — `"00"` = approved |
| `9F34` | CVMRES | Cardholder Verification Method Results — how cardholder was verified (PIN, signature, etc.) |

---

### MSR — Magnetic Stripe Reader
Card input method that reads the magnetic stripe on the back of a card. Less secure than EMV chip. In Handpoint systems, MSR transactions use `MAGSTRIPE` or `CHIPFAILMAGSTRIPE` (fallback) as the `paymentScenario`.

---

### Contactless
Card input method using NFC (Near Field Communication). In Handpoint systems, `CHIPCONTACTLESS` = NFC chip, `MAGSTRIPECONTACTLESS` = NFC magnetic stripe emulation.

---

### MOTO — Mail Order / Telephone Order
Card-not-present (CNP) transactions where the cardholder is not physically present — the card details are provided over phone or mail. Higher fraud risk than card-present. In TXN Feed, MOTO transactions have `paymentScenario: "MOTO"` and names like `"Card Not Present Sale"`.

---

### Pre-Authorization (Pre-Auth)
A hold placed on a cardholder's funds without immediately capturing the money. Common in hotels and car rentals where the final amount is unknown at check-in. Consists of two steps:
1. **Pre-authorization** (`PREAUTHORIZATION_REQUEST`) — places the hold
2. **Pre-authorization Capture** (`PREAUTHORIZATION_CAPTURE_REQUEST`) — finalizes and captures the agreed amount

The acquirer `supports_preauth` flag must be enabled.

---

### Store & Forward (SAF)
When a terminal loses connectivity to the acquirer, it queues approved transactions locally and submits them when connectivity is restored. Risk: the card may have been declined or cancelled during the offline window. The `supports_store_and_forward` acquirer flag and a `store_and_forward_config_json` (floor limit, max offline count, etc.) control this behaviour.

---

### Partial Approval
When a card does not have sufficient funds for the full transaction amount, the issuer approves only part of the amount. The merchant may ask the customer to pay the remainder by another method. Requires `supports_partial_reversal` and acquirer/issuer support.

---

### Forced Linked Refund
A configuration where refunds must include a reference to the original transaction GUID. This prevents refunds to a different card than the one used for the original sale, reducing fraud. Enabled via `forced_linked_refunds` flag on the acquirer.

---

### Settlement / Batching
The process of submitting captured transactions to the acquirer for final clearing and fund transfer to the merchant's bank account. Some protocols use host-capture (the host settles automatically); others require the terminal or gateway to close a batch. Omnipay and Borgun use async batch settlement via SQS queues. TSYS is host-capture.

---

### P2PE — Point-to-Point Encryption
An end-to-end encryption standard where cardholder data is encrypted at the point of card interaction (the terminal) and decrypted only in a secure environment at the processor. Cardholder data is never in plaintext in any intermediate system. Uses DUKPT for key management.

---

### PAN — Primary Account Number
The card number (typically 13–19 digits) that identifies the cardholder's account. PANs are never stored in plaintext in Handpoint systems — they are masked, tokenized, or encrypted at rest.

---

### BIN — Bank Identification Number
The first 6–8 digits of a PAN that identify the issuing institution and card product. Used for routing, fraud rules, and card brand identification. The TMS `bin_list` table maps BIN ranges to card brands for terminal routing decisions.

---

### MID — Merchant ID
An identifier assigned to a merchant by an acquirer. Used in protocol fields (`merchantid`) to route transactions to the correct merchant account at the processor. Not to be confused with Handpoint's internal `merchantId` (alpha ID).

---

### TID — Terminal ID
An identifier assigned to a specific payment terminal by an acquirer. Used in protocol fields (`terminalid`). Can be auto-generated from the device serial number in some protocols.

---

### Agreement Number
The MID as assigned by the acquirer/bank (also called "Acquirer MID"). Stored on the TMS `agreement` record. Maps 1:1 to the `agreementNumber` field in TXN Feed API responses.

---

### PayFac — Payment Facilitator
A business model where a master merchant (the PayFac) processes payments on behalf of sub-merchants under a single acquirer agreement. The PayFac is responsible for underwriting and compliance for its sub-merchants. Enabled via the `supports_payfac` acquirer flag.

---

## Handpoint-Specific Terms

### V2T API — Viscus-to-Terminal API
Handpoint's internal transaction orchestration API. When a terminal initiates a payment, it sends a V2T action message (e.g. `PAYMENT_COMPLETION_REQUEST`) to the Viscus gateway. The viscus-capture daemon polls the V2T API every 5 seconds to pick up new transaction events and store them in the analytics pipeline.

**Key V2T actions:**

| Action | Meaning |
|--------|---------|
| `PAYMENT_REQUEST` | MSR single-message sale |
| `AUTHORIZATION_REQUEST` | EMV first-message (pre-auth or dual-message sale) |
| `PAYMENT_COMPLETION_REQUEST` | EMV completion / second message |
| `REFUND_REQUEST` | Refund |
| `REVERSAL_REQUEST` | Void / reversal |
| `CANCELLATION_REQUEST` | Cancellation |
| `PREAUTHORIZATION_REQUEST` | Hotel-style pre-authorization hold |
| `PREAUTHORIZATION_CAPTURE_REQUEST` | Capture a pre-auth |
| `PREAUTHORIZATION_INCREASE_REQUEST` | Increase a pre-auth amount |
| `TIP_ADJUSTMENT_REQUEST` | Post-auth tip |
| `CARDTOKENIZATION_REQUEST` | Tokenize a card |
| `MOTO_SALE_REQUEST` | Card-not-present sale |

---

### TMS — Terminal Management System
`viscus-tms-dev` — the backend system that manages merchants, partners, ISVs, acquirers, protocols, and terminal configuration. Handles terminal onboarding, key injection orchestration, and agreement management.

---

### Viscus Gateway
`viscus-dev` — the payment gateway that routes V2T transaction messages to the appropriate acquirer protocol. Implements protocol handlers for OMNIPAY, TSYS, TNS, VANTIV, EVO, FISERV, ELAVON, BORGUN, AMEX, POSTBRIDGE, and a test dummy.

---

### viscus-capture
`viscus-capture-dev` — the ETL daemon that polls the V2T API every 5 seconds, transforms V2T messages into TXN Feed records, and writes them to the PostgreSQL `transaction_info` table (feeding both the Logstash→Elasticsearch pipeline and the analytics-sender→Keen.IO pipeline).

Key mappings performed by viscus-capture:
- `TxnType.java`: V2T action → transaction type string (`"Authorization"`, `"Refund"`, `"Reversal"`, etc.)
- `Status.java`: HTTP status + action → viscus status string (`"Pending"`, `"Completed"`, `"Authorization Granted"`, `"Decline"`, `"Error"`)

---

### TXN Feed API / Queen API
`queen-api-dev` — the REST API (LoopBack 4 / Node.js) that exposes transaction data to partners and merchants. Queries OpenSearch indices (`txn_feed` for card-present, `txn_cardstream` for ECOM).

Live URLs: `https://txnfeed.handpoint.com/` (prod), `https://txnfeed.handpoint.io/` (staging)

---

### idAlpha
A string identifier used throughout the Handpoint ecosystem to identify either a **Partner** or a **Merchant**, depending on the API key role. Used as a path parameter in TXN Feed API endpoints (`/transactions/{id_alpha}`). The value comes from the TMS portal.

---

### transactionStreams
A `RequestConfig` parameter in the TXN Feed API that selects which Elasticsearch index to query:
- `"handpoint"` → `txn_feed` (card-present via Viscus gateway)
- `"ecommerce"` → `txn_cardstream` (ECOM via CardStream gateway)

Default is `["handpoint"]`. ECOM transactions are excluded unless `"ecommerce"` is explicitly added.

---

### finStatus — Financial Status
The outcome field returned by the Handpoint Android SDK for every transaction. See `TRANSACTION_MAPPING.md` for the full enum. Common values:

| finStatus | Meaning |
|-----------|---------|
| `AUTHORISED` | Transaction approved |
| `DECLINED` | Transaction declined by acquirer |
| `CANCELLED` | Cancelled by operator or timeout |
| `FAILED` | Communication or processing failure |
| `AUTHORISED_DEFERRED` | Pre-auth granted, awaiting capture |
| `PARTIALLY_APPROVED` | Partial amount approved |

---

### paymentScenario
The card entry method field stored in TXN Feed. Determines the display name for card-present transactions (e.g. `"CHIP"` → `"EMV Sale"`, `"MAGSTRIPE"` → `"MSR Sale"`).

| Value | Entry method |
|-------|-------------|
| `CHIP` | EMV contact chip |
| `CHIPCONTACTLESS` | EMV contactless (NFC) |
| `MAGSTRIPE` | Magnetic stripe |
| `CHIPFAILMAGSTRIPE` | Chip-failed, fell back to swipe |
| `MAGSTRIPECONTACTLESS` | Contactless magnetic stripe emulation |
| `MOTO` | Mail Order / Telephone Order |
| `ECOM` | E-commerce / CardStream |

---

### Authorization Granted / GRANTED_AUTH
An intermediate transaction status that appears in TXN Feed (and the OPS runner) when the first leg of a **double-message EMV** flow has been authorized but the completion (`PAYMENT_COMPLETION_REQUEST`) has not yet arrived.

This is **not an error**. It is normal for hotel/restaurant pre-auth flows and some acquirer configurations. The status resolves to `"Completed"` when the second message arrives.

Display guidance: show as informational (blue), never as an error (red).

---

### searchAfter vs initPosition
Two pagination modes in the TXN Feed API:

| Mode | Parameter | Mechanism | Limit | Use case |
|------|-----------|-----------|-------|----------|
| Offset | `initPosition` | Elasticsearch `from` (skip N records) | Max ~10,000 (cluster `max_result_window`) | Small date ranges, shallow navigation |
| Keyset | `searchAfter` | Cursor-based deep pagination | Unlimited | Full exports, large date ranges |

**Critical:** When both are sent in the same request, `initPosition` is silently deleted. Always use one or the other. `searchAfter` requires at least one `orderBy` parameter.

---

### tf_sender_queue
A PostgreSQL table populated by viscus-capture for transactions linked to **Paysafe-enrolled** partners. Read by the `Transaction-Feed-Sender-dev` daemon, which forwards transaction data to the Paysafe Transaction Feed API (`api.netbanx.com`). Not related to the Handpoint TXN Feed API.

`sending_status` values: `N` (new), `R` (retry), `S` (success), `F` (failure), `P` (permanent failure).

---

### Analytics Sender
`analytics-sender-dev` — a Java daemon that reads from the same `transaction_info` table as Logstash but sends to **Keen.IO** (cloud analytics) rather than Elasticsearch. Powers internal business reporting dashboards (transaction volumes, revenue). Not exposed to partners or merchants.

---

### cardstream-analytics-dev
Java Spring Boot service that polls the CardStream REST API (`commerce-api.handpoint.com/rest/transactions`) every 60 seconds and indexes ECOM transactions into the OpenSearch `txn_cardstream` index. This is the pipeline that backs `transactionStreams: ["ecommerce"]` in the TXN Feed API.

---

### ISV — Independent Software Vendor
A third-party software company that integrates with Handpoint's payment infrastructure to provide payment capabilities to their own customers. ISVs sit above Partners in the hierarchy: ISV → Partner → Merchant → Terminal.

---

### Keen.IO
A managed cloud analytics platform used by Handpoint's `analytics-sender-dev` for internal transaction analytics and business intelligence. Not accessible to external API consumers. Separate from the Elasticsearch-backed TXN Feed API.

---

### OPS Runner
`_OPS runner/` — Handpoint's internal operational tooling Flask application. Provides dashboards and utilities for: SIM card management (Soracom), transaction lookup and TLV parsing, ISV management, error monitoring, acquirer error rate reporting, and transaction export.

---

### Protocol (in Handpoint TMS context)
The communication standard and integration used to connect the Handpoint gateway to a specific payment processor. Examples: OMNIPAY (ISO 8583, UK), TSYS (host-capture, US), TNS (ISO 8583, Paysafe). Each protocol has its own set of required configuration fields and transaction capabilities.

See: `PROTOCOL_CAPABILITIES.md`, `ACQUIRER_CREATION_GUIDE.md`
