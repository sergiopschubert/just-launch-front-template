import { ComponentProps, ReactNode } from 'react';

interface AlertFooterProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export function AlertFooter({ children }: AlertFooterProps) {
  return <div className='flex flex-row gap-2'>{children}</div>;
}
