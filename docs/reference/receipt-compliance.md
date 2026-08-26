---
title: Receipt Compliance
sidebar_position: 11
description: EMV card scheme receipt requirements — required fields, delivery methods, handling hosted URLs vs raw HTML, and what to do when no receipt is available for a recovered transaction.
---

# Receipt Compliance

Card schemes (Visa, Mastercard, Discover, Amex) require that a receipt be available to the cardholder **on demand** for every EMV transaction. Delivery method is your choice — email, SMS, printed receipt, or an in-app receipt screen. The requirement is availability, not a specific delivery channel.

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
| Retrieval reference | `retrievalReferenceNumber` | Always | Required for chargebacks |
| AID | `applicationIdentifier` | Conditional | EMV chip only — omit for contactless/swipe/MOTO |
| TVR | `tvr` | Conditional | EMV chip only |
| IAD | `iad` | Conditional | Omit if absent |
| ARC | `arc` | Conditional | Omit if absent |
| Merchant name | Your merchant record | Always | Full legal name |
| Merchant address | Your merchant record | Always | Full address |
| MID | `acquirerMid` or merchant record | Always | Merchant ID at acquirer |
| TID | `acquirerTid` | Always | Terminal ID at acquirer |
| `transactionReference` | `transactionReference` | Suggested | ISV's UUID — useful for troubleshooting; link to your internal order |
| Serial number | Your terminal config | Suggested | Links to device in dispute resolution |

:::caution Use `totalAmount`, not `requestedAmount`
On partial approvals, `requestedAmount` is what the customer owed and `totalAmount` is what the card actually covered. Always use `totalAmount` as the amount on the receipt — that is the amount that will settle.
:::

---

## Receipt delivery

Handpoint provides a hosted receipt URL in `merchantReceipt` and `customerReceipt` fields for card-present transactions. Display or link to the customer URL; the merchant URL is for your own records.

**Example hosted receipt URL format:**
```
https://receipts.handpoint.com/receipts/{transactionID}/customer.html
```

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

Use the required fields table above with the values from the `/status` response. All the required fields (`transactionID`, `totalAmount`, `authorisationCode`, `maskedCardNumber`, `retrievalReferenceNumber`, `terminalDateTime`, `cardSchemeName`, etc.) are present — only the pre-built HTML receipt is absent.

Apply your standard receipt template and populate it from the response fields. For EMV fields (AID, TVR, IAD, ARC): include each one only if its value is non-empty in the response.

---

## Acquirer-specific notes

| Acquirer | Notes |
|---|---|
| EPI (TSYS) | Hosted receipt URL returned for card-present. Raw HTML for MOTO on-terminal. |
| EmerchantPay / Paystrax | Hosted receipt URL returned. Check whether `merchantReceipt` / `customerReceipt` are present — may vary by transaction type. |
| PAYSAFE | Receipt field behaviour follows the same pattern — URL when upload succeeds, raw HTML as fallback. |

---

## Testing receipt delivery

| Scenario | Expected |
|---|---|
| Standard card-present sale (staging) | `merchantReceipt` and `customerReceipt` are hosted URLs |
| MOTO on-terminal sale | Receipts are raw HTML strings (not URLs) |
| MOTO remote sale (`POST /moto/sale`) | No `merchantReceipt` / `customerReceipt` in response — build from result fields |
| Transaction recovered via `/status` | No receipt fields — ISV-built receipt required |
| Email delivery | Cardholder receives receipt link within 30 seconds |
| Printed receipt (PAX with printer) | All required EMV fields printed; no truncation |

---

## Related pages

- [Validate your Integration](/reference/validate-integration) — pre-certification receipt compliance checklist
- [MOTO — Card Not Present](/reference/moto-guide) — receipt format differences for MOTO paths
- [Transaction Recovery — Cloud API](/reference/transaction-recovery-cloud-api) — recovery flow when no receipt URL is available
- [Transaction Result Object](/reference/transaction-result-object) — full field schema
