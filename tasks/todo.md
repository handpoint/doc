# Tasks: Internal Staging Site for `docs-v2`

Plan: [tasks/plan.md](plan.md)

URL: `https://developers-internal.handpoint.io` · Account: `295137012845` (profile `test`)

Repositories: **I** = `handpoint-scripts` (infra) · **D** = `doc` (this repository)

---

## Task 1: Confirm the VPN egress CIDRs and the state key  [I]  ✅ DONE 2026-09-02

**Description:** Confirm the last two unknown facts. This task creates nothing. Task 3 can lock out
every colleague if the CIDR answer is wrong, so treat this task as a hard gate.

The account and the certificate are already confirmed. See the Verified Facts table in `plan.md`.

**Acceptance criteria:**
- [x] Fernando confirmed the CIDR on 2026-09-02: **`2.139.164.84/32` only**
- [x] The infra agrees. The value appears 5 times in the tfvars files and 26 times in the live
      security groups. One rule describes it as **"manual - Office VPN"**
- [x] The list states whether remote colleagues leave through the same address. **They do not.**
      Fernando accepted the lockout. See the Decisions section of `plan.md`
- [x] The state bucket `hptest-terraform-states` accepts writes
- [x] The key `docs-v2/terraform.tfstate` is free
- [x] The answers appear in the Decisions section of `plan.md`

**Verification:**
- [x] `aws s3api head-object ... --key docs-v2/terraform.tfstate` returned **404**
- [x] `aws s3 ls s3://hptest-terraform-states --profile test` succeeded
- [x] The CIDR and the name of the person appear in `plan.md`

**Dependencies:** None
**Files likely touched:** `tasks/plan.md` (record the answers)
**Estimated scope:** XS — no infrastructure, no code

---

## Task 2: Terraform stack — private S3, OAC, CloudFront, Route53  [I]  ✅ DONE — commit 91c672682

**Description:** Create a new standalone stack at `aws/docs-v2/infra/`. Model it on
`aws/console/infra/`, which uses AWS provider 6.x, a remote backend, and a `resources/` directory
with per-environment symlinks. The bucket stays private. CloudFront reads it through Origin Access
Control. This task delivers a working HTTPS URL before any content or access control exists.

**Caution: do not copy the bucket policy of `aws/documentation` or `aws/console`.** Both make the
bucket world-readable. A public bucket lets a person bypass the WAF that Task 3 adds.

**Acceptance criteria:**
- [ ] The bucket is private. All four `block_public_access` flags are `true`
- [ ] The bucket policy grants read access only to the distribution, through an `AWS:SourceArn`
      condition on the OAC
- [ ] CloudFront serves the alias over HTTPS with certificate `4b552596-...` and sets
      `default_root_object = index.html`
- [ ] CloudFront maps both 403 and 404 to `/404.html`. **Do not map them to `/index.html`.** That
      mapping hides broken documentation links
- [ ] A Route53 record for `developers-internal` exists in the public zone `Z27UCMPG67OGOQ`
- [ ] The backend uses the key `docs-v2/terraform.tfstate`
- [ ] The outputs expose the bucket name and the distribution ID
- [ ] The `aws/documentation` stack stays untouched

**Verification:**
- [ ] `terraform plan` shows creates only. It shows no destroy action
- [ ] Upload a placeholder file:
      `aws s3 cp /tmp/index.html s3://<bucket>/index.html --profile test`
- [ ] `curl -sI https://developers-internal.handpoint.io` returns `200` with a valid chain
- [ ] `curl -sI https://<bucket>.s3.amazonaws.com/index.html` returns `403`
- [ ] The orphaned distribution `E5KRKH1SC8LNQ` keeps its current state

**Dependencies:** Task 1
**Files likely touched:**
- `aws/docs-v2/infra/resources/providers.tf`
- `aws/docs-v2/infra/resources/commons.tf`
- `aws/docs-v2/infra/resources/docs-v2.tf`
- `aws/docs-v2/infra/resources/outputs.tf`
- `aws/docs-v2/infra/test/{terraform.tfvars,remoteTfstate.tf}` and the symlinks

**Estimated scope:** M

---

## Task 3: WAF Web ACL — block by default, permit the VPN IP set  [I]  ⏳ written, in review

**Description:** Create a dedicated WAFv2 Web ACL with CLOUDFRONT scope. The ACL blocks every request
by default. One rule permits the VPN egress CIDRs. Associate the ACL with the Task 2 distribution.
Do not use the shared ACL in `aws/waf`, because that ACL permits by default.

**Acceptance criteria:**
- [ ] An `aws_wafv2_ip_set` holds exactly one entry: `2.139.164.84/32` (Office VPN). A tfvars
      list supplies it, so a later addition needs no code change
