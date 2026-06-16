import Link from 'next/link';
import StepIndicator from './components/StepIndicator';
import WaterRecycledDonut from '@/components/graphics/WaterRecycledDonut';

/* ------------------------------------------------------------------
   Journey content — extracted from journey-outline.pdf.
   Each step: name (outline "1.")  ·  subhead (outline "a.")  ·
   points (outline "b./c./d." with the "i." sentence as body).

   Hero-tile routes map each step to the CURRENT page whose content
   matches the step. (The routes listed in the task brief — /why,
   /community, /operations, /economic — are the old pre-rename paths
   that now 404, and were content-scrambled, so the matching live
   routes are used instead.)
------------------------------------------------------------------- */
const STEPS = [
  {
    num: 1,
    name: 'Texas Is Growing',
    subhead: 'Fueling the Texas Miracle',
    route: '/fueling-growth',
    img: '/images/home/H-%20texas%20is%20growing.jpg',
    points: [
      { title: 'The Texas Miracle', text: 'Favorable business and tax environment leads to the highest population growth rate in the nation.' },
      // NOTE: the aggregate figure is left blank ("__") in journey-outline.pdf.
      { title: 'What it Takes', text: 'Texas will need to produce __ million lbs of aggregates every year to keep up with growth.' },
      { title: 'Benefitting the Communities', text: 'A strong local supply of materials will be essential to keeping Texas affordable.' },
    ],
  },
  {
    num: 2,
    name: 'Economic Impact',
    subhead: 'Affordable Materials. Local Jobs. A Stronger Texas.',
    route: '/jobs',
    img: '/images/home/H-%20economic%20impact.jpg',
    points: [
      { title: 'An Economic Engine', text: 'The Texas aggregates and concretes industry produces $10B+ of Annual Economic Activity.' },
      { title: 'A Pillar of Local Texas Economies', text: 'Each job in the aggregates industry supports 6 jobs in other industries. Each dollar of wages earned in the aggregates industry creates another $4.95 in other industries.' },
      { title: 'Keeping Costs Low', text: 'Transportation is the most important variable in keeping aggregate and concrete costs down for projects, making local plants essential to affordability.' },
    ],
  },
  {
    num: 3,
    name: 'Local Sourcing',
    subhead: 'Building Texas Affordably Starts Close to Home',
    route: '/local-sourcing',
    img: '/images/home/H-%20local%20sourcing.jpg',
    // NOTE: the outline lists only two supporting points for Local Sourcing
    // (no "d."). The first point combines its two sentences (i. + ii.).
    points: [
      { title: 'Why Source from Home?', text: 'Transportation can account for up to 70% of the delivered cost, making local access critical to affordability. Building plants closer to communities allows infrastructure projects that directly help the community to be completed faster, decreasing the cost and inconvenience to Texas taxpayers.' },
      { title: 'How Does It Affect Me?', text: 'The speed and affordability of both infrastructure and real estate projects is critical to the quality of life of Texans into the future.' },
    ],
  },
  {
    num: 4,
    name: 'Responsible Operations',
    subhead: 'Protecting Texas Resources While Building Its Future',
    route: '/responsible',
    img: '/images/home/H-%20responsible%20operations.jpg',
    points: [
      { title: 'Strictly Regulated, Monitored, and Accountable', text: 'Aggregates and concrete operations are regulated heavily with strict oversight from multiple agencies at every level of government.' },
      { title: 'Proactive Air Quality Controls at Every Facility', text: 'All facilities are required to control dust and emissions, with emission projections being modeled before any permits are issued.' },
      { title: 'Protecting Texas’ Most Critical Resource: Water', text: 'Water is responsibly managed and frequently recycled on-site, with certain processes—such as aggregates washing—using closed-loop systems that can recycle approximately 92%–98% of water.' },
    ],
  },
  {
    num: 5,
    name: 'Quality of Life',
    subhead: 'Supporting Growth Starts with Infrastructure',
    route: '/quality',
    img: '/images/home/H-%20quality%20of%20life.jpg',
    points: [
      { title: 'Keeping the Texas Miracle Possible', text: 'Businesses often choose locations based on infrastructure quality. Strong infrastructure helps communities compete for investment which fuels the Texas Miracle.' },
      { title: 'Affordability', text: 'When materials are locally accessible, transportation becomes affordable allowing communities to stretch public dollars further while delivering on infrastructure timely and efficiently.' },
      { title: 'Its As Simple As Your Commute', text: 'Reliable roads, bridges, and transportation infrastructure help reduce congestion, improve traffic flow, and connect Texans to jobs, schools, healthcare, and recreation.' },
    ],
  },
];

