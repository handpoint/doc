---
title: Backoffice REST API — Integration Guide
sidebar_position: 8
description: Guide to server-side Handpoint Backoffice operations — MOTO sale, remote refund, reversal, tip adjustment, and batch management without a physical terminal.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Backoffice REST API — Integration Guide

:::info AI coding agents
Fetch the Backoffice optional skill for machine-readable operation reference: [`/.well-known/skills/optional/back-office.md`](/.well-known/skills/optional/back-office.md)
:::

## What is the Backoffice path?

The Backoffice path gives your server direct access to a set of payment gateway operations that **do not require a physical terminal or card reader**. All calls go directly to the Handpoint payment gateway — no device, no SDK, no device history.

It complements the [Cloud REST API](/reference/cloud-api-integration-guide) (which routes commands through a terminal) with operations that are inherently server-side: charging stored card tokens, adjusting tips, closing batches, and reversing transactions by ID.

## When to use it

| ✅ Good fit | ❌ Not a good fit |
|---|---|
| Charging a stored card token without a physical card present (MOTO / recurring) | Card-present transactions — use [Cloud API](/reference/cloud-api-integration-guide) or an SDK |
| Adjusting a tip after the sale has closed | Anything that requires a cardholder to tap or insert a card |
| Closing a batch at end of day from your server | — |
| Reversing a transaction by ID without the original terminal | — |
| Querying batch totals for reconciliation | — |

## How it works

```
Your POS Server
    │
    │  POST https://cloud.handpoint.com/moto/sale
    │  ApiKeyCloud: YOUR_MERCHANT_API_KEY
    ▼
Handpoint Payment Gateway
    │  (synchronous — no polling)
    ▼
HTTP 200  { "finStatus": "AUTHORISED", ... }
```

Backoffice calls are **synchronous** — the response is the final result. No `202 Accepted`, no polling, no `transactionResultId`.

## Authentication

All requests use the same `ApiKeyCloud` header as the Cloud API:

```http
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

See [Authentication](/reference/authentication) for the full credential reference. Backoffice and Cloud API operations use the same merchant API key.

## Environments

| Environment | Base URL |
|---|---|
| Development | `https://cloud.handpoint.io` |
| Production (DEMO + live) | `https://cloud.handpoint.com` |

## MOTO Sale (card token, no terminal)

Charge a card token obtained from a prior card-present transaction. The cardholder is not present — this is the primary use case for stored-card recurring billing.

```http
POST https://cloud.handpoint.com/moto/sale
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "amount": 1000,
  "currency": "USD",
  "cardToken": "TOKEN_FROM_PRIOR_CARD_PRESENT_TRANSACTION"
}
```

**Response:**
```json
{
  "finStatus": "AUTHORISED",
  "transactionID": "guid-for-reversal-or-refund",
  "amount": 1000,
  "currency": "USD"
}
```

| Acquirer support | Notes |
|---|---|
| **EPI** | ✅ — ProCharge token required |
| **EmerchantPay** | ✅ |
| **Paystrax** | ✅ |
| **Paysafe** | ❌ — Paysafe single-use tokens are not reusable for MOTO |

:::info Remote sale onboarding required
MOTO processing must be enabled per merchant in the Handpoint Portal (TMS) and the acquirer must have the merchant configured for card-not-present. Contact Integration Support before going live.
:::

**Error codes:**

| Code | Message | Fix |
|---|---|---|
| `3107` | CVV required | Merchant has mandatory CVV for CNP — contact Handpoint to disable |
| `5252` | Card token failure | Token invalid, expired, or not found — re-tokenize via a card-present transaction |

### How to obtain a card token

A `cardToken` is returned in any card-present `TransactionResult` when tokenization is enabled for the merchant. Enable it via the Handpoint Portal, then any sale or explicit `tokenizeCard` operation will include `cardToken` in the result.

