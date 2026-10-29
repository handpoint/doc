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

Send your API key in the `AnalyticsApiKey` header:

```http
AnalyticsApiKey: YOUR_API_KEY
```

## Query transactions

Searches use `POST` with a JSON body:

```http
POST /transactions
AnalyticsApiKey: YOUR_API_KEY
Content-Type: application/json

{
  "startDate": "20260101000000",
  "endDate": "20260131235959",
  "terminalSerialNumbers": ["123456789"],
  "onlySuccessful": true,
  "limit": 1000
}
```

The matching transactions are returned in `results`.

| Body field | Description |
|---|---|
| `startDate`, `endDate` | **Required.** Exactly 14 characters, `yyyyMMddHHmmss` |
| `terminalSerialNumbers` | Limit to these terminals |
| `onlySuccessful` | `true` returns approved transactions only |
| `filters` | `[{ "field": "...", "value": "..." }]`. Exact match on the whole value, combined with AND. No substring or wildcard search |
| `limit` | Rows per request, at most 10,000 |
| `orderBy` | `[{ "value": "serverDateTime", "order": "asc" }]` |

### Look up specific transactions

| Request | Returns |
|---|---|
| `GET /transactions/{guid}` | One transaction by Handpoint transaction ID |
| `GET /transactions/guids?listOfGuids=a,b` | Several transactions by ID |
| `GET /transactions/customer-reference/{customerReference}` | Transactions carrying that `customerReference` |

## Key fields

| Field | Description |
|---|---|
| `guid` | Handpoint transaction ID. Unique |
| `transactionReference` | The reference sent with the original request. For Standalone-mode payments it is generated on the terminal |
| `customerReference` | Free-text reference from the request, if one was sent |
| `terminalSerialNumber` | Terminal that processed the transaction |
| `amount`, `tipAmount` | Amount and tip in **major units** as decimal strings, e.g. `"5.00000"` |
| `currCode` | ISO 4217 alphabetic currency code, e.g. `EUR` |
| `type` | Transaction type, e.g. `Sale` |
| `status` | Gateway status: `200` approved, `403` declined |
| `cardTokenProvider` | Token provider if tokenization was used |
| `serverDateTime` | Gateway processing time, `yyyyMMddHHmmss` in UTC |

To reconcile Standalone-mode payments with your POS, see
[Standalone Fallback & Reconciliation](/reference/standalone-fallback-reconciliation).

:::note Fee mitigation is not in the feed yet
The feed carries no fee amount, no program, and no applied flag. Persist the `fee` object from the
transaction result in your own records. See [Fee Mitigation](/reference/fee-mitigation).
:::

## Elasticsearch index

For direct Elasticsearch access, the index is `txn_feed`. Contact your Handpoint integration engineer for credentials and index schema.

:::note
The Transaction Feed API is for reporting only. It cannot be used to initiate transactions.
:::
