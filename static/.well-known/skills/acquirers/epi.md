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

- Cloud API: `POST https://cloud.handpoint.com/batch/close` with `{"deviceType": "PAXA920", "serialNumber": "082104578"}` — field names are `deviceType`/`serialNumber` (camelCase), NOT `terminal_type`/`serial_number`. For ViscusDummy/staging testing add `"batchNumber": "123"` to the body.
- Android SDK: `hapi.endOfDay()` — result in `endOfDayResult` callback
- Do not batch close for EmerchantPay or Paystrax — they settle automatically

Batch close timing: end of business hours. Do not batch close mid-day unless specifically required.

## Tip adjustment (post-sale — EPI only)

EPI tip is added **after** the sale completes, not in the sale request body. Never include `tipAmount` in the sale body for EPI.

- Cloud API: `POST https://cloud.handpoint.com/transactions/{transactionID}/tip-adjustment` with `{"amount": 8}` — `amount` is in major currency units (8 = $8.00), `transactionID` in URL is from the original sale result
- Android SDK: `hapi.tipAdjustment(BigInteger("200"), "transactionID", options)`

## Partial reversal

EPI supports partial reversal (reduce the authorised amount before settlement). Two paths — different endpoints with different amount formats:

**Remote reversal (`POST /reversal`, no reader) — preferred:**
```json
{ "originalGuid": "...", "amount": "50.05", "currency": "USD" }
```
`amount` is a **major-unit decimal string** (`"50.05"` = $50.05). `currency` is required when `amount` is present. Synchronous response.

**On-terminal reversal (`POST /transactions`, reader required):**
```json
{ "operation": "reversal", "terminal_type": "PAXA920", "serial_number": "082104578", "originalTransactionId": "..." }
```
On the terminal path, the cardholder can perform a partial reversal via the terminal UI; the ISV does not pass `amount` in the request.

**Android SDK:** `hapi.reversal("transactionID", BigInteger("500"), Currency.USD, options)` — amount in minor units.

Full reversal on `POST /reversal`: omit `amount` and `currency` fields.

## Remote sale (card-not-present)

Remote sale requires merchant onboarding with EPI **and** enablement in Handpoint Portal (TMS).

**On-terminal entry** (PAX shows card entry screen — Cloud API or Android PAX only):
```json
POST /transactions
{ "operation": "moToSale", "amount": "1000", "currency": "USD", "terminal_type": "PAXA920", "serial_number": "082104578", "transactionReference": "<uuid-v4>" }
```
Android SDK: `hapi.motoSale(BigInteger("1000"), Currency.USD, options)`  
Not available on HiLite paths (no manual entry keypad).

**Remote (card token — no terminal):**
```json
POST https://cloud.handpoint.com/moto/sale
{ "amount": "10.00", "currency": "USD", "cardToken": "PROCHARGE_OR_EPI_TOKEN", "transactionReference": "<uuid-v4>" }
```
`amount` is a major-unit decimal string — `"10.00"` = $10.00.  
Token source: ProCharge or EPI token provider — stored from a prior tokenization transaction.  
Response: HTTP 200 synchronous — check `httpStatus: 200`. The reversal GUID is in the `guid` field (not `transactionID`). No `finStatus` in this response.  
Error `3107` (CVV required): mandatory CVV configured — contact Handpoint to disable.  
Error `5252` (Card token failure): token provider is down or unreachable — the stored token is valid, retry later. If persistent, contact Handpoint to verify token provider status. Note: on deferred tokenization (`GET /transactions/{id}/token`), 5252 can also mean tokenization is not configured for the merchant.

Load optional skill `optional/back-office.md` for full request/response examples including AVS.

## AVS (address verification) — on remote sale

EPI supports AVS for card-not-present transactions. Include a `billing` object in the sale or motoSale request:

```json
{
  "operation": "moToSale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "<uuid-v4>",
  "billing": {
    "address": "123 Main St",
    "zipCode": "10001"
  }
}
```

`zipCode` is required when `billing` is included; `address` is optional.  
AVS must be enabled per-merchant by Handpoint (`avsForMoto` internal flag).  
AVS result is in `TransactionResult.avsResult`.

## Pre-authorization

Pre-auth available on TSYS US and Canada.

1. Create: `POST /transactions` with `"operation": "preAuthorization"` — same polling flow as sale
2. Capture: `POST /preauthorization/capture` with `{"originalGuid": "...", "capturedAmount": "10.00"}` — `capturedAmount` is major-unit decimal string; field is `capturedAmount`, not `amount`
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
| ERR 005 | Next-day sale | Batch number mismatch — missing batch close | Call `POST /batch/close` with `{"deviceType":"PAXA920","serialNumber":"<serial>"}`, then retry |
| `3051` | `POST /reversal` | Already reversed | Check records |
| `3153` | `POST /reversal` | Transaction not in open batch | Fall back to refund |
| `3107` | `POST /moto/sale` | CVV required — not supported on back-office endpoint | Contact Handpoint to disable mandatory CVV |
| `5252` | `POST /moto/sale` | Token provider is down or unreachable — token is valid | Retry later; contact Handpoint if persistent |
| `0601` | Any | Full reversal sent after partial decline (TSYS GW-382) | Known TSYS issue — TSYS settles full auth; escalate if needed |

## See also

- Load path skill for your integration: `paths/cloud-api.md` or `paths/android-pax.md` etc.
- Remote sale and back-office: `optional/back-office.md`
- EPI full docs: https://developer.handpoint.com/acquirers/epi
- Error codes: https://developer.handpoint.com/reference/error-codes
- Validate integration: https://developer.handpoint.com/reference/validate-integration
