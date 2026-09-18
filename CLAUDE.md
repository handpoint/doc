# docs-v2 — AI Agent Instructions

Branch: `docs-v2` only. Never merge to `dev` or `main`.

## Repository layout

| Path | Contents |
|---|---|
| `data/processors.yaml` | Processor definitions and known-issues — injected into acquirer pages at build time |
| `data/acquirers.yaml` | Acquirer list, capabilities per integration path, `processor:` reference |
| `docs/acquirers/` | **Generated** — never edit directly. Run `node scripts/generate-acquirer-pages.js` after YAML changes |
| `src/partials/functions/{cap}/{flavor}.mdx` | Per-function docs: code, params, errors, edge cases, testing. Edit here; renders for every acquirer that supports the capability |
| `docs/get-started/` | Authentication, sandbox setup, hardware overview |
| `docs/back-office/` | Cloud API guide, transaction feed API, TMS APIs |
| `docs/reference/` | Capabilities matrix, glossary, error codes, callbackUrl, multi-MID, tip adjustment, etc. |
| `docs/deprecated/` | JS SDK and Windows SDK migration guides |
| `static/.well-known/skills/` | AI agent skill files (public, served at `/.well-known/skills/`) |
| `static/llms.txt` | Auto-generated AI-readable capability index |
| `scripts/generate-acquirer-pages.js` | Generator: reads YAML + partials → writes `docs/acquirers/` |

## Data model — three layers

ISVs only see the final acquirer page. Processor names are never exposed.

```
data/processors.yaml      → processor-level known-issues (injected at ACQUIRER_NOTE_INJECTION_POINT)
data/acquirers.yaml       → capabilities per path; processor: key links to processors.yaml
src/partials/functions/   → implementation docs per capability/flavor (code, errors, testing)
        ↓
generate-acquirer-pages.js merges all three → docs/acquirers/*.mdx
```

**Acquirer → processor mapping (active acquirers):**

| Acquirer slug | Name | Processor |
|---|---|---|
| `epi` | EPI | `tsys` |
| `paysafe` | PAYSAFE | `tsys` (Interac cards auto-route to TNS; invisible to ISVs) |
| `emerchantpay` | EmerchantPay | `omnipay` |
| `paystrax` | Paystrax | `omnipay` |

## YAML schema

### Capability values (per integration path)

- `public` — show code example
- `coming-soon` — show "coming soon" callout
- `not-supported` — show "not supported" callout
- absent — omit section entirely

Integration paths: `cloud-api` · `android-pax` · `android-hilite` · `ios-hilite` · `cordova` · `javascript-sdk` · `windows-sdk` · `backoffice`

### `flavor-notes` — acquirer-specific notes on a flavor

Rendered as Docusaurus admonitions before the shared partial content. Use for acquirer-specific quirks that should not appear on all acquirers.

```yaml
key-entry-sale:
  label: "Key Entry Sale"
  cloud-api: public
  android-pax: public
  flavor-notes:
    - type: caution          # note | tip | info | caution | warning
      title: "Optional title"
      body: >
        Markdown body text. Supports `inline code` and [links](/reference/avs).
```

### `notes` — acquirer-level note (all capabilities)

A top-level `notes:` string on an acquirer appears before every capability section for that acquirer. Use for batch timing, routing behaviour, or onboarding requirements that apply broadly.

### Processor known-issues (`data/processors.yaml`)

Injected at `{/* ACQUIRER_NOTE_INJECTION_POINT */}` in flat partials for every acquirer on that processor.

```yaml
processors:
  tsys:
    known-issues:
      - id: unique-slug
        title: Callout header
        severity: caution        # note | info | tip | caution | warning
        affects: tip-adjustment  # flat partial name; or list: [a, b]
        note: |
          Markdown body. Do not name the processor — ISVs don't need to know.
```

## Reference doc → feature relationships

| Reference file | Scope |
|---|---|
| `cloud-api-operations.md` | Cloud API path |
| `cloud-api-integration-guide.md` | Cloud API path |
| `callback-url.md` | Cloud API path |
| `transaction-recovery.md` | All paths (links to per-SDK specifics) |
| `transaction-recovery-cloud-api.md` | Cloud API path |
| `multi-mid.md` | Cloud API + Android PAX + iOS HiLite |
| `android-sdk-setup.md` | Android PAX + Android HiLite |
| `transaction-result-object.md` | All paths |
| `moto-guide.md` | Cloud API + Android PAX; EPI only |
| `fee-mitigation.md` | Cloud API; EPI only |
| `pre-authorization-guide.md` | Cloud API + Android; EPI, EmerchantPay, Paystrax |
| `avs.md` | Cloud API; EPI only |
| `tip-adjustment.md` | Cloud API + Android PAX; EPI + PAYSAFE |
| `partial-approval.md` | Cloud API + Android PAX; EPI only |

## AI agent skill files

Skills are plain Markdown at `static/.well-known/skills/`. AI coding agents fetch them before generating integration code.

**Rule: when you edit a doc page, also update the matching skill file.**

