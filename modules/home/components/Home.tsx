import { lazy } from 'react';

import Breakline from '@/common/components/elements/Breakline';
import Spotify from '@/common/components/elements/Spotify';
import { IServices } from '@/common/types/services';

import BlogPreview from './BlogPreview';
import ContactPreview from './ContactPreview';
import Introduction from './Introduction';

const ServicesList = lazy(() => import('./ServicesList'));

export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline className="mt-8 mb-7" />
      <BlogPreview />
      <Breakline className="my-8" />
      <ContactPreview />
      <Breakline className="my-8" />
      <ServicesList />
      <Breakline className="my-8" />
      <Spotify />
    </>
  );
}
