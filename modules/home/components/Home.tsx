import { lazy } from 'react';

import Breakline from '@/common/components/elements/Breakline';
import { IServices } from '@/common/types/services';

import BlogPreview from './BlogPreview';
import ContactPreview from './ContactPreview';
import Introduction from './Introduction';

const ServicesList = lazy(() => import('./ServicesList'));

interface HomeProps {
  services: IServices[];
}

export default function Home({ services }: HomeProps) {
  return (
    <>
      <Introduction />
      <Breakline className="mt-8 mb-7" />
      <BlogPreview />
      <Breakline className="my-8" />
      <ContactPreview />
      <Breakline className="my-8" />
      <ServicesList services={services} />
    </>
  );
}
