'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// Consent-gated analytics. The direct GA4 tag loads ONLY after the visitor accepts
// in the cookie banner. (Google Tag Manager is outside the gate for now — it sits
// in the root layout's <head> and loads on every page.) The component reads the
// stored choice on mount and re-checks whenever CookieConsent dispatches
// 'htib-consent-change', so accepting/declining takes effect without a page
// reload. `next/script` with the default `afterInteractive` strategy is the
// documented approach for analytics.
const STORAGE_KEY = 'htib-cookie-consent';
const GA_ID = 'G-N1N0KCGPXK';

export default function Analytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const sync = () => {
      let choice = null;
      try {
        choice = localStorage.getItem(STORAGE_KEY);
      } catch {
        // localStorage unavailable (private mode) — treat as no consent.
      }
      const ok = choice === 'accepted';
      setAccepted(ok);
      // Google's documented kill-switch: if consent isn't (or is no longer)
      // granted, disable GA even if it already loaded earlier this session.
      window[`ga-disable-${GA_ID}`] = !ok;
    };
    sync();
    window.addEventListener('htib-consent-change', sync);
    return () => window.removeEventListener('htib-consent-change', sync);
  }, []);

  if (!accepted) return null;

  return (
    <>
      {/* Google Analytics 4 (gtag.js) — loaded only after cookie consent */}
      <Script
        id="ga-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
}
