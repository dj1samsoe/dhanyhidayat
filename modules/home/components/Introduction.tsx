import Link from 'next/link';

import { TbCoffee } from 'react-icons/tb';

import { SAWERIA_URL } from '@/common/constant';

export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <h1>Hi, I&apos;m Dhany</h1>
        </div>
        <Link href={SAWERIA_URL} target="_blank" aria-label="logo-coffee">
          <TbCoffee size={25} />
        </Link>
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>Frontend Developer</li>
          <li>
            Based in Sidoarjo, Indonesia <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          Undergraduate Information Systems student at Brawijaya University who is a enthusiast in Software Engineer
          with a strong emphasis on frontend development. Proficient in Javascript, Typescript, React JS, Next JS and
          other elements of web technology.
        </p>
      </div>
    </section>
  );
}
