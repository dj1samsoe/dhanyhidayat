import React from 'react';

import Breakline from '@/common/components/elements/Breakline';
import Footer from '@/common/components/elements/Footer';
import SocialMedia from '@/common/components/elements/SocialMedia';
import { SOCIAL_MEDIA } from '@/common/constant/menu';

import ChitChat from './ChitChat';
import Contact from './Contact';
import GoHome from './GoHome';
import MeProfile from './MeProfile';
import Services from './Services';

export default function MeSection() {
  const filteredSocialMedia = SOCIAL_MEDIA?.filter(item => item?.isShow);
  return (
    <div className="p-6 mb-2 space-y-6" data-aos="fade-down">
      <MeProfile />
      <SocialMedia items={filteredSocialMedia} isMePage />
      <GoHome />
      <ChitChat />
      <Breakline />
      <Services />
      <Breakline />
      <Contact />
      <Footer />
    </div>
  );
}
