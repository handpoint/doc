---
title: Error codes
sidebar_position: 3
description: Error codes returned by the Handpoint API and SDK, with recovery guidance.
---

# Error codes

## HTTP status codes (REST API)

| Code | Meaning | Action |
|---|---|---|
| `200` | Success | — |
| `400` | Bad request — invalid parameters | Check request body; see error message |
| `401` | Unauthorized — invalid or missing API key | Verify API key |
| `404` | Terminal not found | Verify serial number |
| `409` | Conflict — terminal busy | Wait and retry |
| `500` | Server error | Retry with exponential backoff; contact support if persistent |

## Transaction result codes

| Code | Meaning | Recovery |
|---|---|---|
| `DECLINED` | Issuer declined | Ask cardholder to try another card |
| `TIMEOUT` | Terminal did not respond | Check connection; retry |
| `CANCELLED` | Cardholder cancelled at terminal | No action required |
| `COMMUNICATION_ERROR` | Network failure | Verify connectivity; retry |
| `AMOUNT_EXCEEDS_ORIGINAL` | Refund/reversal amount too high | Correct amount |
| `ORIGINAL_NOT_FOUND` | Referenced transaction not found | Verify reference; check if already settled |
| `BATCH_ALREADY_CLOSED` | Operation not allowed after batch close | Use refund instead |
| `OPERATION_NOT_SUPPORTED` | Acquirer does not support this operation | Check acquirer capabilities matrix |
| `TIP_ADJUSTMENT_NOT_ENABLED` | TMS not configured for tip adjustment | Contact Handpoint onboarding team |
| `MOTO_NOT_ENABLED` | MOTO not enabled for merchant | Contact Handpoint team |
| `TOKENIZATION_NOT_ENABLED` | Tokenization not configured | Contact Handpoint team |

## UNDEFINED status

A transaction in `UNDEFINED` status means the terminal did not return a result. This can occur due to network issues during processing.

**Recovery:** Do not retry immediately. Query the [Transaction Feed API](../back-office/transaction-feed-api) using the terminal serial number and approximate timestamp to check whether the transaction was processed.

:::caution PAX devices only
UNDEFINED status recovery applies to PAX terminals only. HiLite BT connections handle disconnection differently.
:::
