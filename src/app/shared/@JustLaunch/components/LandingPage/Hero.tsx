'use client';
import {
  ChevronDown,
  DollarSign,
  Languages,
  Mail,
  Mouse,
  Puzzle,
  ShieldCheck,
  Star,
  Undo,
} from 'lucide-react';
import { IHeroIntl } from '../../domain/interfaces/LandingPage/IHeroIntl';
import { Button } from '../Button';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import { Divider } from '../Divider';
import { FeatureCard } from './FeatureCard';
import { Avatar } from '../Avatar';

interface HeroProps {
  intl: IHeroIntl;
  url: string;
}

export function Hero({ intl, url }: HeroProps) {
  return (
    <div className='bg-primary/50'>
      <Container className='pb-16 pt-20 lg:pt-12'>
        <div className='flex flex-col items-center justify-center space-y-14 text-center md:flex-row md:space-x-9 md:text-left'>
          <div className='w-full md:w-1/2'>
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
            <div className='flex w-full items-center justify-center md:w-1/2 md:items-start md:justify-start'>
              <Link href={url}>
                <Button className='mt-8 max-w-80 p-4 md:p-3'>
                  {intl.callToActionButton}
                </Button>
              </Link>
            </div>

            <div className='flex flex-col items-center space-x-4 py-4 md:flex-row'>
              <div className='flex md:-space-x-4'>
                <Avatar
                  alt='Aneka'
                  className='h-12 w-12 rounded-full border-2 border-primary/50'
                />
                <Avatar
                  alt='Aneka'
                  className='h-12 w-12 rounded-full border-2 border-primary/50'
                />
                <Avatar
                  alt='Aneka'
                  className='h-12 w-12 rounded-full border-2 border-primary/50'
                />
                <Avatar
                  alt='Aneka'
                  className='h-12 w-12 rounded-full border-2 border-primary/50'
                />
                <Avatar
                  alt='Aneka'
                  className='h-12 w-12 rounded-full border-2 border-primary/50'
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

          <div className='flex w-full flex-col gap-y-4 md:h-[500px] md:w-1/2'>
            <FeatureCard
              icon={<ShieldCheck className='text-white' size={26} />}
              title={intl.features.authentication.title}
              description={intl.features.authentication.description}
              bgColor='bg-primary/400'
            />
            <Divider />
            <FeatureCard
              icon={<DollarSign className='text-white' size={26} />}
              title={intl.features.payments.title}
              description={intl.features.payments.description}
              bgColor='bg-primary/500'
            />
            <Divider />
            <FeatureCard
              icon={<Puzzle className='text-white' size={26} />}
              title={intl.features.components.title}
              description={intl.features.components.description}
              bgColor='bg-primary/600'
            />
            <Divider />
            <FeatureCard
              icon={<Mail className='text-white' size={26} />}
              title={intl.features.emails.title}
              description={intl.features.emails.description}
              bgColor='bg-primary/700'
            />
            <Divider />
            <FeatureCard
              icon={<Languages className='text-white' size={26} />}
              title={intl.features.localization.title}
              description={intl.features.localization.description}
              bgColor='bg-primary/800'
            />
            <div className='flex w-full flex-row items-end justify-end font-light text-primary/500'>
              git clone
              <Undo className='h-12 w-12 rotate-90' />
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2'>
          <div className='flex flex-col items-center justify-center space-y-2 pt-5'>
            <Mouse className='h-6 w-6 text-primary/600' />
            <div className='-space-y-3'>
              <ChevronDown className='h-6 w-6 animate-bounce text-primary/600' />
              <ChevronDown className='h-6 w-6 animate-bounce text-primary/600' />
            </div>
          </div>
          <span className='font-light text-primary/600'>{intl.learnMore}</span>
        </div>
      </Container>
    </div>
  );
}
