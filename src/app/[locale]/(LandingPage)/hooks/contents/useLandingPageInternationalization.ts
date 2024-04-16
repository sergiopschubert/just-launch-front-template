import { useCallToActionInternationalization } from './useCallToActionInternationalization';
import { useCookieInternationalization } from './useCookieInternationalization';
import { useFaqsInternationalization } from './useFaqsInternationalization';
import { useFeaturesInternationalization } from './useFeaturesInternationalization';
import { useFooterInternationalization } from './useFooterInternationalization';
import { useHeaderInternationalization } from './useHeaderInternationalization';
import { useHeroInternationalization } from './useHeroInternationalization';
import { usePricingInternationalization } from './usePricingInternationalization';
import { useProblemsInternationalization } from './useProblemsInternationalization';
import { useStatsInternationalization } from './useStatsInternationalization';
import { useTestimonialsInternationalization } from './useTestimonialsInternationalization';

export const useLandingPageInternationalization = async () => {
  const { headerIntl } = await useHeaderInternationalization();
  const { heroIntl } = await useHeroInternationalization();
  const { problemsIntl } = await useProblemsInternationalization();
  const { footerIntl } = await useFooterInternationalization();
  const { callToActionIntl } = await useCallToActionInternationalization();
  const { statsIntl } = await useStatsInternationalization();
  const { testimonialsIntl } = await useTestimonialsInternationalization();
  const { faqsIntl } = await useFaqsInternationalization();
  const { cookiesIntl } = await useCookieInternationalization();
  const { featuresIntl } = await useFeaturesInternationalization();
  const { pricingIntl } = await usePricingInternationalization();

  return {
    headerIntl,
    heroIntl,
    problemsIntl,
    footerIntl,
    callToActionIntl,
    statsIntl,
    testimonialsIntl,
    faqsIntl,
    cookiesIntl,
    featuresIntl,
    pricingIntl,
  };
};
