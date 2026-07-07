'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/fueling-growth', label: 'Texas is Growing' },
  { href: '/jobs', label: 'Economic Impact' },
  { href: '/responsible', label: 'Responsible Operations' },
  { href: '/local-sourcing', label: 'Local Sourcing' },
  { href: '/quality', label: 'Quality of Life' },
];

// Items grouped under the red "Learn More" dropdown (desktop).
const LEARN_MORE_LINKS = [
  { href: '/take-action', label: 'Take Action' },
  { href: '/insights', label: 'News & Insights' },
  { href: '/contact', label: 'Contact' },
];

const MENU_LINKS = [
  { href: '/fueling-growth', label: 'Texas is Growing' },
  { href: '/jobs', label: 'Economic Impact' },
  { href: '/responsible', label: 'Responsible Operations' },
  { href: '/local-sourcing', label: 'Why Local Sourcing Matters' },
  { href: '/quality', label: 'Quality of Life' },
  { href: '/insights', label: 'News & Insights' },
  { href: '/contact', label: 'Contact' },
];

// Pages whose hero is a light wash — force the nav to its solid dark background
// from the top so the white nav text stays legible (rather than transparent).
const SOLID_NAV_ROUTES = new Set(['/jobs', '/responsible']);

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solid = scrolled || SOLID_NAV_ROUTES.has(pathname);

  // nav background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile menu and the "Learn More" dropdown whenever the route changes
  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav id="main-nav" className={solid ? 'scrolled' : ''}>
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
        <div
          className={'nav-cta-wrap' + (menuOpen ? ' open' : '')}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
          onFocus={() => setMenuOpen(true)}
          onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setMenuOpen(false); }}
        >
          <button type="button" className="nav-cta" aria-haspopup="true" aria-expanded={menuOpen}>
            Learn More<span className="nav-cta-caret" aria-hidden="true">▾</span>
          </button>
          <div className="nav-cta-menu" role="menu">
            {LEARN_MORE_LINKS.map((l) => (
              <Link key={l.href} href={l.href} role="menuitem" className={pathname === l.href ? 'active' : ''} onClick={() => setMenuOpen(false)}>{l.label}</Link>
            ))}
          </div>
        </div>
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
