---
# Cloud API (REST) — path skill

Use this path when your server commands a PAX terminal via HTTP. Any language or platform. The terminal must be connected to Wi-Fi and running the Handpoint Payments App.

Also load your acquirer skill: `acquirers/{acquirer}.md`

## Authentication

```http
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json
```

**Base URLs:**
- `https://cloud.handpoint.com` — production and DEMO merchant testing (recommended)
- `https://cloud.handpoint.io` — staging (debug terminals only, watermark on screen)

Header name: `ApiKeyCloud`. Not `Authorization`. Not `Api-Key`.  
One API key per merchant account — scoped to the merchant's acquirer. DEMO and live credentials are separate.

Wrong or missing key → HTTP 403:
```json
{ "error": { "statusCode": 403, "name": "ForbiddenError", "message": "No valid key found in header" } }
```

Verify assigned terminals before first transaction:
```http
GET https://cloud.handpoint.com/devices
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```
Returns array of objects. Each entry includes at minimum `"serial_number"`, `"terminal_type"`, `"merchant_id_alpha"`. Merchants with MOTO enabled also receive `"ssk"` (the merchant's shared-secret key — only used for Android/iOS SDK authentication, not required for Cloud API or back-office calls) and a `"VT"` (Virtual Terminal) entry. The `VT` is a gateway-side construct for MOTO processing — you never send transactions directly to a VT serial number; it is used internally for reconciliation and the transaction feed. A physical terminal absent from this list returns error 1004 on any transaction attempt.

## Sale

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "sale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
```

| Field | Type | Required | Notes |
|---|---|---|---|
| `operation` | string | Yes | `"sale"` — lowercase, not `"SALE"`, not `"action"` |
| `amount` | string | Yes | Minor currency units as string — `"1000"` = $10.00 |
| `currency` | string | Yes | ISO 4217: `"USD"`, `"EUR"`, `"GBP"`, `"CAD"`, `"ISK"` |
| `terminal_type` | string | Yes | PAX model string — e.g. `"PAXA920"` |
| `serial_number` | string | Yes | Terminal serial number |
| `transactionReference` | string | Recommended | UUID v4 you generate. Persist before sending. Required for recovery. Never include on subsequent operations (reversal, refund). |
| `customerReference` | string | No | Free-text order reference stored with the result |
| `tipAmount` | integer | EmerchantPay / Paystrax only | Tip in minor units at sale time — include in sale body, not via tip-adjustment |

**202 response (accepted):**
```json
{ "statusMessage": "Operation Accepted", "transactionResultId": "abc-123", "transactionReference": "your-uuid" }
```
`transactionReference` is echoed in the 202 body for operations where you sent one (sale, pre-auth). It is absent for MOTO on-terminal (`moToSale`) and subsequent operations (reversal, refund). Use `transactionResultId` to poll — not `transactionReference`.

**Immediate error responses:**

| HTTP | Body | Fix |
|---|---|---|
| 400 | `{"error":1001,"message":"Device is busy"}` | Wait 2–5s, retry |
| 400 | `{"error":1002,"message":"No device listening at the other end of the secure channel"}` | Terminal is not connected — powered off, not on Wi-Fi, or Payments App not running. Check terminal and retry. |
| 400 | `{"error":1004,"message":"Auth not available: ..."}` | `serial_number` or `terminal_type` not assigned to this merchant/API key. Call `GET /devices` to see valid serials for this API key. |
| 400 | `TransactionReference with wrong uuidv4 format` | Use a valid UUID v4 |
| 403 | `No valid key found in header` | Check `ApiKeyCloud` value |
| 422 | `{"error":{"statusCode":422,"name":"UnprocessableEntityError","message":"...","code":"VALIDATION_FAILED","details":[{"path":"/amount","code":"type","message":"must be string"}]}}` | Request body failed schema validation — check the `details` array for the specific field and rule |

**Amount validation:** The API validates `0 < amount < 999999999999` (minor units). Acquirer or merchant-level limits may be stricter — a 400 from the acquirer will appear in the polled result if the submitted amount exceeds the merchant's configured ceiling.

## Polling for result

```http
GET https://cloud.handpoint.com/transaction-result/{transactionResultId}
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

**Two possible HTTP responses:**
- **HTTP 204 No Content** — still processing. Body is empty. Do NOT call `.json()`. Keep polling.
- **HTTP 200 OK** — result is ready. Parse JSON and check `finStatus`.

Check `finStatus` on HTTP 200:

| `finStatus` | Meaning | Action |
|---|---|---|
| `AUTHORISED` | Approved | Store result, fulfil order |
| `DECLINED` | Issuer declined | Do not retry same card |
| `CANCELLED` | Cardholder cancelled | Allow retry |
| `FAILED` | Terminal/network error | Log `statusMessage` |
| `UNDEFINED` | No result received | See UNDEFINED handling — do not retry |

Polling cadence: wait 3s after 202, then poll every 4s, up to 30 polls (120s total). Timeout → treat as UNDEFINED (see recovery flow below).

```python
# Correct polling loop — handles 204 and 200
import time, requests
HEADERS = {"ApiKeyCloud": API_KEY}
fin_status = None
for _ in range(30):
    time.sleep(4)
    r = requests.get(f"{BASE}/transaction-result/{txn_result_id}", headers=HEADERS)
    if r.status_code == 204:
        continue  # still processing — body is EMPTY, do NOT call .json()
    result = r.json()
    fin_status = result.get("finStatus")
    if fin_status:
        break  # done
# if fin_status is still None → treat as UNDEFINED, trigger recovery
```

## Transaction result — key fields

```json
{
  "finStatus": "AUTHORISED",
  "transactionID": "guid-for-reversal-and-refund",
  "requestedAmount": 1000,
  "totalAmount": 1000,
  "dueAmount": 0,
  "currency": "USD",
  "cardSchemeName": "VISA",
  "maskedCardNumber": "************1234",
  "transactionReference": "your-uuid",
  "statusMessage": "AUTH CODE 123456",
  "cardToken": "token-if-tokenization-enabled",
  "merchantReceipt": "https://receipts.handpoint.io/receipts/{id}/merchant.html",
  "customerReceipt": "https://receipts.handpoint.io/receipts/{id}/customer.html"
}
```

**Amount fields — no bare `amount`:**
- `requestedAmount` — what was sent in the request (minor units)
- `totalAmount` — final amount charged, may include tip
- `tipAmount` — tip if added
- `dueAmount` — remaining if partial approval (US only)
- `holdAmount`, `increaseAmount`, `capturedAmount` — pre-auth flow fields

**Receipts — handle both formats:** `merchantReceipt` and `customerReceipt` are normally hosted HTML URLs (fetch to display/print). If the terminal cannot upload to Handpoint's receipt servers, the raw HTML string is delivered directly instead. Your code must handle both: check whether the value starts with `http` and fetch it, or render the HTML directly if not a URL. Same applies to `signatureUrl` — normally a URL; falls back to base64-encoded image binary if upload fails.

**`transactionReference` echoing:** The result echoes your `transactionReference` back for original operations where you sent one (sale, MOTO sale, pre-auth, MOTO pre-auth). It is NOT echoed on subsequent operations (reversal, refund, capture). Always send a unique `transactionReference` per original transaction and persist it **before** sending — it is your recovery key. For MOTO on-terminal (`moToSale`), the echoed value in the result may not always match the sent value in all configurations; rely on `transactionID` for linking results to operations rather than on the echoed reference.

**`transactionID` and `efttransactionID`** — always the same value (retro-compatibility). Use `transactionID` for reversals and refunds.

**`statusMessage`** — in the cardholder's preferred language (set by the card issuer). May be Spanish, French, etc. Display-only; never parse it programmatically. Use `finStatus` for logic.

**`_statusMessage`** — internal gateway response text (e.g. `"TEXT_IRT_00"`). For ISV diagnostic use only; do not surface to end users or rely on it for logic.

**Always store `transactionID`** — required for reversals and refunds. When `finStatus` is `"FAILED"` or `"DECLINED"`, `transactionID` is present in the result but set to an **empty string** (`""`). Guard against both `null` and `""` before using `transactionID` for a subsequent operation — do not attempt reversal or refund against an empty string.

## Tokenize card at sale time

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "saleAndTokenizeCard",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
```

Operation name is `saleAndTokenizeCard` — NOT `sale` with a flag. Same 202 → poll flow. On success the `TransactionResult` includes `cardToken`. Requires tokenization enabled on the merchant (Handpoint-side setup). EPI only.

## Refund

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "refund",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "originalTransactionId": "transactionID-from-sale-result"
}
```

Linked refund: include `originalTransactionId` (the `transactionID` from the original sale result). Do **not** include `transactionReference` — subsequent operation.

Unlinked refund (requires acquirer enablement) — include `transactionReference` for recovery:
```json
{
  "operation": "refund",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
```

Same 202 → polling flow as sale. Terminal prompts cardholder to present card.

## Reversal (void)

Two paths — **prefer the remote reversal** (no reader) wherever possible: fewer failure points, synchronous response direct to the gateway, no dependency on terminal availability.

### Remote reversal — `POST /reversal` (no reader required)

Synchronous — returns immediately. Sends the void directly to the payment host. Works for both card-present and MOTO transactions.

```http
POST https://cloud.handpoint.com/reversal
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{ "originalGuid": "transactionID-from-sale-result" }
```

**Partial reversal (EPI only) — strongly prefer this endpoint.** `POST /reversal` is the recommended path for ALL reversals, including partial ones. It is synchronous, terminal-independent, and handles partial amounts directly in the request body — no reader interaction, no polling, fewer failure points than the on-terminal path.

Add `"amount": "50.05"` and `"currency": "USD"` to the body for a partial reversal. Amount is in **major units** (decimal string — `"50.05"` = $50.05). **`currency` is required when `amount` is present** — omitting it returns an error even if currency is otherwise implied. Omit both fields for a full reversal.

**`finStatus` is NOT present in the reversal response.** Check `httpStatus: 200` for success. Note: `httpStatus` in the `/reversal` body is an **integer** (`200`) — unlike `/batch/close` which returns it as a **string** (`"200"`). Use type-safe comparison in your code (`=== 200` not `== "200"`). Also verify `issuerResponseCode` and `issuerResponseText` — on success they should be `"00"` / `"Successful"`. If `httpStatus` is 200 but `issuerResponseCode` is unexpected (e.g. `"30"` / `"format error"`), the transaction may still have been approved at the acquirer — log the full response and raise to Handpoint Support for confirmation.

**Success response (HTTP 200, synchronous):**
```json
{
  "httpStatus": 200,
  "amount": "150.06",
  "currency": "USD",
  "approvalCode": "123456",
  "issuerResponseCode": "00",
  "issuerResponseText": "Successful",
  "cardTypeName": "Visa",
  "maskedCardNumber": "************0936",
  "batchNumber": "123",
  "transactionReference": "your-uuid-from-original-sale",
  "authorizationGuid": "<originalGuid>",
  "originalGuid": "<originalGuid>",
  "reversalGuid": "<new-guid-for-this-reversal>",
  "customFields": { "entry": [{ "key": "messageReasonCode", "value": "4000" }, ...] },
  // NOTE: customFields shape varies by endpoint. /reversal returns {"entry": [{key,value},...]} array format.
  // Other endpoints (e.g. /preauthorization/capture) return a flat object {"tenderType": "Credit", ...}.
  // Do not assume a uniform shape — check per response.
  "serverDateTime": "20260820172340416"
}
```

| HTTP | Code | Meaning |
|---|---|---|
| 200 | — | Reversed — store `reversalGuid` |
| 400 | `3051` | Already reversed |
| 400 | `3153` | Not in open batch — fall back to refund |
| 400 | `4066` | Partial amount exceeds original |

### On-terminal reversal (PAX terminal processes it)

Asynchronous — 202 → poll, same as a sale. The terminal handles the void.

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "reversal",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "originalTransactionId": "transactionID-from-sale-result"
}
```

Do NOT include `transactionReference` — reversal is a subsequent operation. Poll `GET /transaction-result/{id}` for `finStatus`. A successful on-terminal reversal returns `finStatus: "AUTHORISED"`.

### Recovery reversal (`saleReversal`)

Use ONLY in transaction recovery: when the status endpoint returns `AUTHORISED` for a transaction you have no record of (e.g. network failure mid-poll). Voids the sale before it settles.

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "saleReversal",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "currency": "USD",
  "originalTransactionId": "transactionID-from-status-response"
}
```

