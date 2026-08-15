/**
 * Single source of truth for all acquirer capabilities.
 *
 * Edit this file to update capabilities — both the individual acquirer pages
 * and the full-matrix page will reflect the changes automatically.
 *
 * Path values: "public" = supported, "not-supported" = not supported, omit = not applicable.
 */

const P = 'public';
const N = 'not-supported';
const ALL5  = () => ({ 'cloud-api': P, 'android-pax': P, 'android-hilite': P, 'ios-hilite': P, 'cordova': P });
const NONE5 = () => ({ 'cloud-api': N, 'android-pax': N, 'android-hilite': N, 'ios-hilite': N, 'cordova': N });

/** Display order for capability rows in tables. */
export const DISPLAY_ORDER = [
  'sale', 'refund', 'reversal', 'partial-reversal', 'tip-adjustment',
  'pre-auth', 'pre-auth-capture-reversal', 'remote-sale', 'tokenization',
  'batching', 'money-remittance', 'void',
];

/** Human-readable labels for each capability. */
export const CAPABILITY_LABELS = {
  'sale':                      'Sale',
  'refund':                    'Refund',
  'reversal':                  'Reversal',
  'partial-reversal':          'Partial Reversal',
  'tip-adjustment':            'Tip Adjustment',
  'pre-auth':                  'Pre-Authorization',
  'pre-auth-capture-reversal': 'Pre-Auth Capture Reversal',
  'remote-sale':               'Remote Sale',
  'tokenization':              'Tokenization',
  'batching':                  'Batch Operations',
  'money-remittance':          'Money Remittance',
  'void':                      'Void',
};

/** Human-readable labels for each integration path. */
export const PATH_LABELS = {
  'cloud-api':       'Cloud API',
  'android-pax':     'Android (PAX)',
  'android-hilite':  'Android (HiLite)',
  'ios-hilite':      'iOS (HiLite)',
  'cordova':         'Cordova',
  'javascript-sdk':  'JavaScript SDK',
  'windows-sdk':     'Windows SDK',
  'back-office':     'REST API (Back Office)',
  'paysafe-portal':  'Paysafe Portal',
};

export const CARD_PRESENT_PATHS = ['cloud-api', 'android-pax', 'android-hilite', 'ios-hilite', 'cordova', 'javascript-sdk', 'windows-sdk'];
export const BACK_OFFICE_PATHS  = ['back-office'];
export const PORTAL_PATHS       = ['paysafe-portal'];

const PAYSAFE_PORTAL_NOTE =
  'Paysafe Portal refund: Use `eftTransactionID` from `TransactionResult` as Paysafe\'s ' +
  '`MerchantRefNum`. Wait 24h for settlement, retrieve the auth by MerchantRefNum, then submit ' +
  'the refund using Paysafe\'s TXN ID. Processed directly via the Paysafe Cards API — ' +
  'Handpoint has no record of portal-processed transactions.';

/**
 * Full acquirer data.
 * - caps: per-operation, per-path support. Keys that exist in caps render as rows in tables.
 *   Include all-NONE5 entries for operations you want shown as explicitly unsupported.
 * - notes: per-operation note shown in the Notes column of the full-matrix table.
 * - portalNote: shown as a callout below the per-acquirer table when non-null.
 */
