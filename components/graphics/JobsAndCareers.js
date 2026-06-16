// JobsAndCareers — replaces "2-supporting-quality-jobs-and-careers.png" on /jobs
// Crop: 1:1 square — keeps the floated intro portrait and the three feature
// images at one consistent height. Stock set 6 has three photos (6a, 6b, 6c);
// the middle "Real Skills, Real Impact" card is icon-based (per the brief's
// allowance) so all three trio cells stay the same height.

const CARDS = [
  { type: 'photo', src: '/images/stock/6b.jpg', alt: 'A Texas worker operating and inspecting heavy industrial equipment', title: 'Cannot Be Automated', desc: 'These careers require real-world judgment that AI cannot replicate.' },
  { type: 'icon', title: 'Real Skills, Real Impact', desc: 'Hands-on work, critical thinking, and local community impact.' },
  { type: 'photo', src: '/images/stock/6c.jpg', alt: 'A local Texas construction crew at a quarry or concrete plant', title: 'Cannot Be Outsourced', desc: 'Materials are sourced regionally and projects must be built locally — these jobs stay here.' },
];

function SkillsIcon() {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </svg>
  );
}

export default function JobsAndCareers({ accentColor = '#3B82F6' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-jobs-intro">
        <div className="gfx-fimg" style={{ width: '38%' }}>
          <div className="gfx-img gfx-1x1">
            <img
              src="/images/stock/6a.jpg"
              alt="A friendly Texas aggregate industry worker in a hard hat and safety vest"
              loading="lazy"
            />
          </div>
        </div>
        <span className="gfx-stat">$50,000&ndash;$90,000</span>
        <p className="gfx-label" style={{ marginTop: '8px' }}>With advancement leading to six-figure earnings</p>
        <div className="gfx-clear" />
      </div>

      <div className="gfx-grid gfx-trio">
        {CARDS.map((c, i) => (
          <div className="gfx-card" key={i}>
            {c.type === 'photo' ? (
              <div className="gfx-img gfx-1x1">
                <img src={c.src} alt={c.alt} loading="lazy" />
              </div>
            ) : (
              <div className="gfx-iconbox"><SkillsIcon /></div>
            )}
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
