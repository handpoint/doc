# Handpoint Developer Portal v2

Acquirer-first, AI agent-readable developer documentation for Handpoint payment integrations.

## What this is

Each payment acquirer (EPI/TSYS, PAYSAFE TSYS, OMNIPAY EmerchantPay, OMNIPAY Paystrax) has a single comprehensive page listing every supported payment function with code examples for all integration paths: Cloud API, Android SDK (PAX), Android SDK (HiLite), iOS SDK (HiLite), Cordova, JavaScript SDK, Windows (.NET) SDK, and Back-office (token-based MOTO).

The site is generated from `data/acquirers.yaml` — one YAML file controls what gets documented and for which acquirer. Code examples live in `src/partials/functions/` — edit once, shows on every acquirer that supports it.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [Yarn](https://classic.yarnpkg.com/en/docs/install) v1 (classic)

Check your versions:
```bash
node --version   # should be v18+
yarn --version   # should be 1.x
```

## Local setup

```bash
# 1. Clone the repo (or pull the branch if you already have it)
git clone <repo-url>
cd <repo-name>
git checkout docs-v2

# 2. Install dependencies
yarn install

# 3. Generate acquirer pages from data/acquirers.yaml
node scripts/generate-acquirer-pages.js

# 4. Start the dev server
yarn start
```

The site opens at **http://localhost:3000**.

## Data model

Three layers feed into the generated acquirer pages. ISVs only see the final page — they never see processor names.

```
data/processors.yaml          Processor-level known-issues and metadata
        ↓
data/acquirers.yaml           Which processor each acquirer uses;
                              which capabilities are enabled per integration path
        ↓
src/partials/functions/       How to implement each capability:
                              code examples, parameters, errors, testing, edge cases
        ↓
scripts/generate-acquirer-pages.js   Merges all three → docs/acquirers/*.mdx
```

**Rule: never edit `docs/acquirers/` directly.** Run `node scripts/generate-acquirer-pages.js` after any change to the YAML or generator.

---

## Making changes

### Add a new processor

A processor is a payment backend (TSYS, Omnipay, TNS, …). Add it to `data/processors.yaml`:

```yaml
processors:
  my-processor:
    name: My Processor
    known-issues: []   # add entries here as quirks are discovered
```

Then set `processor: my-processor` on any acquirer in `data/acquirers.yaml` that uses it.

---

### Add a processor-level known issue

Known issues that apply to every acquirer on a processor live in `data/processors.yaml` and are injected automatically into each acquirer's page at the `{/* ACQUIRER_NOTE_INJECTION_POINT */}` marker in the relevant partial.

```yaml
processors:
  tsys:
    known-issues:
      - id: my-issue-id              # unique slug, used for deduplication
        title: Short title shown in the callout header
        severity: caution            # note | info | tip | caution | warning
        affects: tip-adjustment      # flat partial name (no path, no .mdx)
                                     # or a list: [tip-adjustment, batching]
        note: |
          Markdown body. No acquirer or processor names — ISVs only see
          their acquirer's page, not the processor behind it.
```

After editing, regenerate: `node scripts/generate-acquirer-pages.js`. The note appears on every acquirer whose `processor:` matches `tsys`.

---

### Add a new acquirer

1. Add an entry to `data/acquirers.yaml`:

```yaml
my-acquirer:
  name: "My Acquirer"
  geography: "US"
  status: active
  processor: tsys          # must match a key in data/processors.yaml
  card-brands: [VISA, MC]
  interac: false
  notes: >
    Optional acquirer-level note shown on every capability section.
  capabilities:
    sale:
      cloud-api: public
      android-pax: public
```

2. Run `node scripts/generate-acquirer-pages.js` — the page is generated automatically.

3. Add a skill file at `static/.well-known/skills/acquirers/my-acquirer.md` (see the Agent skills section below).

---

### Add a capability to an acquirer

In `data/acquirers.yaml`, under the acquirer's `capabilities:` block, add the capability and mark each integration path that's enabled.

Capability values:

| Value | What the ISV sees |
|---|---|
| `public` | Full code example |
| `coming-soon` | "Coming soon" callout, no code |
| `not-supported` | "Not supported on this path" callout |
| _(absent)_ | Section omitted — path not mentioned at all |

For capabilities that have flavors (sale, refund, reversal, pre-auth, tokenization):

```yaml
sale:
  cloud-api: public
  android-pax: public
  flavors:
    emv-sale:
      cloud-api: public
      android-pax: public
    sale-and-tip:
      cloud-api: public
      android-pax: public
```

For flat capabilities (tip-adjustment, batching, moto, …), just list paths directly:

```yaml
tip-adjustment:
  cloud-api: public
  android-pax: public
  backoffice: public
```

After editing, run `node scripts/generate-acquirer-pages.js`.

---

### Add a capability to an integration path (a new SDK or API)

This adds a new column across all acquirer pages.

1. **Register the path** — add the path key to `PATHS` and a label to `PATH_LABELS` in `scripts/generate-acquirer-pages.js`.

2. **Enable it per acquirer** — add the path key to the relevant capability entries in `data/acquirers.yaml` for every acquirer that supports it.

3. **Add code examples** — add a `<TabItem>` to every partial in `src/partials/functions/` where this path is supported. One edit covers all acquirer pages. Match the `value` attribute to the path key:

```jsx
<TabItem value="my-new-sdk" label="My New SDK">

```js
myNewSdk.sale(1000, 'USD');
```

</TabItem>
```

4. Run `node scripts/generate-acquirer-pages.js` and verify locally.

---

### Add or update implementation docs for a capability

All ISV-facing content — code examples, parameters, errors, edge cases, and testing — lives in `src/partials/functions/`. Changes here apply automatically to every acquirer that supports the capability. No regeneration needed.

| Partial | Capability |
|---|---|
| `sale/emv-sale.mdx` | EMV Sale |
| `sale/key-entry-sale.mdx` | Key Entry Sale (on-device MOTO) |
| `sale/moto-sale.mdx` | Back-office Remote Sale |
| `sale/sale-and-tip.mdx` | Sale with Tip |
| `sale/sale-and-tokenize.mdx` | Sale + Tokenize |
| `refund/card-present.mdx` | EMV Refund (card present) |
| `refund/moto-refund.mdx` | Remote Refund (back-office) |
| `refund/key-entry-refund.mdx` | Key Entry Refund |
| `reversal/reversal.mdx` | Reversal (on-device) |
| `reversal/remote-reversal.mdx` | Remote Reversal (back-office) |
| `reversal/partial-reversal.mdx` | Partial Reversal (injected into reversal) |
| `tip-adjustment.mdx` | Tip Adjustment |
| `pre-auth/pre-auth-create.mdx` | Pre-Auth Create |
| `pre-auth/key-entry-pre-auth.mdx` | Key Entry Pre-Auth |
| `pre-auth/pre-auth-capture.mdx` | Pre-Auth Capture |
| `pre-auth/pre-auth-void.mdx` | Pre-Auth Void |
| `pre-auth-capture-void.mdx` | Pre-Auth Capture Reversal |
| `moto.mdx` | MOTO (general) |
| `tokenization/procharge.mdx` | ProCharge tokenization |
| `tokenization/paysafe-token.mdx` | Paysafe single-use token |
| `tokenization/tokenex.mdx` | TokenEx tokenization |
| `batching.mdx` | Batch operations |
| `money-remittance.mdx` | Money Remittance |
| `void.mdx` | Void (Interac / TNS) |

Each partial typically contains: a short description, **When to use it**, **Code** (per-SDK tabs), **Parameters**, **Errors**, **Edge cases**, and **Testing**. Add or update any of these sections directly in the partial file.

---

### Add an acquirer-specific note to a flavor

Use `flavor-notes` in `data/acquirers.yaml` when a note only applies to one acquirer. The generator renders it as a Docusaurus admonition before the shared partial content.

```yaml
key-entry-sale:
  label: "Key Entry Sale"
  android-pax: public
  javascript-sdk: public
  flavor-notes:
    - type: caution             # note | tip | info | caution | warning
      title: "Optional title"
      body: >
        Markdown body — only appears on this acquirer's page.
        Supports `inline code` and [links](/reference/avs).
```

Use `notes:` (top-level on the acquirer) for a note that appears on every capability section for that acquirer. Use `flavor-notes` (on a specific flavor) when the note is narrower.

---

### Edit static pages

Pages in `docs/get-started/`, `docs/back-office/`, `docs/reference/`, and `docs/deprecated/` are plain Markdown — edit them directly. No regeneration needed.

## Build for production

```bash
node scripts/generate-acquirer-pages.js
yarn build
```

Static output goes to `build/`. Serve it locally with `yarn serve`.

## Internal preview of this branch

The `docs-v2` branch publishes to an internal preview site:

- <https://developers-internal.handpoint.io>

**You must be on the office VPN to open it.** Any other connection receives a
403 and a page that says the VPN is required. Ask the infrastructure team to
add your address if you are on the VPN and still see that page.

A push to `docs-v2` publishes the site again through GitHub Actions. To publish
by hand:

```bash
AWS_PROFILE=test ./scripts/deploy-staging.sh
```

The preview runs `DOCS_ENV=staging`, so it shows the pages marked
`visibility: internal`. That is why the site stays behind the VPN.

The infrastructure and its runbook live in the `handpoint-scripts` repository,
under `aws/docs-v2/infra/`. This preview is separate from the public sites at
`developer.handpoint.com` and `developer.handpoint.io`, which GitHub Pages
serves from `main` and `dev`.

## Legacy / New documentation toggle

During the transition period both portal versions are served from this project simultaneously.

| Path | Content |
|---|---|
| `/` | New portal (this branch) |
| `/legacy/` | Legacy portal (built from `dev` branch at commit `a2e635a`) |

A **Legacy \| New** pill appears in the top-right of the new-docs navbar. Every legacy page has a matching floating pill (top-right) so users can switch back.

### How `static/legacy/` was built

```bash
# 1. Checkout the dev branch in a temporary worktree
git worktree add /tmp/legacy-docs-build dev

# 2. Patch baseUrl so all asset paths resolve under /legacy/
sed -i "s|baseUrl: '/'|baseUrl: '/legacy/'|" /tmp/legacy-docs-build/docusaurus.config.js

# 3. Install and build
cd /tmp/legacy-docs-build && yarn install --frozen-lockfile && yarn build

# 4. Post-process: fix absolute /img/ paths that bypass Docusaurus baseUrl,
#    and inject the floating Legacy|New toggle into every HTML page
#    (see the PowerShell script used in the original setup — ask Claude Code to redo it)

# 5. Copy build output into this project
cp -r /tmp/legacy-docs-build/build/* static/legacy/

# 6. Clean up
git worktree remove /tmp/legacy-docs-build --force
```

### Refreshing the legacy snapshot

If `dev` gets significant updates during the transition period, re-run the steps above to regenerate `static/legacy/`, then commit and push.

### Removing the toggle once migration is complete

When the new portal is the sole version and the legacy toggle is no longer needed:

1. **Delete the static snapshot**
   ```bash
   rm -rf static/legacy/
   ```

2. **Remove the navbar item** from `docusaurus.config.js`:
   ```js
   // delete this line:
   { type: 'custom-VersionToggle', position: 'right' },
   ```

3. **Delete the component files**
   ```bash
   rm src/theme/NavbarItem/VersionToggle.jsx
   ```

4. **Unregister from ComponentTypes** — remove these two lines from `src/theme/NavbarItem/ComponentTypes.js`:
   ```js
   import VersionToggle from '@site/src/theme/NavbarItem/VersionToggle';
   'custom-VersionToggle': VersionToggle,
   ```

5. **Remove the CSS block** labelled `Version Toggle (Legacy / New)` from `src/css/custom.css`.

6. Commit and push. The 153 MB of legacy static files will be gone from the working tree; git history will still contain them. If you need to scrub them from history entirely, use `git filter-repo --path static/legacy/ --invert-paths`.

## AI-readable index

`static/llms.txt` is generated automatically and lists every acquirer with their supported capabilities and page URL. AI agents fetch this first to find the right acquirer page without reading every page.

## Agent skills system

`static/.well-known/skills/` contains machine-readable skill files for AI coding agents (Claude, Copilot, Cursor, etc.). Agents fetch these to get accurate, Handpoint-specific context before generating integration code. They are served publicly at `/.well-known/skills/`.

The skills are plain Markdown files — no build step, no generator. Changes are live as soon as they are deployed.

**Rule: when you update a doc page, also update the corresponding skill file.**

| When you edit this doc… | Also update this skill file |
|---|---|
| `docs/acquirers/epi.mdx` | `static/.well-known/skills/acquirers/epi.md` |
| `docs/acquirers/emerchantpay.mdx` | `static/.well-known/skills/acquirers/emerchantpay.md` |
| `docs/acquirers/paystrax.mdx` | `static/.well-known/skills/acquirers/paystrax.md` |
| `docs/acquirers/paysafe.mdx` | `static/.well-known/skills/acquirers/paysafe.md` |
| `docs/back-office/rest-api-no-reader.md` | `static/.well-known/skills/paths/cloud-api.md` |
| `docs/reference/android-sdk-setup.md` | `static/.well-known/skills/paths/android-pax.md` + `android-hilite.md` |
| iOS SDK docs | `static/.well-known/skills/paths/ios-hilite.md` |
| `docs/reference/cordova-events.md` | `static/.well-known/skills/paths/cordova.md` |
| `docs/back-office/rest-api-no-reader.md` (remote sale / token section) | `static/.well-known/skills/optional/back-office.md` |
| `docs/back-office/transaction-feed-api.md` | `static/.well-known/skills/optional/transaction-feed.md` |
| Hardware, credentials, or merchant setup info changes | `static/.well-known/skills/optional/prerequisites.md` |

For step-by-step instructions on adding a new acquirer, a new path, or a new optional skill, see [`static/.well-known/skills/README.md`](static/.well-known/skills/README.md).

## Tests

```bash
yarn test
```

22 unit tests covering the generator script logic (capability visibility, frontmatter generation, summary table rendering).

## Project structure

```
data/
  acquirers.yaml          ← acquirer list, capabilities per path, processor reference
  processors.yaml         ← processor definitions and known-issues (injected into acquirer pages)
docs/
  acquirers/              ← generated (do not edit directly)
  get-started/            ← authentication, sandbox, hardware setup
  back-office/            ← REST API no-reader, transaction feed, TMS APIs
  reference/              ← capabilities matrix, result object, error codes
  deprecated/             ← JS SDK and Windows SDK migration guides
scripts/
  generate-acquirer-pages.js   ← reads YAML + partials → writes docs/acquirers/
  __tests__/              ← Jest unit tests for the generator
src/
  partials/functions/     ← per-function docs, organised by capability/flavor subfolder
    sale/                 ← emv-sale, key-entry-sale, moto-sale, sale-and-tip, sale-and-tokenize
    refund/               ← card-present, moto-refund
    reversal/             ← reversal, remote-reversal, partial-reversal
    pre-auth/             ← pre-auth-create, pre-auth-capture, pre-auth-void
    pre-auth-capture-reversal/ ← pre-auth-capture-void
    tip-adjustment/
    tokenization/         ← procharge, paysafe-token, tokenex
    moto/, batching/, money-remittance/, void/
  components/             ← NotSupported.jsx, ComingSoon.jsx, FlavorSection.jsx
  css/                    ← custom styles
static/
  llms.txt                ← AI-readable capability index (generated)
  .well-known/skills/     ← machine-readable skill files for AI coding agents
```

## Deployment

Merging or pushing to `dev` deploys to staging. Merging to `main` deploys to production. The CI workflow runs `yarn generate` before building, so generated pages are always up-to-date in the deployed build.
