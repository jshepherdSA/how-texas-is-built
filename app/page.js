import Link from 'next/link';
import StepIndicator from './components/StepIndicator';
import HeroVideo from './components/HeroVideo';

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
    subhead: 'Building the Texas Miracle',
    route: '/fueling-growth',
    icon: '/images/icons/state_red.png',
    img: '/images/home/H-%20texas%20is%20growing.jpg',
    points: [
      { title: 'The Texas Miracle', text: 'Favorable business and tax environment leads to the highest population growth rate in the nation.' },
      // NOTE: the aggregate figure is left blank ("__") in journey-outline.pdf.
      { title: 'What it Takes', text: 'Texas will need to produce __ million lbs of aggregates every year to keep up with growth.' },
      { title: 'Benefitting the Communities', text: 'A strong local supply of materials is essential to keeping Texas affordable. Providing materials close to the areas they serve reduces traffic and keeps the positive economic impact local.' },
    ],
  },
  {
    num: 2,
    name: 'Economic Impact',
    subhead: 'Affordable Materials. Local Jobs. A Stronger Texas.',
    route: '/jobs',
    icon: '/images/icons/penny_red.png',
    img: '/images/home/H-%20economic%20impact.jpg',
    points: [
      { title: 'An Economic Engine', text: 'The Texas aggregates and concretes industry produces $10B+ of Annual Economic Activity.' },
      { title: 'A Pillar of Local Texas Economies', text: 'Each job in the aggregates industry supports 6 jobs in other industries. Each dollar of wages earned in the aggregates industry creates another $4.95 in other industries.' },
      { title: 'Keeping Costs Low', text: 'Transportation is the most important variable in keeping aggregate and concrete costs down for projects, making access to local plants and materials essential to affordability.' },
    ],
  },
  {
    // Journey order places Responsible Operations before Local Sourcing (matching
    // the nav and footer). `num` is each step's stable layout/identity key — it
    // drives the per-step markup branch, `data-step` CSS, and renderStat — NOT the
    // displayed position, which is derived from array order below.
    num: 4,
    name: 'Responsible Operations',
    subhead: 'Protecting Texas Resources While Building Its Future',
    route: '/responsible',
    icon: '/images/icons/bonnet_red.png',
    img: '/images/home/H-%20responsible%20operations.jpg',
    points: [
      { title: 'Strictly Regulated, Monitored, and Accountable', text: 'Aggregates and concrete operations are regulated heavily with strict oversight from multiple agencies at every level of government.' },
      { title: 'Proactive Air Quality Controls at Every Facility', text: 'All facilities are required to control dust and emissions, with emission projections scientifically modeled before any permits are issued.' },
      { title: 'Protecting Texas’ Most Critical Resource: Water', text: 'Water is responsibly managed and frequently recycled on-site, with certain processes—such as aggregates washing—using closed-loop systems that can recycle approximately 92%–98% of water.' },
    ],
  },
  {
    num: 3,
    name: 'Local Sourcing',
    subhead: 'Building Texas Affordably Starts Close to Home',
    route: '/local-sourcing',
    icon: '/images/icons/tire_red.png',
    img: '/images/home/H-%20local%20sourcing.jpg',
    // NOTE: the outline lists only two supporting points for Local Sourcing
    // (no "d."). The first point combines its two sentences (i. + ii.).
    points: [
      { title: 'Why Source from Home?', text: 'Transportation can account for up to 70% of the delivered cost, making local access critical to affordability. Building plants closer to communities allows infrastructure projects that directly help the community to be completed faster, decreasing the cost and inconvenience to Texas taxpayers.' },
      { title: 'How Does It Affect Me?', text: 'The speed and affordability of both infrastructure and real estate projects is critical to the quality of life of Texans into the future.' },
    ],
  },
  {
    num: 5,
    name: 'Quality of Life',
    subhead: 'Supporting Growth Starts with Infrastructure',
    route: '/quality',
    icon: '/images/icons/star_red.png',
    img: '/images/home/H-%20quality%20of%20life.jpg',
    points: [
      { title: 'Making the Texas Miracle Possible', text: 'Businesses often choose locations based on infrastructure quality. Strong infrastructure helps communities compete for investment, which fuels the Texas Miracle.' },
      { title: 'Affordability', text: 'When materials are locally accessible, transportation becomes affordable allowing communities to stretch public dollars further while delivering on infrastructure projects in a timely and efficient manner.' },
      { title: 'It’s As Simple As Your Commute', text: 'Reliable roads, bridges, and transportation infrastructure help reduce congestion, improve traffic flow, and connect Texans to jobs, schools, healthcare, and recreation.' },
    ],
  },
];

