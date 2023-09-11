import {
  BiLineChart as AnalyticsIcon,
  BiEnvelope as ContactIcon,
  BiBarChartSquare as DashboardIcon,
  BiBookBookmark as LearnIcon,
  BiGitCompare as RoadmapIcon,
  BiAt as ThreadsIcon
} from 'react-icons/bi';
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
  BsTwitter as TwitterIcon
} from 'react-icons/bs';
import { CgProfile as ProfileIcon } from 'react-icons/cg';
import { PiNotePencilBold as BlogIcon, PiProjectorScreenChartBold as ProjectIcon } from 'react-icons/pi';
import { TbHomeHeart as HomeIcon } from 'react-icons/tb';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home'
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects'
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog'
  },
  {
    title: 'Learn',
    href: '/learn',
    icon: <LearnIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Learn'
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: 'Pages: Contact'
  },
  {
    title: 'Roadmap',
    href: '/roadmap?tribe=frontend-developer',
    icon: <RoadmapIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Roadmap'
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard'
  }
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Github',
    href: 'https://github.com/dj1samsoe',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github'
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/fauziandhany/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin'
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/djisamsoe__',
    icon: <TwitterIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Twitter'
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/djisamsoe__',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram'
  },
  {
    title: 'Threads',
    href: '',
    icon: <ThreadsIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: 'Social: Threads'
  },
  {
    title: 'TikTok',
    href: 'https://www.tiktok.com/@dj1samsoe__',
    icon: <TiktokIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Tiktok'
  }
];
