import { getTranslations } from 'next-intl/server';
import { IMarketingBannerIntl } from '../../../../../lib/domain/interfaces/LandingPage/IMarketingBannerIntl';

export const useMarketingBannerInternationalization = async () => {
  const internationalization = await getTranslations('LandingPage');

  const content = internationalization('banner.content');
  const leftText = internationalization('banner.leftText');
  const rightText = internationalization('banner.rightText');

  const marketingBannerIntl: IMarketingBannerIntl = {
    content,
    leftText,
    rightText,
  };

  return {
    marketingBannerIntl,
  };
};
