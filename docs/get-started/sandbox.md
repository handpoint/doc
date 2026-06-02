---
title: Sandbox guide
sidebar_position: 3
description: How to test integrations in the Handpoint sandbox environment.
---

# Sandbox guide

## What the sandbox does

The Handpoint sandbox simulates the payment gateway without processing real transactions. All amounts are approved unless you use a trigger amount.

## Trigger amounts

Send these exact amounts to simulate specific outcomes:

| Amount (cents) | Outcome |
|---|---|
| `100` | Approved |
| `200` | Declined |
| `300` | Referral (requires manual approval) |
| `400` | Timeout (no response from terminal) |
| `500` | Communication error |

## Sandbox limitations

- Tokenization returns synthetic tokens not usable in production
- Batch close always succeeds regardless of batch state
- Tip adjustment skips TMS enablement check
- Interac-specific behaviours (card-present void requirement) are not enforced

## Getting sandbox credentials

1. Register at [developer.handpoint.com](https://developer.handpoint.com)
2. Your sandbox API key is issued immediately
3. For SDK integrations requiring a physical terminal, see [Development hardware](development-hardware)

## Sandbox base URL

```
https://sandbox.handpoint.com
```
