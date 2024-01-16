'use client';

import { useState } from 'react';
import { PiLinkBreakDuotone as LinkIcon } from 'react-icons/pi';

import { LINKS } from '@/common/constant/links';

import LinkItem from './LinkItem';

const Links = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const handleClick = (url: string, target: string | undefined) => {
    if (url !== '#') {
      window.open(url, target);
    } else {
      setBottomSheetOpen(true);
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 px-3" data-aos="fade-up" data-aos-duration="1000">
        <LinkIcon size={24} />
        <h2 className="font-medium text-lg md:text-xl">Links</h2>
      </div>
      <div className="flex flex-col w-full gap-y-3">
        {LINKS?.map((item, index) => <LinkItem key={index} index={index} onClick={handleClick} {...item} />)}
      </div>
    </section>
  );
};

export default Links;
