import { ComponentProps, ReactNode } from 'react';

interface TextareaRootProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export function TextareaRoot({ children }: TextareaRootProps) {
  return <div className='flex flex-col items-start'>{children}</div>;
}
