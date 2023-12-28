import { BiLogoPostgresql } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiChakraui,
  SiCss3,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiThemoviedatabase,
  SiTypescript,
  SiVite,
  SiWordpress
} from 'react-icons/si';

type skillsProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const SKILLS: skillsProps = {
  PHP: <SiPhp size={iconSize} className="text-blue-500" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Bootstrap: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  WordPress: <SiWordpress size={iconSize} />,
  Laravel: <SiLaravel size={iconSize} className="text-red-500" />,
  'Material UI': <SiMui size={iconSize} className="text-sky-400" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  ChakraUI: <SiChakraui size={iconSize} className="text-teal-500" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  'Framer Motion': <SiFramer size={iconSize} />,
  Redux: <SiRedux size={iconSize} className="text-purple-500" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Prisma: <SiPrisma size={iconSize} className="text-teal-500" />,
  'Node JS': <SiNodedotjs size={iconSize} className="text-green-600" />,
  Github: <SiGithub size={iconSize} />,
  MySQL: <SiMysql size={iconSize} />,
  'TMDB API': <SiThemoviedatabase size={iconSize} />,
  Stripe: <SiStripe size={iconSize} />
};
