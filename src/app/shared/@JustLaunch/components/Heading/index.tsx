import React from 'react';
import { Divider } from '../Divider';

interface HeadingProps {
  title: string;
  children?: React.ReactNode;
}

export function Heading({ title, children }: HeadingProps) {
  return (
    <div className='w-full'>
      <div className='flex w-full flex-col sm:flex-row sm:items-center sm:justify-between'>
        <div className='mb-2 sm:mb-0'>
          <h1 className='text-3xl font-semibold'>{title}</h1>
        </div>
        <div className='flex items-center space-x-2'>{children}</div>
      </div>
      <Divider className='mt-3' />
    </div>
  );
}
