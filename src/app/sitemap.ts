import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

const BASE = 'https://tjlabs.no';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                              lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/en`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/portfolio`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/en/portfolio`,            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,                    lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/en/blog`,                 lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/tjenester`,               lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/en/tjenester`,            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tjenester/nettside`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/en/tjenester/nettside`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tjenester/webapplikasjon`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/en/tjenester/webapplikasjon`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/tjenester/elektronikk`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/en/tjenester/elektronikk`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/tjenester/3d-printing`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/en/tjenester/3d-printing`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.flatMap((post) => [
    {
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE}/en/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]);

  return [...staticRoutes, ...postRoutes];
}
