// CommunityBenefits — replaces "1-the-benefits-texans-feel-every-day.png" on /quality
// Crop: 16:9 across all eight cards — the benefit photos are environmental/scene
// shots (homes, parks, classrooms) that suit landscape, and one shared ratio keeps
// the two-column grid even. Photos map 1:1 to the eight benefits (stock set 4a–4h).

const CARDS = [
  { src: '/images/stock/4a.jpg', alt: 'A Texas family spending time together at home', title: 'Shorter Commutes, More Time at Home', desc: 'Reliable roads and reduced congestion connect Texans to jobs and schools.' },
  { src: '/images/stock/4b.jpg', alt: 'A newly constructed Texas housing development', title: 'More Affordable Housing', desc: 'Locally sourced materials help accommodate growth while controlling costs.' },
  { src: '/images/stock/4c.jpg', alt: 'A modern Texas hospital with an ambulance at the entrance', title: 'Faster Access to Healthcare', desc: 'Durable roads help patients and first responders reach care when every minute matters.' },
  { src: '/images/stock/4d.jpg', alt: 'A Texas water treatment facility', title: 'Safe, Reliable Water', desc: 'Treatment plants, reservoirs, and pipelines depend on strong infrastructure.' },
  { src: '/images/stock/4e.jpg', alt: 'A teacher working with students in a modern Texas classroom', title: 'Better Schools & Education', desc: 'Growing communities require new schools, expanded campuses, and athletic facilities.' },
  { src: '/images/stock/4f.jpg', alt: 'Texas business professionals collaborating in a meeting', title: 'Economic Opportunity Close to Home', desc: 'Infrastructure quality attracts employers and helps communities compete for investment.' },
  { src: '/images/stock/4g.jpg', alt: 'Texas families enjoying a community park', title: 'More Recreation & Community Spaces', desc: 'Parks, trails, and sports complexes create places for families to gather.' },
  { src: '/images/stock/4h.jpg', alt: 'A Texas road construction project with workers and equipment', title: 'Lower Costs for Taxpayers', desc: 'Local materials help projects move efficiently, stretching public dollars further.' },
];

export default function CommunityBenefits({ accentColor = '#EAB308' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-grid gfx-2x2">
        {CARDS.map((c, i) => (
          <div className="gfx-card" key={i}>
            <div className="gfx-img gfx-16x9">
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
