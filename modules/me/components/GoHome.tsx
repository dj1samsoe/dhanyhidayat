import Link from 'next/link';

import React from 'react';
import { FcMindMap } from 'react-icons/fc';
import { TbCoffee } from 'react-icons/tb';

import { SAWERIA_URL } from '@/common/constant';

export default function GoHome() {
  return (
    <div className="flex w-full capitalize justify-center mt-8" data-aos="zoom-in-down">
      <Link
        href="/"
        className="flex border w-max shadow-sm m-2 border-neutral-200 items-center px-6 py-2 rounded-xl gap-2 hover:gap-3 delay-75 hover:transition-all hover:duration-300 transition-all duration-300"
      >
        <FcMindMap />
        <span>Awesome magic</span>
      </Link>
      <Link
        href={SAWERIA_URL}
        target="_blank"
        className="flex w-full h-max md:w-max bg-teal-500 text-white shadow-sm justify-center items-center px-6 py-3 rounded-xl gap-2 hover:gap-3 delay-75 hover:transition-all hover:duration-300 transition-all duration-300"
      >
        <TbCoffee />
        <span>Buy me a Coffee</span>
      </Link>
    </div>
  );
}
