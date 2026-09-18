---
title: Cloud API — Integration Guide
sidebar_position: 1
description: Step-by-step guide to integrating the Handpoint Cloud REST API — authentication, environments, transaction flow, result delivery, recovery, and certification.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cloud API — Integration Guide

:::info AI coding agents
Fetch the integration-path skill for machine-readable setup guidance and code examples: [`/.well-known/skills/paths/cloud-api.md`](pathname:///.well-known/skills/paths/cloud-api.md)
:::

## What is the Cloud API?

The Handpoint Cloud REST API is a server-side integration path that lets your POS software initiate card-present transactions on a PAX SmartPOS terminal from any language or platform. Your server sends an HTTP request to the Handpoint Cloud; the Cloud relays the command to the terminal over a secure channel; the terminal reads the card and processes the transaction; the result is returned to your server via a callback or a polling endpoint.

No mobile SDK is required. No card data ever reaches your server unmasked — Handpoint handles the P2PE and keeps you out of PCI scope.

## When to use it

| ✅ Good fit | ❌ Not a good fit |
|---|---|
| Your POS runs on any server-side stack (Python, PHP, Node.js, .NET, Ruby, Java…) | Your app runs natively on the PAX terminal — use the [Android SDK (PAX)](/reference/android-sdk-setup) |
| You have a fixed counter or kiosk with a networked PAX terminal | You need Bluetooth card reader support — use the [Android / iOS SDK (HiLite)](/get-started) |
| You want the fastest integration path — only an API key is required | Your environment is fully offline / airgapped — Cloud API requires internet connectivity |
| You serve multiple merchants from one backend | — |
| You already have a web-based POS and want to avoid shipping a mobile app | — |

:::info Back-office operations are always available
[Backoffice REST API](/reference/backoffice-integration-guide) operations — tip adjustment, reversals, refunds, MOTO charges, batch management, deferred tokenization — are available **alongside any integration path** you choose. They go server-side directly to the payment gateway with no terminal or SDK required. Subject only to acquirer support.
:::

## How it works

```
Your POS server
    │
    │  POST https://cloud.handpoint.com/transactions
    │  ApiKeyCloud: YOUR_MERCHANT_API_KEY
    ▼
Handpoint Cloud API
    │  ← 202 Accepted (immediate) + transactionResultId
    │
    │  (validates request, routes to terminal)
    ▼
PAX SmartPOS terminal
    │  (reads card, P2PE, authorisation with acquirer)
    ▼
Transaction result
    │
    ├──→ Option A: Callback URL — terminal POSTs result to your server
    └──→ Option B: Polling — you query GET /transaction-result/{id}
```

1. Your server sends `POST /transactions` with the operation, amount, currency, terminal details, and your `transactionReference`.
2. The Cloud validates the request and immediately responds `202 Accepted`, returning a `transactionResultId`. The terminal starts processing.
3. When the transaction completes, the result reaches your server via **callback** (if you provided a `callbackUrl`) or is available via **polling** (using the `transactionResultId`).

## Authentication

All requests use the `ApiKeyCloud` header:

```http
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

- One API key per merchant — valid for all terminals assigned to that merchant.
- Multi-merchant POS systems must map each merchant to their own API key in your backend. API keys are never shared across merchants.
- Credentials are provisioned by Handpoint Integration Support. See [Authentication](/reference/authentication) for the full credential reference.

**Wrong or missing API key — HTTP 403:**
```json
{
  "error": {
    "statusCode": 403,
    "name": "ForbiddenError",
    "message": "No valid key found in header"
  }
}
```

To verify which terminals are assigned to your API key:
```bash
curl https://cloud.handpoint.com/devices \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY"
```
Returns an array of `{ "serial_number", "terminal_type", "merchant_id_alpha" }`. If a terminal serial is absent from this list, requests to it will fail with error 1004.

## Environments & credentials

| Terminal type | Base URL | Notes |
|---|---|---|
| PAX **debug** device (Handpoint internal) | `https://cloud.handpoint.io` | Staging environment — watermark visible on screen |
| PAX **production** device (DEMO merchant, ViscusDummy) | `https://cloud.handpoint.com` | **Recommended ISV testing path** — production terminals, no funds move |
| PAX **production** device (live merchant) | `https://cloud.handpoint.com` | Live transactions — real acquirer, real funds |

### Recommended testing path — DEMO merchant on production

Handpoint provides every ISV with a DEMO merchant account on the production environment (`https://cloud.handpoint.com`). The DEMO merchant uses the **ViscusDummy** simulated acquirer — transactions complete end-to-end, card data is processed, receipts are generated, but **no funds move** regardless of card type (live, expired, invalid).

Benefits over the staging (`.io`) environment:
- Uses production PAX terminals (no watermark)
- Full EMV transaction flow — accurate behaviour
- Any card works safely (your own personal cards, expired cards, etc.)
- Trigger amounts available to force specific outcomes (DECLINED, CANCELLED, partial approval, etc.) — see [Trigger amounts](/reference/development-hardware#trigger-amounts)

:::info Tokenization on DEMO merchant
To test MOTO/remote sale (card token), ask your Handpoint Integration Support engineer to enable tokenization on your DEMO merchant. This is a one-time Handpoint-side setup — no ISV or merchant action required. In production, EPI manages token provider assignment for live merchants.
:::

:::caution Credentials are environment-specific
Debug device API keys only work on `cloud.handpoint.io`. DEMO merchant API keys only work on `cloud.handpoint.com`. When a merchant goes live, Handpoint issues separate live credentials — they do not inherit the DEMO merchant API key.
:::

Not sure which type of terminal you have? See [Development hardware](/reference/development-hardware).

## Setup

### 1. Request your test credentials

Contact your Handpoint Integration Support engineer to receive:
- A DEMO merchant API key (for `cloud.handpoint.com`)
- Access to a PAX DEMO terminal (or a debug terminal + `.io` key for lower-level testing)

### 2. Download the Postman collection

Two collections are available depending on your integration path:

| Collection | Use when |
|---|---|
| **[Handpoint_Cloud_API.postman_collection.json](/files/Handpoint_Cloud_API.postman_collection.json)** | You are integrating via the Cloud API — covers the full ISV-facing surface: card-present transactions, polling, pre-auth, back-office, and reporting. |
| **[Handpoint_BackOffice.postman_collection.json](/files/Handpoint_BackOffice.postman_collection.json)** | You already integrate via Android SDK, iOS SDK, PAX, or Hilite and want to add back-office capabilities. All requests go directly to the gateway — no reader or cardholder interaction required, compatible with any integration path. |

Import the collection, then set the collection variables `api_key`, `serial_number`, `terminal_type`, and `currency`. The `env` variable controls the environment: `com` (default) targets production (`cloud.handpoint.com`), `io` targets staging (`cloud.handpoint.io`). Run **List Devices** to confirm your credentials.

### 3. Set up your terminal

On the PAX terminal:
1. Connect to Wi-Fi (or Ethernet on supported models).
2. Open the **Handpoint Payments App**.
3. The terminal is ready once the app shows "Connected" — it will accept commands from your API key.

No additional terminal configuration is required for the Cloud API. The Payments App handles authentication and connection to the Handpoint Cloud automatically.

## Your first transaction

A minimal sale request — your server sends this, the terminal prompts the cardholder to tap/insert/swipe.

:::info Amount units for `POST /transactions`
`amount` is a **string of digits in minor currency units** — no decimal point, no currency symbol. `"1000"` = $10.00 USD. `"150"` = $1.50.

Back-office endpoints (`POST /moto/sale`, `POST /moto/refund`, `POST /reversal`) use **major-unit decimal strings** instead — `"10.00"` = $10.00. Do not reuse the same amount-formatting logic across both endpoint families.
:::

### Option A — Callback (recommended)

Your server receives the result as an HTTP POST to your `callbackUrl`. Supply a `token` to authenticate the incoming webhook — it is echoed as the `auth-token` header of the callback.

```bash
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "sale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "e0b8ea26-f9b7-4eee-b7a2-a5d9032ea47f",
  "callbackUrl": "https://your-server.com/handpoint/result",
  "token": "my-secret-webhook-token"
}'
```

**Immediate response — 202 Accepted:**
```json
{
  "statusMessage": "Operation Accepted",
  "transactionResultId": "082104578-1786020446467",
  "transactionReference": "e0b8ea26-f9b7-4eee-b7a2-a5d9032ea47f"
}
```

`transactionReference` is echoed back only when you included it in the request body. `transactionResultId` is always present and is required for polling.

The terminal processes the transaction. When complete, Handpoint POSTs the `TransactionResult` to your `callbackUrl` with the `auth-token` header set to your `token` value. Respond with any `2xx` to acknowledge receipt.

**Callback payload — AUTHORISED:**

```json
{
  "finStatus": "AUTHORISED",
  "transactionID": "e6254050-65ab-11f1-a9af-ffa530c6e21f",
  "transactionReference": "e0b8ea26-f9b7-4eee-b7a2-a5d9032ea47f",
  "type": "SALE",
  "statusMessage": "Approved",
  "errorMessage": "",
  "requestedAmount": 1000,
  "totalAmount": 1000,
  "currency": "USD",
  "cardSchemeName": "Visa",
  "maskedCardNumber": "************0936",
  "authorisationCode": "123456",
  "issuerResponseCode": "00",
  "efttimestamp": 1781192438000,
  "mid": "123456789010102",
  "tid": "082104578",
  "merchantReceipt": "<html>…</html>",
  "customerReceipt": "<html>…</html>"
}
```

**Callback payload — DECLINED:**

```json
{
  "finStatus": "DECLINED",
  "transactionID": "f3a10cd1-65ab-11f1-b4d2-aab210c7e31c",
  "transactionReference": "e0b8ea26-f9b7-4eee-b7a2-a5d9032ea47f",
  "type": "SALE",
  "statusMessage": "Declined",
  "errorMessage": "Not Authorized",
  "requestedAmount": 1000,
  "totalAmount": 0,
  "currency": "USD",
  "cardSchemeName": "Visa",
  "maskedCardNumber": "************0936",
  "authorisationCode": "",
  "issuerResponseCode": "05"
}
```

Store `transactionID` from every AUTHORISED result — you'll need it for reversals and tip adjustments. Use `transactionReference` to correlate with your own system's record. For the full schema (70+ fields including EMV data, tokenization, and device status): [Transaction result object →](/reference/transaction-result-object)

:::warning SSL certificate requirement for callbacks
Your `callbackUrl` must use a TLS certificate from a CA supported by Android 5–10 (the OS range running on PAX terminals). Self-signed certificates will not work. Standard certificates from Let's Encrypt, DigiCert, and similar CAs are supported.
:::

### Option B — Polling

Omit `callbackUrl`. Poll the `transactionResultId` returned in the 202 response.

```bash
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "sale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "e0b8ea26-f9b7-4eee-b7a2-a5d9032ea47f"
}'
```

Poll until you get a final `finStatus`:

```bash
curl https://cloud.handpoint.com/transaction-result/082104578-1786020446467 \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY"
```

:::caution Two distinct HTTP responses
- **HTTP 204 No Content** — transaction still processing. The response body is empty — do **not** attempt to parse JSON. Keep polling.
- **HTTP 200 OK** — result ready. Parse JSON and read `finStatus`.

In any language, check the HTTP status before calling `.json()` / `response.json()` / `JSON.parse()` — calling these on an empty 204 body throws an exception.
:::

```python
# Correct pattern
resp = requests.get(url, headers=headers)
if resp.status_code == 204:
    continue  # still processing
result = resp.json()  # only on 200
```

| `finStatus` | Meaning | Action |
|---|---|---|
| `IN_PROGRESS` | Still processing on terminal or gateway | Keep polling. |
| `UNDEFINED` | Result received but status unresolved | Keep polling. Do **not** retry — run the [recovery flow](/reference/transaction-recovery-cloud-api). |
| `AUTHORISED` | Approved — card charged | Wait for `transaction-result` delivery before saving as final. In rare cases (chip card removed mid-processing, internal card app decline), the SDK sends a forced-reversal and the final `transaction-result` resolves to `DECLINED`. Always poll until the result is delivered — do not act on a `/status` `AUTHORISED` alone. |
| `DECLINED` | Declined by issuer or gateway | Final. Card not charged. Safe to retry after cardholder action. |
| `FAILED` | Technical failure | Final. Run [recovery flow](/reference/transaction-recovery-cloud-api) before retrying. |
| `CANCELLED` | Cancelled at terminal | Final. Card not charged. Safe to retry. |
| `PARTIAL_APPROVAL` | Partial amount approved (US only). Terminal is showing accept/decline prompt — **not final**. | Keep polling `transaction-result` for at least 60 s. If cardholder declines, SDK auto-reverses and result changes to `CANCELLED`. See [Partial Approvals](/reference/partial-approval). |
| `REFUNDED` | Refund processed | Final. |
| `CAPTURED` | Pre-auth captured | Final. |
| `PROCESSED` | Completed (tokenization, MOTO) | Final. |

**Polling response — AUTHORISED:**

```json
{
  "finStatus": "AUTHORISED",
  "transactionID": "e6254050-65ab-11f1-a9af-ffa530c6e21f",
  "transactionReference": "e0b8ea26-f9b7-4eee-b7a2-a5d9032ea47f",
  "type": "SALE",
  "statusMessage": "Approved",
  "errorMessage": "",
  "requestedAmount": 1000,
  "totalAmount": 1000,
  "currency": "USD",
  "cardSchemeName": "Visa",
  "maskedCardNumber": "************0936",
  "authorisationCode": "123456",
  "issuerResponseCode": "00"
}
```

The polling endpoint returns the same `TransactionResult` shape as the callback payload. Stop polling when you receive a final `finStatus` — any value except `IN_PROGRESS`, `UNDEFINED`, and `PARTIAL_APPROVAL`. `PARTIAL_APPROVAL` is not final: the terminal is still showing an accept/decline prompt and the result can change to `CANCELLED`.

## Transaction recovery

Always persist your `transactionReference` to your database **before** sending the POST. If your server crashes, the callback URL is unreachable, or the terminal loses connectivity mid-transaction, the `transactionReference` lets you recover the outcome at any later point — including after a server restart.

The recovery pattern:
1. On application timeout (no callback received within your threshold — typically 90 s): mark the record as pending.
2. Poll `GET https://transactions.handpoint.com/transactions/{transactionReference}/status` every 10 s.
3. On `AUTHORISED` with no prior record: send an automatic reversal (`POST /transactions` with `operation: saleReversal`) to prevent a double-charge.
4. On any other final status: clear the pending record.

→ Full implementation with code examples: [Transaction Recovery — Cloud API](/reference/transaction-recovery-cloud-api)

## Edge cases

### Partial approval

In the US, an issuer may approve only part of the requested amount — for example, a $50.00 sale approved for $30.00 because the card's available balance is insufficient. The terminal prompts the cardholder to accept or decline the partial amount before returning a result.

:::warning Do not trust `/status` during a partial approval
`GET /transactions/{ref}/status` returns `AUTHORISED` as soon as the issuer responds — **before** the cardholder has accepted or declined. If the cardholder declines, the SDK auto-reverses and the final outcome is `CANCELLED`. Always poll `transaction-result` until it resolves; only escalate to `/status` if no result arrives after 2–3 minutes or if `finStatus` is `UNDEFINED`.
:::

When the cardholder **accepts**, `transaction-result` resolves with `finStatus: PARTIAL_APPROVAL`:

```json
{
  "finStatus": "PARTIAL_APPROVAL",
  "requestedAmount": 5000,
  "totalAmount": 3000,
  "currency": "USD",
  "transactionID": "a4c21bd0-65ab-11f1-b4d2-aab210c7e31c",
  "authorisationCode": "654321"
}
```

`totalAmount` is the amount the issuer authorized (the partial). `requestedAmount` is the original sale amount. The remaining `requestedAmount − totalAmount` is uncollected.

**Option 1 — Split tender:** Collect the remaining amount via a second payment method (cash, another card). Display `totalAmount` as the settled amount on the receipt.

**Option 2 — Reverse the partial charge** (if your integration does not accept partial approvals):

```bash
curl -X POST https://cloud.handpoint.com/reversal \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "originalGuid": "a4c21bd0-65ab-11f1-b4d2-aab210c7e31c" }'
```

`originalGuid` is the `transactionID` from the partial approval result. This endpoint is synchronous — HTTP 200 means the reversal was accepted; no polling needed.

Use `totalAmount` (the approved partial) as the basis for the reversal — not `requestedAmount`. The issuer only authorized the partial amount. → See [Partial Approvals](/reference/partial-approval) for full details.

When the cardholder **declines**, `transaction-result` resolves with `finStatus: CANCELLED` and the SDK automatically sends a reversal for `totalAmount`. No further action is required; do not save the transaction as a sale.

→ Full flow diagrams, decision tree, and `/status/all` chain reference: [Partial Approvals](/reference/partial-approval)

### EMV forced reversal — chip card removed mid-processing

When a chip card is removed from the reader after the gateway has authorized the transaction but before the EMV flow completes — or when the card's internal application declines the authorization (e.g. IAD mismatch or internal card logic) — the SDK automatically sends a forced-reversal to release the hold. No ISV action is required for the reversal itself.

**The timing trap:** `/status` may briefly show `AUTHORISED` while the forced-reversal is in flight. The final `transaction-result` resolves to `DECLINED` with `statusMessage` similar to "card declined the online authorization." An integration that reads `AUTHORISED` from `/status` at this moment and saves it as a completed sale will have an incorrect record.

The fix is the same as for partial approvals: never act on a `/status` result — always wait for `transaction-result` delivery, or continue polling for at least 60 s before concluding.

**To reproduce in testing:** insert a chip card, wait until the terminal shows "Processing..." (after PIN entry), then quickly pull the card out. The terminal and SDK handle the forced-reversal automatically. Verify your integration receives and records the final `DECLINED` result, not the intermediate `AUTHORISED`.

Do not ignore `PARTIAL_APPROVAL` — the cardholder was charged `totalAmount` and expects either a receipt or confirmation that the charge was reversed.

### HTTP errors on the initial POST

Errors returned immediately from `POST /transactions` (before the 202 Accepted) indicate the request was rejected by the Handpoint Cloud. No card interaction occurred — these are safe to retry with a **new** `transactionReference`.

| HTTP status | Meaning | Action |
|---|---|---|
| `400 Bad Request` | Malformed JSON or invalid parameter value (e.g. `amount` is `"0"`) | Fix the request body before retrying |
| `403 Forbidden` | Invalid or missing `ApiKeyCloud` header | Verify the API key and header name — the header is `ApiKeyCloud`, not `Authorization` |
| `404 Not Found` | Terminal not found, not connected, or wrong `base_url` for this terminal type | Check `serial_number`, `terminal_type`, and `base_url`; ensure the terminal is online in the Payments App |
| `409 Conflict` | A transaction is already in progress on this terminal | Wait for the current transaction to complete; do not send a new request |
| `422 Unprocessable Entity` | Validation failed — required field missing or wrong type | Check the `details` array in the error body |
| `5xx` | Handpoint Cloud temporarily unavailable | Retry with exponential back-off; no card interaction occurred |

All HTTP errors use the same `error` wrapper:

**403 — invalid API key:**
```json
{
  "error": {
    "statusCode": 403,
    "name": "ForbiddenError",
    "message": "No valid key found in header"
  }
}
```

**422 — missing required field:**
```json
{
  "error": {
    "statusCode": 422,
    "name": "UnprocessableEntityError",
    "message": "The request body is invalid. See error object `details` property for more info.",
    "code": "VALIDATION_FAILED",
    "details": [
      {
        "path": "",
        "code": "required",
        "message": "must have required property 'operation'",
        "info": { "missingProperty": "operation" }
      }
    ]
  }
}
```

**400 — invalid amount:**
```json
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Invalid amount (0 < amount < 999999999999)"
  }
}
```

**400 — device busy (error 1001):**
```json
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "{\"error\":1001,\"message\":\"Device is busy\"}"
  }
}
```
Terminal is processing another operation. Wait 2–5 seconds and retry. Generate a **new** `transactionReference` on each retry.

**400 — terminal not connected (error 1002):**
```json
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "{\"error\":1002,\"message\":\"No device listening at the other end of the secure channel\"}"
  }
}
```
The terminal is powered off, not on Wi-Fi, or the Handpoint Payments App is not running. Check terminal status and retry once the device is back online.

**400 — terminal not assigned to this merchant (error 1004):**
```json
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "{\"error\":1004,\"message\":\"Auth not available: [object Object]\"}"
  }
}
```
The `serial_number` and `terminal_type` combination is not assigned to the merchant account associated with the `ApiKeyCloud` value. Call `GET /devices` to see which serials are valid for your API key. If the terminal is missing, contact Handpoint Integration Support.

These are distinct from `finStatus: FAILED` in the result — an HTTP error means the terminal **never received** the command.

### Callback authentication

Validate every inbound callback before processing it. Check that the `auth-token` header matches the `token` you supplied in the original request (HTTP/2 lowercases headers — `auth-token` and `AUTH-TOKEN` refer to the same header; HTTP header comparison is always case-insensitive):

```python
# Python / Flask
@app.post("/handpoint/result")
def handpoint_callback():
    if request.headers.get("AUTH-TOKEN") != os.environ["HANDPOINT_WEBHOOK_TOKEN"]:
        abort(401)
    result = request.get_json()
    handle_transaction_result(result)
    return "", 200
```

An unauthenticated callback endpoint can produce phantom transaction records if a third party posts to it. Keep `token` out of your source code — load it from an environment variable.

### Callback retry schedule {#callback-retry-schedule}

If your endpoint returns a non-2xx status code, or the connection times out, the terminal automatically retries delivery on the following schedule:

| Phase | Duration | Interval |
|---|---|---|
| Phase 1 | 0–100 seconds | Every 5 seconds (20 attempts) |
| Phase 2 | After 100 seconds | Exponential backoff: 4s → 8s → 16s → 32s → 64s → … capped at 15 minutes |
| Abandoned | After 2 days | Record deleted; no further retries |

**Per-attempt timeouts:** 30 second wall-clock limit, 15 second read timeout, 5 second connect timeout.

**What triggers a retry:** any non-`2xx` HTTP status, or any network error (connection refused, DNS failure, read timeout).

**What stops retries:** any `2xx` response (`200`, `201`, `204`, etc.). Return `2xx` as soon as you've accepted the payload — do not wait for your own database write to complete before responding.

The retry loop runs on the PAX terminal itself (not the Handpoint Cloud). It restarts from Phase 1 if the Handpoint Payments App is restarted or `startRecovery()` is called.

:::info If retries are exhausted
After 2 days the terminal stops retrying and the callback is not re-delivered. Use the [transaction recovery flow](/reference/transaction-recovery-cloud-api) — query `GET /transactions/{transactionReference}/status` — to retrieve the outcome if your endpoint was unreachable for an extended period.
:::

### Duplicate callbacks

Because the terminal retries on non-2xx, your handler may receive the same result more than once (if the terminal retried before your first acknowledgement reached it). Make your handler idempotent — deduplicate on `transactionReference` before creating any records. A second delivery of the same result should be a silent no-op.

```python
existing = db.get_transaction(result["transactionReference"])
if existing:
    return "", 200  # already processed — acknowledge and discard

db.save_transaction(result)
```

## Operations available on Cloud API

The table below covers all payment operations supported on the Cloud API path. Click through to the acquirer page for your region to see acquirer-specific availability, code examples, and parameters.

| Operation | Description | Acquirer pages |
|---|---|---|
| **Sale** | Card-present EMV sale, MOTO sale, sale with tip, sale and tokenize | [EPI](/acquirers/epi#sale) · [PAYSAFE](/acquirers/paysafe#sale) · [EmerchantPay](/acquirers/emerchantpay#sale) · [Paystrax](/acquirers/paystrax#sale) |
| **Refund** | On-device EMV refund, MOTO refund | [EPI](/acquirers/epi#refund) · [PAYSAFE](/acquirers/paysafe#refund) · [EmerchantPay](/acquirers/emerchantpay#refund) · [Paystrax](/acquirers/paystrax#refund) |
| **Reversal** | On-device reversal (same-day, pre-settlement) | [EPI](/acquirers/epi#reversal) · [PAYSAFE](/acquirers/paysafe#reversal) · [EmerchantPay](/acquirers/emerchantpay#reversal) · [Paystrax](/acquirers/paystrax#reversal) |
| **Remote Reversal** | Back-office reversal via Cloud API (no terminal required) | [EPI](/acquirers/epi#remote-reversal) · [PAYSAFE](/acquirers/paysafe#remote-reversal) · [EmerchantPay](/acquirers/emerchantpay#remote-reversal) · [Paystrax](/acquirers/paystrax#remote-reversal) |
| **Tip Adjustment** | Adjust tip after sale, before batch close | [EPI](/acquirers/epi#tip-adjustment) · [PAYSAFE](/acquirers/paysafe#tip-adjustment) |
| **Pre-Authorization** | Create hold (card-present); capture, increase/decrease, reversal, capture reversal are back-office (no terminal interaction) | [EPI](/acquirers/epi#pre-authorization) · [EmerchantPay](/acquirers/emerchantpay#pre-authorization) · [Paystrax](/acquirers/paystrax#pre-authorization) |
| **MOTO (Remote Sale)** | Card-not-present sale using a stored token | [EPI](/acquirers/epi#remote-sale) · [EmerchantPay](/acquirers/emerchantpay#remote-sale) |
| **Tokenization** | Store card for future charges, deferred token retrieval | [EPI](/acquirers/epi#tokenization) · [PAYSAFE](/acquirers/paysafe#tokenization) · [EmerchantPay](/acquirers/emerchantpay#tokenization) · [Paystrax](/acquirers/paystrax#tokenization) |
| **Batch Operations** | Batch close, summary, detail — Backoffice path | [EPI](/acquirers/epi#batch-close) |

For the full acquirer × feature matrix across all integration paths: [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix).

:::tip Pre-authorization: only Create requires the terminal
The initial Pre-Authorization Create goes through the PAX terminal — the cardholder presents their card and a hold is placed. Every subsequent operation in the lifecycle (increase/decrease, capture, pre-auth reversal, capture reversal) is a **back-office operation** submitted directly to the Handpoint API from your server. The cardholder does not need to be present and the terminal does not need to be actively attended. You can capture or release a hold hours or days later with a single API call.

→ [Pre-Authorization Guide](/reference/pre-authorization-guide) — full lifecycle, code examples for all steps, and acquirer support matrix.
:::

## Rate limits

The Cloud API enforces a rate limit of **2 requests per second per merchant API key**.

| Limit | Value |
|---|---|
| Requests per second | 2 |
| Scope | Per `ApiKeyCloud` |
| Applies to | All `POST /transactions` and back-office endpoints |

Exceeding this limit returns HTTP **429 Too Many Requests**. The response body follows the standard error wrapper:

```json
{
  "error": {
    "statusCode": 429,
    "name": "TooManyRequestsError",
    "message": "Too many requests, please try again later."
  }
}
```

**In practice:** a single POS terminal can only run one transaction at a time (`1001 Device is busy` prevents concurrent sends to the same device), so the limit is only relevant when your backend manages multiple terminals under the same merchant API key and issues parallel requests for each. Add a short delay or queue between bursts in that case.

:::tip Multi-merchant backends are not affected per-merchant
Each merchant has its own `ApiKeyCloud`. The 2 req/s limit applies per key — a backend managing 100 merchants can issue 200 req/s total as long as each merchant's key stays under its own limit.
:::

---

## Test amounts

Use these amounts on a DEMO merchant to trigger specific acquirer responses without real card interaction. `POST /transactions` takes `amount` in **minor currency units** — digits only, no decimal point (`"3779"` = $37.79 USD).

| `amount` value | Forced `finStatus` | Description |
|---|---|---|
| `3779` | `DECLINED` | Issuer response code 01: Refer to issuer |
| `3784` | `DECLINED` | Issuer response code 05: Not authorized |
| `3793` | `DECLINED` | Issuer response code 04: Pick up card |
| `3757` | `PARTIAL_APPROVAL` | Partial amount approved (US only) |
| `3768` | `FAILED` | Error connecting to authorization provider |
| `3741` | `FAILED` | Processing error |

Any other amount: `AUTHORISED`. Funds are never moved on DEMO merchants — no real cards or accounts are required.

## Validation & certification

Before going live, every Cloud API integration must pass mandatory validation scenarios. Handpoint Integration Support reviews your results before issuing production credentials.

**Required for every integration:**

- [ ] Transaction recovery tested — connection dropped mid-transaction, outcome resolved via polling, automatic reversal sent on `AUTHORISED` without callback receipt
- [ ] Application timeout implemented — no silent abandonment; polling triggered after threshold
- [ ] Partial approval handled — `PARTIAL_APPROVAL` detected (US only); polling continued for 60 s+; split tender offered or automatic reversal sent for `totalAmount` (not `requestedAmount`)
- [ ] EMV forced reversal handled — chip card removed mid-processing causes `/status` to show `AUTHORISED` briefly before the final `transaction-result` resolves to `DECLINED`; integration records the `DECLINED` result, not the intermediate `AUTHORISED`
- [ ] Callback endpoint is idempotent — duplicate POSTs handled correctly using `transactionReference`
- [ ] `transactionReference` persisted to DB before the POST, not after

**Per-operation scenarios:**
- Sale: standard approval, cardholder cancel, issuer decline, connection drop
- Refund: linked refund, amount exceeds original
- Reversal: same-day success, after-batch error, double-reversal 3051
- Pre-auth lifecycle (if applicable): create → capture → pre-auth reversal / capture reversal

→ Full scenario checklist with expected outcomes: [Validate your integration](/reference/validate-integration)

→ Error codes reference: [Error codes](/reference/error-codes)

→ Copy-pasteable curl for every operation: [Operations Reference](/reference/cloud-api-operations)
