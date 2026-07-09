import { NavLink } from 'react-router-dom';
import { categories } from '../data/products';
import { useCart } from './CartContext';
import './Header.css';

export default function Header() {
  const { count } = useCart();

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <NavLink to="/" className="site-header__mark">
          <span className="site-header__mark-glyph">桂</span>
          <span>
            <strong>Kessho</strong> Tea
          </span>
        </NavLink>

        <nav className="site-header__nav" aria-label="Categories">
          {categories.map((c) => (
            <NavLink
              key={c.slug}
              to={`/category/${c.slug}`}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              {c.name}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/cart" className="site-header__cart">
          Cart
          <span className="site-header__cart-count">{count}</span>
        </NavLink>
      </div>
    </header>
  );
}
