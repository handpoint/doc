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
      type: 'link',
      label: 'Authentication & Initialization',
      href: '/reference/authentication',
    },
    {
      type: 'category',
      label: 'Functionalities',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'United States',
          items: [
            { type: 'doc', id: 'acquirers/epi',        label: 'EPI' },
            { type: 'doc', id: 'acquirers/paysafe-tsys', label: 'PAYSAFE' },
          ],
        },
        {
          type: 'category',
          label: 'Canada',
          items: [
            { type: 'doc', id: 'acquirers/tsys-tns', label: 'PAYSAFE + Interac' },
            { type: 'doc', id: 'acquirers/tns',      label: 'TNS (Interac)' },
          ],
        },
        {
          type: 'category',
          label: 'Europe',
          items: [
            { type: 'doc', id: 'acquirers/omnipay-emp',      label: 'EmerchantPay' },
            { type: 'doc', id: 'acquirers/omnipay-paystrax', label: 'Paystrax' },
            'acquirers/smartboard',
          ],
        },
        {
          type: 'category',
          label: 'Back Office',
          items: [
            'back-office/rest-api-no-reader',
            'back-office/device-commands',
            'back-office/transaction-feed-api',
            'back-office/tms-apis',
          ],
        },
      ],
    },
  ],

  featuresSidebar: process.env.DOCS_ENV !== 'production' ? [
    {
      type: 'category',
      label: 'Features',
      collapsible: false,
      items: ['features/avs-for-moto'],
    },
  ] : [],

  referenceSidebar: [
    {
      type: 'category',
      label: 'Reference',
      collapsible: false,
      items: [
        'reference/android-sdk-setup',
        'reference/authentication',
        'reference/development-hardware',
        'reference/manual-injection',
        'reference/pre-authorization-guide',
        'reference/transaction-recovery',
        'reference/terminal-reversals',
        'reference/testing-edge-cases',
        'reference/acquirer-capabilities-matrix',
        'reference/devices',
        'reference/interac-void',
        'reference/transaction-result-object',
        'reference/error-codes',
        'reference/cordova-events',
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
