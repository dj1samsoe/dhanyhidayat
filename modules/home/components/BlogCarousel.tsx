'use client';

import { fetcher } from '@/services/fetcher';
import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import useSWR from 'swr';

import LoadingCard from '@/common/components/elements/LoadingCard';
import { BlogItem } from '@/common/types/blog';

import BlogCard from '@/modules/blog/components/BlogCard';

import { useBlogViewStore } from '@/context/useBlogViewStore';

const BlogCarousel = () => {
  const { data, isLoading } = useSWR(`/api/blog?page=1&per_page=4`, fetcher);
  const { viewOption } = useBlogViewStore();

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
      return Array.from({ length: 3 }, (_, index) => <LoadingCard key={index} view={viewOption} />);
    }

    return blogData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <BlogCard view="grid" isExcerpt={false} isCarousel={true} {...item} />
      </motion.div>
    ));
  };

  return (
    <div className="flex p-1 gap-4 overflow-x-scroll scrollbar-hide" {...events} ref={ref}>
      {renderBlogCards()}
    </div>
  );
};

export default BlogCarousel;
