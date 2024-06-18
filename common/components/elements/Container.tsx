'use client';

import { useSearchParams } from 'next/navigation';

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

export default function Container({ children, className = '', ...others }: ContainerProps) {
  const searchParams = useSearchParams();
  const readMode = searchParams?.get('read-mode');
  return (
    <div
      className={`mb-10 md:mt-0 p-8 ${readMode === 'true' ? 'mt-6' : 'mt-20'} ${className}  `}
      {...others}
      data-testid="container"
    >
      {children}
    </div>
  );
}
