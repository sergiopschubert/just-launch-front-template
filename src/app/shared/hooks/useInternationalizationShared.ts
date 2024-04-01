import { getTranslations } from 'next-intl/server';

export const useInternationalizationShared = async () => {
  const internationalization = await getTranslations('Shared');

  const language = internationalization('language');

  const bottomNavItem1 = internationalization('sidebar.bottomNavigation.item1');
  const bottomNavItem2 = internationalization('sidebar.bottomNavigation.item2');

  // #### Main Navigation ####
  const mainNavItem1 = internationalization('sidebar.mainNavigation.item1');

  // #### User Space Widget ####
  const userSpaceBeforeTitle = internationalization(
    'sidebar.userSpaceWidget.beforeTitle'
  );
  const userSpaceAfterTitle = internationalization(
    'sidebar.userSpaceWidget.afterTitle'
  );
  const userSpaceBeforeSubtitle = internationalization(
    'sidebar.userSpaceWidget.beforeSubtitle'
  );
  const userSpaceMiddleSubtitle = internationalization(
    'sidebar.userSpaceWidget.middleSubtitle'
  );
  const userSpaceAfterSubtitle = internationalization(
    'sidebar.userSpaceWidget.afterSubtitle'
  );
  const userSpaceWarningMessage = internationalization(
    'sidebar.userSpaceWidget.warningMessage'
  );
  const userSpaceUpdateButton = internationalization(
    'sidebar.userSpaceWidget.updateButton'
  );

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

  const intlUserSpaceWidget = {
    beforeTitle: userSpaceBeforeTitle,
    afterTitle: userSpaceAfterTitle,
    beforeSubtitle: userSpaceBeforeSubtitle,
    middleSubtitle: userSpaceMiddleSubtitle,
    afterSubtitle: userSpaceAfterSubtitle,
    warningMessage: userSpaceWarningMessage,
    updateButton: userSpaceUpdateButton,
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
    intlUserSpaceWidget,
    intlMainNavigation,
    intlBottomNavigation,
    intlConfirmationEmail,
  };
};
