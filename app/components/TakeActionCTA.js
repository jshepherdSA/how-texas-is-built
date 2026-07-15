'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Global "Take Action" call-to-action band at the bottom of every page. The
// newsletter signup itself lives on the /take-action page (the JotForm form), so
// this band just drives visitors there. It's hidden on /take-action itself so
// that page shows only the form.
export default function TakeActionCTA() {
  const pathname = usePathname();
  if (pathname === '/take-action') return null;

  return (
    <section className="cta" id="take-action">
      <div className="cta-inner reveal">
        <p className="eyebrow center" style={{ color: 'rgba(255,255,255,.6)' }}>Stay Informed. Stay Involved.</p>
        <h2 className="title light">Be Part of What&apos;s Built Next</h2>
        <p className="prose light center">Texas is growing rapidly, and the decisions made today about infrastructure, housing, transportation, and local resources will shape communities across the state. Sign up for updates on how Texas is built &mdash; and how you can help build a sustainable, resilient future.</p>
        <div className="cta-actions">
          <Link href="/take-action" className="btn-primary">Sign Up for Updates</Link>
        </div>
        <p className="cta-alt">Have a media inquiry or want to get involved? <Link href="/contact">Get in touch &rarr;</Link></p>
      </div>
    </section>
  );
}
