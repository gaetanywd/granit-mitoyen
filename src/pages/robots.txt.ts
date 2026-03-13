import type { APIRoute } from 'astro';

// Ce fichier garde l'URL du sitemap synchronisee avec le domaine public.
// Cela evite un robots.txt fige si le domaine change plus tard.
const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? 'https://granitmitoyen.com';

export const GET: APIRoute = () => {
  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap.xml', siteUrl).toString()}`,
  ].join('\n');

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

