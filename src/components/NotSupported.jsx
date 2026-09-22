import React from 'react';
import Admonition from '@theme/Admonition';

/**
 * Shown inside a tab when a function is not available on this integration path.
 * @param {object} props
 * @param {string} props.reason - Why it's not supported
 * @param {string} [props.useInstead] - Which path to use instead
 */
export default function NotSupported({ reason, useInstead }) {
  return (
    <Admonition type="caution" title="Not supported on this path">
      <p>{reason}</p>
      {useInstead && (
        <p>
          <strong>Use instead:</strong> {useInstead}
        </p>
      )}
    </Admonition>
  );
}
