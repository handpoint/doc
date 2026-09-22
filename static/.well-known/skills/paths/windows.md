---
# Windows SDK (.NET) — path skill

Use this path for .NET Windows desktop POS applications using `HandpointSDK` (NuGet). The SDK connects to PAX SmartPOS terminals via the Handpoint Cloud (same underlying network path as the Cloud API) or to HiLite Bluetooth readers.

Also load your acquirer skill: `acquirers/{acquirer}.md`

---

## Installation

```
Install-Package HandpointSDK
# or: dotnet add package HandpointSDK
```

## Credentials

```csharp
// PAX Cloud (requires both)
var credentials = new HandpointCredentials(sharedSecret, cloudApiKey);

// HiLite Bluetooth (no cloudApiKey needed)
var credentials = new HandpointCredentials(sharedSecret);
```

- `sharedSecret` — 64-character hex string, unique per reader/merchant. From setup.handpoint.com.
- `cloudApiKey` — required for PAX Cloud connection AND for `GetTransactionStatus`. Always include it in production.

## Initialization

```csharp
// handler must implement Events.Required
Hapi hapi = HapiFactory.GetAsyncInterface(handler, credentials);
```

Instantiate once at application start. Hold the `Hapi` instance for the lifetime of the app.

## Connect

```csharp
// PAX Cloud — direct connect by serial number
var device = new Device("MyTerminal", "9822032398-PAXA920", "", ConnectionMethod.CLOUD);
hapi.Connect(device);

// PAX Cloud — discovery
hapi.SearchDevices(ConnectionMethod.CLOUD);
// DeviceDiscoveryFinished fires → call hapi.Connect(selectedDevice)

// HiLite Bluetooth — discovery
hapi.SearchDevices(ConnectionMethod.BLUETOOTH);
// DeviceDiscoveryFinished fires → call hapi.Connect(selectedDevice)

// HiLite Bluetooth — direct connect by MAC (always UPPER CASE)
var device = new Device("PP0513901435", "68:AA:D2:00:D5:27", "", ConnectionMethod.BLUETOOTH);
hapi.Connect(device);
```

## Required Event Callbacks

Implement `Events.Required` on your handler class:

```csharp
// ALWAYS implement — fires when any financial operation completes
// ⚠ Runs on a background thread — marshal to UI thread before touching controls
void EndOfTransaction(TransactionResult result, Device device)

// ALWAYS implement — intermediate status updates during the operation
void CurrentTransactionStatus(StatusInfo info, Device device)

// ALWAYS implement — list of discovered devices after SearchDevices()
void DeviceDiscoveryFinished(List<Device> devices)

// ALWAYS implement — cardholder signature needed (HiLite only, ignore for PAX)
// Must call hapi.SignatureResult(true/false) in response
void SignatureRequired(SignatureRequest request, Device device)

// Implement Events.TransactionResultReady — result from GetTransactionStatus
void TransactionResultReady(TransactionResult result, Device device)
```

---

## Operations Quick Reference

All operations return `OperationStartResult` synchronously. **Persist `TransactionReference` before calling.** Final result arrives in `EndOfTransaction` callback.

### Sale
```csharp
OperationStartResult op = hapi.Sale(new BigInteger("1000"), Currency.EUR);
OperationStartResult op = hapi.Sale(new BigInteger("1000"), Currency.EUR, map);
```

### Sale And Tokenize Card
```csharp
OperationStartResult op = hapi.SaleAndTokenizeCard(new BigInteger("1000"), Currency.GBP);
// Token in EndOfTransaction: result.CardToken
```

### Sale Reversal (Void)
```csharp
// originalTransactionID = efttransactionID from original sale result
OperationStartResult op = hapi.SaleReversal(new BigInteger(1000), Currency.GBP, originalTransactionID);
```
- Must be within 24 hours or before daily batch submission.

### Refund
```csharp
// Standalone (cardholder must present card)
OperationStartResult op = hapi.Refund(new BigInteger(1000), Currency.GBP);

// Linked — limits refund to original amount
OperationStartResult op = hapi.Refund(new BigInteger(1000), Currency.GBP, originalTransactionID);
```
- For Interac, only available before nightly batch close.

### Refund Reversal
```csharp
OperationStartResult op = hapi.RefundReversal(new BigInteger(1000), Currency.GBP, originalTransactionID);
```
- Must be on the same day as the refund.

### MoTo Sale (Card-Not-Present)
```csharp
// Cardholder keys card details on terminal screen — no physical card
OperationStartResult op = hapi.MotoSale(new BigInteger("1000"), Currency.EUR);
```