`currency` is required (unlike plain `reversal`). Asynchronous — 202 → poll.

## Pre-authorization (EPI, EmerchantPay, Paystrax)

```json
// Create — include transactionReference for recovery
POST /transactions
{
  "operation": "preAuthorization",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
// → 202, poll as normal. Store result transactionID as pre-auth-transactionID.

// Increase (terminal path) — references preceding transactionID
POST /transactions
{
  "operation": "preAuthorizationIncrease",
  "amount": "1500",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "originalTransactionId": "<pre-auth-transactionID>"
}
// → 202, poll as normal

// Increase (remote path, no reader) — always references the CREATE transactionID
POST /preauthorization/increase  { "originalGuid": "<create-transactionID>", "increaseAmount": "20.00", "subtract": "0" }
// To decrease: "subtract": "1"
// increaseAmount: major-unit decimal string ("20.00"), not minor units

// Remote capture (synchronous, no reader) — always references the CREATE transactionID
POST /preauthorization/capture  { "originalGuid": "<create-transactionID>", "capturedAmount": "15.00" }
// capturedAmount: major-unit decimal string ("15.00" = $15.00). Field is capturedAmount, NOT amount. Do NOT use minor units here.

// Pre-auth reversal (on-terminal) — operation is preAuthorizationReversal
POST /transactions
{
  "operation": "preAuthorizationReversal",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "originalTransactionId": "<pre-auth-transactionID>"
}
// → 202, poll as normal

// Pre-auth capture reversal (remote, no reader) — use POST /reversal with the captureGuid
POST /reversal  { "originalGuid": "<preAuthorizationCaptureGuid-from-capture-result>" }
```

