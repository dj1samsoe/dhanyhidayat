import Link from 'next/link';

import { useEffect, useState } from 'react';
import { FaRegEye as ViewIcon } from 'react-icons/fa';
import { HiOutlineArrowSmRight as ReadIcon } from 'react-icons/hi';
import { TbMessage2 as CommentIcon } from 'react-icons/tb';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { PLACEHOLDER_URL } from '@/common/constant';
import { formatBlogSlug, formatDate } from '@/common/helpers';
import clsxm from '@/common/libs/clsxm';
import { BlogItem } from '@/common/types/blog';

import useIsMobile from '@/hooks/useIsMobile';

interface BlogCardProps extends BlogItem {
  view?: string;
  isExcerpt?: boolean;
  isCarousel?: boolean;
}

const BlogCard = ({
  id,
  title,
  cover_image,
  published_at,
  description,
  page_views_count,
  slug,
  comments_count,
  view = 'list',
  isExcerpt = true,
  isCarousel = false
}: BlogCardProps) => {
  const [viewOption, setViewOption] = useState<string>(view);

  const isMobile = useIsMobile();

  const newSlug = formatBlogSlug(slug);

  const trimmedTitle = viewOption === 'grid' ? title.slice(0, 70) + (title.length > 70 ? '...' : '') : title;
  const trimmedContent = description.slice(0, 75) + (description.length > 75 ? '...' : '');

  const contentContainerClasses = clsxm(
    'flex flex-col w-full sm:w-4/5 flex-grow space-y-3 px-5 sm:p-0 mb-5 sm:mb-0',
    view === 'grid' ? 'sm:w-full sm:!px-6' : '!pr-6'
  );

  useEffect(() => {
    isMobile ? setViewOption('grid') : setViewOption(view);
  }, [isMobile, view]);

  return (
    <Link href={`/blog/${newSlug}?id=${id}`}>
      <Card
        className={clsxm(
          'group relative flex items-center sm:flex-row gap-6 cursor-pointer border border-neutral-300 dark:border-neutral-900 bg-neutral-100 dark:bg-[#4949492e] lg:hover:scale-[102%] w-full',
          viewOption === 'grid' ? '!flex-col sm:h-[350px] w-full' : '!flex-row',
          isCarousel && 'min-w-[350px]',
          !isExcerpt && 'sm:h-[300px]'
        )}
      >
        <div className="w-fit relative">
          <Image
            src={cover_image || PLACEHOLDER_URL}
            width={400}
            height={100}
            alt={title}
            className={clsxm(
              'sm:rounded-xl',
              viewOption === 'grid'
                ? '!rounded-t-xl !rounded-b-none object-cover'
                : 'h-[150px] w-[450px] !rounded-r-none object-cover'
            )}
          />
          {viewOption === 'grid' && (
            <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium">
              <span>Read Article</span>
              <ReadIcon size={20} />
            </div>
          )}
        </div>
        <article className={contentContainerClasses}>
          <h3 className="md:text-[17px] font-medium text-neutral-600 dark:text-neutral-200 lg:group-hover:text-green-800 dark:group-hover:text-green-400 transition-all duration-300">
            {trimmedTitle}
          </h3>
          <div className="flex gap-3 text-neutral-600 dark:text-neutral-400">
            <div className="flex gap-1 items-center ">
              <span className="text-xs">{formatDate(published_at, 'MMM dd, yyyy')}</span>
            </div>
            <div className="flex gap-1 items-center">
              <ViewIcon size={14} />
              <span className="text-xs ml-0.5">{page_views_count} Views</span>
            </div>
            <div className="flex gap-1 items-center">
              <CommentIcon size={16} />
              <span className="text-xs">
                <div className="flex gap-1">
                  <span>{comments_count}</span>
                  <span className="hidden lg:block">Comment{comments_count > 1 && 's'}</span>
                </div>
              </span>
            </div>
          </div>
          {isExcerpt && (
            <p className="hidden sm:block leading-relaxed text-sm text-neutral-600 dark:text-neutral-400">
              {trimmedContent}
            </p>
          )}
        </article>
      </Card>
    </Link>
  );
};

export default BlogCard;
