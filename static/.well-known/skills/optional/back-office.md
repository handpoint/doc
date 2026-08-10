---
# Back-office operations — optional skill

Load this skill when the user's task involves remote sale, card token charging, tokenization, back-office refund, tip adjustment, or batch close via the REST API without a terminal present.

Also load your acquirer skill: `acquirers/{acquirer}.md` — it specifies which operations are supported.

## Remote sale (MOTO) — back-office via card token

Charge a stored card token. No terminal required. Synchronous — no polling.

Supported acquirers: EPI (ProCharge/EPI token), EmerchantPay, Paystrax  
Not supported: PAYSAFE

Requires: merchant remote sale onboarding with acquirer + enablement in Handpoint Portal (TMS)

```http
POST https://cloud.handpoint.com/moto/sale
ApiKeyCLoud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "amount": 1000,
  "currency": "USD",
  "cardToken": "STORED_TOKEN_FROM_PRIOR_TRANSACTION"
}
```

Response (synchronous):
```json
HTTP 200
{
  "finStatus": "AUTHORISED",
  "transactionID": "guid-for-reversal",
  "amount": 1000,
  "currency": "USD"
}
```

Error responses:

| Code | Message | Fix |
|---|---|---|
| `3107` | CVV required | Merchant has mandatory CVV for CNP — contact Handpoint to disable, or use on-terminal mode |
| `5252` | Card token failure | Token invalid, expired, or never created — re-tokenize |

## Remote sale on-terminal (PAX shows card entry screen)

The PAX terminal shows a manual card entry screen. Uses the standard `POST /transactions` endpoint.

```json
POST /transactions
{ "action": "SALE", "amount": 1000, "currency": "USD", "motoChannel": true }
```

Same 202 → polling flow as a regular sale. Only available on Cloud API and Android PAX paths.

## Remote refund — back-office

Linked (by original transaction ID):
```json
POST https://cloud.handpoint.com/moto/refund
{
  "amount": 1000,
  "currency": "USD",
  "originalGuid": "transactionID-from-original-remote-sale"
}
```

Unlinked (by card token):
```json
POST https://cloud.handpoint.com/moto/refund
{
  "amount": 1000,
  "currency": "USD",
  "cardToken": "STORED_TOKEN"
}
```

Remote refund error codes:

| Code | Message | Fix |
|---|---|---|
| `3209` | Refund amount exceeds original | Reduce `amount` |
| `3210` | Currency mismatch | Use same currency as original sale |

## Tokenization — obtaining a card token

A card token is returned in `TransactionResult.cardToken` after any card-present transaction when tokenization is enabled for the merchant. No special endpoint — the token arrives as part of the regular sale result.

The token maps to:
- EPI: ProCharge or EPI token (for `POST /moto/sale` charges)
- EmerchantPay / Paystrax: Handpoint gateway token
- PAYSAFE: single-use Paysafe token (cannot be reused across transactions)

## Tip adjustment (EPI only)

```json
POST https://cloud.handpoint.com/tipAdjustment
{ "originalTransactionId": "transactionID", "tipAmount": 200 }
```

Call after the sale completes. `tipAmount` is in minor currency units.  
Not supported on EmerchantPay or Paystrax — include tip in the sale body for those acquirers.

## Batch close (EPI only)

```json
POST https://cloud.handpoint.com/close
{ "terminal_serial_number": "123456789" }
```

Call once per business day at close of business. Missing batch close → ERR 005 next day.  
Not required for EmerchantPay or Paystrax (auto-settlement).

## Reversal (back-office, all acquirers)

```json
POST https://cloud.handpoint.com/reversal
{ "originalGuid": "transactionID" }
```

Synchronous. Works for both card-present and remote sale transactions.

## AVS — EPI remote sale only

```json
POST /transactions
{
  "action": "SALE", "amount": 1000, "currency": "USD",
  "motoChannel": true,
  "billing": { "address": "123 Main St", "zipCode": "10001" }
}
```

`zipCode` required when `billing` is included. `avsForMoto` flag must be enabled by Handpoint per merchant.

## See also

- Remote sale docs: https://developer.handpoint.com/acquirers/epi#remote-sale
- EPI remote sale: https://developer.handpoint.com/acquirers/epi#remote-sale
- EmerchantPay remote sale: https://developer.handpoint.com/acquirers/omnipay-emp#remote-sale
- Error codes: https://developer.handpoint.com/reference/error-codes