See acquirer pages for token types: [EPI](/acquirers/epi#tokenization) · [Paysafe](/acquirers/paysafe-tsys#tokenization) · [EmerchantPay](/acquirers/omnipay-emp#tokenization) · [Paystrax](/acquirers/omnipay-paystrax#tokenization)

## MOTO Refund (card token, no terminal)

Refund against an original remote sale by transaction ID (linked) or by card token (unlinked):

**Linked refund:**
```http
POST https://cloud.handpoint.com/moto/refund
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "amount": 1000,
  "currency": "USD",
  "originalGuid": "transactionID-from-original-moto-sale"
}
```

**Unlinked refund (by card token):**
```http
POST https://cloud.handpoint.com/moto/refund
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "amount": 1000,
  "currency": "USD",
  "cardToken": "STORED_TOKEN"
}
```

| Code | Message | Fix |
|---|---|---|
| `3209` | Refund amount exceeds original | Reduce `amount` |
| `3210` | Currency mismatch | Use same currency as original sale |

## Tip Adjustment (EPI only)

Adjust a tip after sale, before batch close. Not supported on EmerchantPay or Paystrax — include the tip amount in the original sale body for those acquirers.

```http
POST https://cloud.handpoint.com/tipAdjustment
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalTransactionId": "transactionID-from-sale",
  "tipAmount": 200
}
```

`tipAmount` is in the smallest currency unit (same as `amount` on sales). Call this after the sale completes and before batch close — adjustments are not possible after the batch has closed.

## Batch Operations (TSYS/EPI only)

Batch close triggers settlement with the acquirer. EU acquirers (EmerchantPay, Paystrax) use automatic settlement and do not require batch operations.

### Batch Close

Closes the current open batch and triggers settlement. Omit `batchNumber` to target the currently open batch.

```http
POST https://cloud.handpoint.com/batch/close
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "serialNumber": "082104578",
  "deviceType": "PAXA920"
}
```

### Batch Summary

Retrieves aggregate totals — transaction count and net amounts by type.

```http
POST https://cloud.handpoint.com/batch/summary
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "serialNumber": "082104578",
  "deviceType": "PAXA920",
  "batchNumber": "001"
}
```

### Batch Detail

Retrieves the full list of individual transactions in a batch for reconciliation.

```http
POST https://cloud.handpoint.com/batch/detail
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "serialNumber": "082104578",
  "deviceType": "PAXA920",
  "batchNumber": "001"
}
```

**Parameters:**

| Name | Type | Required | Description |
|---|---|---|---|
| `serialNumber` | string | Yes | Terminal serial number |
| `deviceType` | string | Yes | Terminal model, e.g. `"PAXA920"` |
| `batchNumber` | string | No (Close) / Yes (Summary, Detail) | Omit on Batch Close to target the currently open batch |

**Batch close errors:**

| Code | Meaning | Action |
|---|---|---|
| `BATCH_ALREADY_CLOSED` | Automatic close already ran | No action needed |
| `NO_TRANSACTIONS` | No transactions in current batch | No action needed |

:::warning Batch close timing
For EPI merchants, miss a daily batch close → `BATCH_NUM_ERR_005` next day. Schedule batch close before auto-close runs (~11 PM EST for TSYS US) if you need manual control of settlement timing.
:::

## Remote Reversal (all acquirers)

Reverse a transaction by its original ID — no terminal required. Same-day only (before batch close).

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "saleReversal",
  "originalTransactionID": "transactionID-from-original-sale",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "new-uuid-for-this-reversal"
}
```

See [Remote Reversal](/acquirers/epi#remote-reversal) on the acquirer page for acquirer-specific parameters.

## Operations summary

| Operation | Endpoint | Acquirer support |
|---|---|---|
| **MOTO Sale** | `POST /moto/sale` | EPI, EmerchantPay, Paystrax |
| **MOTO Refund** | `POST /moto/refund` | EPI, EmerchantPay, Paystrax |
| **Tip Adjustment** | `POST /tipAdjustment` | EPI |
| **Batch Close** | `POST /batch/close` | EPI, Paysafe + Interac (TSYS) |
| **Batch Summary** | `POST /batch/summary` | EPI, Paysafe + Interac (TSYS) |
| **Batch Detail** | `POST /batch/detail` | EPI, Paysafe + Interac (TSYS) |
| **Remote Reversal** | `POST /transactions` | All acquirers |

## Validation & certification

**Required for every MOTO integration:**

- [ ] Card token obtained via a card-present `tokenizeCard` or sale with tokenization
- [ ] MOTO processing enabled in Handpoint Portal for the merchant
- [ ] CVV requirement confirmed with acquirer (disable for recurring if needed)
- [ ] Refund tested — linked by `originalGuid` and unlinked by `cardToken`
- [ ] Error codes `3107` and `5252` handled

**Required for batch operations:**

- [ ] Batch close tested on DEMO merchant — no real card interaction needed
- [ ] Auto-close timing confirmed with acquirer to avoid `ERR_005`

→ Error codes: [Error codes](/reference/error-codes)
