import { getTranslations } from 'next-intl/server';

export const useCookieInternationalization = async () => {
  const internationalization = await getTranslations('LandingPage');

  const content = internationalization('cookies.content');
  const acceptButton = internationalization('cookies.acceptButton');
  const refuseButton = internationalization('cookies.refuseButton');
  const moreInfo = internationalization('cookies.moreInfo');

  const cookiesIntl = {
    content,
    acceptButton,
    refuseButton,
    moreInfo,
  };

  return {
    cookiesIntl,
  };
};
