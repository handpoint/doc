import {useEffect, useRef} from 'react';
import {useLocation} from '@docusaurus/router';

// Returns all `details.flavor-section` elements that are siblings of `heading`
// up to (but not including) the next heading of the same or higher level.
function flavorSectionsInScope(heading) {
  if (!heading) return [];
  const level = parseInt(heading.tagName[1], 10);
  const found = [];
  let el = heading.nextElementSibling;
  while (el) {
    const tag = el.tagName;
    if (/^H[1-6]$/.test(tag) && parseInt(tag[1], 10) <= level) break;
    if (el.matches('details.flavor-section')) found.push(el);
    el = el.nextElementSibling;
  }
  return found;
}

function applyHash(hash) {
  if (!hash) return;
  const id = hash.slice(1);
  const heading = document.getElementById(id);
  if (!heading) return;

  const inScope = flavorSectionsInScope(heading);
  const inScopeSet = new Set(inScope);

  // Close every flavor section that isn't in scope for this anchor
  document.querySelectorAll('details.flavor-section').forEach(d => {
    if (!inScopeSet.has(d)) d.open = false;
  });

  // Only one in scope → open it automatically
  if (inScope.length === 1) inScope[0].open = true;
  // More than one → leave closed; the list of closed sections IS the summary
}

export default function HashNavManager() {
  const location = useLocation();
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current);
    // Delay lets React finish rendering before we touch the DOM
    timerRef.current = setTimeout(() => applyHash(location.hash), 150);
    return () => clearTimeout(timerRef.current);
  }, [location.hash]);

  // Fallback: browser back/forward hash navigation not caught by React Router
  useEffect(() => {
    function onHashChange() {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => applyHash(window.location.hash), 150);
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return null;
}
