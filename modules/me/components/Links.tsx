'use client';

import { useState } from 'react';
import { PiLinkBreakDuotone as LinkIcon } from 'react-icons/pi';

import SectionHeader from '@/common/components/elements/SectionHeader';
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
      <SectionHeader icon={<LinkIcon size={24} />} title="Links" />
      <div className="flex flex-col w-full gap-y-3">
        {LINKS?.map((item, index) => <LinkItem key={index} index={index} onClick={handleClick} {...item} />)}
      </div>
    </section>
  );
};

export default Links;
