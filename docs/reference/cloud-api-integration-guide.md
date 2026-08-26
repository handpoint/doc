---
title: Cloud API — Integration Guide
sidebar_position: 1
description: Step-by-step guide to integrating the Handpoint Cloud REST API — authentication, environments, transaction flow, result delivery, recovery, and certification.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cloud API — Integration Guide

:::info AI coding agents
Fetch the integration-path skill for machine-readable setup guidance and code examples: [`/.well-known/skills/paths/cloud-api.md`](/.well-known/skills/paths/cloud-api.md)
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
```http
GET https://cloud.handpoint.com/devices
ApiKeyCloud: YOUR_MERCHANT_API_KEY
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
- Trigger amounts available to force specific outcomes (DECLINED, CANCELLED, partial approval, etc.) — see [Test amounts](/reference/development-hardware#test-amounts)

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

The Handpoint Postman collection includes pre-built requests for every endpoint, with environment variables for your API key and terminal details.

→ [Download Postman collection](/files/Handpoint_Cloud_API.postman_collection.json)

### 3. Set up your terminal

On the PAX terminal:
1. Connect to Wi-Fi (or Ethernet on supported models).
2. Open the **Handpoint Payments App**.
3. The terminal is ready once the app shows "Connected" — it will accept commands from your API key.

No additional terminal configuration is required for the Cloud API. The Payments App handles authentication and connection to the Handpoint Cloud automatically.

## Your first transaction

A minimal sale request — your server sends this, the terminal prompts the cardholder to tap/insert/swipe.

### Option A — Callback (recommended)

Your server receives the result as an HTTP POST to your `callbackUrl`. Supply a `token` to authenticate the incoming webhook — it is echoed in the `AUTH-TOKEN` header of the callback.

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "sale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "e0b8ea26-f9b7-4eee-b7a2-a5d9032ea47f",
  "callbackUrl": "https://your-server.com/handpoint/result",
  "token": "my-secret-webhook-token"
}
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

The terminal processes the transaction. When complete, Handpoint POSTs the `TransactionResult` to your `callbackUrl` with the `AUTH-TOKEN` header set to your `token` value. Respond with any `2xx` to acknowledge receipt.

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

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "sale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "e0b8ea26-f9b7-4eee-b7a2-a5d9032ea47f"
}
```

Poll until you get a final `finStatus`:

```http
GET https://cloud.handpoint.com/transaction-result/082104578-1786020446467
ApiKeyCloud: YOUR_MERCHANT_API_KEY
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
| `UNDEFINED` | Result received but status unresolved | Keep polling |
| `AUTHORISED` | Approved — card charged | Final. Do not retry. |
| `DECLINED` | Declined by issuer | Final. Card not charged. Safe to retry. |
| `FAILED` | Technical failure | Final. Card not charged. Safe to retry. |
| `CANCELLED` | Cancelled at terminal | Final. Card not charged. Safe to retry. |
| `PARTIAL_APPROVAL` | Partial amount approved (US only) | Poll `transaction-result` until it resolves — cardholder is deciding at the terminal. See [Partial Approvals](/reference/partial-approval). |
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

The polling endpoint returns the same `TransactionResult` shape as the callback payload. Stop polling as soon as `finStatus` is anything other than `IN_PROGRESS` or `UNDEFINED`.

## Transaction recovery

Always persist your `transactionReference` to your database **before** sending the POST. If your server crashes, the callback URL is unreachable, or the terminal loses connectivity mid-transaction, the `transactionReference` lets you recover the outcome at any later point — including after a server restart.

The recovery pattern:
1. On application timeout (no callback received within your threshold — typically 90 s): mark the record as pending.
2. Poll `GET https://transactions.handpoint.io/transactions/{transactionReference}/status` every 10 s.
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

```http
POST https://cloud.handpoint.com/reversal
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalGuid": "a4c21bd0-65ab-11f1-b4d2-aab210c7e31c"
}
```

`originalGuid` is the `transactionID` from the partial approval result. This endpoint is synchronous — HTTP 200 means the reversal was accepted; no polling needed.

Use `totalAmount` (the approved partial) as the basis for the reversal — not `requestedAmount`. The issuer only authorized the partial amount. → See [Partial Approvals](/reference/partial-approval) for full details.

When the cardholder **declines**, `transaction-result` resolves with `finStatus: CANCELLED` and the SDK automatically sends a reversal for `totalAmount`. No further action is required; do not save the transaction as a sale.

→ Full flow diagrams, decision tree, and `/status/all` chain reference: [Partial Approvals](/reference/partial-approval)

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

Validate every inbound callback before processing it. Check that the `AUTH-TOKEN` header matches the `token` you supplied in the original request:

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

### Duplicate callbacks

