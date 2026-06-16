// WaterRecycledDonut — homepage "Responsible Operations" step (data-step 4).
// Replaces the "Modern facilities recycle 80–90% of their water" text stat with a
// pure-SVG donut. pathLength="100" lets the stroke-dasharray values BE the
// percentages, so the three arcs are 80 / 10 / (10 unfilled) with no float math.
//   · 80% recycled  → step accent green (#22C55E)
//   · 10% potential → grey (#9CA3AF), the extra needed to reach 90%
//   · 10% discharged→ unfilled (faint track shows through on the dark section)

const GREEN = '#22C55E';
const GREY = '#9CA3AF';

export default function WaterRecycledDonut() {
  return (
    <div className="water-donut reveal">
      <div className="wd-chart">
        <svg className="wd-svg" viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
          <g transform="rotate(-90 60 60)" fill="none" strokeWidth="16">
            {/* faint full ring — the unfilled 10% reads as this subtle track */}
            <circle cx="60" cy="60" r="52" stroke="rgba(255,255,255,.12)" />
            {/* 80% recycled */}
            <circle cx="60" cy="60" r="52" stroke={GREEN} pathLength="100"
                    strokeDasharray="80 100" strokeDashoffset="0" />
            {/* +10% potential recovery (80 → 90) */}
            <circle cx="60" cy="60" r="52" stroke={GREY} pathLength="100"
                    strokeDasharray="10 100" strokeDashoffset="-80" />
          </g>
        </svg>
        <div className="wd-center">
          <span className="wd-pct">80&ndash;90%</span>
          <span className="wd-cap">water recycled</span>
        </div>
      </div>

      <ul className="wd-legend">
        <li><span className="wd-dot wd-dot--green" />Water recycled (80&ndash;90%)</li>
        <li><span className="wd-dot wd-dot--grey" />Potential recovery</li>
        <li><span className="wd-dot wd-dot--empty" />Discharged</li>
      </ul>
    </div>
  );
}
