import { Slot } from '@radix-ui/react-slot';
import { RotateCwIcon } from 'lucide-react';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: [
    'flex items-center justify-center',
    'rounded-lg py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      outline:
        'hover:bg-primary/100 shadow-none border border-primary/600 w-full text-primary/700',
      ghost: 'rounded-md px-2 hover:bg-primary/100 shadow-none',
      secondary: 'bg-primary/500 text-white hover:bg-primary/600 w-full',
      primary: 'bg-primary/600 text-white hover:bg-primary/700 w-full',
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
