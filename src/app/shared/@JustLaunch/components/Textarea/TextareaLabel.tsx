import { ComponentProps, ReactNode } from 'react';

interface TextareaLabelProps extends ComponentProps<'p'> {
  children: ReactNode;
}

export function TextareaLabel({ children }: TextareaLabelProps) {
  return (
    <p className='mb-1 ml-1 text-xs font-medium text-gray-700'>{children}</p>
  );
}
