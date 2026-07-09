import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

// Route-level code splitting: each page ships as its own chunk, so a first
// visit only downloads Home + shared vendor code. Product/Cart/About only
// load when the visitor actually navigates there.
const Home = lazy(() => import('./routes/Home'));
const Category = lazy(() => import('./routes/Category'));
const Product = lazy(() => import('./routes/Product'));
const Cart = lazy(() => import('./routes/Cart'));
const About = lazy(() => import('./routes/About'));
const NotFound = lazy(() => import('./routes/NotFound'));

function RouteFallback() {
  return (
    <div className="wrap section" style={{ color: 'var(--sage)', fontFamily: 'var(--font-mono)' }}>
      Steeping…
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </CartProvider>
  );
}
