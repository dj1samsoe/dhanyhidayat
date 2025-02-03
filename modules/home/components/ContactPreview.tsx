'use client';

import { useRouter } from 'next/navigation';

import { BiRocket as RocketIcon } from 'react-icons/bi';

import Button from '@/common/components/elements/Button';
import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

const ContactPreview = () => {
  const router = useRouter();
  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="What I've been working on" />
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          With strategic development services, I help startups, enterprises, brands, and institutions create amazing
          digital experiences for their businesses.
        </p>
      </div>
      <Card className="p-8 bg-neutral-200 border shadow-3xl ring-1 ring-black/5 dark:divide-neutral-800 dark:border-neutral-800 dark:bg-[#4949492e]  rounded-xl space-y-4">
        <div className="flex gap-2 items-center">
          <RocketIcon size={24} />
          <h3 className="text-xl font-medium font-bricolage">Lets work together!</h3>
        </div>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2">
          I&apos;m open for freelance projects, feel free to email me to see how can we collaborate.
        </p>
        <Button data-umami-event="Click Contact Button" onClick={() => router.push('/contact')}>
          Contact me
        </Button>
      </Card>
    </section>
  );
};

export default ContactPreview;
