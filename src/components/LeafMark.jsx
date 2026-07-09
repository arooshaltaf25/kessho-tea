// Every product needs a visual, but real photography isn't available in
// this environment and would be the heaviest asset on the page anyway.
// Instead each product gets a small deterministic leaf glyph rendered in
// its own accent color — zero bytes over the wire beyond the SVG markup
// that's already part of the JS bundle, and it scales infinitely.

export default function LeafMark({ accent = '#7c8b6f', size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <rect width="120" height="120" rx="4" fill={accent} opacity="0.12" />
      <path
        d="M60 96C60 96 30 78 30 48C30 30 44 18 60 18C76 18 90 30 90 48C90 78 60 96 60 96Z"
        fill={accent}
        opacity="0.85"
      />
      <path d="M60 96V30" stroke="#f6f1e7" strokeWidth="2" opacity="0.6" />
      <path d="M60 50L44 40" stroke="#f6f1e7" strokeWidth="1.5" opacity="0.5" />
      <path d="M60 65L76 55" stroke="#f6f1e7" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}
