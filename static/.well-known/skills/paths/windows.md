---
# Windows SDK (.NET) — path skill

Use this path for .NET Windows desktop POS applications using `HandpointSDK` (NuGet). The SDK connects to PAX SmartPOS via the Handpoint Cloud (same underlying network path as the Cloud API) or to HiLite via Bluetooth.

Also load your acquirer skill: `acquirers/{acquirer}.md`

## Installation

```
Install-Package HandpointSDK
# or: dotnet add package HandpointSDK
```

## Credentials

```csharp
// PAX Cloud
var credentials = new HandpointCredentials(sharedSecret, cloudApiKey);

// HiLite Bluetooth (no cloudApiKey needed)
var credentials = new HandpointCredentials(sharedSecret);
```

## Initialization

```csharp
Hapi hapi = HapiFactory.GetAsyncInterface(handler, credentials);
// handler implements Events.Required (and optionally Events.Status, Events.TransactionResultReady)
```

## Connect

```csharp
// PAX Cloud — direct connect
var device = new Device("MyTerminal", "0821032395-PAXA920", "", ConnectionMethod.CLOUD);
hapi.Connect(device);

// HiLite Bluetooth — discovery
hapi.SearchDevices(ConnectionMethod.BLUETOOTH);
// DeviceDiscoveryFinished fires → call hapi.Connect(selectedDevice)
```

## Sale

```csharp
OperationStartResult op = hapi.Sale(new BigInteger(1000), Currency.EUR);
// op.OperationStarted == true → command accepted (not approved)
// Final result arrives in EndOfTransaction — NOT in the return value
```

**⚠ EndOfTransaction runs on a background thread.** Marshal to UI thread before updating controls.

## Required callbacks

```csharp
void EndOfTransaction(TransactionResult result, Device device)     // always implement
void CurrentTransactionStatus(StatusInfo status, Device device)    // status updates
void DeviceDiscoveryFinished(List<Device> devices)                 // discovery
void SignatureRequired(SignatureRequest req, Device device)        // HiLite: call hapi.SignatureResult(true)
void TransactionResultReady(TransactionResult result, Device device) // GetTransactionStatus result
```

## finStatus values

| Value | Action |
|---|---|
| `AUTHORISED` | Store `TransactionID`, fulfil order |
| `DECLINED` / `FAILED` / `CANCELLED` | Clear pending |
| `PARTIALLY_APPROVED` | Wait 60 s — split tender or reverse |
| `IN_PROGRESS` / `UNDEFINED` | Poll `GetTransactionStatus` |

## Recovery

```csharp
// Requires cloudApiKey in HandpointCredentials
hapi.GetTransactionStatus(transactionReference);
// Result arrives in TransactionResultReady
```

## All operations

`Sale`, `Refund`, `SaleReversal`, `RefundReversal`, `PreAuthorization`, `PreAuthorizationCapture`, `PreAuthorizationIncrease`, `PreAuthorizationReversal`, `MoToSale`, `TokenizeCard`, `SaleAndTokenizeCard`, `TipAdjustment`, `GetTransactionStatus`, `StopCurrentTransaction`, `Update`, `PrintReceipt`, `Disconnect`.

## See also

- Underlying protocol: load `paths/cloud-api.md`
- Acquirer constraints: load `acquirers/{acquirer}.md`
- Transaction recovery full guide: https://developer.handpoint.com/reference/transaction-recovery-windows-sdk
