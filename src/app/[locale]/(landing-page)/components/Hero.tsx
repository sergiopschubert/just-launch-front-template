'use client';
import { Container } from '@/app/[locale]/(landing-page)/components/Container';
import { Button } from '@/app/shared/components/Button';
import { ChevronDown, Mouse, Star } from 'lucide-react';
import { IHeroIntl } from '../domain/interfaces/IHeroIntl';

interface HeroProps {
  intl: IHeroIntl;
}

export function Hero({ intl }: HeroProps) {
  return (
    <div className='bg-primary/50'>
      <Container className='pb-16 pt-20 lg:pt-12'>
        <div className='flex flex-col items-center justify-center space-y-14 text-center md:flex-row md:space-x-9 md:text-left'>
          <div className='w-1/2'>
            <h1 className='text-5xl font-bold text-gray-800'>
              {intl.title}{' '}
              <span className='relative whitespace-nowrap text-primary/600'>
                <svg
                  aria-hidden='true'
                  viewBox='0 0 418 42'
                  className='absolute left-0 top-2/3 h-[0.58em] w-full fill-primary/300/70'
                  preserveAspectRatio='none'
                >
                  <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />
                </svg>
                <span className='relative'>{intl.titleWithEffect}</span>
              </span>{' '}
            </h1>
            <p className='mt-4 max-w-lg text-gray-700'>{intl.subtitle}</p>
            <Button className='mt-8 max-w-80 p-3'>
              {intl.callToActionButton}
            </Button>
            <div className='flex flex-col items-center space-x-4 py-4 md:flex-row'>
              <div className='flex md:-space-x-4'>
                <img
                  className='h-12 w-12 rounded-full border-2 border-primary/50'
                  src='https://via.placeholder.com/48x48'
                  alt='User 1'
                />
                <img
                  className='h-12 w-12 rounded-full border-2 border-primary/50'
                  src='https://via.placeholder.com/48x48'
                  alt='User 2'
                />
                <img
                  className='h-12 w-12 rounded-full border-2 border-primary/50'
                  src='https://via.placeholder.com/48x48'
                  alt='User 3'
                />
                <img
                  className='h-12 w-12 rounded-full border-2 border-primary/50'
                  src='https://via.placeholder.com/48x48'
                  alt='User 4'
                />
                <img
                  className='h-12 w-12 rounded-full border-2 border-primary/50'
                  src='https://via.placeholder.com/48x48'
                  alt='User 5'
                />
              </div>

              <div className='mt-2 flex flex-col items-center justify-center md:mt-0 md:items-start md:justify-start'>
                <div className='flex text-2xl  text-yellow-400'>
                  <Star fill='#facc15' />
                  <Star fill='#facc15' />
                  <Star fill='#facc15' />
                  <Star fill='#facc15' />
                  <Star fill='#facc15' />
                </div>
                <span className='font-medium text-gray-400'>
                  <strong className='text-gray-500'>
                    {intl.testimonials.numberOfClients}
                  </strong>{' '}
                  {intl.testimonials.text}
                </span>
              </div>
            </div>
          </div>

          <div className='w-full md:h-[500px] md:w-1/2'>
            <img
              src='https://via.placeholder.com/1280x500'
              alt='Imagem de exemplo'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center space-y-2 pt-5'>
          <Mouse className='h-6 w-6 text-primary/700' />
          <ChevronDown className='h-6 w-6 animate-bounce text-primary/700' />
        </div>
      </Container>
    </div>
  );
}
