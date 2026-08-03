// RegulationStats — replaces "3-the-big-picture-high-regulation.png" on /responsible
// Crop: 16:9 — facility and monitoring photos read well in landscape. This set has
// two stock photos (7a facility, 7b monitoring), so rather than repeat each photo
// across the grid, the four regulation points are merged into two cards — one per
// photo — grouping the regulation/compliance points with the facility and the
// oversight/environmental points with the monitoring shot. No photo appears twice.

const CARDS = [
  {
    src: '/images/stock/7a.jpg',
    alt: 'A clean, well-maintained Texas aggregate facility',
    points: [
      { title: 'Most Regulated', desc: 'One of the most regulated industries in Texas.' },
      { title: 'Continuous Compliance', desc: 'Ongoing inspections, monitoring, and reporting.' },
    ],
  },
  {
    src: '/images/stock/7b.jpg',
    alt: 'A worker monitoring environmental conditions at an aggregate facility',
    points: [
      { title: '15+ Agencies', desc: 'Local, state, and federal oversight.' },
      { title: 'Full Environmental Coverage', desc: 'Air, water, emissions, and stormwater all regulated.' },
    ],
  },
];

export default function RegulationStats({ accentColor = '#22C55E' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-grid gfx-2x2">
        {CARDS.map((c, i) => (
          <div className="gfx-card" key={i}>
            <div className="gfx-img gfx-16x9">
              <img src={c.src} alt={c.alt} loading="lazy" />
            </div>
            <div className="gfx-card-body">
              {c.points.map((p, j) => (
                <div className="gfx-block" key={j}>
                  <h4 className="gfx-card-title">{p.title}</h4>
                  <p className="gfx-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
