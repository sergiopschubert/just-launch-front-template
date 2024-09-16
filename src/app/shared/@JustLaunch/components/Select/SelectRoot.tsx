import { ComponentProps, ReactNode } from 'react';

interface SelectRootProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export function SelectRoot({ children, ...props }: SelectRootProps) {
  return (
    <div {...props} className='flex flex-col items-start'>
      {children}
    </div>
  );
}
