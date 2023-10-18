import Link from 'next/link';

import { fetcher } from '@/services/fetcher';
import { AiFillFire as NewIcon } from 'react-icons/ai';
import { HiOutlineArrowSmRight as ViewIcon } from 'react-icons/hi';
import useSWR from 'swr';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { ContentProps } from '@/common/types/learn';

const LearnCard = ({ title, slug, description, image, is_new, level }: ContentProps) => {
  const { data } = useSWR(`/api/learn?slug=${slug}`, fetcher);

  return (
    <Link href={`/learn/${slug}`}>
      <Card className="group relative border border-neutral-200 dark:border-neutral-900 lg:hover:scale-[102%] cursor-pointer">
        {is_new && (
          <div className="flex items-center gap-1 absolute top-0 right-0 bg-yellow-300 text-emerald-950 text-[13px] font-medium py-1 px-2 rounded-bl-xl rounded-tr-xl z-[2]">
            <NewIcon size={15} />
            <span>New</span>
          </div>
        )}
        <div className="relative">
          <Image
            src={image}
            width={400}
            height={200}
            alt={title}
            className="rounded-t-xl h-48 object-cover object-left"
          />
          <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium">
            <span>View Lessons</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-300 lg:group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300">
                {title}
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-400 text-[.9375rem] leading-relaxed">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default LearnCard;
