import { getTranslations } from 'next-intl/server';

export const useSharedInternationalization = async () => {
  const internationalization = await getTranslations('Shared');

  const language = internationalization('language');

  const bottomNavItem1 = internationalization('sidebar.bottomNavigation.item1');
  const bottomNavItem2 = internationalization('sidebar.bottomNavigation.item2');

  // #### Main Navigation ####
  const mainNavItem1 = internationalization('sidebar.mainNavigation.item1');

  // #### Confirmation Email ####
  const confirmationEmailSubject = internationalization(
    'confirmationEmail.subject'
  );
  const confirmationEmailHeaderTitle = internationalization(
    'confirmationEmail.headerTitle'
  );
  const confirmationEmailTitle = internationalization(
    'confirmationEmail.title'
  );
  const confirmationEmailHello = internationalization(
    'confirmationEmail.hello'
  );
  const confirmationEmailMessage = internationalization(
    'confirmationEmail.message'
  );
  const confirmationEmailTextLink = internationalization(
    'confirmationEmail.textLink'
  );
  const confirmationEmailWarningMessage = internationalization(
    'confirmationEmail.warningMessage'
  );
  const confirmationEmailTextWarningMessageLink = internationalization(
    'confirmationEmail.textWarningMessageLink'
  );
  const confirmationEmailBeforeFooter = internationalization(
    'confirmationEmail.beforeFooter'
  );
  const confirmationEmailAfterFooter = internationalization(
    'confirmationEmail.afterFooter'
  );
  const confirmationEmailTextFooterLink = internationalization(
    'confirmationEmail.textFooterLink'
  );
  const confirmationEmailTextLogin = internationalization(
    'confirmationEmail.textLogin'
  );
  const confirmationEmailTextPrivacy = internationalization(
    'confirmationEmail.textPrivacy'
  );
  const confirmationEmailTextTerms = internationalization(
    'confirmationEmail.textTerms'
  );

  const intlConfirmationEmail = {
    subject: confirmationEmailSubject,
    headerTitle: confirmationEmailHeaderTitle,
    title: confirmationEmailTitle,
    hello: confirmationEmailHello,
    message: confirmationEmailMessage,
    textLink: confirmationEmailTextLink,
    warningMessage: confirmationEmailWarningMessage,
    textWarningMessageLink: confirmationEmailTextWarningMessageLink,
    beforeFooter: confirmationEmailBeforeFooter,
    afterFooter: confirmationEmailAfterFooter,
    textFooterLink: confirmationEmailTextFooterLink,
    textLogin: confirmationEmailTextLogin,
    textPrivacy: confirmationEmailTextPrivacy,
    textTerms: confirmationEmailTextTerms,
  };

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
    intlConfirmationEmail,
  };
};
