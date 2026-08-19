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

## Environments & credentials

| Terminal type | Base URL | Notes |
|---|---|---|
| PAX **debug** device | `https://cloud.handpoint.io` | Development environment only — for test hardware |
| PAX **production** device (DEMO merchant) | `https://cloud.handpoint.com` | Test transactions against a simulated acquirer — funds not moved |
| PAX **production** device (live merchant) | `https://cloud.handpoint.com` | Real transactions — live merchant credentials |

:::caution `.io` and `.com` credentials are not interchangeable
Debug device credentials only work on `cloud.handpoint.io`. When a merchant goes live, Handpoint issues new production credentials — they do not inherit the DEMO merchant API key.
:::

Not sure which type of terminal you have? See [Development hardware](/reference/development-hardware).

## Setup

### 1. Request your test credentials

Contact your Handpoint Integration Support engineer to receive:
- A DEMO merchant API key (for `cloud.handpoint.com`)
- Access to a PAX DEMO terminal (or a debug terminal + `.io` key for lower-level testing)

### 2. Download the Postman collection

The Handpoint Postman collection includes pre-built requests for every endpoint, with environment variables for your API key and terminal details.

→ [Download Postman collection](/legacy/files/HandpointRESTAPI.postman_collection.zip)

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
  "transactionResultId": "082104578-1786020446467"
}
```

The terminal processes the transaction. When complete, Handpoint POSTs the full `TransactionResult` object to your `callbackUrl`. Respond with any `2xx` to acknowledge receipt.

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

| `finStatus` | Meaning | Action |
|---|---|---|
| `IN_PROGRESS` | Still processing on device or host | Keep polling (every 2 s) |
| `UNDEFINED` | Result received but status unresolved | Keep polling |
| `AUTHORISED` | Approved — card charged | Final. Do not retry. |
| `DECLINED` | Declined by issuer | Final. Card not charged. Safe to retry. |
| `FAILED` | Technical failure | Final. Card not charged. Safe to retry. |
| `CANCELLED` | Cancelled at terminal | Final. Card not charged. Safe to retry. |
| `PARTIALLY_APPROVED` | Partial amount approved (US only) | Wait 60 s, then collect split tender or reverse. |
| `REFUNDED` | Refund processed | Final. |
| `CAPTURED` | Pre-auth captured | Final. |
| `PROCESSED` | Completed (tokenization, MOTO) | Final. |

## Transaction recovery

Always persist your `transactionReference` to your database **before** sending the POST. If your server crashes, the callback URL is unreachable, or the terminal loses connectivity mid-transaction, the `transactionReference` lets you recover the outcome at any later point — including after a server restart.

The recovery pattern:
1. On application timeout (no callback received within your threshold — typically 90 s): mark the record as pending.
2. Poll `GET /transactions/{transactionReference}` in the background every 10 s.
3. On `AUTHORISED` with no prior record: send an automatic reversal (`POST /transactions` with `operation: saleReversal`) to prevent a double-charge.
4. On any other final status: clear the pending record.

→ Full implementation with code examples: [Transaction Recovery — Cloud API](/reference/transaction-recovery-cloud-api)

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
- [ ] Partial approval handled — `PARTIALLY_APPROVED` detected, split tender or automatic reversal sent
- [ ] Callback endpoint is idempotent — duplicate POSTs handled correctly using `transactionReference`
- [ ] `transactionReference` persisted to DB before the POST, not after

**Per-operation scenarios:**
- Sale: standard approval, cardholder cancel, issuer decline, connection drop
- Refund: linked refund, amount exceeds original
- Reversal: same-day success, after-batch error, double-reversal 3051
- Pre-auth lifecycle (if applicable): create → capture → pre-auth reversal / capture reversal

→ Full scenario checklist with expected outcomes: [Validate your integration](/reference/validate-integration)

→ Error codes reference: [Error codes](/reference/error-codes)
