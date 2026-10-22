---
title: Validation — Cloud API / REST API
sidebar_position: 12
description: Full certification checklist for Cloud API (REST) integrations. Covers authentication, mandatory timeout and recovery behaviours, stopCurrentTransaction, callback URL setup, and per-operation scenarios.
---

# Validation — Cloud API / REST API

This page covers the requirements specific to Cloud API (REST) integrations before Handpoint issues production credentials. General scenarios shared across all integration paths (partial approvals, per-operation test cases, receipt fields, logging, and reconciliation) are documented in [Validate your integration](/reference/validate-integration) — complete those alongside the items here.

:::info Certification process
Run all required scenarios against a staging/DEMO merchant. Document the outcomes (HTTP status, response bodies, `finStatus` values). Contact your integration engineer to schedule a certification call and share request/response log samples.
:::

---

## 1. Authentication and environments

Every Cloud API request requires the `ApiKeyCloud` header. Staging and production use different base URLs and different API keys — always switch them together.

| | Staging | Production |
|---|---|---|
| Base URL | `https://cloud.handpoint.io` | `https://cloud.handpoint.com` |
| Status URL | `https://transactions.handpoint.io` | `https://transactions.handpoint.com` |
| API key | Issued separately per merchant | Issued at certification sign-off |

**Required:**

- Each merchant has a unique `ApiKeyCloud`. Store it server-side, keyed to your merchant record. Never embed it in frontend code, mobile bundles, or client-side config.
- Your environment configuration must switch **both** the base URL and the API key together. A staging key against the production URL (or vice versa) returns a `403 No valid key found` error.
- API keys must not appear in plain-text logs — log the header name only.

**Test:** Attempt a sale with a valid staging key against the production URL. Verify your code catches the 403 and surfaces a meaningful error rather than a generic failure.

---

## 2. Mandatory behaviours

Every item in this section is required before certification. None of them are optional.

### 2.1 POS-side timeout — 6 minutes minimum

Your application must implement a per-operation timeout. The terminal can legitimately take several minutes to process a transaction (network retries, cardholder hesitation, contactless fallback to chip).

**Required:** Wait at least **6 minutes** from the time the `POST /transactions` 202 response is received before treating the transaction as timed out. A 2-minute timeout is too aggressive and will generate false failures on real terminals.

**On timeout:**

1. Do **not** silently cancel the POS-side UI. The terminal may still complete the transaction.
2. Call `GET /transactions/{transactionReference}/status` to determine the outcome.
3. Wait at least **31 seconds** after receiving the `/status` response before timing out definitively. A status of `IN_PROGRESS` means the terminal is still processing — re-query after the wait.
4. If the final `finStatus` is `UNDEFINED` after all retries: send a reversal to avoid a double-charge risk.

```javascript
const POLL_INTERVAL_MS = 4000;
const POLL_TIMEOUT_MS = 6 * 60 * 1000;  // 6 minutes minimum

async function awaitTransactionResult(transactionResultId) {
  const deadline = Date.now() + POLL_TIMEOUT_MS;

  while (Date.now() < deadline) {
    await sleep(POLL_INTERVAL_MS);
    const resp = await fetch(`${BASE_URL}/transaction-result/${transactionResultId}`,
      { headers: { ApiKeyCloud: API_KEY } });

    if (resp.status === 204) continue;   // Still processing — do not call .json()
    if (resp.status === 200) return await resp.json();
    throw new Error(`Unexpected status ${resp.status}`);
  }

  return null;  // Timed out — proceed to recovery via /status
}
```

**Test:** Trigger a timeout with amount `3768` (minor units). Confirm your timeout fires no earlier than 6 minutes from the 202 response.

---

### 2.2 Cancel button — `stopCurrentTransaction`

If your UI includes a Cancel button for in-progress card-present transactions, use `POST /transactions/{transactionReference}/stop` (the `stopCurrentTransaction` endpoint).

**Required behaviour:**

1. Send `POST /transactions/{transactionReference}/stop`.
2. **Wait for the result** via your normal polling path (`/transaction-result/{transactionResultId}`) before clearing the POS UI. The stop signal is advisory — the terminal may already be past the point where it can be cancelled (e.g. card has been read, processing has started). The terminal will deliver a final result regardless.
3. The result arrives via the same `transaction-result` polling path as any other transaction. It reports whether the stop was honoured (`CANCELLED`) or the transaction completed normally (`AUTHORISED`, `DECLINED`).
4. Act on the delivered result — do not assume cancellation succeeded because you sent the stop request.

