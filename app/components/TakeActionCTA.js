import Link from 'next/link';

// Global "Take Action" call-to-action band at the bottom of every page. It's also
// the landing content for /take-action (that route renders nothing of its own and
// relies on this band). The newsletter signup form was removed, so the CTA now
// points visitors to the contact page.
export default function TakeActionCTA() {
  return (
    <section className="cta" id="take-action">
      <div className="cta-inner reveal">
        <p className="eyebrow center" style={{ color: 'rgba(255,255,255,.6)' }}>Stay Informed. Stay Involved.</p>
        <h2 className="title light">Be Part of What&apos;s Built Next</h2>
        <p className="prose light center">Texas is growing rapidly, and the decisions made today about infrastructure, housing, transportation, and local resources will shape communities across the state. Reach out with a question, a media inquiry, or to get involved in helping build a sustainable, resilient future for Texas.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
}
