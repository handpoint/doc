import React, {useState, useMemo} from 'react';

const FILTERS = [
  {key: 'printer',  label: 'Printer'},
  {key: 'wifi24',   label: 'Wi-Fi 2.4G'},
  {key: 'wifi5',    label: 'Wi-Fi 5G'},
  {key: 'cellular4g', label: '4G'},
  {key: 'cellular5g', label: '5G'},
  {key: 'ethernet', label: 'Ethernet'},
];

const MARKET_FILTERS = [
  {key: 'US', label: 'United States'},
  {key: 'EU', label: 'Europe'},
];

// Complete device catalogue with hardware specs and TMS codes
const DEVICES = [
  // HiLite family
  {
    id: 'hilite', name: 'HiLite', family: 'HiLite (DATECS)', tms: 'MPED400',
    img: '/img/devices/HiLite.jpg',
    paths: 'Android (HiLite BT) · iOS (HiLite BT) · Cordova',
    printer: false, wifi24: false, wifi5: false, cellular4g: false, cellular5g: false, ethernet: false,
    markets: ['US', 'EU'], acquirers: ['Paysafe', 'Lloyds'],
  },
  // PAX handheld with printer
  {
    id: 'a920', name: 'PAX A920', family: 'PAX', tms: 'PAXA920',
    img: '/img/devices/PAXA920.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: false, cellular4g: true, cellular5g: false, ethernet: false,
    markets: ['US', 'EU'], acquirers: ['Paysafe', 'EmerchantPay'],
  },
  {
    id: 'a920pro', name: 'PAX A920 Pro', family: 'PAX', tms: 'PAXA920PRO',
    img: '/img/devices/PAXA920PRO.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: true, cellular4g: true, cellular5g: false, ethernet: false,
    markets: ['US', 'EU'], acquirers: ['Paysafe', 'EmerchantPay'],
  },
  {
    id: 'a920max', name: 'PAX A920 MAX', family: 'PAX', tms: 'PAXA920MAX',
    img: '/img/devices/PAXA920MAX.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: true, cellular4g: true, cellular5g: false, ethernet: false,
  },
  {
    id: 'a930', name: 'PAX A930', family: 'PAX', tms: 'PAXA930',
    img: '/img/devices/PAXA930.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: true, cellular4g: true, cellular5g: true, ethernet: false,
  },
  {
    id: 'a910s', name: 'PAX A910 / A910S', family: 'PAX', tms: 'PAXA910 · PAXA910S',
    img: '/img/devices/PAXA910S.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: false, cellular4g: true, cellular5g: false, ethernet: false,
    markets: ['EU'], acquirers: ['EmerchantPay'],
  },
  {
    id: 'a77', name: 'PAX A77', family: 'PAX', tms: 'PAXA77',
    img: '/img/devices/PAXA77.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: false, cellular4g: true, cellular5g: false, ethernet: false,
    markets: ['US'], acquirers: ['Paysafe'],
  },
  {
    id: 'a960', name: 'PAX A960', family: 'PAX', tms: 'PAXA960',
    img: '/img/devices/PAXA960.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: true, cellular4g: true, cellular5g: false, ethernet: false,
  },
  // PAX countertop
  {
    id: 'a80', name: 'PAX A80', family: 'PAX', tms: 'PAXA80',
    img: '/img/devices/PAXA80.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: false, cellular4g: false, cellular5g: false, ethernet: true,
    markets: ['US', 'EU'], acquirers: ['EmerchantPay'],
  },
  {
    id: 'a800', name: 'PAX A800', family: 'PAX', tms: 'PAXA800',
    img: '/img/devices/PAXA800.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: false, cellular4g: false, cellular5g: false, ethernet: true,
  },
  {
    id: 'a8700', name: 'PAX A8700', family: 'PAX', tms: 'PAXA8700',
    img: '/img/devices/PAXA8700.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: true, cellular4g: true, cellular5g: false, ethernet: true,
  },
  {
    id: 'a8900', name: 'PAX A8900', family: 'PAX', tms: 'PAXA8900',
    img: '/img/devices/PAXA8900.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: true, cellular4g: true, cellular5g: false, ethernet: true,
    markets: ['EU'], acquirers: ['EmerchantPay'],
  },
  {
    id: 'a3700', name: 'PAX A3700', family: 'PAX', tms: 'PAXA3700',
    img: '/img/devices/PAXA3700.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: true, cellular4g: true, cellular5g: false, ethernet: true,
    note: 'Elys Workstation (A3700 + L1400 tablet) — recommended E800 replacement',
  },
  // PAX compact (no printer)
  {
    id: 'a6630', name: 'PAX A6630', family: 'PAX', tms: 'PAXA6630',
    img: '/img/devices/PAXA6630.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: true, cellular4g: true, cellular5g: false, ethernet: false,
    sdkMin: 'v7.1011.0+',
  },
  {
    id: 'a6650', name: 'PAX A6650', family: 'PAX', tms: 'PAXA6650',
    img: '/img/devices/PAXA6650.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: true, cellular4g: true, cellular5g: false, ethernet: false,
    markets: ['US'], acquirers: ['Paysafe', 'TSYS'],
  },
  {
    id: 'a60', name: 'PAX A60', family: 'PAX', tms: 'PAXA60',
    img: '/img/devices/PAXA60.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: false, cellular4g: true, cellular5g: false, ethernet: false,
    markets: ['US'], acquirers: ['Paysafe'],
  },
  {
    id: 'a35', name: 'PAX A35', family: 'PAX', tms: 'PAXA35',
    img: '/img/devices/PAXA35.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: false, cellular4g: false, cellular5g: false, ethernet: false,
    markets: ['US', 'EU'], acquirers: ['TSYS', 'EmerchantPay'],
  },
  {
    id: 'a50', name: 'PAX A50 / A50S', family: 'PAX', tms: 'PAXA50 · PAXA50S',
    img: '/img/devices/PAXA50.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: false, cellular4g: true, cellular5g: false, ethernet: false,
    markets: ['EU'], acquirers: ['EmerchantPay'],
  },
  {
    id: 'a30', name: 'PAX A30', family: 'PAX', tms: 'PAXA30',
    img: '/img/devices/PAXA30.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: false, cellular4g: false, cellular5g: false, ethernet: false,
  },
  // PAX biometric / ECR
  {
    id: 'aries', name: 'PAX ARIES6 / ARIES8', family: 'PAX', tms: 'PAXARIES6 · PAXARIES8',
    img: '/img/devices/PAXAR6.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: true, cellular4g: true, cellular5g: false, ethernet: true,
  },
  {
    id: 'e500', name: 'PAX E500', family: 'PAX', tms: 'PAXE500',
    img: '/img/devices/PAXE500.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: false, cellular4g: false, cellular5g: false, ethernet: true,
  },
  {
    id: 'e700', name: 'PAX E700', family: 'PAX', tms: 'PAXE700',
    img: '/img/devices/PAXE700.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: false, cellular4g: false, cellular5g: false, ethernet: true,
  },
  {
    id: 'e800', name: 'PAX E800', family: 'PAX', tms: 'PAXE800',
    img: '/img/devices/PAXE800.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: true, wifi24: true, wifi5: false, cellular4g: false, cellular5g: false, ethernet: true,
    eol: true,
    note: 'EOL — upgrade to PAX A3700 + L1400 (Elys Workstation)',
  },
  // PAX OEM
  {
    id: 'im25', name: 'PAX IM25', family: 'PAX', tms: 'PAXIM25',
    img: '/img/devices/PAXIM25.jpg',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: false, cellular4g: true, cellular5g: false, ethernet: false,
    sdkMin: 'v7.1009.5+',
    markets: ['EU'], acquirers: ['EmerchantPay'],
  },
  {
    id: 'im30', name: 'PAX IM30', family: 'PAX', tms: 'PAXIM30',
    img: '/img/devices/PAXIM30.png',
    paths: 'Android SDK (PAX) · REST API',
    printer: false, wifi24: true, wifi5: false, cellular4g: false, cellular5g: false, ethernet: true,
    markets: ['EU'], acquirers: ['EmerchantPay'],
  },
];