Capture error `5001`: GUID not found. Capture error `3211`: already captured or voided.  
Do not mix terminal-path and back-office-path increases — pick one and stay consistent.

**Capture success response (HTTP 200):**
```json
{
  "httpStatus": 200,
  "capturedAmount": "65.00",
  "tipAmount": "5.00",  // conditional — absent when no tip applied; not guaranteed to be "0.00"
  "holdAmount": "125.24",
  "originalAmount": "50.24",
  "preAuthorizationGuid": "<create-transactionID>",
  "preAuthorizationCaptureGuid": "<new-guid-for-capture-reversal>",
  "approvalCode": "123456",
  "issuerResponseCode": "00",
  "issuerResponseText": "Successful",
  "maskedCardNumber": "************0936",
  "cardTypeName": "Visa",
  "currency": "USD",
  "batchNumber": "123",
  "serverDateTime": "...",
  "terminalDateTime": "..."
}
```

## Cancel an in-progress operation

Stops whatever operation is currently running on the terminal. Equivalent to pressing the red Cancel button. Only valid while an operation is actively in progress.

**Primary method — `stopCurrentTransaction` via `POST /transactions` (async):**

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "stopCurrentTransaction",
  "terminal_type": "PAXA920",
  "serial_number": "082104578"
}
```

Returns 202 → poll as normal. Result `finStatus` will be `CANCELLED`.

**Timing:** The operation must still be in a cancellable state when the cancel arrives. On fast simulator acquirers (ViscusDummy/staging) the operation may complete before the cancel is received — resulting in error 1003 even if sent within 1–2s. On production terminals the window is wider. Error responses:

| HTTP | Code | Meaning |
|---|---|---|
| `400` | `1003` | Cancel not allowed — operation has already completed or is not in a cancellable state |
| `400` | `1001` | Device is busy with a different operation |

**Alternative — `POST /cancelRequest` (sync, separate endpoint):**

```http
POST https://cloud.handpoint.com/cancelRequest
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{ "serial_number": "082104578" }
```

Synchronous. Returns 400 / error 1003 or 1005 if nothing is in a cancellable state.

## Check device connectivity — `pingDevice`

Use `pingDevice` to confirm the terminal is reachable before sending a transaction, or after receiving error 1002 to determine whether the terminal is back online. This is a lightweight no-op that does not start a transaction.

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "pingDevice",
  "terminal_type": "PAXA920",
  "serial_number": "082104578"
}
```

