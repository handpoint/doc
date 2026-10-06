---
title: Cloud API — Operations Reference
sidebar_label: Operations Reference
sidebar_position: 2
description: Per-operation request and response examples for the Handpoint Cloud API — sale, pre-auth, refund, reversal, MOTO, and tokenization, with curl, JSON, and full parameter tables at each step.
---

# Cloud API — Operations Reference

Complete request/response examples for every Cloud API operation. Each section shows the full two-step flow — the curl command, the 202 acceptance, the poll, and the final result — alongside a parameter table and the most common error responses.

For authentication, environments, and callback vs polling delivery, see the [Cloud API Integration Guide](/reference/cloud-api-integration-guide).  
For error code definitions and error shapes, see [Error codes](/reference/error-codes).

---

## Response pattern

All terminal operations follow a two-step model. Step 1 is synchronous; step 2 is polled.

**Step 1 — send the operation**

```bash
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "operation": "sale", "amount": "15012", ... }'
```

```json
// HTTP 202 — accepted immediately; terminal begins processing
{
  "statusMessage": "Operation Accepted",
  "transactionResultId": "1850025030-1788700677769",
  "transactionReference": "5c7056aa-b0a6-4ee9-891e-aae6ce7ea725"
}
```

**Step 2 — poll for the result**

```bash
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700677769 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — final result; finStatus other than IN_PROGRESS means complete
{
  "finStatus": "AUTHORISED",
  ...
}
```

Poll at ~3s intervals until `finStatus` is not `IN_PROGRESS`. The terminal can take up to 6 minutes for a full fallback path (contactless fail → chip fail → swipe → wrong PINs).

**Exception — gateway-synchronous:** `POST /reversal` and `POST /preauthorization/capture` return their result directly (no poll).

---

## Sale

```bash
# Step 1 — initiate
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "sale",
  "amount": "15012",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "transactionReference": "5c7056aa-b0a6-4ee9-891e-aae6ce7ea725"
}'
```

```json
// HTTP 202
{
  "statusMessage": "Operation Accepted",
  "transactionResultId": "1850025030-1788700677769",
  "transactionReference": "5c7056aa-b0a6-4ee9-891e-aae6ce7ea725"
}
```

```bash
# Step 2 — poll (use transactionResultId from step 1)
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700677769 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — AUTHORISED
{
  "finStatus": "AUTHORISED",
  "statusMessage": "Approved or completed successfully",
  "authorisationCode": "123456",
  "transactionID": "67905570-a9f5-11f1-a943-f9c9f04151d9",
  "transactionReference": "5c7056aa-b0a6-4ee9-891e-aae6ce7ea725",
  "maskedCardNumber": "************0936",
  "cardSchemeName": "VISA",
  "tenderType": "CREDIT",
  "cardEntryType": "ICC",
  "paymentScenario": "CHIP",
  "requestedAmount": 15012,
  "totalAmount": 15012,
  "currency": "USD",
  "rrn": "0000906190164",
  "issuerResponseCode": "00",
  "arc": "0000",
  "type": "SALE",
  "customerReceipt": "https://receipts.handpoint.com/receipts/67905570-a9f5-11f1-a943-f9c9f04151d9/customer.html",
  "merchantReceipt": "https://receipts.handpoint.com/receipts/67905570-a9f5-11f1-a943-f9c9f04151d9/merchant.html"
}
```

