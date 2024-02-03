'use client';

import { useNotifStore } from '@/stores/notif';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';

export default function Notif() {
  const { isOpen, text, hideNotif } = useNotifStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      hideNotif();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [hideNotif, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-10 left-1/2 translate-x-[-50%] font-sans z-50 text-sm rounded-md bg-opacity-80 bg-neutral-800 dark:bg-neutral-300 text-neutral-100 dark:text-black py-1 px-2"
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
