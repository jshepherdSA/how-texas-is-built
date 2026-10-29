import Link from 'next/link';
import JsonLd from '../../components/JsonLd';

export const metadata = {
  title: 'TACA Emerging Leaders Recognized for 2,000-Backpack Drive',
  description:
    'Communities In Schools of San Antonio recognized TACA’s Emerging Leaders Academy for doubling its goal and providing 2,000 backpacks of school supplies to Texas students.',
  alternates: { canonical: '/insights/ela-backpack-giveaway-recognition' },
  openGraph: {
    type: 'article',
    siteName: 'How Texas Is Built',
    publishedTime: '2026-10-28',
    authors: ['Texas Aggregates & Concrete Association'],
    images: [
      {
        url: '/images/ela-backpacks-annual-meeting.jpg',
        alt: 'TACA Emerging Leaders Academy members with the 2,000 backpacks they packed for children in need',
      },
    ],
  },
};

const BASE = 'https://www.howtexasisbuilt.com';
const articleJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'TACA Emerging Leaders Academy Recognized for Community Service Initiative Providing 2,000 Backpacks to Texas Students',
    description:
      'Communities In Schools of San Antonio recognized TACA’s Emerging Leaders Academy for a community service project that doubled its goal, providing 2,000 backpacks to students in need across Texas.',
    image: [
      `${BASE}/images/ela-backpacks-annual-meeting.jpg`,
      `${BASE}/images/ela-recognition-margil-elementary.jpg`,
    ],
    datePublished: '2026-10-28',
    dateModified: '2026-10-28',
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
    mainEntityOfPage: `${BASE}/insights/ela-backpack-giveaway-recognition`,
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
        name: 'TACA Emerging Leaders Recognized for 2,000-Backpack Drive',
        item: `${BASE}/insights/ela-backpack-giveaway-recognition`,
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

export default function ElaBackpackRecognitionArticle() {
  return (
    <div>
      <JsonLd data={articleJsonLd} />
      <header
        className="page-hero page-hero--compact"
        style={{ '--hero-img': 'url(/images/ela-backpacks-annual-meeting.jpg)' }}
      >
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">News &amp; Insights</p>
            <h1 className="page-hero-title">TACA Emerging Leaders Recognized for Providing 2,000 Backpacks to Texas Students</h1>
            <p className="page-hero-sub">Communities In Schools of San Antonio honored TACA&rsquo;s Emerging Leaders Academy for a service project that doubled its original goal.</p>
          </div>
        </div>
      </header>

      <article className="article article-body reveal">
        <Link href="/insights" className="article-back">← Back to News &amp; Insights</Link>
        <p className="article-kicker">Community &middot; October 28, 2026</p>

        <p className="article-lead">The Texas Aggregates &amp; Concrete Association&rsquo;s (TACA) Emerging Leaders Academy (ELA) has been recognized by Communities In Schools of San Antonio for a community service project that doubled its original goal, providing 2,000 backpacks filled with school supplies to students in need across Texas.</p>

        <p>The recognition took place Oct. 22 at Margil Elementary School in San Antonio, where ELA representatives joined Communities In Schools for an event highlighting the nonprofit organization&rsquo;s work supporting students and families. The group was honored for its contributions to the organization&rsquo;s mission.</p>

        <figure>
          <img src="/images/ela-recognition-margil-elementary.jpg" alt="TACA Emerging Leaders Academy members Nic DeWood, Jayde Young, Roberto Carrillo and Mark Mayle with a thank-you sign from Communities In Schools of San Antonio at Margil Elementary School" style={figureStyle} />
          <figcaption style={captionStyle}>Nic DeWood, Jayde Young, Roberto Carrillo and Mark Mayle represented TACA&rsquo;s Emerging Leaders Academy at Margil Elementary School in San Antonio.</figcaption>
        </figure>

        <h2>A goal doubled</h2>
        <p>As part of its community service project during <Link className="inline" href="/insights/taca-72nd-annual-meeting">TACA&rsquo;s 2026 Annual Meeting</Link>, ELA members set out to assemble 1,000 backpacks filled with essential school supplies. Through the efforts of participating members and supporters, the group exceeded its goal by 100 percent, ultimately preparing <strong>2,000 backpacks</strong> for distribution to students across Texas.</p>

        <p>The backpacks were donated to three nonprofit organizations serving children and families throughout the state:</p>
        <ul>
          <li><strong>Communities In Schools:</strong> 1,250 backpacks distributed among communities in San Antonio, Austin and Midland.</li>
          <li><strong>Be A Resource:</strong> 500 backpacks for students in the Houston area.</li>
          <li><strong>Children&rsquo;s Charities:</strong> 250 backpacks for students in the Dallas&ndash;Fort Worth area.</li>
        </ul>

        <figure>
          <img src="/images/ela-backpacks-annual-meeting.jpg" alt="TACA Emerging Leaders Academy members and volunteers with the backpacks they packed at TACA's 2026 Annual Meeting" style={figureStyle} />
          <figcaption style={captionStyle}>TACA ELA members packed 2,000 backpacks for children in need at TACA&rsquo;s Annual Meeting in June 2026.</figcaption>
        </figure>

        <h2>Developing the next generation of leaders</h2>
        <p>TACA&rsquo;s Emerging Leaders Academy is designed to develop future leaders within Texas&rsquo; aggregates, concrete and cement industries by providing opportunities for professional development, industry education, networking and leadership experience.</p>

        <blockquote>&ldquo;TACA&rsquo;s Emerging Leaders Academy is about developing the next generation of leaders in the aggregates, concrete and cement industries, and an important part of leadership is recognizing our responsibility to the communities we serve. These young professionals took an ambitious goal and doubled it, demonstrating the initiative, teamwork and commitment to service that will help shape the future of our industry.&rdquo; &mdash; Andrew Pinkerton, TACA President and CEO</blockquote>

        <p>Representing TACA and the Emerging Leaders Academy at the San Antonio recognition event were Nic DeWood, Austin Powder Company; Jayde Young, Martin Marietta; Roberto Carrillo, Capitol Aggregates, Inc.; and Mark Mayle, Arcline Ready Mix &ndash; all of whom are graduating members of TACA&rsquo;s 2025&ndash;2026 ELA class. During the event, students shared firsthand how Communities In Schools of San Antonio has made a difference in their lives.</p>
      </article>
    </div>
  );
}