- [ ] The Web ACL uses scope `CLOUDFRONT`, lives in `us-east-1`, and sets `default_action { block {} }`
- [ ] One allow rule references the IP set. A blocked request receives `403`
- [ ] The distribution sets `web_acl_id`. **Do not associate the ACL in the console.** The shared WAF
      stack records manual associations as a problem. Do not repeat it
- [ ] CloudWatch metrics and sampled requests are enabled, so you can diagnose a lockout
- [ ] The shared `aws/waf` stack stays untouched

**Verification:**
- [ ] `terraform plan` shows creates plus the `web_acl_id` update on the distribution
- [ ] On the VPN: `curl -sI https://developers-internal.handpoint.io` returns `200`
- [ ] Off the VPN (use a phone hotspot): the same command returns `403`
- [ ] **A second colleague confirms `200` over their own VPN connection.** This step proves that the
      allowlist covers more than the author's address
- [ ] A blocked request appears in the WAF sampled requests
- [ ] **You announced the URL and the VPN condition before the ACL went live.** Colleagues in
      Iceland, in the Madrid office, and at home lose access. See the Decisions section of `plan.md`

**Dependencies:** Task 2
**Files likely touched:**
- `aws/docs-v2/infra/resources/waf.tf`
- `aws/docs-v2/infra/resources/docs-v2.tf` (add `web_acl_id`)
- `aws/docs-v2/infra/test/terraform.tfvars`

**Estimated scope:** S

---

## Task 4: Docusaurus URL override and local deploy script  [D]  ⏳ written, in review

**Description:** Make the `url` value configurable, so the staging build writes correct absolute
URLs, sitemap entries, and canonical tags. Add a script that builds the site and copies it. This task
puts the real `docs-v2` content at the URL for the first time. Keep `DOCS_ENV` at the default value
`staging`, so the `visibility: internal` pages appear.

**Acceptance criteria:**
- [ ] `docusaurus.config.js` reads `url` from `process.env.DOCS_URL`. The default value stays
      `https://developer.handpoint.com`, so the production build does not change
- [ ] `baseUrl` stays `/`. The site sits at the root of the domain
- [ ] `scripts/deploy-staging.sh` runs generate, then build, then `s3 sync --delete`, then a
      CloudFront invalidation
- [ ] The script stops with an error if `AWS_PROFILE` is absent, if the bucket is absent, or if the
      build fails. The script never copies a partial build
- [ ] The script is idempotent. Two runs give the same result

**Verification:**
- [x] With no environment variable the config still resolves `https://developer.handpoint.com`
- [x] `DOCS_URL=https://developers-internal.handpoint.io yarn build` succeeded. All 54 sitemap
      entries use the staging host. Zero entries use the production host
- [x] `baseUrl` still resolves to `/`
- [x] `shellcheck scripts/deploy-staging.sh` is clean
- [x] The build renders the `visibility: internal` page
      (`build/superpowers/specs/2026-08-03-functionalities-dual-nav-design/index.html`)
- [ ] **Blocked until apply:** `./scripts/deploy-staging.sh` completes end to end
- [ ] **Blocked until apply:** a deep link opens after a hard refresh

**Note on the existing test suite:** `yarn test` reports 4 failures in
`scripts/__tests__/generate-acquirer-pages.test.js`. I confirmed the same 4 failures on a clean
tree with my change stashed. They pre-date this work and belong to a separate ticket.
Jest was also absent from `node_modules` until I ran `yarn install --frozen-lockfile`.

**Dependencies:** Task 2. Complete Task 3 first, so the content is never public
**Files likely touched:**
- `docusaurus.config.js`
- `scripts/deploy-staging.sh`

**Estimated scope:** S

---

## Task 5: GitHub Actions OIDC role and deploy policy  [I]  ⏳ written, in review

**Description:** Create an IAM role. GitHub Actions assumes the role from the `handpoint/doc`
repository on the `docs-v2` branch. Model the role on
`aws/console/infra/resources/github-oidc.tf`. The pipeline uses no long-lived keys.

**Acceptance criteria:**
- [ ] The stack reuses the existing `token.actions.githubusercontent.com` OIDC provider. Import the
      provider instead of a second create. The console stack records this step in a comment
- [ ] The trust policy permits only `repo:handpoint/doc:ref:refs/heads/docs-v2`. **Use the branch,
      not `:*`.** Another branch must not deploy
- [ ] The permissions cover `s3:PutObject`, `s3:DeleteObject`, `s3:GetObject`, and `s3:ListBucket` on
      this bucket only, plus `cloudfront:CreateInvalidation` on this distribution only
- [ ] An output exposes the role ARN

**Verification:**
- [ ] `terraform plan` shows no IAM change in any other stack
- [ ] A temporary workflow on `docs-v2` assumes the role and runs `aws sts get-caller-identity`
- [ ] The same workflow on another branch **fails** to assume the role
- [ ] The role cannot read an unrelated bucket. `aws s3 ls s3://<other-bucket>` is denied

