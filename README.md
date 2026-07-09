# Kessho Tea — Web Development Capstone

A loose-leaf tea product catalog. React + Vite + React Router, deployable as a
static SPA to Vercel, Netlify, or Render.

Live catalog features: category browsing, product detail pages, and a cart —
all client-routed with no page reloads.

## Architecture

```
src/
  main.jsx              entry point, mounts <App /> in <BrowserRouter>
  App.jsx                route table, lazy-loads every page
  data/products.js       single source of truth for catalog data
  components/
    CartContext.jsx       cart state, shared via React Context
    Header.jsx / .css     nav + cart count
    Footer.jsx
    ProductCard.jsx        reused on Home + Category
    SteepRing.jsx           signature SVG dial (steep time/temp)
    LeafMark.jsx           generative per-product SVG art (no image files)
  routes/
    Home.jsx / .css
    Category.jsx
    Product.jsx
    Cart.jsx
    About.jsx
    NotFound.jsx
```

**Why it's modular:** every route is a self-contained file that only imports
what it needs from `data/` and `components/`. Cart state lives in one context
provider so any component can read or update it without prop-drilling.
Product data is one array in `data/products.js` — add a product there and it
automatically appears on Home, its category page, and its own detail page.

**Client-side routing:** `react-router-dom` handles `/`, `/category/:slug`,
`/product/:slug`, `/cart`, `/about`, and a catch-all 404 — all navigation is
instant, no full page reload.

**Asset optimization:**
- Every route (`Home`, `Category`, `Product`, `Cart`, `About`) is loaded with
  `React.lazy()`, so Vite code-splits each into its own chunk. A first visit
  to `/` only downloads the Home chunk, not the Cart or Product code.
- `vite.config.js` separates React/Router into a `vendor` chunk so it can be
  cached independently of app code that changes on every deploy.
- Product art is generated inline SVG (`LeafMark.jsx`), not photography —
  zero image requests, infinitely scalable, near-zero bytes.
- Production build uses esbuild minification for JS and CSS (Vite's
  default), which `npm run build` applies automatically.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Output goes to `dist/`.

## Deploy

### Vercel (recommended, used for this project)
1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`
   — Vercel detects these automatically.
4. Deploy. `vercel.json` in this repo already adds the SPA rewrite so
   `/category/green` works on a hard refresh, not just via in-app navigation.

### Netlify
1. Push to GitHub, then "Add new site" → "Import an existing project".
2. Build command `npm run build`, publish directory `dist`.
3. `public/_redirects` (already included) handles the SPA fallback.

### Render
1. New "Static Site", connect the repo.
2. Build command `npm run build`, publish directory `dist`.
3. Add a rewrite rule `/* → /index.html` (200) in Render's dashboard for SPA
   routing.

## What to note in your internship writeup
- Modular architecture: `components/` vs `routes/` vs `data/` separation.
- Client-side routing via React Router, including a catch-all 404 route.
- Performance: route-level code-splitting, vendor chunking, zero external
  image weight.
- Live URL: add it here once deployed, e.g. `https://kessho-tea.vercel.app`.