// Step identity accent — the brand red across all five steps (the former
// per-step rainbow coding was removed). Colors the step numbers, titles, stats,
// and the left scroll indicator; structural elements (the section top border and
// tiles) keep the brand navy via --step-color.
const STEP_ACCENT = '#BF0A30';

// One stat callout per section. Never boxed; the number sits inline in Bebas Neue
// accent color. Position within each section is handled by where this is slotted
// into the markup below (and CSS order on mobile).
//   · Step 1 — large "400 tons" feature number on its own line above the sentence.
//   · Step 2 — 2×2 grid of figures.
//   · Step 3 — stat removed (transportation footnote deleted per brief).
//   · Step 4 — no stat callout (water-recycled donut removed).
//   · Step 5 — replaced by the full-width yellow fact tile, rendered below the tiles.
function renderStat(num) {
  switch (num) {
    case 1:
      return (
        <p className="step-stat step-stat--feature step-2col-fact">
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
        {/* Hero background video — muted autoplay loop, with a navy fade across each
            loop boundary instead of a hard cut (see HeroVideo). Sits above the
            .hero-bg poster fallback and below the overlay. */}
        <HeroVideo />
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
          {STEPS.map((s) => (
            <Link key={s.num} href={s.route} className="hero-journey-btn">
              <span className="hero-journey-name">{s.name}</span>
            </Link>
          ))}
        </nav>
      </section>

      {/* Intro video — sits between the hero and the first step (Texas Is Growing).
          Two columns: copy + CTA on the left, the click-to-play video on the right.
          preload="metadata" keeps the page light (the 70MB file only downloads when
          a visitor presses play). */}
      <section className="intro-video">
        <div className="intro-video-inner">
          <div className="intro-video-text reveal">
            <h2 className="intro-video-title">Aggregates &amp; Concrete: The Foundation of Texas</h2>
            <p className="intro-video-def-lead">What begins as limestone, sand, and gravel becomes the roads we drive, the schools our children attend, the homes we live in, and the infrastructure that powers Texas. Explore the simple process that transforms natural resources into the building blocks of our communities.</p>
            <Link href="/how-its-made" className="intro-video-btn">Learn how aggregates &amp; concrete are made</Link>
          </div>
          <div className="intro-video-media reveal">
            <video
              className="intro-video-el"
              controls
              playsInline
              preload="metadata"
              poster="/videos/taca-intro-poster.jpg"
            >
              <source src="/videos/taca-intro.mp4" type="video/mp4" />
              Your browser doesn’t support embedded video.
            </video>
          </div>
        </div>
      </section>

      {/* CHANGE 2 — fixed left-side parallax step indicator (desktop only).
          Shows each step's full title, colored with its accent when active. */}
      <StepIndicator steps={STEPS.map((s) => ({ name: s.name, color: STEP_ACCENT }))} />

      {/* Five journey step components — same room, rearranged per section: image
          side, tile orientation, and one stat callout vary by data-step. */}
      {STEPS.map((step, i) => {
        const pos = i + 1; // position in the journey (drives the displayed 01–05)
        const gray = pos % 2 === 0; // alternating bg (both render white today)
        const stepNum = String(pos).padStart(2, '0');
        const stat = renderStat(step.num);
        return (
          <section
            key={step.num}
            data-step={step.num}
            id={`step-${step.num}`}
            className={`step step--light${gray ? ' step--gray' : ''}`}
            style={{ '--step-icon': STEP_ACCENT }}
          >
            <div className="step-inner">
              <div className="step-head-text reveal">
                {step.num === 3 ? (
                  /* Local Sourcing: heading + "How Does It Affect Me?" form a
                     text column beside the image. The aside is pinned to the
                     column's bottom (CSS margin-top:auto) so its bottom edge
                     lines up with the image's bottom edge. */
                  <>
                    <div className="step3-textcol">
                      <img className="step-icon" src={step.icon} alt="" aria-hidden="true" />
                      <span className="step-num">{stepNum}</span>
                      <h2 className="step-name"><Link href={step.route} className="step-name-link">{step.name}</Link></h2>
                      <p className="step-subhead">{step.subhead}</p>
                      <article className="step-tile step-tile--aside reveal">
                        <h3 className="step-tile-title">{step.points[1].title}</h3>
                        <p className="step-tile-text">{step.points[1].text}</p>
                      </article>
                    </div>
                    <div className="step3-imgcol">
                      <img className="step-hero-img" src={step.img} alt={step.name} />
                    </div>
                  </>
                ) : step.num === 4 ? (
                  /* Responsible Operations: heading lines on the left, image on the
                     right — same two-column pattern as steps 1 & 5 (no stat/fact). */
                  <>
                    <div className="step-2col-text">
                      <img className="step-icon" src={step.icon} alt="" aria-hidden="true" />
                      <span className="step-num">{stepNum}</span>
                      <h2 className="step-name"><Link href={step.route} className="step-name-link">{step.name}</Link></h2>
                      <p className="step-subhead">{step.subhead}</p>
                    </div>
                    <div className="step-2col-img">
                      <img className="step-hero-img" src={step.img} alt={step.name} />
                    </div>
                  </>
                ) : step.num === 1 ? (
                  /* Texas is Growing: heading + "400 tons" box form a text column
                     (space-between → box pinned to the bottom) beside the image. */
                  <>
                    <div className="step-2col-text">
                      <img className="step-icon" src={step.icon} alt="" aria-hidden="true" />
                      <span className="step-num">{stepNum}</span>
                      <h2 className="step-name"><Link href={step.route} className="step-name-link">{step.name}</Link></h2>
                      <p className="step-subhead">{step.subhead}</p>
                      {stat /* "400 tons" feature box */}
                    </div>
                    <div className="step-2col-img">
                      <img className="step-hero-img" src={step.img} alt={step.name} />
                    </div>
                  </>
                ) : step.num === 5 ? (
                  /* Quality of Life: heading + editorial $50K–$90K stat form a
                     text column (space-between → stat pinned to the bottom). */
                  <>
                    <div className="step-2col-text">
                      <img className="step-icon" src={step.icon} alt="" aria-hidden="true" />
                      <span className="step-num">{stepNum}</span>
                      <h2 className="step-name"><Link href={step.route} className="step-name-link">{step.name}</Link></h2>
                      <p className="step-subhead">{step.subhead}</p>
                      <p className="step-qol-fact step-2col-fact reveal">
                        <span className="step-qol-num">$50K&ndash;$90K</span>
                        <span className="step-qol-text">Salary range for skilled positions in the aggregates industry &mdash; a career that doesn&rsquo;t require a degree.</span>
                      </p>
                    </div>
                    <div className="step-2col-img">
                      <img className="step-hero-img" src={step.img} alt={step.name} />
                    </div>
                  </>
                ) : step.num === 2 ? (
                  /* Economic Impact: image (left) + text column (right). The text
                     column uses space-between so the subheader centers between the
                     title and the full-width stat row. */
                  <>
                    <div className="step-2col-img">
                      <img className="step-hero-img" src={step.img} alt={step.name} />
                    </div>
                    <div className="step-2col-text">
                      <img className="step-icon" src={step.icon} alt="" aria-hidden="true" />
                      <span className="step-num">{stepNum}</span>
                      <h2 className="step-name"><Link href={step.route} className="step-name-link">{step.name}</Link></h2>
                      <p className="step-subhead">{step.subhead}</p>
                      {stat /* the two full-width stat numbers */}
                    </div>
                  </>
                ) : (
                  <>
                    <img className="step-hero-img" src={step.img} alt={step.name} />
                    <span className="step-num">{stepNum}</span>
                    <h2 className="step-name"><Link href={step.route} className="step-name-link">{step.name}</Link></h2>
                    <p className="step-subhead">{step.subhead}</p>
                  </>
                )}
              </div>

              <div className="step-tiles">
                {(step.num === 3 ? [step.points[0]] : step.points).map((p, i) => (
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
