// RegulationStats — replaces "3-the-big-picture-high-regulation.png" on /responsible
// Crop: 1:1 square across all four — facility and monitoring photos sit well in a
// square and keep the 4-up / 2x2 / 1-col grid level. Stock set 7 has two photos
// (7a facility, 7b monitoring), so they alternate across the four regulation points.

const CARDS = [
  { src: '/images/stock/7a.jpg', alt: 'A clean, well-maintained Texas aggregate facility', title: 'Most Regulated', desc: 'One of the most regulated industries in Texas.' },
  { src: '/images/stock/7b.jpg', alt: 'A worker monitoring environmental conditions at an aggregate facility', title: '15+ Agencies', desc: 'Local, state, and federal oversight.' },
  { src: '/images/stock/7a.jpg', alt: 'A responsible, well-kept Texas aggregate operation', title: 'Continuous Compliance', desc: 'Ongoing inspections, monitoring, and reporting.' },
  { src: '/images/stock/7b.jpg', alt: 'Environmental monitoring at a Texas industrial site', title: 'Full Environmental Coverage', desc: 'Air, water, emissions, and stormwater all regulated.' },
];

export default function RegulationStats({ accentColor = '#22C55E' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-grid gfx-quad">
        {CARDS.map((c, i) => (
          <div className="gfx-card" key={i}>
            <div className="gfx-img gfx-1x1">
              <img src={c.src} alt={c.alt} loading="lazy" />
            </div>
            <div className="gfx-card-body">
              <h4 className="gfx-card-title">{c.title}</h4>
              <p className="gfx-desc">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
