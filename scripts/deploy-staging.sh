#!/usr/bin/env bash
#
# Build the documentation site and publish it to the internal staging preview
# at https://developers-internal.handpoint.io (Jira PRODUCT-190).
#
# Only a person on the company office VPN can open that site. The WAF returns
# 403 to every other address.
#
# Credentials: locally, set AWS_PROFILE=test. In GitHub Actions, the workflow
# assumes the deploy role, so no profile is set. The script accepts both and
# checks the account number instead.
#
# Usage:
#   AWS_PROFILE=test ./scripts/deploy-staging.sh
#
# Environment overrides (all optional):
#   DOCS_DISTRIBUTION_ID  CloudFront distribution. CI sets it. A local run may
#                         omit it, and the script then finds it by the alias.

set -euo pipefail

# Run from the repository root, whatever directory the caller used.
cd "$(dirname "$0")/.."

readonly EXPECTED_ACCOUNT="295137012845"
readonly BUCKET="developers-internal.handpoint.io"
readonly SITE_URL="https://developers-internal.handpoint.io"

die() {
    echo "error: $*" >&2
    exit 1
}

# --- preconditions -----------------------------------------------------------
#
# Everything that can fail must fail HERE, before the build and before the
# sync. A failure after "aws s3 sync --delete" would leave the site published
# with a stale cache.

command -v aws >/dev/null 2>&1 || die "the aws CLI is not installed"
command -v yarn >/dev/null 2>&1 || die "yarn is not installed"

account="$(aws sts get-caller-identity --query Account --output text 2>/dev/null)" \
    || die "no usable AWS credentials. Set AWS_PROFILE=test, or assume the deploy role"

[ "${account}" = "${EXPECTED_ACCOUNT}" ] \
    || die "wrong AWS account ${account}. This script only publishes to staging (${EXPECTED_ACCOUNT})"

aws s3api head-bucket --bucket "${BUCKET}" >/dev/null 2>&1 \
    || die "cannot reach the bucket ${BUCKET}. Apply aws/docs-v2/infra first"

# CI passes the id, so the deploy role needs no cloudfront:ListDistributions.
# A local run falls back to the alias. The "Aliases.Items &&" guard matters:
# a distribution with no alias has no Items key, and contains() rejects null.
distribution_id="${DOCS_DISTRIBUTION_ID:-}"
if [ -z "${distribution_id}" ]; then
    echo "==> DOCS_DISTRIBUTION_ID is unset. Looking the distribution up by its alias"
    distribution_id="$(aws cloudfront list-distributions \
        --query "DistributionList.Items[?Aliases.Items && contains(Aliases.Items, '${BUCKET}')].Id | [0]" \
        --output text 2>/dev/null)" || distribution_id=""
fi

[ -n "${distribution_id}" ] && [ "${distribution_id}" != "None" ] \
    || die "cannot determine the CloudFront distribution for ${BUCKET}. Set DOCS_DISTRIBUTION_ID"

# --- build -------------------------------------------------------------------
# set -e stops the script here if a step fails, so a broken build never reaches
# the sync step below.

echo "==> generate acquirer pages"
yarn generate

# DOCS_ENV=staging keeps the pages marked "visibility: internal". That is the
# purpose of this preview, and it is why the WAF must stay in front of it.
echo "==> build the site for ${SITE_URL}"
DOCS_ENV=staging DOCS_URL="${SITE_URL}" yarn build

# Guard the "--delete" flag below: an empty build directory would otherwise
# erase the live site.
[ -f build/index.html ] || die "build/index.html is missing. Refusing to sync an incomplete build"

# --- publish -----------------------------------------------------------------

echo "==> sync to s3://${BUCKET}/"
aws s3 sync build/ "s3://${BUCKET}/" --delete

echo "==> invalidate the CloudFront cache (${distribution_id})"
aws cloudfront create-invalidation \
    --distribution-id "${distribution_id}" \
    --paths "/*" \
    --query "Invalidation.Id" \
    --output text

echo
echo "Done. The site is at ${SITE_URL}"
echo "You must be on the office VPN to open it."