**Request parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `operation` | string | **Yes** | — | `"sale"` |
| `serial_number` | string | **Yes** | — | Terminal serial number |
| `terminal_type` | string | **Yes** | — | PAX model — e.g. `"PAXA920PRO"`. [Valid values](#terminal_type-values) |
| `amount` | string | **Yes** | — | Minor-unit amount as a string — `"1000"` = $10.00. Digits only, max 12 characters. |
| `currency` | string | **Yes** | — | ISO 4217 alpha-3 — `"USD"`, `"GBP"`, `"EUR"` |
| `transactionReference` | string | Recommended | auto-UUID | UUID v4. Persist before sending — required for recovery via `GET /transactions/{ref}/status`. Only honoured for `sale`, `refund`, `saleAndTokenizeCard`, `preAuthorization`. |
| `callbackUrl` | string | No | — | HTTPS endpoint. Result POSTed here when complete. |
| `token` | string | No | — | Sent as `auth-token` header on the callback POST. Use a unique value per request. |
| `customerReference` | string | No | — | Free-text order reference stored with the transaction. |
| `duplicate_check` | boolean | No | `true` | When `true` (default), the terminal checks whether the same `transactionReference` was used recently. If a duplicate is detected, a **30-second confirmation prompt** is shown on the terminal screen — the merchant must accept or decline. **Accept** → a new authorisation request is sent to the gateway; the final result is delivered normally. **Decline** → `finStatus: CANCELLED` is delivered immediately; no card charge. Set `false` only when you are intentionally replaying a reference (e.g. after recovering an UNDEFINED result and confirming the transaction was not charged). |
| `bypassOptions` | object | No | — | `{ "signatureBypass": bool, "pinBypass": bool }` — see [bypassOptions](#bypassoptions) |
| `tipConfiguration` | object | No | — | Tip selection screen — see [tipConfiguration](#tipconfiguration) |
| `merchantAuth` | array | No | — | Multi-MID credential override — see [merchantAuth](#merchantauth) |
| `metadata` | object | No | — | `{ "metadata1": "…", …, "metadata5": "…" }` — max 250 chars each |
| `moneyRemittanceOptions` | object | No | — | EmerchantPay only — see [moneyRemittanceOptions](#moneyremittanceoptions) |
| `billing` | object | No | — | AVS — `{ "zipCode": string (required), "address": string (optional) }` |

---

## Sale and Tokenize

Simultaneously runs a sale and tokenizes the card for future MOTO/back-office use. Requires a card token provider configured on the merchant.

```bash
# Step 1 — initiate
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "saleAndTokenizeCard",
  "amount": "1215",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "transactionReference": "b777a62d-9bfb-4b6a-b188-7f842a930770"
}'
```

```bash
# Step 2 — poll
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700034700 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — AUTHORISED
{
  "finStatus": "AUTHORISED",
  "statusMessage": "Approved or completed successfully",
  "authorisationCode": "123456",
  "cardToken": "K33f40000000000093",
  "transactionID": "e3303350-a9f3-11f1-a943-f9c9f04151d9",
  "maskedCardNumber": "************0936",
  "cardSchemeName": "VISA",
  "tenderType": "CREDIT",
  "cardEntryType": "ICC",
  "paymentScenario": "CHIPCONTACTLESS",
  "requestedAmount": 1215,
  "totalAmount": 1215,
  "currency": "USD",
  "type": "SALE"
}
```

The `cardToken` value (e.g. `"K33f40000000000093"`) is the Cygma token format. Store it for subsequent MOTO operations.

**Request parameters** — same as [Sale](#sale) except:

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `operation` | string | **Yes** | `"saleAndTokenizeCard"` |
| `tipConfiguration` | — | — | Not valid for `saleAndTokenizeCard` — omit it |

All other Sale parameters apply. `tipConfiguration` is not valid for `saleAndTokenizeCard` — omit it.

### Error — token provider not configured

```json
// HTTP 200 poll — DECLINED
{
  "finStatus": "DECLINED",
  "statusMessage": "Card token failure",
  "errorMessage": "",
  "cardToken": "",
  "transactionID": "",
  "requestedAmount": 0,
  "type": "SALE"
}
```

| Detection signal | Value |
|---|---|
| `finStatus` | `DECLINED` |
| `transactionID` | Empty string — acquirer was never contacted |
| `requestedAmount` | `0` — no amount was processed |
| `cardToken` | Empty string |

---

## Tokenize Card

No-charge card tokenization. The card is presented at the terminal, tokenized, and no payment is taken. The token is returned in `cardToken` in the poll result. `finStatus` is `PROCESSED` on success.

```bash
# Step 1 — initiate
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "tokenizeCard",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030"
}'
```

```json
// HTTP 202
{
  "statusMessage": "Operation Accepted",
  "transactionResultId": "1850025030-1788700678000"
}
```

```bash
# Step 2 — poll
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700678000 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — PROCESSED
{
  "finStatus": "PROCESSED",
  "statusMessage": "Approved or completed successfully",
  "cardToken": "K33f40000000000093",
  "maskedCardNumber": "************0936",
  "cardSchemeName": "VISA",
  "cardEntryType": "ICC",
  "type": "TOKENIZE_CARD"
}
```

**Request parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `operation` | string | **Yes** | `"tokenizeCard"` |
| `serial_number` | string | **Yes** | Terminal serial number |
| `terminal_type` | string | **Yes** | PAX model — [valid values](#terminal_type-values) |
| `customerReference` | string | No | Free-text reference echoed in the result |
| `callbackUrl` | string | No | HTTPS webhook endpoint |
| `token` | string | No | Callback auth token |

Amount and currency are not required — no charge is made. `transactionReference` is not honoured for `tokenizeCard`.

---

## Pre-Authorization

Places a hold on funds without capturing them. Requires `preAuthAllowed = true` on the merchant.

```bash
# Step 1 — create the hold
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "preAuthorization",
  "amount": "10000",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "transactionReference": "e4826edd-7579-48ca-9553-743e5b76d855"
}'
```

```bash
# Step 2 — poll
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700629963 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — AUTHORISED (hold placed, no funds captured)
{
  "finStatus": "AUTHORISED",
  "statusMessage": "Approved or completed successfully",
  "authorisationCode": "123456",
  "transactionID": "4b2c4470-a9f5-11f1-99ee-c974d92ef76f",
  "requestedAmount": 10000,
  "totalAmount": 10000,
  "type": "PRE_AUTHORIZATION"
}
```

**Pre-Auth create — request parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `operation` | string | **Yes** | — | `"preAuthorization"` |
| `serial_number` | string | **Yes** | — | Terminal serial number |
| `terminal_type` | string | **Yes** | — | PAX model — [valid values](#terminal_type-values) |
| `amount` | string | **Yes** | — | Minor-unit string — `"10000"` = $100.00. Digits only. |
| `currency` | string | **Yes** | — | ISO 4217 |
| `transactionReference` | string | Recommended | auto-UUID | UUID v4. Links all subsequent operations via `/status/all`. |
| `callbackUrl` | string | No | — | HTTPS webhook endpoint |
| `token` | string | No | — | Callback auth token |
| `customerReference` | string | No | — | Free-text reference |
| `duplicate_check` | boolean | No | `true` | When `true` (default), the terminal checks whether the same `transactionReference` was used recently. If a duplicate is detected, a **30-second confirmation prompt** is shown on the terminal — accept sends a new authorisation, decline delivers `finStatus: CANCELLED`. Set `false` only when intentionally replaying a reference after an UNDEFINED recovery. |
| `bypassOptions` | object | No | — | `{ "signatureBypass": bool, "pinBypass": bool }` |
| `merchantAuth` | array | No | — | Multi-MID override — see [merchantAuth](#merchantauth) |
| `metadata` | object | No | — | Up to 5 string fields, max 250 chars each |

```bash
# Capture — use transactionID from the hold result as originalGuid
curl -X POST https://cloud.handpoint.com/preauthorization/capture \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "originalGuid": "4b2c4470-a9f5-11f1-99ee-c974d92ef76f",
  "capturedAmount": "10000",
  "currency": "USD"
}'
```

```json
// HTTP 200 — AUTHORISED (funds captured)
{
  "finStatus": "AUTHORISED",
  "type": "PRE_AUTHORIZATION_CAPTURE"
}
```

**`POST /preauthorization/capture` — request parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `originalGuid` | string | **Yes** | — | `transactionID` from the Pre-Authorization create result. Max 64 chars. |
| `capturedAmount` | string | **Yes** | — | Amount to capture. Max 32 chars. ⚠️ See unit note below. |
| `tipAmount` | string | No | — | Optional tip to add to the capture. Same unit as `capturedAmount`. Max 32 chars. |
| `customerReference` | string | No | — | Free-text reference. Max 64 chars. |

:::note `capturedAmount` uses major units (decimal)
Pass `capturedAmount` as a **major-unit decimal string** — e.g. `"45.00"` for $45.00, `"120.00"` for $120.00. This matches `increaseAmount` and the `/reversal` `amount` field. It is **not** minor units.
:::

**`POST /preauthorization/increase` — request parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `originalGuid` | string | **Yes** | — | `transactionID` from the Pre-Authorization create result. Max 64 chars. |
| `increaseAmount` | string | **Yes** | — | Delta to add (or subtract). Always a positive value. **Major-unit decimal** — e.g. `"5.00"` = $5.00. Max 32 chars. |
| `subtract` | string | No | — | Pass `"1"` to decrease the hold instead of increase. `"1"` is the only accepted value. |
| `tipAmount` | string | No | — | Tip amount adjustment. Same unit as `increaseAmount`. Max 32 chars. |
| `customerReference` | string | No | — | Free-text reference. Max 64 chars. |

### Error — pre-auth not enabled

```json
// HTTP 200 poll — DECLINED
{
  "finStatus": "DECLINED",
  "statusMessage": "Pre-authorizations are not enabled for this terminal",
  "errorMessage": "",
  "arc": "1000",
  "cardEntryType": "ICC",
  "type": "PRE_AUTHORIZATION",
  "transactionID": "4b2c4470-a9f5-11f1-99ee-c974d92ef76f",
  "issuerResponseCode": "00"
}
```

### Error — capture exceeds hold amount

```bash
curl -X POST https://cloud.handpoint.com/preauthorization/capture \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "originalGuid": "4b2c4470-a9f5-11f1-99ee-c974d92ef76f",
  "capturedAmount": "15000",
  "currency": "USD"
}'
```

```json
// HTTP 400 — synchronous rejection
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Capture amount cannot be greater than pre-auth hold amount",
    "code": "3215",
    "details": { "errorCode": "3215", "httpStatus": 403 }
  }
}
```

### Error — pre-auth already captured or reversed

```json
// HTTP 400 — synchronous rejection
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Authorization has already been completed",
    "code": "3052",
    "details": { "errorCode": "3052", "httpStatus": 409 }
  }
}
```

### Pre-Authorization Reversal (on terminal)

Releases a pre-authorization hold without capturing it. The terminal must be connected — the card may need to be re-presented depending on the acquirer.

```bash
# Step 1 — initiate
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "preAuthorizationReversal",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "originalTransactionId": "4b2c4470-a9f5-11f1-99ee-c974d92ef76f"
}'
```

```bash
# Step 2 — poll
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700630100 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — AUTHORISED (hold released)
{
  "finStatus": "AUTHORISED",
  "statusMessage": "Approved or completed successfully",
  "transactionID": "4f9d2200-a9f5-11f1-99ee-c974d92ef76f",
  "type": "PRE_AUTHORIZATION_REVERSAL"
}
```

**Request parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `operation` | string | **Yes** | `"preAuthorizationReversal"` |
| `serial_number` | string | **Yes** | Terminal serial number |
| `terminal_type` | string | **Yes** | PAX model — [valid values](#terminal_type-values) |
| `originalTransactionId` | string | **Yes** | `transactionID` from the original pre-authorization result |
| `customerReference` | string | No | Free-text reference |

:::note Gateway-level reversal without a terminal
To release a pre-auth hold remotely (without a terminal), use `POST /reversal` with the `originalGuid` set to the pre-auth `transactionID`. See [Reversal](#reversal).
:::

---

## Refund

Card-present refund. Requires `refundAllowed = true` on the merchant. For linked refunds, include `originalTransactionId`.

```bash
# Step 1 — initiate
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "refund",
  "amount": "5000",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "transactionReference": "eb6a9a5e-ad43-4014-a8a0-b0b7243169d5"
}'
```

```bash
# Step 2 — poll
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700667457 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — AUTHORISED
{
  "finStatus": "AUTHORISED",
  "statusMessage": "Approved or completed successfully",
  "transactionID": "5e88eeb0-a9f5-11f1-a943-f9c9f04151d9",
  "requestedAmount": 5000,
  "totalAmount": 5000,
  "type": "REFUND"
}
```

**Request parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `operation` | string | **Yes** | — | `"refund"` |
| `serial_number` | string | **Yes** | — | Terminal serial number |
| `terminal_type` | string | **Yes** | — | PAX model — [valid values](#terminal_type-values) |
| `amount` | string | **Yes** | — | Minor-unit string — `"5000"` = $50.00. Digits only. |
| `currency` | string | **Yes** | — | ISO 4217 |
| `transactionReference` | string | Recommended | auto-UUID | UUID v4. Persist before sending. |
| `originalTransactionId` | string | No | — | `transactionID` from the original sale. Include to link the refund (same-card enforcement). |
| `callbackUrl` | string | No | — | HTTPS webhook endpoint |
| `token` | string | No | — | Callback auth token |
| `customerReference` | string | No | — | Free-text reference |
| `duplicate_check` | boolean | No | `true` | When `true` (default), the terminal checks whether the same `transactionReference` was used recently. If a duplicate is detected, a **30-second confirmation prompt** is shown on the terminal — accept sends a new authorisation, decline delivers `finStatus: CANCELLED`. Set `false` only when intentionally replaying a reference after an UNDEFINED recovery. |
| `bypassOptions` | object | No | — | `{ "signatureBypass": bool, "pinBypass": bool }` |
| `merchantAuth` | array | No | — | Multi-MID override |
| `metadata` | object | No | — | Up to 5 string fields, max 250 chars each |

**Linked refund** — add `originalTransactionId` to refund against a specific sale and require the same card:

```bash
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "refund",
  "amount": "5000",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "originalTransactionId": "67905570-a9f5-11f1-a943-f9c9f04151d9",
  "transactionReference": "eb6a9a5e-ad43-4014-a8a0-b0b7243169d5"
}'
```

### Error — refunds not enabled

```json
// HTTP 200 poll — DECLINED
{
  "finStatus": "DECLINED",
  "statusMessage": "Refund not allowed",
  "errorMessage": "",
  "arc": "0000",
  "cardEntryType": "ICC",
  "type": "REFUND",
  "transactionID": "5e88eeb0-a9f5-11f1-a943-f9c9f04151d9"
}
```

:::note Acquirer variation
TSYSDummy rejects refunds synchronously with HTTP 400 when `refundAllowed=false`. ViscusDummy forwards to the terminal (202) and declines after card read. Handle both code paths.
:::

### Error — wrong card on linked refund

When `refundOriginalCardOnly = true`, the refund must be performed on the original card.

```json
// HTTP 200 poll — DECLINED
{
  "finStatus": "DECLINED",
  "statusMessage": "ORIGINAL_CARD_REQUIRED_FOR_REFUND",
  "cardEntryType": "ICC",
  "type": "REFUND"
}
```

`statusMessage: "ORIGINAL_CARD_REQUIRED_FOR_REFUND"` is an English constant on this error path — safe to match programmatically.

### Error — transaction not refundable

When a sale was processed while `refundAllowed = false`, the transaction is permanently flagged as non-refundable. This flag persists even after re-enabling the capability.

:::warning Cannot be fixed by changing TMS configuration
Escalate to `support@handpoint.com` — the Handpoint operations team can manually clear the non-refundable flag on specific transactions.
:::

### Refund Reversal (on terminal)

Reverses a previously issued refund, restoring the original refunded amount to the merchant. The terminal must be connected.

```bash
# Step 1 — initiate
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "refundReversal",
  "amount": "5000",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "originalTransactionId": "5e88eeb0-a9f5-11f1-a943-f9c9f04151d9"
}'
```

```bash
# Step 2 — poll
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700668000 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — AUTHORISED
{
  "finStatus": "AUTHORISED",
  "statusMessage": "Approved or completed successfully",
  "transactionID": "6c22a900-a9f5-11f1-a943-f9c9f04151d9",
  "requestedAmount": 5000,
  "totalAmount": 5000,
  "type": "REFUND_REVERSAL"
}
```

**Request parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `operation` | string | **Yes** | `"refundReversal"` |
| `serial_number` | string | **Yes** | Terminal serial number |
| `terminal_type` | string | **Yes** | PAX model — [valid values](#terminal_type-values) |
| `amount` | string | **Yes** | Amount in minor units. For acquirers that support partial reversal, the specified amount is reversed. For others, the full original refund amount is reversed regardless of this value. |
| `currency` | string | **Yes** | ISO 4217 currency code |
| `originalTransactionId` | string | **Yes** | `transactionID` from the refund to reverse |
| `customerReference` | string | No | Free-text reference |

---

## Reversal

Reverses all or part of an authorized transaction. Full reversals are always available. Partial reversals require `partialReversalAllowed = true`. The response is **synchronous** — no polling needed.

```bash
# Full reversal
curl -X POST https://cloud.handpoint.com/reversal \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "originalGuid": "67905570-a9f5-11f1-a943-f9c9f04151d9",
  "amount": "150.12",
  "currency": "USD"
}'
```

```json
// HTTP 200 — AUTHORISED (synchronous)
{
  "finStatus": "AUTHORISED",
  "transactionID": "6a1d41e0-a9f5-11f1-a943-f9c9f04151d9",
  "type": "REVERSAL"
}
```

Omit `amount` (or pass the full original amount) for a full reversal. For a partial reversal, pass the specific amount to release.

**`POST /reversal` — request parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `originalGuid` | string | **Yes** | — | `transactionID` from the original AUTHORISED sale result |
| `amount` | string | No | Full original amount | Major-unit decimal — `"50.04"` = $50.04. Omit for full reversal. Required for partial reversal. |
| `currency` | string | No | — | ISO 4217. Required when `amount` is provided. |
| `messageReasonCode` | string | No | `"CUSTOMER_CANCELLATION"` | Reason for the reversal. `"CUSTOMER_CANCELLATION"` (default) — cardholder or merchant initiated. `"TIMEOUT_WAITING_FOR_RESPONSE"` — use when reversing because you did not receive an authorization response in time. |

### Error — partial reversal not enabled

The only capability enforced at the gateway HTTP layer — the terminal is never involved.

```bash
curl -X POST https://cloud.handpoint.com/reversal \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "originalGuid": "67905570-a9f5-11f1-a943-f9c9f04151d9",
  "amount": "50.04",
  "currency": "USD"
}'
```

```json
// HTTP 400 — synchronous rejection
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Partial reversals are not supported",
    "code": "3109",
    "details": { "errorCode": "3109", "reason": "Partial reversals are not supported" }
  }
}
```

### Error — transaction not found

```bash
curl -X POST https://cloud.handpoint.com/reversal \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "originalGuid": "00000000-0000-0000-0000-000000000000",
  "currency": "USD"
}'
```

```json
// HTTP 400
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Unable to find message to reverse.",
    "code": "3153",
    "details": { "errorCode": "3153", "httpStatus": 404 }
  }
}
```

### Error — already reversed

```json
// HTTP 400
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Authorization has already been completed",
    "code": "3052",
    "details": { "errorCode": "3052", "httpStatus": 409 }
  }
}
```

---

## MOTO / Card-Not-Present

MOTO uses a stored card token. Requires `supportsMoto = true` on the merchant.

| Operation | Endpoint | Response model |
|---|---|---|
| Keyed entry sale / pre-auth / refund on terminal | `POST /transactions` | HTTP 202 → poll |
| Remote sale (back-office, no terminal) | `POST /moto/sale` | Synchronous |
| Remote refund (back-office, no terminal) | `POST /moto/refund` | Synchronous |

### MOTO sale — keyed entry on terminal

```bash
# Step 1 — initiate (cardToken from a previous saleAndTokenizeCard)
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "moToSale",
  "amount": "2000",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "cardToken": "K33f40000000000093",
  "transactionReference": "a1b2c3d4-0000-4000-8000-000000000001"
}'
```

```bash
# Step 2 — poll
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700645247 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — AUTHORISED
{
  "finStatus": "AUTHORISED",
  "statusMessage": "Approved or completed successfully",
  "authorisationCode": "123456",
  "transactionID": "57cd25a0-a9f5-11f1-a943-f9c9f04151d9",
  "paymentScenario": "MOTO",
  "cardEntryType": "CNP",
  "requestedAmount": 2000,
  "totalAmount": 2000,
  "type": "MOTO_SALE"
}
```

**`POST /transactions` — moToSale — request parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `operation` | string | **Yes** | — | `"moToSale"` |
| `serial_number` | string | **Yes** | — | Terminal serial number |
| `terminal_type` | string | **Yes** | — | PAX model — [valid values](#terminal_type-values) |
| `amount` | string | **Yes** | — | Minor-unit string — `"2000"` = $20.00. Digits only. |
| `currency` | string | **Yes** | — | ISO 4217 |
| `cardToken` | string | No | — | Stored card token. If omitted, terminal shows manual card-entry screen. |
| `channel` | string | No | — | `"MO"` (mail order) or `"TO"` (telephone order) |
| `callbackUrl` | string | No | — | HTTPS webhook endpoint |
| `token` | string | No | — | Callback auth token |
| `customerReference` | string | No | — | Free-text reference |
| `merchantAuth` | array | No | — | Multi-MID override |
| `metadata` | object | No | — | Up to 5 string fields, max 250 chars each |
| `billing` | object | No | — | AVS — `{ "zipCode": string (required), "address": string (optional) }` |

:::warning `transactionReference` bug on moToSale (CUS-837)
The `transactionReference` you send is ignored by the Cloud API for `moToSale` — the returned result contains a system-generated reference that does not match your value. Recovery via `GET /transactions/{ref}/status` will not work for keyed-entry MOTO. Use `transactionResultId` to poll instead, and store `transactionID` from the result for recovery. Status: open as of 2026-09-06.
:::

### MOTO refund — keyed entry on terminal

```bash
# Step 1 — initiate
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "moToRefund",
  "amount": "2000",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "originalTransactionId": "57cd25a0-a9f5-11f1-a943-f9c9f04151d9"
}'
```

```bash
# Step 2 — poll
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700646000 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — AUTHORISED
{
  "finStatus": "AUTHORISED",
  "statusMessage": "Approved or completed successfully",
  "transactionID": "5f3a1100-a9f5-11f1-a943-f9c9f04151d9",
  "paymentScenario": "MOTO",
  "cardEntryType": "CNP",
  "requestedAmount": 2000,
  "totalAmount": 2000,
  "type": "MOTO_REFUND"
}
```

**`POST /transactions` — moToRefund — request parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `operation` | string | **Yes** | `"moToRefund"` |
| `serial_number` | string | **Yes** | Terminal serial number |
| `terminal_type` | string | **Yes** | PAX model — [valid values](#terminal_type-values) |
| `amount` | string | **Yes** | Minor-unit string — `"2000"` = $20.00. Digits only. |
| `currency` | string | **Yes** | ISO 4217 |
| `originalTransactionId` | string | No | `transactionID` from the original MOTO sale for a linked refund. Omit for unlinked. |
| `cardToken` | string | No | Stored card token. If omitted, terminal shows manual card-entry screen. |
| `customerReference` | string | No | Free-text reference |

### MOTO reversal — keyed entry on terminal

```bash
# Step 1 — initiate
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "moToReversal",
  "amount": "2000",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "originalTransactionId": "57cd25a0-a9f5-11f1-a943-f9c9f04151d9"
}'
```

```bash
# Step 2 — poll
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700647000 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — AUTHORISED
{
  "finStatus": "AUTHORISED",
  "statusMessage": "Approved or completed successfully",
  "transactionID": "6031c200-a9f5-11f1-a943-f9c9f04151d9",
  "paymentScenario": "MOTO",
  "type": "MOTO_REVERSAL"
}
```

**`POST /transactions` — moToReversal — request parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `operation` | string | **Yes** | `"moToReversal"` |
| `serial_number` | string | **Yes** | Terminal serial number |
| `terminal_type` | string | **Yes** | PAX model — [valid values](#terminal_type-values) |
| `amount` | string | **Yes** | Minor-unit string — `"2000"` = $20.00. Digits only. |
| `currency` | string | **Yes** | ISO 4217 |
| `originalTransactionId` | string | **Yes** | `transactionID` from the original MOTO sale to reverse |
| `customerReference` | string | No | Free-text reference |

### MOTO pre-authorization — keyed entry on terminal

```bash
# Step 1 — initiate
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "moToPreAuthorization",
  "amount": "10000",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "cardToken": "K33f40000000000093"
}'
```

```bash
# Step 2 — poll
curl https://cloud.handpoint.com/transaction-result/1850025030-1788700648000 \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — AUTHORISED (hold placed, no funds captured)
{
  "finStatus": "AUTHORISED",
  "statusMessage": "Approved or completed successfully",
  "transactionID": "6132b300-a9f5-11f1-a943-f9c9f04151d9",
  "paymentScenario": "MOTO",
  "cardEntryType": "CNP",
  "requestedAmount": 10000,
  "totalAmount": 10000,
  "type": "MOTO_PRE_AUTHORIZATION"
}
```

**`POST /transactions` — moToPreAuthorization — request parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `operation` | string | **Yes** | `"moToPreAuthorization"` |
| `serial_number` | string | **Yes** | Terminal serial number |
| `terminal_type` | string | **Yes** | PAX model — [valid values](#terminal_type-values) |
| `amount` | string | **Yes** | Minor-unit string — `"10000"` = $100.00. Digits only. |
| `currency` | string | **Yes** | ISO 4217 |
| `cardToken` | string | No | Stored card token. If omitted, terminal shows manual card-entry screen. |
| `customerReference` | string | No | Free-text reference |

Capture and release the hold using `POST /preauthorization/capture` and `POST /reversal` respectively, with the `transactionID` from this result as `originalGuid`.

### MOTO remote sale — back-office (no terminal)

```bash
curl -X POST https://cloud.handpoint.com/moto/sale \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "amount": "20.00",
  "currency": "USD",
  "cardToken": "K33f40000000000093",
  "transactionReference": "a1b2c3d4-0000-4000-8000-000000000002"
}'
```

```json
// HTTP 200 — synchronous result
{
  "finStatus": "AUTHORISED",
  "authorisationCode": "123456",
  "transactionID": "7ef31400-a9f5-11f1-a943-f9c9f04151d9",
  "paymentScenario": "MOTO",
  "requestedAmount": 2000,
  "totalAmount": 2000,
  "type": "MOTO_SALE"
}
```

**`POST /moto/sale` — request parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `amount` | string | **Yes** | — | **Major-unit** decimal string — `"20.00"` = $20.00. Pattern: `^\d+(\.\d+)?$`. This endpoint uses major units, unlike `POST /transactions` which uses minor units. |
| `currency` | string | **Yes** | — | ISO 4217. Exactly 3 characters. |
| `cardToken` | string | **Yes** | — | Stored card token from a prior `saleAndTokenizeCard`. Max 64 chars. |
| `transactionReference` | string | No | — | UUID v4 recommended. Max 50 chars. |
| `customerReference` | string | No | — | Free-text reference. Max 50 chars. |
| `channel` | string | No | — | `"MO"` (mail order) or `"TO"` (telephone order) |
| `billing` | object | No | — | AVS — `{ "zipCode": string (required), "address": string (optional) }`. Postal code and optional street address forwarded to the acquirer for address verification. Requires `avsForMoto` enabled for the merchant. See [AVS](/reference/avs). |

**`POST /moto/refund` — request parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `originalGuid` | string | **Yes** | — | `transactionID` from the original MOTO sale |
| `amount` | string | **Yes** | — | **Major-unit** decimal string. Pattern: `^\d+(\.\d+)?$`. |
| `currency` | string | **Yes** | — | ISO 4217. Exactly 3 characters. |
| `transactionReference` | string | No | — | UUID v4 recommended. Max 50 chars. |
| `customerReference` | string | No | — | Free-text reference. Max 50 chars. |
| `channel` | string | No | — | `"MO"` or `"TO"` |

### Error — MOTO not enabled (keyed entry path)

```json
// HTTP 200 poll — FAILED (not DECLINED)
{
  "finStatus": "FAILED",
  "statusMessage": "HMAC mismatch",
  "errorMessage": "HMAC mismatch",
  "paymentScenario": "MOTO",
  "cardEntryType": "CNP",
  "type": "MOTO_SALE",
  "transactionID": "57cd25a0-a9f5-11f1-a943-f9c9f04151d9"
}
```

`finStatus: "FAILED"` — not `DECLINED`. ViscusDummy returns a technical failure when MOTO is disabled. Real acquirers may return `DECLINED`. Always branch on `finStatus`, not message text.

---

## Recovery — check transaction status

Use this when a server restart, network drop, or crash means you missed the callback or poll result.

:::warning Different base URL
The status endpoint is on **`transactions.handpoint.com`**, not `cloud.handpoint.com`. Using the wrong host returns 404.

| Purpose | Base URL |
|---|---|
| Send transactions (POST) / poll by `transactionResultId` (GET) | `cloud.handpoint.com` |
| Check status by `transactionReference` | **`transactions.handpoint.com`** |
:::

```bash
curl https://transactions.handpoint.com/transactions/5c7056aa-b0a6-4ee9-891e-aae6ce7ea725/status \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

```json
// HTTP 200 — resolved
{
  "finStatus": "AUTHORISED",
  "transactionID": "67905570-a9f5-11f1-a943-f9c9f04151d9",
  "totalAmount": 15012,
  "currency": "USD",
  "type": "SALE"
}
```

The path parameter is your `transactionReference` (the UUID you set). This endpoint does not return `customerReceipt` / `merchantReceipt` URLs — build the receipt from the result fields if needed.

```bash
# Query the full operation chain (sale + all subsequent operations)
curl https://transactions.handpoint.com/transactions/5c7056aa-b0a6-4ee9-891e-aae6ce7ea725/status/all \
  -H "ApiKeyCloud: YOUR_API_KEY"
```

---

## Receipts

Receipt URLs are returned in every completed poll result:

```json
{
  "customerReceipt": "https://receipts.handpoint.com/receipts/67905570-a9f5-11f1-a943-f9c9f04151d9/customer.html",
  "merchantReceipt": "https://receipts.handpoint.com/receipts/67905570-a9f5-11f1-a943-f9c9f04151d9/merchant.html"
}
```

The path uses `transactionID` (gateway-assigned GUID), not `transactionReference`.

| Condition | Receipt value |
|---|---|
| Normal transaction | Hosted URL |
| SDK lost connection before response | `""` (empty string) |
| S3 upload failure or MOTO on-terminal | Full HTML string embedded in the field |
| `finStatus: UNDEFINED` | `""` (empty string) |

**Detecting embedded HTML:** `customerReceipt.startsWith("<")` rather than `"https://"`.

For compliance field requirements, language behaviour, and building a receipt from the `/status` endpoint, see [Receipt Compliance](/reference/receipt-compliance).

---

## Device management

Remote device management commands for PAX terminals. All commands require the Handpoint Payments App to be running in **Integrated Mode** (enabled via Handpoint TMS). Commands are asynchronous — the `202 Accepted` response confirms delivery; the command executes on the device shortly after.

**Endpoint pattern:** `POST https://cloud.handpoint.com/devices/{deviceType}/{serialNumber}/{command}`

**Common headers:**

| Header | Required | Description |
|---|---|---|
| `ApiKeyCloud` | Yes | Merchant API key |
| `Content-Type` | Yes | `application/json` |

**Common response codes:**

| Code | Description |
|---|---|
| `202` | Command accepted and will be executed |
| `400` | Device not listening — offline or Payments App not in Integrated Mode |
| `403` | Authentication failed |
| `422` | Invalid request body |

---

### Set Unattended Mode

`POST /devices/{deviceType}/{serialNumber}/set-unattended-mode`

Enables or disables unattended mode. When enabled, the Android navigation bar (Home, Back, Recent) is hidden and only the Payment screen is accessible — Settings, History, and Analytics tabs are not reachable.

| Body field | Type | Required | Description |
|---|---|---|---|
| `status` | boolean | Yes | `true` to enable unattended mode, `false` to disable |

```bash
curl -X POST https://cloud.handpoint.com/devices/PAXA920PRO/1850025030/set-unattended-mode \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "status": true }'
```

```http
HTTP/1.1 202 Accepted
```

---

### Set Locale

`POST /devices/{deviceType}/{serialNumber}/set-locale`

Sets the display language and region on the terminal.

| Body field | Type | Required | Description |
|---|---|---|---|
| `locale` | string | Yes | IETF BCP 47 language tag — e.g. `"en_US"`, `"en_CA"`, `"fr_CA"`, `"es_ES"` |

```bash
curl -X POST https://cloud.handpoint.com/devices/PAXA920PRO/1850025030/set-locale \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "locale": "en_US" }'
```

```http
HTTP/1.1 202 Accepted
```

---

### Reboot

`POST /devices/{deviceType}/{serialNumber}/reboot`

Reboots the terminal. Use `force: false` (default) to check whether a transaction is in progress before rebooting.

| Body field | Type | Required | Description |
|---|---|---|---|
| `force` | boolean | Yes | `true` to reboot immediately even if a transaction is in progress. `false` to check status first — if a transaction is active, the reboot may be deferred. |

```bash
curl -X POST https://cloud.handpoint.com/devices/PAXA920PRO/1850025030/reboot \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "force": false }'
```

```http
HTTP/1.1 202 Accepted
```

---

### Set Screen Brightness

`POST /devices/{deviceType}/{serialNumber}/set-screen-brightness`

Sets the minimum and maximum screen brightness levels. Both values must be integers between 0 and 100.

| Body field | Type | Required | Description |
|---|---|---|---|
| `minimumBrightnessLevel` | integer | Yes | Minimum brightness (0–100) |
| `maximumBrightnessLevel` | integer | Yes | Maximum brightness (0–100) |

```bash
curl -X POST https://cloud.handpoint.com/devices/PAXA920PRO/1850025030/set-screen-brightness \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "minimumBrightnessLevel": 20, "maximumBrightnessLevel": 100 }'
```

```http
HTTP/1.1 202 Accepted
```

---

### Set Reboot Time

`POST /devices/{deviceType}/{serialNumber}/set-reboot-time`

Schedules a daily automatic reboot at a given hour. The actual reboot occurs at a random minute within the specified hour to spread device restarts across a fleet.

:::note Production devices only
This command is only active on production devices. It has no effect on development/staging terminals.
:::

| Body field | Type | Required | Description |
|---|---|---|---|
| `hour` | integer | Yes | Hour of day (0–23) when the device should reboot. The reboot occurs at a random minute within that hour. |

```bash
curl -X POST https://cloud.handpoint.com/devices/PAXA920PRO/1850025030/set-reboot-time \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "hour": 22 }'
```

```http
HTTP/1.1 202 Accepted
```

---

### Set Password Protected

`POST /devices/{deviceType}/{serialNumber}/set-password-protected`

Enables or disables password protection on the terminal's Payments App settings screen.

| Body field | Type | Required | Description |
|---|---|---|---|
| `status` | boolean | Yes | `true` to enable password protection, `false` to disable |

```bash
curl -X POST https://cloud.handpoint.com/devices/PAXA920PRO/1850025030/set-password-protected \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "status": true }'
```

```http
HTTP/1.1 202 Accepted
```

:::note Android SDK version requirement
Device management commands require Android SDK version 7.1006.0 or later on the terminal.
:::

---

## Parameter reference

### `terminal_type` values

All PAX devices that support the Cloud API (`isAndroidPayment: true`). Both the long form and short alias are accepted — `"PAXA920PRO"` and `"A920PRO"` are equivalent.

| Value | Short alias | Notes |
|---|---|---|
| `PAXA920` | `A920` | — |
| `PAXA920PRO` | `A920PRO` | Has printer |
| `PAXA910` | `A910` | Has printer |
| `PAXA910S` | `A910S` | Has printer |
| `PAXA920MAX` | `A920MAX` | Has printer |
| `PAXA930` | `A930` | Has printer |
| `PAXA960` | `A960` | Has printer |
| `PAXA6650` | `A6650` | Has printer |
| `PAXA8700` | `A8700` | Has printer |
| `PAXA8900` | `A8900` | Has printer |
| `PAXA80` | `A80` | Has printer and keyboard |
| `PAXA800` | `A800` | Has printer |
| `PAXA30` | `A30` | Has keyboard |
| `PAXA35` | `A35` | Has keyboard |
| `PAXA50` | `A50` | — |
| `PAXA60` | `A60` | — |
| `PAXA77` | `A77` | — |
| `PAXA3700` | `A3700` | — |
| `PAXA6630` | `A6630` | — |
| `PAXARIES6` | `ARIES6` | Has keyboard |
| `PAXARIES8` | `ARIES8` | Has keyboard |
| `PAXE500` | `E500` | Has printer |
| `PAXE600` | `E600` | Has printer |
| `PAXE700` | `E700` | Has printer |
| `PAXE800` | `E800` | Has printer |
| `PAXIM25` | `IM25` | — |
| `PAXIM30` | `IM30` | — |
| `TELPOTPS900` | `TPS900` | Telpo — has printer |

HiLite / DATECS devices (`HILITE`, `MPED400`, etc.) use Bluetooth and do not work with the Cloud API.

---

### `operation` values

| Value | Description |
|---|---|
| `sale` | Card-present sale |
| `refund` | Card-present refund |
| `saleAndTokenizeCard` | Sale + card tokenization |
| `tokenizeCard` | Tokenize only — no charge |
| `moToSale` | MOTO keyed entry on terminal |
| `moToRefund` | MOTO refund on terminal |
| `moToPreAuthorization` | MOTO pre-auth on terminal |
| `moToReversal` | MOTO reversal on terminal |
| `preAuthorization` | Pre-auth hold (card present) |
| `preAuthorizationIncrease` | Adjust hold amount |
| `preAuthorizationCapture` | Capture hold (also: dedicated `POST /preauthorization/capture`) |
| `preAuthorizationReversal` | Void / release hold |
| `saleReversal` | On-terminal reversal of a sale |
| `refundReversal` | On-terminal reversal of a refund |
| `stopCurrentTransaction` | Cancel the active terminal operation |
| `pingDevice` | Connectivity check |
| `printReceipt` | Print a receipt on the terminal |

`transactionReference` is only honoured for `sale`, `refund`, `saleAndTokenizeCard`, `preAuthorization`. For all other operation values it is stripped and replaced with a system-generated reference.

`originalTransactionId` is required for: `saleReversal`, `refundReversal`, `moToReversal`, `preAuthorizationIncrease`, `preAuthorizationCapture`, `preAuthorizationReversal`.

---

### `bypassOptions`

Both fields are required when the `bypassOptions` object is included.

| Field | Type | Default | Description |
|---|---|---|---|
| `signatureBypass` | boolean | `false` | The signature screen is not shown to the cardholder at all — signature input is bypassed entirely, not just skippable. |
| `pinBypass` | boolean | `false` | Shows the PIN screen but the cardholder can skip by pressing the green key without entering a PIN. Records `verificationMethod: PIN_BYPASS` in the result. |

:::warning Chip-enforced PIN cards ignore `pinBypass`
When a card's EMV configuration requires PIN verification, the terminal enforces it regardless of `pinBypass: true`. Acquirer configurations may also restrict bypass — confirm with your acquirer before deploying.
:::

---

### `tipConfiguration`

Valid for `sale` only (not `saleAndTokenizeCard`, `moToSale`, etc.).

| Field | Type | Required | Default | Description |
|---|---|---|---|---|
| `baseAmount` | string | No | Transaction `amount` | Amount used to calculate percentage buttons. Minor units, digits only. |
| `headerName` | string | No | `"Tip"` | Header text on the tip screen. |
| `tipPercentages` | integer[] | **Yes** | — | Percentage buttons to display — e.g. `[15, 18, 20]`. Must be non-empty when `tipConfiguration` is included. |
| `enterAmountEnabled` | boolean | No | `true` | Show a "custom amount" entry option. |
| `skipEnabled` | boolean | No | `true` | Show a "no tip / skip" button. |
| `footer` | string | No | `""` | Footer text on the tip screen. |

`tipAmount` appears in the **result** (not the request) with the amount the cardholder selected, in minor units.

---

### `merchantAuth`

An array of `Credential` objects for multi-MID scenarios. Overrides the merchant's default credentials for a specific acquirer. At most one credential per acquirer.

Each `Credential` object:

| Field | Type | Required | Description |
|---|---|---|---|
| `externalId` | string | Yes | Handpoint-assigned sub-merchant ID. Must exactly match a `subMerchantExternalId` provisioned by the Handpoint onboarding team. Max 23 chars. No other field may be present in the same object. |

See [Multi-MID](/reference/multi-mid) for full usage and testing guidance.

---

### `metadata`

| Field | Type | Max length | Description |
|---|---|---|---|
| `metadata1` | string | 250 | Custom field 1 |
| `metadata2` | string | 250 | Custom field 2 |
| `metadata3` | string | 250 | Custom field 3 |
| `metadata4` | string | 250 | Custom field 4 |
| `metadata5` | string | 250 | Custom field 5 |

---

### `moneyRemittanceOptions`

EmerchantPay only. Required for MasterCard remittance transactions (MCC 4829 / MCC 6540). Omit entirely for Visa — Visa handles remittance at the network level without extra fields.

| Field | Type | Required | Constraints | Description |
|---|---|---|---|---|
| `fullName` | string | **Yes** | Max 30 chars | Recipient full name |
| `countryCode` | string | **Yes** | ISO 3166-1 alpha-3 | Recipient destination country — `"GBR"`, `"USA"`, `"DEU"` |
