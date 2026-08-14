import Link from 'next/link';
import CommunityBenefits from '@/components/graphics/CommunityBenefits';

export const metadata = {
  title: 'Quality of Life',
  description:
    'Shorter commutes, safer roads, affordable homes, and reliable water — see how Texas aggregates and concrete support the everyday quality of life Texans enjoy.',
  alternates: { canonical: '/quality' },
};

// Body + graphics use brand navy; the hero keeps step 5's icon color
// (star gold).
const ACCENT = '#002868';
const HERO_ACCENT = '#BF0A30';

export default function QualityPage() {
  return (
    <div className="page--accent" style={{ '--accent': ACCENT, '--hero-accent': HERO_ACCENT }}>
      <header className="page-hero page-hero--right page-hero--soft-overlay" style={{ '--hero-img': 'url(/images/083961983-capital-building-austin-texas-.jpeg)' }}>
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <span className="page-hero-icon"><img src="/images/icons/star_red.png" alt="" aria-hidden="true" /></span>
            <p className="eyebrow light">Quality of Life</p>
            <h1 className="page-hero-title"><span className="red">Quality of Life</span><br />Starts with Infrastructure</h1>
            <p className="page-hero-sub">Shorter commutes, safer roads, affordable homes, reliable water — the everyday benefits Texans rely on, supported by the materials that make them possible.</p>
          </div>
        </div>
      </header>

      <article className="article article-body reveal">
        <Link href="/" className="article-back">← Back to home</Link>
        <p className="article-kicker">Quality of Life</p>
        <p className="article-lead">Quality of life isn&apos;t an abstraction. It&apos;s the commute home, the hospital across town, the water from the tap. Aggregates and concrete make up all of it.</p>

        <p>From shorter commutes and safer roads to modern hospitals, affordable housing, and clean water, these materials help make everyday life in Texas possible &mdash; keeping communities connected, affordable, and ready for what&apos;s next.</p>

        <div style={{ clear: 'both' }} />
        <h2>The benefits Texans feel every day</h2>
        <CommunityBenefits accentColor={ACCENT} />
        <p>Start with the road in front of your house. Reliable roads, bridges, and transportation infrastructure cut congestion and connect Texans to jobs, schools, healthcare, and recreation &mdash; which means more time with family and less time stuck in traffic. Those same materials make housing more affordable: every new neighborhood needs roads, utilities, drainage, sidewalks, and public infrastructure, and locally sourced materials help build it while keeping costs in check. And when minutes matter, durable infrastructure and strong transportation networks get patients and first responders to modern hospitals, ERs, and clinics fast.</p>
        <p>Clean water depends on it too. Treatment plants, reservoirs, drainage systems, and pipelines deliver safe drinking water and protect communities from flooding, day in and day out. Growing communities need new schools, expanded campuses, and athletic facilities &mdash; modern learning environments that help prepare the next generation for success. And the quality of that infrastructure decides where businesses put down roots: good roads, utilities, and transportation access attract employers, create jobs, and help Texas communities compete for investment.</p>
        <p>It shows up in the places people gather, too &mdash; parks, trails, sidewalks, sports complexes, and public plazas that make communities healthier and more connected, where families can spend time together. And it stretches every public dollar. Local construction materials lower transportation costs and deliver projects more efficiently, freeing up budget for roads, schools, and public safety.</p>

        <div style={{ clear: 'both' }} />
        <h2>It&apos;s not about materials. It&apos;s about people.</h2>
        <p>Here&apos;s the thing. The aggregates and concrete industry doesn&apos;t improve quality of life because it produces materials. It improves quality of life because of what those materials make possible &mdash; more time with family, more affordable housing options, better access to healthcare, safer roads and shorter commutes, reliable water and public services, stronger schools, more jobs and economic opportunity, and better parks and community spaces.</p>
        <p>When infrastructure works, most people never think about it. They simply enjoy the benefits. That&apos;s the point. It&apos;s not really about concrete or aggregates &mdash; it&apos;s about helping Texans live, work, and thrive in stronger communities.</p>
      </article>
    </div>
  );
}
