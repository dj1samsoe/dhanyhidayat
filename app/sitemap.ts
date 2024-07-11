import { MetadataRoute } from 'next';

import axios from 'axios';

import { prisma } from '@/common/libs/prisma';

const fetchBlogData = async () => {
  const DEV_TO_URL = 'https://dev.to/api/articles/me/all';
  try {
    const response = await axios.get(DEV_TO_URL, {
      headers: {
        'api-key': process.env.DEVTO_KEY
      }
    });
    const data = await response.data.map((article: { slug: string }) => article.slug);

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchProjectSlugs = async () => {
  const projects = await prisma.projects.findMany({
    select: { slug: true }
  });
  return projects.map(project => project.slug);
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = process.env.DOMAIN || 'https://www.dhanyhidayat.my.id/';

  const blogSlugs = await fetchBlogData();
  const blogDetailUrls = blogSlugs.map((slug: string) => ({
    url: `${domain}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  const projectSlugs = await fetchProjectSlugs();
  const projectDetailUrls = projectSlugs.map(slug => ({
    url: `${domain}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.4
  }));

  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${domain}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    ...blogDetailUrls,
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
      priority: 0.5
    },
    {
      url: `${domain}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.4
    },
    ...projectDetailUrls,
    {
      url: `${domain}/about`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.3
    },
    {
      url: `${domain}/contact`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.2
    }
  ];
}
