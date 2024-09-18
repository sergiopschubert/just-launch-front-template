import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SubHeadingProps {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
  className?: string;
}

export function SubHeading({
  title,
  level = 2,
  children,
  className,
}: SubHeadingProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <div className='w-full'>
      <div className='flex w-full flex-col sm:flex-row sm:items-center sm:justify-between'>
        <div className='mb-2 sm:mb-0'>
          <Element
            className={twMerge(
              'text-base/7 font-semibold text-gray-950 sm:text-sm/6',
              className
            )}
          >
            {title}
          </Element>
        </div>
        <div className='flex items-center space-x-2'>{children}</div>
      </div>
    </div>
  );
}
