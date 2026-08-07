import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Wraps content that should only appear in staging / development builds.
 *
 * Usage in MDX:
 *   import Internal from '@site/src/components/Internal';
 *   <Internal>This won't appear in production.</Internal>
 *
 * In production (DOCS_ENV=production), the wrapper renders nothing.
 * In staging, it renders children inside a clearly labelled amber box.
 */
export default function Internal({ children }) {
  const { siteConfig } = useDocusaurusContext();
  if (siteConfig.customFields?.docsEnv === 'production') return null;
  return (
    <div className="internal-content">
      <span className="internal-content__badge">🔒 Internal — staging only, not shown in production</span>
      <div className="internal-content__body">{children}</div>
    </div>
  );
}
