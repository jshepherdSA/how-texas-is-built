import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import TakeActionCTA from './components/TakeActionCTA';
import CookieConsent from './components/CookieConsent';
import Analytics from './components/Analytics';
import JsonLd from './components/JsonLd';

export const metadata = {
  metadataBase: new URL('https://www.howtexasisbuilt.com'),
  title: {
    default: 'How Texas Is Built: Aggregates & Concrete Build Texas',
    template: '%s — How Texas Is Built',
  },
  description:
    'See how aggregates and concrete build the roads, homes, schools, hospitals, and water systems Texans rely on every day — the foundation of modern Texas life.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'How Texas Is Built',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How Texas Is Built — aggregates and concrete build Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

// Site-wide structured data: the organization behind the campaign and the site
// itself. Per-page Article/Breadcrumb schema is added on the article pages.
const ORG_URL = 'https://www.howtexasisbuilt.com';
const siteJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'How Texas Is Built',
    alternateName: 'HTIB',
    url: ORG_URL,
    logo: `${ORG_URL}/images/htib-logo.png`,
    description:
      'How Texas Is Built is a public education campaign, an advocacy initiative of the Texas Aggregates & Concrete Association (TACA), explaining how aggregates and concrete build the infrastructure Texans rely on.',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61591396037957',
      'https://www.youtube.com/@HowTexasIsBuilt',
      'https://x.com/HowTexasIsBuilt',
      'https://www.linkedin.com/company/how-texas-is-built',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'How Texas Is Built',
    url: ORG_URL,
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager — outside the consent gate for now: loads on every
            page, as high in <head> as possible. (The direct GA4 tag is still
            consent-gated in <Analytics />.) */}
        <script
          id="gtm-init"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NTV7LWZM');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        {/* Google Tag Manager (noscript) — immediately after opening <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NTV7LWZM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <JsonLd data={siteJsonLd} />
        <Nav />
        <main>{children}</main>
        <TakeActionCTA />
        <Footer />
        <Reveal />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
