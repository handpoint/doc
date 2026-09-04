# Protocol Capabilities Reference

Capabilities sourced from three layers: `_OPS runner/app.py` (`PROTOCOL_CAPABILITIES`), `viscus-tms-dev` validators, and `viscus-dev` protocol implementations (`ICardPresentProtocol` / `IMotoProtocol`).

---

## Capabilities Matrix

| Protocol | CP Sale | CP Refund | Reversal | Pre-auth | Pre-auth Capture | Pre-auth Increase | MOTO | Tip Adj | Tokenization | Partial Reversal | Settlement | Batching |
|----------|:-------:|:---------:|:--------:|:--------:|:----------------:|:-----------------:|:----:|:-------:|:------------:|:----------------:|:----------:|:--------:|
| **TSYS** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — | — |
| **OMNIPAY** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | — | ✓ | ✓ |
| **BORGUN** | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | — | ✓¹ | — | ✓ | ✓ |
| **TNS** | ✓ | ✓ | ✓ | — | — | — | — | — | — | — | — | — |
| **VANTIV** | ✓ | ✓ | ✓ | — | — | — | ✓ | — | ✓ | — | — | — |
| **ELAVON** | ✓ | ✓ | ✓ | — | — | — | — | ✓ | — | — | — | — |
| **FISERV** | ✓ | ✓ | ✓ | — | — | — | ✓ | — | — | — | — | — |
| **EVO** | ✓ | ✓ | ✓ | — | — | — | — | — | — | — | — | — |
| **POSTBRIDGE** | ✓ | ✓ | ✓ | — | — | — | — | — | — | — | — | — |
| **AMEX** | ✓ | ✓ | ✓ | — | — | — | ✓ | — | — | — | ✓ | — |
| **VISCUS_DUMMY** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | — |

> ¹ Borgun tokenization is implemented in `viscus-dev` (token visitor pattern) but is listed as `False` in `app.py` PROTOCOL_CAPABILITIES — may not be enabled in all environments.

---

## Supported Card Brands per Protocol

| Protocol | Visa | Mastercard | Amex | JCB | Discover | Interac | CUP |
|----------|:----:|:----------:|:----:|:---:|:--------:|:-------:|:---:|
| **TSYS** | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| **OMNIPAY** | ✓ | ✓ | ✓ | ✓ | — | — | — |
| **BORGUN** | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| **TNS** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| **VANTIV** | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| **ELAVON** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| **FISERV** | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| **EVO** | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| **POSTBRIDGE** | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| **AMEX** | — | — | ✓ | — | — | — | — |
| **VISCUS_DUMMY** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

> Omnipay supports multiple sub-acquirers (Lloyds, eMerchant Pay, Paystra) — card brand support may vary per sub-acquirer.

---

## Acquirer-Level Capability Flags

These flags are stored on the `acquirer` record in the TMS database and can be toggled independently of the protocol.

| Flag | DB column | Default | Description |
|------|-----------|---------|-------------|
| Card Tokenization | `supports_card_token` | `false` | Store card token for future use |
| MOTO | `supports_moto` | `false` | Mail Order / Telephone Order (card-not-present) |
| Pre-Authorization | `supports_preauth` | `false` | Place a hold without capturing funds |
| Forced Linked Refunds | `forced_linked_refunds` | `false` | Refunds must reference the original transaction GUID |
| Store & Forward | `supports_store_and_forward` | `false` | Queue transactions when offline and send when reconnected |
| Partial Reversal | `supports_partial_reversal` | `false` | Reverse only part of the authorized amount |
| Batching | `supports_batching` | `false` | Batch settlement operations |
| PayFac | `supports_payfac` | `false` | Payment Facilitator sub-merchant operations |

> Even if the protocol supports a capability (e.g. MOTO), the acquirer record must also have the corresponding flag enabled. Both must be true for the feature to work on a terminal.

---

## Protocol Detail Cards

### TSYS

**Use case:** US market — TSYS host-capture acquirer  
**Settlement:** Host-capture (batching managed by acquirer)  
**Activation:** Not required  
**Special:** Developer ID + Version ID must be set by Handpoint (not editable). Partial reversals supported.

