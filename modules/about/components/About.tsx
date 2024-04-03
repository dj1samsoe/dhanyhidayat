import {
  HiOutlineBookmark as AboutIcon,
  HiOutlineBriefcase as CareerIcon,
  HiOutlineAcademicCap as EducationIcon,
  HiOutlineDocumentText as ResumeIcon,
  HiOutlineSparkles as SkillsIcon
} from 'react-icons/hi';

import { Tabs } from '@/common/components/elements/Tabs';

import CareerList from './CareerList';
import EducationList from './EducationList';
import Resume from './Resume';
import SkillList from './SkillList';
import Summary from './Summary';

const About = () => {
  const TABS = [
    {
      label: (
        <TabLabel>
          <AboutIcon size={17} /> Intro
        </TabLabel>
      ),
      children: <Summary />
    },
    {
      label: (
        <TabLabel>
          <ResumeIcon size={17} /> Resume
        </TabLabel>
      ),
      children: <Resume />
    },
    {
      label: (
        <TabLabel>
          <SkillsIcon size={17} /> Skills
        </TabLabel>
      ),
      children: <SkillList />
    },
    {
      label: (
        <TabLabel>
          <CareerIcon size={17} /> Careers
        </TabLabel>
      ),
      children: <CareerList />
    },
    {
      label: (
        <TabLabel>
          <EducationIcon size={17} /> Educations
        </TabLabel>
      ),
      children: <EducationList />
    }
  ];
  return <Tabs tabs={TABS} />;
};

export default About;

const TabLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-1.5">{children}</div>
);
