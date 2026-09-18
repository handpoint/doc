---
id: quick-start
title: "Quick Start"
sidebar_label: "Quick Start"
---

# Quick Start

Pick your integration path and copy the minimal working example to make your first sale.

> All examples use the **smallest currency unit** (e.g. `1000` = $10.00 USD / £10.00 GBP).
> Replace `YOUR_API_KEY` / `YOUR_SHARED_SECRET` with credentials from your Handpoint Integration Support engineer.

---

## Cloud API

Your server sends an HTTP POST; the PAX terminal prompts the cardholder to tap/insert/swipe; poll for the result.

```python
import uuid, time, requests

API_KEY    = "YOUR_API_KEY"
SERIAL     = "082104578"           # serial number on the back of the PAX terminal
TERM_TYPE  = "PAXA920"             # terminal model, e.g. PAXA920, PAXA920PRO, PAXA77
BASE_URL   = "https://cloud.handpoint.com"  # use .io for a debug/staging terminal

# Generate and persist the reference BEFORE the request — required for recovery
txn_ref = str(uuid.uuid4())
db.save_pending_transaction(txn_ref)

resp = requests.post(
    f"{BASE_URL}/transactions",
    headers={"ApiKeyCloud": API_KEY, "Content-Type": "application/json"},
    json={
        "operation":            "sale",
        "amount":               "1000",   # $10.00 — smallest currency unit, no decimal
        "currency":             "USD",
        "terminal_type":        TERM_TYPE,
        "serial_number":        SERIAL,
        "transactionReference": txn_ref,
    },
)
result_id = resp.json()["transactionResultId"]  # → "082104578-1786020446467"

# Poll until done — 204 = still processing, 200 = result ready
while True:
    r = requests.get(
        f"{BASE_URL}/transaction-result/{result_id}",
        headers={"ApiKeyCloud": API_KEY},
    )
    if r.status_code == 200:
        result = r.json()
        if result["finStatus"] == "AUTHORISED":
            txn_id = result["transactionID"]  # store for reversals and tip adjustments
            db.mark_paid(txn_ref, txn_id)
        else:
            db.clear_pending(txn_ref)         # card not charged — safe to retry
        break
    time.sleep(3)  # 204 No Content — still processing
```

---

## Android SDK — PAX SmartPOS

Your Android app runs on the PAX terminal. The SDK communicates with the Handpoint Payments App on the same device via IPC.

```kotlin
import com.handpoint.api.*
import com.handpoint.api.shared.*
import java.math.BigInteger
import java.util.UUID

class MainActivity : AppCompatActivity(), Events.SmartposRequired {

    private lateinit var hapi: Hapi

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val credentials = HandpointCredentials(
            sharedSecret = "YOUR_SHARED_SECRET",
            cloudApiKey  = "YOUR_API_KEY"   // required for getTransactionStatus recovery
        )
        hapi = HapiFactory.getHapiInstance(this, this, credentials)
    }

    // Wait for InitialisationComplete before calling any financial operation
    override fun currentTransactionStatus(statusInfo: StatusInfo, device: Device) {
        if (statusInfo.status == StatusInfo.Status.InitialisationComplete) {
            startSale()
        }
    }

    private fun startSale() {
        // Persist the reference BEFORE the call — needed for recovery if result is lost
        val ref = UUID.randomUUID().toString()
        db.savePendingTransaction(ref)

        val options = SaleOptions().apply { transactionReference = ref }
        hapi.sale(BigInteger("1000"), Currency.USD, options)  // $10.00
    }

    override fun endOfTransaction(result: TransactionResult, device: Device) {
        when (result.finStatus) {
            FinancialStatus.AUTHORISED -> {
                val txnId = result.transactionID  // store for reversals and tip adjustments
                db.markPaid(txnId)
            }
            FinancialStatus.DECLINED          -> showDeclined()
            FinancialStatus.CANCELLED         -> showCancelled()
            FinancialStatus.FAILED            -> showError()
            FinancialStatus.PARTIAL_APPROVAL  -> handlePartialApproval(result)
            else                              -> {}
        }
    }

    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {}
    override fun transactionResultReady(result: TransactionResult, device: Device) {}
}
```

---

## Android SDK — HiLite (Bluetooth)

Your Android app runs on a phone or tablet and connects to a HiLite card reader over Bluetooth.

