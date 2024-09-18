import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { Heading, SettingsTabs } from '@/app/shared/@JustLaunch/components';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { useInternationalizationDashboard } from '@/app/shared/@JustLaunch/hooks/contents/useInternationalizationDashboard';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

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
      <Container>
        <Heading title={`${intlSettings.title} - (Demo Page)`} />
        <SettingsTabs
          profile={{ name: session.user.name, email: session.user.email }}
          intl={{ ...intlSettings }}
        />
      </Container>
    </>
  );
}
