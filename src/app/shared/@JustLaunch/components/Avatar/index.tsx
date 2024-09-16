import Image from 'next/image';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface AvatarProps extends ComponentProps<'img'> {
  imageUri?: string;
}

export function Avatar({
  className,
  imageUri = 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Aneka&backgroundColor=bfdbfe&eyes=happy',
}: AvatarProps) {
  return (
    <Image
      src={imageUri}
      className={twMerge('h-10 w-10 rounded-full', className)}
      alt={'Avatar image'}
    />
  );
}
