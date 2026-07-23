'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// First-visit cookie consent banner. A non-blocking bottom bar (no backdrop, the
// page stays interactive) that records the visitor's choice in localStorage so it
// doesn't reappear once dismissed.
const STORAGE_KEY = 'htib-cookie-consent';

export default function CookieConsent() {
  // Start hidden; reveal only after checking localStorage on the client (avoids a
  // hydration mismatch and a flash for visitors who already chose).
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (e.g. private mode) — skip the banner.
    }
  }, []);

  function choose(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore write failures; the banner still dismisses for this session.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie consent">
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          This site uses cookies and similar technologies to operate the Website, understand how it&rsquo;s used, and improve your experience. See our <Link href="/cookie-policy">Cookie Policy</Link> for details.
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="btn btn--ghost" onClick={() => choose('declined')}>
            Decline
          </button>
          <button type="button" className="btn btn--red" onClick={() => choose('accepted')}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
