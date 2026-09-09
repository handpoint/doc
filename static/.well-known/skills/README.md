# Handpoint Agent Skills — Maintainer Guide

This directory contains machine-readable skill files served at `/.well-known/skills/`. AI coding agents (Claude, Copilot, Cursor, etc.) fetch these before generating integration code so they have accurate, Handpoint-specific context. Humans can read them too — they are plain Markdown.

**The golden rule:** whenever you change a capability, add a feature, rename an acquirer, or fix a bug description in the MDX docs — also update the skill file. It takes a few minutes and prevents agents from generating broken integrations.

---

## Where things live (the two parallel doc systems)

Every Handpoint integration fact exists in **two places** that must stay in sync:

| Layer | Who reads it | Where |
|---|---|---|
| **MDX docs** | Human developers on the docs site | `docs/acquirers/*.mdx`, `docs/reference/*.md`, `docs/guides/*.mdx` |
| **Agent skill files** | AI coding agents (fetched via `/.well-known/skills/`) | `static/.well-known/skills/acquirers/*.md`, `paths/*.md`, `optional/*.md` |

A third layer exists for Handpoint staff only — the internal reference files in `docs-internal/` (never merged to dev/main). These describe processor-level details (TSYS, TNS, OMNIPAY) that ISVs don't need.

---

## File map — doc page → skill file (current paths)

| When you edit this MDX doc... | Also update this skill file |
|---|---|
| `docs/acquirers/epi.mdx` | `acquirers/epi.md` |
| `docs/acquirers/emerchantpay.mdx` | `acquirers/emerchantpay.md` |
| `docs/acquirers/paystrax.mdx` | `acquirers/paystrax.md` |
| `docs/acquirers/paysafe.mdx` | `acquirers/paysafe.md` |
| `docs/reference/cloud-api-integration-guide.md` | `paths/cloud-api.md` |
| `docs/reference/android-pax-integration-guide.md` | `paths/android-pax.md` |
| `docs/reference/android-hilite-integration-guide.md` | `paths/android-hilite.md` |
| `docs/reference/ios-hilite-integration-guide.md` | `paths/ios-hilite.md` |
| `docs/reference/backoffice-integration-guide.md` | `optional/back-office.md` |
| `docs/reference/error-codes.md` | Relevant `acquirers/` and `paths/` files |
| `src/data/acquirerCaps.js` (capability matrix source) | All affected `acquirers/*.md` capability tables |

---

## Validation checklist — use after any documentation change

Run through this list after every change before marking it done. This is the fastest way to catch drift between the two doc layers.

### 1. Capability change (feature added, removed, or restricted)

- [ ] MDX acquirer page updated (`docs/acquirers/{acquirer}.mdx`)
- [ ] `src/data/acquirerCaps.js` updated (drives the live capability matrix on the docs site)
- [ ] Skill file capability table updated (`acquirers/{acquirer}.md`) — ✅/❌ per path column
- [ ] Any guides that reference this capability updated (`docs/guides/`, `docs/reference/`)
- [ ] Internal reference updated if it affects processor-level detail (`docs-internal/`)
- [ ] Build passes: `npm run build` — check for broken anchors in the output

### 2. Acquirer renamed or re-slugged

- [ ] MDX file renamed (`docs/acquirers/{new-slug}.mdx`) and front matter `id:` updated
- [ ] Old slug removed from `src/data/acquirers.js` and `src/data/acquirerCaps.js`
- [ ] `src/components/IntegrationWizard.jsx` maps (`ACQUIRER_REGIONS`, `ACQUIRER_TOKEN_PROVIDERS`, `US_ACQUIRERS`) updated
- [ ] File map in this README updated (see table above)
- [ ] Skill file `See also` URL updated to new slug
- [ ] `handpoint.md` acquirer table updated
- [ ] Grep for old slug across all docs: `grep -r "old-slug" docs/ static/ src/`
- [ ] Sidebar checked (`sidebars.js`)
- [ ] Build passes with no broken links

### 3. New feature / operation added to any acquirer

- [ ] MDX section added to the acquirer page
- [ ] `acquirerCaps.js` capability flag added
- [ ] Skill file: new row in capability table + new `##` section with request/response/errors
- [ ] If it's a Back Office operation: `optional/back-office.md` updated
- [ ] Guide added or updated if the feature has a usage pattern (`docs/guides/`)
- [ ] Build passes

### 4. Error code or known issue discovered

- [ ] Added to the `## Known error codes` table in the relevant skill file
- [ ] Added to `docs/reference/error-codes.md`
- [ ] If it affects a specific acquirer flow, add a note in the acquirer MDX page

---

## How to add a new feature (step-by-step)

This is the full pattern. Every new operation follows these steps in order.

**Step 1 — Add to `acquirerCaps.js`**

This is the single source of truth for the capability matrix on the docs site. Add the new capability key and set it to `P` (public/supported) or `N` (not supported) per path.

