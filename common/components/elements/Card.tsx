import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

export default function Card({ children, className = '', ...others }: CardProps) {
  return (
    <div className={`rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md ${className} `} {...others}>
      {children}
    </div>
  );
}
