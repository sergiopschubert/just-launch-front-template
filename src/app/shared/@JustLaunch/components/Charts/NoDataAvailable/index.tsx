import { ComponentProps } from 'react';
import { AlertCircle } from 'lucide-react';

interface NoDataAvailableProps extends ComponentProps<'div'> {}

export function NoDataAvailable({ ...divProps }: NoDataAvailableProps) {
  return (
    <div className='flex h-64 w-full items-center justify-center' {...divProps}>
      <div className='text-center'>
        <AlertCircle className='mx-auto h-12 w-12 text-gray-400' />
        <p className='mt-2 text-gray-500'>Nenhum dado disponível</p>
      </div>
    </div>
  );
}
