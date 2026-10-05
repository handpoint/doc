---
title: Receipt Compliance
sidebar_position: 11
description: EMV card scheme receipt requirements — required fields, delivery methods, handling hosted URLs vs raw HTML, and what to do when no receipt is available for a recovered transaction.
---

# Receipt Compliance

Card schemes (Visa, Mastercard, Discover, Amex) require that a receipt be available to the cardholder **on demand for every transaction where a card is read** — including declined and failed transactions. Delivery method is your choice — email, SMS, printed receipt, or an in-app receipt screen. The requirement is availability, not a specific delivery channel.

:::info Declines and failures are included
A cardholder must be able to request a receipt even for a declined transaction. They need written proof that no charge was made — and a reference for any dispute. You do not need to print automatically for every decline, but the merchant must be able to provide one on request.

The only exception is a transaction that **never completed a card read** (e.g. the cardholder tapped away before the terminal finished reading the chip). If no EMV data was captured, there is nothing to put on the receipt.
:::

---

## Required fields

Include all of the following in every customer-facing receipt. Fields marked **Conditional** are required only when present in the transaction result (non-null and non-empty).

| Field | Source in result | Condition | Notes |
|---|---|---|---|
| Date and time | `terminalDateTime` (local) or `serverDateTime` (UTC) | Always | Display in cardholder's local time zone |
| Transaction type | `type` (`SALE`, `REFUND`, `REVERSAL`, `MOTO_SALE`, etc.) | Always | |
| Outcome | `finStatus` + `statusMessage` | Always | `statusMessage` is in cardholder's language — display it, don't parse it |
| Amount charged | `totalAmount` + `currency` | Always | Use `totalAmount` — not `requestedAmount`. On partial approvals these differ. |
| Card scheme | `cardSchemeName` or `cardTypeName` | Always | e.g. "Visa", "Mastercard" |
| Masked card number | `maskedCardNumber` | Always | Last 4 digits minimum |
| Authorisation code | `authorisationCode` | Always | Required for disputes |
| Issuer response | `issuerResponseCode` + `issuerResponseText` | Always | e.g. "00 / Successful" |
| Transaction ID | `transactionID` | Always | Required for Handpoint Support escalation |
| Retrieval reference | `rrn` | Conditional | Numeric string, up to 13 chars. Present on card-present sales (CHIP, contactless, swipe); empty on refunds, reversals, and MOTO. Required for chargebacks when present. |
| AID | `aid` | Conditional | Hex string, exactly **14 chars** for Visa and Mastercard (their registered AID values are fixed-length). EMV spec allows up to 32 chars for other schemes. Present on CHIP (insert) **and** CHIPCONTACTLESS — empty on swipe/MOTO. |
| TVR | `tvr` | Conditional | Hex string, always exactly **10 chars** (5 bytes, EMV-defined fixed length). Present on CHIP and CHIPCONTACTLESS — empty on swipe/MOTO. |
| TSI | `tsi` | Conditional | Hex string, always exactly **4 chars** (2 bytes, EMV-defined fixed length). Present on **CHIP insert only** — empty on CHIPCONTACTLESS even though the chip is read. Empty on swipe/MOTO. |
| IAD | `iad` | Conditional | Hex string, scheme-dependent fixed length: **14 chars for Visa**, **36 chars for Mastercard**. Present on CHIP and CHIPCONTACTLESS — empty on swipe/MOTO. |
| ARC | `arc` | Conditional | Hex string, always exactly **4 chars** (2 bytes, EMV-defined fixed length). `"0000"` = online approval; `"1000"` = terminal/gateway decline (capability restriction or routing error). Empty on MOTO. |
| Merchant name | Your merchant record | Always | Full legal name |
| Merchant address | Your merchant record | Always | Full address |
| MID | `mid` | Always | Merchant ID at acquirer |
| TID | `tid` | Always | Terminal ID at acquirer |
| `transactionReference` | `transactionReference` | Suggested | ISV's UUID — useful for troubleshooting; link to your internal order |
| Serial number | Your terminal config | Suggested | Links to device in dispute resolution |

:::caution Use `totalAmount`, not `requestedAmount`
On partial approvals, `requestedAmount` is what the customer owed and `totalAmount` is what the card actually covered. Always use `totalAmount` as the amount on the receipt — that is the amount that will settle.
:::

---

## Fee mitigation — one rule per program

A transaction that carried a fee needs one more line, and the rule differs by program. Read
`fee.mitigationProgram` and `fee.applied` on the result, then apply the matching row. See
[Fee Mitigation](/reference/fee-mitigation) for the full contract.

| Program | The receipt shows | Condition |
|---|---|---|
| Surcharge | A separate line, clearly labelled. The card networks **require** it. Never inside the total, never mixed with the tax | `fee.applied` is `true` |
| Admin fee | A separate line, with its own label | `fee.applied` is `true` |
| Dual pricing | **No fee line.** The card price is the posted price | Always |
| Cash discount | Nothing. It is not a card transaction | Never reaches the gateway |

The amount on the line is `fee.amount` from the result, in major units. A fee the gateway dropped
(`fee.applied` is `false`) gets no line at all, because the customer never paid it.

