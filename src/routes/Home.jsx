import { Link } from 'react-router-dom';
import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="wrap hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">Small-batch loose-leaf</span>
            <h1>
              Every tea has a moment.
              <br />
              We tell you the second.
            </h1>
            <p className="hero__lede">
              No star ratings — those don't tell you anything about tea. Instead, every
              leaf ships with its own steep ring: exact time, exact temperature, right
              on the card.
            </p>
            <div className="hero__actions">
              <Link to="/category/green" className="btn btn--primary">
                Shop the catalog
              </Link>
              <Link to="/about" className="btn btn--ghost">
                Why steep rings?
              </Link>
            </div>
          </div>
          <div className="hero__dial" aria-hidden="true">
            <svg viewBox="0 0 220 220" width="220" height="220">
              <circle cx="110" cy="110" r="96" fill="none" stroke="var(--line)" strokeWidth="2" />
              <circle
                cx="110"
                cy="110"
                r="96"
                fill="none"
                stroke="var(--clay)"
                strokeWidth="2"
                strokeDasharray="8 10"
              />
              <text
                x="110"
                y="104"
                textAnchor="middle"
                fontFamily="var(--font-display)"
                fontSize="34"
                fill="var(--pine)"
              >
                90s
              </text>
              <text
                x="110"
                y="128"
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="12"
                fill="var(--sage)"
              >
                80°C · DRAGON WELL
              </text>
            </svg>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section__head">
          <h2>Categories</h2>
        </div>
        <div className="cat-grid">
          {categories.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="cat-card">
              <h3>{c.name}</h3>
              <p>{c.blurb}</p>
              <span className="cat-card__arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="section__head">
          <h2>Recently steeped</h2>
          <Link to="/category/green" className="section__more">
            View all →
          </Link>
        </div>
        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
