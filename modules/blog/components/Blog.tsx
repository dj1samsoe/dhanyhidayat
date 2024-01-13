'use client';

import { fetcher } from '@/services/fetcher';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import useSWR from 'swr';

import EmptyState from '@/common/components/elements/EmptyState';
import LoadingCard from '@/common/components/elements/LoadingCard';
import { BlogItem } from '@/common/types/blog';

import { useBlogViewStore } from '@/context/useBlogViewStore';

import useIsMobile from '@/hooks/useIsMobile';

import BlogCard from './BlogCard';
import BlogListHeader from './BlogListHeader';
import Pagination from './Pagination';

type BlogList = {
  showHeader?: boolean;
  showPagination?: boolean;
  perPage?: number;
};

const Blog = ({ perPage = 6, showHeader = true, showPagination = true }: BlogList) => {
  const isMobile = useIsMobile();

  const { viewOption, setViewOption } = useBlogViewStore();

  const [page, setPage] = useState<number>(1);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [pageSize, setPageSize] = useState<number>(perPage);

  const { data, isLoading } = useSWR(`/api/blog?page=${page}&per_page=${pageSize}`, fetcher);

  const blogData: BlogItem[] = useMemo(() => {
    if (data?.status && data?.data && Array.isArray(data?.data)) {
      return data.data;
    }
    return [];
  }, [data]);

  const handleNextPage = () => {
    setPage(page + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) return <LoadingCard view={viewOption} />;

  if (!isLoading && blogData.length === 0) {
    return <EmptyState message="No Data" />;
  }

  return (
    <>
      {showHeader && !isMobile && <BlogListHeader viewOption={viewOption} setViewOption={setViewOption} />}

      <div
        className={clsx(
          'gap-5 sm:gap-4',
          viewOption === 'list' || isMobile ? 'flex flex-col' : 'grid grid-cols-2 sm:!gap-5'
        )}
      >
        {blogData?.map((item: BlogItem, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <BlogCard view={viewOption} {...item} />
          </motion.div>
        ))}
      </div>

      {showPagination && (
        <Pagination
          page={page}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          blogData={blogData}
          pageSize={pageSize}
        />
      )}
    </>
  );
};

export default Blog;
