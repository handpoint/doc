---
title: Transaction Recovery — Windows SDK
sidebar_position: 5
description: How to implement robust transaction recovery in the Handpoint Windows SDK using transactionReference and GetTransactionStatus.
---

# Transaction Recovery — Windows SDK

In the Windows SDK, the final transaction result is delivered via the `EndOfTransaction` callback on your `Events.Required` implementation. If the connection between your application and the device is interrupted after the card is tapped but before `EndOfTransaction` fires, the result may not arrive.

`GetTransactionStatus(transactionReference)` lets you query the Handpoint Cloud for the outcome of any transaction at any point after it was initiated. The same `TransactionReference` also enables direct REST API queries against `transactions.handpoint.com` for server-side reconciliation and back-office recovery.

:::note Prerequisite: CloudApiKey
`GetTransactionStatus` calls the Handpoint Cloud REST API directly. Your `CloudApiKey` must be configured in the SDK settings before calling this method, otherwise it throws `SettingsPropertyNotFoundException`.
:::

:::info Applicable operations
This recovery pattern applies to operations where a card is physically read and an acquirer authorization may have occurred: **Sale**, **Refund (on-device)**, **MOTO Sale (on-device)**, **MOTO Refund (on-device)**, and **Pre-Auth**.

It does **not** apply to: reversals, tip adjustment, pre-auth capture, or pre-auth increase. If a result is lost for those operations, it is safe to retry them — no card is charged on your behalf without an explicit authorization.
:::

---

## When recovery is needed

Recovery is required whenever your application might have missed the transaction outcome. Specific scenarios include:

| Scenario | Why recovery is needed |
|---|---|
| **Connection dropped mid-sale** | The device processes the card autonomously. Even if your application loses the USB/Bluetooth/network connection, the terminal may complete the authorization with the acquirer. You must query the outcome rather than assume the transaction failed. |
| **App crash or process kill** | If the application crashes between the card tap and `EndOfTransaction`, the result is never received. On restart, query any pending `TransactionReference` saved to durable storage. |
| **`FinStatus: UNDEFINED` received** | The SDK received a response from the terminal but could not resolve the final status. **Do not accept and do not reverse** — query the status API first. |
| **No callback / UI timeout reached** | The UI timeout you set fires before `EndOfTransaction` arrives. Treat the sale as unresolved and poll in the background until a final status is confirmed. |
| **Mobile wallet "See Phone"** | Apple Pay / Google Pay requires the cardholder to verify on their device. This can take up to 120 seconds. Do not treat a UI timeout as a non-charge during this window. |

---

## How results are normally delivered

`hapi.Sale()` returns an `OperationStartResult` synchronously. The `TransactionReference` property is the UUID identifying this transaction — persist it immediately. The actual result arrives later via `EndOfTransaction`.

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

---

## finStatus values

