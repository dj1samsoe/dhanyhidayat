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
        <SectionHeading title="Formal Education" icon={<EducationIcon size={22} className="mr-1" />} />
        <div className="grid md:grid-cols-1 gap-4">
          {EDUCATION?.map((item, index) => <EducationCard key={index} {...item} />)}
        </div>
      </div>
      <div className="space-y-3">
        <SectionHeading title="Extra Education" icon={<EducationIcon size={22} className="mr-1" />} />
        <div className="grid md:grid-cols-2 gap-4">
          {CERTIFICATES?.map((certificate, index) => <CertificationCard key={index} {...certificate} />)}
        </div>
      </div>
    </section>
  );
};

export default EducationList;
