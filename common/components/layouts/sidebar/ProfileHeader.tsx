import Link from 'next/link';

import clsx from 'clsx';
import React from 'react';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

import Image from '../../elements/Image';
import Status from '../../elements/Status';
import ToggleTheme from '../../elements/ThemeToggle';
import Tooltip from '../../elements/Tooltip';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

export default function ProfileHeader({ expandMenu, imageSize }: ProfileHeaderProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full',
        expandMenu && 'flex-col !items-start'
      )}
    >
      <div className="relative lg:block hidden w-full mb-12">
        <div className="absolute top-0 left-0 dark:bg-[#1C1C1C] bg-white p-2.5 rounded-ee-lg">
          <Status />
        </div>
        <div className="flex">
          <div className="rounded-s-lg mt-11 w-[50%] h-[50px] dark:bg-neutral-800 bg-neutral-200"></div>
          <div className="rounded-lg w-[67%] h-24 dark:bg-neutral-800 bg-neutral-200"></div>
        </div>
        <div className="absolute bottom-0 right-0 p-2">
          <ToggleTheme />
        </div>
        <Image
          src="/profile.jpg"
          alt="profile"
          width={expandMenu ? 80 : imageSize * 0.9}
          height={expandMenu ? 80 : imageSize * 0.9}
          rounded="rounded-full"
          className="lg:hover:scale-105 absolute z-50 -mt-10 left-1/2 -translate-x-1/2 border-2 border-white dark:border-neutral-800"
        />
      </div>
      <Image
        src="/profile.jpg"
        alt="profile"
        width={expandMenu ? 80 : imageSize * 0.9}
        height={expandMenu ? 80 : imageSize * 0.9}
        rounded="rounded-full"
        className="lg:hover:scale-105 lg:hidden block"
      />
      <div className="flex gap-2 items-center mt-1 lg:mt-4">
        <Link href="/" passHref>
          <h2 className="flex-grow text-lg lg:text-xl font-bricolage font-medium">Dhany Hidayat</h2>
        </Link>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>
      <Link
        href="https://instagram.com/dhanyhidayat_"
        target="_blank"
        className="hidden lg:flex text-sm font-bricolage text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300"
      >
        @dhanyhidayat_
      </Link>
    </div>
  );
}