Handpoint may deliver the callback more than once if your server returns a non-2xx on the first attempt. Make your handler idempotent — deduplicate on `transactionReference` before creating any records. A second delivery of the same result should be a silent no-op.

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
| **Sale** | Card-present EMV sale, MOTO sale, sale with tip, sale and tokenize | [EPI](/acquirers/epi#sale) · [Paysafe](/acquirers/paysafe-tsys#sale) · [Paysafe + Interac](/acquirers/tsys-tns#sale) · [EmerchantPay](/acquirers/omnipay-emp#sale) · [Paystrax](/acquirers/omnipay-paystrax#sale) |
| **Refund** | On-device EMV refund, MOTO refund | [EPI](/acquirers/epi#refund) · [Paysafe](/acquirers/paysafe-tsys#refund) · [Paysafe + Interac](/acquirers/tsys-tns#refund) · [EmerchantPay](/acquirers/omnipay-emp#refund) · [Paystrax](/acquirers/omnipay-paystrax#refund) |
| **Reversal** | On-device reversal (same-day, pre-settlement) | [EPI](/acquirers/epi#reversal) · [Paysafe](/acquirers/paysafe-tsys#reversal) · [Paysafe + Interac](/acquirers/tsys-tns#reversal) · [EmerchantPay](/acquirers/omnipay-emp#reversal) · [Paystrax](/acquirers/omnipay-paystrax#reversal) |
| **Remote Reversal** | Back-office reversal via Cloud API (no terminal required) | [EPI](/acquirers/epi#remote-reversal) · [Paysafe](/acquirers/paysafe-tsys#remote-reversal) · [Paysafe + Interac](/acquirers/tsys-tns#remote-reversal) · [EmerchantPay](/acquirers/omnipay-emp#remote-reversal) · [Paystrax](/acquirers/omnipay-paystrax#remote-reversal) |
| **Tip Adjustment** | Adjust tip after sale, before batch close | [EPI](/acquirers/epi#tip-adjustment) · [Paysafe + Interac](/acquirers/tsys-tns#tip-adjustment) |
| **Pre-Authorization** | Create hold (card-present); capture, increase/decrease, reversal, capture reversal are back-office (no terminal interaction) | [EPI](/acquirers/epi#pre-auth) · [EmerchantPay](/acquirers/omnipay-emp#pre-auth) · [Paystrax](/acquirers/omnipay-paystrax#pre-auth) |
| **MOTO (Remote Sale)** | Card-not-present sale using a stored token | [EPI](/acquirers/epi#moto-sale) · [EmerchantPay](/acquirers/omnipay-emp#moto-sale) |
| **Tokenization** | Store card for future charges, deferred token retrieval | [EPI](/acquirers/epi#tokenization) · [Paysafe](/acquirers/paysafe-tsys#tokenization) · [Paysafe + Interac](/acquirers/tsys-tns#tokenization) · [EmerchantPay](/acquirers/omnipay-emp#tokenization) · [Paystrax](/acquirers/omnipay-paystrax#tokenization) |
| **Batch Operations** | Batch close, summary, detail (TSYS/EPI only) — Backoffice path | [EPI](/acquirers/epi#batch-close) · [Paysafe + Interac](/acquirers/tsys-tns#batch-close) |

For the full acquirer × feature matrix across all integration paths: [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix).

:::tip Pre-authorization: only Create requires the terminal
The initial Pre-Authorization Create goes through the PAX terminal — the cardholder presents their card and a hold is placed. Every subsequent operation in the lifecycle (increase/decrease, capture, pre-auth reversal, capture reversal) is a **back-office operation** submitted directly to the Handpoint API from your server. The cardholder does not need to be present and the terminal does not need to be actively attended. You can capture or release a hold hours or days later with a single API call.

→ [Pre-Authorization Guide](/reference/pre-authorization-guide) — full lifecycle, code examples for all steps, and acquirer support matrix.
:::

## Test amounts

Use these amounts on a DEMO merchant to trigger specific acquirer responses without real card interaction:

| Amount | Behaviour |
|---|---|
| `$37.79` | Issuer response code 01 — Refer to issuer |
| `$37.84` | Issuer response code 05 — Not authorized |
| `$37.93` | Issuer response code 04 — Pick up card |
| `$37.57` | Request partially approved (US only) |
| `$37.68` | Request timeout |

Any other amount: approved. Funds are never moved on DEMO merchants — no real cards or accounts are required.

## Validation & certification

Before going live, every Cloud API integration must pass mandatory validation scenarios. Handpoint Integration Support reviews your results before issuing production credentials.

**Required for every integration:**

- [ ] Transaction recovery tested — connection dropped mid-transaction, outcome resolved via polling, automatic reversal sent on `AUTHORISED` without callback receipt
- [ ] Application timeout implemented — no silent abandonment; polling triggered after threshold
- [ ] Partial approval handled — `PARTIAL_APPROVAL` detected, split tender or automatic reversal sent for `totalAmount` (not `requestedAmount`)
- [ ] Callback endpoint is idempotent — duplicate POSTs handled correctly using `transactionReference`
- [ ] `transactionReference` persisted to DB before the POST, not after

**Per-operation scenarios:**
- Sale: standard approval, cardholder cancel, issuer decline, connection drop
- Refund: linked refund, amount exceeds original
- Reversal: same-day success, after-batch error, double-reversal 3051
- Pre-auth lifecycle (if applicable): create → capture → pre-auth reversal / capture reversal

→ Full scenario checklist with expected outcomes: [Validate your integration](/reference/validate-integration)

→ Error codes reference: [Error codes](/reference/error-codes)
