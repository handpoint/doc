---
# Integration compliance checklist — optional skill

Load this skill when building or reviewing a Handpoint Cloud REST API integration for certification readiness. Covers receipt compliance, logging, merchant key management, partial approval timing, recovery code patterns, and reconciliation.

Also load: `paths/cloud-api.md`, `acquirers/{acquirer}.md`

---

## Merchant API key management

- `ApiKeyCloud` is **per merchant** — never shared across merchant accounts
- ISV backend must store a mapping: `merchantId → ApiKeyCloud`
- API keys must not appear in frontend code, mobile bundles, or logs
- Staging key + `cloud.handpoint.io` and production key + `cloud.handpoint.com` are switched together

---

## Receipt compliance (EMV card scheme requirement)

Every card transaction requires a receipt available to the cardholder on demand. Delivery is ISV's choice: email, SMS, print, in-app screen.

### Required receipt fields

| Field | Source | Condition |
|---|---|---|
| Date / time | `terminalDateTime` (local) | Always |
| Transaction type | `type` | Always |
| Outcome | `finStatus` + `statusMessage` | Always |
| Amount | `totalAmount` + `currency` | Always — use `totalAmount`, not `requestedAmount` |
| Card scheme | `cardSchemeName` or `cardTypeName` | Always |
| Masked PAN | `maskedCardNumber` | Always |
| Authorisation code | `authorisationCode` | Always |
| Issuer response | `issuerResponseCode` + `issuerResponseText` | Always |
| Transaction ID | `transactionID` | Always |
| Retrieval reference | `retrievalReferenceNumber` | Always |
| AID | `applicationIdentifier` | Conditional — EMV chip only, omit if absent |
| TVR | `tvr` | Conditional — EMV chip only |
| IAD | `iad` | Conditional — omit if absent |
| ARC | `arc` | Conditional — omit if absent |
| Merchant name | Merchant record | Always |
| Merchant address | Merchant record | Always |
| MID | `acquirerMid` or merchant record | Always |
| TID | `acquirerTid` | Always |
| `transactionReference` | `transactionReference` | Suggested for troubleshooting |
| Serial number | Your config | Suggested for troubleshooting |

### Receipt field handling in result

`merchantReceipt` / `customerReceipt` are either a hosted URL (`https://receipts.handpoint.com/...`) or raw HTML string. Check `startsWith("http")` to decide whether to fetch or render directly.

### Known gap — recovered transactions

Transactions recovered via `GET /transactions/{transactionReference}/status` do NOT include receipt URLs. ISV must build the receipt from the status response fields using the table above.

---

## Logging requirements (required for certification)

- Log every API request: URL, method, body (redact PANs), timestamp
- Log every API response: status code, body, latency
- Log every `transactionReference` generated — before the API call — with merchant ID and timestamp
- Minimum 14-day retention
- Do not log `ApiKeyCloud` values in plain text — log the header name only
- Each log entry must be linkable to `transactionReference` and `transactionResultId`

---

## Page refresh / app crash recovery — required pattern

### Pre-send persistence

```javascript
// ALWAYS do this before the network call
const txnRef = crypto.randomUUID();
localStorage.setItem('hp_pending_txn', JSON.stringify({
  transactionReference: txnRef,
  transactionResultId: null,  // update after 202
  startedAt: Date.now()
}));
```

After receiving the 202, update `transactionResultId` in storage.

### On app startup — check for pending state

