import { motion } from 'framer-motion';
import { FC } from 'react';

import { SOCIAL_MEDIA } from '@/common/constant/menu';

import Breakline from '../../elements/Breakline';
import SocialMedia from '../../elements/SocialMedia';
import Navigation from './Navigation';

const MobileMenu: FC = () => {
  const filteredSocialMedia = SOCIAL_MEDIA?.filter(item => item?.isShow);
  return (
    <motion.div
      className="h-screen flex flex-col my-3"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Breakline className="mt-2" />
        <Navigation />
        <Breakline className="mt-2" />
        <SocialMedia items={filteredSocialMedia} />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
