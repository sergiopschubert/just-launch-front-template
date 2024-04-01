import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { SettingsTabs } from '@/app/[locale]/(users)/components/Settingtabs';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { useInternationalizationUser } from '../../../hooks/useInternationalizationUser';

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

  const { intlSettings } = await useInternationalizationUser();
  return (
    <>
      <h1 className='text-3xl font-semibold text-zinc-900'>
        {intlSettings.title}
      </h1>
      <SettingsTabs
        profile={{name: session.user.name, email: session.user.email}}
        intl={{ ...intlSettings}}
      />
    </>
  );
}
