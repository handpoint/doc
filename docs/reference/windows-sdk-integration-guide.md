---
title: Windows SDK (.NET) — Integration Guide
sidebar_position: 6
description: Step-by-step guide to integrating the Handpoint Windows SDK for .NET — NuGet setup, initialization, transaction flow, recovery, and certification.
---

# Windows SDK (.NET) — Integration Guide

:::info AI coding agents
The Windows SDK connects via the Handpoint Cloud (PAX) or Bluetooth (HiLite). Load the Cloud API path skill for the underlying network protocol: [`/.well-known/skills/paths/cloud-api.md`](/.well-known/skills/paths/cloud-api.md)
:::

## What is the Windows SDK?

The Handpoint Windows SDK (`HandpointSDK`) is a .NET package for Windows desktop POS applications. It connects to PAX SmartPOS terminals via the Handpoint Cloud, or to HiLite readers via Bluetooth, and exposes a strongly-typed C# interface with event callbacks.

Choose this path when you are building .NET-based Windows POS software and want a native SDK experience rather than raw REST calls.

## When to use it

| ✅ Good fit | ❌ Not a good fit |
|---|---|
| Your POS is a .NET Windows desktop application | Your backend is server-side (Python, PHP, Node.js) — use the [Cloud REST API](/reference/cloud-api-integration-guide) |
| You prefer a strongly-typed C# interface with event callbacks | You need mobile / iOS support |
| You're targeting PAX Cloud or HiLite Bluetooth from a Windows app | You need cross-platform support |

## How it works

```
Your .NET Application
    │  hapi.Sale(amount, currency)
    ▼
Handpoint Windows SDK
    │  HTTPS (PAX Cloud) or Bluetooth (HiLite)
    ▼
PAX SmartPOS / HiLite Card Reader
    │  chip / tap / swipe + P2PE
    ▼
Acquirer / Card Network
    │
    ▼
EndOfTransaction(TransactionResult) callback
```

## Authentication

| Credential | Purpose | Provisioned by |
|---|---|---|
| `sharedSecret` | Authenticates the SDK to the Payments App / HiLite | Handpoint Integration Support |
| `cloudApiKey` | Required for PAX Cloud connection and `GetTransactionStatus` | Handpoint Integration Support |

Bluetooth (HiLite) mode does not require `cloudApiKey`.

## Setup

### 1. Request credentials

Contact your Handpoint Integration Support engineer for:
- A merchant `sharedSecret`
- A DEMO merchant `cloudApiKey` (PAX Cloud)
- A PAX DEMO terminal or HiLite reader

### 2. Install the SDK

**NuGet Package Manager:**
```
Install-Package HandpointSDK
```

**.NET CLI:**
```bash
dotnet add package HandpointSDK
```

RC (debug) builds are available from the Handpoint internal Nexus feed — contact Integration Support.

### 3. Implement Events.Required

```csharp
using com.handpoint.api;

public class PaymentHandler : Events.Required, Events.Status
{
    private Hapi hapi;

    public void Initialize()
    {
        var credentials = new HandpointCredentials(
            sharedSecret: "0102030405060708091011121314151617181920212223242526272829303132",
            cloudApiKey:  "YOUR_CLOUD_API_KEY"  // omit for Bluetooth-only
        );
        hapi = HapiFactory.GetAsyncInterface(this, credentials);
    }

    // Required: fires when any operation completes
    // ⚠ Runs on a background thread — marshal to UI thread before updating controls
    public void EndOfTransaction(TransactionResult result, Device device)
    {
        Application.Current.Dispatcher.Invoke(() =>
        {
            HandleResult(result);
        });
    }

    // Required: SDK status updates
    public void CurrentTransactionStatus(StatusInfo status, Device device) { }

    // Required: list of discovered devices (Cloud discovery or BT search)
    public void DeviceDiscoveryFinished(List<Device> devices) { }

    // Required: signature prompt (HiLite — accept and display merchant receipt)
    public void SignatureRequired(SignatureRequest request, Device device)
    {
        hapi.SignatureResult(true);
    }

    // Required (Events.TransactionResultReady): result from GetTransactionStatus
    public void TransactionResultReady(TransactionResult result, Device device) { }
}
```

## Connecting to a terminal

### PAX SmartPOS — Cloud

```csharp
// Direct connect by serial number + model
var device = new Device(
    name:             "MyTerminal",
    address:          "0821032395-PAXA920",   // serialNumber-terminalType
    port:             "",
    connectionMethod: ConnectionMethod.CLOUD
);
hapi.Connect(device);
```

Or discover available terminals:
```csharp
hapi.SearchDevices(ConnectionMethod.CLOUD);
// DeviceDiscoveryFinished fires with the list
```

### HiLite — Bluetooth

