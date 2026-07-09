export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', marginTop: 80 }}>
      <div
        className="wrap"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          padding: '28px 0',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--sage)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}
      >
        <span>Kessho Tea — capstone project</span>
        <span>Steeped, not brewed. Built with React + Vite.</span>
      </div>
    </footer>
  );
}
