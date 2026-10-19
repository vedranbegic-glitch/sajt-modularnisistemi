import type { APIRoute } from 'astro';
import { inoxProducts } from '../data/inoxProducts';

const SITE_URL = 'https://modularnisistemi.com';

// Javne stranice koje treba navesti u Google sitemapu.
const staticRoutes = [
  '/',
  '/proizvodi/',
  '/inox-sistemi-odvodnjavanja/',
  '/modularne-celicne-podkonstrukcije/',
  '/fire-pit-grill/',
  '/projektovanje-i-3d-modelovanje/',
  '/galerija/',
  '/o-nama/',
  '/partneri/',
  '/kontakt/',
  '/posaljite-upit/',
];

export const GET: APIRoute = async () => {
  const dynamicInoxRoutes = inoxProducts.map(
    (product) => `/inox-sistemi-odvodnjavanja/${product.slug}/`
  );

  const allUrls = Array.from(
    new Set([...staticRoutes, ...dynamicInoxRoutes])
  );

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
