import React, { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Per-page filter for acquirer pages and reference pages.
 *
 * mode="acquirer" (default): hides h3 + trailing FlavorSection elements.
 * mode="reference": hides h3 + ALL trailing content until the next heading.
 *
 * In both modes, hides the parent h2 when all its child h3s are filtered out.
 *
 * Usage:
 *   import PageFilter from '@site/src/components/PageFilter';
 *   <PageFilter />                              // acquirer page
 *   <PageFilter mode="reference" placeholder="Filter objects…" />
 */
export default function PageFilter({ placeholder = 'Filter operations…', mode = 'acquirer' }) {
  const [query, setQuery] = useState('');
  const [hiddenCount, setHiddenCount] = useState(0);
  const timerRef = useRef(null);

  const applyFilter = useCallback((raw) => {
    const article = document.querySelector('article');
    if (!article) return;

    const term = raw.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    // ISVs use "void" and "reversal" interchangeably — match both when either is typed
    const SYNONYMS = { void: ['reversal'], reversal: ['void'] };
    const matchTerms = term ? [term, ...(SYNONYMS[term] || [])] : [];
    let hidden = 0;

    // Collect all h3s inside the article content (skip heading inside sidebar/toc)
    const h3s = Array.from(article.querySelectorAll('h3'));

    h3s.forEach((h3) => {
      const h3Text = h3.textContent.toLowerCase().replace(/[^a-z0-9\s]/g, '');
      const matches = !term || matchTerms.some(t => h3Text.includes(t));

      h3.style.display = matches ? '' : 'none';

      // Walk siblings until the next h2 or h3
      let el = h3.nextElementSibling;
      while (el && !['H2', 'H3'].includes(el.tagName)) {
        if (mode === 'reference') {
          // Hide all content blocks between headings
          el.style.display = matches ? '' : 'none';
        } else {
          // Acquirer pages: only hide FlavorSection details elements
          if (el.classList.contains('flavor-section')) {
            el.style.display = matches ? '' : 'none';
          }
        }
        el = el.nextElementSibling;
      }

      if (!matches) hidden++;
    });

    // Hide h2 section headers whose every child h3 is hidden
    const h2s = Array.from(article.querySelectorAll('h2'));
    const allH3s = Array.from(article.querySelectorAll('h3'));
    h2s.forEach((h2, i) => {
      if (!term) { h2.style.display = ''; return; }
      const h2Text = h2.textContent.toLowerCase().replace(/[^a-z0-9\s]/g, '');
      const nextH2 = h2s[i + 1] ?? null;
      // Use document position to find h3s belonging to this h2 section
      // (avoids issues with h3s nested inside FlavorSection containers)
      const ownH3s = allH3s.filter(h3 => {
        const after = !!(h2.compareDocumentPosition(h3) & Node.DOCUMENT_POSITION_FOLLOWING);
        const before = !nextH2 || !!(nextH2.compareDocumentPosition(h3) & Node.DOCUMENT_POSITION_PRECEDING);
        return after && before;
      });
      if (ownH3s.length === 0) {
        // Single-operation section (no H3 sub-ops): match on the H2 text itself
        const h2Matches = matchTerms.some(t => h2Text.includes(t));
        h2.style.display = h2Matches ? '' : 'none';
        // Also hide/show its content
        let sib = h2.nextElementSibling;
        while (sib && sib.tagName !== 'H2') {
          sib.style.display = h2Matches ? '' : 'none';
          sib = sib.nextElementSibling;
        }
        return;
      }
      const allHidden = ownH3s.every((h) => h.style.display === 'none');
      h2.style.display = allHidden ? 'none' : '';
    });

    setHiddenCount(hidden);
  }, []);

  // Clear filter when path changes (integration path toggle resets context)
  useEffect(() => {
    const handler = () => {
      if (query) {
        setQuery('');
        applyFilter('');
      }
    };
    window.addEventListener('handpoint:pathChanged', handler);
    return () => window.removeEventListener('handpoint:pathChanged', handler);
  }, [query, applyFilter]);

  const handleChange = useCallback((e) => {
    const v = e.target.value;
    setQuery(v);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => applyFilter(v), 120);
  }, [applyFilter]);

  const handleClear = useCallback(() => {
    setQuery('');
    applyFilter('');
  }, [applyFilter]);

  const totalH3s = typeof document !== 'undefined'
    ? document.querySelectorAll('article h3').length
    : 0;
  const visibleCount = totalH3s - hiddenCount;

  return (
    <div className="page-filter">
      <span className="page-filter__icon">🔍</span>
      <input
        type="search"
        className="page-filter__input"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        aria-label={placeholder}
      />
      {query && (
        <>
          <span className="page-filter__count">
            {visibleCount} of {totalH3s}
          </span>
          <button
            className="page-filter__clear"
            onClick={handleClear}
            aria-label="Clear filter"
          >
            ✕
          </button>
        </>
      )}
    </div>
  );
}
