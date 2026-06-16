// LocalSourcingFact — replaces "1-materials-must-be-sourced-nearby.png" on /local-sourcing
// Crop: 16:9 — the single photo is a wide road/haul scene that reads best in
// landscape. Full-width banner: stat text on the left, photo floated right at
// 42% so the supporting sentence wraps around it; clears on mobile to full width.

export default function LocalSourcingFact({ accentColor = '#8B5CF6' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-banner">
        <div className="gfx-fimg">
          <div className="gfx-img gfx-16x9">
            <img
              src="/images/stock/3a.jpg"
              alt="An aggregate dump truck hauling construction materials on a rural Texas road"
              loading="lazy"
            />
          </div>
        </div>
        <div className="gfx-bigstat">70%</div>
        <div className="gfx-label">of material costs are transportation related</div>
        <p className="gfx-banner-desc gfx-desc" style={{ marginTop: '12px' }}>
          Because aggregates and concrete are heavy, low-value materials, every mile
          of hauling adds cost &mdash; so they have to be produced close to where
          they&apos;re used. Local access is what keeps Texas roads, homes, and schools
          affordable to build.
        </p>
        <div className="gfx-clear" />
      </div>
    </div>
  );
}
