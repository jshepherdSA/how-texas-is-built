'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// Consent-gated analytics. GA4 + GTM load ONLY after the visitor accepts in the
// cookie banner — they are not placed unconditionally in the root layout. The
// component reads the stored choice on mount and re-checks whenever CookieConsent
// dispatches 'htib-consent-change', so accepting/declining takes effect without a
// page reload. `next/script` with the default `afterInteractive` strategy is the
// documented approach for tag managers and analytics.
const STORAGE_KEY = 'htib-cookie-consent';
const GTM_ID = 'GTM-NTV7LWZM';
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
      {/* Google Tag Manager — loaded only after cookie consent */}
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
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
