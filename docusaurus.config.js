// @ts-check
const { themes } = require('prism-react-renderer');

// Fail closed. An unset value must be the restrictive one, so a new deploy
// job that forgets DOCS_ENV hides internal pages instead of publishing them.
// The staging preview and the local dev server set DOCS_ENV=staging.
const docsEnv = process.env.DOCS_ENV || 'production';
const isProduction = docsEnv === 'production';

// The internal staging preview publishes the same build under a different host.
// Keep the production host as the default, so an unset variable changes nothing.
const siteUrl = process.env.DOCS_URL || 'https://developer.handpoint.com';

/**
 * Recursively remove sidebar items whose doc has `visibility: internal` frontmatter.
 * Only applied when DOCS_ENV=production.
 */
function filterInternalSidebarItems(items, internalIds) {
  return items.reduce((acc, item) => {
    if (item.type === 'doc' && internalIds.has(item.id)) return acc;
    if (item.type === 'category') {
      const filtered = filterInternalSidebarItems(item.items || [], internalIds);
      if (filtered.length) acc.push({ ...item, items: filtered });
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: {
    docsEnv,
  },

  title: 'Handpoint Developer Portal',
  tagline: 'Payment integrations for ISVs and developers',
  url: siteUrl,
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'handpoint',
  projectName: 'developer-portal',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          exclude: [],
          ...(isProduction && {
            async sidebarItemsGenerator({ defaultSidebarItemsGenerator, docs, ...args }) {
              const items = await defaultSidebarItemsGenerator({ docs, ...args });
              const internalIds = new Set(
                docs.filter(d => d.frontMatter?.visibility === 'internal').map(d => d.id)
              );
              return filterInternalSidebarItems(items, internalIds);
            },
          }),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Handpoint',
          src: 'img/handpoint_logo_white.svg',
          srcDark: 'img/handpoint_logo_white.svg',
          width: 180,
          height: 32,
        },
        style: 'dark',
        items: [
          { type: 'custom-GlobalFilters', position: 'left' },
          { type: 'doc', docId: 'get-started/index', label: 'Get Started', position: 'left' },
          { type: 'docSidebar', sidebarId: 'acquirersSidebar', label: 'Functionalities', position: 'left' },
          { type: 'docSidebar', sidebarId: 'referenceSidebar', label: 'Reference', position: 'left' },
          { type: 'docSidebar', sidebarId: 'releaseNotesSidebar', label: 'Release Notes', position: 'left' },
          { href: '/agents', label: 'AI Agents', position: 'left' },
          { type: 'custom-VersionToggle', position: 'right' },
        ],
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['kotlin', 'swift', 'csharp', 'java', 'bash', 'json', 'http'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

module.exports = config;
