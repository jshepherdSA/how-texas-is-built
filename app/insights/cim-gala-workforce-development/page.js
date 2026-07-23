import Link from 'next/link';

export const metadata = {
  title: 'TACA Celebrates Workforce Development at the CIM Gala — How Texas Is Built',
  description:
    'Texas leaders — including Gov. Greg Abbott, Sen. Pete Flores and TACA President Andrew Pinkerton — gathered at Texas State University’s Concrete Industry Management Scholarship Gala to celebrate a program advancing education and workforce development in construction materials.',
};

export default function CimGalaArticle() {
  return (
    <div>
      <header
        className="page-hero page-hero--compact"
        style={{ '--hero-img': 'url(/images/cim-gala-gov-abbott.jpg)' }}
      >
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">News &amp; Insights</p>
            <h1 className="page-hero-title">Celebrating Workforce Development at the CIM Gala</h1>
            <p className="page-hero-sub">Texas leaders joined TACA at Texas State University&rsquo;s Concrete Industry Management Scholarship Gala to celebrate a program advancing education, workforce development and leadership in construction materials.</p>
          </div>
        </div>
      </header>

      <article className="article article-body reveal">
        <Link href="/insights" className="article-back">← Back to News &amp; Insights</Link>
        <p className="article-kicker">Industry News &middot; April 27, 2026</p>

        <p className="article-lead">Leaders from across Texas&rsquo; construction-materials industry gathered at Texas State University&rsquo;s Concrete Industry Management (TXST CIM) Scholarship Gala on April 23 in San Marcos &mdash; celebrating the program&rsquo;s mission of advancing education, workforce development and leadership in the sector.</p>

        <p>The CIM program, through the help of its National Steering Committee and Patron&rsquo;s Board Foundation, provides more than <strong>$100,000 in scholarships</strong> to TXST CIM students each year to pursue high-demand careers in the aggregates, concrete and cement industry.</p>

        <p>Gov. Greg Abbott, Texas State Sen. Pete Flores and other industry leaders joined members of the Texas Aggregates &amp; Concrete Association (TACA) &mdash; including TACA President and CEO Andrew Pinkerton &mdash; in recognizing the program&rsquo;s growing impact across Texas.</p>

        <p>The CIM program provides students with specialized education in aggregates, concrete and construction materials, connecting classroom learning with real-world industry experience. Five universities in the United States offer a CIM degree program, including Texas State, alongside programs in Tennessee, New Jersey, South Dakota and California.</p>

        <h2>A program that transforms lives</h2>
        <p>Abbott highlighted the importance of workforce-development programs like CIM in supporting Texas&rsquo; continued economic expansion and infrastructure growth.</p>
        <img
          src="/images/cim-gala-student-abbott.jpg"
          alt="A TXST CIM student greets Texas Gov. Greg Abbott at the Concrete Industry Management Scholarship Gala"
          style={{ float: 'right', width: 'min(38%, 340px)', margin: '6px 0 16px 28px', borderRadius: '10px' }}
        />
        <blockquote>&ldquo;This program transforms the lives of everybody it touches. CIM graduates have 100 percent job placement and earn the highest salary of any degree on campus. CIM graduates don&rsquo;t just pour foundations; they become foundations that form the future of the great state of Texas.&rdquo;</blockquote>

        <p>CIM graduates step directly into an industry that underpins every community in the state &mdash; the roads, homes, schools, hospitals and water systems that Texas depends on as it continues to grow.</p>

        <h2>Strengthening the workforce pipeline</h2>
        <p>Flores highlighted the critical need to strengthen the state&rsquo;s workforce pipeline. Drawing on his own story &mdash; growing up in Laredo and beginning his career as a young game warden before rising to the Texas Senate &mdash; Flores encouraged students to recognize the opportunities ahead.</p>
        <p>He emphasized that CIM students are stepping into a workforce demand that has too often gone unmet, reinforcing that the only limits on their future are the ones they place on themselves. Flores also spent time engaging directly with students before and after the program, underscoring the importance of mentorship and industry connection.</p>

        <h2>Building the next generation</h2>
        <p>TACA member companies have long supported CIM through scholarships, mentorship and industry engagement, helping ensure a strong pipeline of talent to meet the demands of one of the nation&rsquo;s fastest-growing states. TACA President and CEO Andrew Pinkerton serves on the program&rsquo;s National Steering Committee.</p>
        <img
          src="/images/cim-gala-flores-pinkerton.jpg"
          alt="Texas State Sen. Pete Flores with TACA President Andrew Pinkerton and TACA members at the CIM Scholarship Gala"
          style={{ display: 'block', width: '100%', margin: '10px 0 24px', borderRadius: '10px' }}
        />
        <blockquote>&ldquo;CIM is helping build the next generation of leaders who will quite literally shape the future of Texas. As our state continues to grow, the need for a skilled, well-trained workforce in construction materials has never been more critical. We are proud to support a program that is preparing students for meaningful careers in an industry that underpins every community in our state.&rdquo;</blockquote>

        <p>&ldquo;As Texas leads the nation in growth,&rdquo; Pinkerton added, &ldquo;it is programs like CIM that ensure we have the workforce ready to build what comes next.&rdquo;</p>
      </article>
    </div>
  );
}
