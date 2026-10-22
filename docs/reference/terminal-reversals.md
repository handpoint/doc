---
id: terminal-reversals
title: Terminal-Initiated Reversals
description: Reason codes and conditions under which a terminal automatically reverses a host-approved transaction, including the messageReasonCode field structure.
---

# Terminal-Initiated Reversals

A terminal-initiated reversal occurs when the terminal automatically cancels a transaction that the issuer/host has already approved. The approval reached the terminal, but a post-approval condition prevents the transaction from completing normally — so the terminal sends a reversal to the host before the transaction is settled.

These reversals are **not operator-triggered** and **not SDK-level cancellations**. They appear in the transaction result with `finStatus: CANCELLED` and carry a `messageReasonCode` in `customFields` that identifies the exact cause.

---

## `messageReasonCode` structure

The terminal includes `messageReasonCode` twice in the `customFields` block of the transaction result: once with the generic reversal code (`4000`) and once with the specific cause code.

```xml
<customFields>
  <entry>
    <key>messageReasonCode</key>
    <value>4000</value>   <!-- always present: indicates a customer/terminal reversal -->
  </entry>
  <entry>
    <key>messageReasonCode</key>
    <value>4351</value>   <!-- specific cause — see table below -->
  </entry>
</customFields>
```

When parsing the result, read **both** entries. The first (`4000`) confirms the result is a terminal-initiated reversal; the second gives you the actionable cause code.

---

## Reason codes

| Code | Condition | Description |
|---|---|---|
| `4000` | Generic reversal marker | Always present alongside a specific code. Indicates the reversal was initiated by the terminal (customer/terminal-side), not the host. |
| `4002` | Suspected terminal malfunction | The terminal detected an internal error after host approval, making it unsafe to proceed. **Note:** this case is not currently addressed in production — it triggers a reversal but the underlying error is not surfaced further. |
| `4021` | System timeout | The terminal did not receive a timely response during the completion phase, or a communication failure occurred after approval. Also covers: phone second-presentation timeout and partial-approved dialog timeout. |
| `4351` | Premature chip card removal | The cardholder removed the chip card before the transaction was fully completed, even though the host had already approved it. |
| `4352` | Chip card decline after host approval | The chip card itself declined after the host approved. Typically triggered by card risk management or EMV application logic reacting to the Issuer Authentication Data in the host response. |
| `4353` | Signature timeout | The cardholder did not provide a signature within the required time after host approval. |
| `4354` | Signature declined or partial approval rejected | Either the merchant declined the provided signature, or (for partial approvals) the cardholder rejected the partially approved amount. The terminal reverses the approved amount. |
| `4580` | Processing error | A general processing error prevented completion after host approval. Also used to report problems in the remote sale transaction response. |

---

## Authorization-to-reversal flow

```
1. Terminal → Host          Authorization request
2. Host → Terminal          Approval response
3. Terminal                 Post-approval processing
                            (card removal wait, signature capture, partial-approval dialog, etc.)
4. Terminal                 Issue detected (see reason codes above)
5. Terminal → Host          Reversal request (messageReasonCode: 4000 + specific code)
6. Host → Terminal          Reversal confirmation
7. Terminal                 Transaction finalized as CANCELLED — not settled
```

---

## Handling in your integration

Terminal-initiated reversals arrive as a standard `TransactionResult` with `finStatus: CANCELLED`. You do not need to send a separate reversal — it is already done. The steps to handle them:

1. **Detect the reversal**: check `finStatus === 'CANCELLED'` and confirm `customFields` contains `messageReasonCode: 4000`.
2. **Read the cause**: extract the second `messageReasonCode` entry for the specific code.
3. **Inform the operator**: map the cause code to a user-facing message (see table above). For `4351` (card removed early) or `4354` (partial approval rejected), prompt the operator to restart the transaction.
4. **Do not retry automatically**: a terminal-initiated reversal means the terminal is in a known-clean state. Safe to start a new transaction immediately.

```json
{
  "finStatus": "CANCELLED",
  "customFields": [
    { "key": "messageReasonCode", "value": "4000" },
    { "key": "messageReasonCode", "value": "4351" }
  ]
}
```

:::tip Partial approvals (`4354`)
If `messageReasonCode` is `4354`, check whether `finStatus` was preceded by a partial approval dialog. The cardholder rejected the partially approved amount — you may need to prompt for an alternative payment method to cover the remaining balance.
:::

:::note Signature flows (`4353`, `4354`)
Whether a signature timeout results in a reversal or a void depends on your terminal configuration. Both outcomes result in `finStatus: CANCELLED` with the appropriate reason code.
:::
