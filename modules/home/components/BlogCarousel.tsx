'use client';

import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import useSWR from 'swr';

import LoadingPreviewCard from '@/common/components/elements/LoadingPreviewCard';
import { BlogItem } from '@/common/types/blog';

import { useBlogViewStore } from '@/context/useBlogViewStore';

import { fetcher } from '@/services/fetcher';

import BlogPreviewCard from './BlogPreviewCard';

const BlogCarousel = () => {
  const { data, isLoading } = useSWR(`/api/blog?limit=4`, fetcher);
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
      return Array.from({ length: 2 }, (_, index) => <LoadingPreviewCard key={index} view={viewOption} />);
    }

    return blogData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <BlogPreviewCard view="grid" isExcerpt={false} isCarousel={true} {...item} />
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
