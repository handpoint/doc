---
title: MOTO — Card Not Present
sidebar_position: 9
description: Complete guide to MOTO (Mail Order / Telephone Order) integration via the Handpoint Cloud REST API and Android SDK — on-terminal keyed entry and remote card token paths.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MOTO — Card Not Present

MOTO (Mail Order / Telephone Order) transactions allow merchants to accept card payments without the cardholder physically present — over the phone, via mail order, or through a recurring billing agreement. The card number is keyed in manually rather than read by a chip, tap, or swipe.

:::info Acquirer requirement
MOTO must be enabled per merchant by Handpoint. Contact your Handpoint integration engineer before building MOTO features.

**EPI (TSYS):** Supported — `motoEnabled = true` set by Handpoint.  
**EmerchantPay / Paystrax:** Remote card token sale supported; on-terminal keyed entry not available.  
**PAYSAFE:** Not supported.
:::

---

## Two MOTO paths

| Path | How it works | Terminal required | Acquirers |
|---|---|---|---|
| **On-terminal keyed entry** | PAX terminal shows a manual card-entry screen; operator keys in card details | Yes — PAX in integrated mode | EPI only |
| **Remote sale (card token)** | Server-side charge against a stored card token — no terminal interaction | No | EPI, EmerchantPay, Paystrax |

Choose **remote sale** whenever you have a stored token. On-terminal keyed entry is for phone-order scenarios where you don't yet have a token.

---

## Path 1 — On-terminal keyed entry

The PAX terminal displays a card-entry screen. The operator reads the card number, expiry, and CVV from the cardholder over the phone and enters them on the terminal. `cardEntryType: "CNP"` (Card Not Present) in the result confirms keyed entry.

Uses the standard `POST /transactions` endpoint — same async 202 → polling flow as a card-present sale.

### Cloud API

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "moToSale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
```

`amount` is in **minor units** as a string — `"1000"` = $10.00.

**202 response:**
```json
{
  "statusMessage": "Operation Accepted",
  "transactionResultId": "082104578-1787246766714"
}
```

:::warning transactionReference not echoed for on-terminal MOTO (known platform bug)
The `transactionReference` you send is ignored by the Cloud API for `moToSale` — the returned result contains a system-generated reference that does not match your value. This means `GET /transactions/{transactionReference}/status` will not find the transaction.

**Workaround:** Use `transactionResultId` to poll for the result. Store both `transactionResultId` and your internal order ID before sending. If the poll times out, query the Transaction Feed API by serial number and time window to locate the transaction manually.

This bug has been escalated to Handpoint Engineering (reference: CUS ticket filed 2026-08-21).
:::

**Poll for result:**
```http
GET https://cloud.handpoint.com/transaction-result/{transactionResultId}
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

HTTP 204 = still processing (no body — do not call `.json()`). HTTP 200 = result ready.

**Successful result (`finStatus: "AUTHORISED"`):**
```json
{
  "finStatus": "AUTHORISED",
  "transactionID": "4f936330-9d80-11f1-a7f7-fd472d9bb27f",
  "type": "MOTO_SALE",
  "paymentScenario": "MOTO",
  "cardEntryType": "CNP",
  "requestedAmount": 1000,
  "totalAmount": 1000,
  "tipAmount": 0,
  "dueAmount": 0,
  "currency": "USD",
  "cardSchemeName": "Visa",
  "maskedCardNumber": "************2383",
  "authorisationCode": "123456",
  "issuerResponseCode": "00",
  "verificationMethod": "NOT_REQUIRED",
  "batchNumber": "123",
  "transactionReference": "<system-generated — does not match sent value>",
  "merchantReceipt": "<html>...(raw HTML — not a URL for on-terminal MOTO)</html>",
  "customerReceipt": "<html>...(raw HTML)</html>"
}
```

:::note Receipt format on on-terminal MOTO
`merchantReceipt` and `customerReceipt` are delivered as **raw HTML strings** — not URLs. The terminal has no receipt upload path for MOTO keyed entry. Handle both formats: check whether the value starts with `http` to decide whether to fetch or render directly.
:::

### Android SDK (PAX)

```kotlin
val options = MoToOptions()
hapi.motoSale(BigInteger("1000"), Currency.USD, options)
```

Result delivered via `endOfTransaction` callback. Same `finStatus` and field set as Cloud API.

### Timeout — terminal stays busy

`moToSale` waits for a human to key in card details. If no operator is present, the poll loop exhausts (~120s → UNDEFINED) **but the terminal remains stuck in the active entry screen**. Every subsequent on-terminal transaction returns error `1001 Device is busy` until resolved.

**After a timeout:**
1. Trigger UNDEFINED recovery via the Transaction Feed (time window + serial number — `transactionReference` recovery will not work due to the known bug above)
2. Send `POST /transactions` with `"operation": "stopCurrentTransaction"` to free the terminal
3. Poll the cancel until `finStatus: "CANCELLED"` before sending any further on-terminal request

---

## Path 2 — Remote sale (card token, no terminal)

