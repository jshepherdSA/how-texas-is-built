import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: "Fueling Texas' Growth — How Texas Is Built" };

// Step 1 accent — Texas Is Growing
const ACCENT = '#F97316';

export default function WhyPage() {
  return (
    <div className="page--accent" style={{ '--accent': ACCENT }}>
      <header className="page-hero page-hero--tall" style={{ '--hero-img': 'url(/images/103257435-skyline-city-austin-texas.jpeg)' }}>
        <div className="page-hero-bg"></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content reveal">
            <p className="eyebrow light">Fueling Texas&apos; Growth</p>
            <h1 className="page-hero-title">Fueling the<br /><span className="red">Texas Miracle</span></h1>
            <p className="page-hero-sub">Texas&apos; favorable business climate continues to drive jobs, investment, and growth — and the materials that make that growth possible.</p>
            <div className="page-hero-tagline"><span><span className="dot"></span>1,000–1,500 new Texans every day</span></div>
          </div>
        </div>
      </header>

      <article className="article reveal">
        <p className="article-kicker">Why It Matters</p>
        <p className="article-lead">Texas grows faster than nearly any state in the nation. The materials that build it have to keep pace.</p>

        <p>Texas attracts more people, more businesses, and more investment than any other state. A favorable business climate keeps it coming &mdash; and that growth creates demand for housing, transportation, schools, hospitals, water systems, and energy infrastructure.</p>

        <h2>By the numbers</h2>
        <p>Between 1,000 and 1,500 new residents arrive every single day. That&apos;s a brand-new neighborhood, daily. Across a year, Texas adds 350,000 to 500,000 people &mdash; and one recent year alone brought more than 560,000, one of the largest single-year increases on record. More than 31 million people now live, work, and build their future here. By 2036, the state is on track to add 3 to 5 million more.</p>
        <figure>
          <Image src="/images/fueling-texas-growth/1-by-the-numbers.png" alt="Aerial view of a growing Texas residential neighborhood" width={2688} height={1598} style={{ width: '100%', height: 'auto' }} sizes="(max-width:700px) 90vw, 1000px" />
        </figure>
        <p>The big picture is simple. Texas isn&apos;t just growing. It&apos;s growing faster than nearly every other state in the nation. Every new family, business, school, hospital, and community needs the infrastructure that makes modern life work.</p>

        <h2>Growth creates opportunity</h2>
        <p>Keeping that opportunity alive means investing in it. Improving Texans&apos; <strong>quality of life</strong> takes <strong>continued investment</strong> in the homes, roads, schools, hospitals, water systems, and infrastructure that hold communities together. As more families and businesses arrive, the list only grows. A strong local supply of aggregates and concrete is what lets Texas grow responsibly &mdash; without giving up affordability or quality of life. It&apos;s also <Link className="inline" href="/local-sourcing">why local supply matters</Link>.</p>

        <h2>The building blocks behind everyday Texas</h2>
        <p>It&apos;s easy to forget how much material goes into the places Texans live, learn, heal, and gather. The average home takes 400 tons of aggregates. One mile of six-lane highway takes 15,000 cubic yards of concrete. A modern hospital takes 30,000. A high school football stadium takes 100,000. Even day to day, the average American uses the equivalent of 50 to 60 pounds of aggregates.</p>
        <figure>
          <Image src="/images/fueling-texas-growth/2-building-blocks-everyday-texas.png" alt="Building blocks behind everyday Texas: 400 tons of aggregates for the average home, 15,000 cubic yards of concrete per mile of six-lane highway, 30,000 cubic yards for a modern hospital, and 50 to 60 pounds of aggregates used per day by the average American" width={2752} height={1536} style={{ width: '100%', height: 'auto' }} sizes="(max-width:700px) 90vw, 1000px" />
        </figure>

        <h2>What it takes to build tomorrow</h2>
        <p>Today&apos;s growth is only the start. To keep pace, experts estimate Texas could need 15 to 50 million additional tons of aggregates over the next decade alone &mdash; plus another 3 to 10 million cubic yards of ready-mix concrete and 1 to 3 million additional tons of cement. The demand is already here. The question is whether supply keeps up.</p>
        <figure>
          <Image src="/images/fueling-texas-growth/3-what-it-takes-to-build-tomorrow.png" alt="What it will take to build tomorrow: 15 to 50 million additional tons of aggregates, 3 to 10 million additional cubic yards of ready-mix concrete, and 1 to 3 million additional tons of cement over the next decade alone" width={2752} height={1536} style={{ width: '100%', height: 'auto' }} sizes="(max-width:700px) 90vw, 1000px" />
        </figure>
      </article>
    </div>
  );
}
