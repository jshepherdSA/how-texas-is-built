import JotformEmbed from '../components/JotformEmbed';

export const metadata = { title: 'Sign Up for Updates — How Texas Is Built' };

// The Take Action page IS the newsletter signup: it renders only the JotForm
// newsletter form. The global "Be Part of What's Built Next" CTA band is hidden
// on this route (see TakeActionCTA) so the page shows just the form, and the
// footer + that band both link here.
export default function TakeActionPage() {
  return (
    <section className="newsletter-page">
      <div className="contact-form-wrap">
        <JotformEmbed formId="261943961240054" title="Newsletter signup form" />
      </div>
    </section>
  );
}