Charge a stored card token directly from your server. No terminal interaction, no polling — synchronous HTTP 200 response.

Token sources: EPI ProCharge, EPI token, EmerchantPay token, Paystrax token. Tokens are obtained from prior card-present or MOTO transactions when tokenization is enabled for the merchant.

### Cloud API

```http
POST https://cloud.handpoint.com/moto/sale
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "amount": "10.00",
  "currency": "USD",
  "cardToken": "STORED_TOKEN_FROM_PRIOR_TRANSACTION",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
```

`amount` is in **major units** as a decimal string — `"10.00"` = $10.00.

**Success response (HTTP 200, synchronous):**
```json
{
  "@type": "sale",
  "httpStatus": 200,
  "guid": "82c40d50-9d7f-11f1-9d23-43aed1037e3c",
  "amount": "10.00",
  "currency": "USD",
  "approvalCode": "123456",
  "batchNumber": "123",
  "cardTypeName": "Visa",
  "issuerResponseCode": "00",
  "issuerResponseText": "Successful",
  "maskedCardNumber": "************0936",
  "retrievalReferenceNumber": "0000821725814",
  "transactionReference": "your-uuid",
  "expiryDateMMYY": "1027",
  "acquirerTid": "ACQUIRER_TID",
  "serverDateTime": "20260821164400549",
  "terminalDateTime": "20260821164400000"
}
```

**Critical:** Success is indicated by `httpStatus: 200` (integer) — there is **no `finStatus` field** in this response. The GUID for reversal is in the `guid` field, **not** `transactionID`.

### Reversing a remote sale

Use `POST /reversal` with the `guid` from the sale response:

```http
POST https://cloud.handpoint.com/reversal
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{ "originalGuid": "82c40d50-9d7f-11f1-9d23-43aed1037e3c" }
```

Synchronous — HTTP 200 on success. `finStatus` is not returned; check `httpStatus: 200` (integer) and `issuerResponseCode: "00"`.

### Error codes

| Code | Message | Meaning | Fix |
|---|---|---|---|
| `3107` | CVV required | Mandatory CVV configured for CNP — not supported on token endpoint | Contact Handpoint to disable mandatory CVV for this merchant |
| `5252` | Card token failure | Token provider is **down or unreachable** — the stored token is valid | Retry later; if persistent, contact Handpoint to verify token provider availability |

Error `5252` does **not** mean the token is invalid or expired. Tokens don't expire. It means the token provider (ProCharge, etc.) is temporarily unreachable. Retry the charge when the provider recovers.

---

## AVS — Address Verification Service

EPI supports AVS for MOTO — attach the cardholder's billing address to reduce fraud risk. Include a `billing` object in the sale request:

<Tabs groupId="moto-path">
<TabItem value="cloud-api-remote" label="Remote sale (card token)">

```json
{
  "amount": "33.09",
  "currency": "USD",
  "cardToken": "STORED_TOKEN",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000",
  "billing": {
    "zipCode": "10001",
    "address": "123 Main St"
  }
}
```

</TabItem>
<TabItem value="cloud-api-terminal" label="On-terminal (Cloud API)">

```json
{
  "operation": "moToSale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000",
  "billing": {
    "zipCode": "10001",
    "address": "123 Main St"
  }
}
```

</TabItem>
<TabItem value="android-sdk" label="Android SDK">

```kotlin
val billing = Billing(zipCode = "10001", address = "123 Main St")
val options = MoToOptions(billing = billing)
hapi.motoSale(BigInteger("1000"), Currency.USD, options)
```

Or let the terminal prompt the operator for the address — set `enableAvsFields = true` and leave `billing` unset:

```kotlin
val options = MoToOptions(enableAvsFields = true)
hapi.motoSale(BigInteger("1000"), Currency.USD, options)
```

</TabItem>
</Tabs>

`zipCode` is required when `billing` is included. `address` is optional. AVS must be enabled per merchant by Handpoint (`avsForMoto` flag).

The AVS result is in `TransactionResult.avsResult`. Adding AVS does not change the response structure.

→ Full AVS documentation: [AVS](/reference/avs)

---

## Tokenization — obtaining a card token for future MOTO

A card token is returned in the transaction result as `cardToken` when tokenization is enabled for the merchant. It is returned automatically alongside any card-present or MOTO transaction — no special API call needed at transaction time.

To retrieve a token from a past transaction (EPI only):

```http
GET https://cloud.handpoint.com/transactions/{transactionID}/token
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

`transactionID` must be from a SALE-type transaction. Returns `{ "cardToken": "TOKEN_STRING" }`.

---

## Related pages

- [AVS](/reference/avs) — billing address configuration and edge cases
- [Back-Office REST API](/back-office/rest-api-no-reader) — full endpoint reference for remote operations
- [Transaction Recovery — Cloud API](/reference/transaction-recovery-cloud-api) — recovery flow for on-terminal MOTO timeouts
- [EPI acquirer page](/acquirers/epi) — EPI-specific requirements and token provider details
