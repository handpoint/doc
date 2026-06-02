// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Handpoint Developer Portal',
  tagline: 'Payment integrations for ISVs and developers',
  url: 'https://developer.handpoint.com',
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
        title: 'Handpoint',
        items: [
          { type: 'doc', docId: 'get-started/index', label: 'Get Started', position: 'left' },
          { type: 'docSidebar', sidebarId: 'acquirersSidebar', label: 'Acquirers', position: 'left' },
          { type: 'docSidebar', sidebarId: 'backOfficeSidebar', label: 'Back Office', position: 'left' },
          { type: 'docSidebar', sidebarId: 'referenceSidebar', label: 'Reference', position: 'left' },
          { type: 'docSidebar', sidebarId: 'releaseNotesSidebar', label: 'Release Notes', position: 'left' },
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
