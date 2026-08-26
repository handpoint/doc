---
id: partial-approval
title: Partial Approvals
description: How to handle partial approvals in the US — the /status timing trap, accept and decline flows, correct reversal amount (totalAmount not requestedAmount), and /status/all chain fetching.
---

# Partial Approvals

## Overview

A **partial approval** occurs when an issuer authorizes less than the requested sale amount — for example, a $37.57 sale approved for $11.00 because the card's available balance is insufficient. This is most common on prepaid and debit cards with a fixed remaining balance.

The cardholder is prompted on-terminal to accept or decline the partial amount. Both outcomes require specific handling by the integration.

## Geographic availability and MCC requirements

Partial approvals are a **US-only** feature. They are mandatory for merchants in specific categories — primarily fuel, grocery, and general merchandise MCCs — and optional for others. Check with your acquirer when onboarding a merchant to confirm whether partial approval support is required.

When disabled or unsupported by the acquirer, the issuer returns a standard decline (`finStatus: DECLINED`) instead of a partial approval.

## The `/status` timing trap

:::warning
`GET https://transactions.handpoint.io/transactions/{transactionReference}/status` returns `finStatus: AUTHORISED` as soon as the issuer responds — **before** the cardholder has accepted or declined the partial at the terminal. The cardholder has up to approximately 30 seconds to decide (plus a 30-second network buffer if connectivity drops).

An integration that reads `AUTHORISED` from `/status` at this point and marks the transaction as settled may later find the cardholder cancelled, triggering an SDK-initiated auto-reversal that contradicts the saved record.
:::

**Correct polling strategy:**

1. Poll `GET https://cloud.handpoint.com/transaction-result/{transactionResultId}` until it resolves.
2. Escalate to `GET https://transactions.handpoint.io/transactions/{transactionReference}/status` only if:
   - No result arrives within 2–3 minutes, **or**
   - `finStatus` from the result is `UNDEFINED`.
3. Never save a transaction as `AUTHORISED` based solely on `/status` while `transaction-result` is still returning `IN_PROGRESS`.

## Outcome A — Cardholder accepts

`transaction-result` resolves with `finStatus: PARTIAL_APPROVAL`.

```json
{
  "finStatus": "PARTIAL_APPROVAL",
  "requestedAmount": 3757,
  "totalAmount": 1100,
  "currency": "USD",
  "transactionID": "a4c21bd0-65ab-11f1-b4d2-aab210c7e31c",
  "transactionReference": "your-uuid-here",
  "authorisationCode": "654321",
  "type": "SALE"
}
```

**Save the transaction using `totalAmount` as the settled amount.** Display `totalAmount` on the receipt. The remaining `requestedAmount − totalAmount` is uncollected.

**Option 1 — Split tender:** Collect the remaining amount via a second payment method. Your POS flow should prompt for the outstanding balance.

**Option 2 — Decline the partial (if your integration does not support partial approvals):** Reverse the authorization immediately. See [Reversing a partial approval](#reversing-a-partial-approval) below.

## Outcome B — Cardholder declines

`transaction-result` resolves with `finStatus: CANCELLED`. The SDK automatically sends a reversal for `totalAmount` — no action is required from your integration.

Do not save the transaction as a sale. Prompt the cardholder to use a different payment method.

To log the full chain (the CANCELLED partial + the SDK-generated reversal), fetch `/status/all`:

```http
GET https://transactions.handpoint.io/transactions/{transactionReference}/status/all
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

Response is an array of all transactions linked to this reference:

```json
[
  {
    "finStatus": "CANCELLED",
    "type": "SALE",
    "totalAmount": 1100,
    "requestedAmount": 3757
  },
  {
    "finStatus": "AUTHORISED",
    "type": "REVERSAL",
    "totalAmount": 1100
  }
]
```

## Reversing a partial approval

If your integration does not accept partial approvals, reverse the transaction after receiving `PARTIAL_APPROVAL`:

```http
POST https://cloud.handpoint.com/reversal
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalGuid": "a4c21bd0-65ab-11f1-b4d2-aab210c7e31c"
}
```

`originalGuid` is the `transactionID` from the partial approval result. The endpoint is **synchronous** — no polling required. HTTP 200 means the reversal was accepted; HTTP 400 with `code: 3051` means already reversed.

:::danger Use `totalAmount` as the reversal amount — not `requestedAmount`
The issuer only authorized `totalAmount`. Reversing `requestedAmount` (the original, larger amount) will fail or cause a settlement mismatch. Always reverse exactly what was authorized.
:::

For acquirers that require an explicit `amount` on the reversal (e.g. EPI), include it in cents:

```json
{
  "originalGuid": "a4c21bd0-65ab-11f1-b4d2-aab210c7e31c",
  "amount": "1100"
}
```

Check with your acquirer during onboarding whether `amount` is required.

After a successful reversal (`finStatus: AUTHORISED`), display "Insufficient funds on this card" and prompt for an alternative payment method.

## Amount fields reference

| Field | What it represents | Use for |
|---|---|---|
| `totalAmount` | The amount the issuer actually authorized (the partial) | Receipt display, reversal amount, settlement reconciliation |
| `requestedAmount` | The original amount sent in the sale request | Display only ("requested $37.57, approved $11.00") — **never** use for reversals |
| `dueAmount` | Remaining balance the cardholder still owes (`requestedAmount − totalAmount`) | Split tender — prompting a second payment for the outstanding balance |

## Decision tree

```
transaction-result finStatus = PARTIAL_APPROVAL
│
├── ISV accepts partial approvals?
│   ├── Yes → Save at totalAmount. Show receipt. Done.
│   └── No  → POST saleReversal with amount = totalAmount.
│             Show "Insufficient funds."
│             → Reversal finStatus = AUTHORISED?
│               ├── Yes → Hold released. Prompt for another card.
│               └── No  → Log failure. Escalate — hold may be outstanding.
│
└── Cardholder declines (finStatus = CANCELLED)
    → SDK auto-reversed totalAmount. Do not save as a sale.
       Prompt for another card.
```

## Related pages

- [Transaction Recovery](/reference/transaction-recovery-cloud-api) — handling connectivity loss mid-transaction
- [Terminal Reversals](/reference/terminal-reversals) — when the terminal reverses automatically
- [Transaction Result Object](/reference/transaction-result-object) — full schema for all result fields
