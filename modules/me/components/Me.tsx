import React from 'react';

import Breakline from '@/common/components/elements/Breakline';
import Footer from '@/common/components/elements/Footer';

import Contact from './Contact';
import Hero from './Hero';
import Links from './Links';
import Services from './Services';
import Socials from './Socials';

export default function MeSection() {
  return (
    <>
      <Hero />
      <div className="p-6 space-y-5">
        <Socials />
        <Breakline />
        <Links />
        <Breakline />
        <Services />
        <Breakline />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
