---
# EmerchantPay — acquirer skill

**Region:** Europe  
**Card brands:** Visa, Mastercard, AMEX, UnionPay  
**Settlement:** Automatic — no batch close required or supported

## Supported capabilities

| Capability | Cloud API | Android PAX | Android HiLite | iOS HiLite | Cordova | Back Office |
|---|---|---|---|---|---|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Partial reversal | ❌ | ❌ | ❌ | ❌ | ❌ | — |
| Tip adjustment (post-sale) | ❌ | ❌ | ❌ | ❌ | ❌ | — |
| tipAmount in sale request | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Pre-authorization | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| Remote sale (on-terminal) | ✅ | ✅ | ❌ | ❌ | ❌ | — |
| Remote sale (back-office token) | — | — | — | — | — | ✅ |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Money remittance | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Batch close | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

## Settlement — automatic, no batch close

EmerchantPay settles automatically. **Do not call `POST /close` or `hapi.endOfDay()`** — these are EPI-only operations and will error on EmerchantPay merchants.

## Tip — include in sale request body

EmerchantPay accepts the tip amount at sale time. Add `tipAmount` to the sale request:

```json
POST /transactions
{
  "action": "SALE",
  "amount": 1000,
  "currency": "EUR",
  "tipAmount": 150
}
```

Android SDK: set `options.tipAmount = BigInteger("150")` in `SaleOptions` before calling `hapi.sale()`.

Post-sale tip adjustment (`POST /tipAdjustment`) is **not** supported on EmerchantPay. Never call it for EmerchantPay merchants.

## AMEX routing

AMEX is supported but requires a **separate AMEX MID** — the merchant must have onboarded AMEX separately with EmerchantPay. Without a separate AMEX MID, AMEX cards are declined. The ISV cannot control this — it is a merchant account configuration.

## Remote sale (card-not-present)

Remote sale requires merchant onboarding with EmerchantPay **and** enablement in Handpoint Portal (TMS).

**On-terminal entry** (PAX shows card entry screen — Cloud API or Android PAX only):
```json
POST /transactions
{ "action": "SALE", "amount": 1000, "currency": "EUR", "motoChannel": true }
```
Android SDK: `hapi.motoSale(BigInteger("1000"), Currency.EUR, options)`  
Not available on HiLite paths.

**Back-office (card token — no terminal):**
```json
POST https://cloud.handpoint.com/moto/sale
{ "amount": 1000, "currency": "EUR", "cardToken": "STORED_TOKEN" }
```
Token source: `cardToken` field in `TransactionResult` from a prior tokenization sale.

Remote refund (back-office):
```json
POST https://cloud.handpoint.com/moto/refund
{ "amount": 1000, "currency": "EUR", "originalGuid": "transactionID-from-original-remote-sale" }
```

Load optional skill `optional/back-office.md` for full remote sale and remote refund flows.

## Pre-authorization

Pre-auth supported on Cloud API, Android PAX, and Cordova. **Not supported on HiLite paths.**

Pre-auth via back-office (remote pre-auth) requires separate merchant remote sale onboarding.

1. Create: `POST /transactions` with `action: "PREAUTH"`
2. Capture: `POST /preauthorization/capture` with `{"originalGuid": "...", "amount": 1000}`
3. Increase/decrease: `POST /preauthorization/increase` with `{"originalGuid": "...", "increaseAmount": "20.00"}`
4. Reversal: `POST /reversal` with `{"originalGuid": "..."}`

## Money remittance

Supported on all card-present paths. Used for merchant payout / remittance operations.  
Android SDK: `hapi.moneyRemittance(BigInteger("1000"), Currency.EUR, options)`  
Cloud API: `POST /transactions` with `action: "MONEYREMITTANCE"`

## Tokenization

`cardToken` is returned in `TransactionResult` when tokenization is enabled. Use it for subsequent back-office charges via `POST /moto/sale`.

## Known constraints

- No partial reversal — EmerchantPay does not support reducing the authorised amount before settlement
- No post-sale tip adjustment — tip must be included in the original sale
- HiLite paths do not support pre-authorization or remote sale

## See also

- Load path skill for your integration: `paths/cloud-api.md` or `paths/android-pax.md` etc.
- Remote sale and back-office: `optional/back-office.md`
- EmerchantPay full docs: https://developer.handpoint.com/acquirers/omnipay-emp
- Error codes: https://developer.handpoint.com/reference/error-codes
