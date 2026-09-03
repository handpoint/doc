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

## Pre-Authorization Increase / Decrease

Adjust the held amount on an open pre-authorization. No terminal or card interaction required.

```http
POST https://cloud.handpoint.com/preauthorization/increase
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalGuid": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "increaseAmount": "20.00"
}
```

`increaseAmount` is the **delta** to add to the current hold, in major units — not the new total. Add `"subtract": "1"` to decrease instead; there is no separate decrease endpoint. `originalGuid` is always the `transactionID` of the original pre-authorization.

See [Pre-Authorization Guide](/reference/pre-authorization-guide#increase-decrease) for the full rules, optional parameters, and the with-reader alternative.

## Pre-Authorization Capture

Finalize a pre-authorization and charge the cardholder. No terminal or card interaction required — the capture is sent directly to the acquirer using the `transactionID` from the original pre-auth result.

```http
POST https://cloud.handpoint.com/preauthorization/capture
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalGuid": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "capturedAmount": "9500"
}
```

`originalGuid` is the `transactionID` from the pre-authorization result. The captured amount can be less than (or on some acquirers, slightly more than) the original hold. To include a tip:

```http
{
  "originalGuid": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "capturedAmount": "9500",
  "tipAmount": "500"
}
```

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

:::note
After the batch closes (settlement), a Capture Reversal is no longer possible. Use a standard Refund instead.
:::

## Batch Close (TSYS only)

Manually trigger settlement:

```http
POST https://cloud.handpoint.com/batchClose
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{ "terminal_serial_number": "123456789" }
```
