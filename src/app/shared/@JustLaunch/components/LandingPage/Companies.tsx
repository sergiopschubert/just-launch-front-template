'use client';
import { motion } from 'framer-motion';
import { HomeworkAI } from './logos/HomeworkAI';
import { LogoEasy } from './logos/LogoEasy';
import { NotificaIgreja } from './logos/NotificaIgreja';
import { ICompaniesIntl } from '../../domain/interfaces/LandingPage/ICompaniesIntl';

interface CompaniesProps {
  intl: ICompaniesIntl;
}

export function Companies({ intl }: CompaniesProps) {
  const companies = [
    { component: HomeworkAI, delay: 0.1 },
    { component: LogoEasy, delay: 0.3 },
    { component: NotificaIgreja, delay: 0.5 },
  ];
  return (
    <div className='bg-primary/50 p-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div className='text-center'>
            <h2 className='text-base font-semibold leading-8 tracking-tight text-primary/600 opacity-80'>
              {intl.title}
            </h2>
          </div>
          <div className='mt-5 flex flex-col items-center justify-center space-y-7 md:flex-row md:items-center md:space-x-10 md:space-y-0'>
            {companies.map(({ component: Component, delay }, index) => (
              <motion.div
                key={index}
                initial={{
                  scale: 0.1,
                }}
                whileInView={{
                  scale: 1.0,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay,
                  },
                }}
              >
                <Component />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
