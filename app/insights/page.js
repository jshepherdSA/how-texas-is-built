import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'News & Insights — How Texas Is Built' };

export default function InsightsPage() {
  return (
    <>
      <header className="page-hero" style={{ '--hero-img': 'url(/images/103257435-skyline-city-austin-texas.jpeg)' }}>
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">News &amp; Insights</p>
            <h1 className="page-hero-title">Stories from the<br /><span className="red">Ground Up</span></h1>
            <p className="page-hero-sub">Perspectives, data, and updates on how Texas is built — and the people and communities building it.</p>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="posts posts--single reveal">
            <Link href="/insights/taca-72nd-annual-meeting" className="post post--featured">
              <div className="post-img"><Image src="/images/taca-72nd-annual-meeting-gov-abbott.jpg" alt="Gov. Greg Abbott with TACA President Andrew Pinkerton and TACA members at the CIM Scholarship Gala" fill style={{ objectFit: 'cover' }} sizes="(max-width:720px) 100vw, 420px" /><span className="post-cat">Industry News</span></div>
              <div className="post-body">
                <div className="post-meta">June 18, 2026</div>
                <h3 className="post-title">Record Attendance Marks TACA&apos;s 72nd Annual Meeting</h3>
                <p className="post-excerpt">More than 600 industry leaders gathered in San Antonio for TACA&apos;s largest-ever Annual Meeting, themed &ldquo;Building the Community&rdquo; &mdash; with economic forecasts, leadership keynotes, a new chairman, and 2,000 backpacks assembled for students in need.</p>
                <span className="post-foot">Read the story →</span>
              </div>
            </Link>
          </div>

          <div className="center reveal" style={{ marginTop: '48px' }}>
            <p className="prose center">More stories are on the way. Follow How Texas Is Built for new perspectives, data, and updates on the people and communities building Texas.</p>
            <div className="btn-row center"><Link href="/take-action" className="btn btn--red">Get Updates</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
