import { createClient } from '@/app/api/auth/supabase/server';
import { SelectOfLanguages } from '@/app/shared/@JustLaunch/components';
import { Sidebar } from '@/app/shared/@JustLaunch/components';
import { BottomNavigation } from '@/app/shared/@JustLaunch/components';
import { MainNavigation } from '@/app/shared/@JustLaunch/components';
import { useSharedInternationalization } from '@/app/shared/@JustLaunch/hooks/contents/useSharedInternationalization';
import Providers from '@/providers/Providers';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/signin');
  }

  const { language } = await useSharedInternationalization();
  const {
    email,
    user_metadata: { name },
  } = data.user;

  return (
    <html lang='pt-br' className='antialiased'>
      <body className={inter.className}>
        <Providers>
          <div className='relative min-h-screen bg-gray-50 lg:grid lg:grid-cols-app lg:bg-primary/700'>
            <Sidebar
              mainNavigation={<MainNavigation />}
              bottomNavigation={<BottomNavigation />}
              name={name}
              email={email!}
            />

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
