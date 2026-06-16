// CareersGrid — replaces "3-wide-array-of-high-paying-careers.png" on /jobs
// Crop: 3:4 portrait across all five — the photos are people-at-work portraits
// that suit a vertical frame, and uniform 3:4 keeps the 5-up / 3+2 / 1-col grid
// level. Stock set 9a–9e maps 1:1 to the five career categories.

const CARDS = [
  { src: '/images/stock/9a.jpg', alt: 'A skilled trades technician maintaining heavy equipment', title: 'Skilled Trades', desc: 'Equipment operators, maintenance technicians, plant mechanics' },
  { src: '/images/stock/9b.jpg', alt: 'A construction materials lab technician testing samples', title: 'Technical Experts', desc: 'Lab technicians, quality control, surveyors, environmental specialists' },
  { src: '/images/stock/9c.jpg', alt: 'A civil engineer reviewing plans', title: 'Engineers & Scientists', desc: 'Civil engineers, geologists, materials scientists' },
  { src: '/images/stock/9d.jpg', alt: 'An aggregate plant operations manager on site', title: 'Operations & Management', desc: 'Supervisors, managers, logistics professionals' },
  { src: '/images/stock/9e.jpg', alt: 'An industry support professional working in an office', title: 'Support Professionals', desc: 'HR, finance, IT, safety, administrative' },
];

export default function CareersGrid({ accentColor = '#3B82F6' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-grid gfx-five">
        {CARDS.map((c, i) => (
          <div className="gfx-card" key={i}>
            <div className="gfx-img gfx-3x4">
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
