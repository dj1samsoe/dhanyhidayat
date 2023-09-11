'use client';

import Link from 'next/link';

import { SiWakatime as WakatimeIcon } from 'react-icons/si';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';

import Overview from './Overview';

const CodingActive = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <SectionHeading title="Weekly Statistics" icon={<WakatimeIcon className="mr-1" />} />
      <SectionSubHeading>
        <div className="dark:text-neutral-400 md:flex-row md:items-center">
          <span>My </span>
          <Link
            href="https://wakatime.com/@dj1samsoe"
            className="hover:text-neutral-900 hover:underline dark:hover:text-neutral-100"
          >
            WakaTime
          </Link>
          <span> last 7 days stats.</span>
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-500">Last update: 12 hours ago</div>
      </SectionSubHeading>

      <Overview />
    </section>
  );
};

export default CodingActive;
