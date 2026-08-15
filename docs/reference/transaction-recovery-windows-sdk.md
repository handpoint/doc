---
title: Transaction Recovery — Windows SDK
sidebar_position: 5
description: How to implement robust transaction recovery in the Handpoint Windows SDK using transactionReference and GetTransactionStatus.
---

# Transaction Recovery — Windows SDK

In the Windows SDK, the final transaction result is delivered via the `EndOfTransaction` callback on your `Events.Required` implementation. If the connection between your application and the device is interrupted after the card is tapped but before `EndOfTransaction` fires, the result may not arrive.

`GetTransactionStatus(transactionReference)` lets you query the Handpoint Cloud for the outcome of any transaction, at any point after it was initiated.

:::note Prerequisite: CloudApiKey
`GetTransactionStatus` calls the Handpoint Cloud REST API directly. Your `CloudApiKey` must be configured in the SDK settings before calling this method, otherwise it throws `SettingsPropertyNotFoundException`.
:::

:::info Applicable operations
This recovery pattern applies to operations where a card is physically read and an acquirer authorization may have occurred: **Sale**, **Refund (on-device)**, **MOTO Sale (on-device)**, **MOTO Refund (on-device)**, and **Pre-Auth**.

It does **not** apply to: reversals, tip adjustment, pre-auth capture, or pre-auth increase. If a result is lost for those operations, it is safe to retry them — no card is charged on your behalf without an explicit authorization.
:::

## How results are normally delivered

`hapi.Sale()` returns an `OperationStartResult` synchronously. The `TransactionReference` property is the UUID identifying this transaction. The actual result arrives later via `EndOfTransaction`.

```csharp
var opResult = hapi.Sale(amount, currency, new Options());

if (!opResult.OperationStarted)
{
    // SDK rejected the call — handle here, safe to retry
    return;
}

// Persist before the result arrives
string transactionRef = opResult.TransactionReference;
await db.SavePendingTransactionAsync(transactionRef);
```

## finStatus values

| `FinancialStatus` | Meaning | What to do |
|---|---|---|
| `IN_PROGRESS` | Transaction still processing on device or host | Keep polling |
| `UNDEFINED` | Result received but status could not be resolved | Keep polling |
| `AUTHORISED` | Approved — card charged | **Final.** Do not retry. |
| `DECLINED` | Declined by issuer | **Final.** Card not charged. Safe to retry. |
| `PROCESSED` | Completed (tokenization, MOTO) | **Final.** Do not retry. |
| `FAILED` | Technical failure | **Final.** Card not charged. Safe to retry. |
| `CANCELLED` | Cancelled by cardholder or merchant | **Final.** Card not charged. Safe to retry. |
| `PARTIALLY_APPROVED` | Partial amount approved *(US only)* | **Final.** Wait 60 s before acting — see note below. |
| `REFUNDED` | Refund processed | **Final.** Do not retry. |
| `CAPTURED` | Pre-authorisation captured | **Final.** Do not retry. |

## Recovery flow

The recommended pattern has two layers: a **UI timeout** that unblocks the clerk immediately, and **background polling** that resolves the outcome and auto-reverses if needed.

```
T+0s    OperationStarted — TransactionReference persisted to DB
T+Ns    ISV UI timeout fires (your choice — e.g. 90 s with no card interaction)
         └─ Display FAILED to clerk so the POS is not blocked
         └─ Mark DB record as pending/unresolved
         └─ Continue polling GetTransactionStatus in background

Background polling (every 10 s):
  IN_PROGRESS or UNDEFINED  → keep polling
  AUTHORISED found           → send automatic reversal via Cloud API (no reader needed)
                               update DB to REVERSED
  Any other final finStatus  → clear pending record — card was not charged
```

## Implementation

### Step 1 — Implement `Events.TransactionResultReady`

`GetTransactionStatus` delivers its result through `TransactionResultReady` rather than `EndOfTransaction`. Implement this interface alongside `Events.Required`:

```csharp
public class PaymentHandler : Events.Required, Events.TransactionResultReady
{
    public void EndOfTransaction(TransactionResult result, Device device)
    {
        PaymentService.OnTransactionResult(result, recovered: false);
    }

    public void TransactionResultReady(TransactionResult result, Device device)
    {
        // Recovery path — result from GetTransactionStatus
        PaymentService.OnTransactionResult(result, recovered: true);
    }
}
```

Register both interfaces when building the `Hapi` instance:

```csharp
var handler = new PaymentHandler();
hapi = HapiFactory.GetAsyncInterface(handler, device);
```

### Step 2 — Start a sale with a UI timeout

