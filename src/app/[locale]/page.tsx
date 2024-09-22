import Providers from '@/providers/Providers';
import {
  CallToAction,
  CookieBanner,
  Faq,
  Features,
  Footer,
  Header,
  Hero,
  Pricing,
  Problems,
  Stats,
  Testimonials,
} from '../shared/@JustLaunch/components/LandingPage';
import { useLandingPageInternationalization } from '../shared/@JustLaunch/hooks/contents/useLandingPageInternationalization';

export default async function LandingPage() {
  const {
    headerIntl,
    heroIntl,
    problemsIntl,
    footerIntl,
    callToActionIntl,
    statsIntl,
    testimonialsIntl,
    faqsIntl,
    pricingIntl,
    featuresIntl,
    cookieBannerIntl,
  } = await useLandingPageInternationalization();

  return (
    <>
      <Providers>
        <Header intl={headerIntl} session={null} />
        <Hero intl={heroIntl} url={'/signup'} />
        <Problems intl={problemsIntl} />
        <Features intl={featuresIntl} />
        <Testimonials intl={testimonialsIntl} />
        <Stats intl={statsIntl} />
        <Pricing intl={pricingIntl} />
        <Faq intl={faqsIntl} />
        <CallToAction intl={callToActionIntl} />
        <Footer intl={footerIntl} />
        <CookieBanner intl={cookieBannerIntl} />
      </Providers>
    </>
  );
}