:::warning Dual pricing prints no fee line, on purpose
This looks like an omission. It is not. An itemised fee would present a price as a fee, and would undermine the model that makes dual pricing lawful. Do not add a fee line to a dual pricing receipt.
:::

---

## Receipt language

The two receipts render in different languages:

| Receipt | Language source |
|---|---|
| `customerReceipt` | Card's language preference (`cardLanguagePreference` field, e.g. `"es_ES"`) |
| `merchantReceipt` | Terminal's configured merchant language |

A Spanish-language card tapped on an English-configured terminal produces a Spanish customer receipt and an English merchant receipt. This is the expected behaviour — the customer receipt renders in the cardholder's language.

---

## Receipt delivery

Handpoint provides a hosted receipt URL in `merchantReceipt` and `customerReceipt` fields for card-present transactions. Display or link to the customer URL; the merchant URL is for your own records.

**URL format:**
```
https://receipts.handpoint.com/receipts/{transactionID}/customer.html
https://receipts.handpoint.com/receipts/{transactionID}/merchant.html
```

The path uses `transactionID` (the gateway-assigned GUID from the result), not `transactionReference`.

Fetch the URL and present it in a webview, email it as a link, or send it via SMS. The hosted receipt is pre-formatted and compliant — you can use it as-is.

### Handle both URL and raw HTML

The `merchantReceipt` and `customerReceipt` fields in the transaction result contain either:
- A **hosted URL** (`https://receipts.handpoint.com/...`) — fetch and display or include in email/SMS
- **Raw HTML string** — rendered directly when the terminal could not upload to the receipt server

Your code must handle both. Never assume it's always a URL.

```javascript
function displayReceipt(receiptField) {
  if (receiptField && receiptField.startsWith('http')) {
    // Hosted URL — fetch and render in webview, or email the link
    openWebview(receiptField);
  } else if (receiptField) {
    // Raw HTML — render directly
    renderHtml(receiptField);
  } else {
    // No receipt available — build from result fields (see below)
    buildReceiptFromResult();
  }
}
```

### When raw HTML is delivered (not a URL)

| Scenario | Why |
|---|---|
| MOTO on-terminal (`moToSale`) | Terminal has no receipt upload path for keyed-entry MOTO |
| Network failure during transaction | Terminal could not reach the Handpoint receipt server at transaction time |

---

## Known gap — recovered transactions

:::warning No receipt URL for recovered transactions
When a transaction is recovered via `GET https://transactions.handpoint.com/transactions/{transactionReference}/status` (after a network failure or app crash), the response **does not include `merchantReceipt` or `customerReceipt`** fields.

You must build the receipt yourself using the other fields in the `/status` response.
:::

### Building a receipt from `/status`

Use the required fields table above with the values from the `/status` response. All the required fields (`transactionID`, `totalAmount`, `authorisationCode`, `maskedCardNumber`, `rrn`, `terminalDateTime`, `cardSchemeName`, etc.) are present — only the pre-built HTML receipt is absent.

Apply your standard receipt template and populate it from the response fields. For EMV fields (AID, TVR, IAD, ARC): include each one only if its value is non-empty in the response.

---

## Acquirer-specific notes

| Acquirer | Notes |
|---|---|
| EPI | Hosted receipt URL returned for card-present. Raw HTML for MOTO on-terminal. |
| EmerchantPay / Paystrax | Hosted receipt URL returned. Check whether `merchantReceipt` / `customerReceipt` are present — may vary by transaction type. |
| PAYSAFE | Receipt field behaviour follows the same pattern — URL when upload succeeds, raw HTML as fallback. |

---

## Testing receipt delivery

| Scenario | Expected |
|---|---|
| Standard card-present sale — approved | `merchantReceipt` and `customerReceipt` are hosted URLs — display or send to cardholder |
| Standard card-present sale — **declined** | `merchantReceipt` and `customerReceipt` are hosted URLs — receipt still available and must be offered to cardholder on request |
| MOTO on-terminal sale | Receipts are raw HTML strings (not URLs) |
| MOTO remote sale (`POST /moto/sale`) | No `merchantReceipt` / `customerReceipt` in response — build from result fields |
| Transaction recovered via `/status` | No receipt fields — ISV-built receipt required |
| Email delivery | Cardholder receives receipt link within 30 seconds |
| Printed receipt (PAX with printer) | All required EMV fields printed; no truncation |

---

## Receipt retention

Suggested lifetime: **13 months**, matching Handpoint Gateway's transaction processing data retention period.

Historical analytics data (Transaction Feed API) has no specified retention limit — transaction records are available indefinitely for reporting and dispute resolution.

---

## Related pages

- [Validate your Integration](/reference/validate-integration) — pre-certification receipt compliance checklist
- [MOTO — Card Not Present](/reference/moto-guide) — receipt format differences for MOTO paths
- [Transaction Recovery — Cloud API](/reference/transaction-recovery-cloud-api) — recovery flow when no receipt URL is available
- [Transaction Result Object](/reference/transaction-result-object) — full field schema
- [Fee Mitigation](/reference/fee-mitigation) — the fee line each program requires
