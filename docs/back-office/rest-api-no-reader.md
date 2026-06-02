---
title: REST API — no reader
sidebar_position: 1
description: Card-not-present and server-side operations that do not require a physical terminal.
---

# REST API — no reader

These operations are performed entirely server-side via the Handpoint Cloud REST API. No terminal, no SDK, no hardware required.

:::info URL for staging vs production
Use `https://cloud.handpoint.io` for PAX debug devices (staging). Use `https://cloud.handpoint.com` for production PAX devices.
:::

## MOTO (Mail Order / Telephone Order)

Process card-not-present transactions. See the [MOTO section](../acquirers/tsys#moto) on your acquirer's page for the full implementation guide.

```http
POST https://cloud.handpoint.com/transaction
ApiKeyCloud: YOUR_MERCHANT_API_KEY

{
  "action": "SALE",
  "motoChannel": true,
  "amount": 1000,
  "currency": "USD",
  "card": { "number": "...", "expiryDate": "0128", "cvv": "123" }
}
```

## Tokenize (card-not-present follow-up charge)

Use a stored token to charge a cardholder without requiring card entry:

```http
POST https://cloud.handpoint.com/transaction
ApiKeyCloud: YOUR_MERCHANT_API_KEY

{
  "action": "SALE",
  "amount": 1000,
  "currency": "USD",
  "cardToken": "TOKEN_FROM_PREVIOUS_TOKENIZATION"
}
```

## Tip Adjustment

Adjust a tip on a completed sale — no card or terminal required:

```http
POST https://cloud.handpoint.com/tipAdjustment
ApiKeyCloud: YOUR_MERCHANT_API_KEY

{
  "originalTransactionId": "abc-123",
  "tipAmount": 900
}
```

## Partial Reversal (TSYS US only)

Reduce an authorised amount before settlement:

```http
POST https://cloud.handpoint.com/transaction
ApiKeyCloud: YOUR_MERCHANT_API_KEY

{
  "action": "PARTIALREVERSAL",
  "amount": 800,
  "currency": "USD",
  "original_transaction_reference": "abc-123"
}
```

## Batch Close (TSYS US only)

Manually trigger settlement:

```http
POST https://cloud.handpoint.com/batchClose
ApiKeyCloud: YOUR_MERCHANT_API_KEY

{ "terminal_serial_number": "123456789" }
```
