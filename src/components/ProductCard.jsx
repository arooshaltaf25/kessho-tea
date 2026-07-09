import { Link } from 'react-router-dom';
import LeafMark from './LeafMark';
import SteepRing from './SteepRing';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="product-card">
      <div className="product-card__art" style={{ background: `${product.accent}1f` }}>
        <LeafMark accent={product.accent} size={72} />
      </div>
      <div className="product-card__body">
        <span className="eyebrow">{product.origin}</span>
        <h3>{product.name}</h3>
        <p className="product-card__notes">{product.notes}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${product.price}</span>
          <SteepRing
            seconds={product.steepTimeSec}
            tempC={product.steepTempC}
            accent={product.accent}
            size={44}
          />
        </div>
      </div>
    </Link>
  );
}
