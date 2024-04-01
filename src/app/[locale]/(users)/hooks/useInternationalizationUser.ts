import { getTranslations } from 'next-intl/server';

export const useInternationalizationUser = async () => {
  const internationalization = await getTranslations('Dashboard');

  //### SETTINGS ###
  const settingsTitle = internationalization('user.settings.title');
  const settingsMenuItem1 = internationalization('user.settings.menu.item1');
  const settingsMenuItem2 = internationalization('user.settings.menu.item2');

  const settingsProfileTitle = internationalization(
    'user.settings.profile.title'
  );
  const settingsLabelName = internationalization(
    'user.settings.profile.labels.name'
  );
  const settingsLabelEmail = internationalization(
    'user.settings.profile.labels.email'
  );

  //### EMAIL CONFIRMATION ###
  const confirmationEmailMetadataTitle = internationalization(
    'user.confirmationEmail.metadata.title'
  );
  const confirmationEmailTitle = internationalization(
    'user.confirmationEmail.title'
  );
  const confirmationEmaildescription = internationalization(
    'user.confirmationEmail.description'
  );

  const confirmationEmailTextButton = internationalization(
    'user.confirmationEmail.textButton'
  );

  const intlConfirmationEmail = {
    metadata: {
      title: confirmationEmailMetadataTitle,
    },
    title: confirmationEmailTitle,
    description: confirmationEmaildescription,
    textButton: confirmationEmailTextButton,
  };

  const intlSettings = {
    title: settingsTitle,
    menu: {
      item1: settingsMenuItem1,
      item2: settingsMenuItem2,
    },
    profile: {
      title: settingsProfileTitle,
      label: {
        name: settingsLabelName,
        email: settingsLabelEmail,
      },
    },
  };

  return {
    intlSettings,
    intlConfirmationEmail,
  };
};
