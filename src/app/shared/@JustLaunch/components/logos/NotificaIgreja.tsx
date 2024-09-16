import Image from 'next/image';

export function NotificaIgreja() {
  return (
    <a
      href='https://notificaigreja.com.br/pt?utm_source=just-launch&utm_medium=website&utm_campaign=site-just-launch'
      className='mx-1 flex items-center gap-2 text-xl font-semibold text-gray-900 opacity-40 hover:opacity-80'
    >
      <Image
        width={50}
        height={49}
        src={'/notificaIgreja.png'}
        alt='Logo do NotificaIgreja'
      />

      <span className='text-lg'>
        Notifica<b>Igreja</b>
      </span>
    </a>
  );
}
