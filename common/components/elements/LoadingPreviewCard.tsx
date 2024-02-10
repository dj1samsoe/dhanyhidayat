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
    <div className={clsxm('w-full flex overflow-hidden flex-col sm:w-full')}>
      <div className="animate-pulse bg-neutral-200 dark:bg-neutral-700 h-32 rounded-lg"></div>
      <div className="flex flex-col flex-1 space-y-3 py-3">
        <div className="h-3 animate-pulse bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="flex space-x-4">
          <div className={clsxm('h-2 animate-pulse bg-neutral-200 dark:bg-neutral-700 rounded w-20')}></div>
          <div className={clsxm('h-2 animate-pulse bg-neutral-200 dark:bg-neutral-700 rounded w-20')}></div>
        </div>
      </div>
    </div>
  );
}
