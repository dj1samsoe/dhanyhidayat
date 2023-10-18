import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import EducationList from './EducationList';
import Summary from './Summary';

export default function About() {
  return (
    <section className="flex flex-col">
      <Summary />
      <Breakline className="my-8" />
      <CareerList />
      <Breakline className="my-8" />
      <EducationList />
    </section>
  );
}
