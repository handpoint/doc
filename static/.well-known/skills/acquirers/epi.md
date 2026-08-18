---
# EPI — acquirer skill

**Region:** US and Canada  
**Card brands:** Visa, Mastercard, Discover  
**Routing:** TSYS

## Supported capabilities

| Capability | Cloud API | Android PAX | Android HiLite | iOS HiLite | Cordova | Back Office |
|---|---|---|---|---|---|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Partial reversal | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Tip adjustment | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Pre-authorization | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Remote sale (on-terminal) | ✅ | ✅ | ❌ | ❌ | ❌ | — |
| Remote sale (back-office token) | — | — | — | — | — | ✅ |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Batch close | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## Critical: batch close (mandatory for EPI)

EPI merchants **must** perform a batch close at the end of every business day. Missing a batch close causes **ERR 005** (batch number mismatch) on the following day's transactions — all transactions will fail until the out-of-sync batch is resolved.

- Cloud API: `POST https://cloud.handpoint.com/close` with `{"terminal_serial_number": "..."}`
- Android SDK: `hapi.endOfDay()` — result in `endOfDayResult` callback
- Do not batch close for EmerchantPay or Paystrax — they settle automatically

Batch close timing: end of business hours. Do not batch close mid-day unless specifically required.

## Tip adjustment (post-sale — EPI only)

EPI tip is added **after** the sale completes, not in the sale request body. Never include `tipAmount` in the sale body for EPI.

- Cloud API: `POST https://cloud.handpoint.com/tipAdjustment` with `{"originalTransactionId": "...", "tipAmount": 200}`
- Android SDK: `hapi.tipAdjustment(BigInteger("200"), "transactionID", options)`

## Partial reversal

EPI supports partial reversal (reduce the authorised amount before settlement).

- Cloud API: include `"amount"` in `POST /reversal` body — `{"originalGuid": "...", "amount": 500}`
- Android SDK: `hapi.reversal("transactionID", BigInteger("500"), Currency.USD, options)`
- Full reversal: omit `amount` field

## Remote sale (card-not-present)

Remote sale requires merchant onboarding with EPI **and** enablement in Handpoint Portal (TMS).

**On-terminal entry** (PAX shows card entry screen — Cloud API or Android PAX only):
```json
POST /transactions
{ "action": "SALE", "amount": 1000, "currency": "USD", "motoChannel": true }
```
Android SDK: `hapi.motoSale(BigInteger("1000"), Currency.USD, options)`  
Not available on HiLite paths (no manual entry keypad).

**Back-office (card token — no terminal):**
```json
POST https://cloud.handpoint.com/moto/sale
{ "amount": 1000, "currency": "USD", "cardToken": "PROCHARGE_OR_EPI_TOKEN" }
```
Token source: ProCharge or EPI token provider — stored from a prior tokenization transaction.  
Error `3107` (CVV required): merchant has mandatory CVV configured — contact Handpoint to disable.  
Error `5252` (Card token failure): token invalid or expired — re-tokenize.

Load optional skill `optional/back-office.md` for full remote sale and remote refund flows.

## AVS (address verification) — MOTO sale and pre-auth only

EPI supports AVS for card-not-present transactions. Include a `billing` object in a `moToSale` or `moToPreAuthorization` request:

```json
{
  "operation": "moToSale",
  "amount": "1000",
  "currency": "USD",
  "billing": {
    "address": "123 Main St",
    "zipCode": "10001"
  }
}
```

`zipCode` is required when `billing` is included (max 20 chars); `address` is optional (max 50). No control characters in either field — an over-long or malformed value is rejected with HTTP 400 before it reaches the terminal.

AVS must be enabled per-merchant by Handpoint (`avsForMoto` internal flag). If it is disabled and `billing` is sent, the gateway rejects the transaction: error `4070`, `AVS is not enabled for this configuration`.

Never on refunds (linked or unlinked), reversals, captures or increases — `billing` is never inherited and is silently ignored on those operations. For a pre-auth, send it on the pre-authorization only; the capture carries none.

AVS result is `addressVerification.resultCode` on the `POST /moto/sale` response (`FULL_MATCH`, `ZIP_MATCH`, `NO_MATCH`, …). It is not exposed on the Android SDK or on `POST /transactions`. Handpoint never acts on it — a mismatch does not decline.

## Pre-authorization

Pre-auth available on TSYS US and Canada.

1. Create: `POST /transactions` with `action: "PREAUTH"` — same polling flow as sale
2. Capture: `POST /preauthorization/capture` with `{"originalGuid": "...", "amount": 1000}` (synchronous)
3. Increase/decrease: `POST /preauthorization/increase` with `{"originalGuid": "...", "increaseAmount": "20.00", "subtract": "0"}` — use `"subtract": "1"` to decrease
4. Reversal: `POST /reversal` with `{"originalGuid": "..."}`

Android SDK: `hapi.preAuthorization()`, `hapi.preAuthorizationCapture()`, `hapi.preAuthorizationReversal()`

Capture error `5001` (NullPointerException): originalGuid not found.  
Capture error `3211`: pre-auth already captured or voided.

## Tokenization

A card token is returned in `TransactionResult.cardToken` when tokenization is enabled for the merchant. The token can be used for subsequent remote sale charges via `POST /moto/sale`.

## Known error codes

| Code | Endpoint | Meaning | Action |
|---|---|---|---|
| ERR 005 | Next-day sale | Batch number mismatch — missing batch close | Call `POST /close` for the terminal, then retry |
| `3051` | `POST /reversal` | Already reversed | Check records |
| `3153` | `POST /reversal` | Transaction not in open batch | Fall back to refund |
| `3107` | `POST /moto/sale` | CVV required — not supported on back-office endpoint | Contact Handpoint to disable mandatory CVV |
| `5252` | `POST /moto/sale` | Card token invalid or expired | Re-tokenize |
| `0601` | Any | Full reversal sent after partial decline (TSYS GW-382) | Known TSYS issue — TSYS settles full auth; escalate if needed |

## See also

- Load path skill for your integration: `paths/cloud-api.md` or `paths/android-pax.md` etc.
- Remote sale and back-office: `optional/back-office.md`
- EPI full docs: https://developer.handpoint.com/acquirers/epi
- Error codes: https://developer.handpoint.com/reference/error-codes
- Validate integration: https://developer.handpoint.com/reference/validate-integration
