import clsx from 'clsx';

import Image from '@/common/components/elements/Image';
import { ServicesProps } from '@/common/types/services';

const ServicesItem = ({ title, description, icon, className }: ServicesProps) => {
  return (
    <div
      className={clsx(
        'grid grid-flow-col justify-between items-center gap-x-6 bg-white bg-no-repeat bg-right bg-contain',
        'border py-5 px-6 rounded-xl',
        'transition-all duration-300',
        'dark:bg-neutral-800'
      )}
    >
      <div>
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <div className={clsx('space-y-1', className)}>
        <h5 className="text-base md:text-lg font-medium">{title}</h5>
        <p className="text-neutral-600 text-sm md:text-base dark:text-neutral-400">{description}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
