// RegulationHero — replaces "1-protecting-texas-resources-hero.png" on /responsible
// Crop: 16:9 — a wide Texas landscape works as a cinematic hero banner with a
// gradient text overlay. The same nature image anchors the banner; the four
// supporting points sit in an equal-width card row beneath it.

const POINTS = [
  { title: 'Responsible Operations', desc: 'Built to strict environmental standards at every step.' },
  { title: 'Strong Communities', desc: 'Local materials that keep Texas communities thriving.' },
  { title: 'Built for Generations', desc: 'A better Texas for the families who come next.' },
  { title: 'Clean Air & Water', desc: 'Protecting the natural resources Texans value most.' },
];

export default function RegulationHero({ accentColor = '#EF4444' }) {
  return (
    <div className="gfx" style={{ '--accent': accentColor }}>
      <div className="gfx-hero">
        <div className="gfx-img gfx-16x9">
          <img
            src="/images/stock/1a.jpg"
            alt="A wide Texas landscape with a river, hills, and trees at sunset"
            loading="lazy"
          />
        </div>
        <div className="gfx-hero-overlay">
          <h3 className="gfx-hero-title">Protecting Texas&apos; Resources While Building Its Future</h3>
        </div>
      </div>
      <div className="gfx-hero-row">
        {POINTS.map((p, i) => (
          <div className="gfx-hero-card" key={i}>
            <h4 className="gfx-card-title">{p.title}</h4>
            <p className="gfx-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
