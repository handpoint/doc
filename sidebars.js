/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  getStartedSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      collapsible: false,
      items: [
        'get-started/index',
        'get-started/authentication',
        'get-started/sandbox',
        'get-started/development-hardware',
      ],
    },
  ],

  acquirersSidebar: [
    {
      type: 'category',
      label: 'Acquirers',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'United States',
          items: ['acquirers/tsys', 'acquirers/paysafe-tsys', 'acquirers/vantiv', 'acquirers/amex'],
        },
        {
          type: 'category',
          label: 'Canada',
          items: ['acquirers/tsys-tns', 'acquirers/tns', 'acquirers/elavon-canada'],
        },
        {
          type: 'category',
          label: 'Europe',
          items: [
            'acquirers/omnipay-emp',
            'acquirers/omnipay-lloyds',
            'acquirers/omnipay-paystrax',
            'acquirers/teya',
          ],
        },
      ],
    },
  ],

  backOfficeSidebar: [
    {
      type: 'category',
      label: 'Back Office',
      collapsible: false,
      items: [
        'back-office/rest-api-no-reader',
        'back-office/transaction-feed-api',
        'back-office/tms-apis',
      ],
    },
  ],

  referenceSidebar: [
    {
      type: 'category',
      label: 'Reference',
      collapsible: false,
      items: [
        'reference/acquirer-capabilities-matrix',
        'reference/transaction-result-object',
        'reference/error-codes',
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
