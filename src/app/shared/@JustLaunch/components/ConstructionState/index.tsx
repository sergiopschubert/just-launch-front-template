import { ReactNode } from 'react';
import { Hammer } from 'lucide-react';

interface ConstructionStateProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export function ConstructionState({
  title,
  description,
  children,
}: ConstructionStateProps) {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center rounded border border-dashed border-gray-600 text-center'>
      <div className='mb-4'>
        <Hammer className='h-14 w-14 text-gray-500' strokeWidth={1.3} />
      </div>
      <h3 className='mb-2 text-lg font-semibold text-gray-700'>{title}</h3>
      <p className='mb-4 text-gray-500'>{description}</p>
      {children && <div>{children}</div>}
    </div>
  );
}
