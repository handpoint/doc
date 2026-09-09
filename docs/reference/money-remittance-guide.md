---
title: Money Remittance Guide
sidebar_position: 12
description: Flag a sale as a cross-border money transfer on EmerchantPay. MasterCard only — Visa processes as a normal sale with no extra fields.
---

# Money Remittance Guide

Money remittance flags a card-present sale as a cross-border money transfer under network rules for MCC 4829 (Wire Transfer) or MCC 6540 (POI Funding). It is **not for standard retail transactions**.

**Supported acquirer: EmerchantPay only.**

## The card-brand requirement

This is the most important thing to understand about money remittance integration:

- **MasterCard**: send `moneyRemittanceOptions` in the sale request — the network requires recipient name and destination country
- **Visa**: send a **normal sale with no extra fields** — Visa handles remittance at the network level; `moneyRemittanceOptions` is not used and must be omitted

**The ISV cannot detect the card brand before the card is tapped.** Your application must ask the merchant or cardholder which card they are paying with before initiating the transaction, then send the appropriate request.

:::caution Ask before you tap
You must know the card brand **before** sending the request. There is no way to change the request once the terminal is waiting for a card. Build a card-brand selector into your checkout UI — for example: "Is the customer paying with MasterCard?" → Yes: include `moneyRemittanceOptions`. No: send a normal sale.
:::

## MasterCard request

```bash
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "sale",
  "amount": "10000",
  "currency": "EUR",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "moneyRemittanceOptions": {
    "fullName": "Peter Parker",
    "countryCode": "GBR"
  },
  "transactionReference": "your-unique-ref"
}'
```

| Field | Type | Required | Description |
|---|---|---|---|
| `fullName` | string | Yes | Recipient full name. Max 30 characters |
| `countryCode` | string | Yes | Recipient destination country — **ISO 3166-1 alpha-3** (e.g. `"GBR"`, `"USA"`, `"DEU"`) |

Both fields appear in the transaction result and are printed on the receipt.

## Visa request

Send a standard sale. Do not include `moneyRemittanceOptions`.

```bash
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "sale",
  "amount": "10000",
  "currency": "EUR",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "your-unique-ref"
}'
```

## Error reference

| Symptom | Likely cause | Fix |
|---|---|---|
| `"No device listening"` instead of validation error | Invalid or unsupported `countryCode` | Use a valid ISO 3166-1 alpha-3 code; verify with EmerchantPay that the destination is supported |
| Transaction declined with acquirer response | Card not eligible for remittance or merchant not configured for MCC 4829/6540 | Contact Handpoint integration support to verify merchant setup |

## SDK support

Money remittance is available from **Android SDK v7.1004.1** and later. iOS HiLite does not currently support `moneyRemittanceOptions` — contact the Handpoint integration team if you need iOS support.

For Android PAX and other integration paths, see the [EmerchantPay acquirer page](/acquirers/emerchantpay#money-remittance) for full SDK code examples.

## Testing

Use a DEMO merchant configured against ViscusDummy. Send any amount that does not trigger a specific response (see [trigger amounts](/reference/development-hardware#trigger-amounts)) — ViscusDummy will return `AUTHORISED` regardless of whether `moneyRemittanceOptions` is included. Verify that `moneyRemittanceOptions` appears in the transaction result payload for MasterCard requests and is absent for Visa requests.
