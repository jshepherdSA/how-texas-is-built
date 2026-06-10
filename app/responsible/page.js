import Image from 'next/image';

export const metadata = { title: 'Responsible Operations — How Texas Is Built' };

// Step 4 accent — Responsible Operations
const ACCENT = '#EF4444';

export default function OperationsPage() {
  return (
    <div className="page--accent" style={{ '--accent': ACCENT }}>
      <header className="page-hero page-hero--green" style={{ '--hero-img': 'url(/images/081545197-november-evening-pennybacker-b.jpeg)' }}>
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow green">Responsible Operations</p>
            <h1 className="page-hero-title">Protecting Texas&apos; Resources<br /><span className="light">While Building Its Future</span></h1>
            <p className="page-hero-sub">Responsible operations. Strong communities. A better Texas for generations to come.</p>
          </div>
        </div>
      </header>

      <article className="article reveal">
        <figure>
          <Image src="/images/responsible-operations/1-protecting-texas-resources-hero.png" alt="Protecting Texas' resources while building its future: responsible operations, strong communities, a better Texas for generations to come" width={3168} height={1344} style={{ width: '100%', height: 'auto' }} sizes="(max-width:700px) 90vw, 1000px" />
        </figure>

        <p className="article-kicker">Why It Matters</p>
        <p className="article-lead">Texans depend on clean air, clean water, and healthy communities. So do the operations that build Texas.</p>

        <p>That&apos;s why aggregate and concrete operations are designed to meet <strong>strict environmental standards</strong> while producing the materials that build the roads, homes, schools, hospitals, and infrastructure Texans rely on. Responsible operations and responsible growth aren&apos;t at odds. They&apos;re the same job.</p>
        <figure className="portrait">
          <Image src="/images/responsible-operations/2-clean-air-clean-water-healthy-communities.jpeg" alt="A technician collecting and testing a water sample from a clear Texas stream" width={1646} height={2469} style={{ width: '100%', height: 'auto' }} sizes="(max-width:600px) 90vw, 38vw" />
        </figure>

        <h2>Strictly regulated. Continuously monitored.</h2>
        <p>The aggregates and concrete industry is one of the most regulated in Texas. Operations answer to <strong>more than 15 local, state, and federal agencies</strong> and run under extensive environmental oversight. That means ongoing inspections, monitoring, reporting, and compliance requirements &mdash; not a one-time permit. Air quality, water management, emissions, and stormwater are all closely regulated. The bottom line: responsible environmental stewardship and responsible growth have to work together to protect the resources Texans value while improving quality of life.</p>
        <figure>
          <Image src="/images/responsible-operations/3-the-big-picture-high-regulation.png" alt="The big picture on regulation: more than 15 local, state, and federal agencies regulate the industry; ongoing inspections, monitoring, reporting, and compliance requirements; and air quality, water management, emissions, stormwater, and environmental protection are all closely regulated" width={1176} height={784} style={{ width: '100%', height: 'auto' }} sizes="(max-width:700px) 90vw, 1000px" />
        </figure>

        <h2>Clean air through responsible operations</h2>
        <p>Modern facilities are <strong>required</strong> to control dust &mdash; and they do it with advanced monitoring, high-efficiency filtration, enclosed equipment, and real-time environmental data. The work starts at the source. Water mist and atomized dust suppression systems create microscopic droplets that bind to airborne dust before it can leave the site, using far less water than conventional spraying. Conveyor belts are enclosed to keep dust from going airborne, which also protects material quality and improves efficiency. Loading points can be enclosed and fitted with dust collection at one of the highest-risk emission points. And negative air pressure systems in enclosed processing areas keep dust from escaping structures, pulling airborne particles into filtration instead.</p>
        <p>What dust does get generated is captured. Baghouse filtration systems pull air through specialized filter bags that trap even extremely fine particulate matter, helping facilities meet strict air quality standards. High-efficiency cartridge dust collectors capture fine dust before it reaches the atmosphere, cutting emissions and keeping the air around the facility cleaner.</p>
        <p>Trucks and roads get the same attention. Wheel wash systems automatically clean tires before they touch public roadways, so less dirt and dust gets tracked into the community. Haul roads are stabilized with dust suppressants, environmentally approved binding agents, and road-surfacing technologies that significantly reduce vehicle-generated dust.</p>
        <p>All of it is measured. Automated dust monitoring stations track PM10 and PM2.5 particulate matter, wind speed and direction, humidity, and temperature in real time, so operators can make immediate adjustments. Meteorological monitoring stations watch the same conditions, letting crews proactively manage any activity that might kick up dust before it becomes a problem.</p>

        <h2>Transparency, in real time</h2>
        <p>Where it applies, Continuous Emissions Monitoring Systems measure emissions around the clock &mdash; particulates, nitrogen oxides, sulfur compounds, and other regulated emissions &mdash; so problems are caught and corrected immediately, not days or weeks later. Many facilities now back that up with remote environmental data reporting: cloud-based monitoring, automated reporting, and digital compliance tracking that mean greater transparency and faster regulatory reporting.</p>
        <p>For citizens and elected officials alike, that monitoring is the point. It&apos;s how communities can be confident facilities are operating responsibly while protecting the health, safety, and quality of life around them. Real-time monitoring, advanced filtration, and strict controls keep air quality standards met and catch issues fast &mdash; letting Texas balance economic growth with the natural resources its people value most.</p>

        <h2>Safeguarding Texas&apos; water supply</h2>
        <p>Water is one of Texas&apos; most valuable natural resources &mdash; essential to the health, growth, and quality of life of every community. As the state grows, responsible water stewardship protects rivers, lakes, aquifers, and groundwater, and makes sure future generations have the water they need to thrive.</p>
        <figure className="portrait">
          <Image src="/images/responsible-operations/4-water-supply.png" alt="A clear Texas Hill Country river at sunrise" width={1536} height={2752} style={{ width: '100%', height: 'auto' }} sizes="(max-width:600px) 90vw, 38vw" />
        </figure>
        <p>Operations are built to protect it. Water is responsibly managed and frequently recycled on-site, with processes like aggregates washing running on closed-loop systems that can recycle roughly <strong>92% to 98%</strong> of the water they use. Local groundwater conservation districts and aquifer authorities oversee water use to protect long-term regional supply. Stormwater, sediment, and erosion are managed with retention ponds, berms, and drainage controls that protect nearby waterways. Operations protect groundwater under strict permits with ongoing monitoring and reporting. And Best Management Practices are in place throughout to prevent contamination and protect surrounding ecosystems.</p>
      </article>
    </div>
  );
}