```csharp
// Discover (terminal must be paired in Windows Bluetooth settings first)
hapi.SearchDevices(ConnectionMethod.BLUETOOTH);

// Or direct connect by MAC address (always UPPER CASE)
var device = new Device("PP0513901435", "68:AA:D2:00:D5:27", "", ConnectionMethod.BLUETOOTH);
hapi.Connect(device);
```

## Your first transaction

```csharp
// Amount in smallest currency unit — €10.00 = BigInteger(1000)
OperationStartResult op = hapi.Sale(new BigInteger(1000), Currency.EUR);

// op.OperationStarted == true → SDK accepted the command
// Final result arrives in EndOfTransaction (NOT the return value of Sale)
if (!op.OperationStarted)
{
    // SDK rejected — check terminal connection
}
```

:::warning EndOfTransaction runs on a background thread
Update UI controls only after marshalling to the UI thread with `Dispatcher.Invoke` (WPF) or `Invoke` (WinForms).
:::

### Reading the result

```csharp
private void HandleResult(TransactionResult result)
{
    switch (result.FinStatus)
    {
        case FinancialStatus.AUTHORISED:
            DisplayReceipts(result.MerchantReceipt, result.CustomerReceipt);
            break;
        case FinancialStatus.DECLINED:
            ShowDeclined();
            break;
        case FinancialStatus.PARTIALLY_APPROVED:
            HandlePartialApproval(result);
            break;
    }
}
```

## Transaction recovery

```csharp
// Save the reference before calling Sale
var transactionReference = Guid.NewGuid().ToString();
db.SavePendingTransaction(transactionReference);

var options = new SaleOptions { TransactionReference = transactionReference };
hapi.Sale(new BigInteger(1000), Currency.EUR, options);

// If EndOfTransaction doesn't fire within 90 s:
hapi.GetTransactionStatus(transactionReference);
// Result arrives in TransactionResultReady
```

:::caution CloudApiKey required for GetTransactionStatus
`GetTransactionStatus` throws `SettingsPropertyNotFoundException` if `cloudApiKey` was not supplied during initialisation. Always include it in production integrations.
:::

| `FinStatus` | Action |
|---|---|
| `IN_PROGRESS` / `UNDEFINED` | Poll again in 10 s |
| `AUTHORISED` (no prior record) | Send automatic reversal via Cloud API |
| `DECLINED` / `FAILED` / `CANCELLED` | Clear pending record |
| `PARTIALLY_APPROVED` | Wait 60 s, then handle split tender or reverse |

→ Full implementation: [Transaction Recovery — Windows SDK](/reference/transaction-recovery-windows-sdk)

## Operations available

| Operation | Method |
|---|---|
| **Sale** | `hapi.Sale(amount, currency, options?)` |
| **Refund** | `hapi.Refund(amount, currency, options?)` |
| **Reversal** | `hapi.SaleReversal(amount, currency, options?)` |
| **Pre-Authorization** | `hapi.PreAuthorization(amount, currency, options?)` |
| **Pre-Auth Capture** | `hapi.PreAuthorizationCapture(amount, currency, options?)` |
| **Pre-Auth Increase** | `hapi.PreAuthorizationIncrease(amount, currency, options?)` |
| **Pre-Auth Reversal** | `hapi.PreAuthorizationReversal(amount, currency, options?)` |
| **MOTO Sale** | `hapi.MoToSale(amount, currency, options?)` |
| **Tokenize Card** | `hapi.TokenizeCard(options?)` |
| **Sale and Tokenize** | `hapi.SaleAndTokenizeCard(amount, currency, options?)` |
| **Tip Adjustment** | `hapi.TipAdjustment(amount, originalTransactionId)` — returns `Task<FinancialStatus>` |
| **Get Transaction Status** | `hapi.GetTransactionStatus(transactionReference)` |
| **Stop Transaction** | `hapi.StopCurrentTransaction()` |

Acquirer-specific availability: [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) — `cloud-api` column (same underlying path as Cloud REST API for PAX).

## Simulator (no hardware)

```csharp
hapi.Connect(new Device("Simulator", "Port", "Address", ConnectionMethod.Simulator));
```

Control the simulated response via the amount (3rd and 4th positions from the right):

| Amount (last 4 digits) | Behaviour |
|---|---|
| `X00XX` | Signature — Authorised |
| `X01XX` | Signature — Declined |
| `X10XX` | PIN — Authorised |
| `X11XX` | PIN — Declined |

## Validation & certification

**Required for every integration:**

- [ ] `transactionReference` persisted before `Sale()` call
- [ ] `EndOfTransaction` thread-safety implemented
- [ ] Recovery tested — app restarted mid-transaction, outcome resolved via `GetTransactionStatus`
- [ ] Partial approval handled
- [ ] `cloudApiKey` included in credentials (required for `GetTransactionStatus`)

→ Full scenario checklist: [Validate your integration](/reference/validate-integration)

→ Error codes: [Error codes](/reference/error-codes)
