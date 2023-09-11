import Breakline from '@/common/components/elements/Breakline';

import CodingActive from './CodingActive';
import Contributions from './Contributions';

interface DashboardProps {
  githubData: any;
}
export default function Dashboard({ githubData }: DashboardProps) {
  return (
    <section className="flex flex-col">
      <CodingActive />
      <Breakline />
      <Contributions githubData={githubData} />
    </section>
  );
}
