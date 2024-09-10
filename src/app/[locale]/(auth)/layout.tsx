import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { LogoV1 } from '@/@JustLaunch/components';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface AuthLayoutProps {
  children: ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await getServerSession(nextAuthOptions);
  if (session) {
    redirect('/home');
  }
  return (
    <html lang='pt-br' className='antialiased'>
      <body className={inter.className}>
        <div className='flex min-h-screen items-center justify-center bg-primary/600'>
          <div className='h-auto w-96 rounded-md bg-white text-center shadow-md'>
            <main className='my-5'>
              <div className='flex flex-col items-center justify-center'>
                <LogoV1 />
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
