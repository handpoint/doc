# Implementation Plan: Internal Staging Site for `docs-v2`

## Overview

Publish the Docusaurus build of the `docs-v2` branch to the Handpoint **staging AWS account
(`295137012845`)** at `https://developers-internal.handpoint.io`. Only a person on the company VPN
can open the site. A push to `docs-v2` deploys the site again.

CloudFront serves the site from a **private** S3 bucket through Origin Access Control. A **dedicated
WAFv2 Web ACL** blocks all requests by default and permits only the VPN egress IP set. GitHub Actions
deploys through an **OIDC role**. The pipeline uses no long-lived AWS keys.

Work covers **two repositories**:

| Repository | Change |
|---|---|
| `handpoint-scripts` (infra) | New Terraform stack `aws/docs-v2/infra/`. Base branch is **`dev`**, not `master`. `master` was last touched in September 2024 and is 3323 commits behind |
| `doc` (this repository) | Docusaurus URL override, deploy script, GitHub Actions job |

---

## Verified Facts

I confirmed these facts against the live staging account on 2026-09-02.

| Fact | Value | Command |
|---|---|---|
| Staging account | `295137012845` | `aws sts get-caller-identity --profile test` |
| Certificate | `*.handpoint.io`, SANs `["*.handpoint.io","handpoint.io"]`, ISSUED | `aws acm describe-certificate` |
| Certificate validation | **EMAIL**, expires **2026-12-16**, 19 distributions use it | `aws acm describe-certificate` |
| Public zone | `handpoint.io` = `Z27UCMPG67OGOQ` | `aws route53 list-hosted-zones` |
| Private zones | `handpoint.local` = `Z3HJOSJZKSK747`, `handpoint.ipa` | `aws route53 list-hosted-zones` |
| `developers-internal.handpoint.io` | free: no Route53 record, NXDOMAIN, no CloudFront alias | `route53`, `dig`, `cloudfront` |
| `developer.handpoint.io` | CNAME to `handpointdev.github.io`, **GitHub Pages**, HTTP 200 | `curl -sI`, `dig` |
| Office VPN CIDR | `2.139.164.84/32`, rule description "manual - Office VPN", 26 rules | `aws ec2 describe-security-groups` |
| State key `docs-v2/terraform.tfstate` | free (404), bucket writable | `aws s3api head-object` |

---

## Architecture Decisions

### 1. New standalone Terraform stack, not an addition to `aws/documentation`

My first plan added a third `.tf` file beside `terminal-documentation.tf` and `cloudpos.tf`. Two
findings rejected that plan.

- **The stack pins AWS provider 4.16.0.** That version is older than
  `aws_cloudfront_origin_access_control`, which arrived in 4.54. This plan needs OAC.
- **The stack owns live distributions.** It manages the production and staging documentation
  sites, including the CloudFront distributions that SEC-670 placed in front of GitHub Pages. A
  separate state key keeps this work away from them.

> **Correction (2026-09-02).** An earlier version of this plan said that the `aws/documentation`
> stack has no remote state. That was wrong. I read the stack on a stale branch. On `dev` the
> file `aws/documentation/infra/test/remoteTfstate.tf` exists and uses the key
> `documentation/terraform.tfstate`. The two reasons above still hold.

A new stack at `aws/docs-v2/infra/` keeps its own state key. It cannot damage the existing
resources. Model the new stack on `aws/console/infra/`, which uses AWS provider 6.36.0, a remote
backend, and a GitHub OIDC role.

### 2. Private bucket with OAC — a deliberate divergence from the house pattern

Both precedents serve content from **world-readable buckets**:

- `aws/documentation` sets `acl = "public-read"`.
- `aws/console` sets every `aws_s3_bucket_public_access_block` flag to `false`.

That pattern defeats this requirement. A person could bypass CloudFront and the WAF through the
direct S3 URL. This stack therefore keeps the bucket private, enables all four public-access blocks,
and grants read access only to the distribution through OAC.

Declare this divergence in the pull request. A reviewer who expects the house pattern must
understand the reason.

### 3. `developers-internal.handpoint.io`

