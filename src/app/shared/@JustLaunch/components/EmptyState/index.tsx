import { FolderPlus } from 'lucide-react';
import { ReactNode } from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export function EmptyState({ title, description, children }: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center p-4 text-center'>
      <div className='mb-4'>
        <FolderPlus className='h-14 w-14 text-gray-500' strokeWidth={1.3} />
      </div>
      <h3 className='mb-2 text-lg font-semibold text-gray-700'>{title}</h3>
      <p className='mb-4 text-gray-500'>{description}</p>
      {children && <div>{children}</div>}
    </div>
  );
}
