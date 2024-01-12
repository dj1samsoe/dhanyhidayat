import {
  BsRssFill as BlogIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon
} from 'react-icons/bs';
import { RiTwitterXFill as TwitterXIcon } from 'react-icons/ri';

import { SocialItemProps } from '../types/socials';

const iconSize = 20;

export const SOCIAL_MEDIA: SocialItemProps[] = [
  {
    title: 'Github',
    href: 'https://github.com/dj1samsoe',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: 'text-slate-800 hover:bg-slate-800'
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/fauziandhany/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
    className: 'text-[#0b66c2] hover:bg-[#0b66c2]'
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/djisamsoe__',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
    className: 'text-pink-600 hover:bg-pink-600'
  },
  {
    title: 'X',
    href: 'https://x.com/djisamsoe__',
    icon: <TwitterXIcon size={19} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: X',
    className: 'hover:bg-black dark:hover:bg-white dark:text-black'
  },
  {
    title: 'Blog',
    href: 'https://dhanyhidayat.vercel.app/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Blog',
    className: 'text-orange-500 hover:bg-orange-500'
  }
];
