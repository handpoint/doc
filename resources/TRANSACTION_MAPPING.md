# Handpoint Transaction Mapping Reference

End-to-end mapping from **Android SDK `TransactionType` + `FinancialStatus`** through the internal Viscus pipeline to the **TXN Feed API (`name`, `type`, `status`)** fields returned by queen-api-dev.

Three separate channels are covered: **Card-Present**, **MOTO / Card-Not-Present**, and **ECOM (CardStream)**.

---

## SDK Enums Reference

### `FinancialStatus` (Android SDK)

Source: `Android SDK/shared/objects/src/main/java/com/handpoint/api/shared/FinancialStatus.kt`

| Value | Int | When it appears |
|-------|-----|-----------------|
| `UNDEFINED` | 0 | Unresolved / initial |
| `AUTHORISED` | 1 | Transaction approved (sale, refund, pre-auth capture, reversal) |
| `DECLINED` | 2 | Acquirer declined |
| `PROCESSED` | 3 | Generic processed (some non-payment operations) |
| `FAILED` | 4 | Communication or processing failure |
| `CANCELLED` | 5 | Cancelled by operator or timeout |
| `PARTIALLY_APPROVED` / `PARTIAL_APPROVAL` | 6 | Partial amount approved (debit/EBT) |
| `REFUNDED` | 8 | Refund approved |
| `CAPTURED` | 9 | Pre-auth capture confirmed |
| `IN_PROGRESS` | 10 | Transaction currently processing (SDK 7.1012+) |
| `AUTHORISED_DEFERRED` | 11 | Pre-authorization granted, pending capture (SDK 7.1012+) |

### `TransactionType` (Android SDK)

Source: `Android SDK/shared/objects/src/main/java/com/handpoint/api/shared/TransactionType.kt`

| Value | Tag string | Channel |
|-------|-----------|---------|
| `SALE` | `"SALE"` | CP |
| `VOID_SALE` | `"SALE VOID"` | CP |
| `REFUND` | `"REFUND"` | CP |
| `VOID_REFUND` | `"REFUND VOID"` | CP |
| `CANCEL_SALE` | `"CANCEL SALE"` | CP |
| `CANCEL_REFUND` | `"CANCEL REFUND"` | CP |
| `REVERSAL` | `"REVERSAL"` | CP |
| `SALE_AND_TOKENIZE_CARD` | `"SALE AND TOKENIZE CARD"` | CP |
| `TOKENIZE_CARD` | `"TOKENIZE CARD"` | CP |
| `TOKENIZED_OPERATION` | `"TOKENIZED OPERATION"` | CP |
| `CARD_PAN` | `"CARD PAN"` | CP |
| `TIP_ADJUSTMENT` | `"TIP ADJUSTMENT"` | CP |
| `PRE_AUTHORIZATION` | `"PRE AUTHORIZATION"` | CP |
| `PRE_AUTHORIZATION_INCREASE` | `"PRE AUTHORIZATION INCREMENT"` | CP |
| `PRE_AUTHORIZATION_CAPTURE` | `"PRE AUTHORIZATION CAPTURE"` | CP |
| `MOTO_SALE` | `"MOTO SALE"` | MOTO |
| `MOTO_REFUND` | `"MOTO REFUND"` | MOTO |
| `MOTO_CANCEL` | `"MOTO CANCEL"` | MOTO |
| `MOTO_REVERSAL` | `"MOTO REVERSAL"` | MOTO |
| `MOTO_PREAUTHORIZATION` | `"MOTO PREAUTHORIZATION"` | MOTO |
| `UPDATE` | `"UPDATE"` | Internal |
| `PRINT_RECEIPT` | `"PRINT RECEIPT"` | Internal |
| `TRANSACTION_STATUS` | `"TRANSACTION STATUS"` | Internal |

---

## Card-Present Transactions

Data flow: Terminal → V2T API → viscus-capture → PostgreSQL `transaction_info` → Logstash → OpenSearch `txn_feed` → queen-api via `transactionStreams: ["handpoint"]`

### Sales

