// EconomicImpactStats — replaces "1-economic-impact-stats.png" on /jobs
// Crop: 16:9 — wide industry/economy scenes read best in landscape. This set has
// two stock photos (2a workers, 2b truck), so rather than repeat each photo
// across the grid, the four stats are merged into two cards — one per photo —
// pairing the output stats with the workers and the jobs/supply stats with the
// ready-mix truck. No photo appears twice.

const CARDS = [
  {
    src: '/images/stock/2a.jpg',
    alt: 'Texas aggregates industry workers on site',
    stats: [
      { stat: '$10+ Billion', label: 'Annual economic activity' },
      { stat: '300 Million Tons', label: 'Aggregates produced annually' },
    ],
  },
  {
    src: '/images/stock/2b.jpg',
    alt: 'A ready-mix concrete mixer truck in Texas',
    stats: [
      { stat: '100,000+', label: 'High-earning Texas jobs' },
      { stat: '16%+', label: 'Of total U.S. ready-mix concrete supply' },
    ],
  },
];

export default function EconomicImpactStats({ accentColor = '#3B82F6' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-grid gfx-2x2">
        {CARDS.map((c, i) => (
          <div className="gfx-card" key={i}>
            <div className="gfx-img gfx-16x9">
              <img src={c.src} alt={c.alt} loading="lazy" />
            </div>
            <div className="gfx-card-body">
              {c.stats.map((s, j) => (
                <div className="gfx-block" key={j}>
                  <span className="gfx-stat">{s.stat}</span>
                  <span className="gfx-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
