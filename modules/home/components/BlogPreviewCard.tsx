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

  const contentContainerClasses = clsxm('flex flex-col py-2 space-y-1');

  useEffect(() => {
    isMobile ? setViewOption('grid') : setViewOption(view);
  }, [isMobile, view]);

  return (
    <Link href={`/blog/${newSlug}?id=${id}`}>
      <Card
        className={clsxm(
          'group relative flex items-center sm:flex-row cursor-pointer lg:hover:scale-[102%] w-full',
          viewOption === 'grid' ? '!flex-col w-full' : '!flex-row sm:p-5 sm:px-6',
          isCarousel && 'min-w-[350px]'
        )}
      >
        <div className="w-fit relative">
          <Image
            src={cover_image || PLACEHOLDER_URL}
            width={isMobile || viewOption === 'grid' ? 400 : 240}
            height={100}
            alt={title}
            className={clsxm('rounded-lg object-contain')}
          />
          {viewOption === 'grid' && (
            <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-xl text-sm font-medium">
              <span>Read Article</span>
              <ReadIcon size={20} />
            </div>
          )}
        </div>
        <article className={contentContainerClasses}>
          <h3 className="md:text-md font-normal line-clamp-1 text-neutral-800 dark:text-neutral-200 lg:group-hover:text-green-800 dark:group-hover:text-green-400 transition-all duration-300">
            {title}
          </h3>
          <div className="flex gap-4 text-neutral-600 dark:text-neutral-400">
            <span className="text-xs">{formatDate(published_at, 'MMM dd, yyyy')}</span>
            <div className="flex gap-1 items-center">
              <ViewIcon size={14} />
              <span className="text-xs ml-0.5">{page_views_count} Views</span>
            </div>
          </div>
        </article>
      </Card>
    </Link>
  );
};

export default BlogCard;
