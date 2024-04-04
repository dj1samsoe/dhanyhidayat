import { Variants, motion } from 'framer-motion';

import clsxm from '@/common/libs/clsxm';

interface ProgressProps {
  data: { name: string; percent?: number };
  className?: string;
}

const Progress = ({ data, className }: ProgressProps) => {
  const { name, percent = 0 } = data;

  const progressVariants: Variants = {
    initial: { width: 0 },
    animate: {
      width: `${percent}%`,
      transition: { delay: 0.8 }
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 px-5">
      <div className="w-20 text-sm">{name}</div>
      <div className="relative flex h-3 flex-1 justify-center rounded-full bg-neutral-200 dark:bg-[#4949492e]">
        <motion.span
          initial="initial"
          animate="animate"
          variants={progressVariants}
          className={clsxm(className, 'absolute left-0 top-0 h-3 rounded-full px-3')}
        >
          &ensp;
        </motion.span>
      </div>
      <div className="w-8 text-sm text-center text-neutral-600 dark:text-neutral-100">{percent}%</div>
    </div>
  );
};

export default Progress;
