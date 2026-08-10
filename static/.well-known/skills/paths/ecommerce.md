# eCommerce (SmartBoard) — path skill

**Europe only** — EEA, UK, and Monaco. Not available to US or non-European merchants.

SmartBoard is Handpoint's Card-Not-Present (CNP) gateway for online payments. It runs on the CardStream/P3 platform and is entirely separate from the card-present SDK stack. No `sharedSecret` or `cloudApiKey` — eCommerce uses its own `merchantID` and `merchantSecret`.

Also load your acquirer skill if the merchant also uses a card-present acquirer (EmerchantPay, Paystrax, etc.) — SmartBoard does not replace it.

Full API reference: https://developer-ecomm.handpoint.com

---

## Credentials

| Field | Description |
|---|---|
| `merchantID` | Merchant account ID — provided during onboarding by the partner |
| `merchantSecret` | Signing secret for HMAC-SHA512 request signatures |

These are not the same as `sharedSecret` or `cloudApiKey`. eCommerce credentials are scoped to the SmartBoard/CardStream gateway only.

---

## Integration paths

| Method | PCI scope | 3DS | Recurring/MIT | Google/Apple Pay |
|---|---|---|---|---|
| **Hosted Payment Page (HPP)** | Lowest — card data never touches your server | Automatic | CIT card-on-file only | No |
| **Hosted Payment Fields (HPF)** | Low — iFrame fields post directly to gateway | Manual redirect | Full MIT | Yes |
| **Direct** | Higher — card data passes through your server | Manual redirect | Full MIT | Yes |
| **Batch** | Varies | N/A | Supported | No |
| **Pay By Link / Pay Button** | Out of scope | Automatic | No | No |
| **Shopping Carts** | Out of scope | Automatic | No | No |
| **Mobile SDKs** | Out of scope | Automatic | Card-on-file | Yes |

**Default recommendation:** HPP. Handles 3DS and SCA automatically. Use Direct or HPF when you need recurring MIT, Google/Apple Pay, or REFUND/CANCEL actions.

---

## API endpoint

```
POST https://commerce-api.handpoint.com/hosted/    ← HPP
POST https://commerce-api.handpoint.com/direct/    ← Direct / HPF
```

All requests use `Content-Type: application/x-www-form-urlencoded`.

---

## Core request fields

| Field | Required | Description |
|---|---|---|
| `merchantID` | Yes | Your merchant account ID |
| `action` | Yes | `SALE`, `VERIFY`, `PREAUTH`, `REFUND`, `CANCEL`, `QUERY` |
| `type` | Yes | `1`=ECOM, `2`=MOTO, `9`=Continuous Authority (MIT) |
| `amount` | Yes | Integer minor units — `1099` = £10.99 |
| `currencyCode` | Yes | ISO 4217 numeric — `826`=GBP, `978`=EUR |
| `countryCode` | Yes | ISO 3166-1 numeric — `826`=UK |
| `redirectURL` | HPP | URL browser is sent to after payment |
| `callbackURL` | No | Server-to-server result POST — more reliable than redirectURL |
| `transactionUnique` | Recommended | Your idempotency key — prevents replay attacks |
| `orderRef` | No | Free-text order reference |
| `signature` | Yes* | SHA-512 HMAC — see Signature section |
| `xref` | No | Cross-reference for repeat charges, refunds, cancellations |

*Required on most merchant accounts; strongly recommended on all.

---

## Supported actions by path

| Action | HPP | Direct / HPF |
|---|---|---|
| `SALE` | ✅ | ✅ |
| `VERIFY` | ✅ | ✅ |
| `PREAUTH` | ✅ | ✅ |
| `REFUND` | ❌ | ✅ |
| `CANCEL` | ❌ | ✅ |
| `QUERY` | ❌ | ✅ |

---

## 3DS / SCA

3DS v2 (EMV 3DS) is **mandatory** for all `type=1` (ECOM) transactions in EEA/UK under PSD2. `type=2` (MOTO) and `type=9` (MIT) are exempt.

**HPP:** handled automatically — no extra code.

**Direct / HPF redirect flow:**
1. Submit with `remoteAddress` and `threeDSRedirectURL`
2. If `responseCode = 65802` → redirect cardholder to `threeDSURL`
3. ACS redirects back to `threeDSRedirectURL` with POST data
4. Merge ACS POST with stored original response and resubmit

SCA exemptions: pass `scaExemption` = `lowvalue` / `trusted` / `risk` / `corporate` / `delegated`. Issuer can refuse and soft-decline with `responseCode = 65` — gateway retries with 3DS automatically if configured.

---

## Recurring payments

| Type | `type` | `rtAgreementType` | SCA |
|---|---|---|---|
| CIT sign-up | `1` | `recurring` or `instalment` | Required |
| CIT card-on-file | `1` | `cardonfile` | Required |
| MIT recurring | `9` | `recurring` or `instalment` | Exempt |
| MIT unscheduled | `2` | `unscheduled` | Exempt |

Store the `xref` from the initial CIT — required for all subsequent MITs. `xref` values expire after 13 months.

HPP does not support fully unattended MIT recurring. Use Direct or HPF.

---

## Signature calculation

```php
function signRequest(array $fields, string $secret): string {
    ksort($fields);
    $str = http_build_query($fields, '', '&');
    $str = preg_replace('/%0D%0A|%0A%0D|%0D/i', '%0A', $str);
    return hash('SHA512', $str . $secret);
}
```

Always verify the signature on incoming `redirectURL` and `callbackURL` responses before trusting any field.

The PHP SDK (`Gateway::directRequest`, `Gateway::hostedRequest`) handles signing automatically.

---

## Test credentials and cards

Test `merchantID` and `merchantSecret` are provided during onboarding. They connect to a simulator — no real acquiring.

| Scheme | Card number | CVV |
|---|---|---|
| Mastercard Debit | `5573 4712 3456 7898` | `159` |
| Visa Credit | `4929 4212 3460 0821` | `356` |
| Amex | `3742 454554 00001` | `4887` |

Use any future expiry. Amount ranges: 100–2499 = approved; 10000–14999 = declined; 20000–24999 = SCA soft-decline then approved after 3DS.

3DS simulation via expiry month: `01` = frictionless, `12` = challenge (full redirect flow).

---

## See also

- Full API reference: https://developer-ecomm.handpoint.com
- SmartBoard overview: https://developer.handpoint.com/acquirers/smartboard
