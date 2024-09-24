import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { Heading, SettingsTabs } from '@/app/shared/@JustLaunch/components';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { useInternationalizationDashboard } from '@/app/shared/@JustLaunch/hooks/contents/useInternationalizationDashboard';
import { useLandingPageInternationalization } from '@/app/shared/@JustLaunch/hooks/contents/useLandingPageInternationalization';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {};

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
  const { pricingIntl } = await useLandingPageInternationalization();
  metadata.title = intlSettings.metadata.title;
  return (
    <>
      <Container>
        <Heading title={`${intlSettings.title}`} />
        <SettingsTabs
          profile={{ name: session.user.name, email: session.user.email }}
          intl={{ ...intlSettings }}
          intlPricing={{ ...pricingIntl }}
        />
      </Container>
    </>
  );
}
