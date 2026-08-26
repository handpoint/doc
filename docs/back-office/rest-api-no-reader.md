---
title: REST API — no reader
sidebar_position: 1
description: Server-side operations that do not require a physical terminal.
---

# REST API — no reader

These operations are performed entirely server-side. **No terminal, no SDK, no hardware required.**

:::info Remote Sale uses a card token — no raw card data
Handpoint remote sale back-office does not accept raw PAN, expiry, or CVV. It requires a `cardToken` from a supported token provider (e.g. TSYS, Paysafe, Tokenex). The token must have been obtained via a prior [Tokenization](/acquirers/tsys#tokenization) operation. The token provider de-tokenizes internally — the ISV system never handles raw card data.

Remote Sale can also be performed **on a PAX terminal** (terminal shows a card entry screen). That mode requires a PAX device in integrated mode and is documented on each acquirer's page.
:::

## Remote Sale back-office (card token, no terminal)

Send a card token from a supported token provider. No terminal required. Amount is in **major currency units** — `"10.00"` = $10.00.

```http
POST https://cloud.handpoint.com/moto/sale
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "amount": "10.00",
  "currency": "USD",
  "cardToken": "YOUR_STORED_CARD_TOKEN",
  "transactionReference": "538f1ee7-9f6f-49b7-8a49-89f7cc3aaad9",
  "externalId": "dr-smith"
}
```

`externalId` is optional. Include it only when using **Multi-MID** to route the transaction to a specific sub-merchant account. Omit it to process against the main MID. The `externalId` value must match a sub-MID configured for the merchant by Handpoint Integration Support. See [Multi-MID](/reference/multi-mid) for setup.

This endpoint is **synchronous** — the HTTP 200 response body is the final result, with `finStatus: "AUTHORISED"` on success. No `202 Accepted`, no polling, no `transactionResultId`.

## Remote Refund back-office (card token, no terminal)

Refund against a prior back-office sale. Linked (by original transaction ID) or unlinked (by card token). Amount in **major currency units**.

**Linked refund:**
```http
POST https://cloud.handpoint.com/moto/refund
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "amount": "10.00",
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
  "amount": "10.00",
  "currency": "USD",
  "cardToken": "YOUR_STORED_CARD_TOKEN"
}
```

Do not include `transactionReference` on refunds — this is a subsequent operation linked to the original sale's reference internally.

## Deferred Tokenization (EPI only)

Retrieve a card token from a previously completed card-present transaction — no card re-swipe or terminal interaction required. The card was tokenized by EPI's proCharge vault at the time of the original transaction; this endpoint returns the stored token.

```http
GET https://cloud.handpoint.com/transactions/{transactionID}/token
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

`transactionID` is the `transactionID` (GUID) from the original card-present **SALE** result. Reversal and void transaction IDs return error `3112`.

**Response — HTTP 200:**
```json
{
  "httpStatus": "200",
  "cardTokenizationGuid": "f1c7a940-9d4e-11f1-b6e7-ff5cc7596008",
  "cardToken": "K33f40000000000093",
  "maskedCardNumber": "************0936",
  "expiryDateMMYY": "1027",
  "serverDateTime": "20260821105621460",
  "agreementNumber": "630000026730",
  "transactionReference": "88ee3b00-9d4e-11f1-b6e7-ff5cc7596008"
}
```

Eligible transaction types: `sale`, `refund`, `preAuthorizationCapture`, `moToSale`, `moToRefund`.

**Error codes:**

| Code | Message | Fix |
|---|---|---|
| `3112` | Transaction type is not eligible for deferred tokenization | Pass the SALE `transactionID`, not the reversal's. For a partial approval → cancel, the polled result contains the reversal's ID — use `originalEFTTransactionID` from that result, or call `GET /{transactionReference}/status/all` and pick the `type: "SALE"` entry |
| `TOKENIZATION_NOT_ENABLED` | Not configured for this merchant | Contact Handpoint team |

:::note Cancelled and reversed transactions
A card token can be retrieved even from a cancelled or reversed transaction — the card was already read during the EMV process before the outcome was determined. On a partial approval that the cardholder declines (terminal auto-reverses the partial), the final polled result has `finStatus: "CANCELLED"` and `transactionID` of the auto-reversal. Use `originalEFTTransactionID` from that result (or the `type: "SALE"` entry in `/status/all`) to get the original SALE's `transactionID`, which is eligible for deferred tokenization.
:::

## Tip Adjustment

Adjust a tip on a completed sale before batch close — no card or terminal required.

```http
POST https://cloud.handpoint.com/transactions/{transactionID}/tip-adjustment
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "amount": 8
}
```

`transactionID` in the URL is the `transactionID` from the original sale result. `amount` is in **major currency units** — `8` = $8.00.

**Response — HTTP 200:**
```json
{
  "statusMessage": "tip adjusted"
}
```

Tip adjustments are not possible after the batch has closed.

## Partial Reversal (EPI/TSYS only)

Reduce an authorised amount before settlement — the cardholder is charged only the reduced amount. EPI only; requires TMS enablement per merchant. Do not include `transactionReference` — subsequent operation.

**Partial reversal** (include `amount` and `currency`):
```http
POST https://cloud.handpoint.com/reversal
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalGuid": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "amount": "8.00",
  "currency": "USD"
}
```

`amount` is the **new reduced amount** in major currency units — not a delta. `originalGuid` is the `transactionID` from the original sale. Omit `amount` and `currency` for a full reversal. The response is synchronous HTTP 200 — see [Remote Reversal](#remote-reversal) for the response shape.

## Pre-Authorization Capture

Finalize a pre-authorization and charge the cardholder. No terminal or card interaction required — the capture is sent directly to the acquirer using the `transactionID` from the original pre-auth result.

```http
POST https://cloud.handpoint.com/preauthorization/capture
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalGuid": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "capturedAmount": "65.00",
  "tipAmount": "5.00"
}
```

`originalGuid` is the `transactionID` from the pre-authorization result. `capturedAmount` and `tipAmount` are in **major currency units** as decimal strings (`"65.00"` = $65.00). The captured amount can be less than (or on some acquirers, slightly more than) the original hold. Omit `tipAmount` if there is no tip.

**Response — HTTP 200 (synchronous):**
```json
{
  "httpStatus": 200,
  "acquirerTid": "ACQUIRER_TID",
  "actionCode": "0000",
  "agreementNumber": "630000026730",
  "approvalCode": "123456",
  "batchNumber": "123",
  "cardTypeName": "Visa",
  "currency": "USD",
  "expiryDateMMYY": "1027",
  "holdAmount": "125.24",
  "issuerResponseCode": "00",
  "issuerResponseText": "Successful",
  "maskedCardNumber": "************0936",
  "originalAmount": "50.24",
  "preAuthorizationGuid": "2de4a560-9cbc-11f1-8d8a-a5d6c6242a44",
  "capturedAmount": "65.00",
  "tipAmount": "5.00",
  "preAuthorizationCaptureGuid": "32a820e0-9cbc-11f1-8d8a-a5d6c6242a44",
  "serverDateTime": "20260820172554286"
}
```

The response is **synchronous** — no polling needed. Use `preAuthorizationCaptureGuid` as the identifier for this capture (not `transactionID`). `originalAmount` is the original pre-auth hold amount; `holdAmount` reflects the running authorized total after any increases.

See [Pre-Authorization Guide](/reference/pre-authorization-guide) for the full lifecycle and acquirer support matrix.

## Pre-Authorization Reversal and Capture Reversal

Release an un-captured hold, or cancel a capture before settlement. Both operations use the same endpoint — the gateway determines the correct action based on the current state of the transaction.

**Pre-Auth Reversal** (release hold without charging): pass the `transactionID` of the original pre-authorization.

**Capture Reversal** (cancel a capture before batch close): pass the `transactionID` of the Capture result.

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "preAuthorizationReversal",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "originalTransactionId": "01236fc0-8192-11eb-9aca-ad4b0e95f241"
}
```

