/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  getStartedSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      collapsible: false,
      items: [
        'get-started/index',
      ],
    },
  ],

  acquirersSidebar: [
    {
      type: 'category',
      label: 'Functionalities',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'United States',
          items: ['acquirers/epi', 'acquirers/paysafe-tsys', 'acquirers/vantiv'],
        },
        {
          type: 'category',
          label: 'Canada',
          items: ['acquirers/tsys-tns', 'acquirers/tns'],
        },
        {
          type: 'category',
          label: 'Europe',
          items: [
            'acquirers/omnipay-emp',
            'acquirers/omnipay-lloyds',
            'acquirers/omnipay-paystrax',
            'acquirers/teya',
            'acquirers/smartboard',
          ],
        },
        {
          type: 'category',
          label: 'Back Office',
          items: [
            'back-office/rest-api-no-reader',
            'back-office/transaction-feed-api',
            'back-office/tms-apis',
          ],
        },
      ],
    },
  ],

  referenceSidebar: [
    {
      type: 'category',
      label: 'Reference',
      collapsible: false,
      items: [
        'reference/authentication',
        'reference/development-hardware',
        'reference/manual-injection',
        'reference/pre-authorization-guide',
        'reference/transaction-recovery',
        'reference/terminal-reversals',
        'reference/testing-edge-cases',
        'reference/full-matrix',
        'reference/acquirer-capabilities-matrix',
        'reference/devices',
        'reference/interac-void',
        'reference/transaction-result-object',
        'reference/error-codes',
        'reference/validate-integration',
        'reference/known-issues',
      ],
    },
  ],

  releaseNotesSidebar: [
    {
      type: 'doc',
      id: 'release-notes/release-notes',
      label: 'Release Notes',
    },
  ],

  deprecatedSidebar: [
    {
      type: 'category',
      label: 'Deprecated',
      items: ['deprecated/javascript-sdk', 'deprecated/windows-sdk'],
    },
  ],
};

module.exports = sidebars;