### MoTo Refund
```csharp
OperationStartResult op = hapi.MotoRefund(new BigInteger(1000), Currency.EUR);
OperationStartResult op = hapi.MotoRefund(new BigInteger(1000), Currency.EUR, originalTransactionId);
```

### MoTo Reversal
```csharp
OperationStartResult op = hapi.MotoReversal(originalTransactionId);
```

### MoTo Pre-Authorization
```csharp
OperationStartResult op = hapi.moToPreAuthorization(new BigInteger(1000), Currency.EUR);
```

### Pre-Authorization
```csharp
OperationStartResult op = hapi.PreAuthorization(new BigInteger("5000"), Currency.USD);
// Save efttransactionID from EndOfTransaction result for capture/increase/reversal
```
- Capture expiry: Visa up to 31 days (lodging/car rental), same day (restaurants). Mastercard 30 days. Amex 7 days.
- A pre-auth can only be captured **once**.

### Pre-Authorization Increase / Decrease
```csharp
// Positive amount = increase hold; negative amount = partial release
OperationStartResult op = hapi.PreAuthorizationIncrease(
    new BigInteger("1000"), Currency.USD, originalPreAuthId);

OperationStartResult op = hapi.PreAuthorizationIncrease(
    new BigInteger("-500"), Currency.USD, originalPreAuthId);
```

### Pre-Authorization Capture
```csharp
OperationStartResult op = hapi.PreAuthorizationCapture(
    new BigInteger("5000"), Currency.USD, originalPreAuthId);
// EndOfTransaction returns FinancialStatus.CAPTURED on success
```

### Pre-Authorization / Capture Reversal
```csharp
// Releases entire pre-auth hold, or reverses a capture before nightly settlement
OperationStartResult op = hapi.PreAuthorizationReversal(originalPreAuthId);
// Reversing a capture restores status: CAPTURED → AUTHORISED
```

### Tokenize Card (No Charge)
```csharp
OperationStartResult op = hapi.TokenizeCard();
// Token in EndOfTransaction: result.CardToken
```

### Tip Adjustment
```csharp
// US restaurants only; HiLite terminals only; TSYS/VANTIV processors
// Returns Task<FinancialStatus> — NOT EndOfTransaction
Task<FinancialStatus> task = hapi.TipAdjustment(BigInteger.Parse("200"), originalTransactionID);
FinancialStatus status = await task;
// Possible: AUTHORISED, DECLINED, FAILED
// Second adjustment overrides first
```

### Print Receipt
```csharp
// Pass merchantReceipt or customerReceipt from TransactionResult
bool sent = hapi.PrintReceipt(result.MerchantReceipt);
// EndOfTransaction fires with FinancialStatus.PROCESSED on print success
```

### Signature Result
```csharp
// Call inside SignatureRequired callback (HiLite only)
hapi.SignatureResult(true);   // accept
hapi.SignatureResult(false);  // decline
```

### Stop Current Transaction
```csharp
// Only succeeds if StatusInfo.CancelAllowed == true
bool sent = hapi.StopCurrentTransaction();
// EndOfTransaction fires with CANCELLED if successful
```

### Get Transaction Status (Recovery)
```csharp
// Requires cloudApiKey in credentials
hapi.GetTransactionStatus(transactionReference);
// Result arrives in TransactionResultReady, NOT EndOfTransaction
```

### Device Utilities
```csharp
hapi.Update();           // trigger firmware update on terminal
hapi.Disconnect();       // disconnect from terminal
string ver = hapi.Version; // SDK version string
```

---

## OperationStartResult

```csharp
OperationStartResult op = hapi.Sale(...);
if (!op.OperationStarted)
{
    // Rejected — check op.ErrorMessage
    // Common causes: another transaction in progress, terminal not connected
}
// op.TransactionReference — PERSIST THIS before the call
```

| Field | Type | Notes |
|---|---|---|
| `OperationStarted` | `bool` | `true` = SDK accepted command. Does NOT mean approved. |
| `TransactionReference` | `string` | UUID to persist for recovery. Not returned for reversals/linked refunds. |
| `ErrorMessage` | `string` | Reason for rejection (when `OperationStarted` is `false`) |

---

## finStatus Handling

Switch on `result.FinStatus` in `EndOfTransaction`:

| Value | Action |
|---|---|
| `AUTHORISED` | Store `result.EfttransactionID`, fulfil order, print/display receipts |
| `DECLINED` | Show decline, do not fulfil order |
| `CANCELLED` | Cardholder or operator cancelled — clear pending record |
| `FAILED` | Technical error — check `result.ErrorMessage`. Card not charged. |
| `PARTIAL_APPROVAL` | US only — acquirer approved partial funds. `result.DueAmount` has remainder. Either collect remainder separately or call `SaleReversal` to void the entire transaction. Wait 60 s before actioning. |
| `CAPTURED` | Pre-auth capture succeeded |
| `PROCESSED` | PrintReceipt succeeded |
| `IN_PROGRESS` | GetTransactionStatus only — poll again in 10 s |
| `REFUNDED` | GetTransactionStatus only — original sale was refunded |
| `UNDEFINED` | GetTransactionStatus only — transaction unknown to gateway. If > 90 s since transaction start, card was NOT charged. |

