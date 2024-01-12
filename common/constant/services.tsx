import { BsGlobe } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';

import { ServicesProps } from '../types/services';

export const SERVICES: ServicesProps[] = [
  {
    title: 'Website Developments',
    description: 'Transforming your ideas into captivating websites using powerful technologies.',
    icon: <FaLaptopCode className="w-8 h-8 dark:text-white text-slate-800" />
  },
  {
    title: 'Strategic IT Partnership',
    description: 'Expert advice guiding your business towards tech-driven success.',
    icon: <BsGlobe className="w-8 h-8 dark:text-white text-slate-800" />
  }
];
