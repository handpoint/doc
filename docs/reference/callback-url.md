---
title: Callback URL (Webhook Delivery)
sidebar_position: 11
description: Receive transaction results via webhook instead of polling. Add callbackUrl and token to any Cloud API card-present request.
---

# Callback URL — Webhook Delivery

By default the Cloud API delivers transaction results via polling: your server calls `GET /transaction-result/{transactionResultId}` until a result appears. **Callback URL** is an alternative: you supply a webhook endpoint and Handpoint POSTs the result directly to your server when the transaction completes.

Both delivery methods use the **same recovery flow** — they are not mutually exclusive, and the recovery logic does not change based on which method you use.

## How it works

Add two fields to any `POST /transactions` request:

| Field | Type | Description |
|---|---|---|
| `callbackUrl` | string | Your server's HTTPS endpoint. Handpoint will POST the transaction result to this URL when ready |
| `token` | string | A secret you generate — sent as the `Authorization` header on the callback POST. **Must be unique per request** |

```json
{
  "operation": "sale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "callbackUrl": "https://your-server.com/handpoint/result",
  "token": "a1b2c3d4-unique-per-request",
  "transactionReference": "your-unique-ref"
}
```

The initial response is still `202 Accepted` with a `transactionResultId` — the card-present flow is unchanged. When the transaction completes, Handpoint delivers the result to your endpoint.

## Callback delivery

Handpoint sends an HTTP `POST` to your `callbackUrl`:

```http
POST https://your-server.com/handpoint/result
Authorization: a1b2c3d4-unique-per-request
Content-Type: application/json

{ ... transaction result payload ... }
```

**The `Authorization` header value is exactly the `token` you sent in the original request.** Validate it server-side to verify the delivery is genuine and matches the transaction you expect.

**The payload is identical to the polling result** — the same `TransactionResult` JSON object you would receive from `GET /transaction-result/{transactionResultId}`. See [Transaction Result Object](/reference/transaction-result-object) for the full field reference.

## Token requirements

- Generate a unique value per transaction — a UUID v4 is ideal
- Store it alongside the `transactionReference` before sending the request
- Validate the `Authorization` header on receipt to confirm the delivery belongs to your transaction
- Do **not** reuse tokens across transactions — the token is the only way to match a callback delivery to an originating request

## Recovery flow — same as polling

Callback delivery does not replace the recovery flow. If your server is temporarily unavailable, restarts, or misses the delivery for any reason, use the standard recovery path:

```bash
curl https://cloud.handpoint.com/transactions/{transactionReference}/status/all \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY"
```

This returns the full status chain for the `transactionReference` you sent in the original request, regardless of whether you used polling or callback delivery. See [Transaction Recovery](/reference/transaction-recovery) for the complete recovery guide and per-SDK equivalents (`getTransactionStatus()` on Android PAX).

:::info Retry schedule
If your endpoint returns a non-2xx, the terminal retries: every 5 seconds for the first 100 seconds, then exponential backoff (4s → 8s → 16s → … capped at 15 minutes), for up to 2 days. Any `2xx` stops retries. See [Callback retry schedule](/reference/cloud-api-integration-guide#callback-retry-schedule) for the full table and per-attempt timeout values.
:::

## When to use callback vs polling

| | Callback URL | Polling |
|---|---|---|
| **Best for** | Server-side integrations with a stable HTTPS endpoint | Mobile apps, frontends, simpler server setups |
| **Requires** | Public HTTPS endpoint reachable from Handpoint cloud | Nothing extra — just call the poll endpoint |
| **Recovery** | Same `{txnRef}/status` flow | Same `{txnRef}/status` flow |
| **Result payload** | Identical to polling | — |

:::info Both methods work together
You can send a `callbackUrl` and still poll `GET /transaction-result/{transactionResultId}` as a fallback. The result is the same either way.
:::
