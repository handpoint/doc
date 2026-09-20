---
title: Windows SDK (.NET) — Integration Guide
sidebar_position: 6
description: Step-by-step guide to integrating the Handpoint Windows SDK for .NET — NuGet setup, initialization, transaction flow, recovery, and certification.
---

# Windows SDK (.NET) — Integration Guide

:::info AI coding agents
The Windows SDK connects via the Handpoint Cloud (PAX) or Bluetooth (HiLite). Load the Cloud API path skill for the underlying network protocol: [`/.well-known/skills/paths/cloud-api.md`](pathname:///.well-known/skills/paths/cloud-api.md)
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
        case FinancialStatus.PARTIAL_APPROVAL:
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
| `PARTIAL_APPROVAL` | Wait 60 s, then handle split tender or reverse |

→ Full implementation: [Transaction Recovery — Windows SDK](/reference/transaction-recovery-windows-sdk)

## Operations available

| Operation | Method |
|---|---|
| **Sale** | `hapi.Sale(amount, currency, options?)` |
| **Refund** | `hapi.Refund(amount, currency, options?)` |
| **Sale Reversal** | `hapi.SaleReversal(amount, currency, originalTransactionID)` |
| **Refund Reversal** | `hapi.RefundReversal(amount, currency, originalTransactionID)` |
| **Pre-Authorization** | `hapi.PreAuthorization(amount, currency, options?)` |
| **Pre-Auth Capture** | `hapi.PreAuthorizationCapture(amount, currency, originalTransactionID)` |
| **Pre-Auth Increase** | `hapi.PreAuthorizationIncrease(amount, currency, originalTransactionID)` |
| **Pre-Auth Reversal** | `hapi.PreAuthorizationReversal(originalTransactionID)` |
| **MOTO Sale** | `hapi.MoToSale(amount, currency, options?)` |
| **MOTO Refund** | `hapi.MoToRefund(amount, currency, options?)` |
| **MOTO Reversal** | `hapi.MoToReversal(originalTransactionID)` |
| **MOTO Pre-Authorization** | `hapi.moToPreAuthorization(amount, currency, options?)` |
| **Tokenize Card** | `hapi.TokenizeCard(options?)` |
| **Sale and Tokenize** | `hapi.SaleAndTokenizeCard(amount, currency, options?)` |
| **Tip Adjustment** | `hapi.TipAdjustment(tipAmount, originalTransactionID)` — returns `Task<FinancialStatus>` |
| **Print Receipt** | `hapi.PrintReceipt(receipt)` — returns `bool` |
| **Signature Result** | `hapi.SignatureResult(accepted)` — returns `bool` |
| **Get Transaction Status** | `hapi.GetTransactionStatus(transactionReference)` |
| **Stop Transaction** | `hapi.StopCurrentTransaction()` |

Acquirer-specific availability: [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) — `cloud-api` column (same underlying path as Cloud REST API for PAX).

---

## Operations Reference

Every financial operation returns `OperationStartResult` synchronously. Check `op.OperationStarted` before waiting for `EndOfTransaction`. The `TransactionReference` inside `OperationStartResult` **must be persisted** before the call — it is the recovery key if `EndOfTransaction` does not fire.

:::caution Duplicate check enabled by default
From Windows SDK 3.3.0, duplicate-payment detection is on by default when used with Handpoint Payments App v4.0.0+. If the same card is used twice for the same amount within 5 minutes, the terminal prompts the cardholder to confirm or cancel. Disable per-transaction with `XmlTag.DuplicateCheck.Tag(), "0"` in the options map.
:::

### Sale

Initiates a card-present sale transaction. Requires the cardholder to tap, insert, or swipe.

**Signature**

```csharp
OperationStartResult Sale(BigInteger amount, Currency currency);
OperationStartResult Sale(BigInteger amount, Currency currency, Dictionary<string, string> map);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | `BigInteger` | Yes | Amount in minor currency unit (e.g. 1000 = $10.00) |
| `currency` | `Currency` | Yes | ISO currency enum value |
| `map` | `Dictionary<string, string>` | No | Optional parameters — CustomerReference, Metadata1–5, Budget, DuplicateCheck, MoneyRemittance |

**Example**

```csharp
// Basic
OperationStartResult op = hapi.Sale(new BigInteger("1000"), Currency.EUR);

// With customer reference and metadata
var map = new Dictionary<string, string>();
map.Add(XmlTag.CustomerReference.Tag(), "ORDER-1234");
map.Add(XmlTag.Metadata1.Tag(), "table-7");
OperationStartResult op = hapi.Sale(new BigInteger("1000"), Currency.EUR, map);
```

**Events:** `CurrentTransactionStatus` → (optionally) `SignatureRequired` → `EndOfTransaction`

---

### Sale And Tokenize Card

Performs a sale and simultaneously returns a card token. Acquirer support required — confirm with Handpoint.

**Signature**

```csharp
OperationStartResult SaleAndTokenizeCard(BigInteger amount, Currency currency);
OperationStartResult SaleAndTokenizeCard(BigInteger amount, Currency currency, Dictionary<string, string> map);
```

Parameters are identical to `Sale`. The token is returned in `TransactionResult.cardToken`.

**Example**

```csharp
OperationStartResult op = hapi.SaleAndTokenizeCard(new BigInteger("1000"), Currency.GBP);

// In EndOfTransaction:
Console.WriteLine("Card token: " + result.CardToken);
```

**Events:** `CurrentTransactionStatus` → (optionally) `SignatureRequired` → `EndOfTransaction`

---

### Sale Reversal (Void)

Reverses (voids) a previous sale. Must be performed within the same batch day or within 24 hours. Requires the original `efttransactionID` from the sale's `TransactionResult`.

**Signature**

```csharp
OperationStartResult SaleReversal(BigInteger amount, Currency currency, string originalTransactionID);
OperationStartResult SaleReversal(BigInteger amount, Currency currency, string originalTransactionID, Dictionary<string, string> map);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | `BigInteger` | Yes | Must match the original sale amount |
| `currency` | `Currency` | Yes | Must match the original sale currency |
| `originalTransactionID` | `string` | Yes | `efttransactionID` from the original sale result |
| `map` | `Dictionary<string, string>` | No | Optional parameters |

**Example**

```csharp
OperationStartResult op = hapi.SaleReversal(
    new BigInteger(1000),
    Currency.GBP,
    "00000000-0000-0000-0000-000000000000"
);
```

**Events:** `CurrentTransactionStatus` → `EndOfTransaction`

---

### Refund

Returns funds from the merchant to the cardholder. The cardholder must present their card. For Interac (Canadian Debit), refunds are only processed before Interac's nightly batch close.

**Signature**

```csharp
OperationStartResult Refund(BigInteger amount, Currency currency);
OperationStartResult Refund(BigInteger amount, Currency currency, string originalTransactionID);
OperationStartResult Refund(BigInteger amount, Currency currency, Dictionary<string, string> map);
OperationStartResult Refund(BigInteger amount, Currency currency, string originalTransactionID, Dictionary<string, string> map);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | `BigInteger` | Yes | Refund amount in minor units |
| `currency` | `Currency` | Yes | Currency |
| `originalTransactionID` | `string` | No | Links to a previous sale. When provided, limits refund to original amount. |
| `map` | `Dictionary<string, string>` | No | Optional parameters |

**Example**

```csharp
// Standalone refund
OperationStartResult op = hapi.Refund(new BigInteger(1000), Currency.GBP);

// Linked refund
OperationStartResult op = hapi.Refund(
    new BigInteger(1000),
    Currency.GBP,
    "00000000-0000-0000-0000-000000000000"
);
```

**Events:** `CurrentTransactionStatus` → (optionally) `SignatureRequired` → `EndOfTransaction`

---

### Refund Reversal

Reverses a previously issued refund. Must be performed on the same day as the refund.

**Signature**

```csharp
OperationStartResult RefundReversal(BigInteger amount, Currency currency, string originalTransactionID);
OperationStartResult RefundReversal(BigInteger amount, Currency currency, string originalTransactionID, Dictionary<string, string> map);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | `BigInteger` | Yes | Must match the original refund amount |
| `currency` | `Currency` | Yes | Must match the original refund currency |
| `originalTransactionID` | `string` | Yes | `efttransactionID` from the original refund |
| `map` | `Dictionary<string, string>` | No | Optional parameters |

**Example**

```csharp
OperationStartResult op = hapi.RefundReversal(
    new BigInteger(1000),
    Currency.GBP,
    "00000000-0000-0000-0000-000000000000"
);
```

**Events:** `CurrentTransactionStatus` → (optionally) `SignatureRequired` → `EndOfTransaction`

---

### MoTo Sale

Mail order / telephone order sale. Card-not-present — the cardholder keys their card details on the terminal screen. No physical card is presented.

**Signature**

```csharp
OperationStartResult MoToSale(BigInteger amount, Currency currency);
OperationStartResult MoToSale(BigInteger amount, Currency currency, Dictionary<string, string> map);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | `BigInteger` | Yes | Amount in minor units |
| `currency` | `Currency` | Yes | Currency |
| `map` | `Dictionary<string, string>` | No | Optional parameters |

**Example**

```csharp
OperationStartResult op = hapi.MotoSale(new BigInteger("1000"), Currency.EUR);
```

**Events:** `CurrentTransactionStatus` → `EndOfTransaction` (no `SignatureRequired` for MOTO)

---

### MoTo Refund

MOTO refund — card-not-present, cardholder keys card details on the terminal. Can optionally be linked to a previous sale.

**Signature**

```csharp
OperationStartResult MoToRefund(BigInteger amount, Currency currency);
OperationStartResult MoToRefund(BigInteger amount, Currency currency, string originalTransactionId);
OperationStartResult MoToRefund(BigInteger amount, Currency currency, Dictionary<string, string> map);
OperationStartResult MoToRefund(BigInteger amount, Currency currency, string originalTransactionId, Dictionary<string, string> map);
```

**Example**

```csharp
// Standalone MOTO refund
OperationStartResult op = hapi.MotoRefund(new BigInteger(1000), Currency.EUR);

// Linked to original sale
OperationStartResult op = hapi.MotoRefund(
    new BigInteger(1000),
    Currency.EUR,
    "00000000-0000-0000-0000-000000000000"
);
```

---

### MoTo Reversal

Reverses a previous MOTO sale or MOTO refund. Must be within 24 hours.

**Signature**

```csharp
OperationStartResult MoToReversal(string originalTransactionId);
OperationStartResult MoToReversal(string originalTransactionId, Dictionary<string, string> map);
```

**Example**

```csharp
OperationStartResult op = hapi.MotoReversal("00000000-0000-0000-0000-000000000000");
```

---

### MoTo Pre-Authorization

Initiates a MOTO pre-auth — card-not-present hold on funds. Cardholder keys card details on the terminal.

**Signature**

```csharp
OperationStartResult MoToPreAuthorization(BigInteger amount, Currency currency);
OperationStartResult MoToPreAuthorization(BigInteger amount, Currency currency, Dictionary<string, string> map);
```

**Example**

```csharp
OperationStartResult op = hapi.moToPreAuthorization(new BigInteger(1000), Currency.EUR);
```

---

### Pre-Authorization

Holds funds on the cardholder's card without debiting them immediately. Used for hotel, car rental, restaurant, and similar industries. The cardholder must be present.

**Signature**

```csharp
OperationStartResult PreAuthorization(BigInteger amount, Currency currency);
OperationStartResult PreAuthorization(BigInteger amount, Currency currency, Dictionary<string, string> map);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | `BigInteger` | Yes | Amount to hold, in minor units |
| `currency` | `Currency` | Yes | Currency |
| `map` | `Dictionary<string, string>` | No | Optional parameters |

**Example**

```csharp
OperationStartResult op = hapi.PreAuthorization(new BigInteger("5000"), Currency.USD);
// Save efttransactionID from EndOfTransaction for later capture/increase/reversal
```

**Notes:**
- A pre-auth can only be captured **once**.
- Capture expiry rules vary by card scheme — Visa is up to 31 days for lodging/car rental, same day for restaurants.
- Mastercard allows 30 days, Amex allows 7 days for all MCCs.
- Capturing after scheme expiry risks failed capture and higher interchange fees.

**Events:** `CurrentTransactionStatus` → (optionally) `SignatureRequired` → `EndOfTransaction`

---

### Pre-Authorization Increase / Decrease

Adjusts the held amount for an existing pre-auth before capture. Pass a **positive** amount to increase the hold, a **negative** amount to decrease (partially release) it.

**Signature**

```csharp
OperationStartResult PreAuthorizationIncrease(BigInteger amount, Currency currency, string originalTransactionID);
OperationStartResult PreAuthorizationIncrease(BigInteger amount, Currency currency, string originalTransactionID, Dictionary<string, string> map);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | `BigInteger` | Yes | Delta to add (positive) or release (negative) |
| `currency` | `Currency` | Yes | Currency |
| `originalTransactionID` | `string` | Yes | `efttransactionID` from the original pre-auth |
| `map` | `Dictionary<string, string>` | No | Optional parameters |

**Example**

```csharp
// Increase by $10.00
hapi.PreAuthorizationIncrease(new BigInteger("1000"), Currency.USD, originalPreAuthId);

// Decrease by $5.00
hapi.PreAuthorizationIncrease(new BigInteger("-500"), Currency.USD, originalPreAuthId);
```

**Events:** `CurrentTransactionStatus` → (optionally) `SignatureRequired` → `EndOfTransaction`

---

### Pre-Authorization Capture

Finalises a pre-auth and debits the cardholder. A pre-auth can only be captured **once**. If the capture is for an incorrect amount, attempt a capture reversal before the nightly batch.

**Signature**

```csharp
OperationStartResult PreAuthorizationCapture(BigInteger amount, Currency currency, string originalTransactionID);
OperationStartResult PreAuthorizationCapture(BigInteger amount, Currency currency, string originalTransactionID, Dictionary<string, string> map);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `amount` | `BigInteger` | Yes | Final capture amount |
| `currency` | `Currency` | Yes | Currency |
| `originalTransactionID` | `string` | Yes | `efttransactionID` from the original pre-auth |
| `map` | `Dictionary<string, string>` | No | Optional parameters |

**Example**

```csharp
OperationStartResult op = hapi.PreAuthorizationCapture(
    new BigInteger("5000"),
    Currency.USD,
    originalPreAuthId
);
// EndOfTransaction will return FinancialStatus.CAPTURED on success
```

**Events:** `CurrentTransactionStatus` → (optionally) `SignatureRequired` → `EndOfTransaction`

---

### Pre-Authorization / Capture Reversal

Releases the entire held amount for an un-captured pre-auth, or reverses an already-captured pre-auth (before the nightly batch settles it, and only where acquirer supports it).

When reversing a capture, the status reverts: `CAPTURED` → `AUTHORISED`.

**Signature**

```csharp
OperationStartResult PreAuthorizationReversal(string originalTransactionID);
OperationStartResult PreAuthorizationReversal(string originalTransactionID, Dictionary<string, string> map);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `originalTransactionID` | `string` | Yes | `efttransactionID` from the pre-auth or capture to reverse |
| `map` | `Dictionary<string, string>` | No | Optional parameters |

**Example**

```csharp
OperationStartResult op = hapi.PreAuthorizationReversal("00000000-0000-0000-0000-000000000000");
```

**Events:** `CurrentTransactionStatus` → (optionally) `SignatureRequired` → `EndOfTransaction`

---

### Tokenize Card

Tokenises a card without charging it. No financial transaction occurs. Acquirer support required.

**Signature**

```csharp
OperationStartResult TokenizeCard();
OperationStartResult TokenizeCard(Dictionary<string, string> map);
```

**Example**

```csharp
OperationStartResult op = hapi.TokenizeCard();
// Token returned in EndOfTransaction: result.CardToken
```

**Events:** `CurrentTransactionStatus` → (optionally) `SignatureRequired` → `EndOfTransaction`

---

### Tip Adjustment

Adjusts the tip (gratuity) on an already-authorised sale before the processor's nightly batch settlement. Only available in the United States restaurant industry. Processors: TSYS and VANTIV. Hardware: HiLite only.

If two adjustments are sent for the same transaction, the second overrides the first.

**Signature**

```csharp
Task<FinancialStatus> TipAdjustment(BigInteger tipAmount, string originalTransactionID);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `tipAmount` | `BigInteger` | Yes | New tip amount in minor units |
| `originalTransactionID` | `string` | Yes | `efttransactionID` from the original sale |

**Example**

```csharp
Task<FinancialStatus> task = hapi.TipAdjustment(
    BigInteger.Parse("200"),          // $2.00 tip
    "2bc23910-c3b3-11e6-9e62-07b2a5f091ec"
);
FinancialStatus status = await task;

switch (status)
{
    case FinancialStatus.AUTHORISED: Console.WriteLine("Tip adjusted"); break;
    case FinancialStatus.DECLINED:   Console.WriteLine("Tip declined"); break;
    case FinancialStatus.FAILED:     Console.WriteLine("Error — retry"); break;
}
```

**Returns:** `Task<FinancialStatus>` — possible values: `AUTHORISED`, `DECLINED`, `FAILED`. No `EndOfTransaction` callback fires.

---

### Stop Current Transaction

Attempts to cancel the in-progress transaction. Only succeeds if `StatusInfo.CancelAllowed` is `true` at the time of the call (check inside `CurrentTransactionStatus`). `EndOfTransaction` fires with `CANCELLED` if successful.

**Signature**

```csharp
bool StopCurrentTransaction();
```

Returns `true` if the cancel request was sent to the terminal; `false` otherwise.

**Example**

```csharp
public void CurrentTransactionStatus(StatusInfo info, Device device)
{
    if (info.CancelAllowed && userWantsToCancel)
        hapi.StopCurrentTransaction();
}
```

---

### Print Receipt

Prints any HTML-formatted receipt on the terminal's built-in printer. Can also accept a URL (HTTP/HTTPS) — the terminal will fetch and print the page.

**Signature**

```csharp
bool PrintReceipt(string receipt);
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `receipt` | `string` | Yes | HTML receipt string or URL. Pass `result.MerchantReceipt` or `result.CustomerReceipt` from a `TransactionResult`. |

Returns `true` if the command was sent to the printer. `EndOfTransaction` fires with `FinancialStatus.PROCESSED` on print success.

**Example**

```csharp
bool sent = hapi.PrintReceipt(result.MerchantReceipt);
```

:::tip Receipt format duality
Receipts are normally HTTPS URLs. If the terminal cannot reach Handpoint servers, raw HTML is returned. Always handle both formats — check `value.StartsWith("http")` to distinguish.
:::

---

### Signature Result

Must be called in response to the `SignatureRequired` callback. Informs the terminal whether the merchant accepted the cardholder's signature. Only relevant for HiLite integrations — PAX terminals do not generate `SignatureRequired`.

**Signature**

```csharp
bool SignatureResult(bool accepted);
```

**Example**

```csharp
public void SignatureRequired(SignatureRequest request, Device device)
{
    // Display request.MerchantReceipt on screen for operator to inspect
    bool operatorAccepted = ShowSignatureDialogAndWait(request.MerchantReceipt);
    hapi.SignatureResult(operatorAccepted);
}
```

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

## See Also

- [Windows Objects Reference](/reference/windows-objects-reference) — full type definitions for transaction results, options, and enums