Async — 202 → poll. On success, the polled result will contain a status indicating the device responded. On failure (device offline), you will receive error `1002` on the initial request or on the polled result.

**When to use:**
- After receiving a 1002 error, before retrying a transaction — confirm the terminal is back before sending
- As a pre-flight health check in environments with unstable Wi-Fi
- Do NOT use `pingDevice` as a polling substitute — it creates unnecessary terminal traffic

**Note:** `POST /reversal` is terminal-independent and never requires a `pingDevice` pre-check — it goes directly to the payment host.

## Tip adjustment — Cloud API (EPI only)

```http
POST https://cloud.handpoint.com/transactions/{transactionID}/tip-adjustment
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{ "amount": 8 }
```

`transactionID` in the URL is the `transactionID` from the original sale result.  
`amount` is in **major currency units** — `8` = $8.00, `2.50` = $2.50.

**Batch cut-off:** tip-adjustment must be called before the batch closes. Cut-off time is set by the acquirer during merchant onboarding and is typically specified in the merchant's onboarding documents — Handpoint does not control it. Call tip-adjustment close to the original transaction (not end-of-day) to stay safely within the window. The batch close response will confirm whether the adjustment was included or return an error if the batch had already closed.

EPI only — for EmerchantPay/Paystrax include `tipAmount` in the sale body at transaction time instead.

