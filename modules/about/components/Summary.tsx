import React from 'react';

import Image from '@/common/components/elements/Image';

export default function Summary() {
  return (
    <div className="flex flex-col space-y-6 font-sora text-neutral-800 dark:text-neutral-300">
      <p>Hello Everyone!</p>
      <p>
        I&apos;m Achmad Fauzian Dhany Hidayat, a seasoned software developer especially in frontend developer with a
        deep love for using code to create elegant and effective solutions. I have a strong foundation in Javascript,
        Typescript, React JS, Next JS and other elements of web technology. I have a thorough understanding of many
        frontend libraries and frameworks. I currently reside in Malang, Indonesia.
      </p>
      <p>
        Because I am a quick learner and flexible thinker, I do well in fast-paced settings where creativity drives
        advancement. My ability to work well with others allows me to easily fit into teams, where I provide not just my
        technical know-how but also a humble demeanor that honors the opinions of all team members.
      </p>
      <p>
        You might find me studying the newest technological trends, working on side projects, or having stimulating
        conversations about software architecture and design patterns when I&apos;m not engrossed in coding.
      </p>
      <p>
        This blog is my platform for sharing the learnings, encounters, and discoveries I&apos;ve had along the way as a
        software engineer. Join me as we embark on an exciting investigation of the rapidly changing world of
        technology, where every line of code has the power to significantly alter the digital environment.
      </p>
      <p>I appreciate you stopping by, and I&apos;m looking forward to learning from you.</p>
      <div className="space-y-4">
        <span>Best Regards,</span>
        <Image src="/sign.webp" width={250} height={250} alt="Dhany Hidayat" />
      </div>
    </div>
  );
}
