import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'News & Insights',
  description:
    "News, data, and perspectives on how Texas is built — and the people, communities, and industry supplying the aggregates and concrete behind the state's growth.",
  alternates: { canonical: '/insights' },
};

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
              <div className="post-img"><Image src="/images/taca-annual-meeting-zach-fuller.jpg" alt="Cybersecurity leader Zach Fuller of Silent Sector speaks at TACA's 72nd Annual Meeting" fill style={{ objectFit: 'cover' }} sizes="(max-width:720px) 100vw, 420px" /><span className="post-cat">Industry News</span></div>
              <div className="post-body">
                <div className="post-meta">June 18, 2026</div>
                <h3 className="post-title">Record Attendance Marks TACA&apos;s 72nd Annual Meeting</h3>
                <p className="post-excerpt">More than 600 industry leaders gathered in San Antonio for TACA&apos;s largest-ever Annual Meeting, themed &ldquo;Building the Community&rdquo; &mdash; with economic forecasts, leadership keynotes, a new chairman, and 2,000 backpacks assembled for students in need.</p>
                <span className="post-foot">Read the story →</span>
              </div>
            </Link>
            <Link href="/insights/cim-gala-workforce-development" className="post post--featured">
              <div className="post-img"><Image src="/images/cim-gala-gov-abbott.jpg" alt="Gov. Greg Abbott with TACA President Andrew Pinkerton and TACA members at the CIM Scholarship Gala" fill style={{ objectFit: 'cover' }} sizes="(max-width:720px) 100vw, 420px" /><span className="post-cat">Industry News</span></div>
              <div className="post-body">
                <div className="post-meta">April 27, 2026</div>
                <h3 className="post-title">Celebrating Workforce Development at the CIM Gala</h3>
                <p className="post-excerpt">Texas leaders &mdash; including Gov. Greg Abbott, Sen. Pete Flores and TACA President Andrew Pinkerton &mdash; gathered at Texas State University&apos;s CIM Scholarship Gala to celebrate a program providing $100,000+ in annual scholarships and 100% job placement for students entering construction materials.</p>
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
