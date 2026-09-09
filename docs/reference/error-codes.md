---
title: Error codes
sidebar_position: 3
description: Error codes returned by the Handpoint API and SDK, with recovery guidance.
---

# Error codes

## How errors are surfaced — three patterns

Understanding which pattern an endpoint uses is the first step to handling errors correctly.

### Pattern A — Asynchronous (with-reader)

Applies to: `POST /transactions` (card-present sale, pre-auth, refund via terminal)

The POST always returns HTTP `202`:
```json
{ "statusMessage": "Operation Accepted", "transactionResultId": "..." }
```
No error is returned at POST time. Poll `GET /transaction-result/{transactionResultId}` to get the outcome:

| Poll response | Meaning |
|---|---|
| **HTTP 204** | Still processing — body is empty. Do **not** call `.json()` on this response. Wait and re-poll. |
| **HTTP 200** | Result ready — parse the JSON body; read `finStatus` and `statusMessage`. |

The error is encoded in `finStatus` and `statusMessage` of the HTTP 200 response.

### Pattern B — Synchronous flat error (without-reader)

Applies to: `POST /reversal`, `POST /preauthorization/capture`, `POST /preauthorization/increase`, `POST /moto/sale`, `POST /moto/refund`, `POST /transactions/{id}/tip-adjustment`

Error shape:
```json
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Human-readable description",
    "code": "ERROR_CODE_HERE",
    "details": { "...endpoint-specific": "data..." }
  }
}
```
Read `error.code` for programmatic error identification. `error.message` is human-readable but may be localized.

### Pattern C — Synchronous nested error (Get Card Token)

Applies to: `GET /transactions/{id}/token`

The outer HTTP status is `400`. The actual error code from the downstream Viscus system is **two levels deep**:
```json
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Viscus operation failed",
    "details": {
      "status": 403,
      "body": {
        "error": {
          "errorCode": "3112",
          "reason": "Transaction type is not eligible for deferred tokenization",
          "httpStatus": "403",
          "errorGuid": "..."
        }
      }
    }
  }
}
```
Read `error.details.body.error.errorCode` for programmatic identification. Do not rely on `error.message` — it always reads `"Viscus operation failed"` regardless of the underlying error.

---

## HTTP status codes — without-reader endpoints

| HTTP | `name` | When it occurs |
|---|---|---|
| `200` | — | Success |
| `400` | `BadRequestError` | Business logic rejection (wrong amount, already reversed, not found) — see `code` field |
| `403` | `ForbiddenError` | Invalid or missing API key |
| `404` | `NotFoundError` | `GET /transaction-result/{id}` — ID not found or expired |
| `422` | `UnprocessableEntityError` | Request body validation failed — wrong field names or missing required fields; see `details` array |
| `429` | `TooManyRequests` | Rate limit exceeded — 2 requests per second per merchant API key. Back off and retry after 1 second. For high-throughput ISVs with multiple merchants, use a separate API key per merchant to get an independent rate limit per key. |

## Error codes — `POST /reversal`

| `code` | `message` | Meaning | What to do |
|---|---|---|---|
| `3051` | `Already reversed` | Transaction has already been reversed | Check your records; no further action needed |
| `3052` | `Authorization has already been completed` | Transaction was already captured or reversed (applies to both reversal and pre-auth capture/increase) | Check transaction state before acting; no further action needed |
| `3153` | `Unable to find message to reverse.` | `originalGuid` not found | Verify the GUID is the `transactionID` from the original transaction result |
| `4066` | `Partial reversal amount exceeds original amount` | `amount` exceeds the original transaction amount | Reduce amount or omit `amount` for a full reversal |

## Error codes — `POST /preauthorization/capture` and `POST /preauthorization/increase` {#pre-auth-adjustment}

| `code` | HTTP | Meaning | What to do |
|---|---|---|---|
| `3156` | `404` | No pre-authorization found for the `originalGuid` | Verify the GUID is the `transactionID` from the pre-auth create result |
| `3207` | `400` | The referenced transaction is not a pre-authorization | Reference the Create, not an increase or a capture |
| `3211` | `403` | The pre-authorization was declined, already captured, or already reversed | Check transaction state before adjusting or capturing |
| `3212` | `403` | The decrease would take the hold to zero or below | Send a Pre-Auth Reversal to release the hold in full |
| `3215` | `403` | The capture amount exceeds the current hold total | Increase the hold first, then capture |
| `5001` | `400` | `NullPointerException` — internal error surfaced for unknown GUIDs on these endpoints | Verify the GUID is the `transactionID` from the pre-auth create result |

:::note
On `POST /preauthorization/increase` the amount field is `increaseAmount` (not `amount`) and takes a decimal major-unit string, e.g. `"20.00"`. Sending `amount` returns `422 VALIDATION_FAILED`.

