import { Metadata } from 'next';

import React from 'react';

import { METADATA } from '@/common/constant/metadata';

import MeSection from '@/modules/me';

export const metadata: Metadata = {
  title: `Hi! ${METADATA.exTitle}`,
  description: 'This is my landing page. I am a software engineer who loves to build web applications.',
  keywords: 'frontend developer, software engineer, react js, javascript, typescript, dhany hidayat',
  alternates: {
    canonical: `${process.env.DOMAIN}/me`
  }
};

export default function MePage() {
  return (
    <div className="max-w-xl mx-auto">
      <MeSection />
    </div>
  );
}
