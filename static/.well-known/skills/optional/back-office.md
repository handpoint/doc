---
# Back-office operations — optional skill

Load this skill when the user's task involves remote sale, card token charging, tokenization, back-office refund, tip adjustment, or batch close via the REST API without a terminal present.

Also load your acquirer skill: `acquirers/{acquirer}.md` — it specifies which operations are supported.

## Remote sale (MOTO) — back-office via card token (`POST /moto/sale`)

Charge a stored card token. No terminal required. Synchronous — no polling.

Supported acquirers: EPI (ProCharge/EPI token), EmerchantPay, Paystrax  
Not supported: PAYSAFE

Requires: merchant remote sale onboarding with acquirer + enablement in Handpoint Portal (TMS)

```http
POST https://cloud.handpoint.com/moto/sale
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "amount": "10.00",
  "currency": "USD",
  "cardToken": "STORED_TOKEN_FROM_PRIOR_TRANSACTION",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
```

`amount` is a **major-unit decimal string** — `"10.00"` = $10.00. Not an integer, not minor units.  
`transactionReference` is a UUID v4 you generate before the call — persist to DB first for recovery.

With AVS (EPI — requires `avsForMoto` enabled per merchant by Handpoint):
```json
{
  "amount": "33.09",
  "currency": "USD",
  "cardToken": "STORED_TOKEN",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000",
  "billing": {
    "zipCode": "10001",
    "address": "123 Main St"
  }
}
```

**Success response (HTTP 200, synchronous):**
```json
{
  "@type": "sale",
  "httpStatus": 200,
  "guid": "82c40d50-9d7f-11f1-9d23-43aed1037e3c",
  "amount": "33.09",
  "currency": "USD",
  "approvalCode": "123456",
  "batchNumber": "123",
  "cardTypeName": "Visa",
  "issuerResponseCode": "00",
  "issuerResponseText": "Successful",
  "maskedCardNumber": "************0936",
  "retrievalReferenceNumber": "0000821725814",
  "transactionReference": "your-uuid",
  "expiryDateMMYY": "1027",
  "acquirerTid": "ACQUIRER_TID",
  "serverDateTime": "20260821164400549",
  "terminalDateTime": "20260821164400000"
}
```

**Critical:** The GUID for reversal is in the `guid` field — **NOT** `transactionID`. The response does not include `finStatus`. Check success by `httpStatus: 200`. Adding AVS does not add additional fields to the response.

Error responses:

| Code | Message | Meaning | Fix |
|---|---|---|---|
| `3107` | CVV required | Merchant has mandatory CVV configured for CNP | Contact Handpoint to disable mandatory CVV |
| `5252` | Card token failure | Token provider is down or unreachable (nested `httpStatus: 404` in `details`) — the token itself is valid | Retry later; if persistent, contact Handpoint to verify token provider availability |

**5252 error response shape (confirmed):**
```json
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Card token failure",
    "code": "5252",
    "details": {
      "description": "Card token failure",
      "errorCode": "5252",
      "errorGuid": "7e7d0940-9d89-11f1-a7f7-fd472d9bb27f",
      "httpStatus": 404
    }
  }
}
```

**Note on deferred tokenization (`GET /transactions/{id}/token`):** A 5252 on this endpoint can mean either the token provider is down OR tokenization is not configured for the merchant. Check with Handpoint Support to distinguish the two cases.

## MOTO sale on-terminal (PAX shows keyed card-entry screen)

The PAX terminal shows a manual card-entry screen. `cardEntryType: "CNP"` in the result confirms keyed entry. Uses the standard `POST /transactions` endpoint — same 202 → polling flow as a regular sale.

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "moToSale",
  "amount": "101",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
