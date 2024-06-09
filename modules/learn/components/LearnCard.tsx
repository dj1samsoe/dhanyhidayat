import Link from 'next/link';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsArrowRight as MoreIcon } from 'react-icons/bs';
import { FaHotjar as NewIcon } from 'react-icons/fa';

import Breakline from '@/common/components/elements/Breakline';
import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import Tooltip from '@/common/components/elements/Tooltip';
import { PLACEHOLDER_URL, PROFILE_URL } from '@/common/constant';
import { ContentProps } from '@/common/types/learn';

import { fetcher } from '@/services/fetcher';

const LearnCard = ({ title, slug, description, is_new, level }: ContentProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const imageUrl =
    'https://res.cloudinary.com/dfcwcfx5z/image/upload/v1717960292/djisamsoe/projects/ejzc3vniqi1tjc9t9oh1.jpg';
  const slideDownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Link href={`/learn/${slug}`}>
      <Card
        className="group relative flex h-[400px] w-full flex-col rounded-lg border shadow-sm dark:border-neutral-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {is_new && (
          <div className="flex items-center gap-1 absolute top-0 right-0 bg-yellow-300 text-emerald-950 text-[13px] font-medium py-1 px-2 rounded-bl-xl rounded-tr-xl z-[2]">
            <NewIcon size={15} />
            <span>New</span>
          </div>
        )}
        <div
          className="relative rounded-xl duration-500"
          style={{
            height: '400px',
            overflow: 'hidden'
          }}
        >
          <Image
            src={imageUrl || PLACEHOLDER_URL}
            alt={title}
            fill={true}
            sizes="100vw, 100vh"
            className="h-full w-full transform object-cover object-top transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-90 transition-opacity duration-300"></div>
        </div>

        <div className="absolute flex h-full flex-col justify-end space-y-2 p-5">
          <div className="rounded-full bg-neutral-900/50 px-2.5 py-1 font-mono text-xs text-neutral-400 w-fit">
            <span className="mr-1 font-semibold">#</span>
            {level}
          </div>
          <h3 className="font-sora md:text-xl text-lg font-medium text-neutral-100 group-hover:underline group-hover:underline-offset-4 ">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-neutral-400 line-clamp-1">{description}</p>

          <Breakline className="!border-neutral-700" />
          <div className="flex justify-between gap-4 px-0.5 text-neutral-400">
            <Tooltip title="by dhanyhidayat">
              <Image
                src={PROFILE_URL}
                alt="Dhany Hidayat"
                width={25}
                height={25}
                rounded="rounded-full"
                className="rotate-3 border border-neutral-500"
              />
            </Tooltip>
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
      </Card>
    </Link>
  );
};

export default LearnCard;
