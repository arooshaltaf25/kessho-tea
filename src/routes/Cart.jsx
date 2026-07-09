import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { getProduct } from '../data/products';
import LeafMark from '../components/LeafMark';

export default function Cart() {
  const { items, setQty, removeItem } = useCart();

  const lines = items
    .map((i) => ({ ...i, product: getProduct(i.slug) }))
    .filter((i) => i.product);

  const total = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);

  if (lines.length === 0) {
    return (
      <div className="wrap section" style={{ textAlign: 'center', padding: '96px 0' }}>
        <h2>Your cart is empty</h2>
        <p style={{ color: 'var(--sage)', margin: '10px 0 24px' }}>
          Nothing steeping yet. Go find something worth the wait.
        </p>
        <Link to="/" className="btn btn--primary">
          Browse the catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="wrap section">
      <h2 style={{ marginBottom: 24 }}>Your cart</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {lines.map(({ product, qty }) => (
          <div
            key={product.slug}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: 16,
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              background: '#fff',
            }}
          >
            <div
              style={{
                background: `${product.accent}1f`,
                borderRadius: 'var(--radius)',
                padding: 8,
              }}
            >
              <LeafMark accent={product.accent} size={48} />
            </div>
            <div style={{ flex: 1 }}>
              <Link to={`/product/${product.slug}`}>
                <strong>{product.name}</strong>
              </Link>
              <div style={{ color: 'var(--sage)', fontSize: '0.85rem' }}>
                ${product.price} / {product.weight}
              </div>
            </div>
            <input
              type="number"
              min="0"
              value={qty}
              onChange={(e) => setQty(product.slug, Number(e.target.value))}
              style={{
                width: 56,
                padding: '6px 8px',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                fontFamily: 'var(--font-mono)',
              }}
              aria-label={`Quantity for ${product.name}`}
            />
            <div style={{ fontFamily: 'var(--font-mono)', width: 64, textAlign: 'right' }}>
              ${(product.price * qty).toFixed(2)}
            </div>
            <button
              onClick={() => removeItem(product.slug)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--clay)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 24,
          marginTop: 28,
        }}
      >
        <div className="eyebrow">Total</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem' }}>
          ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