| SDK `TransactionType` | SDK `FinancialStatus` | V2T Action | `paymentScenario` | TXN Feed `name` | TXN Feed `type` | TXN Feed `status` | Viscus DB status |
|-----------------------|-----------------------|------------|-------------------|-----------------|-----------------|-------------------|------------------|
| `SALE` | `AUTHORISED` | `PAYMENT_REQUEST` | `MAGSTRIPE` / `CHIPFAILMAGSTRIPE` | `"MSR Sale"` | `"Sale"` | 200 | `"Pending"` → `"Completed"` |
| `SALE` | `DECLINED` | `PAYMENT_REQUEST` | `MAGSTRIPE` / `CHIPFAILMAGSTRIPE` | `"Declined MSR Sale"` | `"Sale"` | 4xx | `"Decline"` / `"Error"` |
| `SALE` | `AUTHORISED` | `AUTHORIZATION_REQUEST`¹ + `PAYMENT_COMPLETION_REQUEST` | `CHIP` | `"EMV Sale"` | `"Sale"` | 200 | `"Authorization Granted"` then `"Pending"` → `"Completed"` |
| `SALE` | `DECLINED` | `AUTHORIZATION_REQUEST`¹ + `PAYMENT_COMPLETION_REQUEST` | `CHIP` | `"Declined EMV Sale"` | `"Sale"` | 4xx | `"Decline"` / `"Error"` |
| `SALE` | `AUTHORISED` | `PAYMENT_COMPLETION_REQUEST` | `CHIPCONTACTLESS` / `MAGSTRIPECONTACTLESS` | `"EMV Sale"` | `"Sale"` | 200 | `"Pending"` → `"Completed"` |
| `SALE` | `DECLINED` | `PAYMENT_COMPLETION_REQUEST` | `CHIPCONTACTLESS` / `MAGSTRIPECONTACTLESS` | `"Declined EMV Sale"` | `"Sale"` | 4xx | `"Decline"` / `"Error"` |
| `SALE_AND_TOKENIZE_CARD` | `AUTHORISED` | `PAYMENT_COMPLETION_REQUEST` | `CHIP` | `"EMV Sale"` | `"Sale"` | 200 | `"Pending"` → `"Completed"` |
| `SALE` | `PARTIALLY_APPROVED` | `PAYMENT_REQUEST` | any | `"MSR Sale"` | `"Sale"` | 200 | `"Pending"` |