For how increases and decreases accumulate, which GUID to reference, and the per-path decrease signal, see the [Pre-Authorization Guide](/reference/pre-authorization-guide#increase-decrease).
:::

## Transaction result `finStatus` values — with-reader operations

These appear in the polled `GET /transaction-result/{id}` response. `statusMessage` is localized (based on card and terminal locale) — use `finStatus` for all programmatic branching.

**Complete `finStatus` enum** — all possible values:

| `finStatus` | Final? | Meaning |
|---|---|---|
| `IN_PROGRESS` | No | Still processing on the terminal or gateway. Keep polling. |
| `UNDEFINED` | No* | Terminal sent the transaction but no result was received. Follow [UNDEFINED recovery](#undefined-status). |
| `AUTHORISED` | **Yes** | Approved. |
| `DECLINED` | **Yes** | Declined by gateway or acquirer. |
| `FAILED` | **Yes** | Technical failure. Card may or may not have been charged — follow recovery flow before retry. |
| `PARTIAL_APPROVAL` | **No†** | Approved for less than the requested amount (US acquirers only). Terminal is showing an accept/decline prompt — result is not final until cardholder responds. |
| `CANCELLED` | **Yes** | Cardholder or merchant cancelled at terminal. |
| `PROCESSED` | **Yes** | Completed for non-financial operations (`tokenizeCard`, MOTO tokenization). |
| `REFUNDED` | **Yes** | Refund processed successfully. |
| `CAPTURED` | **Yes** | Pre-authorization captured. |

`*UNDEFINED` is treated as non-final until the recovery flow produces a definitive result.

`†PARTIAL_APPROVAL` is not final when returned from `/status`. The terminal is showing an accept/decline prompt to the cardholder — the result can change to `CANCELLED` if they decline (SDK auto-reverses). Continue polling `transaction-result` for at least 60 seconds or until the final result is delivered. See [Partial Approval — timing edge case](/reference/partial-approval#the-status-timing-trap).

**Common `DECLINED` patterns with diagnostic signals:**

| `statusMessage` | `arc` | Cause | What to do |
|---|---|---|---|
| `Invalid Merchant` | `1000` | Wrong `externalId` in `merchantAuth`, or MID misconfigured | Return `statusMessage` to the merchant; see [Multi-MID guide](/reference/multi-mid) |
| `Card declined the online authorization` *(or similar locale-dependent wording)* | — | EMV forced reversal: card was removed mid-chip before the full EMV flow completed, or the card's internal application declined (e.g. IAD mismatch). SDK auto-reversed the authorized hold. `/status` may have shown `AUTHORISED` briefly — the final `transaction-result` is `DECLINED`. | Display `statusMessage` to the merchant. Ask the cardholder to re-insert the card and leave it in until the terminal confirms. Do not retry without cardholder action. |
| `UNABLE_TO_FIND_MESSAGE_TO_REVERSE.` | — | `originalTransactionId` not found in the open batch | Verify GUID; batch may have closed — send a Refund instead |
| `PARTIAL_REVERSAL_AMOUNT_EXCEEDS_ORIGINAL_AMOUNT` | — | Reversal amount exceeds original sale | Use the exact original sale amount |
| *(localized refund amount error)* | — | Linked refund amount exceeds original — card IS prompted before this error | Pre-validate amount on ISV side before sending |
| *(issuer message, locale-dependent)* | — | Issuer declined — acquirer pass-through | Display `statusMessage` to the merchant as-is; use `finStatus` for programmatic logic |

**Common `FAILED` patterns:**

| `statusMessage` | Cause | What to do |
|---|---|---|
| `Transaction failed, error: Error getting advanced transaction status (transaction not found)...` | `originalTransactionId` not found (pre-auth reversal path) | Verify GUID |
| `Read card error` | Card could not be read | Ask cardholder to retry; try insert if tap failed |
| `HMAC mismatch` | MOTO not enabled (`supportsMoto = false`) | ViscusDummy-specific; real acquirers may return `DECLINED` |

## Immediate errors — with-reader operations

These are returned in the initial POST before the 202 is issued:

| HTTP | `message` | Meaning | What to do |
|---|---|---|---|
| `403` | `No valid key found in header` | Invalid or missing API key | Check the `ApiKeyCloud` header value |
| `400` | `{"error":1001,"message":"Device is busy"}` | Terminal is processing another operation | Wait and retry; implement a short backoff (2–5s) |
| `400` | `{"error":1002,"message":"No device listening at the other end of the secure channel"}` | Terminal is not connected to the Handpoint Cloud channel — powered off, not on Wi-Fi, or Payments App not running | Check terminal power, Wi-Fi, and that the Handpoint Payments App is open |
| `400` | `{"error":1004,"message":"Auth not available: ..."}` | Terminal serial or `terminal_type` is not assigned to the merchant account for this API key | Verify the terminal is assigned in Handpoint Portal; check `GET /devices` to see which serials are valid for this API key |
| `400` | `{"error":1003,"message":"Cancel operation not allowed"}` | `cancelRequest` was sent when no cancellable operation is in progress | Only call `cancelRequest` while an operation is actively running on the terminal |
| `400` | `{"error":1005,"message":"No transaction to cancel"}` | `cancelRequest` was received but no transaction is active on the terminal | Verify the terminal state before sending a cancel |
| `400` | `TransactionReference with wrong uuidv4 format ...` | `transactionReference` is not a valid UUID v4 | Generate a compliant UUID v4 — version digit (position 13) must be `4`, variant digit (position 17) must be `8`, `9`, `a`, or `b`. See [transactionReference usage](/reference/transaction-reference) |

## Error codes — Remote Sale back-office endpoints

These errors are returned synchronously by the remote sale back-office endpoints (`POST /moto/sale`, `POST /moto/refund`). All return HTTP `400 Bad Request` with a structured error body:

```json
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "<description>",
    "code": "<code>",
    "details": {
      "errorCode": "<code>",
      "description": "<description>",
      "errorGuid": "<guid>",
      "httpStatus": <status>
    }
  }
}
```

### `POST /moto/sale` errors

| `code` | `message` | Meaning | What to do |
|---|---|---|---|
| `3107` | `CVV required` | The merchant account has "CVV/CV2 input mandatory" configured for Card Not Present, but the remote sale no-reader endpoint cannot accept a CVV. | Contact Handpoint to disable mandatory CVV for this merchant's remote sale configuration, or use a terminal-based (on-terminal) remote sale flow instead. |
| `5252` | `Card token failure` | The card token provider (ProCharge, etc.) is temporarily down or unreachable. The stored `cardToken` is valid — tokens do not expire. (`details.httpStatus` is `404` internally.) | Retry the charge when the provider recovers. If persistent (>5 min), contact Handpoint to verify token provider availability. |

### `POST /moto/refund` errors

| `code` | `message` | Meaning | What to do |
|---|---|---|---|
| `3209` | `The requested refund amount is greater than the initial sale amount` | `amount` in the refund request exceeds the amount of the original sale referenced by `originalGuid`. | Reduce the refund amount to at most the original sale amount. |
| `3210` | `Original and linked currency do not match` | The `currency` in the refund request does not match the currency recorded on the original sale. | Use the same currency as the original sale. |

## Error codes — Get Card Token (`GET /transactions/{id}/token`)

Error shape: **Pattern C** (nested — read `error.details.body.error.errorCode`).

EPI only. Requires a SALE `transactionID` — not a reversal ID, not a pre-auth ID.

| `errorCode` | `reason` | Meaning | What to do |
|---|---|---|---|
| `3112` | `Transaction type is not eligible for deferred tokenization` | The `transactionID` in the URL is not a SALE. Common cause: using the reversal's `transactionID` after a partial-approval → cancel flow. | Use the SALE `transactionID`. On a partial-approval → cancel, the polled result's `transactionID` is the reversal — use `originalEFTTransactionID` from that result instead, or call `GET https://cloud.handpoint.com/{transactionReference}/status/all` and pick the entry where `type == "SALE"`. |
| `TOKENIZATION_NOT_ENABLED` | `Not configured for this merchant` | Merchant does not have card tokenization enabled. | Contact Handpoint Integration Support to enable tokenization on the merchant account. |

:::note Cancelled and reversed transactions are tokenizable
A SALE that was later reversed or cancelled (e.g. partial approval declined by cardholder) can still be tokenized — the card was read and encrypted during EMV processing before the reversal. Use the original SALE `transactionID`, not the reversal's.
:::

## Error codes — Tip Adjustment (`POST /transactions/{id}/tip-adjustment`)

Error shape: **Pattern B** (flat — read `error.code`). EPI only. Tip adjustment is available before the current batch closes.

| Condition | HTTP | Behaviour | What to do |
|---|---|---|---|
| Batch already closed | `400` | Error returned — specific `code` depends on acquirer | Tip adjustments cannot be reversed after batch close; only pre-batch-close adjustments are possible |
| `transactionID` not found | `400` | Error returned | Verify the `transactionID` matches the `transactionID` field in the original sale result (not `transactionReference`) |
| Amount is `0` | `400` | Validation error | Send the tip amount as a non-zero integer in **major currency units** (e.g. `8` = $8.00, not cents) |

On success: HTTP `200` with body `{"statusMessage": "tip adjusted"}`.

## UNDEFINED status

`finStatus: UNDEFINED` means the terminal sent the transaction to the gateway but no result was received. The transaction **may or may not have been processed** — do not retry.

**Recovery — in order:**

1. **Call the status endpoint** — fastest path:
   ```
   GET https://transactions.handpoint.com/transactions/{transactionReference}/status
   ```
   Returns the final `finStatus` if the gateway has the result. If `IN_PROGRESS`, poll every 10 s. If `UNDEFINED`, proceed to step 2.

2. **Query the Transaction Feed API** — if the status endpoint returns `UNDEFINED` or if `transactionReference` was not echoed (e.g. on-terminal MOTO — see known issue CUS-837): query the [Transaction Feed API](../back-office/transaction-feed-api) by terminal serial number and the approximate transaction time window to locate the settled record.

3. **Android SDK alternative:** `hapi.getTransactionStatus(transactionReference)` wraps step 1 without a direct HTTP call.

→ Full recovery flow with code examples: [Transaction Recovery — Cloud API](/reference/transaction-recovery-cloud-api)

:::caution PAX terminals only
UNDEFINED recovery applies to PAX terminals. HiLite BT handles disconnection differently — the SDK buffers and retries delivery automatically.
:::
