import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN || 'www.dhanyhidayat.com';
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${domain}/me`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/learn`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${domain}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.3
    },
    {
      url: `${domain}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.3
    },
    {
      url: `${domain}/about`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.3
    }
  ];
}