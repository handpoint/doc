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
            {
              type: 'category',
              label: 'EPI',
              link: { type: 'doc', id: 'acquirers/epi' },
              collapsed: true,
              items: [
                { type: 'link', label: 'Authentication & Init', href: '/acquirers/epi#auth' },
                { type: 'link', label: 'Sale', href: '/acquirers/epi#sale' },
                { type: 'link', label: 'Refund', href: '/acquirers/epi#refund' },
                { type: 'link', label: 'Reversal', href: '/acquirers/epi#reversal' },
                { type: 'link', label: 'Partial Reversal', href: '/acquirers/epi#partial-reversal' },
                { type: 'link', label: 'Tip Adjustment', href: '/acquirers/epi#tip-adjustment' },
                { type: 'link', label: 'Pre-Authorization', href: '/acquirers/epi#pre-auth' },
                { type: 'link', label: 'MOTO', href: '/acquirers/epi#moto' },
                { type: 'link', label: 'Tokenization', href: '/acquirers/epi#tokenization' },
                { type: 'link', label: 'Batch Operations', href: '/acquirers/epi#batch-operations' },
                { type: 'link', label: 'Transaction Result & Recovery', href: '/acquirers/epi#txn-result' },
                { type: 'link', label: 'Validation', href: '/acquirers/epi#validation' },
              ],
            },
            {
              type: 'category',
              label: 'PAYSAFE',
              link: { type: 'doc', id: 'acquirers/paysafe-tsys' },
              collapsed: true,
              items: [
                { type: 'link', label: 'Authentication & Init', href: '/acquirers/paysafe-tsys#auth' },
                { type: 'link', label: 'Sale', href: '/acquirers/paysafe-tsys#sale' },
                { type: 'link', label: 'Refund', href: '/acquirers/paysafe-tsys#refund' },
                { type: 'link', label: 'Reversal', href: '/acquirers/paysafe-tsys#reversal' },
                { type: 'link', label: 'Paysafe Token', href: '/acquirers/paysafe-tsys#tokenization' },
                { type: 'link', label: 'Transaction Result & Recovery', href: '/acquirers/paysafe-tsys#txn-result' },
                { type: 'link', label: 'Validation', href: '/acquirers/paysafe-tsys#validation' },
              ],
            },
            {
              type: 'category',
              label: 'VANTIV (Worldpay)',
              link: { type: 'doc', id: 'acquirers/vantiv' },
              collapsed: true,
              items: [
                { type: 'link', label: 'Authentication & Init', href: '/acquirers/vantiv#auth' },
                { type: 'link', label: 'Sale', href: '/acquirers/vantiv#sale' },
                { type: 'link', label: 'Refund', href: '/acquirers/vantiv#refund' },
                { type: 'link', label: 'Reversal', href: '/acquirers/vantiv#reversal' },
                { type: 'link', label: 'Tip Adjustment', href: '/acquirers/vantiv#tip-adjustment' },
                { type: 'link', label: 'Pre-Authorization', href: '/acquirers/vantiv#pre-auth' },
                { type: 'link', label: 'Transaction Result & Recovery', href: '/acquirers/vantiv#txn-result' },
                { type: 'link', label: 'Validation', href: '/acquirers/vantiv#validation' },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Canada',
          items: [
            {
              type: 'category',
              label: 'PAYSAFE + Interac',
              link: { type: 'doc', id: 'acquirers/tsys-tns' },
              collapsed: true,
              items: [
                { type: 'link', label: 'Authentication & Init', href: '/acquirers/tsys-tns#auth' },
                { type: 'link', label: 'Sale', href: '/acquirers/tsys-tns#sale' },
                { type: 'link', label: 'Refund', href: '/acquirers/tsys-tns#refund' },
                { type: 'link', label: 'Reversal', href: '/acquirers/tsys-tns#reversal' },
                { type: 'link', label: 'Tip Adjustment', href: '/acquirers/tsys-tns#tip-adjustment' },
                { type: 'link', label: 'Tokenization', href: '/acquirers/tsys-tns#tokenization' },
                { type: 'link', label: 'Void', href: '/acquirers/tsys-tns#void' },
                { type: 'link', label: 'Transaction Result & Recovery', href: '/acquirers/tsys-tns#txn-result' },
                { type: 'link', label: 'Validation', href: '/acquirers/tsys-tns#validation' },
              ],
            },
            {
              type: 'category',
              label: 'TNS (Interac)',
              link: { type: 'doc', id: 'acquirers/tns' },
              collapsed: true,
              items: [
                { type: 'link', label: 'Authentication & Init', href: '/acquirers/tns#auth' },
                { type: 'link', label: 'Sale', href: '/acquirers/tns#sale' },
                { type: 'link', label: 'Void', href: '/acquirers/tns#void' },
                { type: 'link', label: 'Transaction Result & Recovery', href: '/acquirers/tns#txn-result' },
                { type: 'link', label: 'Validation', href: '/acquirers/tns#validation' },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Europe',
          items: [
            {
              type: 'category',
              label: 'EmerchantPay',
              link: { type: 'doc', id: 'acquirers/omnipay-emp' },
              collapsed: true,
              items: [
                { type: 'link', label: 'Authentication & Init', href: '/acquirers/omnipay-emp#auth' },
                { type: 'link', label: 'Sale', href: '/acquirers/omnipay-emp#sale' },
                { type: 'link', label: 'Refund', href: '/acquirers/omnipay-emp#refund' },
                { type: 'link', label: 'Reversal', href: '/acquirers/omnipay-emp#reversal' },
                { type: 'link', label: 'Pre-Authorization', href: '/acquirers/omnipay-emp#pre-auth' },
                { type: 'link', label: 'MOTO', href: '/acquirers/omnipay-emp#moto' },
                { type: 'link', label: 'Tokenization', href: '/acquirers/omnipay-emp#tokenization' },
                { type: 'link', label: 'Money Remittance', href: '/acquirers/omnipay-emp#money-remittance' },
                { type: 'link', label: 'Transaction Result & Recovery', href: '/acquirers/omnipay-emp#txn-result' },
                { type: 'link', label: 'Validation', href: '/acquirers/omnipay-emp#validation' },
              ],
            },
            {
              type: 'category',
              label: 'Lloyds',
              link: { type: 'doc', id: 'acquirers/omnipay-lloyds' },
              collapsed: true,
              items: [
                { type: 'link', label: 'Authentication & Init', href: '/acquirers/omnipay-lloyds#auth' },
                { type: 'link', label: 'Sale', href: '/acquirers/omnipay-lloyds#sale' },
                { type: 'link', label: 'Refund', href: '/acquirers/omnipay-lloyds#refund' },
                { type: 'link', label: 'Reversal', href: '/acquirers/omnipay-lloyds#reversal' },
                { type: 'link', label: 'Pre-Authorization', href: '/acquirers/omnipay-lloyds#pre-auth' },
                { type: 'link', label: 'MOTO', href: '/acquirers/omnipay-lloyds#moto' },
                { type: 'link', label: 'Tokenization', href: '/acquirers/omnipay-lloyds#tokenization' },
                { type: 'link', label: 'Transaction Result & Recovery', href: '/acquirers/omnipay-lloyds#txn-result' },
                { type: 'link', label: 'Validation', href: '/acquirers/omnipay-lloyds#validation' },
              ],
            },
            {
              type: 'category',
              label: 'Paystrax',
              link: { type: 'doc', id: 'acquirers/omnipay-paystrax' },
              collapsed: true,
              items: [
                { type: 'link', label: 'Authentication & Init', href: '/acquirers/omnipay-paystrax#auth' },
                { type: 'link', label: 'Sale', href: '/acquirers/omnipay-paystrax#sale' },
                { type: 'link', label: 'Refund', href: '/acquirers/omnipay-paystrax#refund' },
                { type: 'link', label: 'Reversal', href: '/acquirers/omnipay-paystrax#reversal' },
                { type: 'link', label: 'Pre-Authorization', href: '/acquirers/omnipay-paystrax#pre-auth' },
                { type: 'link', label: 'MOTO', href: '/acquirers/omnipay-paystrax#moto' },
                { type: 'link', label: 'Tokenization', href: '/acquirers/omnipay-paystrax#tokenization' },
                { type: 'link', label: 'Transaction Result & Recovery', href: '/acquirers/omnipay-paystrax#txn-result' },
                { type: 'link', label: 'Validation', href: '/acquirers/omnipay-paystrax#validation' },
              ],
            },
            {
              type: 'category',
              label: 'TEYA (Borgun)',
              link: { type: 'doc', id: 'acquirers/teya' },
              collapsed: true,
              items: [
                { type: 'link', label: 'Authentication & Init', href: '/acquirers/teya#auth' },
                { type: 'link', label: 'Sale', href: '/acquirers/teya#sale' },
                { type: 'link', label: 'Refund', href: '/acquirers/teya#refund' },
                { type: 'link', label: 'Reversal', href: '/acquirers/teya#reversal' },
                { type: 'link', label: 'Tokenization', href: '/acquirers/teya#tokenization' },
                { type: 'link', label: 'Transaction Result & Recovery', href: '/acquirers/teya#txn-result' },
                { type: 'link', label: 'Validation', href: '/acquirers/teya#validation' },
              ],
            },
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
