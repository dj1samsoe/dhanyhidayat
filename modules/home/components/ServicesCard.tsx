'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface ServicesCardProps {
  tag: string;
  title: string;
  description: string;
}

export default function ServicesCard({ tag, title, description }: ServicesCardProps) {
  const [hover, setHover] = useState(false);
  const coverImage = "url('/bg-gradient-2.svg')";
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`min-w-[300px] md:w-80 border border-neutral-300 shadow-3xl ring-1 ring-black/5 dark:divide-neutral-800 dark:border-neutral-800 dark:bg-[#4949492e] bg-neutral-200 backdrop-blur-lg dark:text-neutral-100 text-neutral-900 rounded-xl overflow-hidden bg-center bg-cover`}
      style={{
        backgroundImage: coverImage,
        backgroundPosition: 'center, center'
      }}
    >
      <div className="w-full h-full font-mono flex flex-col p-6 justify-center ">
        {!hover && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm dark:text-neutral-300">#{tag}</span>
            <h3 className="text-xl font-bold mt-2 dark:text-neutral-200">{title}</h3>
          </motion.div>
        )}

        {hover && (
          <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
            <h3 className="text-lg font-bold mb-4 dark:text-neutral-200">{title}</h3>
            <p className="text-sm dark:text-neutral-300">{description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
