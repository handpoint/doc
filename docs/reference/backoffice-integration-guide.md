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

It is available **alongside any integration path** — Cloud REST API, Android SDK (PAX), Android SDK (HiLite), iOS SDK, Cordova — adding server-side operations that go directly to the payment gateway with no terminal or SDK involved. Which back-office operations are available depends on acquirer support, not on which SDK you chose for card-present transactions.

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

**Deferred tokenization (EPI only):** If a prior transaction was not tokenized at the time, you can retrieve the token later with no card re-swipe:

```http
GET https://cloud.handpoint.com/transactions/{transactionID}/token
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

Pass the **SALE** `transactionID` (GUID) from the original transaction result. Eligible types: `sale`, `refund`, `preAuthorizationCapture`, `moToSale`, `moToRefund`. Passing a reversal or void ID returns error `3112` — for a partial approval that was cancelled, use `originalEFTTransactionID` from the polled result to get the SALE's ID.

**Response — HTTP 200:**
```json
{
  "httpStatus": "200",
  "cardToken": "K33f40000000000093",
  "maskedCardNumber": "************0936",
  "expiryDateMMYY": "1027",
  "cardTokenizationGuid": "f1c7a940-9d4e-11f1-b6e7-ff5cc7596008",
  "serverDateTime": "20260821105621460"
}
```

| Error | Meaning | Fix |
|---|---|---|
| `3112` | Transaction type not eligible for deferred tokenization | Use SALE `transactionID`, not the reversal's |
| `TOKENIZATION_NOT_ENABLED` | Not configured for this merchant | Contact Handpoint team |

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

**Via Cloud API (`/transactions/{id}/tip-adjustment`):**

```http
POST https://cloud.handpoint.com/transactions/{transactionID}/tip-adjustment
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "amount": 8
}
```

`transactionID` is the `transactionID` from the original sale result. `amount` is in **major currency units** (dollars/euros/etc.) — `8` means $8.00, not $0.08.

**Response — HTTP 200:**
```json
{
  "statusMessage": "tip adjusted"
}
```

Call this after the sale completes and before batch close — adjustments are not possible after the batch has closed.

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

**Response — HTTP 200:**
```json
{
  "httpStatus": "200",
  "batchNumber": "123",
  "transactionCount": "10",
  "netAmount": "1000.00",
  "closedAt": "20260820172631429",
  "issuerResponseCode": "00",
  "issuerResponseText": "Batch closed",
  "closeBatchGuid": "48c571c0-9cbc-11f1-8d8a-a5d6c6242a44",
  "batchStatus": "CLOSED"
}
```

`netAmount` is in major currency units (dollars/euros). `closedAt` is a timestamp string in `YYYYMMDDHHmmssSSS` format.

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

**Response — HTTP 200:**
```json
{
  "httpStatus": "200",
  "batchNumber": "123",
  "transactionCount": "10",
  "netAmount": "1000.00",
  "closedAt": "20260820172630375",
  "issuerResponseCode": "00",
  "issuerResponseText": "Batch summary retrieved",
  "batchSummaryGuid": "48207f30-9cbc-11f1-8d8a-a5d6c6242a44",
  "batchStatus": "CLOSED"
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

**Response — HTTP 200:**
```json
{
  "httpStatus": "200",
  "batchNumber": "123",
  "closedAt": "20260820172630912",
  "issuerResponseCode": "00",
  "issuerResponseText": "Batch detail retrieved",
  "details": [
    {
      "transactionType": "SALE",
      "amount": "100.00",
      "batchDetailElementGuid": "b32c9185-b63f-4a14-8159-f7b5a90a8ccd"
    },
    {
      "transactionType": "SALE",
      "retrievalReferenceNumber": "RRN08236",
      "amount": "50.00",
      "batchDetailElementGuid": "3b4f4a8d-93da-4809-8a0d-5a75d58c9ace"
    },
    {
      "transactionType": "REFUND",
      "retrievalReferenceNumber": "RRN08237",
      "amount": "25.00",
      "batchDetailElementGuid": "d77933b3-a8a2-48e7-a96e-0cbf600e37d1"
    }
  ],
  "batchDetailGuid": "48746b90-9cbc-11f1-8d8a-a5d6c6242a44",
  "batchStatus": "CLOSED"
}
```

Each entry in `details` has `transactionType` (`"SALE"`, `"REFUND"`, etc.), `amount` in major units, and an optional `retrievalReferenceNumber`.

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
POST https://cloud.handpoint.com/reversal
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalGuid": "transactionID-from-original-sale"
}
```

`originalGuid` is the `transactionID` from the original sale result. This endpoint is **synchronous** — the response is the final result, no polling needed.

**Response — HTTP 200:**
```json
{
  "httpStatus": 200,
  "acquirerTid": "ACQUIRER_TID",
  "agreementNumber": "630000026730",
  "amount": "150.06",
  "approvalCode": "123456",
  "batchNumber": "123",
  "cardTypeName": "Visa",
  "currency": "USD",
  "issuerResponseCode": "00",
  "issuerResponseText": "Successful",
  "maskedCardNumber": "************0936",
  "authorizationGuid": "a03b8a30-9cbb-11f1-b018-b122502914b1",
  "originalGuid": "a03b8a30-9cbb-11f1-b018-b122502914b1",
  "reversalGuid": "e2dd3000-9cbb-11f1-8d8a-a5d6c6242a44",
  "transactionReference": "7368c0b5-e788-42de-a949-ed079946b590",
  "customFields": {
    "entry": [
      { "key": "messageReasonCode", "value": "4000" },
      { "key": "tenderType", "value": "Credit" },
      { "key": "issuerResponseCode", "value": "00" }
    ]
  }
}
```

`reversalGuid` is the ID of the new reversal transaction. `authorizationGuid` / `originalGuid` both refer to the original sale. `amount` is in major currency units (dollars/euros). The response does **not** include `transactionID` — use `reversalGuid` to identify this reversal.

See [Remote Reversal](/acquirers/epi#remote-reversal) on the acquirer page for acquirer-specific parameters.

## Operations summary

| Operation | Endpoint | Acquirer support |
|---|---|---|
| **MOTO Sale** | `POST /moto/sale` | EPI, EmerchantPay, Paystrax |
| **MOTO Refund** | `POST /moto/refund` | EPI, EmerchantPay, Paystrax |
| **Deferred Tokenization** | `GET /transactions/{id}/token` | EPI |
| **Tip Adjustment** | `POST /transactions/{id}/tip-adjustment` | EPI |
| **Partial Reversal** | `POST /reversal` (with `amount` + `currency`) | EPI only (TMS-enabled) |
| **Batch Close** | `POST /batch/close` | EPI, Paysafe + Interac (TSYS) |
| **Batch Summary** | `POST /batch/summary` | EPI, Paysafe + Interac (TSYS) |
| **Batch Detail** | `POST /batch/detail` | EPI, Paysafe + Interac (TSYS) |
| **Remote Reversal** | `POST /reversal` | All acquirers |

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
