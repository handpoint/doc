import React, { useState, useMemo } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { KNOWN_ISSUES, PRODUCTS } from '@site/data/knownIssues';

const SEVERITY_ORDER = { high: 0, medium: 1, low: 2 };
const SEVERITY_LABELS = { high: 'High', medium: 'Medium', low: 'Low' };

function SeverityBadge({ severity }) {
  return <span className={`ki-badge ki-badge--severity ki-badge--${severity}`}>{SEVERITY_LABELS[severity]}</span>;
}

function StatusBadge({ fixed }) {
  return fixed
    ? <span className="ki-badge ki-badge--fixed">Fixed in {fixed}</span>
    : <span className="ki-badge ki-badge--open">Open</span>;
}

function VisibilityBadge() {
  return <span className="ki-badge ki-badge--internal">🔒 Internal</span>;
}

const JIRA_BASE = 'https://handpoint.atlassian.net/browse/';

function normalizeJiraKey(value) {
  if (value.startsWith('http')) {
    const parts = value.split('/');
    return parts[parts.length - 1];
  }
  return value;
}

function JiraKeys({ keys }) {
  if (!keys) return null;
  const list = Array.isArray(keys) ? keys : [keys];
  return (
    <span className="ki-jira-keys">
      {list.map(raw => {
        const key = normalizeJiraKey(raw);
        return (
          <a key={key} className="ki-badge ki-badge--jira" href={JIRA_BASE + key} target="_blank" rel="noopener noreferrer">
            {key}
          </a>
        );
      })}
    </span>
  );
}

function IssueCard({ issue, isProduction }) {
  const [expanded, setExpanded] = useState(false);
  const regressionOf = issue.regression_of
    ? KNOWN_ISSUES.find(i => i.id === issue.regression_of)
    : null;

  return (
    <div className={`ki-card ki-card--${issue.severity}${issue.fixed ? ' ki-card--fixed' : ''}`}>
      <div className="ki-card__header">
        <div className="ki-card__meta">
          <code className="ki-card__id">{issue.id}</code>
          <SeverityBadge severity={issue.severity} />
          <StatusBadge fixed={issue.fixed} />
          {!isProduction && issue.visibility === 'internal' && <VisibilityBadge />}
          {!isProduction && issue.jiraKey && <JiraKeys keys={issue.jiraKey} />}
        </div>
        <div className="ki-card__title">{issue.title}</div>
      </div>

      <div className="ki-card__desc">{issue.description}</div>

      <div className="ki-card__versions">
        {issue.introduced && (
          <span className="ki-version">Introduced: <strong>{issue.introduced}</strong></span>
        )}
        {issue.fixed && (
          <span className="ki-version ki-version--fixed">Fixed: <strong>{issue.fixed}</strong></span>
        )}
        {regressionOf && (
          <span className="ki-version ki-version--regression">
            Regression of <code>{regressionOf.id}</code>: {regressionOf.title}
          </span>
        )}
      </div>

      {issue.workaround && (
        <div className="ki-card__workaround">
          <button
            className="ki-workaround-toggle"
            onClick={() => setExpanded(e => !e)}
            aria-expanded={expanded}
          >
            {expanded ? '▾' : '▸'} Workaround
          </button>
          {expanded && <div className="ki-workaround-body">{issue.workaround}</div>}
        </div>
      )}
    </div>
  );
}

/**
 * Renders the known issues list.
 *
 * Props:
 *   product — optional product key from PRODUCTS (e.g. 'android-sdk'). Omit to show all.
 */
export default function KnownIssues({ product }) {
  const { siteConfig } = useDocusaurusContext();
  const isProduction = siteConfig.customFields?.docsEnv === 'production';

  const [activeProduct, setActiveProduct] = useState(product || 'all');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const issues = useMemo(() => {
    return KNOWN_ISSUES
      .filter(i => isProduction ? i.visibility === 'public' : true)
      .filter(i => activeProduct === 'all' || i.product === activeProduct)
      .filter(i => severityFilter === 'all' || i.severity === severityFilter)
      .filter(i => {
        if (statusFilter === 'all') return true;
        if (statusFilter === 'open') return !i.fixed;
        if (statusFilter === 'fixed') return !!i.fixed;
        return true;
      })
      .sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);
  }, [isProduction, activeProduct, severityFilter, statusFilter]);

  const productCounts = useMemo(() => {
    const visible = KNOWN_ISSUES.filter(i => isProduction ? i.visibility === 'public' : true);
    const counts = { all: visible.length };
    Object.keys(PRODUCTS).forEach(key => {
      counts[key] = visible.filter(i => i.product === key).length;
    });
    return counts;
  }, [isProduction]);

  return (
    <div className="ki-root">
      {/* Product tabs — hide if a specific product was passed as prop */}
      {!product && (
        <div className="ki-product-tabs">
          <button
            className={`ki-tab ${activeProduct === 'all' ? 'ki-tab--active' : ''}`}
            onClick={() => setActiveProduct('all')}
          >
            All <span className="ki-tab__count">{productCounts.all}</span>
          </button>
          {Object.entries(PRODUCTS).filter(([key]) => productCounts[key] > 0).map(([key, label]) => (
            <button
              key={key}
              className={`ki-tab ${activeProduct === key ? 'ki-tab--active' : ''}`}
              onClick={() => setActiveProduct(key)}
            >
              {label} <span className="ki-tab__count">{productCounts[key]}</span>
            </button>
          ))}
        </div>
      )}

      {/* Filters */}
      <div className="ki-filters">
        <div className="ki-filter-group">
          <label className="ki-filter-label">Severity</label>
          {['all', 'high', 'medium', 'low'].map(s => (
            <button
              key={s}
              className={`ki-filter-btn${severityFilter === s ? ' ki-filter-btn--active' : ''}`}
              onClick={() => setSeverityFilter(s)}
            >
              {s === 'all' ? 'All' : SEVERITY_LABELS[s]}
            </button>
          ))}
        </div>
        <div className="ki-filter-group">
          <label className="ki-filter-label">Status</label>
          {['all', 'open', 'fixed'].map(s => (
            <button
              key={s}
              className={`ki-filter-btn${statusFilter === s ? ' ki-filter-btn--active' : ''}`}
              onClick={() => setStatusFilter(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Issue list */}
      {issues.length === 0 ? (
        <div className="ki-empty">No known issues match the current filters.</div>
      ) : (
        <div className="ki-list">
          {issues.map(issue => (
            <IssueCard key={issue.id} issue={issue} isProduction={isProduction} />
          ))}
        </div>
      )}
    </div>
  );
}