:::caution
Cancellation is only possible before the card is read. Once the card has been inserted or tapped and processing has started, the stop signal is silently ignored by the terminal and the transaction completes normally.
:::

```javascript
// Cancel button handler
async function cancelTransaction(transactionReference, transactionResultId) {
  await fetch(`${BASE_URL}/transactions/${transactionReference}/stop`, {
    method: 'POST',
    headers: { ApiKeyCloud: API_KEY }
  });

  // Always wait for the actual result — do not assume CANCELLED
  const result = await awaitTransactionResult(transactionResultId);
  handleFinalResult(result);
}
```

**Test:**
1. Start a sale. Before tapping/inserting a card, press Cancel. Verify the terminal shows "Cancelled" and your result is `CANCELLED`.
2. Start a sale, insert a card, then press Cancel mid-processing. Verify the transaction completes normally (not `CANCELLED`) and your UI handles this correctly.

---

### 2.3 Transaction recovery

Persist the `transactionReference` to durable storage (database or equivalent) **before** sending the `POST /transactions` request. If your application crashes or the connection drops after the request is sent but before a result arrives, this reference is the only way to recover.

**Two recovery scenarios your integration must handle:**

#### Scenario A — Page refresh / app restart with a known `transactionResultId`

If you persisted the `transactionResultId` (from the 202 response body) before the crash:

1. On startup, detect the persisted pending state.
2. Resume polling `GET /transaction-result/{transactionResultId}`.
3. On `200`: store the result and clear the pending state.
4. On continued 204 beyond your timeout: fall through to Scenario B.

#### Scenario B — Unknown outcome (no `transactionResultId`, or poll timed out)

1. Call `GET /transactions/{transactionReference}/status`.
2. Wait **31 seconds** after receiving the response before acting if `finStatus` is `IN_PROGRESS` — the terminal may still be processing.
3. `AUTHORISED`: store and display the result. Build a receipt from the `/status` response fields (no receipt URL is included — see §2.4).
4. `UNDEFINED`: send a reversal using `originalGuid = status.transactionID` (or the `transactionReference` if no `transactionID` is present) to avoid a double-charge risk.
5. `DECLINED`, `CANCELLED`, `FAILED`: no charge — clear the pending state.

```javascript
async function recoverTransaction(pending) {
  // Scenario A: resume polling if we have a resultId
  if (pending.transactionResultId) {
    const result = await awaitTransactionResult(pending.transactionResultId);
    if (result) { handleFinalResult(result); return; }
  }

  // Scenario B: query /status
  const resp = await fetch(
    `${STATUS_URL}/transactions/${pending.transactionReference}/status`,
    { headers: { ApiKeyCloud: API_KEY } }
  );
  const status = await resp.json();

  if (status.finStatus === 'IN_PROGRESS') {
    // Wait 31 seconds, then re-query
    await sleep(31000);
    return recoverTransaction({ ...pending, transactionResultId: null });
  }

  if (status.finStatus === 'AUTHORISED') {
    handleFinalResult(status);  // Build DIY receipt — no receipt URL in /status
  } else if (status.finStatus === 'UNDEFINED' || !status.finStatus) {
    await sendReversal(status.transactionID || pending.transactionReference);
  }
  // DECLINED / CANCELLED / FAILED — no action needed
}
```

**Test:**
1. Send a sale. Kill the browser tab immediately after the 202 response. Reopen — verify `recoverOnStartup` detects the pending state and resolves correctly.
2. Send a sale with trigger `3768` (timeout). Verify the UNDEFINED path triggers a reversal.

---

### 2.4 DIY receipt for recovered transactions

When a transaction is recovered via `GET /transactions/{transactionReference}/status`, the response does **not** include `merchantReceipt` or `customerReceipt` URLs. You must construct the receipt from the fields in the `/status` response.

