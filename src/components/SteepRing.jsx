// The catalog's signature element. Instead of star ratings (which don't mean
// anything for tea), every product shows the one number that actually
// changes how you'd use it: how long to steep it. The ring's fill fraction
// is scaled against the longest steep time in the catalog (5 min) so ring
// size is comparable across products at a glance.

const MAX_STEEP_SEC = 300;

export default function SteepRing({ seconds, tempC, size = 56, accent = '#b5654a' }) {
  const r = (size - 8) / 2;
  const circumference = 2 * Math.PI * r;
  const fraction = Math.min(seconds / MAX_STEEP_SEC, 1);
  const offset = circumference * (1 - fraction);
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const label = mins > 0 ? `${mins}:${String(secs).padStart(2, '0')}` : `${secs}s`;

  return (
    <div
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
      role="img"
      aria-label={`Steep for ${label} at ${tempC} degrees Celsius`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--line)"
          strokeWidth="3"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x="50%"
          y="52%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-mono)"
          fontSize={size * 0.2}
          fill="var(--pine)"
        >
          {label}
        </text>
      </svg>
      <span className="eyebrow">{tempC}°C</span>
    </div>
  );
}
