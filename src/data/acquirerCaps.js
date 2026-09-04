/**
 * Single source of truth for all acquirer capabilities.
 *
 * Edit this file to update capabilities — both the individual acquirer pages
 * and the full-matrix page will reflect the changes automatically.
 *
 * Path values: "public" = supported, "not-supported" = not supported, omit = not applicable.
 *
 * Cordova splits into cordova-pax (PAX/Cloud mode) and cordova-hilite (Bluetooth/HiLite mode).
 * Windows SDK splits into windows-sdk-pax (Cloud/PAX) and windows-sdk-bt (Bluetooth/HiLite).
 * Source-verified via Android SDK, iOS SDK, Cordova plugin, and Windows SDK source code.
 */

const P = 'public';
const N = 'not-supported';

// All card-present paths — for operations supported everywhere
const ALL = () => ({
  'cloud-api': P, 'android-pax': P, 'android-hilite': P, 'ios-hilite': P,
  'cordova-pax': P, 'cordova-hilite': P, 'javascript-sdk': P,
  'windows-sdk-pax': P, 'windows-sdk-bt': P,
});

// PAX paths only — for ops that require a PAX terminal (not HiLite)
const PAX_ONLY = () => ({
  'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N,
  'cordova-pax': P, 'cordova-hilite': N, 'javascript-sdk': P,
  'windows-sdk-pax': P, 'windows-sdk-bt': N,
});

// None supported
const NONE = () => ({
  'cloud-api': N, 'android-pax': N, 'android-hilite': N, 'ios-hilite': N,
  'cordova-pax': N, 'cordova-hilite': N, 'javascript-sdk': N,
  'windows-sdk-pax': N, 'windows-sdk-bt': N,
});

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
  'cloud-api':        'Cloud API',
  'android-pax':      'Android (PAX)',
  'android-hilite':   'Android (HiLite)',
  'ios-hilite':       'iOS (HiLite)',
  'cordova-pax':      'Cordova (PAX)',
  'cordova-hilite':   'Cordova (HiLite)',
  'javascript-sdk':   'JavaScript SDK',
  'windows-sdk-pax':  'Windows SDK (PAX)',
  'windows-sdk-bt':   'Windows SDK (HiLite BT)',
  'back-office':      'REST API (Back Office)',
  'paysafe-portal':   'Paysafe Portal',
};