Do not include `transactionReference` — pre-auth reversal is a subsequent operation. The gateway links it to the original pre-auth internally using the original's reference.

**Immediate response — 202 Accepted:**
```json
{
  "statusMessage": "Operation Accepted",
  "transactionResultId": "0821599465-1787246766714"
}
```

Note: `transactionReference` is not echoed in the 202 response for reversal operations.

Poll `GET /transaction-result/{transactionResultId}` until `finStatus` is final:

**Polled result — AUTHORISED:**
```json
{
  "finStatus": "AUTHORISED",
  "type": "REVERSAL",
  "transactionID": "3b223bc0-9cbc-11f1-b018-b122502914b1",
  "statusMessage": "Successful",
  "totalAmount": 3027,
  "currency": "USD",
  "cardSchemeName": "Visa",
  "maskedCardNumber": "************0936",
  "originalEFTTransactionID": "36997f50-9cbc-11f1-8d8a-a5d6c6242a44"
}
```

`totalAmount` is the original hold amount that was released. `originalEFTTransactionID` links back to the pre-auth create.

:::note
After the batch closes (settlement), a Capture Reversal is no longer possible. Use a standard Refund instead.
:::

## Batch Close (TSYS/EPI only)

Manually trigger settlement. Batch close, summary, and detail all use the same request body.

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

## Batch Summary (TSYS/EPI only)

```http
POST https://cloud.handpoint.com/batch/summary
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
  "closedAt": "20260820172630375",
  "issuerResponseCode": "00",
  "issuerResponseText": "Batch summary retrieved",
  "batchSummaryGuid": "48207f30-9cbc-11f1-8d8a-a5d6c6242a44",
  "batchStatus": "CLOSED"
}
```

## Batch Detail (TSYS/EPI only)

Returns the individual transaction line items for reconciliation.

```http
POST https://cloud.handpoint.com/batch/detail
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

All amounts in batch responses are in major currency units (dollars/euros). `batchDetailElementGuid` uniquely identifies each line item.
