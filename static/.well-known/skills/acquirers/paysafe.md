---
# PAYSAFE — acquirer skill

**Region:** US and Canada  
**Card brands:** Visa, Mastercard, Amex, Discover, Interac (when enabled per merchant)  
**Settlement:** Automatic

## Supported capabilities

| Capability | Cloud API | Android PAX | Android HiLite | iOS HiLite | Cordova | Back Office |
|---|---|---|---|---|---|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Refund (card-present) | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Partial reversal | ❌ | ❌ | ❌ | ❌ | ❌ | — |
| Tip adjustment (non-Interac only) | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Pre-authorization | ❌ | ❌ | ❌ | ❌ | ❌ | — |
| Remote sale | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Interac Void (Interac merchants) | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Tokenization (Paysafe token) | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Batch close | ❌ | ❌ | ❌ | ❌ | ❌ | — |
| Paysafe Portal CNP refund | — | — | — | — | — | ✅ |

## What is NOT supported on PAYSAFE

The following capabilities are **not available** on PAYSAFE — do not expose them in your UI for PAYSAFE merchants:

- Remote sale / MOTO / card token
- Pre-authorization and pre-auth capture
- Partial reversal
- Tip adjustment on Interac cards (Interac only supports Sale and Void)
- Tip adjustment via Cordova (use Back Office REST API instead)

## Tip adjustment — non-Interac cards only

PAYSAFE supports tip adjustment for Visa, Mastercard, Amex, and Discover. **Not available for Interac transactions.**

Same restriction as EPI: tip adjustment is rejected if the original sale included an on-screen tip prompt. Only use for tip-at-table flows where no tip was collected during the sale.

Cloud API: `POST https://cloud.handpoint.com/transactions/{transactionID}/tip-adjustment` with `{"amount": 8}`  
Android SDK: `hapi.tipAdjustment(BigInteger("200"), "transactionID", options)`

## Interac — critical: VOID only (linked refund), not a reversal

For Interac debit transactions (merchants with Interac enabled):

- **Void only** — Interac transactions cannot be refunded or reversed after the card has left. Use Void before settlement while the card is present.
- **Void = a full-amount linked `refund()` call** — not `reversal()`. The gateway routes it correctly.
- Attempting a standard refund or reversal on an already-settled Interac transaction will be declined.
- The Void window closes at settlement — perform promptly.

```json
POST https://cloud.handpoint.com/refund
{ "amount": <original-amount-minor-units>, "currency": "CAD", "originalTransactionId": "interac-transactionID" }
```

Android SDK: `hapi.refund(BigInteger("<original-amount>"), Currency.CAD, "interac-transactionID", options)`

The `amount` must match the original sale amount exactly — Interac does not support partial Void.

See https://developer.handpoint.com/reference/interac-void for full Interac VOID rules.

## Tokenization — Paysafe single-use token

PAYSAFE uses a Paysafe-specific single-use card token. The token is returned in `TransactionResult.cardToken` after a tokenization-enabled transaction.

**Single-use only** — Paysafe tokens cannot be reused across multiple transactions. Each charge requires a new token from a fresh card-present transaction.

## Paysafe Portal — CNP refund (out-of-band)

Post-settlement Card Not Present refunds on PAYSAFE are processed through the **Paysafe Cards API portal** — not through Handpoint. Handpoint has no record of portal-processed transactions.

Steps:
1. Get `eftTransactionID` from the original `TransactionResult`
2. Wait 24 hours for settlement
3. In Paysafe portal: retrieve the auth by `MerchantRefNum` (use `eftTransactionID` as the value)
4. Submit the refund using Paysafe's TXN ID

## Settlement — automatic

Batch close is not required or supported for PAYSAFE. Settlement happens automatically.

## See also

- Load path skill for your integration: `paths/cloud-api.md` or `paths/android-pax.md` etc.
- Interac VOID guide: https://developer.handpoint.com/reference/interac-void
- PAYSAFE full docs: https://developer.handpoint.com/acquirers/paysafe
