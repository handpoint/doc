---
title: Error Handling Guide
sidebar_label: Error Handling
description: How to diagnose and handle errors across Cloud API, SDK, and back-office endpoints. Covers gateway errors, acquirer pass-through, and setup problems.
---

# Error Handling Guide

This guide explains **how to handle errors** in your integration. For the complete code-level reference — specific error codes, HTTP statuses, and error shapes — see [Error codes](/reference/error-codes).

---

## Error delivery: three patterns

Which error pattern an endpoint uses determines where you look for the error.

| Pattern | Endpoints | Where the error is |
|---|---|---|
| **A — Async** | `POST /transactions` (all card-present) | Poll `GET /transaction-result/{id}` → read `finStatus` and `statusMessage` |
| **B — Sync flat** | `/reversal`, `/capture`, `/increase`, `/moto/sale`, `/moto/refund`, `/tip-adjustment` | HTTP 4xx response → read `error.code` |
| **C — Sync nested** | `GET /transactions/{id}/token` | HTTP 400 → read `error.details.body.error.errorCode` |

See [Error codes — three patterns](/reference/error-codes#how-errors-are-surfaced--three-patterns) for the exact JSON shapes.

---

## Gateway errors vs acquirer responses

Not all DECLINED transactions are the same. Understanding the source of a decline determines how your application should respond.

### Gateway errors

Set by the Handpoint gateway before the transaction reaches the acquirer. These indicate a configuration or connectivity problem — the acquirer was never contacted.

**How to identify:** `finStatus` is `DECLINED` or `FAILED` and the error is clearly non-issuer (see table below). These are actionable by the ISV or merchant.

| `statusMessage` | `arc` | Source | What it means |
|---|---|---|---|
| `Invalid Merchant` | `1000` | Gateway | `externalId` in `merchantAuth` doesn't match any configured sub-MID |
| `Error connecting to authorization provider` | — | Gateway | Timeout reaching the acquirer — no authorization attempt was made |
| `Processing error` | — | Gateway | Internal processing failure before acquirer contact |
| `Read card error` | — | Gateway | Terminal could not read the card (chip, contactless, or magstripe read failed) |

### Acquirer responses (pass-through)

Set by the card issuer or acquirer after the transaction is processed. The `statusMessage` is a localized string forwarded from the network — **its exact text varies by card locale**.

**The ISV's responsibility is to display the `statusMessage` to the merchant and let them decide how to proceed.** Do not translate or override acquirer messages in your application logic — the merchant knows their business context (e.g. "Pick-up card" requires a specific response from trained staff).

:::info Display `statusMessage` as-is
`statusMessage` is already localized to the cardholder's card language. Display it to the merchant without modification. Use `finStatus` for any programmatic branching in your code.
:::

---

## Handling each `finStatus`

`finStatus` is the top-level outcome field on every polled result (`GET /transaction-result/{id}`). Use it for all programmatic branching — not `statusMessage`, which is localized and varies by card locale.

| `finStatus` | Final? | Meaning | Recommended ISV action |
|---|---|---|---|
| `IN_PROGRESS` | No | Still processing on the terminal or gateway | Keep polling. Do not act. |
| `UNDEFINED` | No* | Terminal sent the transaction but no result was received | Do **not** retry. Follow the [UNDEFINED recovery flow](/reference/error-codes#undefined-status). *Treat as non-final until the recovery flow resolves it. |
| `AUTHORISED` | **Yes‡** | Approved | Wait for `transaction-result` delivery before recording as final — see note below. |
| `DECLINED` | **Yes** | Declined by gateway or acquirer | Display `statusMessage` to the merchant. No silent retry — only retry after cardholder action (new card, contact bank). |
| `FAILED` | **Yes** | Technical failure — acquirer may or may not have been reached | Do **not** retry without recovery. Follow the [recovery flow](/reference/transaction-recovery-cloud-api) first to determine if the transaction completed. |
| `PARTIAL_APPROVAL` | **No†** | Approved for less than the requested amount (US only). Terminal is still showing an accept/decline prompt — result can change. | **Do not save as final.** Continue polling `transaction-result` for at least 60 s or until a final result is delivered. If cardholder declines, the SDK auto-reverses and the result changes to `CANCELLED`. If accepted, present the partial amount and offer split tender for the remainder. |
| `CANCELLED` | **Yes** | Cardholder or merchant cancelled at terminal | No action required. Present the checkout UI again if needed. |
| `PROCESSED` | **Yes** | Completed for non-financial operations (tokenization, `tokenizeCard`) | Record the result. No further action needed. |
| `REFUNDED` | **Yes** | Refund processed successfully | Record the result. Do not retry. |
| `CAPTURED` | **Yes** | Pre-authorization captured | Record the result. Do not retry. |

`*UNDEFINED` — treat as non-final until the recovery flow resolves it.

`‡AUTHORISED` — in two specific edge cases, `/status` shows `AUTHORISED` while the SDK is still running a forced-reversal in the background; the final `transaction-result` will be `DECLINED`:
1. **Card removed mid-chip** — the chip card was pulled from the reader after the gateway authorized but before the full EMV flow completed. The SDK sends a forced-reversal and delivers a `DECLINED` result with `statusMessage` similar to "card declined the online authorization."
2. **Internal card application decline** — the card's on-chip application rejected the transaction after gateway authorization (e.g. IAD mismatch or internal card logic). Same forced-reversal flow.
In both cases the fix is the same: never save a `/status` `AUTHORISED` as final — always wait for `transaction-result` delivery or poll for at least 60 s.

`†PARTIAL_APPROVAL` — the terminal is showing an accept/decline prompt to the cardholder. The result is not final. Continue polling `transaction-result` for at least 60 seconds, or until a final result is delivered. If the cardholder declines, the SDK auto-reverses and the result changes to `CANCELLED`. See [Partial Approval](/reference/partial-approval#the-status-timing-trap).

---

## Setup and configuration errors

These occur when the merchant account or request is misconfigured — the terminal or gateway rejects the request before any card processing begins.

### Device connectivity

| Symptom | HTTP | Error | Fix |
|---|---|---|---|
| Terminal offline | `400` | `error 1002: No device listening` | Check device is powered on, connected to Wi-Fi, and the Handpoint Payments App is open |
| Terminal busy | `400` | `error 1001: Device is busy` | Wait 2–5 seconds and retry; another operation is in progress |
| Terminal not assigned | `400` | `error 1004: Auth not available` | Verify the terminal serial is assigned to this merchant in Handpoint Portal; use `GET /devices` to list valid serials |

### Request validation

| Symptom | HTTP | Error | Fix |
|---|---|---|---|
| Unknown field in request body | `422` | `must NOT have additional properties` | Remove the unrecognised field; check the field name against the API spec (e.g. `externalId` at top level is invalid — use `merchantAuth: [{ "externalId": "..." }]`) |
| `transactionReference` not UUID v4 | `400` | `TransactionReference with wrong uuidv4 format` | Generate a valid UUID v4 — version digit (position 13) must be `4`, variant digit (position 17) must be `8`, `9`, `a`, or `b` |
| Wrong API key | `403` | `No valid key found in header` | Check the `ApiKeyCloud` header value |

### Merchant capability errors

Capability restrictions produce different error shapes depending on which layer enforces them.

#### Enforcement tiers

| Capability | Enforcement | Immediate HTTP | Final outcome | How to detect |
|---|---|---|---|---|
| `preAuthAllowed` | Terminal | 202 | `finStatus: DECLINED` | Poll result |
| `refundAllowed` | Terminal | 202 | `finStatus: DECLINED` | Poll result |
| `partialReversalAllowed` | Gateway | 400 | — (synchronous) | `error.code: "3109"` |
| `supportsMoto` | Terminal | 202 | `finStatus: FAILED` | Poll result + `errorMessage` |
| `cardTokenProvider` | Terminal | 202 | `finStatus: DECLINED` | Poll result; `transactionID` is empty string |
| `debitCardsOnly` | Terminal / Acquirer | 202 | `finStatus: DECLINED` | Poll result (real acquirers only — see below) |

**Terminal-enforced:** gateway returns 202, terminal reads the card, then declines. Poll `GET /transaction-result/{transactionResultId}` for the final result.

**Gateway-enforced (`partialReversalAllowed` only):** gateway rejects synchronously with HTTP 400. No card is read; no polling needed.

#### Per-capability error examples

**Pre-auth not enabled** — `preAuthAllowed = false`

```json
// Poll result
{
  "finStatus": "DECLINED",
  "statusMessage": "Pre-authorizations are not enabled for this terminal",
  "arc": "1000",
  "cardEntryType": "ICC",
  "type": "PRE_AUTHORIZATION",
  "issuerResponseCode": "00"
}
```

> `issuerResponseCode: "00"` is a placeholder — the transaction did not reach the issuer. `statusMessage` is locale-dependent.

**Refund not enabled** — `refundAllowed = false`

```json
// Poll result
{
  "finStatus": "DECLINED",
  "statusMessage": "Refund not allowed",
  "arc": "0000",
  "cardEntryType": "ICC",
  "type": "REFUND"
}
```

> TSYSDummy rejects refunds synchronously with HTTP 400 when `refundAllowed=false`. ViscusDummy forwards to the terminal (202) and declines after card read. Handle both paths.

**Partial reversal not enabled** — `partialReversalAllowed = false`

```json
// HTTP 400 — synchronous, no terminal involvement
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Partial reversals are not supported",
    "code": "3109",
    "details": { "errorCode": "3109", "reason": "Partial reversals are not supported" }
  }
}
```

**MOTO not enabled** — `supportsMoto = false`

```json
// Poll result — finStatus is FAILED, not DECLINED
{
  "finStatus": "FAILED",
  "statusMessage": "HMAC mismatch",
  "errorMessage": "HMAC mismatch",
  "paymentScenario": "MOTO",
  "cardEntryType": "CNP",
  "type": "MOTO_SALE"
}
```

> `FAILED` (not `DECLINED`) — ViscusDummy returns a technical error when MOTO is disabled. Real acquirers may return `DECLINED`. Always branch on `finStatus`.

**Tokenization not enabled** — `cardTokenProvider = null`

```json
// Poll result — acquirer was never contacted
{
  "finStatus": "DECLINED",
  "statusMessage": "Card token failure",
  "cardToken": "",
  "transactionID": "",
  "requestedAmount": 0,
  "type": "SALE"
}
```

> Empty `transactionID` and `requestedAmount: 0` signal that the acquirer was never reached — the tokenization step failed before authorization.

#### Known limitation — `debitCardsOnly`

ViscusDummy and TSYSDummy do not enforce `debitCardsOnly` at the acquirer level. Credit card transactions return `AUTHORISED` in test environments. This restriction only takes effect on real acquirer configurations — do not validate this capability using dummy acquirers.

---

Setup-related declines are not integration errors. The ISV should always return the `statusMessage` to the merchant and keep request/response logs from the Cloud API for troubleshooting. The merchant escalates to their **onboarding partner** — not to Handpoint Integration Support. Handpoint Integration Support handles integration issues only (SDK behaviour, API contract questions, connectivity).

---

## Diagnosing an unexpected decline

When a transaction declines unexpectedly, work through these checks in order:

1. **Is `finStatus` = `DECLINED` and `arc` = `1000`?** → Gateway error (likely setup). Check [setup errors](#setup-and-configuration-errors).
2. **Is `finStatus` = `FAILED`?** → Technical failure. Do not retry — follow the [recovery flow](/reference/transaction-recovery-cloud-api).
3. **Does `statusMessage` look like an issuer message?** (e.g. "Insufficient funds", "Expired card", "Refer to card issuer") → Acquirer pass-through. Display as-is to the merchant.
4. **Is `finStatus` = `UNDEFINED`?** → Follow the [UNDEFINED recovery flow](/reference/error-codes#undefined-status).
5. **Did you receive HTTP 422?** → Request validation failed. Read `error.details` for the specific field that was rejected.

---

## Retry policy

| `finStatus` | Retry? | Notes |
|---|---|---|
| `AUTHORISED` | Never | Already approved |
| `DECLINED` (issuer) | Only with cardholder action | New card, contact bank — not a silent retry |
| `DECLINED` (gateway, setup) | After fixing config | Retry only after resolving the underlying setup issue |
| `FAILED` | Only after recovery confirms no result | Follow recovery flow first |
| `UNDEFINED` | Only after recovery confirms no result | Follow recovery flow first |
| `CANCELLED` | Safe to retry | Cardholder chose to cancel; present checkout again |
| `PARTIAL_APPROVAL` | Never the full amount | Handle the partial amount; accept or send reversal |
| `PROCESSED` | Never | Non-financial operation completed |
| `REFUNDED` | Never | Already refunded |
| `CAPTURED` | Never | Pre-auth already captured |

:::caution Never retry FAILED or UNDEFINED without recovery
Both `FAILED` and `UNDEFINED` mean the acquirer may have processed the transaction without your client receiving a result. Retrying without checking creates duplicate charges.
:::