// Per-step accent color (left → right). Drives both the hero journey button
// borders and each step component's accents — defined once, referenced throughout.
const STEP_COLORS = ['#F97316', '#3B82F6', '#8B5CF6', '#22C55E', '#EAB308'];

// One stat callout per section. Never boxed; the number sits inline in Bebas Neue
// accent color. Position within each section is handled by where this is slotted
// into the markup below (and CSS order on mobile).
//   · Step 1 — large "400 tons" feature number on its own line above the sentence.
//   · Step 2 — 2×2 grid of figures.
//   · Step 3 — stat removed (transportation footnote deleted per brief).
//   · Step 4 — replaced by the <WaterRecycledDonut/> SVG, rendered below the subhead.
//   · Step 5 — replaced by the full-width yellow fact tile, rendered below the tiles.
function renderStat(num) {
  switch (num) {
    case 1:
      return (
        <p className="step-stat step-stat--feature">
          <span className="step-stat-bignum">400 tons</span>
          <span className="step-stat-caption">of aggregates go into building the average home</span>
        </p>
      );
    case 2:
      return (
        <div className="step-stat step-stat--grid">
          {[
            ['100K+', 'Texans employed'],
            ['$4.95', 'Created per $1 in wages'],
          ].map(([n, l], i) => (
            <div className="step-stat-cell" key={i}>
              <span className="step-stat-num">{n}</span>
              <span className="step-stat-celllabel">{l}</span>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <>
      {/* Hero with journey overlay flush at the bottom */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content reveal">
          <p className="hero-eyebrow">From Quarry to Community</p>
          <h1 className="hero-title">How <span className="tx">Texas</span><br />Is <span className="built">Built</span></h1>
          <p className="hero-sub">Modern Texas is built on the materials that connect communities, support growth, and strengthen our quality of life.</p>
          <div className="hero-actions">
            <Link href="/fueling-growth" className="btn-primary">Learn More</Link>
            <Link href="/take-action" className="btn-outline">Take Action</Link>
          </div>
        </div>

        {/* CHANGE 1 — journey overlay: five equal-height step buttons in a responsive
            grid. Arrows showing the left-to-right flow render in the grid gaps via CSS
            (.hero-journey-btn::after), so every box is the same height regardless of
            how many lines its name wraps to. */}
        <nav className="hero-journey" aria-label="The How Texas Is Built journey">
          {STEPS.map((s, i) => (
            <Link key={s.num} href={s.route} className="hero-journey-btn" style={{ '--bc': STEP_COLORS[i] }}>
              <span className="hero-journey-name">{s.name}</span>
            </Link>
          ))}
        </nav>
      </section>

      {/* CHANGE 2 — fixed left-side parallax step indicator (desktop only).
          Shows each step's full title, colored with its accent when active. */}
      <StepIndicator steps={STEPS.map((s, i) => ({ name: s.name, color: STEP_COLORS[i] }))} />

      {/* Five journey step components — same room, rearranged per section: image
          side, tile orientation, and one stat callout vary by data-step. */}
      {STEPS.map((step) => {
        const dark = step.num % 2 === 0; // alternate navy / off-white
        const stepNum = String(step.num).padStart(2, '0');
        const stat = renderStat(step.num);
        return (
          <section
            key={step.num}
            data-step={step.num}
            id={`step-${step.num}`}
            className={`step ${dark ? 'step--dark' : 'step--light'}`}
            style={{ '--step-color': STEP_COLORS[step.num - 1] }}
          >
            <div className="step-inner">
              <div className="step-head-text reveal">
                <img className="step-hero-img" src={step.img} alt={step.name} />
                <span className="step-num">{stepNum}</span>
                <h2 className="step-name">{step.name}</h2>
                <p className="step-subhead">{step.subhead}</p>
                {(step.num === 1 || step.num === 2) && stat /* below subheader */}
                {step.num === 5 && (
                  /* yellow fact tile — sits beneath the subhead in the text
                     column, beside the floated image (overflow:hidden keeps it
                     from sliding under the image). */
                  <p className="step-fact-tile reveal">
                    Most jobs in this industry are skilled positions offering $50K&ndash;$90K annually &mdash; stable, middle-class careers that don&rsquo;t require a four-year degree.
                  </p>
                )}
              </div>

              {step.num === 4 && <WaterRecycledDonut /> /* below subhead, above tiles */}

              <div className="step-tiles">
                {step.points.map((p, i) => (
                  <article className="step-tile reveal" key={i}>
                    <h3 className="step-tile-title">{p.title}</h3>
                    <p className="step-tile-text">{p.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
