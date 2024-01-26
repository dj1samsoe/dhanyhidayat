'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';
import { BsCloudMoon, BsCloudSun } from 'react-icons/bs';

import useHasMounted from '@/hooks/useHasMounted';

export default function ToggleTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useHasMounted();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;
  return (
    <motion.button
      id="dark-mode-switcher"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className="bg-white dark:bg-neutral-800 p-2 rounded-xl"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {resolvedTheme === 'light' ? (
        <BsCloudSun className="w-5 h-5" />
      ) : (
        <BsCloudMoon className="text-green-500 w-5 h-5" />
      )}
    </motion.button>
  );
}
