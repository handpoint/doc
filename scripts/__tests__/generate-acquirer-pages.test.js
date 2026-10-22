const { isVisible, aggregate, buildFrontmatter, buildSummaryTable } = require('../generate-acquirer-pages');

const FULL_PATHS = {
  'rest-api': 'public',
  'android-pax': 'public',
  'android-hilite': 'public',
  'ios-hilite': 'public',
  'cordova': 'public',
};
const ALL_NOT_SUPPORTED = Object.fromEntries(Object.keys(FULL_PATHS).map(k => [k, 'not-supported']));

describe('isVisible', () => {
  test('true when any path is public', () => {
    expect(isVisible({ 'rest-api': 'public', 'android-pax': 'not-supported' })).toBe(true);
  });
  test('true when any path is coming-soon', () => {
    expect(isVisible({ 'rest-api': 'coming-soon' })).toBe(true);
  });
  test('false when all not-supported', () => {
    expect(isVisible(ALL_NOT_SUPPORTED)).toBe(false);
  });
  test('false for null', () => {
    expect(isVisible(null)).toBe(false);
  });
  test('false for empty object', () => {
    expect(isVisible({})).toBe(false);
  });
});

describe('aggregate', () => {
  test('true when any path is public (even with coming-soon present)', () => {
    expect(aggregate({ 'rest-api': 'public', 'android-pax': 'coming-soon' })).toBe(true);
  });
  test('coming-soon when only coming-soon paths exist', () => {
    expect(aggregate({ 'rest-api': 'coming-soon', 'android-pax': 'not-supported' })).toBe('coming-soon');
  });
  test('false when all not-supported', () => {
    expect(aggregate(ALL_NOT_SUPPORTED)).toBe(false);
  });
});

const mockAcquirer = {
  name: 'TEST ACQUIRER',
  geography: 'US',
  status: 'active',
  'card-brands': ['VISA', 'MC'],
  interac: false,
  capabilities: {
    sale: { ...FULL_PATHS },
    moto: { 'rest-api': 'public', 'android-pax': 'not-supported', 'android-hilite': 'not-supported', 'ios-hilite': 'not-supported', 'cordova': 'not-supported' },
    batching: { ...ALL_NOT_SUPPORTED },
  },
};

describe('buildFrontmatter', () => {
  let fm;
  beforeAll(() => { fm = buildFrontmatter('test-acquirer', mockAcquirer); });

  test('has id slug', () => expect(fm).toContain('id: test-acquirer'));
  test('has title', () => expect(fm).toContain('title: "TEST ACQUIRER"'));
  test('has card-brands', () => expect(fm).toContain('card-brands: [VISA, MC]'));
  test('lists sale as true (any public path)', () => expect(fm).toContain('  sale: true'));
  test('lists moto as true (rest-api is public)', () => expect(fm).toContain('  moto: true'));
  test('omits batching (all paths not-supported)', () => expect(fm).not.toContain('batching'));
  test('includes rest-api in integration-paths', () => expect(fm).toContain('  - rest-api'));
  test('includes android-pax in integration-paths', () => expect(fm).toContain('  - android-pax'));
  test('has last-reviewed date', () => expect(fm).toMatch(/last-reviewed: "\d{4}-\d{2}-\d{2}"/));
});

describe('buildSummaryTable', () => {
  test('renders checkmark for public', () => {
    const table = buildSummaryTable({ sale: FULL_PATHS });
    expect(table).toContain('✅');
  });
  test('renders clock for coming-soon', () => {
    const table = buildSummaryTable({ sale: { 'rest-api': 'coming-soon', 'android-pax': 'not-supported', 'android-hilite': 'not-supported', 'ios-hilite': 'not-supported', 'cordova': 'not-supported' } });
    expect(table).toContain('🔜');
  });
  test('renders x for not-supported', () => {
    const table = buildSummaryTable({ sale: { 'rest-api': 'public', 'android-pax': 'not-supported', 'android-hilite': 'not-supported', 'ios-hilite': 'not-supported', 'cordova': 'not-supported' } });
    expect(table).toContain('❌');
  });
  test('omits rows where capability is entirely invisible', () => {
    const table = buildSummaryTable({ sale: FULL_PATHS, batching: ALL_NOT_SUPPORTED });
    expect(table).toContain('Sale');
    expect(table).not.toContain('Batching');
  });
  test('has correct column headers', () => {
    const table = buildSummaryTable({ sale: FULL_PATHS });
    expect(table).toContain('REST API');
    expect(table).toContain('Android (PAX)');
    expect(table).toContain('iOS (HiLite)');
    expect(table).toContain('Cordova');
  });
});
