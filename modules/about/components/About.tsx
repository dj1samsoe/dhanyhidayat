import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import EducationList from './EducationList';
import Resume from './Resume';
import SkillList from './SkillList';
import Summary from './Summary';

export default function About() {
  return (
    <section className="flex flex-col">
      <Summary />
      <Resume />
      <Breakline className="my-8" />
      <SkillList />
      <Breakline className="my-8" />
      <CareerList />
      <Breakline className="my-8" />
      <EducationList />
    </section>
  );
}
