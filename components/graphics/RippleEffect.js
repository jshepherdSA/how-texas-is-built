// RippleEffect — replaces "4-one-job-a-ripple-effect.png" on /jobs
// Two-column layout: the Main Street photo fills the left column at full height,
// and the right column holds two flush stat tiles (65% / 35%) whose combined
// height matches the image. Stacks to a single column on mobile.

export default function RippleEffect({ accentColor = '#3B82F6' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-ripple2">
        <div className="gfx-ripple2-img">
          <img
            src="/images/stock/10z.jpg"
            alt="A thriving Texas main street with local businesses, homes, and restaurants"
            loading="lazy"
          />
        </div>

        <div className="gfx-ripple2-col">
          <div className="gfx-ripple2-tile gfx-ripple2-tile--top">
            <span className="gfx-stat">$4.95</span>
            <p className="gfx-desc">Every $1 in wages earned in the aggregates industry generates $4.95 in other local sectors.</p>
          </div>
          <div className="gfx-ripple2-tile gfx-ripple2-tile--bottom">
            <span className="gfx-stat">6&times;</span>
            <span className="gfx-label">One job supports nearly 6 jobs in the local economy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
