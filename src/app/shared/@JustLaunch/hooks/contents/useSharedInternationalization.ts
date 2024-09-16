import { getTranslations } from 'next-intl/server';

export const useSharedInternationalization = async () => {
  const internationalization = await getTranslations('Shared');

  const language = internationalization('language');

  const bottomNavItem1 = internationalization('sidebar.bottomNavigation.item1');
  const bottomNavItem2 = internationalization('sidebar.bottomNavigation.item2');

  // #### Main Navigation ####
  const mainNavItem1 = internationalization('sidebar.mainNavigation.item1');

  const intlMainNavigation = {
    item1: mainNavItem1,
  };

  const intlBottomNavigation = {
    item1: bottomNavItem1,
    item2: bottomNavItem2,
  };

  return {
    language,
    intlMainNavigation,
    intlBottomNavigation,
  };
};
