/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  getStartedSidebar: [
    'get-started/index',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/restaurant-guide',
        'guides/practice-management-guide',
        'guides/salons-guide',
        'guides/field-service-guide',
        'guides/events-guide',
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
            { type: 'doc', id: 'acquirers/epi',     label: 'EPI' },
            { type: 'doc', id: 'acquirers/paysafe', label: 'PAYSAFE' },
          ],
        },
        {
          type: 'category',
          label: 'Europe',
          items: [
            { type: 'doc', id: 'acquirers/emerchantpay', label: 'EmerchantPay' },
            { type: 'doc', id: 'acquirers/paystrax',     label: 'Paystrax' },
          ],
        },
        {
          type: 'category',
          label: 'Back Office',
          items: [
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
        'reference/quick-start',
        {
          type: 'category',
          label: 'Setup & Integration',
          items: [
            'reference/authentication',
            {
              type: 'category',
              label: 'Android SDK',
              items: [
                'reference/android-sdk-setup',
                'reference/android-pax-integration-guide',
                'reference/android-integration-walkthrough',
                'reference/android-hilite-integration-guide',
                'reference/android-hilite-integration-walkthrough',
                'reference/android-cloud-api-integration-guide',
                'reference/android-demo-app',
              ],
            },
            {
              type: 'category',
              label: 'iOS SDK',
              items: [
                'reference/ios-hilite-integration-guide',
              ],
            },
            {
              type: 'category',
              label: 'JavaScript SDK',
              items: [
                'reference/javascript-sdk-setup',
                'reference/javascript-sdk-integration-guide',
              ],
            },
            {
              type: 'category',
              label: 'Windows SDK (.NET)',
              items: [
                'reference/windows-sdk-setup',
                'reference/windows-sdk-integration-guide',
              ],
            },
            {
              type: 'category',
              label: 'Cloud API',
              items: [
                'reference/cloud-api-integration-guide',
              ],
            },
            {
              type: 'category',
              label: 'Cordova Plugin',
              items: [
                'reference/cordova-integration-guide',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Hardware & Devices',
          items: [
            'reference/development-hardware',
            'reference/devices',
            'reference/manual-injection',
            'reference/hilite-vs-pax',
          ],
        },
        {
          type: 'category',
          label: 'Payments & Features',
          items: [
            'reference/pre-authorization-guide',
            'reference/partial-approval',
            'reference/moto-guide',
            'reference/avs',
            'reference/multi-mid',
            'reference/fee-mitigation',
            'reference/tipping-guide',
            'reference/callback-url',
            'reference/money-remittance-guide',
            'reference/interac-void',
            'reference/terminal-reversals',
          ],
        },
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
        {
          type: 'category',
          label: 'Testing & Validation',
          items: [
            'reference/validate-integration',
            'reference/validate-integration-android-sdk',
            'reference/testing-edge-cases',
          ],
        },
        {
          type: 'category',
          label: 'Technical Reference',
          items: [
            'reference/transaction-result-object',
            'reference/android-objects-reference',
            'reference/android-events-reference',
            'reference/ios-objects-reference',
            'reference/windows-objects-reference',
            'reference/javascript-objects-reference',
            'reference/cordova-objects-reference',
            'reference/error-codes',
            'reference/error-handling-guide',
            'reference/cloud-api-operations',
            'reference/cordova-events',
            'reference/receipt-compliance',
            'reference/glossary',
            {
              type: 'link',
              label: 'OpenAPI Specification',
              href: 'pathname:///openapi.yaml',
            },
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'reference/known-issues',
          ],
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

  internalSidebar: [
    'reference/full-matrix',
    'reference/acquirer-capabilities-matrix',
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