**Unique features:**
- `hostCapturePosId` is the main agreement identifier (not `merchantid`)
- `authenticationCode` defaults to `"123456789A"` — must be changed for production
- Developer/Version IDs are Handpoint-issued constants injected server-side

---

### OMNIPAY

**Use case:** UK market — multi-acquirer ISO 8583 platform  
**Settlement:** Async via SQS queue  
**Sub-acquirers:** `000008` Lloyds, `000050` eMerchant Pay (EMP), `000069` Paystra  
**Special:** The `acquirerid` selects the sub-acquirer; it determines routing, PPK key index, and settlement behaviour. Money remittance supported.

**Unique features:**
- `acquirerid` is a dropdown (select), not free text
- Different PPK key indices per sub-acquirer (`ppkIndex` for Lloyds/EMP, `ppkIndexPaystra` for Paystra)
- Each Omnipay sub-acquirer has independent card brand support and settlement files

---

### BORGUN

**Use case:** Iceland market  
**Settlement:** Async batch (clearing file generation)  
**Special:** EMV F22 handling for local Icelandic acquirer rules. Tokenization available via token-visitor pattern. `acquirerid` auto-set to `"001483"`, `forwarderid` defaults to `"352010"`.

---

### TNS (Thales Network Services / Paysafe)

**Use case:** US/UK — ISO 8583 via Paysafe (formerly TNS)  
**Settlement:** Managed by Paysafe  
**Special quirk:** `REFUND_REQUEST` is processed as a reversal on the wire. In TXN Feed, refunds on TNS show as `"Sale Reversal"` instead of `"EMV Refund"`. See `TRANSACTION_MAPPING.md`.

**Unique features:**
- `acquirerid` is auto-populated from server config (not editable) — currently `"112701"`
- Terminal ID default format: `"12S" + last 5 digits of serial number`

---

### VANTIV

**Use case:** US market — Vantiv/Worldpay  
**Tokenization:** Yes — via dedicated Vantiv TMS tokenization client  
**Special:** Network messages (for batch-level operations) supported.

---

### ELAVON

**Use case:** EU/US — Elavon  
**Special validation:** Merchant ID must be exactly **6 numeric digits**. Terminal ID must be exactly **16 numeric digits**. Both are stricter than other protocols (alphanumeric is the norm elsewhere). Partial approvals enabled. Tip adjustment supported.

---

### FISERV

**Use case:** US market — Fiserv (formerly First Data)  
**Activation:** Required — calls Fiserv SRS (Service Resolution System) on setup  
**Auto-populated:** `DID` (Datawire ID) is auto-populated from the activation service response; do not enter manually.  
**Special:** Activation validates MID/TID against Fiserv before the terminal can transact.

---

### EVO (EVO Snap)

**Use case:** EU/US — EVO Payments  
**Remote validation:** EVO API is called during setup to validate the merchant profile. Requires network access at provisioning time.  
**Auto-populated:** `acquirerTerminalId`, `applicationProfileId`, and `serviceId` are all set automatically from EVO's response — only `merchantProfileId` needs to be provided.

---

### POSTBRIDGE

**Use case:** Niche / PostBridge gateway  
**Special:** DUKPT PIN encryption supported. HTTP-based (not ISO 8583). Minimal configuration — only an `acquirerTerminalId` is required.

---

### AMEX

**Use case:** American Express direct acquiring  
**Settlement:** Settlement-ready (runs alongside Borgun in some configurations)  
**Special:** Accepts only Amex cards. Terminal ID defaults to last 8 digits of serial number.

---

### VISCUS_DUMMY

**Use case:** Testing / development only. Accepts all major card brands. All capabilities enabled. Should never be used in production.

---

## Notes on Discrepancies (Code vs app.py)

| Protocol | Capability | `app.py` value | Gateway code | Note |
|----------|-----------|----------------|--------------|------|
| Borgun | Tokenization | `False` | Implemented | May not be enabled by default |
| Borgun | MOTO | `True` (app.py) | Not in IMotoProtocol | Verify before enabling MOTO flag on Borgun acquirer |
| GRV | All | Not listed | Implemented | Iceland-only protocol, not in standard OPS tooling |
