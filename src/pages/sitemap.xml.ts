import type { APIRoute } from 'astro';

type LocalizedRoute = {
  fr: string;
  en: string;
};

// Sitemap statique et simple.
// Le site a peu de pages, donc une liste explicite reste lisible et fiable.
const localizedRoutes: LocalizedRoute[] = [
  { fr: '/', en: '/en/' },
  { fr: '/medias', en: '/en/medias' },
  { fr: '/shows', en: '/en/shows' },
  { fr: '/presentation', en: '/en/presentation' },
  { fr: '/discographie', en: '/en/discographie' },
  { fr: '/killbirgahn', en: '/en/killbirgahn' },
  { fr: '/contact', en: '/en/contact' },
];

const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? 'https://granitmitoyen.com';

function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

function buildUrlEntry(path: string, alternatePath: string, locale: 'fr' | 'en'): string {
  const currentUrl = absoluteUrl(path);
  const frUrl = absoluteUrl(locale === 'fr' ? path : alternatePath);
  const enUrl = absoluteUrl(locale === 'en' ? path : alternatePath);
  const defaultUrl = frUrl;

  return [
    '  <url>',
    `    <loc>${currentUrl}</loc>`,
    `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />`,
    '  </url>',
  ].join('\n');
}

export const GET: APIRoute = () => {
  const urlEntries = localizedRoutes.flatMap((route) => [
    buildUrlEntry(route.fr, route.en, 'fr'),
    buildUrlEntry(route.en, route.fr, 'en'),
  ]);

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlEntries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