**Success response (HTTP 200):** `{"statusMessage": "tip adjusted"}`

## Batch close — Cloud API (EPI only)

```http
POST https://cloud.handpoint.com/batch/close
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{ "deviceType": "PAXA920", "serialNumber": "082104578" }
```

Field names are `deviceType` and `serialNumber` (camelCase) — NOT `terminal_type`/`serial_number`. Using the wrong names returns 422 VALIDATION_FAILED.

**ViscusDummy (staging/DEMO testing) only:** include `"batchNumber": "123"` — the simulator does not track batch numbers automatically:
```json
{ "deviceType": "PAXA920", "serialNumber": "082104578", "batchNumber": "123" }
```

Without `batchNumber` on ViscusDummy: `422 "batchNumber is required: no prior transaction found for this terminal"`.

**Success response (HTTP 200):**
```json
{
  "httpStatus": "200",
  "batchNumber": "123",
  "transactionCount": "10",
  "netAmount": "1000.00",
  "closeBatchGuid": "c0682590-9d63-11f1-a7f7-fd472d9bb27f",
  "closedAt": "20260821132518191",
  "issuerResponseCode": "00",
  "issuerResponseText": "Batch closed",
  "batchStatus": "CLOSED",
  "customerReference": {}
}
```

`customerReference` is always present in the response as an empty object `{}` — this is a platform-level field reserved for future use. It carries no data in current batch close responses; safe to ignore.

