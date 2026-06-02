import React from 'react';
import Admonition from '@theme/Admonition';

/**
 * Shown inside a tab when a function exists in the gateway but is not yet released.
 */
export default function ComingSoon() {
  return (
    <Admonition type="info" title="Coming soon">
      <p>
        This feature is implemented in the gateway but not yet publicly released for this
        integration path. Contact your Handpoint integration engineer for availability.
      </p>
    </Admonition>
  );
}
