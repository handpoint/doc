import React from 'react';
import {useHistory} from '@docusaurus/router';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {ACQUIRERS} from '@site/src/data/acquirers';

// Short descriptions shown inside the active path tab
const PATH_DESC = {
  'rest-api':       'Cloud API — PAX terminals for card-present; no terminal for MOTO.',
  'android-pax':    'Native on-terminal — code runs directly on the PAX device.',
  'android-hilite': 'Bluetooth — Android app connects to HiLite (DATECS) wirelessly.',
  'ios-hilite':     'Bluetooth — iOS app connects to HiLite (DATECS) wirelessly.',
  'cordova':        'Native wrapper — one JS API for PAX and HiLite.',
};

export default function AcquirerPageHeader({currentSlug}) {
  const history = useHistory();

  return (
    <div className="acquirer-page-header">
      <div className="acquirer-header-top">

        <div className="acquirer-header-group">
          <span className="acquirer-header-label">Acquirer</span>
          <select
            className="acquirer-header-select"
            value={currentSlug}
            onChange={(e) => history.push(`/acquirers/${e.target.value}`)}
            aria-label="Select acquirer"
          >
            {ACQUIRERS.map(a => (
              <option key={a.slug} value={a.slug}>
                {a.name}{a.geography ? ` — ${a.geography}` : ''}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div className="acquirer-header-path-section">
        <span className="acquirer-header-label">Integration path</span>
        {/* Uses same groupId as all code blocks — clicking here syncs the whole page */}
        <Tabs groupId="integration-path" className="acquirer-path-tabs">
          {Object.entries(PATH_DESC).map(([value, desc]) => {
            const labels = {
              'rest-api':       'REST API',
              'android-pax':    'Android (PAX)',
              'android-hilite': 'Android (HiLite)',
              'ios-hilite':     'iOS (HiLite)',
              'cordova':        'Cordova',
            };
            return (
              <TabItem key={value} value={value} label={labels[value]}>
                <p className="acquirer-path-desc">{desc}</p>
              </TabItem>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
