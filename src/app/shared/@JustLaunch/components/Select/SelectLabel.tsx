import { ComponentProps, ReactNode } from 'react';

interface SelectLabelProps extends ComponentProps<'p'> {
  children: ReactNode;
}

export function SelectLabel({ children }: SelectLabelProps) {
  return (
    <p className='mb-1 ml-1 text-xs font-medium text-gray-700'>{children}</p>
  );
}
