import Image from 'next/image';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface AvatarProps extends ComponentProps<'img'> {
  imageUri?: string;
  alt?: string;
}

export function Avatar({
  className,
  alt = 'Avatar image',
  imageUri = 'https://api.dicebear.com/7.x/bottts-neutral/png?seed=Aneka&backgroundColor=bfdbfe&eyes=happy',
}: AvatarProps) {
  return (
    <Image
      src={imageUri}
      width={40}
      height={40}
      className={twMerge('h-10 w-10 rounded-full', className)}
      alt={alt}
    />
  );
}
