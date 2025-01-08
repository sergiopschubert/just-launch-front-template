'use client';
import { motion } from 'framer-motion';
import { IStatsIntl } from '../../domain/interfaces/LandingPage/IStatsIntls';

interface StatsProps {
  intl: IStatsIntl;
}

export function Stats({ intl }: StatsProps) {
  return (
    <div className='relative isolate overflow-hidden bg-gradient-to-b from-primary/50 to-primary/100'>
      <div
        className='absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-20 blur-3xl'
        aria-hidden='true'
      >
        <div
          className='ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary/100 to-primary/200'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div
        className='absolute -left-20 top-0 -z-10 transform-gpu overflow-hidden opacity-30 blur-3xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/50 to-primary/100'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div
        className='absolute -right-20 bottom-0 -z-10 transform-gpu overflow-hidden opacity-30 blur-3xl'
        aria-hidden='true'
      >
        <div
          className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/100 to-primary/50'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div className='flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='max-w-xl'
            >
              <h3 className='text-lg font-semibold leading-8 tracking-tight text-primary/500'>
                {intl?.headerTitle}
              </h3>
              <h2 className='mt-4 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl'>
                {intl?.title}
              </h2>
              <p className='mt-4 text-lg leading-8 text-gray-600'>
                {intl?.subtitle}
              </p>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='grid flex-1 grid-cols-2 gap-x-8 gap-y-12 text-center sm:grid-cols-2'
            >
              {intl?.stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className='flex flex-col items-center justify-center'
                >
                  <motion.dd
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.1,
                    }}
                    className='text-4xl font-bold tracking-tight text-gray-800 lg:text-6xl'
                  >
                    {stat.value}
                  </motion.dd>
                  <motion.dt
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className='mt-2 text-sm text-primary/600'
                  >
                    {stat.title}
                  </motion.dt>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </div>
  );
}
