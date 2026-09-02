# Handpoint Developer Portal v2

Acquirer-first, AI agent-readable developer documentation for Handpoint payment integrations.

## What this is

Each payment acquirer (TSYS, PAYSAFE TSYS, OMNIPAY, etc.) has a single comprehensive page listing every supported payment function with code examples for all integration paths: REST API, Android SDK (PAX), Android SDK (HiLite), iOS SDK (HiLite), and Cordova.

The site is generated from `data/acquirers.yaml` — one YAML file controls what gets documented and for which acquirer.

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

## Making changes

### Update an acquirer's capabilities

Edit `data/acquirers.yaml` then regenerate:

```bash
node scripts/generate-acquirer-pages.js
```

Each capability entry has a value per integration path:

| Value | What it shows on the page |
|---|---|
| `public` | Code example |
| `coming-soon` | "Coming soon" callout, no code |
| `not-supported` | "Not supported on this path" callout |
| _(absent)_ | Section omitted entirely |

### Update function documentation

Edit the relevant file in `src/partials/functions/` — changes apply to every acquirer that supports that function. No regeneration needed.

| File | Function |
|---|---|
| `sale.mdx` | Sale |
| `refund.mdx` | Refund |
| `reversal.mdx` | Reversal |
| `partial-reversal.mdx` | Partial Reversal |
| `tip-adjustment.mdx` | Tip Adjustment |
| `pre-auth-create.mdx` | Pre-Auth (create) |
| `pre-auth-capture.mdx` | Pre-Auth Capture |
| `pre-auth-void.mdx` | Pre-Auth Void |
| `moto.mdx` | MOTO |
| `tokenization.mdx` | Tokenization |
| `batching.mdx` | Batching |
| `money-remittance.mdx` | Money Remittance |
| `void.mdx` | Void (Interac / TNS) |

### Add a new acquirer

1. Add an entry to `data/acquirers.yaml` with `status: active`
2. Run `node scripts/generate-acquirer-pages.js`
3. The new acquirer page appears automatically

### Edit static pages

Pages in `docs/get-started/`, `docs/back-office/`, `docs/reference/`, and `docs/deprecated/` are plain Markdown — edit them directly.

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
| `docs/acquirers/omnipay-emp.mdx` | `static/.well-known/skills/acquirers/emerchantpay.md` |
| `docs/acquirers/omnipay-paystrax.mdx` | `static/.well-known/skills/acquirers/paystrax.md` |
| `docs/acquirers/paysafe-tsys.mdx` | `static/.well-known/skills/acquirers/paysafe.md` |
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
  acquirers.yaml          ← source of truth for all acquirer capabilities
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
  partials/functions/     ← one .mdx per payment function (written once, used by all acquirers)
  components/             ← NotSupported.jsx, ComingSoon.jsx
  css/                    ← custom styles
static/
  llms.txt                ← AI-readable capability index (generated)
```

## Deployment

Merging or pushing to `dev` deploys to staging. Merging to `main` deploys to production. The CI workflow runs `yarn generate` before building, so generated pages are always up-to-date in the deployed build.