```kotlin
import com.handpoint.api.*
import com.handpoint.api.shared.*
import java.math.BigInteger
import java.util.UUID

class MainActivity : AppCompatActivity(), Events.MposRequired {

    private lateinit var hapi: Hapi

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val credentials = HandpointCredentials(sharedSecret = "YOUR_SHARED_SECRET")
        hapi = HapiFactory.getHapiInstance(this, this, credentials)

        hapi.searchDevices(ConnectionMethod.BLUETOOTH)  // scan for nearby HiLite readers
    }

    // Connect to the first discovered reader (or show a picker to the user)
    override fun deviceDiscoveryFinished(devices: List<Device>) {
        if (devices.isNotEmpty()) hapi.connect(devices.first())
    }

    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
        if (status == ConnectionStatus.Connected) startSale()
    }

    private fun startSale() {
        // Persist the reference BEFORE the call — needed for recovery if result is lost
        val ref = UUID.randomUUID().toString()
        db.savePendingTransaction(ref)

        val options = SaleOptions().apply { transactionReference = ref }
        hapi.sale(BigInteger("1000"), Currency.GBP, options)  // £10.00
    }

    override fun endOfTransaction(result: TransactionResult, device: Device) {
        when (result.finStatus) {
            FinancialStatus.AUTHORISED -> {
                val txnId = result.transactionID  // store for reversals and tip adjustments
                db.markPaid(txnId)
            }
            FinancialStatus.DECLINED          -> showDeclined()
            FinancialStatus.CANCELLED         -> showCancelled()
            FinancialStatus.FAILED            -> showError()
            FinancialStatus.PARTIAL_APPROVAL  -> handlePartialApproval(result)
            else                              -> {}
        }
    }

    // HiLite has no on-device signature screen — always accept and display the merchant receipt
    override fun signatureRequired(signatureRequest: SignatureRequest, device: Device) {
        hapi.signatureResult(true)
    }

    override fun currentTransactionStatus(statusInfo: StatusInfo, device: Device) {}
    override fun transactionResultReady(result: TransactionResult, device: Device) {}
}
```

---

## iOS SDK — HiLite (Bluetooth)

Your iOS app runs on iPhone or iPad and connects to a HiLite card reader via Bluetooth.

```swift
import HandpointSDK

class ViewController: UIViewController, HeftDiscoveryDelegate, HeftStatusReportDelegate {

    var manager: HeftManager!
    var heftClient: HeftClient?

    override func viewDidLoad() {
        super.viewDidLoad()
        manager = HeftManager.sharedManager()
        manager.delegate = self
        manager.startDiscovery()  // scan for nearby HiLite readers
    }

    // Discovery complete — connect to first available reader (or show a picker)
    func didDiscoverFinished() {
        guard let device = manager.connectedCardReaders.values.first else { return }
        manager.clientForDevice(device,
                                sharedSecret: "YOUR_SHARED_SECRET",
                                delegate: self)
    }

    // Connection established — safe to start transactions
    func didConnect(_ client: HeftClient!) {
        heftClient = client

        // Persist a reference on your server before the call — needed for server-side recovery
        // heftClient?.saleWithAmount(1000, currency: "USD", cardholder: true)  // $10.00
        heftClient?.saleWithAmount(1000, currency: "USD", cardholder: true)
    }

    // Transaction result
    func responseFinanceStatus(_ info: FinanceResponseInfo!) {
        switch info.finStatus {
        case "AUTHORISED":
            let txnId = info.eFTTransactionID!  // store for reversals and tip adjustments
            fulfillOrder(txnId)
        case "DECLINED":
            showDeclined()
        case "CANCELLED":
            showCancelled()
        case "FAILED":
            showError(info.errorMessage)
        case "PARTIAL_APPROVAL":
            handlePartialApproval(info)
        default:
            break
        }
    }

    func responseStatus(_ info: ResponseInfo!) {}
    func responseError(_ info: ResponseInfo!) {}
}
```

---

## JavaScript SDK

Node.js or browser app connecting to a PAX terminal via the Handpoint Cloud.

```javascript
import hp from '@handpoint/cloud-js-sdk';

// --- Setup (once on app start) ---

await hp.init(
    'YOUR_API_KEY',
    false,  // false = production (.com); true = staging debug terminal (.io)
    (pendingEoT) => {
        // A transaction from the previous session has no stored result — recover it
        hp.getTransactionStatus(pendingEoT.transactionReference);
    }
);

// deviceName = serialNumber + '-' + terminalType, e.g. '082104578-PAXA920'
await hp.connect('YOUR_SERIAL-PAXA920');

// --- Make a sale ---

async function makeSale() {
    const { transactionReference, transactionResult } = hp.sale(
        '1000',   // $10.00 — smallest currency unit
        'USD',
        {},       // saleOptions — omit for a plain sale
        (status) => console.log('Terminal status:', status.message)
    );

    // Persist BEFORE awaiting — if the process crashes mid-transaction you can still recover
    await db.savePendingTransaction(transactionReference);

    const result = await transactionResult;

    if (result.finStatus === 'AUTHORISED') {
        const txnId = result.EFTTransactionID;  // store for reversals and tip adjustments
        await db.markPaid(transactionReference, txnId);
    } else {
        await db.clearPending(transactionReference);  // card not charged
    }
}
```

