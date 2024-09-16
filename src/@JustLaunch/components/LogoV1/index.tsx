import Image from 'next/image';

interface LogoV1Props {
  width?: number;
  height?: number;
}

export function LogoV1({ width = 60, height = 59 }: LogoV1Props) {
  return (
    <Image
      width={width}
      height={height}
      src={'/logo.png'}
      alt='Logo do Just Launch'
    />
  );
}