Use the same field set as for a normal receipt (see [Validate your integration — Receipt compliance](/reference/validate-integration#receipt-compliance--emv-card-scheme-requirements)), and mark the receipt clearly as a recovered transaction — for example, "Transaction recovered — original receipt unavailable."

**Required receipt fields to extract from `/status`:**

| Field in `/status` response | Display label |
|---|---|
| `terminalDateTime` or `serverDateTime` | Date / Time |
| `type` | Transaction type |
| `finStatus` | Outcome |
| `totalAmount` | Amount charged |
| `currency` | Currency |
| `cardSchemeName` | Card network |
| `maskedCardNumber` | Masked PAN |
| `authorisationCode` | Authorisation code |
| `issuerResponseCode` + `issuerResponseText` | Issuer response |
| `transactionID` | Transaction ID |
| `retrievalReferenceNumber` | Retrieval reference |
| `applicationIdentifier` | AID (chip only, if present) |
| `tvr` / `iad` / `arc` | EMV fields (chip only, if present) |

**Test:** Simulate a recovery (Scenario B in §2.3). Verify a receipt is generated from the `/status` fields and includes all required EMV fields.

---

### 2.5 Refund field requirements

For linked refunds, the `originalTransactionId` in the refund request must be the `eftTransactionId` (also returned as `transactionID`) of the original sale — **not** the `transactionReference`.

| Field | Correct value | Common mistake |
|---|---|---|
| `originalTransactionId` in refund body | `eftTransactionId` / `transactionID` from original sale result | Using `transactionReference` (UUID you generated) |

The `transactionReference` is your own idempotency key — it is not the acquirer/gateway transaction ID. Using it in a refund request returns a `3153 Unable to find message` error.

```javascript
// Correct — use eftTransactionId from the original sale result
await fetch(`${BASE_URL}/refund`, {
  method: 'POST',
  headers: { ApiKeyCloud: API_KEY, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    amount: refundAmount,
    currency: 'USD',
    originalTransactionId: originalSale.transactionID  // ✓ eftTransactionId
  })
});

// ❌ Wrong — do not use transactionReference for refunds
// originalTransactionId: originalSale.transactionReference
```

**Test:** Perform a sale. Note the `transactionID` in the result. Issue a linked refund using that `transactionID`. Verify `AUTHORISED`.

---

### 2.6 Callback URL vs polling

The Cloud API delivers transaction results in two ways — implement at least one, preferably both:

**Option A — Callback URL (recommended for server-to-server integrations):**

Include `callbackURL` in your `POST /transactions` body. Handpoint POSTs the `TransactionResult` JSON to your endpoint when the transaction completes. Your endpoint must return `HTTP 200` within 5 seconds.

```javascript
body: JSON.stringify({
  operation: 'sale',
  amount: '1000',
  currency: 'USD',
  terminal_type: 'PAXA920',
  serial_number: '082104578',
  transactionReference: txnRef,
  callbackURL: 'https://your-server.com/handpoint/callback'
})
```

**Option B — Polling `transaction-result/{id}`:**

Poll the `transactionResultId` returned in the 202 body. Handle `204` (still processing) by waiting and retrying; handle `200` as the final result. See §2.1 for the polling loop.

**Required regardless of which option you use:**
- The pending `transactionReference` is persisted before the POST request is sent.
- Your application can recover from a restart mid-transaction using the reference.

**Test (callback URL):** Verify your endpoint receives the POST and returns 200 within 5 seconds for a standard approved sale. Test with a declined transaction (`3784`) and a timed-out transaction (`3768`).

---

## 3. Per-operation API reference

| Operation | Endpoint | Key request fields | Notes |
|---|---|---|---|
| Sale | `POST /transactions` | `operation: "sale"`, `amount`, `currency`, `terminal_type`, `serial_number`, `transactionReference` | `transactionReference` must be UUID v4; generate before the call |
| Refund (unlinked) | `POST /refund` | `amount`, `currency` | No `originalTransactionId` |
| Refund (linked) | `POST /refund` | `amount`, `currency`, `originalTransactionId` | Must be `eftTransactionId` from original — see §2.5 |
| Sale reversal (no-reader) | `POST /reversal` | `originalGuid` | Batch must still be open; use the gateway transaction GUID |
| Tip adjustment | `POST /tip-adjustment` | `transactionId`, `amount` | `transactionId` = `eftTransactionId`; batch must be open |
| Pre-auth create | `POST /transactions` | `operation: "preAuthorization"`, `amount`, `currency`, `terminal_type`, `serial_number`, `transactionReference` | |
| Pre-auth increase | `POST /pre-auth-increase` | `originalGuid`, `increaseAmount` | `originalGuid` = `eftTransactionId` from pre-auth |
| Pre-auth capture | `POST /pre-auth-capture` | `originalGuid`, `capturedAmount` | |
| Pre-auth reversal | `POST /pre-auth-reversal` | `originalGuid` | Voids without capturing |
| Stop (cancel) | `POST /transactions/{transactionReference}/stop` | — | Always await result — see §2.2 |
| Transaction status | `GET /transactions/{transactionReference}/status` | — | Recovery path — see §2.3 |
| Transaction result | `GET /transaction-result/{transactionResultId}` | — | `204` = still processing; `200` = done |
| Tokenize | `POST /transactions` | `operation: "tokenizeCard"`, `terminal_type`, `serial_number`, `transactionReference` | No charge; token in result |
| Sale + tokenize | `POST /transactions` | `operation: "saleAndTokenizeCard"`, `amount`, `currency`, `terminal_type`, `serial_number`, `transactionReference` | |

---

## 4. Error codes to verify

| Code | Trigger | Correct response |
|---|---|---|
| `403 No valid key found` | Wrong or mismatched API key / URL | Verify `ApiKeyCloud` and base URL are both staging or both production |
| `422 VALIDATION_FAILED` | Missing required field or wrong field name | Check field names exactly as documented — e.g. `increaseAmount` not `amount` on pre-auth increase |
| `1001 Device is busy` | Sending a second operation before the first completes | Queue the second; do not retry immediately |
| `3051 Already reversed` | Double reversal or capture-after-void | Suppress; log; no retry |
| `3153 Unable to find message` | Wrong `originalGuid` / `originalTransactionId`, or batch closed | Verify GUID is `eftTransactionId`; fall back to Refund if batch closed |
| `3211 Already settled` | Capture after capture or tip after batch close | Check txn state; issue Refund if needed |
| `4066 Amount exceeds original` | Reversal or capture amount too high | Validate amount ISV-side before sending |
| `5001 NullPointerException` | Unknown `originalGuid` on pre-auth endpoints | Verify GUID from pre-auth create result |

See [Error codes reference](/reference/error-codes) for the full list and [Error Handling Guide — Merchant capability errors](/reference/error-handling-guide#merchant-capability-errors) for per-acquirer capability errors.

---

## 5. Pre-production checklist

Complete all items before requesting production credentials.

**Authentication and environments:**
- [ ] Per-merchant `ApiKeyCloud` stored server-side — not in frontend code, mobile bundles, or plain-text config
- [ ] Staging and production base URLs and API keys switched together in your environment config
- [ ] API key not logged in plain text

**Timeout and cancellation:**
- [ ] POS-side timeout is at least 6 minutes from the 202 response — never less
- [ ] On timeout, recovery flow runs via `GET /status` before clearing the UI
- [ ] Cancel button calls `POST /stop` and **awaits the result** before updating POS UI — does not assume cancellation succeeded
- [ ] 31-second wait implemented after an `IN_PROGRESS` `/status` response before re-querying

**Transaction recovery:**
- [ ] `transactionReference` (UUID v4) persisted to durable storage **before** the `POST /transactions` call
- [ ] On startup: check for pending references and resolve before enabling the payment UI
- [ ] Scenario A (have `transactionResultId`): resume polling correctly after restart
- [ ] Scenario B (no `transactionResultId` or poll timed out): `/status` query, 31s wait, UNDEFINED → reversal
- [ ] Recovery flow tested end-to-end: kill browser tab mid-transaction, reopen, verify correct resolution

**Receipts:**
- [ ] `transactionID` (`eftTransactionId`) stored for every `AUTHORISED` result — used for linked refunds and support
- [ ] DIY receipt generated for recovered transactions (no receipt URL in `/status` responses)
- [ ] Receipt includes all required EMV fields: `applicationIdentifier` (AID), `tvr`, `iad`, `arc` (when non-empty), `authorisationCode`, `retrievalReferenceNumber`, merchant name / address / MID / TID
- [ ] `totalAmount` (not `requestedAmount`) used as the displayed and settled amount
- [ ] `issuerResponseText` included alongside `issuerResponseCode`

**Refunds and reversals:**
- [ ] Linked refund uses `eftTransactionId` as `originalTransactionId` — not `transactionReference`
- [ ] No-reader reversal uses `eftTransactionId` as `originalGuid`
- [ ] Refund amount validated ISV-side before sending (max = original `totalAmount`)

**Logging:**
- [ ] All API requests and responses logged with timestamps and `transactionReference`
- [ ] Log retention confirmed at 14+ days
- [ ] `transactionReference` logged before the POST request is sent

**Certification:**
- [ ] All per-operation scenarios pass on staging DEMO merchant (see [Validate your integration — Per-operation scenarios](/reference/validate-integration#per-operation-validation-scenarios))
- [ ] Partial approval (`3757`) tested — accept or reverse path implemented
- [ ] Request/response log samples available for review by Handpoint
- [ ] Certification call scheduled with Handpoint Integration Support