```csharp
public void EndOfTransaction(TransactionResult result, Device device)
{
    // Marshal to UI thread if needed
    Application.Current.Dispatcher.Invoke(() =>
    {
        switch (result.FinStatus)
        {
            case FinancialStatus.AUTHORISED:
                FulfilOrder(result.EfttransactionID);
                PrintReceipts(result.MerchantReceipt, result.CustomerReceipt);
                break;
            case FinancialStatus.DECLINED:
                ShowDeclinedMessage();
                break;
            case FinancialStatus.PARTIAL_APPROVAL:
                HandlePartialApproval(result.DueAmount);
                break;
            case FinancialStatus.CANCELLED:
            case FinancialStatus.FAILED:
                ClearPendingTransaction();
                break;
        }
    });
}
```

---

## Transaction Recovery Pattern

```csharp
// 1. Generate reference BEFORE the call
string txRef = Guid.NewGuid().ToString();
db.SavePendingTransaction(txRef);

// 2. Call with reference (pass in map or options)
var map = new Dictionary<string, string>();
// some SDKs accept transactionReference via a SaleOptions object
OperationStartResult op = hapi.Sale(new BigInteger(1000), Currency.EUR);
// Note: the TransactionReference is returned in op.TransactionReference

// 3. Save op.TransactionReference immediately
db.UpdateTransactionReference(txRef, op.TransactionReference);

// 4. If EndOfTransaction does not fire within 90 s:
hapi.GetTransactionStatus(op.TransactionReference);
// Result arrives in TransactionResultReady

// 5. On startup, check for unresolved transactions
foreach (var pending in db.GetPendingTransactions())
    hapi.GetTransactionStatus(pending.TransactionReference);
```

**Recovery decision table (TransactionResultReady):**

| `finStatus` | Action |
|---|---|
| `IN_PROGRESS` / `UNDEFINED` (< 90 s) | Wait 10 s, poll again |
| `AUTHORISED` (no prior record) | Send reversal via Cloud API; treat as success if reversal also unknown |
| `AUTHORISED` (prior record exists) | Already fulfilled — no action |
| `DECLINED` / `FAILED` / `CANCELLED` | Clear pending record |
| `UNDEFINED` (> 90 s) | Card not charged — clear record |
| `PARTIAL_APPROVAL` | Wait 60 s — split tender or reverse |

---

## Receipt & Signature URL Handling

Receipts and `signatureUrl` are **normally HTTPS URLs**. If the terminal cannot reach Handpoint servers, they fall back to raw HTML or base64-encoded PNG respectively.

```csharp
// Receipt
private void DisplayReceipt(string receipt)
{
    if (receipt.StartsWith("http"))
        webBrowser.Navigate(receipt);          // URL
    else
        webBrowser.NavigateToString(receipt);  // raw HTML
}

// Signature image
private void DisplaySignature(string signatureUrl)
{
    if (string.IsNullOrEmpty(signatureUrl)) return;
    if (signatureUrl.StartsWith("http"))
        LoadImageFromUrl(signatureUrl);
    else
    {
        byte[] imageBytes = Convert.FromBase64String(signatureUrl);
        LoadImageFromBytes(imageBytes);
    }
}
```

---

## Optional Transaction Parameters

Any operation that accepts `Dictionary<string, string> map`:

```csharp
var map = new Dictionary<string, string>();

// Customer reference (max 36 chars) — echoed in TransactionResult.customerReference
map.Add(XmlTag.CustomerReference.Tag(), "ORDER-1234");

// Metadata fields 1–5 (max 250 chars each) — echoed in TransactionResult.metadata
map.Add(XmlTag.Metadata1.Tag(), "table-7");
map.Add(XmlTag.Metadata2.Tag(), "server-alice");

// Disable duplicate check (on by default since SDK 3.3.0)
map.Add(XmlTag.DuplicateCheck.Tag(), "0");

// Budget instalment (South Africa, sale only) — "03" to "24" months
map.Add(XmlTag.Budget.Tag(), "12");

// Mastercard money remittance
map.Add(XmlTag.MoneyRemittanceCountryCode.Tag(), "USA");
map.Add(XmlTag.MoneyRemittanceFullName.Tag(), "John Doe");
```

