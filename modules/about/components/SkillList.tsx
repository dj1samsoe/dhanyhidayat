'use client';

import styled from '@emotion/styled';
import { ReactNode, useEffect, useState } from 'react';
import { BiCodeAlt as SkillsIcon } from 'react-icons/bi';

import InfiniteLoopSlider from '@/common/components/elements/InfiniteLoopSliders';
import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { SKILLS } from '@/common/constant/skills';

const Tag = ({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className="flex items-center gap-2 mr-3 rounded-full py-2 px-5 w-max bg-neutral-100 dark:bg-[#4949492e]  dark:text-neutral-50 shadow-sm border border-neutral-300 dark:border-neutral-700">
    {icon}
    <span>{title}</span>
  </div>
);

const Skills = () => {
  const [shuffledSkills, setShuffledSkills] = useState<Array<[string, ReactNode]>>([]);

  useEffect(() => {
    const skillsArray = Object.entries(SKILLS);
    const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffledArray);
  }, []);

  const sliders = Array.from({ length: 2 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <InfiniteLoopSlider key={index} isReverse={index === 1}>
        {sliderSkills.map(([title, icon], index) => (
          <Tag key={index} icon={icon} title={title} />
        ))}
      </InfiniteLoopSlider>
    );
  });

  return (
    <div className="space-y-8">
      {/* <div className="space-y-2">
        <SectionHeading title="Skills" icon={<SkillsIcon size={22} className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My professional hard skills</p>
        </SectionSubHeading>
      </div> */}

      <div className="flex w-full">
        <div className="relative flex flex-col gap-y-4 justify-start py-2 w-full overflow-hidden">
          {sliders}
          <StyledFade className="hidden dark:flex dark:bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

const StyledFade = styled.div`
  pointer-events: none;
  background: linear-gradient(90deg, transparent 20%, transparent 80%);
  position: absolute;
  inset: 0;
`;
