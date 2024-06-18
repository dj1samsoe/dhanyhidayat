import Link from 'next/link';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BsArrowRight as MoreIcon } from 'react-icons/bs';
import { FaRocket as FeaturedIcon } from 'react-icons/fa';

import Breakline from '@/common/components/elements/Breakline';
import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import Tooltip from '@/common/components/elements/Tooltip';
import { PLACEHOLDER_URL } from '@/common/constant';
import { STACKS } from '@/common/constant/stacks';
import { IProjectItem } from '@/common/types/projects';

export default function ProjectCard({ title, slug, description, image, stacks, is_featured }: IProjectItem) {
  const stacksArray = JSON.parse(stacks);
  const trimmedContent = description.slice(0, 70) + (description.length > 70 ? '...' : '');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const slideDownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <Link href={`/projects/${slug}`}>
      <Card
        className="group relative flex h-[400px] w-full flex-col rounded-lg border shadow-sm dark:border-neutral-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {is_featured && (
          <div className="absolute top-0 right-0 flex gap-2 items-center bg-blue-300 text-emerald-950 text-[13px] font-medium p-2 rounded-bl-xl rounded-tr-xl z-[2]">
            <FeaturedIcon size={15} />
            Featured
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
            src={image || PLACEHOLDER_URL}
            alt={title}
            fill={true}
            sizes="100vw, 100vh"
            className="h-full w-full transform object-cover object-top transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-90 transition-opacity duration-300"></div>
        </div>

        <div className="absolute flex h-full flex-col justify-end space-y-2 p-5">
          <h3 className="font-bricolage md:text-xl text-lg font-medium text-neutral-100 group-hover:underline group-hover:underline-offset-4 ">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-neutral-400 line-clamp-2">{description}</p>

          <Breakline className="!border-neutral-700" />
          <div className="flex justify-between gap-4 px-0.5 text-neutral-400">
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {stacksArray?.map((stack: string, index: number) => (
                <div key={index} className="w-6">
                  <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
                </div>
              ))}
            </div>
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
}
