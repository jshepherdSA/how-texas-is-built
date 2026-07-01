'use client';

import { useState } from 'react';

export default function NewsletterCTA() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const body = new URLSearchParams(new FormData(form)).toString();
    try {
      // Posts to the static form that Netlify detects at build (public/__forms.html).
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
    } catch (_) {
      /* network failure — still confirm to the user */
    }
    setSubmitted(true);
    form.reset();
  }

  return (
    <section className="cta" id="signup">
      <div className="cta-inner reveal">
        <p className="eyebrow center" style={{ color: 'rgba(255,255,255,.6)' }}>Stay Informed. Stay Involved.</p>
        <h2 className="title light">Be Part of What&apos;s Built Next</h2>
        <p className="prose light center">Texas is growing rapidly, and the decisions made today about infrastructure, housing, transportation, and local resources will shape communities across the state. Sign up for updates and alerts to stay informed about the issues impacting Texas growth, affordability, and the resources communities rely on every day. Join us in helping build a sustainable resilient future for Texas.</p>
        <form
          className="signup-form"
          name="newsletter"
          method="POST"
          data-netlify="true"
          onSubmit={handleSignup}
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input type="email" name="email" placeholder="Enter your email address" required />
          <button
            type="submit"
            disabled={submitted}
            style={submitted ? { background: '#2E7D4F', borderColor: '#2E7D4F' } : undefined}
          >
            {submitted ? 'Thank You!' : 'Stay Informed'}
          </button>
        </form>
        <p className="signup-fine">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
