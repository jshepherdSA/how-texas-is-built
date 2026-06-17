// WaterRecycledDonut — homepage "Responsible Operations" step (data-step 4).
// Replaces the "Modern facilities recycle 80–90% of their water" text stat with a
// pure-SVG donut. pathLength="100" lets the stroke-dasharray value BE the percentage.
//   · green arc → step accent green (#22C55E), the recycled portion
//   · remainder → unfilled (faint track shows through on the dark section)
//
// The SVG scales to fill its container (width/height:100%, viewBox 0 0 120 120,
// preserveAspectRatio meet → stays circular and centered). The center labels live
// INSIDE the SVG as <text>, sized in viewBox units, so they grow with the donut.

const GREEN = '#22C55E';

export default function WaterRecycledDonut() {
  return (
    <div className="water-donut reveal">
      <div className="wd-chart">
        <svg className="wd-svg" viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet"
             width="100%" height="100%" aria-hidden="true">
          <g transform="rotate(-90 60 60)" fill="none" strokeWidth="16">
            {/* faint full ring — the unfilled remainder reads as this subtle track */}
            <circle cx="60" cy="60" r="52" stroke="rgba(255,255,255,.12)" />
            {/* recycled portion */}
            <circle cx="60" cy="60" r="52" stroke={GREEN} pathLength="100"
                    strokeDasharray="80 100" strokeDashoffset="0" />
          </g>
          {/* center labels — viewBox units so they scale with the SVG */}
          <text className="wd-pct" x="60" y="57" textAnchor="middle" dominantBaseline="middle">&gt;80%</text>
          <text className="wd-cap" x="60" y="73" textAnchor="middle" dominantBaseline="middle">water recycled</text>
        </svg>
      </div>
    </div>
  );
}
