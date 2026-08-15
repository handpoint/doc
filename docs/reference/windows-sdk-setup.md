---
title: Windows SDK — Setup & Integration
sidebar_position: 3
description: Complete guide to integrating the Handpoint Windows SDK into a C#/.NET POS application — NuGet install, Events.Required interface, credentials, connection, and transactions.
---

# Windows SDK — Setup & Integration

The Handpoint Windows SDK (`HandpointSDK` on NuGet) provides a strongly-typed C# interface for PAX SmartPOS and HiLite Bluetooth terminals. Your POS application calls methods like `hapi.Sale()` and `hapi.Refund()`, and receives results via event callbacks — no raw HTTP or WebSocket management required.

**Supported environments:** .NET / .NET Framework on Windows (see the NuGet package target for the exact `TargetFramework`).  
**Hardware:** PAX SmartPOS (Cloud connection) and HiLite Bluetooth readers (direct Bluetooth).  
**PCI scope:** Out of scope — card data is captured by the terminal, never by your application.

---

## Prerequisites

| Requirement | Detail |
|---|---|
| .NET / .NET Framework | Check the NuGet package page for the supported target framework |
| NuGet package | `HandpointSDK` — available on [nuget.org](https://www.nuget.org) |
| Cloud API Key | Required for PAX SmartPOS (Cloud connection) — obtain from the Handpoint TMS |
| Shared Secret (SSK) | Required for HiLite Bluetooth — obtain from setup.handpoint.com per reader |
| Bluetooth pairing | HiLite readers must be paired in Windows Bluetooth settings before connecting |

---

## Step 1 — Install the NuGet package

### .NET CLI

```bash
dotnet add package HandpointSDK
```

### Package Manager Console (Visual Studio)

```powershell
Install-Package HandpointSDK
```

### Internal Nexus feed (for RC builds)

```bash
dotnet nuget add source "http://nexus.handpoint.ninja:8081/repository/nuget-hosted/index.json" \
  --name handpoint-nexus \
  --username <nexus_user> --password <nexus_password>

dotnet add package HandpointSDK --source handpoint-nexus
```

---

## Step 2 — Implement Events.Required

All transaction results and device events are delivered through the `Events.Required` interface. Create a class that implements it and can safely receive callbacks from a background thread.

```csharp
using com.handpoint.api;
using System;
using System.Collections.Generic;

public class PaymentHandler : Events.Required
{
    // Final transaction result — authorised, declined, cancelled, or failed
    public void EndOfTransaction(TransactionResult result, Device device)
    {
        switch (result.FinStatus)
        {
            case FinancialStatus.AUTHORISED:
                Console.WriteLine($"Approved: {result.TransactionID}");
                Console.WriteLine(result.CustomerReceipt);
                break;
            case FinancialStatus.DECLINED:
                Console.WriteLine("Declined");
                break;
            case FinancialStatus.CANCELLED:
                Console.WriteLine("Cancelled by cardholder");
                break;
            case FinancialStatus.FAILED:
                Console.WriteLine($"Failed: {result.ErrorMessage}");
                break;
        }
    }

    // Intermediate status updates during a transaction
    public void CurrentTransactionStatus(StatusInfo info, Device device)
    {
        Console.WriteLine($"Status: {info.Status}");
    }

    // Called after SearchDevices() completes
    public void DeviceDiscoveryFinished(List<Device> devices)
    {
        foreach (var d in devices)
            Console.WriteLine($"Found: {d.Name} [{d.Address}]");
    }

    // Called when a signature must be collected from the cardholder
    public void SignatureRequired(SignatureRequest request, Device device)
    {
        // Display request.MerchantReceipt to the operator
        // Then call hapi.SignatureResult(accepted: true/false)
    }
}
```

:::tip Thread safety
`EndOfTransaction` is called on a background thread. If you update UI controls from inside it, marshal back to the UI thread (`Dispatcher.Invoke`, `Control.Invoke`, etc.).
:::

---

## Step 3 — Create credentials

### PAX SmartPOS — Cloud connection

```csharp
var credentials = new HandpointCredentials(
    sharedSecret: "your-64-char-hex-ssk",
    cloudApiKey:  "your-cloud-api-key"
);
```

### HiLite — Bluetooth connection

```csharp
var credentials = new HandpointCredentials(sharedSecret: "your-64-char-hex-ssk");
```

The Shared Secret is a 64-character hex string unique to each reader. Obtain it from [setup.handpoint.com](https://setup.handpoint.com) for each device.

---

## Step 4 — Initialise Hapi

Call `HapiFactory.GetAsyncInterface()` once at application start. Store the returned `Hapi` instance for the lifetime of the application.

```csharp
using com.handpoint.api;

PaymentHandler handler = new PaymentHandler();
var credentials = new HandpointCredentials("your-ssk", "your-cloud-api-key");

Hapi hapi = HapiFactory.GetAsyncInterface(handler, credentials);
```

With custom settings:

```csharp
Settings settings = new Settings();
// configure timeout, locale, etc.

Hapi hapi = HapiFactory.GetAsyncInterface(handler, credentials, settings);
```

---

## Step 5 — Connect to a terminal

### PAX SmartPOS (Cloud)

```csharp
var device = new Device(
    name:             "PAX-A920-Pro",
    address:          "1851075595",       // serial number from TMS
    port:             "443",
    connectionMethod: ConnectionMethod.CLOUD
);

bool connected = hapi.Connect(device);
if (!connected) Console.WriteLine("Connection failed");
```

### HiLite (Bluetooth)

Scan for paired readers, then connect from the discovery callback:

```csharp
// Trigger scan — results arrive in DeviceDiscoveryFinished
hapi.SearchDevices(ConnectionMethod.BLUETOOTH);

// --- inside DeviceDiscoveryFinished ---
bool connected = hapi.Connect(devices[0]);
```

Or connect directly to an already-paired reader without scanning:

```csharp
var paired = hapi.GetPairedDevices(ConnectionMethod.BLUETOOTH);
if (paired.Count > 0) hapi.Connect(paired[0]);
```

---

## Step 6 — Run a sale

Amounts are always in the **smallest currency unit** — pence for GBP, cents for USD. Always use `BigInteger`, never `decimal` or `double`.

```csharp
using System.Numerics;

BigInteger amount   = new BigInteger(1250);   // $12.50
Currency   currency = Currency.USD;

OperationStartResult op = hapi.Sale(amount, currency);

if (!op.OperationStarted)
{
    Console.WriteLine("Could not start sale: " + op.ErrorMessage);
    return;
}
// Wait for EndOfTransaction callback for the final result
```

With optional metadata:

```csharp
var map = new Dictionary<string, string>
{
    { "customerReference", "ORDER-1234" }
};

hapi.Sale(amount, currency, map);
```

:::info OperationStartResult
`op.OperationStarted` is `true` when the SDK accepted the command and forwarded it to the terminal. It does **not** mean the transaction was approved — the final outcome arrives in `EndOfTransaction`.
:::

---

## All financial operations

Every operation follows the same pattern: call the method, check `OperationStarted`, then handle the result in `EndOfTransaction`.

```csharp
// Refund — standalone (no card on file)
hapi.Refund(amount, Currency.USD);

// Linked refund — tied to a previous sale
hapi.Refund(amount, Currency.USD, originalTransactionID: "TXN-ABCD");

// Void a sale (reversal)
hapi.SaleReversal(amount, Currency.USD, originalTransactionID: "TXN-ABCD");

// Void a refund
hapi.RefundReversal(amount, Currency.USD, originalTransactionID: "TXN-ABCD");

// Pre-authorisation (hold funds)
hapi.PreAuthorization(amount, Currency.USD);
// → capture or void using the TransactionID from EndOfTransaction

// Capture a pre-auth
hapi.PreAuthorizationCapture(amount, Currency.USD, originalTransactionID: "TXN-PREAUTH");

// Increase a pre-auth hold before capture
hapi.PreAuthorizationIncrease(newAmount, Currency.USD, originalTransactionID: "TXN-PREAUTH");

// Void a pre-auth
hapi.PreAuthorizationReversal(originalTransactionID: "TXN-PREAUTH");

// Mail-order / telephone-order sale (card data entered on terminal screen)
hapi.MoToSale(amount, Currency.USD);

// Tokenise a card without charging
hapi.TokenizeCard();

// Sale + tokenise in one terminal interaction
hapi.SaleAndTokenizeCard(amount, Currency.USD);
```

### Tip adjustment

`TipAdjustment` adjusts the settled amount after authorisation and returns a `Task<FinancialStatus>`:

```csharp
BigInteger tipAmount = new BigInteger(200);   // $2.00

FinancialStatus status = await hapi.TipAdjustment(tipAmount, originalTransactionID: "TXN-ABCD");
Console.WriteLine("Tip status: " + status);
```

### Transaction status query

Query the Cloud for the current status of any transaction — useful after a network interruption:

```csharp
TransactionResult status = hapi.GetTransactionStatus("transactionReference-uuid");
Console.WriteLine("Status: " + status.FinStatus);
```

See [Transaction Recovery — Windows SDK](transaction-recovery-windows-sdk.md) for the full recovery algorithm.

---

## Signature handling

When a cardholder's signature is required, `SignatureRequired` fires. Display the receipt to the operator and confirm the result:

```csharp
public void SignatureRequired(SignatureRequest request, Device device)
{
    // Show request.MerchantReceipt to the operator
    bool accepted = ShowSignatureDialog(request.MerchantReceipt);
    hapi.SignatureResult(accepted);
}
```

---

## Utility operations

```csharp
// Cancel a transaction in progress
hapi.StopCurrentTransaction();

// Trigger a firmware update on the terminal
hapi.Update();

// Print a receipt on the terminal printer
hapi.PrintReceipt(receiptHtmlString);

// Disconnect from the terminal
hapi.Disconnect();

// Check SDK version
string version = hapi.Version;
```

---

## Complete minimal example

```csharp
using com.handpoint.api;
using System;
using System.Collections.Generic;
using System.Numerics;

public class Program : Events.Required
{
    private static Hapi hapi;

    public static void Main()
    {
        var handler     = new Program();
        var credentials = new HandpointCredentials("your-ssk", "your-cloud-api-key");

        hapi = HapiFactory.GetAsyncInterface(handler, credentials);

        var device = new Device("PAX-A920", "1851075595", "443", ConnectionMethod.CLOUD);
        if (!hapi.Connect(device))
        {
            Console.WriteLine("Could not connect");
            return;
        }

        var op = hapi.Sale(new BigInteger(1000), Currency.USD);
        if (!op.OperationStarted)
            Console.WriteLine("Sale could not start: " + op.ErrorMessage);

        // Wait for EndOfTransaction...
        Console.ReadLine();
    }

    public void EndOfTransaction(TransactionResult result, Device device)
    {
        Console.WriteLine($"Result: {result.FinStatus} — {result.TransactionID}");
    }

    public void CurrentTransactionStatus(StatusInfo info, Device device)
        => Console.WriteLine($"Status: {info.Status}");

    public void DeviceDiscoveryFinished(List<Device> devices) { }

    public void SignatureRequired(SignatureRequest request, Device device)
        => hapi.SignatureResult(true);
}
```

---

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| `ArgumentException: Unable to set a null shared secret` | `HandpointCredentials.SharedSecret` is empty — check SSK from setup.handpoint.com |
| `DeviceDiscoveryFinished` returns empty | Reader is not paired in Windows Bluetooth settings |
| `EndOfTransaction` never fires | Verify `Events.Required` is registered; check that the callback thread is not blocked |
| `OperationStarted` is false immediately | Another transaction is already in progress; check `HapiManager.InTransaction()` |
| Cloud terminal not responding | Check `CloudApiKey` is correct and terminal is online in the TMS |

---

## Next steps

- [Transaction Recovery — Windows SDK](transaction-recovery-windows-sdk.md) — handling dropped connections
- [Authentication](authentication.md) — API key and SSK setup
- [Testing edge cases](testing-edge-cases.md) — simulating declines, timeouts, and reversals
