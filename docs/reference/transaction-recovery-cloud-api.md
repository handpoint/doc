---
title: Transaction Recovery — Cloud REST API
sidebar_position: 4
description: How to implement robust transaction recovery when integrating directly with the Handpoint Cloud REST API using transactionReference.
---

# Transaction Recovery — Cloud REST API

When integrating directly with the Handpoint Cloud REST API, results are delivered to your `callbackUrl`. If your server is temporarily unreachable, or the device loses connectivity before the result arrives, the callback may never fire.

The `transactionReference` you supply in the request body is the key to recovering the outcome at any later point.

:::info Applicable operations
This recovery pattern applies to operations where a card is physically read and an acquirer authorization may have occurred: **Sale**, **Refund (on-device)**, **MOTO Sale (on-device)**, **MOTO Refund (on-device)**, and **Pre-Auth**.

It does **not** apply to: reversals, tip adjustment, pre-auth capture, or pre-auth increase. If a callback is lost for those operations, it is safe to retry the operation — no card is charged on your behalf without an explicit authorization.
:::

## How results are normally delivered

You supply a `transactionReference` (a UUID you generate) in the POST body when starting a transaction. When the transaction completes, the device POSTs the result to your `callbackUrl`.

```http
POST https://cloud.handpoint.com/transactions
Authentication: YOUR_API_KEY
Content-Type: application/json

{
  "operation": "sale",
  "serial_number": "0821599465",
  "terminal_type": "PAXA920",
  "amount": "1000",
  "currency": "GBP",
  "transactionReference": "e0b8ea26-f9b7-4eee-b7a2-a5d9032ea47f",
  "callbackUrl": "https://your-server.com/handpoint/result"
}
```

## finStatus values

| `finStatus` | Meaning | What to do |
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

The recommended pattern has two layers: an **application timeout** that prevents your backend from waiting indefinitely, and **background polling** that resolves the outcome and auto-reverses if needed.

```
T+0s    transactionReference persisted to DB → POST sent
T+Ns    Application timeout fires (your choice — e.g. 90 s with no callback)
         └─ Mark DB record as pending/unresolved
         └─ Return an appropriate response to the POS (e.g. FAILED)
         └─ Continue polling GET /transactions/{ref} in the background

Background polling (every 10 s):
  IN_PROGRESS or UNDEFINED  → keep polling
  AUTHORISED found           → send automatic saleReversal (no reader needed)
                               update DB to REVERSED
  Any other final finStatus  → clear pending record — card was not charged
```

## Implementation

### Step 1 — Generate and persist `transactionReference` before the request

Generate a UUID and save it to your database **before** sending the POST. This ensures you have the reference even if your server crashes mid-request.

```python
import uuid, requests

ref = str(uuid.uuid4())
db.save_pending_transaction(ref)  # persist first

response = requests.post(
    'https://cloud.handpoint.com/transactions',
    headers={'Authentication': 'YOUR_API_KEY'},
    json={
        'operation': 'sale',
        'serial_number': '0821599465',
        'terminal_type': 'PAXA920',
        'amount': '1000',
        'currency': 'GBP',
        'transactionReference': ref,
        'callbackUrl': 'https://your-server.com/handpoint/result',
    }
)
```

### Step 2 — Make your callback endpoint idempotent

Your `callbackUrl` endpoint should be idempotent — the device may POST the result more than once if it does not receive an HTTP 200 acknowledgement. Use `transactionReference` as the idempotency key:

```python
@app.route('/handpoint/result', methods=['POST'])
def handpoint_callback():
    result = request.json
    ref = result.get('transactionReference')

    if result.get('finStatus') == 'UNDEFINED':
        # Treat as unresolved — let background polling handle it
        return '', 200

    if ref and not db.transaction_already_processed(ref):
        db.save_transaction_result(ref, result)
        db.clear_pending(ref)

    return '', 200  # always acknowledge
```

### Step 3 — Poll `GET /transactions/{ref}` in the background

Start polling after your application timeout fires. Poll every 10 seconds. When you find a final status, wait 60 seconds before acting — this allows any delayed callback to arrive first and covers the partial approval acceptance window.

```python
import time, threading

POLL_INTERVAL = 10   # seconds
RESULT_WAIT   = 60   # seconds

def recover_in_background(ref, terminal_type, serial_number):
    while True:
        time.sleep(POLL_INTERVAL)

        response = requests.get(
            f'https://cloud.handpoint.com/transactions/{ref}',
            headers={'Authentication': 'YOUR_API_KEY'}
        )

        if not response.ok:
            continue  # network error — retry

        result = response.json()
        fin_status = result.get('finStatus')

        if fin_status in ('IN_PROGRESS', 'UNDEFINED'):
            continue  # keep polling

        # Final status — wait 60 s for any delayed callback to arrive
        time.sleep(RESULT_WAIT)

        # Check if the callback arrived during our wait
        if db.transaction_already_processed(ref):
            return

        if fin_status == 'AUTHORISED':
            # Card was charged but we told the POS FAILED — reverse automatically
            send_reversal(result.get('transactionID'), terminal_type, serial_number)
            db.mark_reversed(ref)
        else:
            # Not charged — clear pending record
            db.clear_pending(ref)
        return

def send_reversal(original_transaction_id, terminal_type, serial_number):
    requests.post(
        'https://cloud.handpoint.com/transactions',
        headers={
            'Authentication': 'YOUR_API_KEY',
            'Content-Type': 'application/json',
        },
        json={
            'operation': 'saleReversal',
            'originalTransactionID': original_transaction_id,
            'terminal_type': terminal_type,
            'serial_number': serial_number,
            'transactionReference': str(uuid.uuid4()),
        }
    )

# Start polling on timeout:
threading.Thread(
    target=recover_in_background,
    args=(ref, 'PAXA920', '0821599465'),
    daemon=True
).start()
```

## Recovering on server restart

If your server restarts before the callback arrived, query all pending references on startup:

```python
def recover_on_startup():
    pending = db.get_all_pending_transactions()
    for row in pending:
        threading.Thread(
            target=recover_in_background,
            args=(row['ref'], row['terminal_type'], row['serial_number']),
            daemon=True
        ).start()
```

:::warning Never retry the original transaction on timeout alone
If the status endpoint is unreachable (network error on your side), do **not** retry the payment. Retry the status query until you get a definitive answer.
:::

:::note Partial approvals (US only)
If `finStatus` is `PARTIALLY_APPROVED`, the device may be showing an accept/decline prompt to the cardholder with approximately a 30-second timeout. The 60-second wait built into the recovery flow above covers this window. Do not act on a partial approval result immediately — always allow the full wait period to elapse.
:::
