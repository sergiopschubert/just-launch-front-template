import { ComponentProps } from 'react';

interface ValidationErrorProps extends ComponentProps<'div'> {}

export function ValidationError({ ...divProps }: ValidationErrorProps) {
  return (
    <div className='flex h-64 w-full items-center justify-center' {...divProps}>
      <p className='text-red-500'>
        Por favor, insira os nomes dos campos para X e Y.
      </p>
    </div>
  );
}
