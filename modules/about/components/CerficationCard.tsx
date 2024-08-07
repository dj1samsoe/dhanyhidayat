import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { BsBoxArrowUpRight, BsBuildings as CompanyIcon } from 'react-icons/bs';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { CertificateProps } from '@/common/types/education';

export default function CertificationCard({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  link
}: CertificateProps) {
  const startDate = new Date(start_date);
  const endDate = end_date ? new Date(end_date) : new Date();

  const durationYears = differenceInYears(endDate, startDate);
  const durationMonths = differenceInMonths(endDate, startDate) % 12;

  let durationText = '';
  if (durationYears > 0) {
    durationText += `${durationYears} Year${durationYears > 1 ? 's' : ''} `;
  }
  if (durationMonths > 0 || durationYears === 0) {
    durationText += `${durationMonths} Month${durationMonths > 1 ? 's' : ''}`;
  }

  return (
    <Card className="flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-800 bg-neutral-200 dark:bg-[#4949492e] ">
      {logo ? <Image src={logo} width={55} height={55} alt={company} /> : <CompanyIcon size={30} />}

      <div className="space-y-1">
        <h2>{position}</h2>
        <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
          <div className="flex items-center gap-1 md:gap-2">
            <span>{company}</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>{location}</span>
          </div>
          <div className="flex flex-col md:text-[13px]">
            <div className="flex gap-1">
              <span>{format(startDate, 'MMM yyyy')}</span> -{' '}
              <span>{end_date ? format(endDate, 'MMM yyyy') : 'Present'}</span>
            </div>
            <span className="text-neutral-500 dark:text-neutral-500">~ {durationText}</span>
          </div>
          <div className="w-48 pt-2 border rounded-2xl border-black py-2 dark:border-neutral-400 hover:dark:border-white hover:text-dark hover:dark:text-white">
            <a href={link || '#'} target="_blank">
              <div className="flex items-center justify-center gap-2">
                <span>See Credential</span>
                <BsBoxArrowUpRight />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