function FeatureBadge({active, label}) {
  if (!active) return null;
  return <span className="device-feature-badge">{label}</span>;
}

const MARKET_COLORS = {US: 'us', EU: 'eu'};
const ACQUIRER_COLORS = {
  'Paysafe': 'paysafe',
  'TSYS': 'tsys',
  'EmerchantPay': 'emp',
  'Lloyds': 'lloyds',
  'Paystrax': 'paystrax',
  'TEYA': 'teya',
  'Vantiv': 'vantiv',
};

export default function DeviceGallery() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [activeMarket, setActiveMarket] = useState('');

  const toggleFilter = (key) => {
    setActiveFilters(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const visible = useMemo(() => {
    return DEVICES.filter(d => {
      if (activeFilters.length > 0 && !activeFilters.every(f => d[f] === true)) return false;
      if (activeMarket && !(d.markets || []).includes(activeMarket)) return false;
      return true;
    });
  }, [activeFilters, activeMarket]);

  const anyFiltersActive = activeFilters.length > 0 || activeMarket !== '';

  return (
    <div className="device-gallery">
      {/* Filter bar */}
      <div className="device-filter-bar">
        <span className="device-filter-label">Market:</span>
        <div className="device-filter-buttons">
          <button
            className={`device-filter-btn${activeMarket === '' ? ' device-filter-btn--active' : ''}`}
            onClick={() => setActiveMarket('')}
          >
            All
          </button>
          {MARKET_FILTERS.map(m => (
            <button
              key={m.key}
              className={`device-filter-btn${activeMarket === m.key ? ' device-filter-btn--active' : ''}`}
              onClick={() => setActiveMarket(activeMarket === m.key ? '' : m.key)}
              aria-pressed={activeMarket === m.key}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="device-filter-bar">
        <span className="device-filter-label">Hardware:</span>
        <div className="device-filter-buttons">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`device-filter-btn${activeFilters.includes(f.key) ? ' device-filter-btn--active' : ''}`}
              onClick={() => toggleFilter(f.key)}
              aria-pressed={activeFilters.includes(f.key)}
            >
              {f.label}
            </button>
          ))}
          {anyFiltersActive && (
            <button
              className="device-filter-clear"
              onClick={() => { setActiveFilters([]); setActiveMarket(''); }}
            >
              Clear
            </button>
          )}
        </div>
        {anyFiltersActive && (
          <span className="device-filter-count">
            {visible.length} of {DEVICES.length} devices
          </span>
        )}
      </div>

      {/* Device grid */}
      <div className="device-grid">
        {visible.map(d => (
          <div key={d.id} className={`device-card${d.eol ? ' device-card--eol' : ''}`}>
            <div className="device-card-img">
              <img src={d.img} alt={d.name} loading="lazy" />
            </div>
            <div className="device-card-body">
              <div className="device-card-name">
                {d.name}
                {d.eol && <span className="device-eol-badge">EOL</span>}
              </div>
              <div className="device-card-tms">{d.tms}</div>
              <div className="device-card-features">
                <FeatureBadge active={d.printer}    label="Printer" />
                <FeatureBadge active={d.wifi24}     label="Wi-Fi 2.4G" />
                <FeatureBadge active={d.wifi5}      label="Wi-Fi 5G" />
                <FeatureBadge active={d.cellular4g} label="4G" />
                <FeatureBadge active={d.cellular5g} label="5G" />
                <FeatureBadge active={d.ethernet}   label="Ethernet" />
              </div>
              {d.markets && d.markets.length > 0 && (
                <div className="device-card-markets">
                  {d.markets.map(m => (
                    <span key={m} className={`device-market-tag device-market-tag--${MARKET_COLORS[m] || 'default'}`}>{m}</span>
                  ))}
                  {(d.acquirers || []).map(a => (
                    <span key={a} className={`device-acquirer-tag device-acquirer-tag--${ACQUIRER_COLORS[a] || 'default'}`}>{a}</span>
                  ))}
                </div>
              )}
              {d.sdkMin && <div className="device-card-sdk">SDK {d.sdkMin}</div>}
              {d.note && <div className="device-card-note">{d.note}</div>}
            </div>
          </div>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="device-gallery-empty">No devices match the selected filters.</p>
      )}
    </div>
  );
}
