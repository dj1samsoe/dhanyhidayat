import Link from 'next/link';

import { LuDownload as DownloadIcon } from 'react-icons/lu';

import GoogleDocsEmbed from '@/common/components/elements/GoogleDocsEmbed';

const Resume = () => {
  const RESUME_URL = 'https://bit.ly/cv-dhanyhidayat';

  return (
    <div className="space-y-5">
      <Link
        href={RESUME_URL}
        target="_blank"
        passHref
        className="flex w-fit items-center gap-2 rounded-lg border border-neutral-400 px-4 py-2.5 text-sm text-neutral-600 transition-all duration-300 hover:gap-3 hover:border-neutral-500 hover:text-neutral-700 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 hover:dark:border-neutral-300 hover:dark:text-neutral-300"
      >
        <DownloadIcon />
        <span>Download Resume</span>
      </Link>

      <GoogleDocsEmbed src="https://docs.google.com/document/d/1zsQNpS3KXvZVjLVL-XwB1vuRL2lihLhLquc8JCpVe4o/edit" />
    </div>
  );
};

export default Resume;