Call once per business day. Synchronous — no polling. EPI and Paysafe+Interac only.

## Transaction status by reference

```http
GET https://transactions.handpoint.com/transactions/{transactionReference}/status
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

Use when you have a `transactionReference` but lost the `transactionResultId`. Also available: `GET https://cloud.handpoint.com/{transactionReference}/status/all` for the full transaction chain (create + increase + capture).

## UNDEFINED handling — mandatory recovery flow

Any card-present operation via `POST /transactions` (sale, refund, reversal, pre-auth) can produce `UNDEFINED` when the network drops between the terminal completing and the ISV receiving the result. **This is not an edge case — any production integration must implement recovery.**

### What UNDEFINED means

The terminal may have completed the transaction successfully on the card and at the acquirer, but the ISV never received a definitive `AUTHORISED` or `DECLINED`. If you retry, you risk a double charge. If you abandon, a real auth may go unsettled.

### Polling timeout and when to trigger recovery

Poll with a timeout of **120 seconds** after the 202 (30 polls × 4s each). This exceeds the maximum terminal and app processing time, so any result that exists will have arrived by then.

If the poll loop exhausts without a definitive `finStatus`, or if your server process dies mid-poll and the `transactionResultId` is lost, treat the transaction as UNDEFINED and start recovery.

```python
# Recovery trigger — add after your poll loop
if fin_status is None:
    # Timed out — trigger recovery, do NOT retry the original operation
    recover_undefined(transaction_reference, terminal_serial, timestamp_of_original_request)
```

### Recovery steps

1. **Wait an additional 30 seconds** before querying the feed — allow the terminal's own settlement to complete.
2. **Query the Transaction Feed API** by terminal `serialNumber` + time window (±5 minutes around the original request):
   ```
   GET https://txnfeed.handpoint.com/transactions?serialNumber={serial}&from={iso_timestamp}&to={iso_timestamp}
   ```
3. **Match by `transactionReference`** (UUID v4 you generated and persisted before sending). Do NOT match by amount alone — multiple transactions may share the same amount.
4. **Act on the feed result:**
   - Result found with `finStatus: "AUTHORISED"` → the transaction succeeded. Store the `transactionID` from the feed entry and fulfil the order.
   - Result found with `finStatus: "DECLINED"` / `"CANCELLED"` → failed cleanly. Safe to retry.
   - No result found in feed → genuinely no transaction. Safe to retry.

Load optional skill `optional/transaction-feed.md` for full feed API details and field reference.

### Pre-requirement: persist `transactionReference` BEFORE sending

`transactionReference` is the only field linking your request to the feed result when `transactionResultId` is lost. It MUST be written to durable storage (DB, queue) before the `POST /transactions` call. If your process crashes after the POST but before storing the reference, recovery is impossible.

## MOTO (Mail Order / Telephone Order) operations

MOTO is a **capability** that unlocks multiple operations, not a single endpoint. Requires merchant onboarding with the acquirer and enablement in Handpoint Portal.

### MOTO on-terminal (keyed card entry on PAX device)

Shows a manual card-entry screen on the terminal. 202 → polling flow. Requires MOTO enablement.

| Operation | `"operation"` value | Includes `transactionReference`? |
|---|---|---|
| MOTO sale | `"moToSale"` | Yes (original) |
| MOTO reversal | `"reversal"` | No (subsequent) |
| MOTO refund | `"refund"` | No (subsequent) |
| MOTO pre-auth | `"preAuthorization"` | Yes (original) |

Example — MOTO sale on-terminal:
```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "moToSale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
```

### MOTO remote (no reader — card token)

No terminal required. Synchronous. Load `optional/back-office.md` for full details on:
- **MOTO sale** (`POST /moto/sale`) — charge a stored card token
- **MOTO refund** (`POST /moto/refund`) — refund to a stored token
- **MOTO reversal** (`POST /reversal`) — void a prior MOTO sale by `originalGuid`

