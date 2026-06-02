---
title: Windows SDK (deprecated)
sidebar_position: 2
description: The Windows SDK is deprecated. Use the REST API instead.
---

:::danger Deprecated
The Windows SDK is a REST API wrapper with incomplete feature coverage. Use the **REST API** directly for all new integrations.
:::

# Windows SDK (deprecated)

The Windows SDK wrapped the Handpoint Cloud REST API for .NET/C# applications. Not all REST API capabilities were available, and it is no longer maintained.

## Migration

Replace Windows SDK calls with direct REST API calls using any HTTP client (e.g., `HttpClient` in C#):

| Windows SDK | REST API equivalent |
|---|---|
| `api.Sale(amount, currency)` | `POST /transaction { action: "SALE", amount, currency, terminal_serial_number }` |
| `api.Refund(amount, currency, ref)` | `POST /transaction { action: "REFUND", amount, currency, original_transaction_reference: ref }` |
| `api.Reversal(ref)` | `POST /transaction { action: "REVERSAL", original_transaction_reference: ref }` |
| `api.TipAdjustment(ref, tip)` | `POST /tipAdjustment { originalTransactionId: ref, tipAmount: tip }` |

See [Authentication](../get-started/authentication) for API key setup.
