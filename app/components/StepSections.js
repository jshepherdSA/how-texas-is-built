/* Five homepage step sections — each a deliberately distinct layout so the page
   gains visual momentum as you scroll. Same content per step (number, title,
   subhead, b/c/d tiles, H- image) rearranged differently, plus a bold stat
   callout. The accent color arrives via the --step-color custom property set on
   the outer <section> (sourced from STEP_COLORS in page.js — never hardcoded
   here). The outer element keeps data-step="n" for the scroll indicator. */

const fmt = (n) => String(n).padStart(2, '0');

// SECTION 1 — full-width cinematic split (dark text column | flush image column)
function SectionGrowing({ step, color }) {
  return (
    <section data-step={step.num} id={`step-${step.num}`} className="hsec hsec1" style={{ '--step-color': color }}>
      <div className="hsec1-grid">
        <div className="hsec1-text reveal">
          <span className="hsec-num">{fmt(step.num)}</span>
          <h2 className="hsec-title">{step.name}</h2>
          <p className="hsec-sub">{step.subhead}</p>
          <div className="hsec1-stat">
            <span className="hsec1-statnum">400 Tons</span>
            <span className="hsec1-stattext">The average home requires 400 tons of aggregates</span>
          </div>
          <ul className="hsec1-tiles">
            {step.points.map((p, i) => (
              <li className="hsec1-tile" key={i}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="hsec1-img">
          <img src={step.img} alt={step.name} />
        </div>
      </div>
    </section>
  );
}

// SECTION 2 — stat-dominant grid (4 stat callouts bridge into a two-column body)
const ECON_STATS = [
  { num: '100K+', label: 'Texans employed' },
  { num: '6×', label: 'Every job supports 6 others' },
  { num: '$10B+', label: 'Annual economic activity' },
  { num: '$4.95', label: 'Created per $1 in wages' },
];
function SectionEconomic({ step, color }) {
  return (
    <section data-step={step.num} id={`step-${step.num}`} className="hsec hsec2" style={{ '--step-color': color }}>
      <div className="hsec2-inner">
        <div className="hsec2-stats reveal">
          {ECON_STATS.map((s, i) => (
            <div className="hsec2-statbox" key={i}>
              <span className="hsec2-statnum">{s.num}</span>
              <span className="hsec2-statlabel">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="hsec2-body">
          <div className="hsec2-left reveal">
            <span className="hsec-num">{fmt(step.num)}</span>
            <h2 className="hsec-title">{step.name}</h2>
            <p className="hsec-sub">{step.subhead}</p>
            <div className="hsec2-tiles">
              {step.points.map((p, i) => (
                <div className="hsec2-tile" key={i}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hsec2-img reveal">
            <img src={step.img} alt={step.name} />
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 3 — oversized watermark stat with content wrapped around a floated image
function SectionLocal({ step, color }) {
  return (
    <section data-step={step.num} id={`step-${step.num}`} className="hsec hsec3" style={{ '--step-color': color }}>
      <span className="hsec3-watermark">70%</span>
      <div className="hsec3-content reveal">
        <span className="hsec-num">{fmt(step.num)}</span>
        <h2 className="hsec-title">{step.name}</h2>
        <p className="hsec-sub">{step.subhead}</p>
        <img className="hsec3-img" src={step.img} alt={step.name} />
        <p className="hsec3-statlabel">of material costs are transportation related</p>
        <div className="hsec3-tiles">
          {step.points.map((p, i) => (
            <div className="hsec3-tile" key={i}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 4 — stacked full-width rows: image banner, centered subhead, stat band, tiles
function SectionResponsible({ step, color }) {
  return (
    <section data-step={step.num} id={`step-${step.num}`} className="hsec hsec4" style={{ '--step-color': color }}>
      <div className="hsec4-banner">
        <img src={step.img} alt={step.name} />
        <div className="hsec4-banner-overlay">
          <span className="hsec-num">{fmt(step.num)}</span>
          <h2 className="hsec-title">{step.name}</h2>
        </div>
      </div>
      <p className="hsec4-sub">{step.subhead}</p>
      <div className="hsec4-statband">
        <span className="hsec4-statnum">80&ndash;90%</span>
        <span className="hsec4-stattext">Modern facilities recycle 80&ndash;90% of their water</span>
      </div>
      <div className="hsec4-tiles">
        {step.points.map((p, i) => (
          <div className="hsec4-tile" key={i}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// SECTION 5 — editorial magazine: big title, pull-quote stat, inline tile list, tall image
function SectionQuality({ step, color }) {
  return (
    <section data-step={step.num} id={`step-${step.num}`} className="hsec hsec5" style={{ '--step-color': color }}>
      <div className="hsec5-grid">
        <div className="hsec5-content reveal">
          <span className="hsec-num">{fmt(step.num)}</span>
          <h2 className="hsec-title">{step.name}</h2>
          <p className="hsec-sub">{step.subhead}</p>
          <blockquote className="hsec5-pullquote">
            Skilled positions offering $50K&ndash;$90K annually &mdash; stable middle-class careers, no four-year degree required
          </blockquote>
          <ul className="hsec5-tiles">
            {step.points.map((p, i) => (
              <li className="hsec5-tile" key={i}>
                <span className="hsec5-dot" aria-hidden="true" />
                <span>
                  <strong>{p.title}</strong> <span className="desc">{p.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hsec5-img">
          <img src={step.img} alt={step.name} />
        </div>
      </div>
    </section>
  );
}

const LAYOUTS = {
  1: SectionGrowing,
  2: SectionEconomic,
  3: SectionLocal,
  4: SectionResponsible,
  5: SectionQuality,
};

export default function StepSection({ step, color }) {
  const Layout = LAYOUTS[step.num] || SectionGrowing;
  return <Layout step={step} color={color} />;
}
