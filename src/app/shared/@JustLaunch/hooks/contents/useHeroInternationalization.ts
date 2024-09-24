import { getTranslations } from 'next-intl/server';
import { IHeroIntl } from '../../domain/interfaces/LandingPage/IHeroIntl';

export const useHeroInternationalization = async () => {
  const internationalization = await getTranslations('LandingPage');

  const title = internationalization('hero.title');
  const titleWithEffect = internationalization('hero.titleWithEffect');
  const subtitle = internationalization('hero.subtitle');
  const callToActionButton = internationalization('hero.callToActionButton');
  const testimonialsText = internationalization('hero.testimonials.text');
  const testimonialsNumberOfClients = internationalization(
    'hero.testimonials.numberOfClients'
  );
  const learnMore = internationalization('hero.learnMore');

  // Features
  const authentication = {
    title: internationalization('hero.features.authentication.title'),
    description: internationalization(
      'hero.features.authentication.description'
    ),
  };
  const payments = {
    title: internationalization('hero.features.payments.title'),
    description: internationalization('hero.features.payments.description'),
  };
  const components = {
    title: internationalization('hero.features.components.title'),
    description: internationalization('hero.features.components.description'),
  };
  const emails = {
    title: internationalization('hero.features.emails.title'),
    description: internationalization('hero.features.emails.description'),
  };
  const localization = {
    title: internationalization('hero.features.localization.title'),
    description: internationalization('hero.features.localization.description'),
  };

  const heroIntl: IHeroIntl = {
    title,
    titleWithEffect,
    subtitle,
    callToActionButton,
    testimonials: {
      text: testimonialsText,
      numberOfClients: parseInt(testimonialsNumberOfClients, 10),
    },
    learnMore,
    features: {
      authentication,
      payments,
      components,
      emails,
      localization,
    },
  };

  return {
    heroIntl,
  };
};
