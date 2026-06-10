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
          <div className="center reveal" style={{ marginBottom: '40px' }}>
            <span className="soon-badge"><span className="pulse"></span>New stories publishing soon</span>
          </div>
          <div className="posts reveal">
            <article className="post">
              <div className="post-img"><Image src="/images/103257435-skyline-city-austin-texas.jpeg" alt="Texas skyline" fill style={{ objectFit: 'cover' }} sizes="(max-width:900px) 45vw, 380px" /><span className="post-cat">Growth</span></div>
              <div className="post-body">
                <div className="post-meta">Coming Soon</div>
                <h3 className="post-title">Fueling the Texas Miracle: Growth by the Numbers</h3>
                <p className="post-excerpt">A closer look at the 1,000–1,500 new Texans arriving every day — and what it will take to build the homes, roads, and schools they&apos;ll need.</p>
                <span className="post-foot">Read the story →</span>
              </div>
            </article>
            <article className="post">
              <div className="post-img"><Image src="/images/081545197-november-evening-pennybacker-b.jpeg" alt="Texas Hill Country river" fill style={{ objectFit: 'cover' }} sizes="(max-width:900px) 45vw, 380px" /><span className="post-cat">Stewardship</span></div>
              <div className="post-body">
                <div className="post-meta">Coming Soon</div>
                <h3 className="post-title">Inside Responsible Operations: How Water Gets Recycled</h3>
                <p className="post-excerpt">Closed-loop systems recycle 92–98% of water on-site. Here&apos;s how modern facilities protect Texas&apos; most valuable natural resource.</p>
                <span className="post-foot">Read the story →</span>
              </div>
            </article>
            <article className="post">
              <div className="post-img"><Image src="/images/113804924-aerial-view-modern-highway-roa.jpeg" alt="Texas highway interchange" fill style={{ objectFit: 'cover' }} sizes="(max-width:900px) 45vw, 380px" /><span className="post-cat">Affordability</span></div>
              <div className="post-body">
                <div className="post-meta">Coming Soon</div>
                <h3 className="post-title">Why a Few Miles Can Make Housing More Affordable</h3>
                <p className="post-excerpt">Transportation can drive up to 70% of material costs. We break down how local sourcing keeps construction — and communities — affordable.</p>
                <span className="post-foot">Read the story →</span>
              </div>
            </article>
          </div>

          <div className="center reveal" style={{ marginTop: '48px' }}>
            <p className="prose center">We&apos;re building out our newsroom. Sign up below and we&apos;ll send new stories, data, and updates straight to your inbox as they publish.</p>
            <div className="btn-row center"><Link href="/take-action" className="btn btn--red">Get Updates</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
