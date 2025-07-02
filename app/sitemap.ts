import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const now = new Date().toISOString();
  const paths = [
    '/services/internal-arbitration',
    '/services/data-encryption',
    '/services/fraud-prevention'
  ];

  const sitemapEntries = paths
    .map((path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${now}</lastmod>
      </url>
    `)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapEntries}
  </urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
