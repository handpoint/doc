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
No error is returned at POST time. Poll `GET /transaction-result/{transactionResultId}` to get the outcome — the poll always returns HTTP `200`, and the error is encoded in `finStatus` and `statusMessage`.

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

### Pattern C — Synchronous nested error (deferred tokenization)

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

## Error codes — `POST /reversal`

| `code` | `message` | Meaning | What to do |
|---|---|---|---|
| `3051` | `Already reversed` | Transaction has already been reversed | Check your records; no further action needed |
| `3153` | `Unable to find message to reverse.` | `originalGuid` not found | Verify the GUID is the `transactionID` from the original transaction result |
| `4066` | `Partial reversal amount exceeds original amount` | `amount` exceeds the original transaction amount | Reduce amount or omit `amount` for a full reversal |

## Error codes — `POST /preauthorization/capture` and `POST /preauthorization/increase`

| `code` | `message` | Meaning | What to do |
|---|---|---|---|
| `5001` | `NullPointerException` | `originalGuid` not found (internal error surfaced for unknown GUIDs on these endpoints) | Verify the GUID is the `transactionID` from the pre-auth create result |
| `3211` | *(pre-auth already settled)* | Pre-auth has already been captured or voided — adjustment no longer possible | Check transaction state before sending an increase/decrease |

:::note
`POST /preauthorization/increase` handles both increases and decreases. To decrease, include `"subtract": "1"` in the request body — there is no separate `/preauthorization/decrease` endpoint.

The amount field is `increaseAmount` (not `amount`) and takes a decimal major-unit string (e.g. `"20.00"`). Sending `amount` results in a `422 VALIDATION_FAILED` error with `details[].info.missingProperty: "increaseAmount"`.
:::

## Transaction result `finStatus` values — with-reader operations

These appear in the polled `GET /transaction-result/{id}` response. `statusMessage` is localized (based on card and terminal locale) — use `finStatus` for programmatic logic.

| `finStatus` | `statusMessage` pattern | Cause | What to do |
|---|---|---|---|
| `AUTHORISED` | — | Approved | Normal |
| `DECLINED` | `UNABLE_TO_FIND_MESSAGE_TO_REVERSE.` | `originalTransactionId` not found in the open batch | Verify GUID; batch may have closed — send a Refund instead |
| `DECLINED` | `PARTIAL_REVERSAL_AMOUNT_EXCEEDS_ORIGINAL_AMOUNT` | Reversal amount exceeds original sale | Use the exact original sale amount |
| `DECLINED` | *(localized refund amount error)* | Linked refund amount exceeds original — card IS prompted before this error | Pre-validate amount on ISV side before sending |
| `DECLINED` | *(issuer message)* | Issuer declined | Ask cardholder to try another card |
| `CANCELLED` | — | Cardholder cancelled at terminal | No action required |
| `FAILED` | `Transaction failed, error: Error getting advanced transaction status (transaction not found)...` | `originalTransactionId` not found (pre-auth reversal path) | Verify GUID |
| `FAILED` | `Read card error` | Card could not be read | Ask cardholder to retry; try insert if tap failed |
| `UNDEFINED` | — | No result received from gateway | See [UNDEFINED status](#undefined-status) below |

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
| `5252` | `Card token failure` | The `cardToken` in the request does not exist in the gateway — it is invalid, expired, or was never created. (`details.httpStatus` is `404` internally.) | Verify the token is valid; re-tokenize the card if the token has expired. |

### `POST /moto/refund` errors

| `code` | `message` | Meaning | What to do |
|---|---|---|---|
| `3209` | `The requested refund amount is greater than the initial sale amount` | `amount` in the refund request exceeds the amount of the original sale referenced by `originalGuid`. | Reduce the refund amount to at most the original sale amount. |
| `3210` | `Original and linked currency do not match` | The `currency` in the refund request does not match the currency recorded on the original sale. | Use the same currency as the original sale. |

## Error codes — Deferred Tokenization (`GET /transactions/{id}/token`)

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

**Recovery:** Query the [Transaction Feed API](../back-office/transaction-feed-api) using the terminal serial number and approximate timestamp to determine whether the transaction settled. Alternatively, call `hapi.getTransactionStatus(transactionReference)` on the Android SDK.

:::caution PAX terminals only
UNDEFINED recovery applies to PAX terminals. HiLite BT handles disconnection differently — the SDK buffers and retries delivery automatically.
:::
