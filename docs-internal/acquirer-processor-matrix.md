# Acquirer × Processor Matrix — Internal Reference

> **INTERNAL ONLY — never merge to dev/main**

This matrix shows how acquirer capabilities vary by the underlying processor or routing path.
ISV-facing docs expose only the acquirer name; this page is for Handpoint staff who need to know the full stack.

---

## Acquirer → Processor map

| Acquirer (ISV view) | Processor(s) | Routing trigger |
|---|---|---|
| **EPI** | TSYS | All transactions |
| **PAYSAFE** | TSYS | Visa, Mastercard, Amex, Discover |
| **PAYSAFE** | TNS (The Nuvei Switch) | Interac — merchant must have Interac boarding |
| **EmerchantPay** | OMNIPAY / EmerchantPay gateway | All transactions |
| **Paystrax** | OMNIPAY / Paystrax gateway | All transactions |

---

## Capabilities per acquirer × processor

### EPI / TSYS

| Feature | Supported | Notes |
|---|---|---|
| Sale | ✅ | All paths |
| Refund | ✅ | Card-present and back-office |
| Reversal | ✅ | Full and partial |
| Partial reversal | ✅ | Not on Amex (Amex network restriction) |
| Pre-authorization | ✅ | PAX terminal for create; back-office for capture/increase/decrease |
| Remote Sale (on-terminal) | ✅ | Cardholder keys card on PAX screen; must be TMS-enabled |
| Remote Sale (card token, no terminal) | ✅ | Cygma token; back-office REST; must be TMS-enabled |
| Tip adjustment | ✅ | HTTPS call, no terminal required; not on Cordova (use back-office) |
| Tip adjustment — on-screen tip restriction | ⚠️ | Not available if original sale included on-screen tip prompt (TSYS host rejects) |
| Tokenization | ✅ | Cygma (EPI card vault) |
| Batch operations (manual close) | ✅ | Must be TMS-enabled; auto-close ~11pm EST |
| Interac | ❌ | EPI has no Interac routing |

---

### PAYSAFE / TSYS (credit/debit cards — Visa, MC, Amex, Discover)

| Feature | Supported | Notes |
|---|---|---|
| Sale | ✅ | All paths |
| Refund | ✅ | Card-present only (CNP refunds via Paysafe Portal) |
| Reversal | ✅ | Full only |
| Partial reversal | ❌ | Not supported on any card brand |
| Pre-authorization | ❌ | Paysafe acquirer restriction |
| Remote Sale (card token, no terminal) | ❌ | Paysafe acquirer restriction |
| Tip adjustment | ✅ | Same on-screen tip restriction as EPI (TSYS host) |
| Tokenization | ✅ | Paysafe token format (not interchangeable with Cygma) |
| Batch operations | ❌ | Paysafe uses automatic settlement |
| Void | ❌ | Not applicable for Visa/MC/Amex/Discover on TSYS path |

---

### PAYSAFE / TNS — Interac path (merchants with Interac boarding)

| Feature | Supported | Notes |
|---|---|---|
| Sale | ✅ | Interac debit, card-present only |
| Refund | ❌ | Interac network restriction — must Void before settlement |
| Reversal | ❌ | Interac network restriction — use Void instead |
| Void | ✅ | Full amount only; card must be present; must occur before batch/settlement |
| Partial reversal | ❌ | Not supported |
| Tip adjustment | ❌ | Interac only supports Sale and Void |
| Tokenization | ⚠️ | Assumed supported — verify per merchant if issues reported |
| Remote Reversal (back-office) | ❌ | Card must be physically present for any post-sale correction |
| Batch operations | ❌ | TNS routing uses automatic settlement |

**Gateway detection:** The Handpoint gateway automatically routes to TNS when the card is Interac and the merchant has Interac boarding. No ISV configuration required.

---

### EmerchantPay / OMNIPAY

| Feature | Supported | Notes |
|---|---|---|
| Sale | ✅ | All paths |
| Refund | ✅ | Card-present and back-office |
| Reversal | ✅ | Full only |
| Partial reversal | ❌ | |
| Pre-authorization | ✅ | PAX terminal for create; back-office for rest of lifecycle |
| Remote Sale (on-terminal PAX screen) | ✅ | Must be TMS-enabled |
| Remote Sale (card token, no terminal) | ❌ | EPI only |
| Tip adjustment | ❌ | |
| Tokenization | ✅ | TokenEx |
| Batch operations | ❌ | Automatic settlement |
| Money remittance (MoneySend) | ✅ | Requires merchant enablement; Amex remittance needs separate Amex MID |
| UnionPay | ✅ | Separate routing via CardBrandValidator/PayFacIdValidator in viscus-lib-core |

---

### Paystrax / OMNIPAY

| Feature | Supported | Notes |
|---|---|---|
| Sale | ✅ | All paths |
| Refund | ✅ | Card-present and back-office |
| Reversal | ✅ | Full only |
| Partial reversal | ❌ | |
| Pre-authorization | ✅ | PAX terminal for create; back-office for rest of lifecycle |
| Remote Sale (on-terminal PAX screen) | ✅ | Must be TMS-enabled |
| Remote Sale (card token, no terminal) | ❌ | EPI only |
| Tip adjustment | ❌ | |
| Tokenization | ✅ | TokenEx |
| Batch operations | ❌ | Automatic settlement |

---

## Key cross-processor differences

| Behavior | EPI/TSYS | PAYSAFE/TSYS | PAYSAFE/TNS | EMP/Paystrax |
|---|---|---|---|---|
| Partial reversal | ✅ (not Amex) | ❌ | ❌ | ❌ |
| Tip adjustment | ✅ | ✅ | ❌ | ❌ |
| Tip adj on-screen restriction | ✅ (TSYS rejects) | ✅ (TSYS rejects) | N/A | N/A |
| Batch close (manual) | ✅ | ❌ | ❌ | ❌ |
| Void (Interac) | ❌ | ❌ | ✅ | ❌ |
| Remote Sale (card token) | ✅ | ❌ | ❌ | ❌ |
| Pre-auth | ✅ | ❌ | ❌ | ✅ |
| Cygma token | ✅ | ❌ | ❌ | ❌ |
| Paysafe token | ❌ | ✅ | ❌ | ❌ |
| TokenEx | ✅ | ✅ | ❌ | ✅ |
