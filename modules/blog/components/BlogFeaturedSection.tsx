import React, { useMemo } from 'react';
import useSWR from 'swr';

import BlogCardSkeleton from '@/common/components/skeleton/BlogCardSkeleton';
import { BlogItem } from '@/common/types/blog';

import { fetcher } from '@/services/fetcher';

import BlogFeaturedHero from './BlogFeaturedHero';

const BlogFeaturedSection = () => {
  const { data, isLoading } = useSWR(`/api/filteredBlog`, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 0
  });

  const featuredData: BlogItem[] = useMemo(() => {
    if (data?.status && data?.data && Array.isArray(data?.data)) {
      return data.data;
    }
    return [];
  }, [data]);

  return <>{!isLoading ? <BlogFeaturedHero data={featuredData} /> : <BlogCardSkeleton />}</>;
};

export default BlogFeaturedSection;
