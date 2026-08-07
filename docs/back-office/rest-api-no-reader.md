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

Send a card token from a supported token provider. No terminal required.

```http
POST https://cloud.handpoint.com/transaction
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "action": "SALE",
  "amount": 1000,
  "currency": "USD",
  "motoChannel": true,
  "cardToken": "YOUR_STORED_CARD_TOKEN"
}
```

## Tokenize (follow-up charge without card present)

Use a stored card token to charge a cardholder for a subsequent transaction without requiring card interaction:

```http
POST https://cloud.handpoint.com/transaction
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

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
Content-Type: application/json

{
  "originalTransactionId": "abc-123",
  "tipAmount": 900
}
```

## Partial Reversal (TSYS only)

Reduce an authorised amount before settlement:

```http
POST https://cloud.handpoint.com/transaction
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "action": "PARTIALREVERSAL",
  "amount": 800,
  "currency": "USD",
  "original_transaction_reference": "abc-123"
}
```

## Batch Close (TSYS only)

Manually trigger settlement:

```http
POST https://cloud.handpoint.com/batchClose
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{ "terminal_serial_number": "123456789" }
```