> ¹ **Double-message EMV note:** `AUTHORIZATION_REQUEST` creates a separate record in TXN Feed with `name: "EMV Sale"` and viscus status `"Authorization Granted"`. This intermediate record is NOT a failure — it represents the first leg of the dual-message flow. A second record is created when `PAYMENT_COMPLETION_REQUEST` completes the transaction. See [Special Cases](#special-cases) for display guidance.

### Refunds

| SDK `TransactionType` | SDK `FinancialStatus` | V2T Action | `paymentScenario` | TXN Feed `name` | TXN Feed `type` | TXN Feed `status` |
|-----------------------|-----------------------|------------|-------------------|-----------------|-----------------|-------------------|
| `REFUND` | `AUTHORISED` / `REFUNDED` | `REFUND_REQUEST` | `CHIP` / `CHIPCONTACTLESS` | `"EMV Refund"` | `"Refund"` | 200 |
| `REFUND` | `AUTHORISED` / `REFUNDED` | `REFUND_REQUEST` | `MAGSTRIPE` / other | `"MSR Refund"` | `"Refund"` | 200 |
| `REFUND` | `DECLINED` | `REFUND_REQUEST` | `CHIP` / `CHIPCONTACTLESS` | `"Declined EMV Refund"` | `"Refund"` | 4xx |
| `REFUND` | `DECLINED` | `REFUND_REQUEST` | `MAGSTRIPE` / other | `"Declined MSR Refund"` | `"Refund"` | 4xx |

> **TNS protocol quirk:** On TNS-protocol terminals, `REFUND_REQUEST` is mapped by viscus-capture to `TxnType.REVERSAL` (not `TxnType.REFUND`). The TXN Feed `name` will be `"Sale Reversal"` instead of `"EMV Refund"`.

### Reversals & Cancellations

The `name` is determined by the action of the *referenced* (original) transaction, not the reversal itself.

| SDK `TransactionType` | V2T Action | Referenced action | TXN Feed `name` | TXN Feed `type` | TXN Feed `status` |
|-----------------------|------------|-------------------|-----------------|-----------------|-------------------|
| `VOID_SALE` / `CANCEL_SALE` | `REVERSAL_REQUEST` | `PAYMENT_REQUEST` / `PAYMENT_COMPLETION_REQUEST` / `AUTHORIZATION_REQUEST` | `"Sale Reversal"` | `"Reversal"` | 200 |
| `VOID_REFUND` / `CANCEL_REFUND` | `REVERSAL_REQUEST` | `REFUND_REQUEST` | `"Refund Reversal"` | `"Reversal"` | 200 |
| *(pre-auth reversal)* | `REVERSAL_REQUEST` | `PREAUTHORIZATION_REQUEST` | `"Pre-authorization Reversal"` | `"Reversal"` | 200 |
| *(capture reversal)* | `REVERSAL_REQUEST` | `PREAUTHORIZATION_CAPTURE_REQUEST` | `"Pre-authorization Capture Reversal"` | `"Reversal"` | 200 |
| *(incremental reversal)* | `REVERSAL_REQUEST` | `PREAUTHORIZATION_INCREASE_REQUEST` | `"Incremental Authorization Reversal"` | `"Reversal"` | 200 |
| *(declined reversal)* | `REVERSAL_REQUEST` | any | `"Declined Sale Reversal"` / `"Declined Refund Reversal"` / etc. | `"Reversal"` | 4xx |
| `CANCEL_SALE` | `CANCELLATION_REQUEST` | non-refund | `"Sale Cancellation"` | `"Cancellation"` | 200 |
| `CANCEL_REFUND` | `CANCELLATION_REQUEST` | `REFUND_REQUEST` | `"Refund Cancellation"` | `"Cancellation"` | 200 |
| *(declined cancel)* | `CANCELLATION_REQUEST` | any | `"Declined Cancellation"` | `"Cancellation"` | 4xx |

### Pre-Authorization Flows

| SDK `TransactionType` | SDK `FinancialStatus` | V2T Action | TXN Feed `name` | TXN Feed `type` | TXN Feed `status` | Viscus DB status |
|-----------------------|-----------------------|------------|-----------------|-----------------|-------------------|------------------|
| `PRE_AUTHORIZATION` | `AUTHORISED` / `AUTHORISED_DEFERRED` | `PREAUTHORIZATION_REQUEST` | `"Pre-authorization"` | `"Pre-authorization"` | 200 | `"Completed"` |
| `PRE_AUTHORIZATION` | `DECLINED` | `PREAUTHORIZATION_REQUEST` | `"Declined Pre-authorization"` | `"Pre-authorization"` | 4xx | `"Decline"` / `"Error"` |
| `PRE_AUTHORIZATION_INCREASE` | `AUTHORISED` | `PREAUTHORIZATION_INCREASE_REQUEST` | `"Incremental Authorization"` | `"Incremental Authorization"` | 200 | `"Completed"` |
| `PRE_AUTHORIZATION_INCREASE` | `DECLINED` | `PREAUTHORIZATION_INCREASE_REQUEST` | `"Declined Incremental Authorization"` | `"Incremental Authorization"` | 4xx | `"Decline"` |
| `PRE_AUTHORIZATION_CAPTURE` | `AUTHORISED` / `CAPTURED` | `PREAUTHORIZATION_CAPTURE_REQUEST` | `"Pre-authorization Capture"` | `"Pre-authorization Capture"` | 200 | `"Completed"` |
| `PRE_AUTHORIZATION_CAPTURE` | `DECLINED` | `PREAUTHORIZATION_CAPTURE_REQUEST` | `"Declined Pre-authorization Capture"` | `"Pre-authorization Capture"` | 4xx | `"Decline"` |

### Other Card-Present

| SDK `TransactionType` | SDK `FinancialStatus` | V2T Action | TXN Feed `name` | TXN Feed `type` | TXN Feed `status` |
|-----------------------|-----------------------|------------|-----------------|-----------------|-------------------|
| `TIP_ADJUSTMENT` | `AUTHORISED` | `TIP_ADJUSTMENT_REQUEST` | `"Tip Adjustment"` | `"Tip Adjustment"` | 200 |
| `TIP_ADJUSTMENT` | `DECLINED` | `TIP_ADJUSTMENT_REQUEST` | `"Declined Tip Adjustment"` | `"Tip Adjustment"` | 4xx |
| `TOKENIZE_CARD` / `SALE_AND_TOKENIZE_CARD` | `AUTHORISED` | `CARDTOKENIZATION_REQUEST` | `"Card Tokenization"` | `"Token"` | 200 |
| `TOKENIZE_CARD` | `DECLINED` | `CARDTOKENIZATION_REQUEST` | `"Declined Card Tokenization"` | `"Token"` | 4xx |
| `CARD_PAN` | `AUTHORISED` | `CARDPAN_REQUEST` | `"Card Pan"` | `"Card Pan"` | 200 |
| `CARD_PAN` | `DECLINED` | `CARDPAN_REQUEST` | `"Declined Card Pan"` | `"Card Pan"` | 4xx |

---

## MOTO / Card-Not-Present Transactions

Data flow: Same as card-present but with `MOTO_*` V2T actions → `txn_feed` index → `transactionStreams: ["handpoint"]`.

| SDK `TransactionType` | SDK `FinancialStatus` | V2T Action | TXN Feed `name` | TXN Feed `type` | TXN Feed `status` |
|-----------------------|-----------------------|------------|-----------------|-----------------|-------------------|
| `MOTO_SALE` | `AUTHORISED` | `MOTO_SALE_REQUEST` | `"Card Not Present Sale"` | `"Card Not Present Sale"` | 200 |
| `MOTO_SALE` | `DECLINED` | `MOTO_SALE_REQUEST` | `"Declined Card Not Present Sale"` | `"Card Not Present Sale"` | 4xx |
| `MOTO_REFUND` | `AUTHORISED` / `REFUNDED` | `MOTO_REFUND_REQUEST` | `"Card Not Present Refund"` | `"Card Not Present Refund"` | 200 |
| `MOTO_REFUND` | `DECLINED` | `MOTO_REFUND_REQUEST` | `"Declined Card Not Present Refund"` | `"Card Not Present Refund"` | 4xx |
| `MOTO_REVERSAL` | `AUTHORISED` / `CANCELLED` | `MOTO_REVERSAL_REQUEST` | `"Card Not Present Reversal"` | `"Card Not Present Reversal"` | 200 |
| `MOTO_REVERSAL` | `DECLINED` | `MOTO_REVERSAL_REQUEST` | `"Declined Card Not Present Reversal"` | `"Card Not Present Reversal"` | 4xx |
| `MOTO_CANCEL` | `CANCELLED` | `MOTO_CANCELLATION_REQUEST` | `"Card Not Present Cancellation"` | `"Card Not Present Cancellation"` | 200 |
| `MOTO_CANCEL` | `DECLINED` | `MOTO_CANCELLATION_REQUEST` | `"Declined Card Not Present Cancellation"` | `"Card Not Present Cancellation"` | 4xx |
| `MOTO_PREAUTHORIZATION` | `AUTHORISED` / `AUTHORISED_DEFERRED` | `MOTO_PREAUTH_REQUEST` | *(not in logstash — empty `name`)* | `""` | 200 |

> **MOTO note:** `paymentScenario` is always `"MOTO"` for all card-not-present transactions. The `terminalSerialNumber` in TXN Feed refers to the virtual terminal identifier, not a physical device.

---

## ECOM / CardStream Transactions

Data flow: CardStream gateway → cardstream-analytics-dev (polls every 60 s) → OpenSearch `txn_cardstream` → queen-api via `transactionStreams: ["ecommerce"]`.

**This channel has no SDK.** Transactions originate from web checkouts or server-to-server API calls through the CardStream (commerce-api.handpoint.com) gateway. The `name` is computed by cardstream-analytics-dev based on CardStream's own `action` + `responseCode` + `state` fields.

| CardStream `action` | `responseCode` | `state` | TXN Feed `name` | TXN Feed `type` | TXN Feed `status` | `paymentScenario` |
|---------------------|----------------|---------|-----------------|-----------------|-------------------|------------------|
| `SALE` | `"0"` | — | `"Ecom Sale"` | `"ECOM SALE"` | 200 | `"ECOM"` |
| `SALE` | ≠`"0"` | — | `"Ecom Declined Sale"` | `"ECOM DECLINED SALE"` | 400 | `"ECOM"` |
| `SALE` | any | `"canceled"` | `"Ecom Canceled Sale"` | `"ECOM CANCELED SALE"` | 400 | `"ECOM"` |
| `REFUND` | `"0"` | — | `"Ecom Refund"` | `"ECOM REFUND"` | 200 | `"ECOM"` |
| `REFUND` | ≠`"0"` | — | `"Ecom Declined Refund"` | `"ECOM DECLINED REFUND"` | 400 | `"ECOM"` |
| `PREAUTH` | `"0"` | — | `"Ecom Preauth"` | `"ECOM PREAUTH"` | 200 | `"ECOM"` |
| `PREAUTH` | any | `"canceled"` | `"Ecom Canceled Preauth"` | `"ECOM CANCELED PREAUTH"` | 400 | `"ECOM"` |
| `CAPTURE` | `"0"` | — | `"Ecom Capture"` | `"ECOM CAPTURE"` | 200 | `"ECOM"` |
| `CAPTURE` | ≠`"0"` | — | `"Ecom Declined Capture"` | `"ECOM DECLINED CAPTURE"` | 400 | `"ECOM"` |
| *(unknown)* | any | — | `"Ecom Unknown"` | `"ECOM UNKNOWN"` | — | `"ECOM"` |

> **Success criterion difference:** The ECOM pipeline uses CardStream's own `responseCode == "0"` (not HTTP `200`) to determine success. The `status` field stored in `txn_cardstream` is `200` (success) or `400` (failure) — mapped by cardstream-analytics-dev, not the raw CardStream response code.

> **`terminalSerialNumber` for ECOM:** Always set to `"ecom-<merchantIdAlpha>"` (synthetic, no physical device).

> **`transactionStreams` required:** ECOM transactions are in a separate index (`txn_cardstream`). To retrieve them via the TXN Feed API, you must explicitly include `"ecommerce"` in `transactionStreams`. The default is `["handpoint"]` (card-present only). Use `["handpoint", "ecommerce"]` to query both.

---

## Viscus Internal Status Reference

These strings appear in the Viscus database and are surfaced in internal tooling (OPS runner). They are NOT directly returned as fields in the TXN Feed API, but they map to the `status` (HTTP code) field.

Source: `viscus-capture-dev/.../enums/Status.java`

| Viscus status string | HTTP status stored | Meaning |
|----------------------|-------------------|---------|
| `"Pending"` | 200 | Approved sale/refund awaiting settlement |
| `"Completed"` | 200 | Reversal, cancellation, or settled transaction |
| `"Authorization Granted"` | 200 | First leg of double-message EMV (pre-auth intermediate state) |
| `"Decline"` | 403 | Acquirer declined |
| `"Error"` | 4xx (408, 500, etc.) | Communication or processing failure |

**Mapping logic (Status.java):**

| HTTP code | V2T Action | `isSingleEmvMessage` | Viscus status |
|-----------|-----------|----------------------|---------------|
| 200 / 201 | `PAYMENT_REQUEST` | — | `"Pending"` |
| 200 / 201 | `PAYMENT_COMPLETION_REQUEST` | — | `"Pending"` |
| 200 / 201 | `AUTHORIZATION_REQUEST` | `true` | `"Pending"` |
| 200 / 201 | `AUTHORIZATION_REQUEST` | `false` | `"Authorization Granted"` |
| 200 / 201 | `REFUND_REQUEST` / `MOTO_REFUND_REQUEST` | — | `"Pending"` |
| 200 / 201 | `MOTO_SALE_REQUEST` | — | `"Pending"` |
| 200 / 201 | `TIP_ADJUSTMENT_REQUEST` | — | `"Pending"` |
| 200 / 201 | `REVERSAL_REQUEST` / cancellations / pre-auth variants / tokens | — | `"Completed"` |
| 403 | any | — | `"Decline"` |
| other | any | — | `"Error"` |

---

## Viscus TxnType Reference

Source: `viscus-capture-dev/.../enums/TxnType.java`

| TxnType enum | String stored in DB | V2T Actions that map to it |
|-------------|---------------------|---------------------------|
| `AUTHORIZATION` | `"Authorization"` | `PAYMENT_REQUEST`, `AUTHORIZATION_REQUEST`, `PAYMENT_COMPLETION_REQUEST`, `MOTO_SALE_REQUEST` |
| `REFUND` | `"Refund"` | `REFUND_REQUEST` (non-TNS), `MOTO_REFUND_REQUEST` |
| `REVERSAL` | `"Reversal"` | `REVERSAL_REQUEST`, `MOTO_REVERSAL_REQUEST`, `REFUND_REQUEST` (TNS only) |
| `CANCELLATION` | `"Cancellation"` | `CANCELLATION_REQUEST`, `MOTO_CANCELLATION_REQUEST` |
| `CARD_TOKENIZATION` | `"Tokenization"` | `CARDTOKENIZATION_REQUEST`, `DEFERRED_TOKENIZATION_REQUEST` |
| `CARD_PAN` | `"CardPan"` | `CARDPAN_REQUEST` |
| `PREAUTHORIZATION` | `"Preauthorization"` | `PREAUTHORIZATION_REQUEST`, `MOTO_PREAUTH_REQUEST` |
| `PREAUTHORIZATION_INCREASE` | `"Preauthorization Increase"` | `PREAUTHORIZATION_INCREASE_REQUEST` |
| `PREAUTHORIZATION_CAPTURE` | `"Preauthorization Capture"` | `PREAUTHORIZATION_CAPTURE_REQUEST` |
| `TIP_ADJUSTMENT` | `"Tip"` | `TIP_ADJUSTMENT_REQUEST` |

---

## Special Cases

### 1. `"Authorization Granted"` — Not a Failure

A TXN Feed record with viscus status `"Authorization Granted"` (TXN Feed HTTP `status: 200`) is **NOT an error**. It is the first leg of a double-message EMV card-present flow (used in hotel/restaurant pre-authorizations and some acquirer flows).

**What to expect in TXN Feed:**
- `name`: `"EMV Sale"`, `status`: 200
- A second record with `name: "EMV Sale"` and `status: 200` appears when `PAYMENT_COMPLETION_REQUEST` arrives

**Display guidance:** Show as informational (e.g. blue badge), never as an error.

### 2. TNS Protocol — Refund Stored as Reversal

On terminals using the TNS (Transaction Network Services) protocol, `REFUND_REQUEST` is mapped by viscus-capture to `TxnType.REVERSAL`. The TXN Feed will show:
- `name: "Sale Reversal"` (instead of `"EMV Refund"`)
- `type: "Reversal"` (instead of `"Refund"`)

This is a known protocol-specific quirk. The acquirer processes it as a refund, but the TXN Feed label reflects the TNS wire format.

### 3. `transactionStreams` Defaults to Card-Present Only

If `transactionStreams` is omitted from your `RequestConfig`, the TXN Feed API only queries `txn_feed` (card-present). ECOM transactions are silently excluded. You must explicitly add `"ecommerce"` to see CardStream transactions:

```json
{ "transactionStreams": ["handpoint", "ecommerce"] }
```

### 4. Store & Forward

Transactions processed offline (store-and-forward) go through the same V2T pipeline when connectivity is restored. The `storeAndForward` field in `TransactionData` is `"1"`. The `name`, `type`, and `status` values follow the same mapping as online transactions — no special names.

### 5. `MOTO_PREAUTH_REQUEST` — No `name` in TXN Feed

The logstash config does not have a branch for `MOTO_PREAUTH_REQUEST`. Transactions of this type will have an empty `name` and `type` in `txn_feed`. TxnType is `"Preauthorization"` and the viscus status is `"Completed"`.

### 6. `initPosition` + `limit` Exceeding 10 000

When using offset pagination (`initPosition`), the sum of `initPosition + limit` must not exceed the Elasticsearch `max_result_window` (default: 10 000). If the default `limit` of 10 000 is used with any non-zero `initPosition`, the query will fail. Use `searchAfter` for deep pagination.

---

## Quick Lookup: TXN Feed `name` → SDK `TransactionType`

| TXN Feed `name` | SDK `TransactionType` | Channel |
|-----------------|----------------------|---------|
| `"EMV Sale"` | `SALE` | CP (CHIP / Contactless) |
| `"MSR Sale"` | `SALE` | CP (Magstripe) |
| `"Declined EMV Sale"` | `SALE` | CP (CHIP) — declined |
| `"Declined MSR Sale"` | `SALE` | CP (MSR) — declined |
| `"EMV Refund"` | `REFUND` | CP (CHIP) |
| `"MSR Refund"` | `REFUND` | CP (MSR) |
| `"Declined EMV Refund"` | `REFUND` | CP (CHIP) — declined |
| `"Declined MSR Refund"` | `REFUND` | CP (MSR) — declined |
| `"Sale Reversal"` | `VOID_SALE` / `CANCEL_SALE` | CP |
| `"Refund Reversal"` | `VOID_REFUND` / `CANCEL_REFUND` | CP |
| `"Sale Cancellation"` | `CANCEL_SALE` | CP |
| `"Refund Cancellation"` | `CANCEL_REFUND` | CP |
| `"Declined Cancellation"` | `CANCEL_SALE` / `CANCEL_REFUND` | CP — declined |
| `"Pre-authorization"` | `PRE_AUTHORIZATION` | CP |
| `"Pre-authorization Capture"` | `PRE_AUTHORIZATION_CAPTURE` | CP |
| `"Pre-authorization Reversal"` | — | CP |
| `"Pre-authorization Capture Reversal"` | — | CP |
| `"Incremental Authorization"` | `PRE_AUTHORIZATION_INCREASE` | CP |
| `"Tip Adjustment"` | `TIP_ADJUSTMENT` | CP |
| `"Card Tokenization"` | `TOKENIZE_CARD` / `SALE_AND_TOKENIZE_CARD` | CP |
| `"Card Pan"` | `CARD_PAN` | CP |
| `"Card Not Present Sale"` | `MOTO_SALE` | MOTO |
| `"Declined Card Not Present Sale"` | `MOTO_SALE` | MOTO — declined |
| `"Card Not Present Refund"` | `MOTO_REFUND` | MOTO |
| `"Card Not Present Reversal"` | `MOTO_REVERSAL` | MOTO |
| `"Card Not Present Cancellation"` | `MOTO_CANCEL` | MOTO |
| `"Ecom Sale"` | *(no SDK — web checkout)* | ECOM |
| `"Ecom Declined Sale"` | *(no SDK — web checkout)* | ECOM |
| `"Ecom Refund"` | *(no SDK — web checkout)* | ECOM |
| `"Ecom Declined Refund"` | *(no SDK — web checkout)* | ECOM |
| `"Ecom Preauth"` | *(no SDK — web checkout)* | ECOM |
| `"Ecom Capture"` | *(no SDK — web checkout)* | ECOM |
| `"Ecom Canceled Sale"` | *(no SDK — web checkout)* | ECOM |
| `"Ecom Canceled Preauth"` | *(no SDK — web checkout)* | ECOM |

---

## Source Files

| File | What it defines |
|------|----------------|
| `Android SDK/.../FinancialStatus.kt` | SDK `finStatus` enum |
| `Android SDK/.../TransactionType.kt` | SDK `TransactionType` enum |
| `viscus-capture-dev/.../TxnType.java` | V2T action → internal type string |
| `viscus-capture-dev/.../Status.java` | HTTP status + action → viscus status string |
| `queen-api-dev/logstash/logstash.conf` | action + paymentScenario + status → TXN Feed `name` + `type` |
| `cardstream-analytics-dev/.../TransactionEntityMapper.java` | CardStream action + responseCode + state → ECOM `name` |
