import { LogoV2 } from '@/app/shared/components/LogoV2';
import { CloudUpload, Facebook, Instagram, Youtube } from 'lucide-react';
import { IFooterIntl } from '../domain/interfaces/IFooter';

interface FooterProps {
  intl: IFooterIntl;
}

export function Footer({ intl }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const icons: { [key: string]: JSX.Element } = {
    Instagram: <Instagram className='h-6 w-6' aria-hidden='true' />,
    Facebook: <Facebook className='h-6 w-6' aria-hidden='true' />,
    Youtube: <Youtube className='h-6 w-6' aria-hidden='true' />,
  };

  return (
    <footer className='bg-primary/700' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <LogoV2 />
            <p className='text-sm leading-6 text-primary/50'>
              {intl?.description}
            </p>
            <div className='flex space-x-6'>
              {intl.navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-primary/50 hover:text-primary/200'
                >
                  <span className='sr-only'>{item.name}</span>
                  {icons[item.name]}
                </a>
              ))}
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div></div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  {intl?.menuTitle3}
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {intl?.navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-primary/50 hover:text-primary/200'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  {intl?.menuTitle1}
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {intl?.navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-primary/50 hover:text-primary/200'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  {intl?.menuTitle2}
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {intl?.navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-primary/50 hover:text-primary/200'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='md: mt-16 flex flex-col justify-between border-t border-white/10 pt-8 sm:mt-20 md:flex-row lg:mt-24'>
          <a href='#'>
            <p className='text-xs leading-5 text-primary/50'>
              &copy; {currentYear} {intl?.menuTitle3}, {intl?.copyright}
            </p>
          </a>
          <a
            className='h-8 w-[270px] rounded border border-white/20 bg-primary/600 shadow hover:border-white/50'
            href='https://justlaunch.com.br?affiliate=true'
          >
            <p className='flex w-full flex-row items-center justify-center pt-1 font-normal text-white/60 hover:text-white'>
              Construído com{' '}
              <CloudUpload className='mx-2 h-5 w-5' strokeWidth={'2.9px'} />
              Just<span className='font-bold'>Launch</span>
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