Note: MOTO on-terminal uses `serial_number` / `terminal_type`; MOTO remote uses card tokens and has no terminal fields.

**Critical — MOTO on-terminal timeout:** A `moToSale` (or any keyed-entry operation) waits for a human to enter card details on the terminal. If no operator is present, the poll loop will exhaust (120s → UNDEFINED) but **the terminal remains stuck in the active keyed-entry operation**. Every subsequent on-terminal transaction will return error 1001 "Device is busy" until the operation is completed or cancelled. After a MOTO on-terminal poll timeout:
1. Trigger UNDEFINED recovery via the Transaction Feed (see recovery flow below)
2. Send `POST /transactions` with `"operation": "stopCurrentTransaction"` to free the terminal
3. Poll the cancel until `finStatus: "CANCELLED"` before sending any further on-terminal request

## Error handling — required for all integrations

### Immediate errors (before the 202)

These are returned synchronously on the initial `POST /transactions`. The terminal has not been contacted yet.

| HTTP | Error body pattern | Meaning | Action |
|---|---|---|---|
| `400` | `{"error": N, "message": "..."}` | Terminal-level error (see below) | See error codes |
| `400` | `{"message": "TransactionReference with wrong uuidv4 format"}` | `transactionReference` is not a valid UUID v4 | Generate a proper UUID v4 and retry |
| `403` | `{"error": {"statusCode": 403, "name": "ForbiddenError", "message": "No valid key found in header"}}` | Invalid API key | Check `ApiKeyCloud` header value |
| `422` | `{"error": {"statusCode": 422, "name": "UnprocessableEntityError", "code": "VALIDATION_FAILED", "details": [{"path": "/field", "code": "type", "message": "must be string"}]}}` | Request body failed schema validation | Check `details` array — it names the specific field and rule |

**Terminal error codes (400 responses):**

| Code | Message | Meaning | Action |
|---|---|---|---|
| `1001` | `Device is busy` | A transaction is already in progress on the terminal | **Wait** — do not send another transaction until the current one completes. Poll the in-progress `transactionResultId` if you have it, or wait for the operation to finish. Do not retry immediately. |
| `1002` | `No device listening at the other end of the secure channel` | Terminal is offline — powered off, not on Wi-Fi, or Payments App not running. Can also appear transiently due to network instability. Send a `pingDevice` operation (see below) to confirm connectivity before retrying. For reversals, `POST /reversal` never sends anything to the terminal and is immune to 1002. |
| `1004` | `Auth not available: ...` | `serial_number` or `terminal_type` not assigned to this API key | Call `GET /devices` to confirm valid serials; check you're using the correct API key for this terminal |

**Error body shape for terminal errors (400):**
```json
{ "error": 1001, "message": "Device is busy" }
```
Note: this is a flat object with `"error"` as an integer key — different from the nested `{"error": {"statusCode": ...}}` shape used by 403 and 422 errors.

### Errors in the polled result (`finStatus` values)

| `finStatus` | Meaning | Action |
|---|---|---|
| `AUTHORISED` | Approved | Store result, fulfil order |
| `DECLINED` | Issuer declined | Show decline reason from `statusMessage`; do not retry same card automatically |
| `CANCELLED` | Cardholder cancelled on terminal | Allow retry — the cardholder chose to cancel |
| `FAILED` | Terminal or network error during processing | Log `statusMessage` and `errorMessage`; do not retry without investigating |
| `UNDEFINED` | No definitive result received | **Do not retry.** Trigger the recovery flow (see UNDEFINED handling section) |

### Errors on synchronous back-office endpoints

`POST /reversal`, `POST /moto/sale`, `POST /batch/close`, `POST /preauthorization/capture` — all return errors immediately in the response body (no polling).

