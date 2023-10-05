import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import Summary from './Summary';

export default function About() {
  return (
    <section className="flex flex-col">
      <Summary />
      <Breakline />
      <CareerList />
    </section>
  );
}
