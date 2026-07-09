import { useParams, Link, Navigate } from 'react-router-dom';
import { getProduct } from '../data/products';
import { useCart } from '../components/CartContext';
import LeafMark from '../components/LeafMark';
import SteepRing from '../components/SteepRing';
import { useState } from 'react';

export default function Product() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return <Navigate to="/404" replace />;

  function handleAdd() {
    addItem(product.slug);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="wrap section">
      <nav className="eyebrow" style={{ marginBottom: 24 }}>
        <Link to="/">Catalog</Link> / <Link to={`/category/${product.category}`}>{product.category}</Link> / {product.name}
      </nav>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 40,
        }}
        className="product-detail"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `${product.accent}1f`,
            borderRadius: 'var(--radius)',
            padding: 60,
          }}
        >
          <LeafMark accent={product.accent} size={180} />
        </div>

        <div>
          <span className="eyebrow">{product.origin}</span>
          <h1 style={{ fontSize: '2.1rem', margin: '8px 0 16px' }}>{product.name}</h1>
          <p style={{ color: 'var(--sage)', maxWidth: '52ch', marginBottom: 24 }}>
            {product.notes}
          </p>

          <div style={{ display: 'flex', gap: 32, alignItems: 'center', marginBottom: 28 }}>
            <SteepRing
              seconds={product.steepTimeSec}
              tempC={product.steepTempC}
              accent={product.accent}
              size={64}
            />
            <div>
              <div className="eyebrow">Price</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem' }}>
                ${product.price} <span style={{ color: 'var(--sage)', fontSize: '0.9rem' }}>/ {product.weight}</span>
              </div>
            </div>
          </div>

          <button className="btn btn--primary" onClick={handleAdd} style={{ border: 'none' }}>
            {added ? 'Added ✓' : 'Add to cart'}
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 720px) {
          .product-detail { grid-template-columns: 1fr 1fr; align-items: center; }
        }
      `}</style>
    </div>
  );
}