export const CARD_PRESENT_PATHS = [
  'cloud-api', 'android-pax', 'android-hilite', 'ios-hilite',
  'cordova-pax', 'cordova-hilite', 'javascript-sdk',
  'windows-sdk-pax', 'windows-sdk-bt',
];
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
 *   Include all-NONE entries for operations you want shown as explicitly unsupported.
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
      sale:                        { ...ALL(), 'back-office': N },
      refund:                      { ...ALL(), 'back-office': N },
      reversal:                    { ...ALL(), 'back-office': P },
      // Partial reversal: PAX paths only + back-office. Cordova HiLite / Windows BT / Android HiLite / iOS: N
      'partial-reversal':          {
        'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N,
        'cordova-pax': P, 'cordova-hilite': N, 'javascript-sdk': N,
        'windows-sdk-pax': P, 'windows-sdk-bt': N, 'back-office': P,
      },
      // Tip adjustment: remote HTTPS call — works on all except Cordova (dead stub in plugin).
      // Windows BT also works (direct HTTPS bypass, not a device command).
      'tip-adjustment':            {
        'cloud-api': P, 'android-pax': P, 'android-hilite': P, 'ios-hilite': P,
        'cordova-pax': N, 'cordova-hilite': N, 'javascript-sdk': P,
        'windows-sdk-pax': P, 'windows-sdk-bt': P, 'back-office': P,
      },
      // Pre-auth: requires PAX terminal for initial create. Capture/increase via Back Office.
      'pre-auth':                  { ...PAX_ONLY() },
      'pre-auth-capture-reversal': {
        'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N,
        'cordova-pax': N, 'cordova-hilite': N, 'javascript-sdk': P,
        'windows-sdk-pax': P, 'windows-sdk-bt': N, 'back-office': P,
      },
      'remote-sale':               {
        'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N,
        'cordova-pax': P, 'cordova-hilite': N, 'javascript-sdk': P,
        'windows-sdk-pax': P, 'windows-sdk-bt': N, 'back-office': P,
      },
      tokenization:                { ...ALL(), 'back-office': P },
      batching:                    {
        'cloud-api': P, 'android-pax': N, 'android-hilite': N, 'ios-hilite': N,
        'cordova-pax': N, 'cordova-hilite': N, 'javascript-sdk': N,
        'windows-sdk-pax': N, 'windows-sdk-bt': N, 'back-office': P,
      },
    },
    notes: {
      sale:                        'Card must be read by terminal.',
      refund:                      'Card must be read by terminal.',
      'partial-reversal':          'TSYS US and Canada. Not available on HiLite paths. Use POST /reversal (Back Office) from any path.',
      'tip-adjustment':            'Remote HTTPS call — not a device command. Not available in Cordova plugin (unimplemented stub). iOS SDK: uses HapiRemoteService.tipAdjustment() with sharedSecret; or use Back Office REST API with ApiKeyCloud. Windows SDK: direct HTTPS, works on both PAX and HiLite connections.',
      'pre-auth':                  'Initial pre-auth requires card-present terminal (PAX). Capture, increase, decrease, and void available via Back Office (no terminal).',
      'pre-auth-capture-reversal': 'Capture and increase available via Back Office. Pre-settlement only. Partial capture reversal supported.',
      'remote-sale':               'Via PAX screen entry (on-terminal) or ProCharge/EPI card token (Back Office, no reader). Keeps ISV and merchant out of PCI scope. Must be enabled in Handpoint Portal (TMS).',
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
      sale:               { ...ALL(), 'back-office': N },
      refund:             { ...ALL(), 'back-office': N, 'paysafe-portal': P },
      reversal:           { ...ALL(), 'back-office': P },
      'partial-reversal': { ...NONE() },
      'tip-adjustment':   {
        'cloud-api': P, 'android-pax': P, 'android-hilite': P, 'ios-hilite': P,
        'cordova-pax': N, 'cordova-hilite': N, 'javascript-sdk': P,
        'windows-sdk-pax': P, 'windows-sdk-bt': P, 'back-office': P,
      },
      'pre-auth':         { ...NONE() },
      'remote-sale':      { ...NONE() },
      tokenization:       { ...ALL(), 'back-office': N },
      batching:           { ...NONE() },
      void:               { ...ALL(), 'back-office': N },
    },
    notes: {
      sale:               'Card must be read by terminal.',
      refund:             'Interac cards: not available via Handpoint. Paysafe Portal: CNP refund — see note below.',
      reversal:           'Interac cards: not available.',
      'tip-adjustment':   'TSYS-routed cards only (not Interac/TNS). Not available in Cordova plugin (unimplemented stub). iOS SDK: uses HapiRemoteService with sharedSecret, or use Back Office REST API.',
      'pre-auth':         'Not supported — Paysafe restriction.',
      'remote-sale':      'Not supported — Paysafe restriction.',
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
      sale:               { ...ALL(), 'back-office': N },
      refund:             { ...ALL(), 'back-office': N, 'paysafe-portal': P },
      reversal:           { ...ALL(), 'back-office': P },
      'partial-reversal': { ...NONE() },
      'tip-adjustment':   { ...NONE() },
      'pre-auth':         { ...NONE() },
      'remote-sale':      { ...NONE() },
      tokenization:       { ...NONE() },
      batching:           { ...NONE() },
    },
    notes: {
      sale:               'Card must be read by terminal.',
      refund:             'Paysafe Portal: CNP refund — see note below.',
      'tip-adjustment':   'Not supported — Paysafe restriction.',
      'pre-auth':         'Not supported — Paysafe restriction.',
      'remote-sale':      'Not supported — Paysafe restriction.',
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
      sale:                        { ...ALL(), 'back-office': N },
      refund:                      { ...ALL(), 'back-office': N },
      reversal:                    { ...ALL(), 'back-office': P },
      'partial-reversal':          { ...NONE() },
      'pre-auth':                  { ...PAX_ONLY() },
      'pre-auth-capture-reversal': {
        'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N,
        'cordova-pax': N, 'cordova-hilite': N, 'javascript-sdk': P,
        'windows-sdk-pax': P, 'windows-sdk-bt': N, 'back-office': P,
      },
      'remote-sale':               {
        'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N,
        'cordova-pax': P, 'cordova-hilite': N, 'javascript-sdk': P,
        'windows-sdk-pax': P, 'windows-sdk-bt': N, 'back-office': N,
      },
      tokenization:                { ...ALL(), 'back-office': N },
      'money-remittance':          { ...ALL(), 'back-office': N },
    },
    notes: {
      sale:                        'Card must be read by terminal.',
      refund:                      'Card must be read by terminal.',
      'pre-auth':                  'Initial pre-auth requires card-present terminal (PAX). Includes increase/decrease, capture, void hold.',
      'pre-auth-capture-reversal': 'Increase/decrease and capture available via Back Office.',
      'remote-sale':               'Via PAX screen entry (on-terminal) or card token (Back Office, no reader). Must be enabled by Handpoint. Back-office remote card-token sale not available for EmerchantPay.',
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
      sale:                        { ...ALL(), 'back-office': N },
      refund:                      { ...ALL(), 'back-office': N },
      reversal:                    { ...ALL(), 'back-office': P },
      'partial-reversal':          { ...NONE() },
      'pre-auth':                  { ...PAX_ONLY() },
      'pre-auth-capture-reversal': {
        'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N,
        'cordova-pax': N, 'cordova-hilite': N, 'javascript-sdk': P,
        'windows-sdk-pax': P, 'windows-sdk-bt': N, 'back-office': P,
      },
      'remote-sale':               {
        'cloud-api': P, 'android-pax': P, 'android-hilite': N, 'ios-hilite': N,
        'cordova-pax': P, 'cordova-hilite': N, 'javascript-sdk': P,
        'windows-sdk-pax': P, 'windows-sdk-bt': N, 'back-office': N,
      },
      tokenization:                { ...ALL(), 'back-office': N },
    },
    notes: {
      sale:                        'Card must be read by terminal.',
      refund:                      'Card must be read by terminal.',
      'pre-auth':                  'Initial pre-auth requires card-present terminal (PAX). Includes increase/decrease, capture, void hold.',
      'pre-auth-capture-reversal': 'Increase/decrease and capture available via Back Office.',
      'remote-sale':               'On-terminal keyed entry (PAX screen) only — remote card-token sale not supported for Paystrax. Back-office linked MOTO refund and reversal (via POST /reversal) are supported; use POST /reversal rather than moto/reversal endpoint. Must be enabled by Handpoint.',
    },
    portalNote: null,
  },

];

/** Lookup map by acquirer id — use in MDX pages: `CAPS_BY_ID['epi']` */
export const CAPS_BY_ID = Object.fromEntries(ACQUIRERS.map(a => [a.id, a.caps]));
