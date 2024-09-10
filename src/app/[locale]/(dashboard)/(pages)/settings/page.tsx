import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { useInternationalizationDashboard } from '../../hooks/contents/useInternationalizationDashboard';
import { Metadata } from 'next';
import { SettingsTabs } from '../../components/SettingTabs';

export const metadata: Metadata = {
  title: 'Settings',
};

export default async function Settings() {
  const session = await getServerSession(nextAuthOptions);

  if (
    !session ||
    !session.user ||
    !session.user?.email ||
    !session.user?.name
  ) {
    redirect('/signin');
  }

  const { intlSettings } = await useInternationalizationDashboard();
  return (
    <>
      <h1 className='text-3xl font-semibold text-zinc-900'>
        {intlSettings.title}
      </h1>
      <SettingsTabs
        profile={{ name: session.user.name, email: session.user.email }}
        intl={{ ...intlSettings }}
      />
    </>
  );
}
