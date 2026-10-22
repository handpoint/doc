# Handpoint integration — start here

You are about to help build a Handpoint payment integration. **Do not write any integration code yet.** First collect two pieces of information from the user, then load the matching skills.

## Step 1 — Ask the user: which acquirer?

> "Which acquirer is the merchant using?"

| Answer | Acquirer skill to load |
|---|---|
| EPI | `acquirers/epi.md` |
| EmerchantPay | `acquirers/emerchantpay.md` |
| Paystrax | `acquirers/paystrax.md` |
| PAYSAFE | `acquirers/paysafe.md` |
| Not sure / multiple | Ask the merchant's region: US/Canada → likely EPI or PAYSAFE; EU → EmerchantPay or Paystrax |

The acquirer is determined during merchant onboarding and is scoped to the API key — the ISV does not choose it in code, but must know it to implement correct behavior (batch close, tip flow, supported capabilities).

## Step 2 — Ask the user: which integration path?

> "Which integration path are you building?"

| Answer | Path skill to load |
|---|---|
| REST API / server / any language / cloud | `paths/cloud-api.md` |
| Android app on PAX terminal (on-device) | `paths/android-pax.md` |
| Android app + HiLite Bluetooth reader | `paths/android-hilite.md` |
| iOS app + HiLite Bluetooth reader | `paths/ios-hilite.md` |
| Cordova / Ionic app | `paths/cordova.md` |
| eCommerce / online payments / SmartBoard (Europe only) | `paths/ecommerce.md` |

**Note for eCommerce:** SmartBoard is a separate CNP gateway with its own credential system. Load `paths/ecommerce.md` directly — no acquirer skill is needed. Skip Step 1 if the merchant is doing online-only payments.

## Step 3 — Load both skills, then implement

Load `acquirers/{acquirer}.md` **and** `paths/{path}.md`. Together they contain everything needed for the integration. The acquirer skill covers what is supported and acquirer-specific constraints; the path skill covers SDK setup, all operation flows, and error handling.

## Step 4 — Load optional skills only when the operation requires it

Do **not** pre-load optional skills. Load them only when the user explicitly asks about or requires that operation:

| Operation the user mentions | Optional skill to load |
|---|---|
| Remote sale, MOTO, card-not-present, card token, no reader | `optional/back-office.md` |
| Reporting, reconciliation, transaction history, UNDEFINED recovery via feed | `optional/transaction-feed.md` |
| Getting set up, test credentials, hardware, merchant setup, Nexus, debug device | `optional/prerequisites.md` |

## Key facts that apply to all acquirers and paths

- **Amounts are always in minor currency units.** `1000` = $10.00 / £10.00 / €10.00 — not $1000.
- **The API key header is `ApiKeyCloud`**. Not `Authorization`, not `Api-Key`. HTTP headers are case-insensitive — `ApiKeyCloud` is the canonical spelling.
- **Card data never reaches ISV code.** Handpoint keeps the ISV out of PCI scope on all card-present paths.
- **`transactionID` from a result is the GUID for reversals and refunds.** Always store it.
- **`transactionReference` is a UUID v4 the ISV generates.** Persist it before sending — used for recovery.
- **Do not retry `UNDEFINED` transactions.** May double-charge. Use the Transaction Feed API to recover.
