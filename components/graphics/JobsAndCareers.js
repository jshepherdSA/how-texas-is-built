// JobsAndCareers — replaces "2-supporting-quality-jobs-and-careers.png" on /jobs
// Crop: 1:1 square — keeps the full-width intro hero and the three feature images
// at one consistent height. Stock set 6 supplies all three trio photos
// (6b automated, 6d real skills, 6c outsourced).

const CARDS = [
  { src: '/images/stock/6b.jpg', alt: 'A Texas worker operating and inspecting heavy industrial equipment', title: 'Cannot Be Automated', desc: 'These careers require real-world judgment that AI cannot replicate.' },
  { src: '/images/stock/6d.jpg', alt: 'Texas construction professionals reviewing building plans on site', title: 'Real Skills, Real Impact', desc: 'Hands-on work, critical thinking, and local community impact.' },
  { src: '/images/stock/6c.jpg', alt: 'A local Texas construction crew at a quarry or concrete plant', title: 'Cannot Be Outsourced', desc: 'Materials are sourced regionally and projects must be built locally — these jobs stay here.' },
];

export default function JobsAndCareers({ accentColor = '#3B82F6' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      {/* 6a now spans the full row width (matching the trio below) with the
          salary fact as a bottom overlay instead of a floated portrait. */}
      <div className="gfx-jobs-intro">
        <div className="gfx-img gfx-jobs-hero">
          <img
            src="/images/stock/6a.jpg"
            alt="A friendly Texas aggregate industry worker in a hard hat and safety vest"
            loading="lazy"
          />
          <div className="gfx-jobs-overlay">
            <span className="gfx-jobs-salary">$50K&ndash;$90K</span>
            <span className="gfx-jobs-salary-sub">annually &mdash; skilled careers that don&rsquo;t require a four-year degree</span>
          </div>
        </div>
      </div>

      <div className="gfx-grid gfx-trio">
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
