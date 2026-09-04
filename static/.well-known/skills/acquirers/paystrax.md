---
# Paystrax — acquirer skill

**Region:** Europe (including Iceland)  
**Card brands:** Visa, Mastercard, AMEX, UnionPay  
**Settlement:** Automatic — no batch close required or supported

Paystrax and EmerchantPay share the same OMNIPAY integration protocol. Capabilities and constraints are identical unless noted.

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
| Batch close | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

## Settlement — automatic, no batch close

Paystrax settles automatically. **Do not call `POST /batch/close` or `hapi.endOfDay()`.**

## Tip — include in sale request body

```json
POST /transactions
{
  "operation": "sale",
  "amount": "1000",
  "currency": "EUR",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "tipAmount": 150
}
```
`tipAmount` is in minor currency units (150 = €1.50). `amount` is the pre-tip sale amount as a minor-unit string.

Android SDK: set `options.tipAmount = BigInteger("150")` in `SaleOptions`.  
Post-sale tip adjustment is **not** supported.

## AMEX routing

AMEX supported but requires a separate AMEX MID — merchant must onboard AMEX separately with Paystrax.

## Remote sale (card-not-present)

Remote sale requires merchant onboarding with Paystrax **and** enablement in Handpoint Portal (TMS).

**On-terminal entry** (PAX only):
```json
POST /transactions
{ "operation": "moToSale", "amount": "1000", "currency": "EUR", "terminal_type": "PAXA920", "serial_number": "082104578", "transactionReference": "<uuid-v4>" }
```

**Back-office (card token — no terminal):**
```json
POST https://cloud.handpoint.com/moto/sale
{ "amount": "10.00", "currency": "EUR", "cardToken": "STORED_TOKEN", "transactionReference": "<uuid-v4>" }
```
`amount` is a major-unit decimal string — `"10.00"` = €10.00.

Load optional skill `optional/back-office.md` for full remote sale and remote refund flows.

## Pre-authorization

Supported on Cloud API, Android PAX, and Cordova. **Not supported on HiLite paths.**

1. Create: `POST /transactions` with `action: "PREAUTH"`
2. Capture: `POST /preauthorization/capture` with `{"originalGuid": "...", "amount": 1000}`
3. Increase/decrease: `POST /preauthorization/increase` with `{"originalGuid": "...", "increaseAmount": "20.00"}`
4. Reversal: `POST /reversal`

## Tokenization

`cardToken` returned in `TransactionResult` when tokenization is enabled. Use for back-office charges via `POST /moto/sale`.

## Known constraints

- No partial reversal
- No post-sale tip adjustment — tip must be in the original sale
- HiLite paths: no pre-authorization, no remote sale

## See also

- Load path skill for your integration: `paths/cloud-api.md` or `paths/android-pax.md` etc.
- Remote sale and back-office: `optional/back-office.md`
- Paystrax full docs: https://developer.handpoint.com/acquirers/omnipay-paystrax
