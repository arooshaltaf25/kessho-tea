// Single source of truth for the catalog. In a real deployment this would
// come from a CMS or API — kept as a static module here so the whole app
// works with zero backend and zero external image requests.

export const categories = [
  { slug: 'green', name: 'Green', blurb: 'Grassy, steamed, quick to steep.' },
  { slug: 'oolong', name: 'Oolong', blurb: 'Half-oxidized, floral, forgiving.' },
  { slug: 'black', name: 'Black', blurb: 'Fully oxidized, malty, bold.' },
  { slug: 'herbal', name: 'Herbal', blurb: 'No caffeine, whole-plant infusions.' },
];

export const products = [
  {
    slug: 'dragon-well',
    name: 'Dragon Well',
    category: 'green',
    origin: 'Hangzhou, China',
    price: 14,
    weight: '50g',
    steepTimeSec: 90,
    steepTempC: 80,
    notes: 'Pan-fired, chestnut-sweet, flat hand-pressed leaves.',
    accent: '#7c8b6f',
  },
  {
    slug: 'gyokuro',
    name: 'Gyokuro',
    category: 'green',
    origin: 'Uji, Japan',
    price: 22,
    weight: '40g',
    steepTimeSec: 150,
    steepTempC: 60,
    notes: 'Shade-grown for three weeks, deep umami, almost savory.',
    accent: '#5c7a52',
  },
  {
    slug: 'milk-oolong',
    name: 'Milk Oolong',
    category: 'oolong',
    origin: 'Nantou, Taiwan',
    price: 18,
    weight: '50g',
    steepTimeSec: 45,
    steepTempC: 90,
    notes: 'Naturally creamy without a drop of dairy. Rolled pearls.',
    accent: '#c9a86a',
  },
  {
    slug: 'da-hong-pao',
    name: 'Da Hong Pao',
    category: 'oolong',
    origin: 'Wuyi Mountains, China',
    price: 26,
    weight: '50g',
    steepTimeSec: 60,
    steepTempC: 95,
    notes: 'Rock oolong, mineral and roasted, holds five infusions.',
    accent: '#a9713f',
  },
  {
    slug: 'assam-gold',
    name: 'Assam Gold',
    category: 'black',
    origin: 'Assam, India',
    price: 13,
    weight: '100g',
    steepTimeSec: 240,
    steepTempC: 100,
    notes: 'Golden-tipped, malty enough to stand up to milk.',
    accent: '#b5654a',
  },
  {
    slug: 'keemun',
    name: 'Keemun',
    category: 'black',
    origin: 'Anhui, China',
    price: 16,
    weight: '75g',
    steepTimeSec: 210,
    steepTempC: 95,
    notes: 'Winey, slightly smoky, the backbone of English Breakfast.',
    accent: '#4a2a1d',
  },
  {
    slug: 'chamomile-honeybush',
    name: 'Chamomile Honeybush',
    category: 'herbal',
    origin: 'Egypt & South Africa',
    price: 12,
    weight: '60g',
    steepTimeSec: 300,
    steepTempC: 100,
    notes: 'Whole chamomile flowers, naturally sweet honeybush base.',
    accent: '#d9b568',
  },
  {
    slug: 'peppermint-nettle',
    name: 'Peppermint Nettle',
    category: 'herbal',
    origin: 'Washington State, USA',
    price: 11,
    weight: '60g',
    steepTimeSec: 300,
    steepTempC: 100,
    notes: 'Farm-grown mint, sharp and clean, mineral finish from nettle.',
    accent: '#6f8f6a',
  },
];

export function getProductsByCategory(slug) {
  return products.filter((p) => p.category === slug);
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
