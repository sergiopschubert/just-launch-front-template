import { LogoV2 } from '@/@JustLaunch/components/LogoV2';

export default async function LandingPage() {
  return (
    <div className='bg-primary/50'>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <LogoV2 className='w-auto text-gray-900' />
          </div>
          <div className='text-center'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Vamos começar!
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Acesse o tutorial para aprender a criar uma landing page em poucos
              minutos com Just<b>Launch</b>
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='https://docs.justlaunch.com.br/docs/just-launch'
                className='rounded-md bg-primary/600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Acessar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
