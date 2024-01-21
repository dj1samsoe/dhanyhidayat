import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  className?: string;
  icon?: ReactNode;
}

export default function SectionHeading({ title, icon, className = '' }: SectionHeadingProps) {
  return (
    <div
      className={`flex items-center gap-1 text-xl font-medium text-neutral-800 dark:text-neutral-300 ${className}`}
      data-testid="section-heading"
    >
      {icon && <>{icon}</>}
      <h2 className="capitalize" data-testid="title">
        {title}
      </h2>
    </div>
  );
}
