---
title: JavaScript SDK (deprecated)
sidebar_position: 1
description: The JavaScript SDK is deprecated. Use the REST API instead.
---

:::danger Deprecated
The JavaScript SDK is a REST API wrapper with incomplete feature coverage. Use the **REST API** directly for all new integrations.
:::

# JavaScript SDK (deprecated)

The JavaScript SDK wrapped the Handpoint Cloud REST API. Not all REST API capabilities were available via the SDK, and it is no longer maintained.

## Migration

Replace JavaScript SDK calls with direct REST API calls:

| JavaScript SDK | REST API equivalent |
|---|---|
| `Handpoint.sale(amount, currency)` | `POST /transaction { action: "SALE", amount, currency, terminal_serial_number }` |
| `Handpoint.refund(amount, currency, ref)` | `POST /transaction { action: "REFUND", amount, currency, original_transaction_reference: ref }` |
| `Handpoint.reversal(ref)` | `POST /transaction { action: "REVERSAL", original_transaction_reference: ref }` |
| `Handpoint.tipAdjustment(ref, tip)` | `POST /tipAdjustment { originalTransactionId: ref, tipAmount: tip }` |

See [Authentication](../get-started/authentication) for API key setup.
