import { ComponentProps, ReactNode } from 'react';

interface AlertMessageProps extends ComponentProps<'p'> {
  children: ReactNode;
}

export function AlertMessage({ children }: AlertMessageProps) {
  return <p className='font-light'>{children}</p>;
}
