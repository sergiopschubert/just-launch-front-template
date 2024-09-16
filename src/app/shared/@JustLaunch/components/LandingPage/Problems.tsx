'use client';
import { motion } from 'framer-motion';
import { Redo, Undo } from 'lucide-react';
import { IProblemsIntl } from '../../../[locale]/(landing-page)/domain/interfaces/IProblemsIntl';

interface ProblemsProps {
  intl: IProblemsIntl;
}

export function Problems({ intl }: ProblemsProps) {
  return (
    <div className='bg-primary/50'>
      <div className='bg-primary/600 px-8 py-36 text-white shadow-lg md:rounded-b-full md:rounded-t-full'>
        <div className='container mx-auto text-center'>
          <h3 className='text-lg font-semibold leading-8 tracking-tight text-primary/50'>
            {intl?.headerTitle}
          </h3>
          <h2 className='mb-4 text-4xl font-bold'>{intl?.title}</h2>
          <motion.p
            initial={{
              scale: 0.1,
            }}
            whileInView={{
              scale: 1.0,
              transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              },
            }}
            className='mb-8 mt-4 text-lg text-gray-100'
          >
            {intl?.subtitle}
          </motion.p>

          <div className='flex items-center justify-center py-8'>
            <div className='flex flex-col items-center justify-center md:flex-row'>
              <motion.div
                initial={{
                  scale: 0.1,
                }}
                whileInView={{
                  scale: 1.0,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                className='px-8 text-center'
              >
                <span className='mb-2 block text-5xl'>
                  {intl?.problems.option1.emoji}
                </span>
                <p className='font-semibold'>{intl?.problems.option1.text}</p>
              </motion.div>

              <Redo className='my-3 h-12 w-12 rotate-90 md:mt-0 md:rotate-0' />
              <motion.div
                initial={{
                  scale: 0.1,
                }}
                whileInView={{
                  scale: 1.0,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3,
                  },
                }}
                className='px-8 text-center'
              >
                <span className='mb-2 block text-5xl'>
                  {intl?.problems.option2.emoji}
                </span>
                <p className='font-semibold'>{intl?.problems.option2.text}</p>
              </motion.div>
              <Undo className='my-3 h-12 w-12 -rotate-90 md:mt-10 md:rotate-180' />
              <motion.div
                initial={{
                  scale: 0.1,
                }}
                whileInView={{
                  scale: 1.0,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                  },
                }}
                className='px-8 text-center'
              >
                <span className='mb-2 block text-5xl'>
                  {intl?.problems.option3.emoji}
                </span>
                <p className='font-semibold'>{intl?.problems.option3.text}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