**`POST /reversal` errors:**

| HTTP | Code | Meaning | Action |
|---|---|---|---|
| `400` | `3051` | Already reversed | No action — transaction is already voided |
| `400` | `3153` | Not in open batch (batch already closed) | Send a refund (`POST /moto/refund` or on-terminal refund) instead |
| `400` | `4066` | Partial amount exceeds original | Reduce `amount` or omit it for a full reversal |

**`POST /moto/sale` errors:**

| HTTP | Code | Meaning | Action |
|---|---|---|---|
| `400` | `3107` | CVV required | Contact Handpoint to disable mandatory CVV for this merchant |
| `400` | `5252` | Card token failure (token provider down) | Retry later; token itself is valid |

### Reversal strategy — prefer no-reader path

**Always use `POST /reversal` (no reader) as the default reversal path.** Reasons:
- Works even when the terminal is offline (error 1002 does not apply)
- Synchronous — immediate response, no polling
- Works for all transaction types: card-present, MOTO on-terminal, MOTO remote
- Eliminates the entire class of "terminal busy during reversal" failures

Only use the on-terminal `"operation": "reversal"` path if your acquirer specifically requires it or you have a specific terminal-side workflow reason.

## Logging

Logging is required for integration validation. Capture every request you send, every intermediate poll, and the full final result.

### What to log on each request

```
→ POST /transactions
  body: { "operation":"sale", "amount":"1000", "currency":"USD",
          "terminal_type":"PAXA920", "serial_number":"082104578",
          "transactionReference":"550e8400-e29b-41d4-a716-446655440000" }

← 202 { "statusMessage":"Operation Accepted",
        "transactionResultId":"082104578-1786020446467" }

→ GET /transaction-result/082104578-1786020446467  [poll attempt 1, t+4s]
← 204 (no body)   [still processing — do NOT call .json()]

→ GET /transaction-result/082104578-1786020446467  [poll attempt 2, t+8s]
← 200 {
    "finStatus": "AUTHORISED",
    "transactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
    "requestedAmount": 1000,
    "totalAmount": 1000,
    "dueAmount": 0,
    "tipAmount": 0,
    "currency": "USD",
    "cardSchemeName": "MasterCard",
    "maskedCardNumber": "************1456",
    "transactionReference": "550e8400-e29b-41d4-a716-446655440000",
    "statusMessage": "Approved or completed successfully",
    "efttransactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
    "merchantReceipt": "https://s3.[...]/merchantReceipt.html",
    "customerReceipt": "https://s3.[...]/customerReceipt.html"
  }
```

### Minimum fields to capture per result

| Field | Why |
|---|---|
| `finStatus` | Outcome — required for order fulfilment logic |
| `transactionID` | Required for reversal and refund |
| `requestedAmount` | Verify matches what was sent |
| `totalAmount` | Final charged amount (may include tip) |
| `currency` | Currency |
| `cardSchemeName` | Card brand (Visa / Mastercard / Amex / etc.) |
| `maskedCardNumber` | Cardholder match for recovery |
| `transactionReference` | Your idempotency key — links request to result |
| `statusMessage` | Human-readable detail; non-empty on DECLINED or FAILED. May be localized — display only, never parse. |

### Backoffice (no-reader) endpoints

Synchronous — log the full request body and the complete response body immediately:

```
→ POST /moto/sale   body: { "amount":"10.00", "currency":"USD", "cardToken":"...", "transactionReference":"<uuid>" }
← 200 { "finStatus":"AUTHORISED", "efttransactionID":"...", ... }
```

## See also

- Acquirer constraints: load `acquirers/{acquirer}.md`
- Remote sale / back-office: `optional/back-office.md`
- Transaction recovery / UNDEFINED: `optional/transaction-feed.md`
- Error codes: https://developer.handpoint.com/reference/error-codes
- Back Office REST reference: https://developer.handpoint.com/back-office/rest-api-no-reader
