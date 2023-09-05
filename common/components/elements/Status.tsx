'use client';

import { motion } from 'framer-motion';

export default function Status() {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="h-2 w-2 rounded-full bg-green-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      <span className="text-sm text-neutral-600 dark:text-neutral-400">available for hire.</span>
    </div>
  );
}
