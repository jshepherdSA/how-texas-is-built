import Link from 'next/link';

export const metadata = {
  title: 'How Aggregates & Concrete Are Made',
  description:
    'From quarry to construction site: see how aggregates and concrete are produced and combined to build the roads, homes, and infrastructure across Texas.',
  alternates: { canonical: '/how-its-made' },
};

export default function HowItsMadePage() {
  return (
    <div>
      <header
        className="page-hero page-hero--compact"
        style={{ '--hero-img': 'url(/images/113804924-aerial-view-modern-highway-roa.jpeg)' }}
      >
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">From Quarry to Community</p>
            <h1 className="page-hero-title">Aggregates &amp; Concrete:<br /><span className="red">The Foundation of Texas</span></h1>
            <p className="page-hero-sub">From quarry to finished pour &mdash; the materials and the process behind everything Texas builds.</p>
          </div>
        </div>
      </header>

      <article className="article article-body reveal">
        <Link href="/" className="article-back">← Back to home</Link>

        <div className="howmade-intro">
          <div className="howmade-video">
            <iframe
              src="https://www.youtube.com/embed/wJ7RyXQaEgM?si=9cbrOzPEsH9knNHV"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className="article-lead">Every road, bridge, home, school, hospital, water system, and energy project in Texas begins with three essential materials: aggregates, cement, and concrete. Together, they form the foundation of modern life and keep Texas growing.</p>
        </div>

        <h2>1. Aggregates: The Starting Point</h2>
        <p>The process begins at a quarry, where natural rock, limestone, sand, and gravel are carefully extracted. These materials are then crushed, screened, and washed into different sizes for specific uses. Aggregates are used in road bases, drainage systems, asphalt, and as the main ingredient in concrete.</p>

        <h2>2. Cement: The Binding Ingredient</h2>
        <p>Cement is made by taking limestone and other materials, grinding them into a fine powder, and heating them in a kiln at extremely high temperatures. This process creates clinker, which is then ground into the fine cement powder used to bind concrete together.</p>

        <h2>3. Concrete: The Finished Building Material</h2>
        <p>Concrete is made by combining cement, aggregates, water, and carefully measured additives. The cement reacts with water, binding the sand, gravel, and crushed stone into a strong, durable material. Because concrete must be delivered and placed quickly, local concrete plants are essential to keeping projects on schedule and costs down.</p>

        <h2>Why Local Materials Matter</h2>
        <p>Aggregates, cement, and concrete are heavy, time-sensitive materials. Transporting them long distances can significantly increase construction costs, traffic, delays, and emissions. That is why local production is critical to affordable roads, homes, schools, and infrastructure across Texas.</p>

        <h2>Responsible Operations</h2>
        <p>Modern aggregate, cement, and concrete operations are regulated at the local, state, and federal levels, including oversight for air, water, stormwater, safety, and environmental compliance. These industries support more than <strong>100,000 Texas jobs</strong> while providing the materials needed to build and maintain communities.</p>
      </article>
    </div>
  );
}
