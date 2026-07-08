import Link from 'next/link';

export const metadata = {
  title: 'Record Attendance Marks TACA’s 72nd Annual Meeting — How Texas Is Built',
  description:
    'More than 600 industry leaders gathered in San Antonio for TACA’s largest-ever Annual Meeting, themed “Building the Community,” as Texas’ construction-materials industry looks to meet the state’s growing infrastructure demands.',
};

export default function TacaAnnualMeetingArticle() {
  return (
    <div>
      <header
        className="page-hero page-hero--compact"
        style={{ '--hero-img': 'url(/images/038808855-beautiful-city-buildings-green.jpg)' }}
      >
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">News &amp; Insights</p>
            <h1 className="page-hero-title">Record Attendance Marks TACA&rsquo;s 72nd Annual Meeting</h1>
            <p className="page-hero-sub">The association&rsquo;s largest-ever Annual Meeting drew more than 600 leaders to San Antonio as Texas&rsquo; construction-materials industry looks to meet the state&rsquo;s growing infrastructure demands.</p>
          </div>
        </div>
      </header>

      <article className="article article-body reveal">
        <Link href="/insights" className="article-back">← Back to News &amp; Insights</Link>
        <p className="article-kicker">Industry News &middot; June 18, 2026</p>

        <p className="article-lead">The Texas Aggregates &amp; Concrete Association (TACA) welcomed more than 600 industry leaders, producers, allied members and business partners to its 72nd Annual Meeting, held June 10&ndash;12 at the JW Marriott San Antonio Hill Country Resort &amp; Spa. Themed &ldquo;Building the Community,&rdquo; it was the largest Annual Meeting in the association&rsquo;s history.</p>

        <p>The gathering featured economic and legislative updates, leadership development, industry recognition programs, charitable initiatives and networking opportunities focused on supporting the continued growth of Texas&rsquo; construction materials industry.</p>

        <p>The meeting opened with a community service project led by TACA&rsquo;s Emerging Leaders Academy participants. More than 100 volunteers assembled <strong>2,000 backpacks</strong> for students in need, benefiting charitable organizations serving communities in Austin, Dallas, Houston and San Antonio.</p>

        <h2>An industry built for Texas&rsquo; growth</h2>
        <p>TACA President and CEO Andrew S. Pinkerton highlighted the industry&rsquo;s increasingly important role in supporting the state&rsquo;s rapid growth.</p>
        <blockquote>&ldquo;Every road, school, hospital, home and business begins with the materials our members produce. As Texas continues to grow, our industry remains committed to providing the essential building materials that support strong communities, create jobs and improve quality of life for Texans. The TACA Annual Meeting is a reminder that what we build goes far beyond infrastructure &mdash; our member companies help build the communities where families live, work and thrive, not just today, but for generations to come.&rdquo;</blockquote>

        <p>The general session featured updates on association initiatives, legislative and regulatory developments, and presentations from nationally recognized speakers addressing the economic, technological and leadership challenges shaping the future of the industry.</p>

        <h2>A &ldquo;doer state&rdquo; with room to grow</h2>
        <p>Featured economist Dr. Anirban Basu, chairman and CEO of Sage Policy Group, discussed economic trends affecting the construction-materials sector &mdash; including inflation, tariffs and workforce challenges. Despite ongoing uncertainties, Basu forecast continued growth for Texas, citing the state&rsquo;s strong economic fundamentals and population expansion.</p>
        <blockquote>&ldquo;Let&rsquo;s empower the doers. That&rsquo;s one of the reasons the Texas economy remains such a powerful engine of growth. Texas is a doer state.&rdquo;</blockquote>

        <p>Attendees also heard from cybersecurity expert Zach Fuller of Silent Sector, who discussed emerging cyber threats facing businesses and the growing importance of AI governance, data security and organizational resilience. Leadership speaker Colonel Garth Massey, founder of Command Ready, delivered a keynote focused on building high-performing teams and strengthening organizational effectiveness.</p>

        <p>Beyond the educational programming, attendees took part in networking events, recreational tournaments, exhibits and fundraising activities supporting TACPAC. The annual TACPAC fundraiser featured legendary Texas musician and Texan of the Year Robert Earl Keen, with opening entertainment from Mary Clare Foley.</p>

        <h2>Built by generations, strengthened for generations</h2>
        <p>During the meeting, Matt Arnold of Knife River Corporation was elected chairman of the association and will help guide TACA&rsquo;s strategic priorities in the coming year. Arnold introduced the theme for his term &mdash; &ldquo;Built by Generations. Strengthened for Generations.&rdquo; &mdash; reflecting the industry&rsquo;s long-standing commitment to serving Texas communities while preparing for the infrastructure, workforce and economic needs of future generations.</p>
        <blockquote>&ldquo;Everything we build is intended to serve communities for decades to come. Our industry has been built by generations of hardworking Texans, and it is our responsibility to ensure the materials, infrastructure and relationships we build today continue to strengthen Texas for generations to come.&rdquo;</blockquote>
      </article>
    </div>
  );
}
