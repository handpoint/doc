# Handpoint Agent Skills — Maintainer Guide

This directory contains machine-readable skill files for AI coding agents (Claude, Copilot, Cursor, etc.). Agents fetch these to get accurate, Handpoint-specific context before generating integration code. They are served publicly at `/.well-known/skills/`.

**Rule of thumb:** whenever you update an acquirer page or a back-office / SDK reference page, also update the corresponding skill file. It takes 5 minutes and prevents agents from giving developers outdated advice.

---

## File map — doc page → skill file

| When you edit this doc... | Also update this skill file |
|---|---|
| `docs/acquirers/epi.mdx` | `acquirers/epi.md` |
| `docs/acquirers/omnipay-emp.mdx` | `acquirers/emerchantpay.md` |
| `docs/acquirers/omnipay-paystrax.mdx` | `acquirers/paystrax.md` |
| `docs/acquirers/paysafe-tsys.mdx` | `acquirers/paysafe.md` |
| `docs/back-office/rest-api-no-reader.md` | `paths/cloud-api.md` |
| `docs/reference/android-sdk-setup.md` | `paths/android-pax.md` + `paths/android-hilite.md` |
| iOS SDK docs | `paths/ios-hilite.md` |
| `docs/reference/cordova-events.md` | `paths/cordova.md` |
| `docs/back-office/rest-api-no-reader.md` (remote sale / token section) | `optional/back-office.md` |
| `docs/back-office/transaction-feed-api.md` | `optional/transaction-feed.md` |
| `docs/reference/error-codes.md` | Relevant `acquirers/` and `paths/` files |

---

## Common scenarios

### A. New operation added to an existing acquirer or path

**Example:** EPI adds support for a new refund variant.

1. Update the acquirer doc (`docs/acquirers/epi.mdx`) as normal.
2. Open `acquirers/epi.md` and:
   - Add a row to the capabilities table at the top (✅ or ❌ per path).
   - Add a new `##` section describing the operation — request body, response, error codes, constraints.
3. If the operation involves the terminal, also update the relevant `paths/` file with the SDK call or REST endpoint.
4. If it is a back-office operation (no reader), update `optional/back-office.md`.

---

### B. New acquirer onboarded

1. Copy `acquirers/epi.md` as a starting template (it is the most complete).
2. Rename the copy to `acquirers/{slug}.md` (lowercase, hyphen-separated, e.g. `acquirers/worldline.md`).
3. Fill in every section:
   - **Region, card brands, routing, settlement** — in the header block.
   - **Capabilities table** — mark each path × operation as ✅ or ❌. When unsure, default to ❌.
   - **Critical sections** — batch close requirement, tip flow (in-sale vs. post-sale), partial reversal support.
   - **Known error codes** — include any acquirer-specific codes discovered during certification.
4. Add an entry to `index.json` under `"acquirers"`:
   ```json
   {
     "id": "worldline",
     "title": "Worldline — acquirer skill",
     "description": "One-sentence summary of what makes this acquirer distinct.",
     "path": "acquirers/worldline.md",
     "region": "Europe",
     "tags": ["worldline", "eu"]
   }
   ```
5. Add a row to the acquirer table in `handpoint.md`:
   ```
   | Worldline | `acquirers/worldline.md` |
   ```

---

### C. New integration path added

1. Copy `paths/android-pax.md` as a starting template.
2. Rename to `paths/{slug}.md`.
3. Fill in:
   - **Capabilities not available** — list any operations the path cannot support.
   - **Setup / initialization** — install steps, import statements, init code.
   - **All operations** — sale, refund, reversal, and any path-specific operations with code examples.
   - **finStatus values** — either inline or reference another path file.
4. Add an entry to `index.json` under `"paths"`.
5. Add a row to the path table in `handpoint.md`.

---

### D. Capability removed or a constraint discovered

1. Change the ✅ to ❌ in the capabilities table of the affected `acquirers/` or `paths/` file.
2. Add or update the **Known constraints** section explaining why it is not supported.
3. If there is a workaround (e.g. "use refund instead of reversal"), document it in the same section.

---

## Conventions to follow

**Capabilities table** — always the first section after the header block, always this column order:

```
| Capability | Cloud API | Android PAX | Android HiLite | iOS HiLite | Cordova | Back Office |
```

**Amounts** — always in minor currency units. Write `1000` = $10.00, never $1,000 or 10.00. Say "minor currency units" in any new section that mentions amounts.

**Error codes** — include as a table with columns: Code | Endpoint | Meaning | Action.

**Code examples** — use fenced code blocks with the language hint (`json`, `kotlin`, `swift`, `javascript`, `http`). Keep examples minimal but runnable.

**Cross-references** — link to optional skills with `optional/back-office.md` or `optional/transaction-feed.md` at the end of any section that touches those topics. Do not duplicate their content.

**Tone** — directive and dense. These are read by AI agents, not humans. Omit introductory sentences. Start sections with the constraint or the code.

---

## Directory structure

```
static/.well-known/skills/
├── README.md                 ← you are here
├── handpoint.md              ← entry point: instructs agents to ask before coding
├── index.json                ← machine-readable catalog (update when adding files)
├── acquirers/
│   ├── epi.md
│   ├── emerchantpay.md
│   ├── paystrax.md
│   └── paysafe.md
├── paths/
│   ├── cloud-api.md
│   ├── android-pax.md
│   ├── android-hilite.md
│   ├── ios-hilite.md
│   └── cordova.md
└── optional/
    ├── back-office.md
    ├── transaction-feed.md
    └── prerequisites.md
```

Skill files are served as static files by Docusaurus — no build step required. Changes take effect as soon as they are deployed.
