import Image from 'next/image';

export function HomeworkAI() {
  return (
    <a
      href='https://www.homeworkai.com.br/en?utm_source=just-launch&utm_medium=website&utm_campaign=site-just-launch'
      className='mx-1 flex items-center gap-2 text-xl font-semibold text-gray-900 opacity-40 hover:opacity-80'
    >
      <Image
        width={50}
        height={49}
        src={'/homeworkai.png'}
        alt='Logo do HomeworkAI'
      />

      <span className='text-lg'>
        Homework<b>AI</b>
      </span>
    </a>
  );
}