---

## Key Objects

### TransactionResult (selected fields)

| Field | Type | Notes |
|---|---|---|
| `FinStatus` | `FinancialStatus` | Primary outcome — switch on this first |
| `EfttransactionID` | `string` | Handpoint GUID — use for reversals and linked refunds |
| `TransactionReference` | `string` | UUID from OperationStartResult — for recovery queries |
| `MerchantReceipt` | `string` | URL or raw HTML |
| `CustomerReceipt` | `string` | URL or raw HTML |
| `SignatureUrl` | `string` | URL or base64 PNG |
| `CardToken` | `string` | PAN token (tokenization operations) |
| `TotalAmount` | `BigInteger` | Amount charged (base + tip) |
| `RequestedAmount` | `BigInteger` | Amount requested |
| `DueAmount` | `BigInteger` | Remaining after partial approval |
| `TipAmount` | `BigInteger` | Tip in minor units |
| `CardSchemeName` | `CardSchemeName` | Visa, MasterCard, Amex, etc. |
| `CardEntryType` | `CardEntryType` | ICC (chip), MSR (swipe), CNP (MOTO) |
| `ErrorMessage` | `string` | Failure reason |
| `RecoveredTransaction` | `bool` | `true` if came via GetTransactionStatus recovery |

### StatusInfo

| Field | Type | Notes |
|---|---|---|
| `CancelAllowed` | `bool` | `true` if `StopCurrentTransaction()` will succeed |
| `Status` | `Status` | Current terminal status code |
| `Message` | `string` | Human-readable status |

---

## Key Enums

**FinancialStatus:** `AUTHORISED` `DECLINED` `CANCELLED` `FAILED` `PARTIAL_APPROVAL` `CAPTURED` `PROCESSED` `IN_PROGRESS` `REFUNDED` `UNDEFINED`

**CardEntryType:** `UNDEFINED` `MSR` `ICC` `CNP`

**CardSchemeName:** `MasterCard` `Visa` `Maestro` `American Express` `Discover` `JCB` `Diners` `UnionPay` `Interac`

**ConnectionMethod (Windows supported):** `BLUETOOTH` (HiLite) `CLOUD` (PAX) `SIMULATOR`

**ConnectionStatus:** `Connected` `Connecting` `Disconnected` `Disconnecting` `Initializing` `NotConfigured`

**PaymentScenario:** `UNKNOWN` `MAGSTRIPE` `MAGSTRIPECONTACTLESS` `CHIP` `CHIPCONTACTLESS` `CHIPFAILMAGSTRIPE` `MOTO`

**TenderType:** `NOT_SET` `CREDIT` `DEBIT`

**VerificationMethod:** `UNDEFINED` `SIGNATURE` `PIN` `PIN_SIGNATURE` `FAILED` `NOT_REQUIRED` `MOBILE_PASS_CODE`

**TransactionType:** `SALE` `VOID_SALE` `REFUND` `VOID_REFUND` `TOKENIZE_CARD` `SALE_AND_TOKENIZE_CARD` `REVERSAL` `PRINT_RECEIPT` `MOTO_SALE` `MOTO_REFUND` `MOTO_REVERSAL` `UNDEFINED` (and others)

---

## Simulator (No Hardware)

```csharp
hapi.Connect(new Device("Simulator", "Port", "Address", ConnectionMethod.SIMULATOR));
```

Control the simulated outcome via the amount (digits 3–4 from the right, 0-indexed from right):

| Amount pattern | Behaviour |
|---|---|
| `X00XX` | Signature — Authorised |
| `X01XX` | Signature — Declined |
| `X10XX` | PIN — Authorised |
| `X11XX` | PIN — Declined |

---

## Common Errors

| Symptom | Cause / Fix |
|---|---|
| `OperationStarted == false` immediately | Another transaction in progress — check `HapiManager.InTransaction()` |
| `ArgumentException: null shared secret` | `HandpointCredentials.SharedSecret` is empty — verify SSK |
| `SettingsPropertyNotFoundException` | `cloudApiKey` missing — required for `GetTransactionStatus` |
| `DeviceDiscoveryFinished` empty | HiLite not paired in Windows Bluetooth settings |
| `EndOfTransaction` never fires | Background thread blocked; handler not registered; check logs |
| Cloud terminal unresponsive | Verify `cloudApiKey` and that terminal is online in TMS |

---

## See Also

- Underlying protocol: load `paths/cloud-api.md`
- Acquirer constraints: load `acquirers/{acquirer}.md`
- Objects full reference: https://developer.handpoint.com/reference/windows-objects-reference
- Transaction recovery full guide: https://developer.handpoint.com/reference/transaction-recovery-windows-sdk
