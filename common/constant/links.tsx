import { BiCalendar as ChitChatIcon, BiCoffee as CoffeeIcon, BiPin as WebsiteIcon } from 'react-icons/bi';

import { LinkProps } from '../types/link';

export const LINKS: LinkProps[] = [
  {
    label: 'Personal Website & Portfolio',
    icon: <WebsiteIcon size={21} className="text-neutral-600" />,
    href: 'https://dhanyhidayat.vercel.app/',
    className: 'bg-emerald-700',
    target: '_blank'
  },
  {
    label: '1 on 1 Chit Chat Session',
    icon: <ChitChatIcon size={21} className="text-neutral-600" />,
    href: 'https://cal.com/dhanyhidayat',
    className: 'bg-rose-600',
    target: '_blank'
  },
  {
    label: 'Buy me a Cup of Coffee',
    icon: <CoffeeIcon size={21} className="text-neutral-600" />,
    href: 'https://saweria.co/dhanyhidayat',
    className: 'bg-sky-700',
    target: '_blank'
  }
];
