import { getTranslations } from 'next-intl/server';
import { IHeaderIntl } from '../../domain/interfaces/IHeaderIntl';
import { useSharedInternationalization } from '@/app/shared/hooks/useSharedInternationalization';

export const useHeaderInternationalization = async () => {
  const internationalization = await getTranslations('LandingPage');
  const { language } = await useSharedInternationalization();

  const menuOption1 = internationalization('header.menu.option1');
  const menuOption2 = internationalization('header.menu.option2');
  const menuOption3 = internationalization('header.menu.option3');
  const menuOption4 = internationalization('header.menu.option4');

  const buttonsOption1 = internationalization('header.buttons.option1');
  const buttonsOption2 = internationalization('header.buttons.option2');
  const buttonsOption3 = internationalization('header.buttons.option3');

  const headerIntl: IHeaderIntl = {
    menu: {
      option1: menuOption1,
      option2: menuOption2,
      option3: menuOption3,
      option4: menuOption4,
    },
    buttons: {
      option1: buttonsOption1,
      option2: buttonsOption2,
      option3: buttonsOption3,
    },
    language: language,
  };

  return {
    headerIntl,
  };
};
