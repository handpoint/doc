import React, {useEffect, useRef} from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const PATHS = [
  {value: 'cloud-api',      label: 'Cloud API'},
  {value: 'android-pax',    label: 'Android (PAX)'},
  {value: 'android-hilite', label: 'Android (HiLite)'},
  {value: 'ios-hilite',     label: 'iOS (HiLite)'},
  {value: 'cordova',        label: 'Cordova'},
];

const PATH_LABEL_MAP = Object.fromEntries(PATHS.map(p => [p.value, p.label]));
const STORAGE_KEY = 'docusaurus.tab.integration-path';

function broadcast(path) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('handpoint:pathChanged', {detail: {path}}));
  }
}

function clickHiddenTab(syncId, path) {
  const syncDiv = document.getElementById(syncId);
  if (!syncDiv) return;
  const label = PATH_LABEL_MAP[path];
  for (const btn of syncDiv.querySelectorAll('[role="tab"]')) {
    if (btn.textContent.trim() === label) { btn.click(); return; }
  }
}

// Invisible sync bridge: propagates the global integration-path selection
// into Docusaurus's groupId tab sync so all code block tabs on the page switch.
export default function AcquirerPageHeader({currentSlug}) {
  const syncId = 'hp-path-sync-' + currentSlug;
  const currentPath = useRef(
    typeof window !== 'undefined' ? (localStorage.getItem(STORAGE_KEY) || 'cloud-api') : 'cloud-api'
  );
  const suppressNext = useRef(false);

  // On mount: click the hidden tab for whatever path is currently selected
  useEffect(() => {
    const t = setTimeout(() => clickHiddenTab(syncId, currentPath.current), 60);
    return () => clearTimeout(t);
  }, [syncId]);

  // Receive path changes from GlobalFilters → click hidden tab → Docusaurus groupId sync fires
  useEffect(() => {
    const handler = (e) => {
      const path = e.detail?.path;
      if (!path || path === currentPath.current) return;
      currentPath.current = path;
      suppressNext.current = true;
      clickHiddenTab(syncId, path);
      setTimeout(() => { suppressNext.current = false; }, 200);
    };
    window.addEventListener('handpoint:pathChanged', handler);
    return () => window.removeEventListener('handpoint:pathChanged', handler);
  }, [syncId]);

  // Watch the hidden Tabs for direct code-block tab clicks → broadcast upward
  useEffect(() => {
    const syncDiv = document.getElementById(syncId);
    if (!syncDiv) return;
    const observer = new MutationObserver(() => {
      if (suppressNext.current) return;
      const active = syncDiv.querySelector('[role="tab"][aria-selected="true"]');
      if (!active) return;
      const entry = PATHS.find(p => p.label === active.textContent.trim());
      if (entry && entry.value !== currentPath.current) {
        currentPath.current = entry.value;
        broadcast(entry.value);
      }
    });
    observer.observe(syncDiv, {subtree: true, attributes: true, attributeFilter: ['aria-selected']});
    return () => observer.disconnect();
  }, [syncId]);

  return (
    <div
      id={syncId}
      style={{position:'absolute',left:'-9999px',top:0,height:'1px',overflow:'hidden',visibility:'hidden'}}
    >
      <Tabs groupId="integration-path">
        {PATHS.map(p => (
          <TabItem key={p.value} value={p.value} label={p.label}><span /></TabItem>
        ))}
      </Tabs>
    </div>
  );
}
