'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ICallToActionIntl } from '../../domain/interfaces/LandingPage/ICallToActionIntl';
import Image from 'next/image';

interface CallToActionProps {
  intl: ICallToActionIntl;
  callToActionToSaveLeads?: ReactNode;
}

export function CallToAction({
  intl,
  callToActionToSaveLeads,
}: CallToActionProps) {
  return (
    <div className='bg-primary/50'>
      <motion.div
        initial={{
          scale: 0.4,
        }}
        whileInView={{
          scale: 1.0,
          transition: {
            type: 'spring',
            stiffness: 260,
            damping: 20,
          },
        }}
        className='mx-auto max-w-7xl py-16 sm:px-6 sm:py-32 lg:px-8'
      >
        <div className='relative isolate overflow-hidden bg-primary/600 px-6 pb-10 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pb-2 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                <stop stopColor='#ffff' />
                <stop offset={1} stopColor='#fff' />
              </radialGradient>
            </defs>
          </svg>
          <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              {intl?.title}
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-200'>
              {intl?.description}
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
              {!callToActionToSaveLeads ? (
                <>
                  <a
                    href='#'
                    className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary/800 shadow-sm hover:bg-primary/800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    {intl?.firstButton}
                  </a>
                  <Link
                    href='/signup'
                    className='p-2 text-sm font-semibold leading-6 text-white hover:rounded-md hover:bg-primary/900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    {intl?.secondButton} <span aria-hidden='true'>→</span>
                  </Link>
                </>
              ) : (
                callToActionToSaveLeads
              )}
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className='relative mt-16 hidden h-80 md:block lg:mt-8'
          >
            <Image
              className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
              src='https://via.placeholder.com/1920x1800'
              alt='Image'
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
