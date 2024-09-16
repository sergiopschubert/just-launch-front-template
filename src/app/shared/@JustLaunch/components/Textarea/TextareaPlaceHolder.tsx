import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { FieldError } from 'react-hook-form';

export interface TextareaPlaceHolderProps extends ComponentProps<'textarea'> {
  error?: FieldError;
}

export const TextareaPlaceHolder = forwardRef<
  HTMLTextAreaElement,
  TextareaPlaceHolderProps
>((props, ref) => {
  return (
    <textarea
      ref={ref}
      data-error={!!props.error}
      className={twMerge(
        'flex min-h-[80px] w-full resize-y items-center gap-2 rounded-lg border border-primary/300 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm outline-none lg:min-w-[520px]',
        'flex w-full items-center gap-2 rounded-lg border border-primary/300 px-3 py-2 shadow-sm outline-none transition duration-300 ease-in-out focus-within:border-primary/300 focus-within:ring focus-within:ring-primary/300 focus-within:ring-opacity-25 focus-within:ring-offset-0 data-[error=true]:border-error/500 focus-within:data-[error=true]:ring-error/500 focus-within:data-[error=true]:ring-opacity-25',
        props.className
      )}
      {...props}
    />
  );
});
TextareaPlaceHolder.displayName = 'TextareaPlaceHolder';
