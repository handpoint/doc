---
title: Error codes
sidebar_position: 3
description: Error codes returned by the Handpoint API and SDK, with recovery guidance.
---

# Error codes

## How errors are surfaced — two different patterns

**With-reader operations** (`POST /transactions`) are asynchronous. The initial response is always HTTP 202 `{"statusMessage":"Operation Accepted","transactionResultId":"..."}`. Errors appear only when you poll `GET /transaction-result/{transactionResultId}` — the poll always returns HTTP 200, and the error is in `finStatus` and `statusMessage`.

**Without-reader operations** (`POST /reversal`, `POST /preauthorization/capture`, `POST /preauthorization/increase`) are synchronous. Errors are returned immediately as HTTP 4xx with a structured `error` body.

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
On `POST /preauthorization/increase` the amount field is `increaseAmount` (not `amount`) and takes a decimal major-unit string, e.g. `"20.00"`. Sending `amount` returns `422 VALIDATION_FAILED` with `details[].info.missingProperty: "increaseAmount"`.

For how increases and decreases accumulate, which GUID to reference, and the per-path decrease signal, see the [Pre-Authorization Guide](/reference/pre-authorization-guide#increase-decrease).
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
| `403` | `No valid key found in header` | Invalid or missing API key | Check the `ApiKeyCLoud` header value |
| `400` | `{"error":1001,"message":"Device is busy"}` | Terminal is processing another operation | Wait and retry; implement a short backoff (2–5s) |
| `400` | `{"error":1002,"message":"Device not responding"}` | Terminal is connected but not acknowledging commands | Check physical terminal state; power-cycle if unresponsive |
| `400` | `{"error":1003,"message":"Cancel operation not allowed"}` | `cancelRequest` was sent when no cancellable operation is in progress | Only call `cancelRequest` while an operation is actively running on the terminal |
| `400` | `{"error":1005,"message":"No transaction to cancel"}` | `cancelRequest` was received but no transaction is active on the terminal | Verify the terminal state before sending a cancel |
| `400` | `TransactionReference with wrong uuidv4 format ...` | `transactionReference` is not a valid UUID v4 | Generate a compliant UUID v4 — version digit (position 13) must be `4`, variant digit (position 17) must be `8`, `9`, `a`, or `b` |

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

## UNDEFINED status

`finStatus: UNDEFINED` means the terminal sent the transaction to the gateway but no result was received. The transaction **may or may not have been processed** — do not retry.

**Recovery:** Query the [Transaction Feed API](../back-office/transaction-feed-api) using the terminal serial number and approximate timestamp to determine whether the transaction settled. Alternatively, call `hapi.getTransactionStatus(transactionReference)` on the Android SDK.

:::caution PAX terminals only
UNDEFINED recovery applies to PAX terminals. HiLite BT handles disconnection differently — the SDK buffers and retries delivery automatically.
:::
