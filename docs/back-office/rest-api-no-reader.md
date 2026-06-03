---
title: REST API — no reader
sidebar_position: 1
description: Server-side operations that do not require a physical terminal.
---

# REST API — no reader

These operations are performed entirely server-side. **No terminal, no SDK, no hardware required.**

:::info MOTO has two modes
MOTO can also be performed **on a PAX terminal** — the terminal shows a card entry screen and the operator types the card details. That mode requires a connected terminal in integrated mode and is documented on each acquirer's page. This page covers **MOTO back-office only** — where card data is submitted directly in the API request with no terminal involved.
:::

## MOTO back-office (no terminal)

Submit card details in the request body. No terminal serial number. The ISV system receives card data from the cardholder (over phone, mail, or secure form) and submits it directly. Ensure your platform is PCI DSS compliant before using this mode.

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
