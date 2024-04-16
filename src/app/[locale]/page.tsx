import Providers from '@/providers/Providers';
import { CheckIcon } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '../api/auth/[...nextauth]/auth';
import {
  CallToAction,
  Faq,
  Features,
  Footer,
  Header,
  Hero,
  Problems,
  Stats,
  Testimonials,
} from './(LandingPage)/components';
import { useLandingPageInternationalization } from './(LandingPage)/hooks/contents/useLandingPageInternationalization';
import { Pricing } from './(LandingPage)/components/Pricing';

export default async function LandingPage() {
  const session = await getServerSession(nextAuthOptions);
  const {
    headerIntl,
    heroIntl,
    problemsIntl,
    footerIntl,
    callToActionIntl,
    statsIntl,
    testimonialsIntl,
    faqsIntl,
    cookiesIntl,
    pricingIntl,
    featuresIntl,
  } = await useLandingPageInternationalization();

  return (
    <>
      <Providers>
        <Header intl={headerIntl} session={session} />
        <Hero intl={heroIntl} />
        <Problems intl={problemsIntl} />
        <Features intl={featuresIntl} />
        <Testimonials intl={testimonialsIntl} />
        <Stats intl={statsIntl} />
        <Pricing intl={pricingIntl} />
        <Faq intl={faqsIntl} />
        <CallToAction intl={callToActionIntl} />
        <Footer intl={footerIntl} />
      </Providers>
    </>
  );
}
