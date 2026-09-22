/**
 * The deploy script guards three things that would otherwise damage a live
 * site (Jira PRODUCT-190):
 *
 *   1. It must refuse any AWS account other than staging. console.handpoint.io
 *      lives in the same account, and the sync uses --delete.
 *   2. It must resolve the CloudFront distribution BEFORE the build, so that
 *      nothing fails after "aws s3 sync --delete" has already run.
 *   3. It must refuse to sync when the build produced no index page.
 *
 * The tests put a stub "aws" on PATH, so no call reaches AWS and no test
 * publishes anything. "yarn" is stubbed too, so no build runs.
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const REPO = path.join(__dirname, '..', '..');
const SCRIPT = path.join(REPO, 'scripts', 'deploy-staging.sh');
const STAGING = '295137012845';

/**
 * Run the script with stubbed aws/yarn binaries.
 * @param {object} responses - what the stub `aws` should answer.
 * @returns {{status:number, output:string}}
 */
function runScript({ account = STAGING, bucketExists = true, distributionId = 'E123', env = {} } = {}) {
    const bin = fs.mkdtempSync(path.join(os.tmpdir(), 'deploy-stub-'));

    fs.writeFileSync(path.join(bin, 'aws'), `#!/bin/sh
case "$*" in
  *"sts get-caller-identity"*)  echo "${account}" ;;
  *"s3api head-bucket"*)        exit ${bucketExists ? 0 : 1} ;;
  *"list-distributions"*)       echo "${distributionId}" ;;
  *"s3 sync"*)                  echo "STUB_SYNC_RAN" ;;
  *"create-invalidation"*)      echo "STUB_INVALIDATION" ;;
  *)                            exit 0 ;;
esac
`, { mode: 0o755 });

    // A build that produces nothing, so the index-page guard is exercised.
    fs.writeFileSync(path.join(bin, 'yarn'), `#!/bin/sh
echo "STUB_YARN $*"
`, { mode: 0o755 });

    try {
        const output = execFileSync('bash', [SCRIPT], {
            cwd: REPO,
            env: { ...process.env, ...env, PATH: `${bin}:${process.env.PATH}` },
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'pipe'],
        });
        return { status: 0, output };
    } catch (e) {
        return { status: e.status, output: `${e.stdout || ''}${e.stderr || ''}` };
    } finally {
        fs.rmSync(bin, { recursive: true, force: true });
    }
}

describe('account guard', () => {
    it('refuses to publish from a non-staging account', () => {
        const { status, output } = runScript({ account: '436189420969' });
        expect(status).not.toBe(0);
        expect(output).toContain('wrong AWS account');
    });

    it('never reaches the sync when the account is wrong', () => {
        const { output } = runScript({ account: '436189420969' });
        expect(output).not.toContain('STUB_SYNC_RAN');
    });
});

describe('bucket guard', () => {
    it('refuses when the bucket cannot be reached', () => {
        const { status, output } = runScript({ bucketExists: false });
        expect(status).not.toBe(0);
        expect(output).toContain('Apply aws/docs-v2/infra first');
    });
});

describe('distribution guard', () => {
    it('refuses when the distribution cannot be determined', () => {
        const { status, output } = runScript({ distributionId: 'None' });
        expect(status).not.toBe(0);
        expect(output).toContain('Set DOCS_DISTRIBUTION_ID');
    });

    it('fails before the build, so it can never fail after the sync', () => {
        const { output } = runScript({ distributionId: 'None' });
        expect(output).not.toContain('STUB_YARN');
        expect(output).not.toContain('STUB_SYNC_RAN');
    });

    it('accepts an id supplied by the workflow without a lookup', () => {
        const { output } = runScript({ distributionId: 'None', env: { DOCS_DISTRIBUTION_ID: 'E999' } });
        expect(output).not.toContain('Set DOCS_DISTRIBUTION_ID');
    });
});
