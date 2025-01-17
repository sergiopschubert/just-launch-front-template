'use client';

import { twMerge } from 'tailwind-merge';

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={twMerge(
        'prose prose-lg max-w-none',
        'prose-headings:font-display prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:tracking-tight',
        'prose-a:text-primary/600 hover:prose-a:text-primary/500',
        'prose-p:leading-7',
        'prose-pre:rounded-xl prose-pre:bg-gray-900 prose-pre:shadow-lg',
        'prose-code:text-primary/600 prose-code:before:content-none prose-code:after:content-none',
        'prose-strong:text-primary/900',
        'prose-h1:text-primary/900',
        'prose-h2:text-primary/800',
        'prose-h3:text-primary/700',
        className
      )}
      {...props}
    />
  );
}
