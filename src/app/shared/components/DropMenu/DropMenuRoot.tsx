import { ComponentProps, ReactNode } from 'react';

interface DropMenuRootProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export function DropMenuRoot({ children }: DropMenuRootProps) {
  return (
    <div className='fixed bottom-10 left-0 z-50 w-52 rounded-br-lg rounded-tr-lg bg-primary/50 bg-opacity-90 px-4 py-2 shadow-md'>
      <div className='flex flex-col items-center'>
        <div className='mt-4 w-full'>{children}</div>
      </div>
    </div>
  );
}
