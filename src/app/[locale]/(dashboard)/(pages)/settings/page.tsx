import { createClient } from '@/app/api/auth/supabase/server';
import { Heading, SettingsTabs } from '@/app/shared/@JustLaunch/components';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { useInternationalizationDashboard } from '@/app/shared/@JustLaunch/hooks/contents/useInternationalizationDashboard';
import { useLandingPageInternationalization } from '@/app/shared/@JustLaunch/hooks/contents/useLandingPageInternationalization';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {};

export default async function Settings() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user.email || !data.user.user_metadata.name) {
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
          profile={{
            name: data.user.user_metadata.name,
            email: data.user.email,
          }}
          intl={{ ...intlSettings }}
          intlPricing={{ ...pricingIntl }}
        />
      </Container>
    </>
  );
}
