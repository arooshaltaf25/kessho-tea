import { useParams, Link, Navigate } from 'react-router-dom';
import { categories, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Category() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) return <Navigate to="/404" replace />;

  const items = getProductsByCategory(slug);

  return (
    <div className="wrap section">
      <nav className="eyebrow" style={{ marginBottom: 8 }}>
        <Link to="/">Catalog</Link> / {category.name}
      </nav>
      <div className="section__head">
        <div>
          <h2>{category.name}</h2>
          <p style={{ color: 'var(--sage)', marginTop: 4 }}>{category.blurb}</p>
        </div>
      </div>
      <div className="product-grid">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
