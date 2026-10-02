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

  // After layout changes from open/close, nudge Docusaurus's IntersectionObserver so
  // the right TOC item becomes active. Without this, the TOC can show the previous
  // section as active after the FlavorSection collapse shifts page geometry.
  requestAnimationFrame(() => window.dispatchEvent(new Event('scroll')));
}

function scrollToHeading(hash) {
  const id = hash.slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  // Double rAF: wait two frames for layout to settle after details collapse/expand
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });
}

export default function HashNavManager() {
  const location = useLocation();
  const timerRef = useRef(null);

  // SPA navigation (Docusaurus router changes location.hash on page load / route change)
  useEffect(() => {
    clearTimeout(timerRef.current);
    // Delay lets React finish rendering before we touch the DOM
    timerRef.current = setTimeout(() => applyHash(location.hash), 150);
    return () => clearTimeout(timerRef.current);
  }, [location.hash]);

  // Intercept same-page anchor clicks so we collapse/open sections BEFORE the browser
  // scrolls, then manually scroll after the layout settles. Without this, the browser
  // scrolls to the anchor's old position, then our timer collapses sections, shifting
  // the page and stranding the user at the wrong spot.
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (!href.startsWith('#') || href === '#') return;
      // Only intercept links that resolve to an element on this page
      if (!document.getElementById(href.slice(1))) return;

      e.preventDefault();
      // Apply hash (collapse out-of-scope, open single in-scope) before any scroll
      applyHash(href);
      // Update URL without triggering another hashchange
      window.history.pushState(null, '', href);
      // Scroll after layout settles
      scrollToHeading(href);
    }

    // Capture phase so we intercept before Docusaurus's own link handlers
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

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
