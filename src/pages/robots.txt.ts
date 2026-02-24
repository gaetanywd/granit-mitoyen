import type { APIRoute } from 'astro';

const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? 'https://granitmitoyen.com';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', siteUrl).toString()}
`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};

