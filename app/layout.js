import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import TakeActionCTA from './components/TakeActionCTA';

export const metadata = {
  title: 'How Texas Is Built',
  description:
    'From Quarry to Community: The Foundation of Your Texas Life. How aggregates and concrete build the roads, homes, schools, hospitals, and infrastructure Texans rely on every day.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <TakeActionCTA />
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
