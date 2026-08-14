'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// First-visit cookie consent banner. A non-blocking bottom bar (no backdrop, the
// page stays interactive) that records the visitor's choice in localStorage so it
// doesn't reappear once dismissed. GA/GTM are gated by <Analytics>, which reacts
// to the 'htib-consent-change' event this dispatches — no tags fire until Accept.
const STORAGE_KEY = 'htib-cookie-consent';

// Best-effort removal of Google Analytics cookies when the visitor declines or
// changes an earlier "accept" — clears anything a prior session may have set.
function clearAnalyticsCookies() {
  try {
    const host = window.location.hostname;
    const parts = host.split('.');
    const domains = ['', host, '.' + host, '.' + parts.slice(-2).join('.')];
    document.cookie.split(';').forEach((entry) => {
      const name = entry.split('=')[0].trim();
      if (/^_ga|^_gid$|^_gat/.test(name)) {
        domains.forEach((d) => {
          document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${d ? '; domain=' + d : ''}`;
        });
      }
    });
  } catch {
    // ignore — cookies inaccessible
  }
}

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
    // Footer "Cookie Settings" reopens the banner so the choice can be changed.
    const open = () => setVisible(true);
    window.addEventListener('htib-open-cookie-settings', open);
    return () => window.removeEventListener('htib-open-cookie-settings', open);
  }, []);

  function choose(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore write failures; the banner still dismisses for this session.
    }
    if (choice === 'declined') clearAnalyticsCookies();
    // Notify <Analytics> to load or tear down GA/GTM to match the new choice.
    try {
      window.dispatchEvent(new Event('htib-consent-change'));
    } catch {
      // no-op
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
