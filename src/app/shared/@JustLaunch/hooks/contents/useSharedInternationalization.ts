import { getTranslations } from 'next-intl/server';

export const useSharedInternationalization = async () => {
  const internationalization = await getTranslations('Shared');

  const language = internationalization('language');

  const bottomNavItem1 = internationalization('sidebar.bottomNavigation.item1');
  const bottomNavItem2 = internationalization('sidebar.bottomNavigation.item2');
  const bottomNavItem3 = internationalization('sidebar.bottomNavigation.item3');

  // #### Main Navigation ####
  const mainNavItem1 = internationalization('sidebar.mainNavigation.item1');
  const mainNavItem2 = internationalization('sidebar.mainNavigation.item2');

  const intlMainNavigation = {
    item1: mainNavItem1,
    item2: mainNavItem2,
  };

  const intlBottomNavigation = {
    item1: bottomNavItem1,
    item2: bottomNavItem2,
    item3: bottomNavItem3,
  };

  return {
    language,
    intlMainNavigation,
    intlBottomNavigation,
  };
};
