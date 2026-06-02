---
title: Transaction result object
sidebar_position: 2
description: Full schema of the transaction result returned by all payment operations.
---

# Transaction result object

All payment operations (Sale, Refund, Reversal, etc.) return a transaction result object asynchronously.

## Fields

| Field | Type | Description |
|---|---|---|
| `transactionID` | string | Unique transaction identifier. Store this for reversals and tip adjustments. |
| `type` | string | Transaction type: `SALE`, `REFUND`, `REVERSAL`, `VOID`, `TOKENIZE`, etc. |
| `statusMessage` | string | Human-readable status: `"Approved"`, `"Declined"`, etc. |
| `authorisedAmountInCents` | integer | Authorised amount in smallest currency unit |
| `totalAmountInCents` | integer | Total including tip |
| `tipAmountInCents` | integer | Tip amount (0 if no tip) |
| `currency` | string | ISO 4217 currency code |
| `cardEntryType` | string | `EMV`, `CONTACTLESS`, `SWIPE`, `MANUAL` |
| `cardToken` | string | Card token (only if tokenization was requested) |
| `cardTokenProvider` | string | Token provider: `TSYS`, `PAYSAFE`, etc. |
| `cardExpiryDate` | string | Card expiry in `MMYY` format |
| `maskedCardNumber` | string | Last 4 digits of PAN: `"****1234"` |
| `merchantReceipt` | string | Merchant receipt text (print or display) |
| `customerReceipt` | string | Customer receipt text |
| `originalTransactionID` | string | For refunds/reversals: the original transaction ID |
| `deviceStatus` | object | Terminal state at time of transaction |
| `errorMessage` | string | Error details if transaction failed |

## Result type enum

| Value | Meaning |
|---|---|
| `APPROVED` | Transaction approved |
| `DECLINED` | Declined by issuer |
| `PARTIALLY_APPROVED` | Partial approval (rare — only on some debit networks) |
| `REFERRAL` | Requires manual authorisation |
| `CANCELLED` | Cardholder cancelled |
| `FAILED` | Technical failure |
| `TIMEOUT` | Terminal did not respond |
| `REVERSED` | Transaction was reversed |