**Dependencies:** Task 2, Task 3
**Files likely touched:**
- `aws/docs-v2/infra/resources/github-oidc.tf`
- `aws/docs-v2/infra/resources/outputs.tf`
- `aws/docs-v2/infra/test/terraform.tfvars`

**Estimated scope:** S

---

## Task 6: GitHub Actions deploy job on push to `docs-v2`  [D]  ⏳ written, in review

**Description:** Add a `deploy-staging` job to `.github/workflows/deploy.yml`. A push to `docs-v2`
starts the job. A manual dispatch also starts it. The existing GitHub Pages jobs for `main` and `dev`
must not change.

**Caution: `developer.handpoint.io` runs on GitHub Pages from the `dev` branch.** Do not change the
triggers of the existing jobs.

**Acceptance criteria:**
- [ ] The job starts only on a push to `docs-v2` and on a manual dispatch
- [ ] The existing `main` and `dev` jobs keep their triggers and their behaviour
- [ ] The job sets `permissions: id-token: write, contents: read` and uses the Task 5 role
- [ ] The steps are: checkout, setup-node 24 with yarn cache, `yarn install --frozen-lockfile`,
      `yarn generate`, `yarn build` with `DOCS_URL`, `s3 sync --delete`, invalidation
- [ ] A concurrency group cancels a superseded run, so two syncs cannot interleave
- [ ] The job summary prints the site URL

**Verification:**
- [ ] Push a small documentation change to `docs-v2`. The workflow passes in under 10 minutes
- [ ] The change appears at the URL after the invalidation. Allow 5 to 15 minutes
- [ ] Open a pull request to `dev`. The existing `test-deploy` job still runs. `deploy-staging` does
      not run
- [ ] Push to `dev`. The GitHub Pages deploy still works
- [ ] `curl -sI https://developer.handpoint.io` still returns `200` from GitHub Pages

**Dependencies:** Task 4, Task 5
**Files likely touched:** `.github/workflows/deploy.yml`
**Estimated scope:** S

---

## Task 7: Runbook and README  [I] [D]  ⏳ written, in review

**Description:** Record how a person opens the site, how you grant access to a new office, and how
you roll back. Without this record the WAF IPSet becomes private knowledge, and the first lockout
becomes an outage.

**Acceptance criteria:**
- [ ] `aws/docs-v2/infra/README.md` follows the house format: Purpose, Prerequisites, Steps
- [ ] The README records **how to add a VPN CIDR to the IPSet**. This is the most probable future
      request
- [ ] The README records the rollback: start the workflow from an earlier commit, or copy a previous
      build with `s3 sync`
- [ ] The README records the triage path for a 403: check the VPN first, then the WAF sampled requests
- [ ] The README records the two divergences from the house pattern: the private bucket and the
      dedicated WAF ACL
- [ ] The `doc` repository README names the URL and states the VPN condition
- [ ] The README states that `developer.handpoint.io` is a separate GitHub Pages site

**Verification:**
- [ ] A colleague outside this work follows the README and opens the site
- [ ] You execute the rollback procedure one time against a real earlier version

**Dependencies:** Task 6
**Files likely touched:**
- `aws/docs-v2/infra/README.md`
- `README.md`

**Estimated scope:** S

---

## Checkpoints

### Checkpoint A — after Task 1 and Task 2: Foundation
- [ ] `https://developers-internal.handpoint.io` serves a placeholder over valid HTTPS
- [ ] The direct S3 URL returns `403`
- [ ] The `aws/documentation` stack and the distribution `E5KRKH1SC8LNQ` stay untouched
- [ ] **A human reviews the result before you continue**

### Checkpoint B — after Task 3 and Task 4: The internal site is live
- [ ] The real `docs-v2` content is at the URL
- [ ] On the VPN the site returns `200`. Off the VPN the site returns `403`
- [ ] A second person confirms both results
- [ ] The internal-only pages appear
- [ ] **A human reviews the result before you continue**

### Checkpoint C — after Task 5 to Task 7: Complete
- [ ] A push to `docs-v2` deploys the site
- [ ] The repository holds no long-lived AWS credentials
- [ ] You tested the rollback one time
- [ ] Both pull requests reference each other and are ready for review

---

## Out of Scope

Raise these as separate tickets. Do not do this work inside this plan.

- [ ] Delete the orphaned bucket `developer.handpoint.io` and distribution `E5KRKH1SC8LNQ`. DNS
      points to GitHub Pages, so the distribution serves nothing and costs money
- [ ] Renew the `*.handpoint.io` certificate. It uses EMAIL validation, expires **2026-12-16**, and
      serves **19** distributions