export const ACQUIRERS = [
  // ─────────────────────────────────────────────────────────────────────────
  // EPI (formerly TSYS) — US, Canada
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'epi',
    name: 'EPI',
    subtitle: 'US, Canada · VISA MC Discover',
    caps: {
      sale:                        { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
      refund:                      { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
      reversal:                    { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      'partial-reversal':          { 'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N, 'cordova': N, 'javascript-sdk': N, 'windows-sdk': N, 'back-office': P },
      'tip-adjustment':            { 'cloud-api': P, 'android-pax': P, 'android-hilite': P, 'ios-hilite': N, 'cordova': P, 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      'pre-auth':                  { 'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N, 'cordova': P, 'javascript-sdk': P, 'windows-sdk': P },
      'pre-auth-capture-reversal': { 'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N, 'cordova': N, 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      'remote-sale':               { 'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N, 'cordova': N, 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      tokenization:                { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      batching:                    { 'cloud-api': P, 'android-pax': N, 'android-hilite': N, 'ios-hilite': N, 'cordova': N, 'javascript-sdk': N, 'windows-sdk': N, 'back-office': P },
    },
    notes: {
      sale:                        'Card must be read by terminal.',
      refund:                      'Card must be read by terminal.',
      'partial-reversal':          'TSYS US and Canada.',
      'tip-adjustment':            'Does not require a card read — available via Back Office. iOS HiLite: not supported.',
      'pre-auth':                  'Initial pre-auth requires card-present. Includes increase/decrease, capture, void hold.',
      'pre-auth-capture-reversal': 'Increase/decrease and capture available via Back Office. Pre-settlement only. Partial capture reversal supported.',
      'remote-sale':               'Via PAX screen entry (on-terminal) or ProCharge/EPI card token (back-office, no reader). Keeps ISV and merchant out of PCI scope. Must be enabled in Handpoint Portal (TMS).',
      batching:                    'US + Canada. Must be enabled in Handpoint Portal (TMS).',
    },
    portalNote: null,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PAYSAFE + Interac — Canada
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'tsys-tns',
    name: 'PAYSAFE + Interac',
    subtitle: 'Canada · VISA MC Discover Interac',
    caps: {
      sale:               { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
      refund:             { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P, 'paysafe-portal': P },
      reversal:           { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      'partial-reversal': { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      'tip-adjustment':   { 'cloud-api': P, 'android-pax': P, 'android-hilite': P, 'ios-hilite': N, 'cordova': P, 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      'pre-auth':         { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      'remote-sale':      { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      tokenization:       { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
      batching:           { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      void:               { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
    },
    notes: {
      sale:               'Card must be read by terminal.',
      refund:             'Interac cards: not available via Handpoint. Paysafe Portal: CNP refund — see note below.',
      reversal:           'Interac cards: not available.',
      'tip-adjustment':   'TSYS-routed cards only. iOS HiLite: not supported.',
      'pre-auth':         'Not supported — Paysafe restriction.',
      'remote-sale':'Not supported — Paysafe restriction.',
      tokenization:       'TSYS-routed cards only.',
      batching:           'Not supported — Paysafe restriction.',
      void:               'Interac cards only. Card must be present. Show VOID in ISV UI, not Refund.',
    },
    portalNote: PAYSAFE_PORTAL_NOTE,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PAYSAFE — US
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'paysafe-tsys',
    name: 'PAYSAFE',
    subtitle: 'US · VISA MC AMEX Discover',
    caps: {
      sale:               { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
      refund:             { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P, 'paysafe-portal': P },
      reversal:           { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      'partial-reversal': { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      'tip-adjustment':   { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      'pre-auth':         { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      'remote-sale':      { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      tokenization:       { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      batching:           { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
    },
    notes: {
      sale:               'Card must be read by terminal.',
      refund:             'Paysafe Portal: CNP refund — see note below.',
      'tip-adjustment':   'Not supported — Paysafe restriction.',
      'pre-auth':         'Not supported — Paysafe restriction.',
      'remote-sale':'Not supported — Paysafe restriction.',
      tokenization:       'Not supported — Paysafe restriction.',
      batching:           'Not supported — Paysafe restriction.',
    },
    portalNote: PAYSAFE_PORTAL_NOTE,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // EmerchantPay — EU (OMNIPAY)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'omnipay-emp',
    name: 'EmerchantPay',
    subtitle: 'EU · VISA MC AMEX UnionPay',
    caps: {
      sale:                        { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
      refund:                      { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
      reversal:                    { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      'partial-reversal':          { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      'pre-auth':                  { 'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N, 'cordova': P, 'javascript-sdk': P, 'windows-sdk': P },
      'pre-auth-capture-reversal': { 'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N, 'cordova': N, 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      'remote-sale':               { 'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N, 'cordova': N, 'javascript-sdk': P, 'windows-sdk': P },
      tokenization:                { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
      'money-remittance':          { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
    },
    notes: {
      sale:                        'Card must be read by terminal.',
      refund:                      'Card must be read by terminal.',
      'pre-auth':                  'Initial pre-auth requires card-present. Includes increase/decrease, capture, void hold.',
      'pre-auth-capture-reversal': 'Increase/decrease and capture available via Back Office.',
      'remote-sale':               'Via PAX screen entry (on-terminal) or card token (back-office, no reader). Must be enabled by Handpoint.',
      'money-remittance':          'AMEX routing: separate MID required.',
    },
    portalNote: null,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Paystrax — EU (OMNIPAY)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'omnipay-paystrax',
    name: 'Paystrax',
    subtitle: 'EU · VISA MC AMEX UnionPay',
    caps: {
      sale:                        { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
      refund:                      { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
      reversal:                    { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      'partial-reversal':          { ...NONE5(), 'javascript-sdk': N, 'windows-sdk': N },
      'pre-auth':                  { 'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N, 'cordova': P, 'javascript-sdk': P, 'windows-sdk': P },
      'pre-auth-capture-reversal': { 'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N, 'cordova': N, 'javascript-sdk': P, 'windows-sdk': P, 'back-office': P },
      'remote-sale':               { 'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N, 'cordova': N, 'javascript-sdk': P, 'windows-sdk': P },
      tokenization:                { ...ALL5(), 'javascript-sdk': P, 'windows-sdk': P },
    },
    notes: {
      sale:                        'Card must be read by terminal.',
      refund:                      'Card must be read by terminal.',
      'pre-auth':                  'Initial pre-auth requires card-present. Includes increase/decrease, capture, void hold.',
      'pre-auth-capture-reversal': 'Increase/decrease and capture available via Back Office.',
      'remote-sale':               'Via PAX screen entry (on-terminal) or card token (back-office, no reader). Must be enabled by Handpoint.',
    },
    portalNote: null,
  },

];

/** Lookup map by acquirer id — use in MDX pages: `CAPS_BY_ID['epi']` */
export const CAPS_BY_ID = Object.fromEntries(ACQUIRERS.map(a => [a.id, a.caps]));
