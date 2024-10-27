'use client';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { useContextSelector } from 'use-context-selector';

import { IPricingIntl } from '../../domain/interfaces/LandingPage/IPricingIntl';
import { UsersContext } from '../../contexts/UsersContext';
import { usePlans } from '@/app/shared/@JustLaunch/hooks/usePlans';

interface PlansContentProps {
  intl: IPricingIntl;
}

export function PlansContent({ intl }: PlansContentProps) {
  const user = useContextSelector(UsersContext, (context) => context.user);

  console.log(user);

  const { urls, billingPortal, userWithoutPlan } = usePlans(
    user,
    intl.language
  );

  return (
    <div className='isolate p-8'>
      <div className='mx-auto max-w-7xl text-center'>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          }}
          className='mx-auto mb-8 max-w-4xl'
        >
          {userWithoutPlan ? (
            <p className='mt-2 text-3xl font-bold tracking-tight text-primary/700'>
              {intl.title}
            </p>
          ) : (
            <></>
          )}
        </motion.div>
        {userWithoutPlan ? (
          <p className='mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-600'>
            {intl.subtitle}
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className='flow-root'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid gap-8 lg:grid-cols-2'>
            {intl.pricing.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1 * index,
                  },
                }}
                data-mostPopular={item.mostPopular}
                className='flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm'
              >
                <div>
                  <div className='flex items-center justify-between gap-x-4'>
                    <h3
                      id={item.name}
                      className='text-base font-semibold leading-7 text-primary/700'
                    >
                      {item.name}
                    </h3>
                    {item.mostPopular && (
                      <span className='rounded-full bg-primary/700 px-2.5 py-1 text-xs font-semibold leading-5 text-white'>
                        {intl.textOfMostPopular}
                      </span>
                    )}
                  </div>
                  <div className='mt-4 flex items-baseline gap-x-2'>
                    <span className='text-4xl font-bold tracking-tight text-gray-900'>
                      {item.price}
                    </span>
                    <span className='text-sm font-medium leading-6 text-gray-600'>
                      {item.moreInfoOfPrice}
                    </span>
                  </div>
                  <p className='mt-4 text-sm leading-6 text-gray-600'>
                    {item.description}
                  </p>
                  <ul
                    role='list'
                    className='mt-6 space-y-3 text-sm leading-6 text-gray-600'
                  >
                    {item.features.map((feature) => (
                      <li key={feature} className='flex gap-x-2'>
                        <CheckIcon
                          className='h-5 w-5 flex-none text-primary/600'
                          aria-hidden='true'
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-6 flex flex-col'>
                  <a
                    href={userWithoutPlan ? urls[item.name] : billingPortal}
                    aria-describedby={item.name}
                    className='block rounded-md bg-primary/700 px-4 py-2 text-center text-sm font-semibold leading-6 text-white hover:bg-gray-800'
                  >
                    {userWithoutPlan ? intl.callToAction : intl.cancel}
                  </a>

                  <div className='mt-2 flex items-center justify-center'>
                    <span className='text-xs text-gray-500'>
                      {intl.footerDescription}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
