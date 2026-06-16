// BuildingBlocksStats — replaces "2-building-blocks-everyday-texas.png" on /fueling-growth
// Crop: 1:1 square across all four — the photos (home, highway, hospital, daily
// life) are subjects that center well in a square, and uniform squares keep the
// 4-up / 2x2 / 1-col responsive grid level. Stock set 5a–5d maps 1:1.

// stat = the large number (size unchanged); unit = the measurement, pulled out
// into a small label so the big figure never wraps onto a second line.
const CARDS = [
  { src: '/images/stock/5a.jpg', alt: 'A new Texas home under construction with concrete and aggregate', stat: '400', unit: 'Tons', label: 'To build the average home' },
  { src: '/images/stock/5b.jpg', alt: 'A six-lane Texas highway with concrete pavement', stat: '15,000', unit: 'Cubic Yards', label: 'Of concrete for one mile of six-lane highway' },
  { src: '/images/stock/5c.jpg', alt: 'A large modern Texas hospital exterior', stat: '30,000', unit: 'Cubic Yards', label: 'Of concrete to build a modern hospital' },
  { src: '/images/stock/5d.jpg', alt: 'Texans using everyday roads and public infrastructure', stat: '50–60', unit: 'lbs/day', label: 'Of aggregates used per American per day' },
];

export default function BuildingBlocksStats({ accentColor = '#F97316' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-grid gfx-quad">
        {CARDS.map((c, i) => (
          <div className="gfx-card" key={i}>
            <div className="gfx-img gfx-1x1">
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
