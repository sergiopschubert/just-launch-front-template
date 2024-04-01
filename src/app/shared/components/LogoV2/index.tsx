import Image from "next/image";
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';


interface LogoV2Props extends ComponentProps<'strong'> {}

export function LogoV2({ ...props }: LogoV2Props) {
  return (
    <strong
      className={twMerge(
        'mx-1 flex items-center gap-2 text-xl font-semibold text-primary/50',
        props.className
      )}
    >
      <Image width='50' height='49' src={'/logo.svg'} alt="Logo do Just Launch"/>

      <span className='text-lg'>Just<strong>Launch</strong></span>
    </strong>
  );
}
