import Link from 'next/link';
import LocalSourcingFact from '@/components/graphics/LocalSourcingFact';

export const metadata = { title: 'Why Local Sourcing Matters — How Texas Is Built' };

// Step 3 accent — Local Sourcing
const ACCENT = '#3B82F6';

export default function CommunityPage() {
  return (
    <div className="page--accent" style={{ '--accent': ACCENT }}>
      <header className="page-hero" style={{ '--hero-img': 'url(/images/111137539-top-down-shot-highway-passing-.jpeg)' }}>
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">Why Local Sourcing Matters</p>
            <h1 className="page-hero-title">Building Texas Affordably<br /><span className="red">Starts Close to Home</span></h1>
            <p className="page-hero-sub">Transportation can account for up to 70% of the delivered cost — which makes local access critical to affordability.</p>
          </div>
        </div>
      </header>

      <article className="article article-body reveal">
        <Link href="/" className="article-back">← Back to home</Link>
        <p className="article-kicker">Why Local Sourcing Matters</p>
        <p className="article-lead">Aggregates and concrete are among the only building materials that must be sourced close to where they&apos;re used. Distance is the whole story.</p>

        <LocalSourcingFact accentColor={ACCENT} />
        <p>Transportation alone can account for up to <strong>70% of the delivered cost</strong>. That&apos;s what makes local access critical to affordability. When materials are available closer to home, communities build and maintain infrastructure more efficiently &mdash; and for less.</p>

        <div style={{ clear: 'both' }} />
        <h2>The farther it travels, the more it costs</h2>
        <p>Aggregates and concrete are heavy, low-value materials. Every mile adds cost, and that cost gets passed straight to Texas communities. Sourced within 10 miles, the math works in your favor and more of every dollar goes toward actually building. Stretch that to 10 or 30 miles and more of the budget disappears into transportation, leaving less for infrastructure. Past 30 miles, delivered costs climb sharply &mdash; and homeowners, businesses, and taxpayers all feel it.</p>

        <div style={{ clear: 'both' }} />
        <h2>What local access makes possible</h2>
        <p>Keeping materials local pays off in every direction. It makes housing more affordable by controlling construction costs for homebuyers and renters. It lowers the cost of roads, bridges, schools, and public facilities across the state. It speeds up project delivery so communities can keep pace with growth. It cuts the truck traffic and road wear that come with long-distance hauling, easing congestion and emissions. It strengthens local economies through jobs and business that stay in the community. And it stretches taxpayer dollars by trimming transportation off the bill.</p>

        <p>Every mile materials travel adds cost. Every mile saved helps communities invest more in what matters. Local access to aggregates and concrete is what lets Texas put its money where it counts &mdash; safe roads, quality schools, reliable infrastructure, and a higher quality of life for Texas families.</p>
      </article>
    </div>
  );
}
