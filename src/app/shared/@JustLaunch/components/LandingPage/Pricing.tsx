'use client';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { useContextSelector } from 'use-context-selector';
import Link from 'next/link';
import { ReactNode } from 'react';
import { IPricingIntl } from '../../domain/interfaces/LandingPage/IPricingIntl';
import { UsersContext } from '../../contexts/UsersContext';
import { usePlans } from '@/app/shared/@JustLaunch/hooks/usePlans';

interface PricingProps {
  intl: IPricingIntl;
  callToActionToSaveLeads?: ReactNode;
}

export function Pricing({ intl, callToActionToSaveLeads }: PricingProps) {
  const user = useContextSelector(UsersContext, (context) => context.user);
  const { urls, billingPortal, userWithoutPlan } = usePlans(
    user,
    intl.language
  );

  return (
    <div id='pricing' className='relative isolate overflow-hidden'>
      {/* Background com gradiente superior */}
      <div className='absolute inset-x-0 top-0 h-[50rem] bg-gradient-to-b from-primary/50 to-primary/100' />

      {/* Background com gradiente inferior */}
      <div className='absolute inset-x-0 bottom-0 h-[50rem] bg-gradient-to-t from-primary/50 to-primary/100' />

      {/* Padrão decorativo */}
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/50 to-primary/100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className='mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mx-auto max-w-4xl'
        >
          <span className='bg-primary/10 ring-primary/20 inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-primary/100 ring-1 ring-inset'>
            {intl.headerTitle}
          </span>
          <h2 className='mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            {intl.title}
          </h2>
          <p className='mt-4 text-lg leading-8 text-white/60'>
            {intl.subtitle}
          </p>
        </motion.div>
      </div>

      <div className='relative'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2'>
            {intl.pricing.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                data-mostpopular={item.mostPopular}
                className='relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 data-[mostPopular=true]:border-4 data-[mostPopular=true]:border-solid data-[mostPopular=true]:border-primary/800 sm:p-10'
              >
                <div>
                  <div className='flex items-center justify-between gap-x-4'>
                    <h3 className='text-base font-semibold leading-7 text-primary/600'>
                      {item.name}
                    </h3>
                    {item.mostPopular && (
                      <span className='rounded-full bg-primary/600 px-2.5 py-1 text-xs font-semibold leading-5 text-white'>
                        {intl.textOfMostPopular}
                      </span>
                    )}
                  </div>
                  <div className='mt-4 flex items-baseline gap-x-2'>
                    <span className='text-5xl font-bold tracking-tight text-gray-900'>
                      {item.price}
                    </span>
                    <span className='text-base font-semibold leading-7 text-gray-600'>
                      {item.moreInfoOfPrice}
                    </span>
                  </div>
                  <p className='mt-6 text-base leading-7 text-gray-600'>
                    {item.description}
                  </p>
                  <ul className='mt-10 space-y-4 text-sm leading-6 text-gray-600'>
                    {item.features.map((feature) => (
                      <li key={feature} className='flex gap-x-3'>
                        <CheckIcon
                          className='h-6 w-5 flex-none text-primary/600'
                          aria-hidden='true'
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-8'>
                  {!callToActionToSaveLeads ? (
                    user.email ? (
                      <a
                        href={userWithoutPlan ? urls[item.name] : billingPortal}
                        className='block w-full rounded-md bg-primary/600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/600'
                      >
                        {userWithoutPlan ? intl.callToAction : intl.cancel}
                      </a>
                    ) : (
                      <Link
                        href='/signup'
                        className='block w-full rounded-md bg-primary/600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/600'
                      >
                        {intl.callToAction}
                      </Link>
                    )
                  ) : (
                    callToActionToSaveLeads
                  )}
                  <p className='mt-4 text-center text-sm text-gray-500'>
                    {intl.footerDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
