import fs from 'fs';
import path from 'path';

const siteUrl = 'https://avzkitchen.com';
const routes = [
  '/',
  '/de',
  '/portfolio',
  '/de/portfolio',
  '/bio',
  '/de/bio',
  '/services',
  '/de/services',
  '/services/quick-ux-audit',
  '/de/services/quick-ux-audit',
  '/services/amazon',
  '/de/services/amazon',
  '/services/shopify-ux-design',
  '/de/services/shopify-ux-design',
  '/services/shopify-ux-audit',
  '/de/services/shopify-ux-audit',
  '/services/accessibility-audit',
  '/de/services/accessibility-audit',
  '/services/landing-page-design',
  '/de/services/landing-page-design',
  '/contact',
  '/de/contact',
  '/productdesign',
  '/de/productdesign',
  '/resume',
  '/de/resume',
  '/legal',
  '/de/legal',
  '/data',
  '/de/data'
];

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = `${siteUrl}${route === '/' ? '' : route}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>`;
  })
  .join('\n')}
</urlset>
`;

const outputPath = path.resolve('public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Sitemap generated with ${routes.length} URLs at ${outputPath}`);
