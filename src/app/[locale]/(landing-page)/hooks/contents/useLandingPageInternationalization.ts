import { useCallToActionInternationalization } from './useCallToActionInternationalization';
import { useCompaniesInternationalization } from './useCompaniesInternationalization';
import { useCookieBannerInternationalization } from './useCookieBannerInternationalization';
import { useCountdownBannerInternationalization } from './useCountdownBannerInternationalization copy';
import { useFaqsInternationalization } from './useFaqsInternationalization';
import { useFeaturesInternationalization } from './useFeaturesInternationalization';
import { useFooterInternationalization } from './useFooterInternationalization';
import { useHeaderInternationalization } from './useHeaderInternationalization';
import { useHeroInternationalization } from './useHeroInternationalization';
import { useMarketingBannerInternationalization } from './useMarketingBannerInternationalization';
import { usePricingInternationalization } from './usePricingInternationalization';
import { useProblemsInternationalization } from './useProblemsInternationalization';
import { useSaveLeadsInternationalization } from './useSaveLeadsInternationalization';
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
  const { featuresIntl } = await useFeaturesInternationalization();
  const { pricingIntl } = await usePricingInternationalization();
  const { cookieBannerIntl } = await useCookieBannerInternationalization();
  const { saveLeadsIntl } = await useSaveLeadsInternationalization();
  const { marketingBannerIntl } =
    await useMarketingBannerInternationalization();
  const { countdownBannerIntl } =
    await useCountdownBannerInternationalization();
  const { companiesIntl } = await useCompaniesInternationalization();

  return {
    headerIntl,
    heroIntl,
    problemsIntl,
    footerIntl,
    callToActionIntl,
    statsIntl,
    testimonialsIntl,
    faqsIntl,
    featuresIntl,
    pricingIntl,
    cookieBannerIntl,
    saveLeadsIntl,
    marketingBannerIntl,
    countdownBannerIntl,
    companiesIntl,
  };
};
