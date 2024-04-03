import Link from 'next/link';

import { LuDownload as DownloadIcon } from 'react-icons/lu';

const Resume = () => {
  const RESUME_URL = 'https://res.cloudinary.com/dfcwcfx5z/image/upload/v1705136809/djisamsoe/tqfodjdbfbf8zsj6ycky.pdf';

  return (
    <div className="space-y-5">
      {/* <Link
        href={RESUME_URL}
        target="_blank"
        passHref
        className="flex gap-2 hover:gap-3 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-700 mt-6 border border-neutral-400 hover:border-neutral-500 w-fit px-4 py-2.5 rounded-lg dark:border-neutral-600 hover:dark:border-neutral-300 bg-neutral-100 dark:bg-[#4949492e] "
        data-umami-event="Download Resume"
      >
        <DownloadIcon />
        <span>Download Resume</span>
      </Link> */}

      <iframe
        src={RESUME_URL}
        title="Google Drive PDF Viewer"
        width={'100%'}
        height={'800px'}
        frameBorder="0"
        scrolling="no"
      >
        This browser does not support embedding PDFs. Please use a compatible browser.
      </iframe>
    </div>
  );
};

export default Resume;