| Skill file | Mirrors |
|---|---|
| `paths/cloud-api.md` | `docs/back-office/rest-api-no-reader.md` |
| `paths/android-pax.md` | `docs/reference/android-sdk-setup.md` |
| `paths/android-hilite.md` | `docs/reference/android-sdk-setup.md` |
| `paths/ios-hilite.md` | iOS SDK docs |
| `paths/cordova.md` | `docs/reference/cordova-events.md` |
| `paths/javascript-sdk.md` | JS SDK integration guide |
| `paths/windows-sdk.md` | Windows SDK integration guide |
| `acquirers/epi.md` | `docs/acquirers/epi.mdx` (generated from YAML + partials) |
| `acquirers/emerchantpay.md` | `docs/acquirers/emerchantpay.mdx` |
| `acquirers/paystrax.md` | `docs/acquirers/paystrax.mdx` |
| `acquirers/paysafe.md` | `docs/acquirers/paysafe.mdx` |
| `optional/prerequisites.md` | Hardware, credentials, merchant setup |
| `optional/back-office.md` | Remote sale / token section |
| `optional/transaction-feed.md` | `docs/back-office/transaction-feed-api.md` |

## Critical facts — common mistakes to avoid

### Two base URLs with different purposes
- **`cloud.handpoint.com`** — send transactions (`POST /transactions`), poll by transactionResultId (`GET /transaction-result/{id}`)
- **`transactions.handpoint.com`** — check status by transactionReference (`GET /transactions/{ref}/status`, `GET /transactions/{ref}/status/all`)

Using `cloud.handpoint.com` for `/status` calls is a frequent mistake. It will not work.

### Callback header is `auth-token`
- HTTP/2 lowercases all headers — the delivered header name is `auth-token`
- Equivalent to `AUTH-TOKEN`; NOT `Authorization`, NOT `AUTH_TOKEN` (underscore)
- The `token` field in `POST /transactions` is echoed verbatim as the `auth-token` header value

### iOS Credential class has no externalId
- `Credential` properties: `acquirer` (Acquirer enum), `mid` (NSString*), `tid` (NSString*) — nothing else
- iOS HiLite uses Bluetooth, not PAX Cloud API; externalId is a Cloud API / Android-only concept

### callbackUrl requires a well-known CA
- PAX terminals run Android 5.1–12 with limited CA trust stores
- The cert on your `callbackUrl` endpoint must be from DigiCert, GlobalSign, or Comodo/Sectigo
- Self-signed or uncommon-CA certs cause silent TLS failure — the result is never delivered

### Multi-MID credential model
- Cloud API + Android PAX: use `externalId` only
- iOS HiLite: use `acquirer` + `mid` + `tid` directly — no `externalId`

### Tip adjustment + partial refund ordering (TSYS processor — CUS-845)
When a tipped transaction needs a partial refund: zero the tip first (`amount: 0`), do the refund, then re-apply the tip. Applies to all acquirers on the TSYS processor (currently EPI, PAYSAFE, PAYSAFE+Interac). The callout is defined in `data/processors.yaml` under `tsys.known-issues` and injected automatically — do not hardcode acquirer names in the partial. Internal ref: CUS-845.

## Rendering locally

```bash
# Mac / Linux
yarn install
node scripts/generate-acquirer-pages.js
yarn start
```

```powershell
# Windows — cross-env is in devDependencies, yarn install fetches it
yarn install
node scripts/generate-acquirer-pages.js
yarn start
```

Site opens at **http://localhost:3000**. `DOCS_ENV=staging` (set by the `start` script) shows pages marked `visibility: internal` in the sidebar. The production build hides them.

## Adding a new SDK path (e.g. React Native)

1. Add the path key to `PATHS` and a label to `PATH_LABELS` in `scripts/generate-acquirer-pages.js` — single registration point.
2. Add the path to relevant flavor entries in `data/acquirers.yaml` (only where the acquirer actually supports it).
3. Add a `<TabItem>` to every partial in `src/partials/functions/` that the new path supports — one edit covers all generated acquirer pages.
4. Run `node scripts/generate-acquirer-pages.js` and verify locally.

## Capability matrix page (internal only)

`docs/reference/acquirer-capabilities-matrix.mdx` has `visibility: internal` in its frontmatter — it is only visible on the staging/dev site (`DOCS_ENV=staging`) and is hidden from the public production build.

**Rule: this page must never be merged to `main`.** It can be merged to `dev` from feature branches.

The page is driven by three generated files:
- `src/data/acquirerMatrix.js` — auto-generated by `generate-matrix-data.js`; source of truth is `data/acquirers.yaml`
- `src/components/CapabilityMatrix.jsx` — React component with processor/acquirer/path filter state
- `src/components/CapabilityMatrix.module.css` — styles

**To update the matrix** after changing `data/acquirers.yaml`:
```bash
node scripts/generate-acquirer-pages.js   # also calls generate-matrix-data.js automatically
```

Or just the matrix data alone:
```bash
node scripts/generate-matrix-data.js
```

## What NOT to do

- Do not edit files in `docs/acquirers/` — generated, will be overwritten on next `yarn generate`
- Do not edit `src/data/acquirerMatrix.js` — generated, will be overwritten on next run
- Do not merge `docs-v2` to `dev` or `main`
- Do not merge `docs/reference/acquirer-capabilities-matrix.mdx` (or its supporting files in `src/components/CapabilityMatrix*` and `src/data/acquirerMatrix.js`) to `main`
- Do not hardcode API keys, SSKs, or credentials in source files
