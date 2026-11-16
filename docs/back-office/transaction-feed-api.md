---
title: Transaction Feed API
sidebar_position: 2
description: Query and stream transaction data from the Handpoint analytics feed.
---

# Transaction Feed API

:::info Available with any integration path
The Transaction Feed API works alongside **any** card-present integration — Cloud API, Android SDK, iOS SDK, Windows SDK, or Cordova. It is a server-side API that talks directly to Handpoint's analytics backend; no terminal or SDK is required at query time.
:::

The Transaction Feed API provides access to processed transaction data via an Elasticsearch-backed query API.

## Base URL

```
https://txnfeed.handpoint.com
```

## Authentication

```http
AnalyticsApiKey: YOUR_MERCHANT_API_KEY
```

Use the same merchant API key you use for the Cloud API (`ApiKeyCloud`).

## Query transactions

The endpoint is `POST /transactions/` with a JSON body:

```bash
curl -X POST https://txnfeed.handpoint.com/transactions/ \
  -H "AnalyticsApiKey: YOUR_MERCHANT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "startDate": "20260101000000",
    "endDate":   "20260131235959",
    "time_zone": "+00:00",
    "dummy":     "INCLUDE"
  }'
```

**Request body parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `startDate` | string | **Yes** | Start of range — `yyyyMMddHHmmss` (14 digits), e.g. `"20260101000000"` |
| `endDate` | string | **Yes** | End of range — `yyyyMMddHHmmss`, e.g. `"20260131235959"` |
| `time_zone` | string | No | ISO 8601 UTC offset, e.g. `"+01:00"` or `"-08:00"`. Defaults to UTC. |
| `dummy` | string | No | `"NO"` (default) excludes demo/test transactions. `"INCLUDE"` returns real + dummy. `"ONLY"` returns dummy only. Without `"INCLUDE"` or `"ONLY"`, transactions from DEMO merchants are missing from results. |
| `terminalSerialNumbers` | array | No | Filter to specific serials, e.g. `["0821249003"]` |
| `filters` | array | No | Additional field filters — see below |
| `limit` | number | No | Max records to return (1–10 000, default 10 000) |
| `initPosition` | number | No | Offset for pagination within the first 10 000 records |
| `searchAfter` | string | No | Sort values from last record — for deep pagination beyond 10 000 |

## Key response fields

| Field | Description |
|---|---|
| `guid` | Transaction GUID — the unique identifier. Use this to match results against `transactionID` from the terminal result or Cloud API. |
| `transactionReference` | The merchant-set UUID sent with the original request |
| `terminalSerialNumber` | Terminal that processed the transaction |
| `amount` | Transaction amount as a decimal string — e.g. `"26900.00000"` = $26,900.00 (not minor units) |
| `currCode` | ISO 4217 currency code |
| `type` | Operation type: `SALE`, `REFUND`, `REVERSAL`, etc. |
| `name` | Human-readable transaction name, e.g. `"EMV Sale"`, `"Declined EMV Sale"` |
| `status` | Integer status code — `1` = approved, `2` = declined, etc. |
| `cardTokenProvider` | Token provider if tokenization was used |
| `serverDateTime` | Timestamp when the transaction was recorded in the backend |

:::note Fee mitigation is not in the feed yet
The feed carries no fee amount, no program, and no applied flag. Persist the `fee` object from the
transaction result in your own records. See [Fee Mitigation](/reference/fee-mitigation).
:::

## Filtering with the `filters` array

Each entry in `filters` targets a specific ES keyword field:

```json
{
  "startDate": "20260101000000",
  "endDate":   "20260131235959",
  "time_zone": "+00:00",
  "filters": [
    { "field": "terminalSerialNumber.keyword", "values": ["0821249003"] },
    { "field": "type.keyword",                 "values": ["SALE"] }
  ]
}
```

Use the `.keyword` variant of field names for exact-match filtering (e.g. `type.keyword`, `guid.keyword`, `transactionReference.keyword`).

## Elasticsearch index

For direct Elasticsearch access, the index is `txn_feed`. Contact your Handpoint integration engineer for credentials and index schema.

:::note
The Transaction Feed API is for reporting only. It cannot be used to initiate transactions.
:::
