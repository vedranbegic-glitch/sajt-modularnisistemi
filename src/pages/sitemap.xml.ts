import type { APIRoute } from 'astro';
import { CATEGORIES_DATA } from '../data/products';

const SITE_URL = 'https://modularnisistemi.com';

// Samo stranice koje treba da budu u pretrazi (bez /hvala/ i /404/)
const staticRoutes = [
  '/',
  '/proizvodi/',
  '/inox-sistemi-odvodnjavanja/',
  '/moderna-rasveta/',
  '/modularni-podni-sistemi/',
  '/fire-pit-grill/',
  '/galerija/',
  '/o-nama/',
  '/partneri/',
  '/kontakt/',
  '/posaljite-upit/',
];

// Ravna kanalica se dodaje u [slug].astro, pa je dodajemo i ovde
const EXTRA_INOX_IDS = ['ravni-modularni-inox-kanal'];

// Podstranice podnih sistema (src/pages/modularni-podni-sistemi/[slug].astro)
// Ako se doda novi tip poda, dodaj njegov slug i ovde.
const PODNI_IDS = [
  'eco-green-monoblok',
  'wpc-compound-monoblok',
  'gres-premium-monoblok',
  'heavy-duty-monoblok',
];

export const GET: APIRoute = async () => {
  const inoxSubtypes = CATEGORIES_DATA.inox.subtypes;

  // Spaja ID-jeve iz podataka sa dodatnim, bez duplikata
  const inoxIds = Array.from(
    new Set([...EXTRA_INOX_IDS, ...inoxSubtypes.map((item) => item.id)])
  );

  const dynamicInoxRoutes = inoxIds.map(
    (id) => `/inox-sistemi-odvodnjavanja/${id}/`
  );

  const dynamicPodniRoutes = PODNI_IDS.map(
    (id) => `/modularni-podni-sistemi/${id}/`
  );

  const allUrls = [...staticRoutes, ...dynamicInoxRoutes, ...dynamicPodniRoutes];

  // Google ignoriše priority i changefreq, a netačan lastmod mu umanjuje poverenje,
  // pa sitemap sadrži samo adrese.
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n  </url>`)
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
