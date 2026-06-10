import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image src="/images/htib-logo.png" alt="HTIB" width={44} height={44} />
            <span className="footer-logo-text">How <em>Texas</em> Is Built</span>
          </Link>
          <p className="footer-tag">From Quarry to Community: The Foundation of Your Texas Life.</p>
        </div>
        <div className="footer-col">
          <h5>Explore</h5>
          <Link href="/fueling-growth">Fueling Texas&apos; Growth</Link>
          <Link href="/jobs">Jobs &amp; Economic Impact</Link>
          <Link href="/responsible">Responsible Operations</Link>
          <Link href="/local-sourcing">Why Local Sourcing Matters</Link>
        </div>
        <div className="footer-col">
          <h5>More</h5>
          <Link href="/quality">Quality of Life</Link>
          <Link href="/insights">News &amp; Insights</Link>
          <Link href="/take-action">Take Action</Link>
          <Link href="/">Home</Link>
        </div>
      </div>
      <p className="footer-copy">&copy; 2025 How Texas Is Built. All rights reserved. &nbsp;&middot;&nbsp; From Quarry to Community: The Foundation of Your Texas Life.</p>
    </footer>
  );
}
