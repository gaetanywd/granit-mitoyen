import type { APIRoute } from 'astro';

const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? 'https://granitmitoyen.com';

// Liste des pages importantes FR/EN à exposer dans le sitemap.
const routes = [
  '/',
  '/presentation',
  '/killbirgahn',
  '/shows',
  '/medias',
  '/contact',
  '/en/',
  '/en/presentation',
  '/en/killbirgahn',
  '/en/shows',
  '/en/medias',
  '/en/contact',
];

export const GET: APIRoute = () => {
  const urls = routes
    .map((path) => {
      const loc = new URL(path, siteUrl).toString();
      return `<url><loc>${loc}</loc></url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

