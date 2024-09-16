import { ComponentProps, ReactNode } from 'react';

interface CheckboxRootProps extends ComponentProps<'div'> {
  children: ReactNode;
  error?: string;
}

export function CheckboxRoot({ children, error, ...props }: CheckboxRootProps) {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-1' {...props}>
        {children}
      </div>
      <p className='mt-1 text-xs text-error/500'>{error}</p>
    </div>
  );
}
