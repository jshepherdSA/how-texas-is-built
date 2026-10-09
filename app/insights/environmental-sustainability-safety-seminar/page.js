import Link from 'next/link';
import JsonLd from '../../components/JsonLd';

export const metadata = {
  title: 'TACA Seminar Examines Silica Research and AI in Safety',
  description:
    "Regulators, scientists and safety experts gathered in San Antonio for TACA's Environmental, Sustainability and Safety Seminar on crystalline silica research, AI and workplace safety.",
  alternates: { canonical: '/insights/environmental-sustainability-safety-seminar' },
  openGraph: {
    type: 'article',
    siteName: 'How Texas Is Built',
    publishedTime: '2026-10-07',
    authors: ['Texas Aggregates & Concrete Association'],
    images: [
      {
        url: '/images/ess-tracie-phillips-tceq.jpg',
        alt: 'Tracie Phillips of the TCEQ presents crystalline silica research at TACA’s Environmental, Sustainability and Safety Seminar',
      },
    ],
  },
};

const BASE = 'https://www.howtexasisbuilt.com';
const articleJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'TACA Seminar Examines Crystalline Silica Research, Artificial Intelligence and Emerging Issues Facing the Texas Construction Materials Industry',
    description:
      'New research on crystalline silica and the growing use of artificial intelligence in workplace safety were among the major topics at TACA’s Environmental, Sustainability and Safety Seminar in San Antonio.',
    image: [
      `${BASE}/images/stock/7b.jpg`,
      `${BASE}/images/ess-tracie-phillips-tceq.jpg`,
      `${BASE}/images/ess-emily-hargrove-nssga.jpg`,
    ],
    datePublished: '2026-10-07',
    dateModified: '2026-10-07',
    author: {
      '@type': 'Organization',
      name: 'Texas Aggregates & Concrete Association',
      url: 'https://www.tx-taca.org/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'How Texas Is Built',
      logo: { '@type': 'ImageObject', url: `${BASE}/images/htib-logo.png` },
    },
    mainEntityOfPage: `${BASE}/insights/environmental-sustainability-safety-seminar`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'News & Insights', item: `${BASE}/insights` },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'TACA Seminar Examines Silica Research and AI in Safety',
        item: `${BASE}/insights/environmental-sustainability-safety-seminar`,
      },
    ],
  },
];

const figureStyle = { display: 'block', width: '100%', margin: '10px 0 6px', borderRadius: '10px' };
const captionStyle = {
  margin: '0 0 24px',
  fontSize: '0.85rem',
  fontStyle: 'italic',
  color: 'var(--ink-soft)',
  textAlign: 'center',
};

