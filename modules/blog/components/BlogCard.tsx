import Link from 'next/link';
import { useRouter } from 'next/navigation';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsArrowRight as MoreIcon } from 'react-icons/bs';
import { FaRegEye as ViewIcon } from 'react-icons/fa';
import { HiOutlineClock as ClockIcon } from 'react-icons/hi';
import { TbCalendarBolt as DateIcon } from 'react-icons/tb';

import Breakline from '@/common/components/elements/Breakline';
import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import Tooltip from '@/common/components/elements/Tooltip';
import { formatBlogSlug, formatDate } from '@/common/helpers';
import { BlogItem } from '@/common/types/blog';

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
  page_views_count,
  slug,
  tag_list,
  reading_time_minutes
}: BlogCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();

  const newSlug = formatBlogSlug(slug);
  const slideDownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const imageUrl = 'https://res.cloudinary.com/dfcwcfx5z/image/upload/v1717877267/djisamsoe/malbh7segwlqnpojldy1.jpg';

  function handleCardClick() {
    router.push(`/blog/${newSlug}?id=${id}&read-mode=true`);
  }

  return (
    <Link href={`/blog/${newSlug}?id=${id}&read-mode=true`}>
      <Card
        className="group relative flex h-[400px] w-full flex-col rounded-lg border shadow-sm dark:border-neutral-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative rounded-xl duration-500"
          style={{
            height: '400px',
            overflow: 'hidden'
          }}
        >
          <Image
            src={cover_image || imageUrl}
            alt={title}
            fill={true}
            sizes="100vw, 100vh"
            className="h-full w-full transform object-cover object-left-bottom transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-90 transition-opacity duration-300"></div>
        </div>

        <div className="absolute flex h-full flex-col justify-end space-y-4 p-5">
          <div className="flex flex-col justify-end">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-2">
                <div className="flex flex-wrap gap-1">
                  {tag_list?.map(tag => (
                    <div
                      key={tag}
                      className="rounded-full bg-neutral-900/50 px-2.5 py-1 font-mono text-xs text-neutral-400"
                    >
                      <span className="mr-1 font-semibold">#</span>
                      {tag?.charAt(0).toUpperCase() + tag?.slice(1)}
                    </div>
                  ))}
                </div>
                <h3 className="font-bricolage text-lg font-medium text-neutral-100 group-hover:underline group-hover:underline-offset-4 line-clamp-3 ">
                  {title}
                </h3>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <DateIcon size={14} />
                <span className="ml-0.5 text-xs">{formatDate(published_at)}</span>
              </div>
            </div>

            <Breakline className="!border-neutral-700" />
            <div className="flex justify-between gap-4 px-0.5 text-neutral-400">
              <Tooltip title="by dhanyhidayat">
                <Image
                  src="/logo.png"
                  alt="Dhany Hidayat"
                  width={25}
                  height={25}
                  rounded="rounded-full"
                  className="rotate-3 border border-neutral-500"
                />
              </Tooltip>

              <motion.div
                variants={slideDownVariants}
                initial="visible"
                animate={isHovered ? 'hidden' : 'visible'}
                className={clsx('flex justify-between gap-4 ', isHovered && 'hidden')}
              >
                <div className="flex items-center gap-1">
                  <ViewIcon size={14} />
                  <span className="ml-0.5 text-xs font-medium">{page_views_count.toLocaleString()} VIEWS</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon size={14} />
                  <span className="ml-0.5 text-xs font-medium">{reading_time_minutes.toLocaleString()} MINS READ</span>
                </div>
              </motion.div>
              <motion.div
                variants={slideDownVariants}
                initial="hidden"
                animate={isHovered ? 'visible' : 'hidden'}
                className={clsx('flex items-center gap-1', !isHovered && 'hidden')}
              >
                <span className="mr-0.5 text-xs font-medium">READ MORE</span>
                <MoreIcon size={16} />
              </motion.div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
