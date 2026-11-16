import React from 'react';

export default function VersionToggle({ mobile = false, sidebar = false }) {
  // Rendered in the Layout swizzle instead — skip the primary menu duplicate
  if (mobile && !sidebar) return null;

  const links = (
    <>
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
    </>
  );

  return (
    <div
      className={sidebar ? 'navbar-version-toggle-mobile' : 'navbar-version-toggle'}
      aria-label="Documentation version"
    >
      {links}
    </div>
  );
}
