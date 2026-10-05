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

```bash
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "operation": "sale",
  "serial_number": "0821599465",
  "terminal_type": "PAXA920",
  "amount": "1000",
  "currency": "GBP",
  "transactionReference": "e0b8ea26-f9b7-4eee-b7a2-a5d9032ea47f",
  "callbackUrl": "https://your-server.com/handpoint/result"
}'
```

## finStatus values

| `finStatus` | Meaning | What to do |
|---|---|---|
| `IN_PROGRESS` | Transaction still processing on device or host | Keep polling |
| `UNDEFINED` | Terminal sent the request to the gateway but did not receive a response before the connection timed out. The transaction **may or may not** have been authorised. | **Not final.** Stop polling this endpoint. Call `GET /transactions/{ref}/status` on `transactions.handpoint.com` to recover the acquirer outcome — see [UNDEFINED recovery](#undefined-network-loss-during-authorisation) below. |
| `AUTHORISED` | Approved — card charged | **Final.** Do not retry. |
| `DECLINED` | Declined by issuer | **Final.** Card not charged. Safe to retry. |
| `PROCESSED` | Completed (tokenization, MOTO) | **Final.** Do not retry. |
| `FAILED` | Technical failure | **Final.** Card not charged. Safe to retry. |
| `CANCELLED` | Cancelled by cardholder or merchant | **Final.** Card not charged. Safe to retry. |
| `PARTIAL_APPROVAL` | Gateway approved a partial amount *(US only)*. Seen from the terminal result channel: terminal is showing an accept/decline prompt. Seen from the `/status` recovery endpoint: gateway processed the partial, but the terminal may still be handling the prompt — the terminal result has not yet been delivered. | **Not final in either channel.** Keep polling the terminal result channel. Do not treat a `/status` `PARTIAL_APPROVAL` as settled — see [Partial approvals](#partial-approvals-us-only) below. |
| `REFUNDED` | Refund processed | **Final.** Do not retry. |
| `CAPTURED` | Pre-authorisation captured | **Final.** Do not retry. |

## Recovery flow

The recommended pattern has two layers: an **application timeout** that prevents your backend from waiting indefinitely, and **background polling** that resolves the outcome and auto-reverses if needed.

```
T+0s   transactionReference persisted to DB → POST sent
T+Ns   Application timeout fires (e.g. 90 s, no callback received)
        ├─ Mark DB record as pending/unresolved
        ├─ Return appropriate response to POS (e.g. FAILED)
        └─ Start TWO concurrent recovery threads:

  Thread A — poll GET /transaction-result/{id} every 5 s (terminal channel)
              Terminal result is always authoritative when it arrives.
              On any result → save it, cancel Thread B.

  Thread B — poll GET /transactions/{ref}/status every 10 s (acquirer view)
              IN_PROGRESS or PARTIAL_APPROVAL → terminal still processing; keep Thread A running
              UNDEFINED        → acquirer has no record; card not charged; cancel both threads
              AUTHORISED       → gateway charged card; no terminal result yet
                                  run pingDevice to check terminal reachability
                                  if unreachable → device offline; prompt ISV to connect;
                                                   retry Thread B in 31 s
                                  if reachable   → terminal should deliver soon; keep Thread A
                                  after 5-minute overall timeout → use /status result as provisional
              Any other final  → wait 60 s for Thread A; use /status finStatus if still nothing
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
    headers={'ApiKeyCloud': 'YOUR_MERCHANT_API_KEY'},
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
        # Terminal timed out — acquirer outcome unknown. Acknowledge so retries stop.
        # The terminal may deliver a corrected result (AUTHORISED/DECLINED) to this
        # same endpoint once its internet connection is restored — handle it normally
        # when it arrives. In parallel, poll GET /transactions/{ref}/status on
        # transactions.handpoint.com to recover the actual acquirer outcome.
        return '', 200

    if ref and not db.transaction_already_processed(ref):
        db.save_transaction_result(ref, result)
        db.clear_pending(ref)

    return '', 200  # always acknowledge
```

### Step 3 — Run two concurrent recovery threads

Start both threads when your application timeout fires. Thread A polls the terminal result channel — the terminal's delivery is always authoritative. Thread B polls the acquirer status endpoint as a supplementary check. The two threads are complementary: a result from Thread A cancels Thread B; Thread B guides the overall strategy but never replaces Thread A.

```python
import time, threading

TERMINAL_POLL   = 5    # seconds — Thread A: terminal result channel
STATUS_POLL     = 10   # seconds — Thread B: acquirer status endpoint
RESULT_WAIT     = 60   # seconds — wait for delayed callback after final status
OVERALL_TIMEOUT = 300  # seconds — 5-min max before treating /status as provisional

stop_event = threading.Event()

# ── Thread A — terminal result channel ────────────────────────────────────────

def poll_terminal_result(ref, terminal_type, serial_number):
    """Keep polling /transaction-result until the terminal delivers a final result."""
    deadline = time.time() + OVERALL_TIMEOUT
    while not stop_event.is_set() and time.time() < deadline:
        time.sleep(TERMINAL_POLL)
        response = requests.get(
            f'https://cloud.handpoint.com/transactions/{ref}',
            headers={'ApiKeyCloud': 'YOUR_MERCHANT_API_KEY'}
        )
        if not response.ok:
            continue

        result     = response.json()
        fin_status = result.get('finStatus')

        if fin_status in ('IN_PROGRESS', 'PARTIAL_APPROVAL'):
            # Terminal still processing (PARTIAL_APPROVAL = accept/decline prompt on screen)
            continue

        if fin_status == 'UNDEFINED':
            # Terminal timed out — acquirer view needed (Thread B handles this)
            # Keep polling in case connectivity is restored and a corrected result arrives
            continue

        # Terminal delivered a final result — this is authoritative
        stop_event.set()
        if not db.transaction_already_processed(ref):
            db.save_transaction_result(ref, result)
            db.clear_pending(ref)
        return

# ── Thread B — acquirer status endpoint ───────────────────────────────────────

def poll_acquirer_status(ref, terminal_type, serial_number):
    """
    Poll /transactions/{ref}/status on transactions.handpoint.com for the acquirer's view.
    Use this to guide the overall recovery strategy, not to replace the terminal result.
    """
    deadline = time.time() + OVERALL_TIMEOUT
    while not stop_event.is_set() and time.time() < deadline:
        time.sleep(STATUS_POLL)
        response = requests.get(
            f'https://transactions.handpoint.com/transactions/{ref}/status',
            headers={'ApiKeyCloud': 'YOUR_MERCHANT_API_KEY'}
        )
        if not response.ok:
            continue

        status = response.json().get('finStatus')

        if status in ('IN_PROGRESS', 'UNDEFINED'):
            # Acquirer has no record yet — card not charged; keep watching
            if status == 'UNDEFINED':
                # If Thread A also sees UNDEFINED long enough, we can conclude not charged
                pass
            continue

        if status == 'PARTIAL_APPROVAL':
            # Gateway processed a partial amount — terminal is still showing accept/decline prompt.
            # Do NOT treat this as final. Thread A will deliver the real outcome once
            # the merchant accepts or declines on the terminal.
            continue

        if status == 'AUTHORISED':
            # Gateway charged the card — check whether the terminal result has been delivered
            if db.transaction_already_processed(ref):
                stop_event.set()
                return  # Terminal already delivered — nothing more to do

            # Terminal has not delivered yet — check if the device is reachable
            if not ping_device(terminal_type, serial_number):
                # Device offline — it will deliver the result when it reconnects.
                # Notify the ISV and wait before checking again.
                notify_pos('Gateway returned AUTHORISED but the device is offline. '
                           'Connect the device to the internet to receive the final result.')
                time.sleep(31)  # minimum gap — SDK retry schedule is every 5 s for 100 s
                continue        # re-check /status and reachability

            # Device is reachable — Thread A should deliver soon; keep waiting
            continue

        # Any other final status from the acquirer (DECLINED, FAILED, CANCELLED, PROCESSED…)
        # Wait for Thread A to deliver the terminal result first
        time.sleep(RESULT_WAIT)
        if db.transaction_already_processed(ref):
            stop_event.set()
            return

        # Terminal did not deliver within RESULT_WAIT — use acquirer status as provisional
        stop_event.set()
        if status == 'AUTHORISED':
            send_reversal(ref, terminal_type, serial_number)
            db.mark_reversed(ref)
        else:
            db.clear_pending(ref)
        return

def ping_device(terminal_type, serial_number) -> bool:
    """Returns True if the device responds to a ping (is reachable)."""
    r = requests.post(
        'https://cloud.handpoint.com/transactions',
        headers={'ApiKeyCloud': 'YOUR_MERCHANT_API_KEY'},
        json={
            'operation':     'pingDevice',
            'terminal_type': terminal_type,
            'serial_number': serial_number,
        },
        timeout=10
    )
    return r.ok and r.json().get('result') == 'PING_PONG'

def send_reversal(ref, terminal_type, serial_number):
    result = db.get_transaction_result(ref)
    requests.post(
        'https://cloud.handpoint.com/transactions',
        headers={'ApiKeyCloud': 'YOUR_MERCHANT_API_KEY'},
        json={
            'operation':              'saleReversal',
            'originalTransactionID':  result.get('transactionID'),
            'terminal_type':          terminal_type,
            'serial_number':          serial_number,
            'transactionReference':   str(uuid.uuid4()),
        }
    )

def notify_pos(message):
    pass  # implement as appropriate for your POS (push notification, webhook, etc.)

# Start both recovery threads on timeout:
threading.Thread(target=poll_terminal_result, args=(ref, 'PAXA920', '0821599465'), daemon=True).start()
threading.Thread(target=poll_acquirer_status, args=(ref, 'PAXA920', '0821599465'), daemon=True).start()
```

## Recovering on server restart

If your server restarts before the callback arrived, query all pending references on startup and restart both recovery threads for each:

```python
def recover_on_startup():
    pending = db.get_all_pending_transactions()
    for row in pending:
        ref, tt, sn = row['ref'], row['terminal_type'], row['serial_number']
        stop_event = threading.Event()
        threading.Thread(target=poll_terminal_result, args=(ref, tt, sn), daemon=True).start()
        threading.Thread(target=poll_acquirer_status, args=(ref, tt, sn), daemon=True).start()
```

## UNDEFINED — network loss during authorisation {#undefined-network-loss-during-authorisation}

`finStatus: UNDEFINED` means the terminal sent the authorisation request to the gateway but did not receive a response before the connection timed out. The acquirer may or may not have processed the transaction.

### Why it happens

The most common cause is a loss of Wi-Fi or cellular connectivity **after** the terminal has written the request to the network socket but **before** the gateway response arrives. The terminal cannot determine whether the gateway received and processed the request.

### Two-part recovery

**Part 1 — Query the acquirer directly**

Call `GET /transactions/{transactionReference}/status` on `https://transactions.handpoint.com` immediately. This endpoint bypasses the terminal and queries the acquirer directly:

- Returns a final `finStatus` (`AUTHORISED`, `DECLINED`, etc.) → the acquirer has a record; use that as the real outcome.
- Returns `UNDEFINED` → the acquirer has no record of this transaction; the card was **not** charged.

```python
def recover_undefined_in_background(ref):
    import time, requests

    for _ in range(18):  # poll for up to 3 minutes
        time.sleep(10)
        r = requests.get(
            f'https://transactions.handpoint.com/transactions/{ref}/status',
            headers={'ApiKeyCloud': 'YOUR_MERCHANT_API_KEY'}
        )
        if not r.ok:
            continue
        status = r.json().get('finStatus')
        if status in ('UNDEFINED', 'IN_PROGRESS'):
            continue   # acquirer has no record yet — keep polling
        if status == 'AUTHORISED':
            # Card was charged but POS was told FAILED — reverse automatically
            send_reversal(ref, row['terminal_type'], row['serial_number'])
            db.mark_reversed(ref)
        else:
            db.clear_pending(ref)   # not charged
        return

    # Timed out — acquirer has no record; treat as non-charge
    db.clear_pending(ref)
```

**Part 2 — Accept the delayed callback**

When the terminal's internet connection restores, the SDK automatically retries delivering the result to your `callbackUrl`. This delivery may arrive **minutes or hours** after the UNDEFINED was first reported and will contain the actual `finStatus` (`AUTHORISED`, `DECLINED`, etc.) — not UNDEFINED.

Your callback handler must therefore:
1. Be idempotent (deduplicate on `transactionReference`).
2. Accept a callback for a reference previously marked UNDEFINED and update the record accordingly — do **not** silently drop callbacks for references already in your database.

```python
@app.route('/handpoint/result', methods=['POST'])
def handpoint_callback():
    result = request.json
    ref    = result.get('transactionReference')
    fs     = result.get('finStatus')

    if fs == 'UNDEFINED':
        # Terminal still offline — acknowledge to stop retries.
        # A corrected delivery (AUTHORISED/DECLINED) will arrive when connectivity restores.
        return '', 200

    # Handle normally — may be a delayed corrected delivery after an earlier UNDEFINED
    if ref and not db.transaction_already_processed(ref):
        db.save_transaction_result(ref, result)
        db.clear_pending(ref)
    return '', 200
```

:::tip
Part 1 (status endpoint) resolves within seconds when the acquirer has a record. Part 2 (delayed callback) is the fallback for when the terminal was offline and the SDK queued the result internally. Implement both — they are complementary, not alternatives.
:::

---

:::warning Never retry the original transaction on timeout alone
If the status endpoint is unreachable (network error on your side), do **not** retry the payment. Retry the status query until you get a definitive answer.
:::

## Partial approvals (US only) {#partial-approvals-us-only}

`PARTIAL_APPROVAL` means the gateway authorised a lesser amount than requested (e.g. the card had insufficient balance). **It is not final in either the terminal result channel or the `/status` recovery channel.**

### What each channel means

| Channel | `PARTIAL_APPROVAL` means | Action |
|---|---|---|
| Terminal result (`/transaction-result`) | Terminal is showing an accept/decline prompt to the cardholder | Keep polling — the cardholder has ~60 s to decide |
| Acquirer status (`/transactions/{ref}/status`) | Gateway authorised a partial amount; terminal still handling the prompt | Do **not** treat as final. Keep Thread A running |

### How the terminal resolves it

Once the cardholder decides, the SDK delivers one of these outcomes via your `callbackUrl` and Thread A:

```
PARTIAL_APPROVAL from /status (not final)
    │
    ├─ Cardholder accepts partial amount
    │       SDK delivers finStatus = PARTIAL_APPROVAL  ← final; charge for partial amount
    │
    └─ Cardholder declines partial amount
            SDK sends reversal automatically
                │
                ├─ Reversal succeeds → finStatus = CANCELLED  ← final; card not charged
                │
                └─ Reversal fails   → finStatus = PARTIAL_APPROVAL  ← final; charge stands
                                      (partial amount was charged; reversal could not complete)
```

### If the result never reaches the terminal

If the device goes offline while waiting for the cardholder to accept or decline, Thread A will not receive a result. Use `pingDevice` to check reachability:

- **Device offline**: prompt the ISV to reconnect the device. The terminal will show the accept/decline prompt again when it reconnects and the SDK retries.
- **Device online but no result after 31 s**: recheck `/status`. If `/status` still shows `PARTIAL_APPROVAL`, the cardholder has not yet decided — keep waiting.

:::warning
Never record a `PARTIAL_APPROVAL` from the `/status` endpoint as a settled charge. The cardholder may decline and the SDK may reverse — your final outcome comes from the terminal result channel (Thread A), not the acquirer status channel.
:::