The name is one label below `handpoint.io`. A wildcard certificate matches exactly one label
(RFC 6125 §6.4.3). Therefore `*.handpoint.io` covers this name, and the stack needs no new
certificate.

The plan rejected two earlier candidates:

- **`developer.handpoint.local`.** No public certificate authority issues a certificate for a
  reserved internal name. CloudFront requires a public ACM certificate for an alternate domain name.
  CloudFront therefore cannot serve a `.local` name at all. RFC 6762 also reserves `.local` for
  mDNS, so macOS and systemd-resolved send the query to multicast instead of the VPN resolver.
- **`developers.internal.handpoint.io`.** The name sits two labels below `handpoint.io`. The
  wildcard does not match it. The stack would need a second certificate.

The hyphen gives a second benefit. A person can forget a DNS label. A person does not usually cut a
name at a hyphen.

### 4. Dedicated WAF ACL, not the shared ACL

`aws/waf/infra/resources/waf.tf` defines `default_cloudfront_acl` with `default_action { allow {} }`.
That ACL applies a rate limit and a reputation list to public sites. This site needs the opposite
rule: `default_action { block {} }` plus one allow rule for the IP set. A block rule inside the
shared ACL would affect every other distribution that uses it. This stack therefore creates its own
ACL.

### 5. Reuse the existing wildcard certificate

Use `arn:aws:acm:us-east-1:295137012845:certificate/4b552596-6a86-4203-9228-21ce33523bf9`. The
Verified Facts table confirms the coverage. Task 1 no longer needs to check it.

### 6. `DOCS_ENV=staging` renders the internal pages

`docusaurus.config.js` removes `visibility: internal` pages from the sidebar only when
`DOCS_ENV=production`. The default value is `staging`. Keep the default. The internal content is the
purpose of an internal preview. Only the `url` value needs an override.

---

## Dependency Graph

```
T1  Confirm the VPN egress CIDRs and the free state key   [DONE]
     │   answer: 2.139.164.84/32 only
     │
     ├── T2  Terraform skeleton + private S3 + OAC + CloudFront + Route53
     │        └── delivers: an HTTPS URL that serves a placeholder file
     │        │
     │        ├── T3  WAF ACL + IPSet + association
     │        │        └── delivers: 200 on the VPN, 403 off the VPN
     │        │
     │        └── T5  GitHub OIDC role + deploy policy
     │                 └── delivers: CI assumes a role, writes the bucket, invalidates
     │
     └── T4  Docusaurus url override + local deploy script
              └── delivers: the real docs-v2 site at the URL
                   │
                   └── T6  GitHub Actions job on push to docs-v2   (needs T4 and T5)
                            └── delivers: a push deploys the site
                                 │
                                 └── T7  Runbook and README
```

Build the tasks bottom-up along this graph. **Task 1 is complete.** Task 2 can start.

---

## Task List

### Phase 1: A reachable site

- [x] **Task 1:** Confirm the VPN egress CIDRs and the state key - **DONE 2026-09-02**
- [ ] **Task 2:** Terraform stack — private S3, OAC, CloudFront, Route53

### Checkpoint A: Foundation

- [ ] `https://developers-internal.handpoint.io` serves a placeholder file over valid HTTPS
- [ ] The direct S3 URL returns `403`
- [ ] The `aws/documentation` stack stays untouched
- [ ] **A human reviews the result before you continue**

### Phase 2: Access control and content

- [ ] **Task 3:** WAF Web ACL — block by default, permit the VPN IP set
- [ ] **Task 4:** Docusaurus URL override and local deploy script

### Checkpoint B: The internal site is live

- [ ] The real `docs-v2` content is at the URL
- [ ] On the VPN the site returns `200`. Off the VPN the site returns `403`
- [ ] A second person confirms both results
- [ ] The internal-only pages appear
- [ ] **A human reviews the result before you continue**

### Phase 3: Automation

- [ ] **Task 5:** GitHub Actions OIDC role and deploy policy
- [ ] **Task 6:** GitHub Actions deploy job on push to `docs-v2`
- [ ] **Task 7:** Runbook and README

### Checkpoint C: Complete

