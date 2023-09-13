import Link from 'next/link';

import React from 'react';

import Container from '@/common/components/elements/Container';

export default function NotFound() {
  return (
    <>
      <Container
        data-aos="fade-up"
        className="flex flex-col text-neutral-600 dark:text-neutral-300 space-y-10 items-center justify-center lg:h-[90vh] overflow-hidden"
      >
        <h1 className="text-4xl md:text-6xl font-semibold">Where are you going to?</h1>
        <p className="text-center">It seems like the page that you are looking for is no longer here.</p>
        <Link
          href="/"
          className="uppercase text-xs px-6 py-4 rounded-full dark:bg-neutral-300 bg-neutral-600 text-neutral-100 dark:text-neutral-700 hover:shadow-lg transition-all duration-300"
        >
          Go to Home
        </Link>
      </Container>
    </>
  );
}