| `FinancialStatus` | Meaning | What to do |
|---|---|---|
| `IN_PROGRESS` | Transaction still processing on device or host | Keep polling |
| `UNDEFINED` | Result received but status could not be resolved | **Do not act.** Query status API — see [UNDEFINED handling](#undefined-finstatus--critical-behavior) |
| `AUTHORISED` | Approved — card charged | **Final.** Do not retry. |
| `DECLINED` | Declined by issuer | **Final.** Card not charged. Safe to retry. |
| `PROCESSED` | Completed (tokenization, MOTO) | **Final.** Do not retry. |
| `FAILED` | Technical failure | **Final.** Card not charged. Safe to retry. |
| `CANCELLED` | Cancelled by cardholder or merchant | **Final.** Card not charged. Safe to retry. |
| `PARTIAL_APPROVAL` | Partial amount approved *(US only)* | **Final.** Wait 60 s before acting — see note below. |
| `REFUNDED` | Refund processed | **Final.** Do not retry. |
| `CAPTURED` | Pre-authorisation captured | **Final.** Do not retry. |

---

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

---

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

### Step 2 — Start a sale and persist `TransactionReference`

```csharp
private const int UI_TIMEOUT_MS = 90_000; // 90 seconds — adjust to your UX requirements
private CancellationTokenSource _uiTimeoutCts;
private bool _uiTimedOut = false;

public async Task StartSaleAsync(int amount, Currency currency)
{
    var opResult = hapi.Sale(amount, currency, new Options());

    if (!opResult.OperationStarted)
    {
        // SDK rejected the request — safe to retry
        return;
    }

    // Persist BEFORE the result can arrive
    string transactionRef = opResult.TransactionReference;
    await db.SavePendingTransactionAsync(transactionRef);

    _uiTimedOut = false;
    _uiTimeoutCts = new CancellationTokenSource();

    _ = Task.Run(async () =>
    {
        try
        {
            await Task.Delay(UI_TIMEOUT_MS, _uiTimeoutCts.Token);
            _uiTimedOut = true;
            ShowFailedToClerk();              // unblock clerk immediately
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
        // Treat UNDEFINED identically to a timeout — do not accept or reverse yet
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

private static readonly TimeSpan PollInterval = TimeSpan.FromSeconds(10);
private static readonly TimeSpan ResultWait   = TimeSpan.FromSeconds(60);

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

---

## Direct status query via REST API

In addition to the SDK's `GetTransactionStatus` method, you can query the transaction outcome directly via the Handpoint Cloud REST API. This is useful for server-side reconciliation, back-office tooling, or startup recovery before the SDK is fully initialized.

:::warning Different base URL
The status endpoint uses `https://transactions.handpoint.com` (production) or `https://transactions.handpoint.io` (staging) — **not** `cloud.handpoint.com`.
:::

### Query the full transaction chain

Use `/status/all` to retrieve the complete chain of operations linked to a `TransactionReference`. This accounts for cases where the original sale was followed by a reversal or refund.

```csharp
private static readonly HttpClient StatusClient = new HttpClient
{
    BaseAddress = new Uri("https://transactions.handpoint.com")
};

public static async Task<List<TransactionStatusEntry>> QueryTransactionStatusAsync(
    string transactionRef,
    string apiKey,
    CancellationToken ct = default)
{
    using var request = new HttpRequestMessage(
        HttpMethod.Get,
        $"/transactions/{transactionRef}/status/all");

    request.Headers.Add("ApiKeyCloud", apiKey);

    var response = await StatusClient.SendAsync(request, ct);
    response.EnsureSuccessStatusCode();

    var json = await response.Content.ReadAsStringAsync(ct);
    return JsonSerializer.Deserialize<List<TransactionStatusEntry>>(json)
           ?? new List<TransactionStatusEntry>();
}
```

Define a minimal record for deserialization:

```csharp
public record TransactionStatusEntry(
    string Type,
    string FinStatus,
    int TotalAmount,
    string Currency,
    string TransactionID,
    string TransactionReference
);
```

### Response structure

The `/status/all` endpoint returns a JSON **array** of operations, ordered from oldest to newest. Each entry represents one operation in the chain (original sale, reversal, refund, etc.).

```json
[
  {
    "type": "SALE",
    "finStatus": "AUTHORISED",
    "totalAmount": 1000,
    "currency": "USD",
    "transactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
    "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f",
    "authorisationCode": "155884",
    "cardSchemeName": "Visa",
    "maskedCardNumber": "************1456"
  }
]
```

An empty array (`[]`) means the gateway has no record of this `TransactionReference`. The terminal may still be processing (cardholder still interacting), or no card was read at all. Continue polling — do not treat empty as a safe non-charge until your active-recovery timeout expires.

### Parsing the response and deciding what to do

```csharp
public enum RecoveryOutcome { Authorised, NotCharged, StillResolving, NotFound }

public static async Task<(RecoveryOutcome Outcome, string? TransactionID)>
    EvaluateTransactionStatusAsync(string transactionRef, string apiKey)
{
    var operations = await QueryTransactionStatusAsync(transactionRef, apiKey);

    if (operations.Count == 0)
        return (RecoveryOutcome.NotFound, null);

    var first = operations[0];

    return first.FinStatus switch
    {
        "AUTHORISED"
            => (RecoveryOutcome.Authorised, first.TransactionID),

        "DECLINED" or "CANCELLED" or "FAILED"
            => (RecoveryOutcome.NotCharged, null),

        "IN_PROGRESS" or "UNDEFINED"
            => (RecoveryOutcome.StillResolving, null),

        _ => (RecoveryOutcome.StillResolving, null)
    };
}
```

### Decision tree

```
Query /status/all for TransactionReference
  │
  ├─ Empty array (not found)
  │    ├─ Within active-recovery timeout → wait and retry query
  │    └─ After timeout expires → treat as non-charge; safe to retry sale
  │
  ├─ FinStatus: AUTHORISED
  │    └─ Card charged. Do NOT retry the sale.
  │         └─ If POS already showed FAILED to clerk → send reversal
  │
  ├─ FinStatus: DECLINED / CANCELLED / FAILED
  │    └─ Card not charged. Safe to retry the sale (new TransactionReference).
  │
  └─ FinStatus: IN_PROGRESS / UNDEFINED
       └─ Still resolving. Wait and retry query with backoff.
```

---

## UNDEFINED finStatus — critical behavior

`UNDEFINED` is **not** a safe non-charge. It means the Handpoint Cloud could not determine the final outcome at the time of the query. The most common causes are:

- The terminal is still processing (cardholder interacting, awaiting host response)
- A network disruption between the terminal and the gateway is resolving
- The transaction reached the acquirer but the response has not propagated yet

**Rules when you see `FinancialStatus.UNDEFINED`:**

1. **Do not record the transaction as failed.** The card may have been charged.
2. **Do not issue a reversal yet.** There is no confirmed `TransactionID` to reverse against.
3. **Do not retry the sale.** You could double-charge the cardholder.
4. **Continue polling** — both `GetTransactionStatus` via the SDK and `/status/all` via the REST API will eventually resolve to a final status.

```csharp
// Correct UNDEFINED handling in OnTransactionResult
if (result.FinStatus == FinancialStatus.UNDEFINED)
{
    ShowFailedToClerk();                               // unblock clerk — do not show "charged"
    await db.MarkPendingAsync(result.TransactionReference); // record as unresolved
    StartBackgroundRecovery(result.TransactionReference);   // poll until final status
    // Do NOT call HandleFinalResultAsync or accept the transaction
    return;
}
```

After your active-recovery timeout (recommended: 6 minutes from sale initiation), if the status is still `UNDEFINED` or the array is empty, flag the transaction for **manual reconciliation** rather than auto-reversing or auto-accepting.

---

## When is it safe to retry?

| Condition | Safe to retry? | Action |
|---|---|---|
| `FinStatus: AUTHORISED` found | **No** | Do not retry. Card was charged. |
| `FinStatus: DECLINED` found | **Yes** | Retry — new call to `hapi.Sale()` produces a new `TransactionReference` |
| `FinStatus: CANCELLED` found | **Yes** | Retry — new `hapi.Sale()` call |
| `FinStatus: FAILED` found | **Yes** | Retry — new `hapi.Sale()` call |
| Empty result after active-recovery timeout | **Yes** | Retry — new `hapi.Sale()` call |
| `FinStatus: UNDEFINED` | **No** | Continue polling — do not retry yet |
| `FinStatus: IN_PROGRESS` | **No** | Continue polling — do not retry yet |

Each call to `hapi.Sale()` generates a fresh `TransactionReference`. Do not cache and reuse a reference from a previous attempt — the SDK generates a new one automatically on each call.

---

## Common failure scenarios

| Scenario | What to do |
|---|---|
| App crashed; no result received; `TransactionReference` was saved | On startup, load the saved reference from persistent storage and call `StartBackgroundRecovery(savedRef)` |
| App crashed; `TransactionReference` was NOT saved | No recovery possible via SDK. Log the incident for manual reconciliation. **Always persist `TransactionReference` immediately after `OperationStarted`.** |
| `FinStatus: UNDEFINED` received in `EndOfTransaction` | Query `/status/all` and continue polling. Do not accept. Do not reverse. Do not retry. |
| Network dropped; sale may have processed | Query `/status/all`. If `AUTHORISED` found and POS showed failure, reverse. If empty after timeout, safe to retry. |
| `FinStatus: DECLINED` received | Card not charged. Safe to retry the sale (new `hapi.Sale()` call). |
| UI timeout fired; clerk needs the POS back | Show `FAILED` to clerk. Continue background recovery. If `AUTHORISED` found later, reverse automatically. |
| `EndOfTransaction` arrives after UI timeout | Ignore the late result if `_uiTimedOut` is true — background recovery is already handling it. |
| Cardholder using Apple Pay / Google Pay ("See Phone") | Terminal waits up to 120 s. Do not cancel. Do not assume failed. Extend your active-recovery timeout accordingly. |

---

## Recovering on application restart

If the application restarts before `EndOfTransaction` arrived, query any saved pending reference on startup:

```csharp
protected override async void OnStartup(StartupEventArgs e)
{
    base.OnStartup(e);
    // ... initialise SDK ...

    string? pendingRef = await db.GetPendingTransactionAsync();
    if (pendingRef != null)
    {
        StartBackgroundRecovery(pendingRef);
        // Result arrives in TransactionResultReady() → HandleRecoveredResultAsync()
    }
}
```

For recovery before the SDK is available (e.g., a server-side process checking payment records), query the REST API directly:

```csharp
public static async Task RecoverOnStartupAsync(string apiKey)
{
    string? pendingRef = await db.GetPendingTransactionAsync();
    if (pendingRef == null) return;

    var (outcome, txId) = await EvaluateTransactionStatusAsync(pendingRef, apiKey);

    switch (outcome)
    {
        case RecoveryOutcome.Authorised:
            // Card was charged — reverse if POS showed failure, or reconcile manually
            await SendReversalAsync(txId!, pendingRef);
            await db.MarkReversedAsync(pendingRef);
            break;

        case RecoveryOutcome.NotCharged:
            // Safe — clear the pending record
            await db.ClearPendingAsync(pendingRef);
            break;

        case RecoveryOutcome.NotFound:
        case RecoveryOutcome.StillResolving:
            // Re-initialize SDK and poll via GetTransactionStatus
            StartBackgroundRecovery(pendingRef);
            break;
    }
}
```

:::note Partial approvals (US only)
If `FinStatus` is `PARTIAL_APPROVAL`, the device may be showing an accept/decline prompt to the cardholder with approximately a 30-second timeout. The 60-second wait built into the recovery flow above covers this window. Do not act on a partial approval result immediately — always allow the full wait period to elapse.
:::
