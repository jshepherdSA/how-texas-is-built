import JotformEmbed from '../components/JotformEmbed';

export const metadata = {
  title: 'Sign Up for Updates',
  description:
    'Sign up for updates on how Texas is built and how you can help support the aggregates and concrete that keep the state growing, affordable, and resilient.',
  alternates: { canonical: '/take-action' },
};

// The Take Action page IS the newsletter signup: it renders only the JotForm
// newsletter form. The global "Be Part of What's Built Next" CTA band is hidden
// on this route (see TakeActionCTA) so the page shows just the form, and the
// footer + that band both link here.
export default function TakeActionPage() {
  return (
    <div>
      <header
        className="page-hero page-hero--compact"
        style={{ '--hero-img': 'url(/images/103257435-skyline-city-austin-texas.jpeg)' }}
      >
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">Newsletter Signup</p>
            <h1 className="page-hero-title">Be Part of What&rsquo;s <span className="red">Built Next</span></h1>
            <p className="page-hero-sub">Sign up for the How Texas Is Built newsletter for updates on how aggregates and concrete keep Texas growing &mdash; and how you can help build a resilient future.</p>
          </div>
        </div>
      </header>

      <section className="newsletter-page">
        <div className="contact-form-wrap">
          <JotformEmbed formId="261943961240054" title="Newsletter signup form" />
        </div>
      </section>
    </div>
  );
}
