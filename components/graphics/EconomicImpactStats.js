// EconomicImpactStats — replaces "1-economic-impact-stats.png" on /jobs
// Crop: 16:9 across all four cells — the photos are wide industry/economy
// scenes that read best in landscape, and a uniform 16:9 keeps the 2x2 grid
// rows perfectly level. Only two stock photos exist for this set (2a, 2b),
// so they alternate across the four stat cells.

const PHOTOS = {
  workers: { src: '/images/stock/2a.jpg', alt: 'Texas aggregates industry workers on site' },
  truck: { src: '/images/stock/2b.jpg', alt: 'A ready-mix concrete mixer truck in Texas' },
};

const CELLS = [
  { photo: PHOTOS.workers, stat: '$10+ Billion', label: 'Annual economic activity' },
  { photo: PHOTOS.truck, stat: '100,000+', label: 'High-earning Texas jobs' },
  { photo: PHOTOS.workers, stat: '300 Million Tons', label: 'Aggregates produced annually' },
  { photo: PHOTOS.truck, stat: '16%+', label: 'Of total U.S. ready-mix concrete supply' },
];

export default function EconomicImpactStats({ accentColor = '#3B82F6' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-grid gfx-2x2">
        {CELLS.map((c, i) => (
          <div className="gfx-card" key={i}>
            <div className="gfx-img gfx-16x9">
              <img src={c.photo.src} alt={c.photo.alt} loading="lazy" />
            </div>
            <div className="gfx-card-body">
              <span className="gfx-stat">{c.stat}</span>
              <span className="gfx-label">{c.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
