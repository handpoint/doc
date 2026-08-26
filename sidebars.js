/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  getStartedSidebar: [
    'get-started/index',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/restaurant-guide',
        'guides/clinic-guide',
        'guides/field-service-guide',
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
          label: 'North America',
          items: [
            { type: 'doc', id: 'acquirers/epi',          label: 'EPI' },
            { type: 'doc', id: 'acquirers/paysafe-tsys',  label: 'Paysafe' },
            { type: 'doc', id: 'acquirers/tsys-tns',      label: 'Paysafe + Interac' },
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

  referenceSidebar: [
    {
      type: 'category',
      label: 'Reference',
      collapsible: false,
      items: [
        'reference/android-sdk-setup',
        'reference/javascript-sdk-setup',
        'reference/windows-sdk-setup',
        'reference/authentication',
        'reference/development-hardware',
        'reference/manual-injection',
        'reference/pre-authorization-guide',
        'reference/multi-mid',
        'reference/avs-for-moto',
        'reference/partial-approval',
        {
          type: 'category',
          label: 'Transaction Recovery',
          items: [
            'reference/transaction-recovery',
            'reference/transaction-recovery-javascript-sdk',
            'reference/transaction-recovery-cordova-sdk',
            'reference/transaction-recovery-android-sdk',
            'reference/transaction-recovery-cloud-api',
            'reference/transaction-recovery-windows-sdk',
          ],
        },
        'reference/terminal-reversals',
        'reference/testing-edge-cases',
        'reference/devices',
        'reference/acquirer-capabilities-matrix',
        'reference/interac-void',
        'reference/transaction-result-object',
        'reference/error-codes',
        'reference/cordova-events',
        'reference/hilite-vs-pax',
        'reference/moto-guide',
        'reference/receipt-compliance',
        'reference/validate-integration',
        'reference/validate-integration-android-sdk',
        'reference/known-issues',
        {
          type: 'link',
          label: 'OpenAPI Specification',
          href: '/openapi.yaml',
        },
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
