import { getTranslations } from 'next-intl/server';
import { ICountdownBannerIntl } from '../../../../../lib/domain/interfaces/LandingPage/ICountdownBannerIntl';

export const useCountdownBannerInternationalization = async () => {
  const internationalization = await getTranslations('LandingPage');

  const leftText = internationalization('countdownBanner.leftText');
  const rightText = internationalization('countdownBanner.rightText');

  const countdownBannerIntl: ICountdownBannerIntl = {
    leftText,
    rightText,
  };

  return {
    countdownBannerIntl,
  };
};
