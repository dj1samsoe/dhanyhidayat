'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import { useState } from 'react';
import { BsArrowRightShort as ExternalLinkIcon } from 'react-icons/bs';

import { MenuItemProps } from '@/common/types/menu';

import { useMenu } from '@/context/menu';

export default function MenuItem({
  title,
  href,
  icon,
  onClick,
  className = '',
  children,
  hideIcon = false
}: MenuItemProps) {
  //   const { hideNavbar } = useContext(MenuContext);
  const [isHovered, setIsHovered] = useState(false);
  const { hideMenu } = useMenu();
  const isExternalUrl = href?.includes('http');
  const isHashLink = href === '#';
  const pathname = usePathname();
  const url = new URL(href, 'https://dhanyhidayat.vercel.app/');

  const activeClasses = `flex items-center gap-2 py-2 px-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-200 rounded-lg ${
    pathname === url.pathname
      ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:!text-neutral-200'
      : 'hover:dark:lg:bg-neutral-800 hover:lg:bg-neutral-200 hover:lg:rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300'
  }`;

  const handleClick = () => {
    hideMenu();
    if (onClick) onClick();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const elementProps = {
    className: `${activeClasses} ${className}`,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };

  const isActiveRoute = pathname === url.pathname;

  const itemComponent = () => {
    return (
      <div {...elementProps}>
        {!hideIcon && (
          <div
            className={clsx(
              isHovered && '-rotate-12',
              'transition-all duration-300 dark:text-green-500',
              isActiveRoute && '-rotate-12'
            )}
          >
            {icon}
          </div>
        )}
        <div className="flex-grow ml-0.5">{title}</div>
        {children && <>{children}</>}
        {isActiveRoute && <ExternalLinkIcon size={22} className="text-green-500 animate-pulse" />}
        {isExternalUrl && isHovered && (
          <ExternalLinkIcon size={22} className="text-green-500 -rotate-45 lg:transition-all lg:duration-300" />
        )}
      </div>
    );
  };

  return isHashLink ? (
    <div className="cursor-pointer">{itemComponent()}</div>
  ) : (
    <Link aria-label={title} tabIndex={0} href={href} target={isExternalUrl ? '_blank' : ''} onClick={handleClick}>
      {itemComponent()}
    </Link>
  );
}
