import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { SelectOfLanguages } from '@/@JustLaunch/components';
import { Sidebar } from '@/@JustLaunch/components';
import { BottomNavigation } from '@/@JustLaunch/components';
import { MainNavigation } from '@/@JustLaunch/components';
import { useSharedInternationalization } from '@/app/shared/hooks/contents/useSharedInternationalization';
import Providers from '@/providers/Providers';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (
    !session ||
    !session.user ||
    !session.user?.email ||
    !session.user?.name
  ) {
    redirect('/signin');
  }

  const { language } = await useSharedInternationalization();
  const { email, name } = session.user;

  return (
    <html lang='pt-br' className='antialiased'>
      <body className={inter.className}>
        <Providers>
          <div className='relative min-h-screen bg-gray-50 lg:grid lg:grid-cols-app lg:bg-primary/700'>
            <Sidebar
              mainNavigation={<MainNavigation />}
              bottomNavigation={<BottomNavigation />}
              name={name}
              email={email}
            ></Sidebar>

            <main className='max-w-screen rounded-tl-3xl bg-gray-50 pb-12 pt-24 lg:col-start-2 lg:mt-5 lg:w-auto lg:px-8 lg:pt-8'>
              <div className='max-w-screen flex flex-row items-center justify-end pr-12 md:pr-5'>
                <SelectOfLanguages principalLanguage={language} />
              </div>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