```csharp
private CancellationTokenSource _uiTimeoutCts;
private bool _uiTimedOut = false;

public async Task StartSaleAsync(int amount, Currency currency)
{
    var opResult = hapi.Sale(amount, currency, new Options());
    if (!opResult.OperationStarted) return;

    string transactionRef = opResult.TransactionReference;
    await db.SavePendingTransactionAsync(transactionRef);

    _uiTimedOut = false;
    _uiTimeoutCts = new CancellationTokenSource();

    _ = Task.Run(async () =>
    {
        try
        {
            await Task.Delay(UI_TIMEOUT_MS, _uiTimeoutCts.Token); // your defined threshold
            _uiTimedOut = true;
            ShowFailedToClerk(); // unblock clerk immediately
            await db.MarkPendingAsync(transactionRef);
            StartBackgroundRecovery(transactionRef);
        }
        catch (TaskCanceledException) { /* EndOfTransaction arrived normally */ }
    });
}
```

### Step 3 — Handle results and drive background recovery

```csharp
public async void OnTransactionResult(TransactionResult result, bool recovered)
{
    if (_uiTimedOut && !recovered) return; // background recovery is handling this

    _uiTimeoutCts?.Cancel();

    if (result.FinStatus == FinancialStatus.UNDEFINED)
    {
        // Treat UNDEFINED identically to a timeout
        ShowFailedToClerk();
        await db.MarkPendingAsync(result.TransactionReference);
        StartBackgroundRecovery(result.TransactionReference);
        return;
    }

    if (recovered)
    {
        await HandleRecoveredResultAsync(result);
    }
    else
    {
        await HandleFinalResultAsync(result);
    }
}

private static readonly TimeSpan PollInterval  = TimeSpan.FromSeconds(10);
private static readonly TimeSpan ResultWait    = TimeSpan.FromSeconds(60);

private async Task HandleRecoveredResultAsync(TransactionResult result)
{
    if (result.FinStatus == FinancialStatus.IN_PROGRESS ||
        result.FinStatus == FinancialStatus.UNDEFINED)
    {
        // Keep polling
        await Task.Delay(PollInterval);
        hapi.GetTransactionStatus(result.TransactionReference);
        return;
    }

    // Final status — wait 60 s for EndOfTransaction to arrive naturally
    await Task.Delay(ResultWait);

    if (result.FinStatus == FinancialStatus.AUTHORISED)
    {
        // Card was charged but POS already showed FAILED — reverse automatically
        await SendReversalAsync(result.TransactionID, result.TransactionReference);
        await db.MarkReversedAsync(result.TransactionReference);
    }
    else
    {
        await db.ClearPendingAsync(result.TransactionReference);
    }
}

private void StartBackgroundRecovery(string transactionRef)
{
    _ = Task.Run(async () =>
    {
        await Task.Delay(PollInterval);
        hapi.GetTransactionStatus(transactionRef);
        // Result arrives in TransactionResultReady() → HandleRecoveredResultAsync()
    });
}

private async Task SendReversalAsync(string originalTransactionID, string newRef)
{
    using var client = new HttpClient();
    client.DefaultRequestHeaders.Add("Authentication", "YOUR_API_KEY");

    var payload = new
    {
        operation = "saleReversal",
        originalTransactionID,
        terminal_type = "PAXA920",    // terminal type of the original transaction
        serial_number = "0821599465", // serial number of the original terminal
        transactionReference = Guid.NewGuid().ToString(),
    };

    await client.PostAsync(
        "https://cloud.handpoint.com/transactions",
        new StringContent(JsonSerializer.Serialize(payload), Encoding.UTF8, "application/json")
    );
}
```

### Step 4 — Surface a cancel option to clerks

If the spinner is still running and the clerk needs to act, call `StopCurrentTransaction`. If it returns false, the transaction is still being processed.

```csharp
cancelButton.Click += (s, e) =>
{
    bool stopped = hapi.StopCurrentTransaction();
    if (!stopped)
    {
        ShowMessage("Transaction cannot be cancelled — it is still being processed.");
    }
};
```

## Recovering on application restart

If the application restarts before `EndOfTransaction` arrived, query any saved pending reference on startup:

```csharp
protected override async void OnStartup(StartupEventArgs e)
{
    base.OnStartup(e);
    // ... initialise SDK ...

    string pendingRef = await db.GetPendingTransactionAsync();
    if (pendingRef != null)
    {
        StartBackgroundRecovery(pendingRef);
        // Result arrives in TransactionResultReady()
    }
}
```

:::note Partial approvals (US only)
If `FinStatus` is `PARTIALLY_APPROVED`, the device may be showing an accept/decline prompt to the cardholder with approximately a 30-second timeout. The 60-second wait built into the recovery flow above covers this window. Do not act on a partial approval result immediately — always allow the full wait period to elapse.
:::
