import { Slot } from '@radix-ui/react-slot';
import { RotateCwIcon } from 'lucide-react';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: [
    'flex items-center justify-center',
    'rounded-lg py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      ghost: 'rounded-md px-2 hover:bg-primary/100 shadow-none',
      primary: 'bg-primary/600 text-white hover:bg-primary/700 w-full',
      outline:
        'px-2 border border-primary/600 text-primary/600 hover:bg-primary/50',
      delete:
        'w-full px-2 border border-error/500 text-error/500 hover:bg-error/100',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    loading?: boolean;
    isSlot?: boolean;
  };

export function Button({
  loading = false,
  isSlot = false,
  variant,
  className,
  ...props
}: ButtonProps) {
  return isSlot ? (
    <Slot
      className={twMerge(
        'data-[loading=true]:cursor-not-allowed data-[loading=true]:opacity-60',
        button({ variant }),
        className
      )}
    >
      {props.children}
    </Slot>
  ) : (
    <button
      data-loading={loading}
      disabled={loading}
      {...props}
      className={twMerge(
        'data-[loading=true]:cursor-not-allowed data-[loading=true]:opacity-60',
        button({ variant }),
        className
      )}
    >
      {loading ? <RotateCwIcon className='animate-spin' /> : props.children}
    </button>
  );
}
