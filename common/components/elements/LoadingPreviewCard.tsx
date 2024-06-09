import React, { useEffect, useState } from 'react';

import useIsMobile from '@/hooks/useIsMobile';

import clsxm from '../../libs/clsxm';

export default function LoadingPreviewCard({ view }: { view: string }) {
  const [viewOption, setViewOption] = useState<string>();
  const isMobile = useIsMobile();

  useEffect(() => {
    isMobile ? setViewOption('grid') : setViewOption(view);
  }, [isMobile, view]);
  return (
    <div className={clsxm('w-full overflow-x-hidden sm:w-full')}>
      <div className="animate-pulse bg-neutral-200 dark:bg-neutral-700 h-[400px] w-[250px] rounded-lg"></div>
    </div>
  );
}
