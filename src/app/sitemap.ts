import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { routing } from '@/i18n/routing';
import { ARTICLES_DATA } from '@/features/insights/insights-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain.replace(/\/$/, '');
  const locales = routing.locales; // ['en', 'hi', 'pa']

  // Base routes
  const baseRoutes = [
    '',
    '/about',
    '/courts',
    '/practice-areas',
    '/insights',
    '/contact',
    '/disclaimer',
    '/privacy-policy',
    '/terms',
  ];

  // Practice area detail routes
  const practiceRoutes = SITE_CONFIG.practiceAreas.map(
    (pa) => `/practice-areas/${pa.slug}`
  );

  // Insight detail routes
  const insightRoutes = ARTICLES_DATA.map(
    (art) => `/insights/${art.slug}`
  );

  const allPaths = [...baseRoutes, ...practiceRoutes, ...insightRoutes];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const path of allPaths) {
    for (const locale of locales) {
      // Build alternates for this path
      const languages: Record<string, string> = {};
      for (const l of locales) {
        languages[l] = `${baseUrl}/${l}${path}`;
      }
      languages['x-default'] = `${baseUrl}/en${path}`;

      let priority = 0.7;
      let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'monthly';

      if (path === '') {
        priority = 1.0;
        changeFrequency = 'weekly';
      } else if (path === '/practice-areas' || path === '/contact') {
        priority = 0.9;
        changeFrequency = 'weekly';
      } else if (path.startsWith('/practice-areas/')) {
        priority = 0.85;
      } else if (path.startsWith('/insights')) {
        priority = 0.8;
      } else if (path === '/courts' || path === '/about') {
        priority = 0.75;
      } else {
        priority = 0.3; // legal disclaimers
      }

      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages,
        },
      });
    }
  }

  return sitemapEntries;
}
