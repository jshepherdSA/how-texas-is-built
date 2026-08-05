import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import TakeActionCTA from './components/TakeActionCTA';
import CookieConsent from './components/CookieConsent';

export const metadata = {
  title: 'How Texas Is Built',
  description:
    'From Quarry to Community: The Foundation of Your Texas Life. How aggregates and concrete build the roads, homes, schools, hospitals, and infrastructure Texans rely on every day.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager — placed as high in <head> as possible */}
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
        {/* Google tag (gtag.js) — site-wide via the root layout's shared <head> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N1N0KCGPXK"></script>
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-N1N0KCGPXK');`,
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
        <Nav />
        <main>{children}</main>
        <TakeActionCTA />
        <Footer />
        <Reveal />
        <CookieConsent />
      </body>
    </html>
  );
}
