import Link from 'next/link';

import { BsGithub as GithubIcon } from 'react-icons/bs';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { GITHUB_ACCOUNTS } from '@/common/constant/github';

import Calendar from './Calendar';
import Overview from './Overview';

type ContributionsProps = {
  githubData: any;
};

export default function Contributions({ githubData }: ContributionsProps) {
  return (
    <section className="flex flex-col gap-y-2">
      <SectionHeading title="Contributions" icon={<GithubIcon className="mr-1" />} />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">My contributions from last year on github</p>
        <Link
          href={`https://github.com/${GITHUB_ACCOUNTS.username}`}
          target="_blank"
          passHref
          className="text-sm font-code text-neutral-600 dark:text-neutral-500 hover:text-neutral-800 hover:dark:text-neutral-400"
        >
          @{GITHUB_ACCOUNTS.username}
        </Link>
      </SectionSubHeading>

      <div className="flex flex-col space-y-3 justify-center md:space-x-3 md:space-y-0 md:flex-row">
        <img
          height="150"
          width="300"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=dj1samsoe&layout=compact&theme=transparent&hide=php&langs_count=6&title_color=18A44B"
          alt="language-github"
        />
        <a href="https://wakatime.com/@dj1samsoe" target="_blank">
          <img
            height="175"
            width="500"
            src="https://github-readme-stats.vercel.app/api/wakatime?username=dj1samsoe&layout=compact&theme=transparent&langs_count=6&title_color=18A44B"
            alt="wakatime-stats"
          />
        </a>
      </div>

      {!githubData && <div className="dark:text-neutral-400">No Data</div>}

      {githubData && (
        <div className="space-y-3">
          <Overview data={githubData} />
          <Calendar data={githubData} />
        </div>
      )}
    </section>
  );
}