```js
// src/data/acquirerCaps.js
epi: {
  caps: {
    'new-feature': ALL(),   // or NONE(), or per-path object
    ...
  }
}
```

**Step 2 — Write the MDX section**

Add a `## New Feature {#new-feature}` section to the acquirer's MDX page in `docs/acquirers/{acquirer}.mdx`. Include:
- When to use it (one sentence)
- Implementation notes (numbered list of gotchas)
- Code tab block (Cloud API JSON + Android/iOS/Cordova SDK calls)
- Any acquirer-specific restrictions

**Step 3 — Update the skill file**

Open `static/.well-known/skills/acquirers/{acquirer}.md` and:
1. Add a row to the capability table — one ✅/❌ cell per path column
2. Add a `## New feature` section — dense and directive, aimed at AI agents
3. Include the request body, SDK call, and any error codes

**Step 4 — Build and verify**

```bash
npm run build
```

Check the output for:
- `[WARNING] Docusaurus found broken anchors` — fix any new ones
- `[WARNING] Broken link` — fix any new ones
- `[SUCCESS]` — build passed

Then grep for the old terminology to confirm nothing stale remains:
```bash
grep -r "old-term" docs/ static/
```

---

## How to update existing documentation

**Changing a capability (e.g. tip adjustment restriction discovered):**

1. Find the implementation notes section in the MDX page and add/update the note.
2. Open the skill file. If the capability is still supported but with a condition, keep ✅ in the table and add a note in the section body. If it is no longer supported, change to ❌ and explain why.
3. Check the internal doc (`docs-internal/`) — if the restriction is processor-level, add it there too.
4. Run the validation checklist above.

**Changing terminology (e.g. renaming an acquirer):**

Run `grep -r "OldName" docs/ static/ src/` before touching anything. The grep output is your change list. Work through every hit file-by-file. Build after to confirm nothing was missed.

---

## Conventions (apply to all skill files)

**Capability table** — always the first section after the header block, always this column order:

```
| Capability | Cloud API | Android PAX | Android HiLite | iOS HiLite | Cordova | Back Office |
```

Use `✅*` with a footnote for capabilities that are supported but with conditions (e.g. iOS HiLite tip adjustment requires `HapiRemoteService`, not a direct SDK call).

**Amounts** — always in minor currency units in code examples. `1000` = $10.00. Say "minor currency units" in any new section that introduces amounts.

**Error codes** — include as a table: `Code | Endpoint | Meaning | Action`.

**Code examples** — fenced blocks with language hint (`json`, `kotlin`, `swift`, `javascript`). Minimal but runnable. Show the Cloud API body first, then the Android SDK call.

**Acquirer name rule** — skill files use the acquirer name only (EPI, PAYSAFE, EmerchantPay, Paystrax). Do not mention processor names (TSYS, TNS, OMNIPAY) — those are internal. ISVs configure acquirers, not processors.

**Cross-references** — link to optional skills at the end of any section that touches back-office or transaction feed topics. Do not copy content from those files.

**Tone for agent sections** — directive and dense. Skip introductory sentences. Start with the constraint or the code.

**Tone for human readers** — the MDX docs on the site are the human-facing layer. Skill files can be terse. If a concept needs more explanation for a human, expand the MDX doc, not the skill file.

---

## Directory structure

```
static/.well-known/skills/
├── README.md                    ← you are here (maintainer guide)
├── handpoint.md                 ← agent entry point: asks acquirer + path before coding
├── index.json                   ← machine-readable catalog (update when adding files)
├── acquirers/
│   ├── epi.md                   ← EPI — batch, tip adj, partial rev, pre-auth, MOTO
│   ├── paysafe.md               ← PAYSAFE — tip adj (non-Interac), Interac Void
│   ├── emerchantpay.md          ← EmerchantPay — tipAmount in sale, pre-auth, MOTO
│   └── paystrax.md              ← Paystrax — same as EmerchantPay minus remittance
├── paths/
│   ├── cloud-api.md             ← REST API (server-side, any language)
│   ├── android-pax.md           ← Android SDK on PAX terminal
│   ├── android-hilite.md        ← Android SDK + HiLite Bluetooth reader
│   ├── ios-hilite.md            ← iOS SDK + HiLite reader
│   ├── cordova.md               ← Cordova / Ionic plugin
│   ├── javascript.md            ← JavaScript SDK
│   ├── windows.md               ← Windows SDK
│   └── ecommerce.md             ← SmartBoard (EU CNP gateway — separate credential system)
└── optional/
    ├── back-office.md           ← Remote sale, batch, pre-auth capture (no reader required)
    ├── transaction-feed.md      ← Reporting, reconciliation, UNDEFINED recovery
    ├── prerequisites.md         ← Credentials, hardware, staging vs production
    └── integration-checklist.md ← Pre-launch validation checklist
```

Skill files are served as static files by Docusaurus — no build step required. Changes deploy with the next site build. Test locally with `npm run start` and fetch `http://localhost:3000/.well-known/skills/acquirers/epi.md` to confirm.
