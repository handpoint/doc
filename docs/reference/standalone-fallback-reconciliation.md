---
id: standalone-fallback-reconciliation
title: Standalone Fallback & Reconciliation
description: Keep taking payments in Standalone mode when your POS or connection fails, reconcile every payment with the Transaction Feed API, and link standalone payments back to your orders.
---

# Standalone Fallback & Reconciliation

Sometimes your POS can't reach the terminal: your system is down, the network fails, or Handpoint Cloud is
unreachable. When that happens, the merchant can keep taking payments by switching the **Handpoint Payments App** on
the PAX terminal to **Standalone mode**. Those payments are approved and settled normally, but **your POS never hears
about them**.

This page covers three things:

1. **Reconcile.** Use the [Transaction Feed API](/back-office/transaction-feed-api) to check every payment against
   your own records. Every cloud integration should do this, outage or not.
2. **Fall back.** Switch the terminal to Standalone mode while your POS is unavailable.
3. **Link.** Attach payments taken in Standalone mode to the right orders in your POS.

:::info Applies to
Integrations where your POS sends sales through **Handpoint Cloud** to a PAX terminal running the Handpoint Payments
App in **Integrated mode**. This includes the [Cloud API](/reference/cloud-api-integration-guide) and SDKs that drive
the terminal through Handpoint Cloud. If your own app runs on the terminal and uses the Android SDK, see
[Option D](#option-d--android-sdk-apps-on-the-terminal).
:::

---

## How the two modes differ

| | Integrated mode | Standalone mode |
|---|---|---|
| Who starts the sale | Your POS, through Handpoint Cloud | Staff, keying the amount on the terminal |
| Result delivered to your POS | Yes (callback URL or polling) | **No** |
| `transactionReference` | The UUID **your POS generated** | Generated on the terminal. Your POS has never seen it |
| Recorded in the Transaction Feed | Yes | Yes |
| Switching | Manual toggle on the terminal. There is **no automatic failover** | |

The Transaction Feed is the one place that holds **both** kinds of payment. That makes it the source of truth for
reconciliation.

---

## 1. Reconcile with the Transaction Feed API

### The idea

Your POS generates a `transactionReference` (UUID v4) **before** it sends each sale. See
[Transaction Reference](/reference/transaction-reference). Store it at that point, before you send the request. Then:

> Any **original** payment in the feed, on your merchant's terminals, whose `transactionReference` your POS did not
> generate was not started by your POS. It's a Standalone-mode payment (or another payment taken outside your
> system).

Follow-up operations work differently. A reversal, linked refund, capture or tip adjustment is requested with the
**original transaction ID**, not a `transactionReference` of yours. In the feed, these carry
`referenceObject.guid` = the `guid` of the original. Match them through that field, not through `transactionReference`.

The feed has **no field that says whether a payment was Integrated or Standalone**. You find standalone payments by
comparing the feed with your own list of references. Don't rely on matching amount and time for this step.

### When to run it

- **After any outage**, once your POS is back. This catches payments taken in Standalone mode.
- **Once a day**, before your merchants' batch close. It also catches results your POS missed for other reasons (see
  [Transaction Recovery](/reference/transaction-recovery)).

### Keys and terminals

- Reconcile **per merchant**. The `AnalyticsApiKey` is the merchant's Cloud API key, and it covers all of that
  merchant's terminals. Keep a `merchant → API key` mapping on your side.
- You don't need to list terminals to query the feed: the key already limits results to the merchant. To see which
  terminals a merchant has, call `GET https://cloud.handpoint.com/devices` with the `ApiKeyCloud` header.
- Staging uses `txnfeed.handpoint.io` and `cloud.handpoint.io`.

### Query the feed

```http
POST https://txnfeed.handpoint.com/transactions
AnalyticsApiKey: MERCHANT_API_KEY
Content-Type: application/json

{
  "startDate": "20261029080000",
  "endDate": "20261029120000",
  "onlySuccessful": true,
  "orderBy": [{ "value": "serverDateTime", "order": "asc" }],
  "limit": 1000
}
```

Dates are UTC and both ends are inclusive. This returns sales, refunds and reversals. For details on fields and
filters, see the [Transaction Feed API](/back-office/transaction-feed-api).

The response holds the matching transactions in `results`. Use these fields:

| Field | Use |
|---|---|
| `guid` | Handpoint transaction ID. Unique. Store it on the order once linked |
| `transactionReference` | On original payments: compare with the references your POS generated |
| `referenceObject.guid` | On refunds and reversals: the `guid` of the original payment |
| `maskedCardNumber`, `cardTypeId` | Show these to staff when they match payments to orders |
| `customerReference` | The free-text reference your POS sent, if any |
| `terminalSerialNumber` | Which terminal took the payment |
| `amount`, `tipAmount` | Amount and tip in **major units** as decimal strings, e.g. `"5.00000"` |
| `currCode` | Currency, ISO 4217 alphabetic code, e.g. `EUR`, `USD` |
| `type` | Operation type, e.g. `Sale` |
| `serverDateTime` | When the gateway processed it, `yyyyMMddHHmmss` in **UTC** |

### Reconciliation loop (pseudocode)

