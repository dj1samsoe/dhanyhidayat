'use client';

import { motion } from 'framer-motion';

export default function Status() {
  return (
    <div className="flex items-center gap-2 border dark:border-neutral-700 rounded-full px-2 py-1 bg-transparent">
      <motion.div
        data-testid="available-collabs-container"
        className="h-2 w-2 rounded-full bg-green-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      <span className="text-xs text-neutral-600 dark:text-neutral-400">Hire me</span>
    </div>
  );
}
