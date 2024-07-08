import { TbSchool as EducationIcon } from 'react-icons/tb';

import SectionHeading from '@/common/components/elements/SectionHeading';
import { CERTIFICATES } from '@/common/constant/certificate';
import { EDUCATION } from '@/common/constant/education';

import CertificationCard from './CerficationCard';
import EducationCard from './EducationCard';

const EducationList = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <div className="grid md:grid-cols-1 gap-4">
          {EDUCATION?.map((item, index) => <EducationCard key={index} {...item} />)}
        </div>
      </div>
    </section>
  );
};

export default EducationList;
