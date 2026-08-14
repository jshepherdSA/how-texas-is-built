import JotformEmbed from '../components/JotformEmbed';
import SocialLinks from '../components/SocialLinks';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with How Texas Is Built, an advocacy initiative of the Texas Aggregates & Concrete Association (TACA) — media, questions, and partnership inquiries.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div>
      <header
        className="page-hero page-hero--compact"
        style={{ '--hero-img': 'url(/images/103257435-skyline-city-austin-texas.jpeg)' }}
      >
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner contact-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">Contact</p>
            <h1 className="page-hero-title">Get in <span className="red">Touch</span></h1>
            <p className="page-hero-sub">Have a question, a media inquiry, or want to get involved in building Texas? Send us a message and we&apos;ll be in touch.</p>
          </div>
          <div className="contact-hero-social reveal">
            <p className="contact-hero-social-label">Follow Us</p>
            <SocialLinks className="social-links--red" />
          </div>
        </div>
      </header>

      <section className="contact-form-section">
        <div className="contact-form-wrap">
          <h2 className="contact-form-title">Media Inquiry</h2>
          <JotformEmbed formId="261873592620058" title="Media inquiry form" />
        </div>
      </section>
    </div>
  );
}
