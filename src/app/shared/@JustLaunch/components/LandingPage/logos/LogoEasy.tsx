import Image from 'next/image';

export function LogoEasy() {
  return (
    <a
      href='https://logoeasy.com.br?utm_source=just-launch&utm_medium=website&utm_campaign=site-just-launch'
      className='mx-1 flex items-center gap-2 text-xl font-semibold text-gray-900 opacity-40 hover:opacity-80'
    >
      <Image
        width={50}
        height={49}
        src={'/logoEasy.png'}
        alt='Logo do logoEasy'
      />

      <span className='text-lg'>
        Logo<b>Easy</b>
      </span>
    </a>
  );
}