---

## Windows SDK (.NET)

.NET desktop POS app connecting to a PAX terminal over the Handpoint Cloud, or to a HiLite reader via Bluetooth.

```csharp
using com.handpoint.api;
using System;
using System.Collections.Generic;
using System.Numerics;

public class PaymentHandler : Events.Required, Events.Status
{
    private Hapi hapi;

    public void Initialize()
    {
        var credentials = new HandpointCredentials(
            sharedSecret: "YOUR_SHARED_SECRET",
            cloudApiKey:  "YOUR_API_KEY"   // required for GetTransactionStatus recovery
        );
        hapi = HapiFactory.GetAsyncInterface(this, credentials);

        // Connect by serial number and terminal model (serialNumber-terminalType)
        var device = new Device("MyTerminal", "YOUR_SERIAL-PAXA920", "",
                                ConnectionMethod.CLOUD);
        hapi.Connect(device);
    }

    public void StartSale()
    {
        // Persist the reference BEFORE calling Sale — needed for recovery if result is lost
        var transactionReference = Guid.NewGuid().ToString();
        db.SavePendingTransaction(transactionReference);

        var options = new SaleOptions { TransactionReference = transactionReference };
        OperationStartResult op = hapi.Sale(new BigInteger(1000), Currency.USD, options);

        if (!op.OperationStarted)
            ShowError("SDK rejected the command — check terminal connection");
        // Final result arrives asynchronously in EndOfTransaction
    }

    // ⚠ EndOfTransaction runs on a background thread — marshal to the UI thread before updating controls
    public void EndOfTransaction(TransactionResult result, Device device)
    {
        Application.Current.Dispatcher.Invoke(() =>
        {
            switch (result.FinStatus)
            {
                case FinancialStatus.AUTHORISED:
                    var txnId = result.efttransactionID;  // store for reversals and tip adjustments
                    db.MarkPaid(txnId);
                    break;
                case FinancialStatus.DECLINED:         ShowDeclined(); break;
                case FinancialStatus.CANCELLED:        ShowCancelled(); break;
                case FinancialStatus.FAILED:           ShowError(); break;
                case FinancialStatus.PARTIAL_APPROVAL: HandlePartialApproval(result); break;
            }
        });
    }

    public void CurrentTransactionStatus(StatusInfo status, Device device) { }
    public void DeviceDiscoveryFinished(List<Device> devices) { }
    public void SignatureRequired(SignatureRequest request, Device device)
    {
        hapi.SignatureResult(true);
    }
    public void TransactionResultReady(TransactionResult result, Device device) { }
}
```

---

## Cordova Plugin

Cordova or Ionic app connecting to a PAX terminal (Cloud) or HiLite reader (Bluetooth).

```javascript
// 1 — Initialise once on app start (PAX Cloud path shown; use 'BLUETOOTH' for HiLite)
HAPI.init(
    { apiKey: 'YOUR_API_KEY', connectionMethod: 'CLOUD' },
    () => console.log('Handpoint ready'),
    (err) => console.error('Init failed:', err)
);

// 2 — Connect to the terminal (serialNumber-terminalType format)
HAPI.connect(
    { deviceName: 'YOUR_SERIAL-PAXA920' },
    () => console.log('Connected'),
    (err) => console.error('Connect failed:', err)
);

// 3 — Register the result listener BEFORE initiating a sale
document.addEventListener('handpoint.transactionResultReady', function (event) {
    const result = event.detail;

    if (result.finStatus === 'AUTHORISED') {
        const txnId = result.EFTTransactionID;  // store for reversals and tip adjustments
        db.markPaid(savedRef, txnId);
    } else {
        db.clearPending(savedRef);              // card not charged
    }
});

// 4 — Start the sale
var savedRef = generateUUID();
db.savePendingTransaction(savedRef);  // persist BEFORE the call — required for recovery

HAPI.sale(
    { amount: 1000, currency: 'USD', transactionReference: savedRef },
    () => console.log('Sale started — waiting for cardholder'),
    (err) => console.error('Sale failed to start:', err)
);
```

---

## What's next

- [Authentication & Credentials](/reference/authentication) — full credential setup and environments
- [Transaction Result Object](/reference/transaction-result-object) — all result fields
- [Error Handling Guide](/reference/error-handling-guide) — what to do when things go wrong
- [Transaction Recovery](/reference/transaction-recovery) — handle dropped connections
