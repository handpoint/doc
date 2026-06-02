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

## AI-readable index

`static/llms.txt` is generated automatically and lists every acquirer with their supported capabilities and page URL. AI agents fetch this first to find the right acquirer page without reading every page.

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