- [ ] A push to `docs-v2` deploys the site in about 5 minutes
- [ ] The repository holds no long-lived AWS credentials
- [ ] You tested the rollback procedure one time
- [ ] Both pull requests are ready for review

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| **Accepted:** the one-CIDR allowlist locks out Iceland, the Madrid office, and every home connection | **High** | Fernando accepted this risk on 2026-09-02. Task 3 must announce the URL and the VPN condition before the ACL goes live. Add a CIDR to the IPSet on request. The change applies in about 1 minute. Never remove the last IP |
| A `terraform plan` in `aws/documentation` recreates live buckets | **High** | Do not touch that stack. Use a new stack and the new state key `docs-v2/terraform.tfstate` |
| A copy of the public-bucket house pattern bypasses the WAF | **High** | Task 2 sets `block_public_access` and OAC. Checkpoint A confirms that the direct S3 URL returns 403 |
| Internal pages reach a wider audience than you intend | Medium | The WAF is the only control. `DOCS_ENV=staging` renders internal pages on purpose. Confirm that the VPN boundary suits `visibility: internal` content |
| The `*.handpoint.io` certificate expires on **2026-12-16** | Medium | The certificate uses **EMAIL** validation and serves **19** distributions. A person must answer the renewal email. Raise a separate ticket. This site fails with the other 18 if nobody answers |
| A reviewer sees the two repositories separately | Low | Each pull request references the other. Land the `handpoint-scripts` change first |
| CloudFront propagation makes a change look broken | Low | Wait 5 to 15 minutes after an apply. Record this in the runbook |

---

## Findings Outside This Scope

**The existing staging developers site does not run on AWS.** `developer.handpoint.io` is a CNAME to
`handpointdev.github.io`. GitHub Pages serves it from the `dev` branch through
`.github/workflows/deploy.yml`. This plan cannot damage that site.

**The AWS resources for that name are orphaned and still run:**

| Resource | State |
|---|---|
| S3 bucket `developer.handpoint.io` | exists |
| CloudFront `E5KRKH1SC8LNQ`, alias `developer.handpoint.io` | **enabled, deployed** |
| Route53 `developer.handpoint.io` | points to GitHub Pages, not to the distribution |

The distribution costs money and holds a CloudFront alias. Raise a separate cleanup ticket. Do not
delete these resources inside this plan.

---

## Decisions

### Access control

The site uses **CloudFront and a WAF IP allowlist**. Fernando confirmed this on 2026-09-02.

### The IP set holds one CIDR

```
2.139.164.84/32     # Office VPN
```

Fernando decided this on 2026-09-02, after he read the evidence below.

**The live security groups permit 27 public CIDRs. This plan permits one.** These groups therefore
lose access to the site:

| Group | CIDRs | Registry |
|---|---|---|
| Iceland | `157.157.10.148/32`, `157.157.10.149/32`, `213.181.115.58/32` | Siminn, Nova |
| Office Madrid | `88.17.30.141/32` | Spain |
| Home connections | about 15 single addresses (`fer`, `jorge`, `eze`, `nerea`, ...) | Spain |
| Fiserv (a processor, correctly excluded) | `170.186.103.0/24`, `170.186.105.0/24` | United States |

I raised this risk. Fernando accepted it. The strict start gives a clean security position, and one
addition to the IP set applies in about one minute.

**Task 3 must therefore tell colleagues how to reach the site before the ACL goes live.**

---

## Closed Questions

| Question | Answer | Date |
|---|---|---|
| Is profile `test` the staging account? | Yes - `295137012845` | 2026-09-02 |
| Does the certificate cover the name? | Yes - `*.handpoint.io` covers one label | 2026-09-02 |
| Which subdomain? | `developers-internal.handpoint.io` | 2026-09-02 |
| Does the name conflict with the current site? | No - that site is GitHub Pages | 2026-09-02 |
| Which enforcement mechanism? | CloudFront and a WAF IP allowlist | 2026-09-02 |
| Which VPN CIDRs? | `2.139.164.84/32` only | 2026-09-02 |
| Is the state key free? | Yes - 404 | 2026-09-02 |

**No question blocks Task 2.**
