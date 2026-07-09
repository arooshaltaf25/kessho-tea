import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="wrap section" style={{ textAlign: 'center', padding: '96px 0' }}>
      <h1 style={{ fontSize: '3rem' }}>Steeped too long.</h1>
      <p style={{ color: 'var(--sage)', margin: '10px 0 24px' }}>
        That page went bitter. It doesn't exist.
      </p>
      <Link to="/" className="btn btn--primary">
        Back to the catalog
      </Link>
    </div>
  );
}
