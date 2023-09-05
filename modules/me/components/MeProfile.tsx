import Image from 'next/image';

import React from 'react';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

import Tooltip from '@/common/components/elements/Tooltip';
import { PROFILE_URL } from '@/common/constant';

export default function MeProfile() {
  return (
    <div className="flex flex-col items-center space-y-2 mt-6" data-aos="zoom-in-down">
      <div className="rounded-full p-2 border border-neutral-200">
        <div className="overflow-hidden rounded-full">
          <Image
            src={PROFILE_URL}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex gap-2 items-center mt-1 lg:mt-4">
        <h2 className="flex-grow text-lg lg:text-xl font-sora font-medium">Achmad Fauzian Dhany Hidayat</h2>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>
      <p className="leading-[1.8] md:leading-loose text-sm text-center text-neutral-800 dark:text-neutral-300">
        Software Engineer who focus on frontend development.
      </p>
    </div>
  );
}
