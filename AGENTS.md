# docs-v2 — AI Agent Guide

This file is for AI coding agents (Claude Code, Cursor, GitHub Copilot, Codex, etc.) working on the Handpoint docs-v2 developer portal. Read it before making any changes to the site.

For Claude Code users, the `/docs-v2` skill provides the same guidance as an invocable shortcut.

---

## What this repo is

A Docusaurus v3 documentation site for Handpoint payment integrations. The key design principle: **acquirer pages are generated, not hand-written**. Three YAML files and a directory of MDX partials feed into a generator script that produces five acquirer pages. Editing the generated files directly will lose your changes the next time the generator runs.

---

## Four-layer data model

```
data/processors.yaml        Processor-level known-issues — injected into partials at build time
data/capabilities.yaml      Capability registry — 13 capabilities with headings, panel labels,
                            partials lists, and flavor descriptions (single source of truth)
data/acquirers.yaml         Per-acquirer support per integration path:
                            public | coming-soon | not-supported | (absent = hidden)
src/partials/functions/     Implementation docs — code examples, params, errors, testing.
                            Shared across all acquirers that support the capability.
        ↓
scripts/generate-acquirer-pages.js
        ↓
docs/acquirers/*.mdx        ← GENERATED — never edit directly
src/data/capabilities.js    ← GENERATED — never edit directly
src/data/acquirerDetails.js ← GENERATED — never edit directly
```

**The five acquirers**: `epi`, `tsys`, `paysafe`, `emerchantpay`, `paystrax`.

**Integration paths**: `cloud-api` · `android-pax` · `android-hilite` · `ios-hilite` · `cordova` · `javascript-sdk` · `windows-sdk` · `backoffice`

---

## Workflow 1 — New capability

A capability is a top-level operation (Sale, Refund, Pre-Authorization, etc.).

### 1. Scaffold

```bash
node scripts/new-capability.js <key> "<Heading>" "<Panel label>"
```

- `key` must be kebab-case (e.g. `deferred-auth`)
- Script validates the key, checks for duplicates, appends to `data/capabilities.yaml`, and creates a template partial at `src/partials/functions/<key>/<key>.mdx`

### 2. Update data/capabilities.yaml

Fill in the flavor description (the scaffold leaves a `TODO`):

```yaml
  deferred-auth:
    heading: "Deferred Authorization"
    panel-label: "Deferred Auth"       # shown in the AcquirerCapabilitySummary panel
    partials: [deferred-auth]           # list of .mdx files to include (filename only, no path)
    flavors:
      deferred-auth:
        description: "On-device · hold funds without immediate capture"
```

Capabilities without a `panel-label` (e.g. `partial-reversal`) are flavors of another capability and don't appear as their own panel row.

### 3. Wire to acquirers in data/acquirers.yaml

Add the capability under each acquirer's `capabilities:` block:

```yaml
  deferred-auth:
    cloud-api: coming-soon
    android-pax: public
    min-sdk:                     # optional — only set when SDK version is confirmed in production
      android-pax: "7.1015.0"
```

Omit the capability entirely under an acquirer if it has no support on any path. Omit a path key if it should be silently hidden (not "coming soon" or "not supported").

### 4. Write src/partials/functions/\<key\>/\<key\>.mdx

Edit the scaffolded template. Keep the `{/* ACQUIRER_NOTE_INJECTION_POINT */}` marker — processor-level known issues are injected here at generate time.

Use `<Tabs>` / `<TabItem>` to show code per integration path:

```mdx
## Deferred Authorization

{/* ACQUIRER_NOTE_INJECTION_POINT */}

<Tabs>
  <TabItem value="android-pax" label="Android PAX">
    ```kotlin
    hapi.saleDeferred(amount, currency, ref)
    ```
  </TabItem>
  <TabItem value="cloud-api" label="Cloud API">
    …
  </TabItem>
</Tabs>
```

### 5. Generate and validate

```bash
node scripts/generate-acquirer-pages.js   # regenerates docs/acquirers/*.mdx and JS data files
node scripts/validate.js                  # exits 1 on any inconsistency
```

---

## Workflow 2 — New flavor

A flavor is a variant of an existing capability (e.g. `pre-auth-increase` under `pre-auth`). No scaffold script — create files directly.

### 1. Write the partial

Create `src/partials/functions/<capability>/<flavor-key>.mdx`.

### 2. Update data/capabilities.yaml

Add the flavor under the parent capability's `flavors:` block, and add the partial to the parent's `partials:` list if it should render on all paths:

```yaml
  pre-auth:
    partials: [pre-auth-create, pre-auth-capture, pre-auth-void, pre-auth-increase]  # add here
    flavors:
      pre-auth-increase:
        description: "Raise the held amount before capture"
        anchor: pre-auth-increase    # optional — overrides the default #anchor
```

### 3. Wire to acquirers and regenerate

Nest the flavor under its parent capability in `data/acquirers.yaml`:

```yaml
  pre-auth:
    cloud-api: public
    android-pax: public
    pre-auth-increase:         # flavor nested inside parent
      cloud-api: public
      android-pax: public
```

Then run the generator and validator (same as Workflow 1 Step 5).

---

## What NOT to do

| Don't | Why |
|---|---|
| Edit `docs/acquirers/*.mdx` | Overwritten on next generate |
| Edit `src/data/capabilities.js` | Overwritten on next generate |
| Edit `src/data/acquirerDetails.js` | Overwritten on next generate |
| Merge to `dev` or `main` directly | Use PRs; this branch is `docs-v2` |
| Set `min-sdk` before the SDK ships | Wait for confirmed production version |
| Add `partial-reversal` to the capability panel | It's a flavor of `reversal`, not a top-level capability |

---

## Scripts

| Command | What it does |
|---|---|
| `node scripts/new-capability.js <key> "<H>" "<L>"` | Scaffold new capability (YAML entry + template partial) |
| `node scripts/generate-acquirer-pages.js` | Regenerate all acquirer pages and JS data files |
| `node scripts/validate.js` | Validate consistency across YAML and partials (exit 1 on failure) |
| `yarn start` | Start dev server at http://localhost:3000 |
| `yarn build` | Production build |

---

## Static pages (no generator needed)

Files in `docs/get-started/`, `docs/back-office/`, `docs/reference/`, and `docs/deprecated/` are plain Markdown — edit directly, no regeneration required.

---

## AI-readable resources served from this site

- `static/llms.txt` — capability index for AI agents building integrations (auto-generated)
- `static/.well-known/skills/` — skill files for AI coding agents generating integration code

**Rule**: when you edit a doc page, also update the corresponding skill file in `static/.well-known/skills/`. The mapping is in the README.

---

## Branch and deployment

```
docs-v2  →  dev (staging: developer.handpoint.io)  →  main (production: developer.handpoint.com)
```

PRs always target `dev` first. Staging runs `DOCS_ENV=staging` which shows pages marked `visibility: internal`.
