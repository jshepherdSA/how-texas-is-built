'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/fueling-growth', label: "Fueling Texas' Growth" },
  { href: '/jobs', label: 'Jobs & Economic Impact' },
  { href: '/responsible', label: 'Responsible Operations' },
  { href: '/local-sourcing', label: 'Local Sourcing' },
  { href: '/quality', label: 'Quality of Life' },
  { href: '/insights', label: 'News & Insights' },
];

const MENU_LINKS = [
  { href: '/fueling-growth', label: "Fueling Texas' Growth" },
  { href: '/jobs', label: 'Jobs & Economic Impact' },
  { href: '/responsible', label: 'Responsible Operations' },
  { href: '/local-sourcing', label: 'Why Local Sourcing Matters' },
  { href: '/quality', label: 'Quality of Life' },
  { href: '/insights', label: 'News & Insights' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // nav background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo">
          <Image className="nav-logo-img" src="/images/htib-logo.png" alt="How Texas Is Built" width={46} height={46} />
          <span className="nav-logo-text">How <em>Texas</em> Is Built</span>
        </Link>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/take-action" className="nav-cta">Take Action</Link>
        <button
          className={'nav-btn' + (open ? ' open' : '')}
          id="nav-btn"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div id="scrim" className={open ? 'open' : ''} onClick={() => setOpen(false)}></div>

      <ul id="menu" className={open ? 'open' : ''}>
        {MENU_LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={pathname === l.href ? 'active' : ''}>{l.label}</Link>
          </li>
        ))}
        <li><Link href="/take-action" className="menu-cta">Take Action</Link></li>
      </ul>
    </>
  );
}
