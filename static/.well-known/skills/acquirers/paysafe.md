---
# PAYSAFE — acquirer skill

**Region:** US and Canada  
**Card brands:** Visa, Mastercard, Discover, Interac  
**Routing:** TSYS + TNS  
**Settlement:** Automatic

## Supported capabilities

| Capability | Cloud API | Android PAX | Android HiLite | iOS HiLite | Cordova | Back Office |
|---|---|---|---|---|---|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Partial reversal | ❌ | ❌ | ❌ | ❌ | ❌ | — |
| Tip adjustment | ❌ | ❌ | ❌ | ❌ | ❌ | — |
| Pre-authorization | ❌ | ❌ | ❌ | ❌ | ❌ | — |
| Remote sale | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Interac (Canada) | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Tokenization (Paysafe token) | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Batch close | ❌ | ❌ | ❌ | ❌ | ❌ | — |
| Paysafe Portal CNP refund | — | — | — | — | — | ✅ |

## What is NOT supported on PAYSAFE

The following capabilities are **not available** on PAYSAFE — do not expose them in your UI for PAYSAFE merchants:

- Remote sale / MOTO / card token
- Pre-authorization and pre-auth capture
- Partial reversal
- Tip adjustment

## Interac — critical: VOID only, no refund

For Interac debit transactions (Canadian merchants):

- **Reversal only** — Interac transactions must be reversed (voided), not refunded
- **Standard `POST /reversal`** with `originalGuid` from the Interac transaction result
- Attempting a refund on an Interac transaction is declined
- The reversal window follows Interac rules — perform promptly before end of day

```json
POST https://cloud.handpoint.com/reversal
{ "originalGuid": "interac-transactionID" }
```

Android SDK: `hapi.reversal("interac-transactionID")`

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
- PAYSAFE full docs: https://developer.handpoint.com/acquirers/paysafe-tsys