export default function EnvironmentalSeminarArticle() {
  return (
    <div>
      <JsonLd data={articleJsonLd} />
      <header
        className="page-hero page-hero--compact"
        style={{ '--hero-img': 'url(/images/stock/7b.jpg)' }}
      >
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">News &amp; Insights</p>
            <h1 className="page-hero-title">Silica Research, AI and Safety Take Center Stage at TACA&rsquo;s Sustainability Seminar</h1>
            <p className="page-hero-sub">State regulators, scientists and safety professionals gathered in San Antonio to examine the research, technology and oversight shaping how Texas builds responsibly.</p>
          </div>
        </div>
      </header>

      <article className="article article-body reveal">
        <Link href="/insights" className="article-back">← Back to News &amp; Insights</Link>
        <p className="article-kicker">Industry News &middot; October 7, 2026</p>

        <p className="article-lead">New research on crystalline silica, the growing use of artificial intelligence in workplace safety, and environmental and regulatory developments accompanying Texas&rsquo; continued growth were among the major topics at the Texas Aggregates &amp; Concrete Association&rsquo;s (TACA) Environmental, Sustainability and Safety Seminar, held Sept. 29&ndash;30 in San Antonio.</p>

        <p>The two-day seminar brought together state regulators, scientists, safety professionals and construction materials industry leaders to examine developments affecting the production of aggregates, concrete, cement and other materials needed to build Texas.</p>

        <p>TACA President and CEO Andrew Pinkerton opened the seminar and, along with Vice President of Governmental Affairs Clinton Harned, led a session on issues that may be considered during Texas&rsquo; upcoming 90th Legislative Session and the vital role construction materials supplied by TACA member companies play in the state&rsquo;s continued growth and well-being.</p>

        <blockquote>&ldquo;As Texas continues to grow, the demand for the basic materials needed to build our roads, homes, schools, water systems and other infrastructure grows with it. Our industry has an obligation to meet that demand while continuing to improve the way we operate &ndash; environmentally, technologically and from a safety standpoint. This seminar gives our members an opportunity to hear directly from scientists, regulators and other experts about the developments shaping that work.&rdquo;</blockquote>

        <h2>TCEQ research takes a closer look at crystalline silica</h2>
        <p>One of the seminar&rsquo;s featured presentations examined research by the Texas Commission on Environmental Quality (TCEQ) into crystalline silica and ambient air quality near aggregate production operations. Tracie Phillips, Ph.D., Distinguished Toxicologist in TCEQ&rsquo;s Toxicology, Risk Assessment &amp; Research Division, presented TCEQ&rsquo;s <em>Ambient Monitoring of Particulates, Including Crystalline Silica, Near APO Facilities</em> report. The research included monitoring near two Central Texas quarries and one sand mine, along with a background monitoring location in Austin.</p>

        <figure>
          <img src="/images/ess-tracie-phillips-tceq.jpg" alt="Tracie Phillips, Ph.D., of the TCEQ presents the agency's crystalline silica report at TACA's Environmental, Sustainability and Safety Seminar" style={figureStyle} />
          <figcaption style={captionStyle}>Tracie Phillips, Ph.D., of the TCEQ shared insights on the agency&rsquo;s crystalline silica report.</figcaption>
        </figure>

        <p>TCEQ stated that the aggregate operations studied did not measurably contribute to total PM2.5 concentrations &ndash; which can contain respirable crystalline silica. Concentrations measured near the two quarries were comparable to those at the background monitoring location, while higher ambient particulate concentrations were measured near the sand mine. TCEQ concluded that the airborne crystalline silica concentrations measured during the study at all the locations were not expected to result in short- or long-term adverse health effects for the general public.</p>

        <p>Further, no data within TCEQ&rsquo;s study demonstrates any correlation between aggregate production and impactful ambient crystalline silica concentrations in the air. The study did identify Saharan dust transported from Africa as a contributor to concentrations of respirable crystalline silica across the study locations.</p>

        <p>Silica was also addressed by Emily Hargrove, Director of Occupational Health &amp; Safety for the National Stone, Sand &amp; Gravel Association (NSSGA), who provided an update on the federal Mine Safety and Health Administration&rsquo;s respirable crystalline silica rule and discussed the industry&rsquo;s ongoing efforts to monitor and manage occupational exposure.</p>

        <figure>
          <img src="/images/ess-emily-hargrove-nssga.jpg" alt="Emily Hargrove of the NSSGA speaks on regulatory and safety matters at TACA's Environmental, Sustainability and Safety Seminar" style={figureStyle} />
          <figcaption style={captionStyle}>Emily Hargrove of the NSSGA spoke about regulatory and safety matters.</figcaption>
        </figure>

        <h2>Artificial intelligence moves into safety and operations</h2>
        <p>The seminar also examined the rapidly evolving use of artificial intelligence in workplace safety and operations.</p>

        <p>Lonnie Holder, Director of Loss Control, and Todd Lykke, Agency and Risk Development Manager with McGowan Transportation, examined how AI and other emerging technologies are affecting everyday life and how safety professionals can use these tools to become more efficient and proactive. The discussion explored the role technology can play in identifying potential risks, analyzing information and strengthening workplace safety practices.</p>

        <blockquote>&ldquo;AI can help decision-makers make faster, better-informed decisions, but it is decision support &ndash; not a replacement for human authority and judgment.&rdquo; &mdash; Lonnie Holder</blockquote>

        <p>&ldquo;AI is moving very quickly from something people simply talk about to something companies are beginning to use in their day-to-day operations,&rdquo; Pinkerton said. &ldquo;For our industry, the important question is how these technologies can be used responsibly and practically to make our people safer, improve the efficiency of our operations and help us work more effectively.&rdquo;</p>

        <h2>Environmental stewardship, safety and regulation</h2>
        <p>The seminar featured additional sessions addressing sustainability, environmental compliance and workplace safety.</p>

        <p>TCEQ&rsquo;s Brandon Greulich, who manages the Texas Emissions Reduction Plan (TERP) Task Force Section within the agency&rsquo;s Air Grants Division, and Bill Moody, P.E., Technical Specialist in the New Source Review Mechanical/Coatings Section, discussed grant opportunities available through TERP and TCEQ&rsquo;s permitting process.</p>

        <p>Other sessions examined low-carbon concrete mix design, stormwater permits, mining and land reclamation, Environmental Product Declarations, cybersecurity, flood and emergency preparedness, safety leadership and preventive maintenance. The program also included a session led by NSSGA&rsquo;s Hargrove on strengthening safety culture and addressing mental health across the aggregate industry.</p>

        <blockquote>&ldquo;Texas cannot build the infrastructure its growing population requires without aggregates, concrete and cement. The challenge for our industry is not simply producing more material. It is continuing to find better, safer and more responsible ways to produce it. Bringing together regulators, researchers and the people who operate these facilities every day helps us do that.&rdquo; &mdash; Andrew Pinkerton</blockquote>
      </article>
    </div>
  );
}