```

`amount` in minor-unit string (`"101"` = $1.01). With AVS add `"billing": {"zipCode": "10001", "address": "123 Main St"}` at the top level (same field names as back-office path).

**Result (polled, `finStatus: "AUTHORISED"`):**
```json
{
  "finStatus": "AUTHORISED",
  "transactionID": "4f936330-9d80-11f1-a7f7-fd472d9bb27f",
  "efttransactionID": "4f936330-9d80-11f1-a7f7-fd472d9bb27f",
  "type": "MOTO_SALE",
  "paymentScenario": "MOTO",
  "cardEntryType": "CNP",
  "requestedAmount": 101,
  "totalAmount": 101,
  "tipAmount": 0,
  "dueAmount": 0,
  "currency": "USD",
  "cardSchemeName": "Visa",
  "maskedCardNumber": "************2383",
  "authorisationCode": "123456",
  "issuerResponseCode": "00",
  "batchNumber": "123",
  "transactionReference": "your-uuid",
  "verificationMethod": "NOT_REQUIRED",
  "tenderType": "NOT_SET",
  "statusMessage": "Successful",
  "merchantReceipt": "<html>...(raw HTML)</html>",
  "customerReceipt": "<html>...(raw HTML)</html>"
}
```

**Receipt format:** On MOTO on-terminal, `merchantReceipt` and `customerReceipt` are delivered as **raw HTML strings**, not URLs. This is because the terminal has no receipt upload path for MOTO. Handle both formats — see cloud-api.md for the dual-format handling pattern.

Only available on Cloud API and Android PAX paths (not HiLite).

## Remote refund — back-office

Linked (by original transaction ID):
```json
POST https://cloud.handpoint.com/moto/refund
{
  "amount": "10.00",
  "currency": "USD",
  "originalGuid": "transactionID-from-original-remote-sale"
}
```

Unlinked (by card token):
```json
POST https://cloud.handpoint.com/moto/refund
{
  "amount": "10.00",
  "currency": "USD",
  "cardToken": "STORED_TOKEN"
}
```

`amount` is a **major-unit decimal string** — `"10.00"` = $10.00.

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

```http
POST https://cloud.handpoint.com/transactions/{transactionID}/tip-adjustment
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{ "amount": 8 }
```

`transactionID` in the URL is the `transactionID` from the original sale result (not the transactionReference).  
`amount` is in **major currency units** — `8` = $8.00. Must be called before batch close.  
Not supported on EmerchantPay or Paystrax — include tip in the sale body for those acquirers.

## Batch close (EPI and Paysafe+Interac only)

```http
POST https://cloud.handpoint.com/batch/close
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{ "deviceType": "PAXA920", "serialNumber": "082104578" }
```

Field names are `deviceType` and `serialNumber` (camelCase) — NOT `terminal_type`/`serial_number`. Using the wrong names returns 422 VALIDATION_FAILED.

**ViscusDummy/staging testing only:** include `"batchNumber": "123"` — the simulator does not track batch numbers automatically:
```json
{ "deviceType": "PAXA920", "serialNumber": "082104578", "batchNumber": "123" }
```

Call once per business day at close of business. Missing batch close → ERR 005 next day.  
Not required for EmerchantPay or Paystrax (auto-settlement).

**Success response includes `"customerReference": {}`** — always present as an empty object, reserved for future use. Ignore it.

**Partial reversal reminder:** Use `POST /reversal` with `"amount"` + `"currency"` for partial reversals too — it is synchronous, terminal-independent, and requires no polling. The on-terminal reversal path does not accept a partial amount from the ISV; the cardholder controls the partial amount from the terminal UI.

## Deferred tokenization (EPI only)

Retrieve a card token from a completed sale transaction — no card present required.

```http
GET https://cloud.handpoint.com/transactions/{transactionID}/token
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

`transactionID` must be a **SALE** transaction ID. Not a reversal ID. Not a pre-auth ID.

Response (HTTP 200):
```json
{ "cardToken": "TOKEN_STRING" }
```

Error shape: **Pattern C** — nested. Read `error.details.body.error.errorCode`:
- `3112` = wrong transaction type (not a SALE) — check you're using the SALE transactionID
- `TOKENIZATION_NOT_ENABLED` = not configured for this merchant — contact Handpoint Support

## Remote reversal (no reader, all acquirers)

```json
POST https://cloud.handpoint.com/reversal
{ "originalGuid": "transactionID" }
```

Synchronous — no polling. Works for both card-present and MOTO (card token) transactions. Preferred over the on-terminal reversal: fewer failure points, direct gateway call.

`finStatus` is NOT returned. Check `"httpStatus": 200` for success. Also verify `"issuerResponseCode": "00"` and `"issuerResponseText": "Successful"` — if `httpStatus` is 200 but `issuerResponseCode` is unexpected, log the full response and raise to Handpoint Support.

## AVS — EPI remote sale only

```json
POST /transactions
{
  "operation": "moToSale",
  "amount": "1000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "billing": { "address": "123 Main St", "zipCode": "10001" }
}
```

`zipCode` required when `billing` is included. `avsForMoto` flag must be enabled by Handpoint per merchant.

## See also

- Remote sale docs: https://developer.handpoint.com/acquirers/epi#remote-sale
- EPI remote sale: https://developer.handpoint.com/acquirers/epi#remote-sale
- EmerchantPay remote sale: https://developer.handpoint.com/acquirers/omnipay-emp#remote-sale
- Error codes: https://developer.handpoint.com/reference/error-codes
