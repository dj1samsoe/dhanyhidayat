import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { CAREERS } from '@/common/constant/careers';

import CareerCard from './CareerCard';

export default function CareerList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Certificates" icon={<CareerIcon className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            My certificates list showcases my qualifications and achievements, serving as a testament to my skills and
            expertise.
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CAREERS?.map((career, index) => <CareerCard key={index} {...career} />)}
      </div>
    </section>
  );
}
