import Image from 'next/image';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { LogoV1 } from '../LogoV1';

interface LogoV2Props extends ComponentProps<'strong'> {}

export function LogoV2({ ...props }: LogoV2Props) {
  return (
    <strong
      className={twMerge(
        'mx-1 flex items-center gap-2 text-xl font-semibold text-primary/50',
        props.className
      )}
    >
      <LogoV1 width={50} height={49} />

      <span className='text-lg'>
        Just<strong>Launch</strong>
      </span>
    </strong>
  );
}
