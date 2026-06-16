// RippleEffect — replaces "4-one-job-a-ripple-effect.png" on /jobs
// Crop: 1:1 square for the single photo. Per the stock guide, graphic 10 is
// "primarily icons/illustrations" with one optional community image (10z), so
// this is a two-column stat layout: the left column carries the lone Main Street
// photo + the 6x multiplier, the right column is stat + pill badges (no second
// photo, so there is no mixed-orientation height mismatch). Stacks on mobile.

const SECTORS = ['Retail & Services', 'Housing', 'Restaurants', 'Education', 'Healthcare', 'And More'];

export default function RippleEffect({ accentColor = '#3B82F6' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-ripple">
        <div className="gfx-ripple-col">
          <div className="gfx-img gfx-1x1">
            <img
              src="/images/stock/10z.jpg"
              alt="A thriving Texas main street with local businesses, homes, and restaurants"
              loading="lazy"
            />
          </div>
          <span className="gfx-huge">6&times;</span>
          <span className="gfx-label">One job supports nearly six jobs in the local economy</span>
        </div>

        <div className="gfx-ripple-col">
          <span className="gfx-stat">$4.95</span>
          <span className="gfx-label">Generated in other sectors for every $1 in aggregates wages</span>
          <h4 className="gfx-card-title" style={{ marginTop: '4px' }}>Supporting What Matters Most</h4>
          <div className="gfx-badges">
            {SECTORS.map((s) => (
              <span className="gfx-badge" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
