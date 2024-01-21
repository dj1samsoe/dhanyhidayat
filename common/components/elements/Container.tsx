'use client';

import { useSearchParams } from 'next/navigation';

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

export default function Container({ children, className = '', ...others }: ContainerProps) {
  return (
    <div className={`mt-20 mb-10 md:mt-0 p-8 ${className}  `} {...others} data-testid="container">
      {children}
    </div>
  );
}
