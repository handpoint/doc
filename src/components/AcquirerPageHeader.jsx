import React, {useState, useEffect, useRef, useId} from 'react';
import {useHistory} from '@docusaurus/router';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {ACQUIRERS} from '@site/src/data/acquirers';

const PATHS = [
  {value: 'rest-api',       label: 'REST API'},
  {value: 'android-pax',    label: 'Android (PAX)'},
  {value: 'android-hilite', label: 'Android (HiLite)'},
  {value: 'ios-hilite',     label: 'iOS (HiLite)'},
  {value: 'cordova',        label: 'Cordova'},
];

const PATH_LABEL_MAP = Object.fromEntries(PATHS.map(p => [p.value, p.label]));
const STORAGE_KEY = 'docusaurus.tab.integration-path';

export default function AcquirerPageHeader({currentSlug}) {
  const history = useHistory();
  const syncId = 'hp-path-sync-' + currentSlug;

  const [selectedPath, setSelectedPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || 'rest-api';
    }
    return 'rest-api';
  });

  // Keep select in sync when a code block tab is clicked directly
  useEffect(() => {
    const syncDiv = document.getElementById(syncId);
    if (!syncDiv) return;

    const observer = new MutationObserver(() => {
      const activeTab = syncDiv.querySelector('[role="tab"][aria-selected="true"]');
      if (activeTab) {
        const label = activeTab.textContent.trim();
        const entry = PATHS.find(p => p.label === label);
        if (entry && entry.value !== selectedPath) {
          setSelectedPath(entry.value);
        }
      }
    });

    observer.observe(syncDiv, {
      subtree: true,
      attributes: true,
      attributeFilter: ['aria-selected'],
    });

    return () => observer.disconnect();
  }, [syncId, selectedPath]);

  const handlePathChange = (value) => {
    setSelectedPath(value);
    // Click the matching tab inside the hidden sync Tabs —
    // this triggers Docusaurus's groupId sync, updating all code blocks on the page
    const syncDiv = document.getElementById(syncId);
    if (syncDiv) {
      const targetLabel = PATH_LABEL_MAP[value];
      const tabBtns = syncDiv.querySelectorAll('[role="tab"]');
      for (const btn of tabBtns) {
        if (btn.textContent.trim() === targetLabel) {
          btn.click();
          break;
        }
      }
    }
  };

  return (
    <div className="acquirer-page-header">
      <div className="acquirer-header-row">

        {/* Acquirer dropdown */}
        <div className="acquirer-header-group">
          <label className="acquirer-header-label" htmlFor="hp-acquirer-select">
            Acquirer
          </label>
          <select
            id="hp-acquirer-select"
            className="acquirer-header-select"
            value={currentSlug}
            onChange={(e) => history.push(`/acquirers/${e.target.value}`)}
          >
            {ACQUIRERS.map(a => (
              <option key={a.slug} value={a.slug}>
                {a.name}{a.geography ? ` — ${a.geography}` : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Integration path dropdown */}
        <div className="acquirer-header-group">
          <label className="acquirer-header-label" htmlFor="hp-path-select">
            Integration path
          </label>
          <select
            id="hp-path-select"
            className="acquirer-header-select acquirer-header-select--path"
            value={selectedPath}
            onChange={(e) => handlePathChange(e.target.value)}
          >
            {PATHS.map(p => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Hidden Tabs — acts as the Docusaurus groupId sync bridge.
          Positioned off-screen but fully rendered so React events fire. */}
      <div
        id={syncId}
        style={{position:'absolute',left:'-9999px',top:0,height:'1px',overflow:'hidden',visibility:'hidden'}}
      >
        <Tabs groupId="integration-path">
          {PATHS.map(p => (
            <TabItem key={p.value} value={p.value} label={p.label}>
              <span />
            </TabItem>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
