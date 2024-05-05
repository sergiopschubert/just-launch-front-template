import { getTranslations } from 'next-intl/server';

export const useMarketingBannerInternationalization = async () => {
  const internationalization = await getTranslations('LandingPage');

  const content = internationalization('banner.content');
  const leftText = internationalization('banner.leftText');
  const rightText = internationalization('banner.rightText');

  const marketingBannerIntl = {
    content,
    leftText,
    rightText,
  };

  return {
    marketingBannerIntl,
  };
};
