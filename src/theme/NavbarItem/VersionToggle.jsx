import React from 'react';

export default function VersionToggle() {
  return (
    <div className="navbar-version-toggle" aria-label="Documentation version">
      {/* Full-page navigation — /legacy/ is a static site, not a React Router route */}
      <a
        href="/legacy/"
        className="navbar-version-toggle__option"
        title="Open legacy developer portal"
      >
        Legacy
      </a>
      <span
        className="navbar-version-toggle__option navbar-version-toggle__option--active"
        title="You are viewing the new developer portal"
      >
        New
      </span>
    </div>
  );
}
