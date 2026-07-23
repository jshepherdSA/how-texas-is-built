'use client';

import { useEffect, useState } from 'react';

/* Fixed left-side scroll indicator for the homepage journey.
   Tracks which [data-step] section is most in view via IntersectionObserver
   and highlights it. Desktop only (hidden < 1024px via CSS).

   `steps` is an array of { name, color }; the active step's title is shown in
   its accent color. Falls back to numbered items if no steps are supplied. */
export default function StepIndicator({ steps, count = 5 }) {
  const items = steps && steps.length ? steps : Array.from({ length: count }, (_, i) => ({ name: String(i + 1), color: '#BF0A30' }));
  const [active, setActive] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-step]'));
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const ratios = new Map();
    const obs = new IntersectionObserver(
      (entries) => {
        // Key by DOM order (position), not data-step, so the highlight follows the
        // journey order even when a step's identity number differs from its position.
        entries.forEach((e) => ratios.set(sections.indexOf(e.target), e.intersectionRatio));
        let best = null;
        let bestRatio = 0;
        ratios.forEach((r, idx) => {
          if (r > bestRatio) {
            bestRatio = r;
            best = idx;
          }
        });
        if (best !== null) setActive(best + 1);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-15% 0px -15% 0px' }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Reveal the indicator when step 1's heading ("Texas Is Growing") is at least
  // 50% in view; hide it again when that heading scrolls back up out of view.
  useEffect(() => {
    const heading = document.querySelector('[data-step="1"] .step-name');
    if (!heading || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const headingObs = new IntersectionObserver(
      ([entry]) => {
        // Visible once the heading reaches 50%; stays visible while it sits above
        // the viewport (scrolled down into the steps); hidden only when it drops
        // back below the viewport (scrolling back up toward the hero).
        setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0.5 }
    );
    headingObs.observe(heading);
    return () => headingObs.disconnect();
  }, []);

  function goToStep(n) {
    // n is the journey position; scroll to the nth section in DOM order.
    const el = document.querySelectorAll('[data-step]')[n - 1];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className={`step-indicator${visible ? ' is-visible' : ''}`} aria-label="Journey progress">
      {items.map((item, i) => {
        const n = i + 1;
        return (
          <button
            key={n}
            type="button"
            className={`step-indicator-item${active === n ? ' is-active' : ''}`}
            style={{ '--item-color': item.color }}
            onClick={() => goToStep(n)}
            aria-current={active === n ? 'true' : undefined}
            aria-label={`Go to ${item.name}`}
          >
            <span className="step-indicator-line" />
            <span className="step-indicator-title">{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
}
