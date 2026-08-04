// FutureDemand — replaces "3-what-it-takes-to-build-tomorrow.png" on /fueling-growth
// Crop: 16:9 across all three — the photos (quarry, concrete-truck fleet, cement
// plant) are wide industrial scenes that read best in landscape, and a shared
// ratio keeps the 3-up row level. Stock set 8a–8c maps 1:1 to the three materials.

// stat = the large number (size unchanged); unit pulled out into a small label
// so the big figure stays on one line.
const CARDS = [
  { src: '/images/stock/8a.jpg', alt: 'A close-up of gray crushed stone aggregates', stat: '15–50M', unit: 'Tons', label: 'Additional aggregates needed over the next decade' },
  { src: '/images/stock/8b.jpg', alt: 'A fleet of ready-mix concrete trucks at a Texas facility', stat: '3–10M', unit: 'Cubic Yards', label: 'Additional ready-mix concrete needed' },
  { src: '/images/stock/8c.jpg', alt: 'A Texas cement plant with large silos', stat: '1–3M', unit: 'Tons', label: 'Additional cement needed' },
];

export default function FutureDemand({ accentColor = '#F97316' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-grid gfx-trio">
        {CARDS.map((c, i) => (
          <div className="gfx-card" key={i}>
            <div className="gfx-img gfx-16x9">
              <img src={c.src} alt={c.alt} loading="lazy" />
            </div>
            <div className="gfx-card-body">
              <span className="gfx-stat">{c.stat}</span>
              <span className="gfx-unit">{c.unit}</span>
              <span className="gfx-label">{c.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