```python
for merchant in pos.merchants():
    key = merchant.handpoint_api_key                       # your merchant → API key mapping
    known_refs = pos.references_generated(merchant, window) # refs your POS created for original payments
    known_guids = pos.linked_guids(merchant)                # guids already stored on orders
    feed = txnfeed.transactions(key, window, only_successful=True)   # oldest first

    for txn in feed:
        original = (txn.get("referenceObject") or {}).get("guid")
        if original:                                        # refund / reversal
            if original in known_guids:
                pos.record_follow_up(original, txn)         # follow-up on a known payment
            else:
                pos.add_orphan_payment(txn)                 # follow-up on a payment you don't know
        elif txn["transactionReference"] in known_refs:
            pos.confirm(txn["transactionReference"], guid=txn["guid"])  # also catches missed results
            known_guids.add(txn["guid"])
        else:
            pos.add_orphan_payment(txn)                     # Standalone payment: link it (section 3)
```

### Implementation notes

- **Dates** must be exactly 14 characters, `yyyyMMddHHmmss`, in UTC, and both ends are inclusive. Convert to the
  merchant's local time only when you show them to staff.
- **Amounts are in major units** (`"3.50000"`), unlike most Handpoint request APIs, which use minor units.
- **Filters are exact matches only.** `filters: [{ "field": "...", "value": "..." }]` must match the whole value,
  and multiple filters are combined with AND. There is no substring or wildcard search.
- **Keep the window small** (for example one hour) rather than paging deep into a large result. `limit` is at most
  10,000 per request.
- **Look up specific payments:** `GET /transactions/{guid}`, `GET /transactions/guids?listOfGuids=a,b`, and
  `GET /transactions/customer-reference/{customerReference}`.
- **Refunds and reversals** taken in Standalone mode also appear (`type` `Refund`, `Reversal`,
  `Card Not Present Refund`). Process the feed oldest first, so an original payment is linked before its follow-ups.
- The feed is **read-only reporting**. It can't start, reverse or change a transaction.

---

## 2. Fall back to Standalone mode

When your POS or its connection to Handpoint Cloud is down, staff can keep taking card payments on the terminal:

1. In the Handpoint Payments App, open **Settings** and turn **Integrated mode** off. The terminal now works on its
   own, and staff key in the amount for each sale.
2. **Write down the order number for each payment** (for example on the merchant receipt). The terminal can't record
   a per-sale order reference. That record is what staff use to link payments later (section 3).
3. When your POS is back, turn **Integrated mode** on again before sending new sales from the POS.
4. Run [reconciliation](#1-reconcile-with-the-transaction-feed-api) for the outage window.

:::note Hybrid mode must be enabled for the merchant
The **Integrated mode** toggle only appears when the merchant is configured to allow both modes. Ask your Handpoint
contact to enable it during onboarding if your merchants need a fallback.
:::

:::warning No automatic failover
The terminal does not switch modes by itself, and your POS can't switch it remotely. Train merchants on when to
switch, and on switching back.
:::

---

## 3. Link Standalone payments to your orders

Reconciliation gives you a list of **orphan payments**. These are payments the merchant was paid for, but that no
order in your POS knows about. There are four ways to link them.

### Option A — Match from the feed (recommended)

Available today and works with any cloud integration.

1. Show staff the orphan payments: terminal, time (converted to local time), amount, tip and masked card.
2. Suggest likely orders from **the same terminal, the same amount (plus tip), within a few minutes**.
3. **Staff confirm** each match against their notes or the receipt. Then store the payment's `guid` on the order and
   mark it paid.

:::warning Never auto-close orders on amount alone
Two orders with the same amount, a retried payment or a duplicate tap all look the same by amount and time. Suggest
matches, but have a person confirm them.
:::

### Option B — Order reference entered on the terminal

**Not available today.** In Standalone mode the Handpoint Payments App doesn't ask for a reference with each sale, so
a standalone payment carries no order number you could match on. Use Option A, with staff recording order numbers as
described in section 2.

### Option C — Automatic notification to your POS

**Not available today.** Handpoint does not push Standalone-mode payments to your POS when it reconnects. Use the
reconciliation loop in section 1. It catches the same payments.

### Option D — Android SDK apps on the terminal

If your app runs on the PAX terminal and takes payments with the
[Android SDK](/reference/android-pax-integration-guide), your app *is* the payment app, so there is no separate
Standalone mode. The fallback is yours to design:

- When your backend is unreachable, keep taking payments through the SDK. Before each sale, store the order together
  with its `transactionReference`. When the result arrives, also store `finStatus` and the transaction ID.
- When the backend is reachable again, sync the stored orders and payments.
- Run the [reconciliation loop](#1-reconcile-with-the-transaction-feed-api) as a backstop. It catches any payment whose
  result your app never received.

---

## Checklist

- [ ] POS generates and stores `transactionReference` **before** sending each sale
- [ ] Reconciliation runs after outages and daily, before batch close
- [ ] Orphan payments are shown to staff, and only staff confirm matches
- [ ] Merchants know how to switch to Standalone mode and back, and to record order numbers while in it
- [ ] Hybrid mode is enabled for merchants who need the fallback
