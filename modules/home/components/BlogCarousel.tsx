'use client';

import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import useSWR from 'swr';

import BlogCardSkeleton from '@/common/components/skeleton/BlogCardSkeleton';
import { BlogItem } from '@/common/types/blog';

import BlogCard from '@/modules/blog/components/BlogCard';

import { useBlogViewStore } from '@/context/useBlogViewStore';

import { fetcher } from '@/services/fetcher';

const BlogCarousel = () => {
  const { data, isLoading } = useSWR(`/api/blog?limit=4`, fetcher, { revalidateOnFocus: false, refreshInterval: 0 });

  const blogData: BlogItem[] = useMemo(() => {
    if (data?.status && data?.data && Array.isArray(data?.data)) {
      return data.data;
    }
    return [];
  }, [data]);

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const renderBlogCards = () => {
    if (isLoading) {
      return Array.from({ length: 3 }, (_, index) => <BlogCardSkeleton key={index} />);
    }

    return blogData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="min-w-[326px] gap-x-5"
      >
        <BlogCard {...item} />
      </motion.div>
    ));
  };

  return (
    <div className="flex gap-4 overflow-x-scroll p-1 scrollbar-hide" {...events} ref={ref}>
      {renderBlogCards()}
    </div>
  );
};

export default BlogCarousel;
