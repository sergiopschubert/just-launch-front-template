import { getTranslations } from 'next-intl/server';
import { IEmailConfirmationIntl } from '../../domain/interfaces/IEmailConfirmationIntl';
import { ISettingsIntl } from '../../domain/interfaces/ISettingsIntl';

export const useInternationalizationDashboard = async () => {
  const internationalization = await getTranslations('Dashboard');

  //### SETTINGS ###
  const settingsTitle = internationalization('user.settings.title');
  const settingsMenuItem1 = internationalization('user.settings.menu.item1');

  const settingsProfileTitle = internationalization(
    'user.settings.profile.title'
  );
  const settingsLabelName = internationalization(
    'user.settings.profile.labels.name'
  );
  const settingsLabelEmail = internationalization(
    'user.settings.profile.labels.email'
  );

  //### PAGE EMAIL CONFIRMATION ###
  const confirmationEmailMetadataTitle = internationalization(
    'user.confirmationEmail.metadata.title'
  );
  const confirmationEmailTitle = internationalization(
    'user.confirmationEmail.title'
  );
  const confirmationEmailDescription = internationalization(
    'user.confirmationEmail.description'
  );

  const confirmationEmailTextButton = internationalization(
    'user.confirmationEmail.textButton'
  );

  const intlConfirmationEmail: IEmailConfirmationIntl = {
    metadata: {
      title: confirmationEmailMetadataTitle,
    },
    title: confirmationEmailTitle,
    description: confirmationEmailDescription,
    textButton: confirmationEmailTextButton,
  };

  const intlSettings: ISettingsIntl = {
    title: settingsTitle,
    menu: {
      item1: settingsMenuItem1,
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
