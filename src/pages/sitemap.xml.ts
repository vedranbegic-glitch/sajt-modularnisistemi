import type { APIRoute } from 'astro';
import { CATEGORIES_DATA } from '../data/products';

const SITE_URL = 'https://modularnisistemi.com';

const staticRoutes = [
  '',
  '/proizvodi/',
  '/inox-sistemi-odvodnjavanja/',
  '/moderna-rasveta/',
  '/modularni-podni-sistemi/',
  '/galerija/',
  '/o-nama/',
  '/partneri/',
  '/kontakt/',
  '/posaljite-projekat/',
];

// Ravna kanalica se dodaje u [slug].astro, pa je dodajemo i ovde
const EXTRA_INOX_IDS = ['ravni-modularni-inox-kanal'];

export const GET: APIRoute = async () => {
  const inoxSubtypes = CATEGORIES_DATA.inox.subtypes;

  // Spaja ID-jeve iz podataka sa dodatnim, bez duplikata
  const inoxIds = Array.from(
    new Set([...EXTRA_INOX_IDS, ...inoxSubtypes.map((item) => item.id)])
  );

  const dynamicInoxRoutes = inoxIds.map(
    (id) => `/inox-sistemi-odvodnjavanja/${id}/`
  );

  const allUrls = [...staticRoutes, ...dynamicInoxRoutes];

  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((path) => {
    const loc = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
    const priority = path === '' ? '1.0' : path.includes('/[slug]') ? '0.7' : '0.8';
    const changefreq = path === '' ? 'weekly' : 'monthly';

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
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