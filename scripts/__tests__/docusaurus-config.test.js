/**
 * The site config reads two environment variables. Both defaults are load
 * bearing, so they are pinned here.
 *
 *   DOCS_ENV  decides whether pages marked "visibility: internal" reach the
 *             sidebar. The default must be the RESTRICTIVE value, so that a
 *             deploy job which forgets the variable hides those pages instead
 *             of publishing them (Jira PRODUCT-190).
 *   DOCS_URL  decides the absolute urls, the sitemap and the canonical tags.
 *             The default must stay the production host.
 */

const CONFIG = '../../docusaurus.config.js';

function loadConfig(env) {
    jest.resetModules();
    const saved = { DOCS_ENV: process.env.DOCS_ENV, DOCS_URL: process.env.DOCS_URL };
    delete process.env.DOCS_ENV;
    delete process.env.DOCS_URL;
    Object.assign(process.env, env);
    try {
        return require(CONFIG);
    } finally {
        delete process.env.DOCS_ENV;
        delete process.env.DOCS_URL;
        if (saved.DOCS_ENV !== undefined) process.env.DOCS_ENV = saved.DOCS_ENV;
        if (saved.DOCS_URL !== undefined) process.env.DOCS_URL = saved.DOCS_URL;
    }
}

describe('DOCS_ENV', () => {
    it('defaults to production, so an unset variable hides internal pages', () => {
        const config = loadConfig({});
        expect(config.customFields.docsEnv).toBe('production');
    });

    it('keeps internal pages when the preview asks for staging', () => {
        const config = loadConfig({ DOCS_ENV: 'staging' });
        expect(config.customFields.docsEnv).toBe('staging');
    });

    it('treats any unknown value as not production', () => {
        const config = loadConfig({ DOCS_ENV: 'preview' });
        expect(config.customFields.docsEnv).toBe('preview');
    });
});

describe('DOCS_URL', () => {
    it('defaults to the production host', () => {
        const config = loadConfig({});
        expect(config.url).toBe('https://developer.handpoint.com');
    });

    it('uses the internal preview host when the deploy script sets it', () => {
        const config = loadConfig({ DOCS_URL: 'https://developers-internal.handpoint.io' });
        expect(config.url).toBe('https://developers-internal.handpoint.io');
    });

    it('keeps baseUrl at the domain root whatever the host', () => {
        const config = loadConfig({ DOCS_URL: 'https://developers-internal.handpoint.io' });
        expect(config.baseUrl).toBe('/');
    });
});
