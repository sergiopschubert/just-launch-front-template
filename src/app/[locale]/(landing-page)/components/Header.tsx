'use client';
import { Container } from '@/app/[locale]/(landing-page)/components/Container';
import { NavLink } from '@/app/[locale]/(landing-page)/components/NavLink';
import { Profile } from '@/app/[locale]/(users)/components/Profile';
import { Button } from '@/app/shared/components/Button';
import { LogoV2 } from '@/app/shared/components/LogoV2';
import { SelectOfLanguages } from '@/app/shared/components/SelectOfLanguages';
import { Popover, Transition } from '@headlessui/react';
import { Session } from 'next-auth';
import Link from 'next/link';
import { Fragment, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { IHeaderIntl } from '../domain/interfaces/IHeaderIntl';

interface HeaderProps {
  intl: IHeaderIntl;
  session: Session | null;
  withoutMenu?: boolean;
  callToActionToSaveLeads?: ReactNode;
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Popover.Button as={Link} href={href} className='block w-full p-2'>
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden='true'
      className='h-3.5 w-3.5 overflow-visible stroke-gray-700'
      fill='none'
      strokeWidth={2}
      strokeLinecap='round'
    >
      <path
        d='M0 1H14M0 7H14M0 13H14'
        className={twMerge(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d='M2 2L12 12M12 2L2 12'
        className={twMerge(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  );
}

function MobileNavigation({
  intl,
  session,
  callToActionToSaveLeads,
}: HeaderProps) {
  return (
    <Popover>
      <Popover.Button
        className='ui-not-focus-visible:outline-none relative z-10 flex h-8 w-8 items-center justify-center'
        aria-label='Toggle Navigation'
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='bg-gray/500/50 fixed inset-0' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            as='div'
            className='text-gray/900 ring-gray/900/5 absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight shadow-xl ring-1'
          >
            <MobileNavLink href='#features'>{intl?.menu.option1}</MobileNavLink>
            <MobileNavLink href='#testimonials'>
              {intl?.menu.option2}
            </MobileNavLink>
            <MobileNavLink href='#pricing'>{intl?.menu.option3}</MobileNavLink>
            <MobileNavLink href='#doubts'>{intl?.menu.option4}</MobileNavLink>
            <hr className='border-gray/500/40 m-2' />
            {session ? (
              <>
                <MobileNavLink href='/home'>
                  {intl?.buttons.option3}
                </MobileNavLink>
              </>
            ) : !callToActionToSaveLeads ? (
              <MobileNavLink href='/signin'>
                {intl?.buttons.option1}
              </MobileNavLink>
            ) : (
              callToActionToSaveLeads
            )}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header({
  intl,
  session,
  withoutMenu,
  callToActionToSaveLeads,
}: HeaderProps) {
  return (
    <>
      <header className='bg-primary/50 py-10'>
        <Container>
          <nav className='relative z-50 flex justify-between'>
            <div className='flex items-center lg:gap-x-12'>
              <Link href='/' aria-label='Home'>
                <LogoV2 className='w-auto text-gray-900' />
              </Link>
              {withoutMenu ? (
                <></>
              ) : (
                <div className='hidden lg:flex lg:gap-x-6'>
                  <NavLink href='#features'>{intl?.menu.option1}</NavLink>
                  <NavLink href='#testimonials'>{intl?.menu.option2}</NavLink>
                  <NavLink href='#pricing'>{intl?.menu.option3}</NavLink>
                  <NavLink href='#doubts'>{intl?.menu.option4}</NavLink>
                </div>
              )}
            </div>
            {session && session.user?.email && session.user?.name ? (
              <div className='flex items-center gap-x-5 md:gap-x-8'>
                <div className='hidden lg:block'>
                  <Link href={'/home'}>
                    <Button variant='primary' className='p-3'>
                      {intl?.buttons.option3}
                    </Button>
                  </Link>
                </div>
                <div className='hidden md:block'>
                  <Profile
                    email={session.user?.email}
                    name={session.user?.name}
                    dark={true}
                  />
                </div>
                {withoutMenu ? (
                  <></>
                ) : (
                  <div className='-mr-1 lg:hidden'>
                    <MobileNavigation
                      intl={intl}
                      session={session}
                      callToActionToSaveLeads={callToActionToSaveLeads}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className='flex items-center gap-x-5 md:gap-x-8'>
                {!callToActionToSaveLeads ? (
                  <>
                    <div className='hidden lg:block'>
                      <NavLink href='/signin'>{intl?.buttons.option1}</NavLink>
                    </div>
                    <Link href={'/signup'}>
                      <Button variant='primary' className='hidden p-3 md:block'>
                        {intl?.buttons.option2}
                      </Button>
                    </Link>
                  </>
                ) : (
                  callToActionToSaveLeads
                )}

                <SelectOfLanguages principalLanguage={intl?.language} />

                {withoutMenu ? (
                  <></>
                ) : (
                  <div className='-mr-1 lg:hidden'>
                    <MobileNavigation intl={intl} session={session} />
                  </div>
                )}
              </div>
            )}
          </nav>
        </Container>
      </header>
    </>
  );
}
