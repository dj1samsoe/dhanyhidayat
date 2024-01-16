import clsx from 'clsx';

import Image from '@/common/components/elements/Image';
import { ServicesProps } from '@/common/types/services';

const ServicesItem = ({ title, description, icon, className }: ServicesProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="50"
      className={clsx(
        'grid grid-flow-col justify-between items-center gap-x-6 bg-white bg-no-repeat bg-right bg-contain',
        'py-5 px-6 rounded-xl border dark:border-none',
        'transition-all duration-300',
        'dark:bg-[#4949492e] backdrop-blur-lg'
      )}
    >
      <div>{icon}</div>
      <div className={clsx('space-y-1', className)}>
        <h2 className="text-base md:text-lg font-medium">{title}</h2>
        <p className="text-neutral-600 text-sm md:text-base dark:text-neutral-400">{description}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