```javascript
async function recoverOnStartup(apiKey) {
  const raw = localStorage.getItem('hp_pending_txn');
  if (!raw) return;
  const pending = JSON.parse(raw);

  // Try to resume normal polling first
  if (pending.transactionResultId) {
    const result = await pollTransactionResult(pending.transactionResultId, apiKey);
    if (result) { handleResult(result); localStorage.removeItem('hp_pending_txn'); return; }
  }

  // Fall back to /status
  const resp = await fetch(
    `https://transactions.handpoint.com/transactions/${pending.transactionReference}/status`,
    { headers: { 'ApiKeyCloud': apiKey } }
  );
  const status = await resp.json();

  switch (status.finStatus) {
    case 'AUTHORISED':
      // Check for partial approval timing trap before saving (see below)
      handleResult(status);
      break;
    case 'IN_PROGRESS':
      scheduleRetry(pending); return; // Don't clear yet
    case 'UNDEFINED':
    case undefined:
      // Unknown — reverse to be safe
      await fetch('https://cloud.handpoint.com/reversal', {
        method: 'POST', headers: { 'ApiKeyCloud': apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalGuid: status.transactionID })
      });
      break;
    default:
      handleResult(status); // DECLINED, CANCELLED, FAILED
  }
  localStorage.removeItem('hp_pending_txn');
}
```

### Poll loop — correct 204 handling

```javascript
async function pollTransactionResult(resultId, apiKey, maxAttempts = 30, intervalMs = 4000) {
  for (let i = 0; i < maxAttempts; i++) {
    await sleep(intervalMs);
    const resp = await fetch(`https://cloud.handpoint.com/transaction-result/${resultId}`,
      { headers: { 'ApiKeyCloud': apiKey } });
    if (resp.status === 204) continue;  // Still processing — do NOT call .json()
    if (resp.status === 200) return resp.json();
    throw new Error(`Poll error ${resp.status}`);
  }
  return null;  // Timeout — escalate to /status recovery
}
```

---

## Partial approval — `/status` timing trap

When using `GET /status` for recovery and the result shows `finStatus: AUTHORISED` with `totalAmount < requestedAmount`, the cardholder may still be deciding on-terminal whether to accept or cancel the partial charge.

**Required behaviour:**
1. Do NOT immediately save `AUTHORISED` as final when it comes from `/status` and amounts differ
2. Wait 60 seconds for the normal `transaction-result` polling to deliver the true final result
3. If no `transaction-result` arrives in 60s, re-query `/status` — the cardholder's decision will be reflected
4. If `/status` now returns `CANCELLED`: the SDK auto-reversed; do not fulfil the order

Timeline: cardholder has ~30s to accept/decline; SDK timeout adds another ~20–30s. Total window = 60s.

**Safe rule:** When recovering via `/status`, always re-query after 60s before saving a partial AUTHORISED as final.

---

## Reconciliation — verify stored results

Use the `/status` endpoint to verify ISV-stored `finStatus` values match Handpoint's authoritative records.

### Single check (curl)

```bash
curl -s "https://transactions.handpoint.com/transactions/{transactionReference}/status" \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY" | jq '{finStatus, transactionID, totalAmount}'
```

### Batch check (JavaScript)

```javascript
async function reconcile(storedTransactions, apiKey) {
  const mismatches = [];
  for (const txn of storedTransactions) {
    const resp = await fetch(
      `https://transactions.handpoint.com/transactions/${txn.transactionReference}/status`,
      { headers: { 'ApiKeyCloud': apiKey } }
    );
    const live = await resp.json();
    if (live.finStatus !== txn.finStatus) {
      mismatches.push({ transactionReference: txn.transactionReference,
        stored: txn.finStatus, live: live.finStatus });
    }
  }
  return mismatches;
}
```

| Mismatch | Likely cause | Action |
|---|---|---|
| Stored `DECLINED`, live `AUTHORISED` | Recovery flow missed the result | Correct record; verify fulfilment |
| Stored `AUTHORISED`, live `CANCELLED` | Partial approval cardholder-cancelled | Correct record; verify no charge |
| Stored `AUTHORISED`, live `UNDEFINED` | Wrong reference or gateway issue | Re-query after 24h; escalate if persistent |

---

## Trigger amounts — ViscusDummy staging / DEMO merchant

Outcome is determined by the request `amount` (minor units — cents/pence). Any physical card works; card numbers are not validated.

| Amount | `finStatus` | Scenario |
|---|---|---|
| Any non-listed amount | `AUTHORISED` | Approved |
| `3784` | `DECLINED` | Issuer decline — not authorized |
| `3779` | `DECLINED` | Refer to card issuer |
| `3793` | `DECLINED` | Pick up card |
| `3757` | `PARTIAL_APPROVAL` | Partial approval — `totalAmount` < `requestedAmount` |
| `3768` | `FAILED` | Request timeout |
| `3741` | `FAILED` | Processing error |

For SCA triggers and Interac test card numbers, see `development-hardware.md`.

**Required validation scenarios:**
- Approved (any non-trigger amount) — verify `AUTHORISED`, `transactionID` non-empty, receipt present
- Decline (`3784`) — verify `DECLINED`, `transactionID` is empty string, no charge
- Partial approval (`3757`) — verify `PARTIAL_APPROVAL`, 60s timing guard applied if using `/status`, `totalAmount` used for reversal not `requestedAmount`
- FAILED (`3768`) — verify `FAILED`, logged, not auto-retried
- Connection drop mid-transaction — verify recovery flow resolves correctly
- Page refresh / app crash mid-poll — verify `recoverOnStartup()` finds state and resolves

---

## Pre-certification checklist

- [ ] `transactionReference` persisted to durable storage before every API call
- [ ] Recovery on startup implemented — page refresh / app crash handled
- [ ] Receipt built for recovered transactions (no URL in `/status` response)
- [ ] All EMV receipt fields included (AID/TVR/IAD/ARC when non-empty)
- [ ] Partial approval handled — including 60s `/status` timing guard
- [ ] Per-merchant API key stored securely in backend — not hardcoded
- [ ] Request/response logs with 14-day retention
- [ ] Reconciliation run before go-live — zero mismatches required

---

## See also

- Full checklist: https://developer.handpoint.com/reference/validate-integration
- Partial approval guide: https://developer.handpoint.com/reference/partial-approval
- Cloud API integration: `paths/cloud-api.md`
