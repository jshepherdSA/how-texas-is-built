import Link from 'next/link';

export const metadata = { title: 'Jobs & Economic Impact — How Texas Is Built' };

// Step 2 accent — Economic Impact
const ACCENT = '#22C55E';

export default function EconomicPage() {
  return (
    <div className="page--accent" style={{ '--accent': ACCENT }}>
      <header className="page-hero" style={{ '--hero-img': 'url(/images/038808855-beautiful-city-buildings-green.jpg)' }}>
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">Jobs &amp; Economic Impact</p>
            <h1 className="page-hero-title">Affordable Materials.<br /><span className="red">Local Jobs.</span> A Stronger Texas.</h1>
            <p className="page-hero-sub">A $10+ billion economic engine supporting more than 100,000 Texas jobs and enabling affordable infrastructure across the state.</p>
          </div>
        </div>
      </header>

      <article className="article article-body reveal">
        <Link href="/" className="article-back">← Back to home</Link>
        <p className="article-kicker">Jobs &amp; Economic Impact</p>
        <p className="article-lead">Aggregates and concrete are more than construction materials. They&apos;re a $10-billion engine running under the Texas economy.</p>

        <img src="/images/jobs-economic-impact/1-economic-impact-stats.png" alt="Economic impact statistics: $10+ billion in annual economic activity, 100,000+ high-earning Texas jobs, 300 million tons of aggregates produced annually, and 16%+ of total U.S. ready-mix concrete supply" style={{ float: 'right', width: '40%', margin: '0 0 16px 24px', borderRadius: '6px' }} />
        <p>The industry supports more than <strong>100,000 Texas jobs</strong> and enables affordable infrastructure across the state. The scale is hard to overstate: more than <strong>$10 billion</strong> in annual economic activity, over <strong>300 million tons</strong> of aggregates produced every year, and more than <strong>16%</strong> of the entire U.S. ready-mix concrete supply. Texas leads the nation.</p>

        <div style={{ clear: 'both' }} />
        <h2>Good jobs, built to last</h2>
        <img src="/images/jobs-economic-impact/2-supporting-quality-jobs-and-careers.png" alt="Supporting quality jobs and careers: pay ranging from $50,000 to $90,000 leading to six-figure earnings, work that is immune to AI disruption, and local jobs that cannot be outsourced because materials are sourced within the region" style={{ float: 'left', width: '40%', margin: '0 24px 16px 0', borderRadius: '6px' }} />
        <p>This is a foundational part of local economies across Texas. It supports good-paying, middle-class jobs, keeps dollars circulating close to home, and strengthens the local tax base. It builds more than infrastructure &mdash; it builds strong futures for Texas families. Many of these careers don&apos;t require a four-year degree, and they sit alongside high-paying, skilled work in engineering, geology, and other STEM fields.</p>
        <p>The pay reflects it. Jobs range from $50,000 to $90,000, with advancement leading to six-figure earnings. The work is hands-on, demands real skill, and makes a real impact &mdash; which is exactly why it&apos;s immune to AI disruption. These are real-world careers that build, maintain, and protect our communities, and they can&apos;t be automated. They can&apos;t be outsourced either: because materials must be sourced within about 50 miles of where they&apos;re used, the jobs stay here. Local materials. Local jobs.</p>

        <div style={{ clear: 'both' }} />
        <h2>A wide array of high-paying careers</h2>
        <img src="/images/jobs-economic-impact/3-wide-array-of-high-paying-careers.png" alt="A wide array of high-paying careers: skilled trades, technical experts, engineers and scientists, operations and management, and support professionals" style={{ float: 'right', width: '40%', margin: '0 0 16px 24px', borderRadius: '6px' }} />
        <p>From the quarry floor to the front office, there&apos;s a place for nearly every background and skill set. Skilled trades fill the equipment operator, maintenance technician, and plant mechanic roles. Technical experts handle lab work, quality control, surveying, and environmental compliance. Engineers and scientists bring in civil engineers, geologists, materials scientists, and researchers. Operations and management run on supervisors, managers, logistics professionals, and plant leaders. And support professionals cover HR, finance, IT, safety, and administration.</p>

        <div style={{ clear: 'both' }} />
        <h2>One job. A ripple across the community.</h2>
        <img src="/images/jobs-economic-impact/4-one-job-a-ripple-effect.png" alt="One job in the aggregates industry supports nearly six jobs in the local economy, and each $1 in wages earned creates another $4.95 of earnings in other sectors such as retail and services, housing, restaurants, education, and healthcare" style={{ float: 'left', width: '40%', margin: '0 24px 16px 0', borderRadius: '6px' }} />
        <p>No job here stands alone. Every single job in the aggregates industry supports nearly six more in the local economy. Every dollar paid in wages creates another $4.95 of earnings in other sectors. That money lands where it matters most &mdash; retail and services, housing, restaurants, education, and healthcare.</p>

        <div style={{ clear: 'both' }} />
        <h2>Affordability starts with local access</h2>
        <p>There&apos;s a reason all of this stays close to home. Transportation can drive up to <strong>70%</strong> of the total cost of materials. Aggregate deposits are limited and fixed in place, so local access is what keeps roads, homes, schools, and hospitals affordable for Texas families and taxpayers. It works like a chain. Affordable, locally sourced materials lower construction costs. Lower costs keep projects on budget and on schedule. That makes homes, schools, roads, and services more affordable for families. And that builds stronger communities &mdash; more investment, more jobs, a higher quality of life. Affordable materials. Affordable communities. That&apos;s how Texas thrives.</p>
      </article>
    </div>
  );
}
