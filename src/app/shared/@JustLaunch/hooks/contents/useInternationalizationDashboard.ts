import { getTranslations } from 'next-intl/server';
import { IEmailConfirmationIntl } from '../../domain/interfaces/IEmailConfirmationIntl';
import { ISettingsIntl } from '../../domain/interfaces/ISettingsIntl';
import { IFeedbackIntl } from '../../domain/interfaces/IFeedbackIntl';
import { ISupportIntl } from '../../domain/interfaces/ISupportIntl';
import { IHomeIntl } from '../../domain/interfaces/IHomeIntl';
import { ICustomersIntl } from '../../domain/interfaces/ICustomerIntl';

export const useInternationalizationDashboard = async () => {
  const internationalization = await getTranslations('Dashboard');

  //### PAGE SETTINGS ###
  const settingsMetadataTitle = internationalization('settings.metadata.title');
  const settingsTitle = internationalization('settings.title');
  const settingsTabsItem1 = internationalization('settings.tabs.item1');
  const settingsTabsItem2 = internationalization('settings.tabs.item2');

  const settingsLabelName = internationalization(
    'settings.profile.labels.item1'
  );
  const settingsLabelEmail = internationalization(
    'settings.profile.labels.item2'
  );
  const settingsLabelBio = internationalization(
    'settings.profile.labels.item3'
  );

  const settingsSubheadingUser = internationalization(
    'settings.subheadings.item1'
  );
  const settingsSubheadingBio = internationalization(
    'settings.subheadings.item2'
  );
  const settingsSubheadingEmail = internationalization(
    'settings.subheadings.item3'
  );

  const settingsDescriptionUser = internationalization(
    'settings.descriptions.item1'
  );
  const settingsDescriptionBio = internationalization(
    'settings.descriptions.item2'
  );
  const settingsDescriptionEmail = internationalization(
    'settings.descriptions.item3'
  );

  const settingsCheckboxLabel = internationalization(
    'settings.checkbox.labels.item1'
  );

  const settingsButtonSave = internationalization('settings.buttons.item1');
  const settingsButtonCancel = internationalization('settings.buttons.item2');

  //### PAGE EMAIL CONFIRMATION ###
  const confirmationEmailMetadataTitle = internationalization(
    'confirmationEmail.metadata.title'
  );
  const confirmationEmailTitle = internationalization(
    'confirmationEmail.title'
  );
  const confirmationEmailDescription = internationalization(
    'confirmationEmail.description'
  );
  const confirmationEmailTextButton = internationalization(
    'confirmationEmail.textButton'
  );

  //### PAGE FEEDBACK ###
  const feedbackMetadataTitle = internationalization('feedback.metadata.title');
  const feedbackTitle = internationalization(
    'feedback.constructionState.title'
  );
  const feedbackDescription = internationalization(
    'feedback.constructionState.description'
  );
  const feedbackNotifyButton = internationalization(
    'feedback.constructionState.notifyButton'
  );

  //### PAGE SUPPORT ###
  const supportMetadataTitle = internationalization('support.metadata.title');
  const supportEmptyStateTitle = internationalization(
    'support.emptyState.title'
  );
  const supportEmptyStateDescription = internationalization(
    'support.emptyState.description'
  );
  const supportNewTicketButton = internationalization(
    'support.emptyState.newTicketButton'
  );

  const supportFormTitle = internationalization('support.form.title');
  const supportFormLabelTitle = internationalization(
    'support.form.labels.title'
  );
  const supportFormLabelCategory = internationalization(
    'support.form.labels.category'
  );
  const supportFormLabelDescription = internationalization(
    'support.form.labels.description'
  );
  const supportFormButtonCancel = internationalization(
    'support.form.buttons.cancel'
  );
  const supportFormButtonCreate = internationalization(
    'support.form.buttons.create'
  );
  const supportFormCategoryGeneral = internationalization(
    'support.form.categories.general'
  );
  const supportFormCategoryTechnical = internationalization(
    'support.form.categories.technical'
  );
  const supportFormCategoryBilling = internationalization(
    'support.form.categories.billing'
  );
  const supportFormCategoryFeature = internationalization(
    'support.form.categories.feature'
  );

  const supportTableColumnTitle = internationalization(
    'support.table.columns.title'
  );
  const supportTableColumnCategory = internationalization(
    'support.table.columns.category'
  );
  const supportTableColumnStatus = internationalization(
    'support.table.columns.status'
  );
  const supportTableColumnCreatedAt = internationalization(
    'support.table.columns.createdAt'
  );
  const supportTableStatusOpen = internationalization(
    'support.table.status.open'
  );
  const supportTableStatusClosed = internationalization(
    'support.table.status.closed'
  );

  //### PAGE HOME ###
  const homeMetadataTitle = internationalization('home.metadata.title');
  const homeHeadingOverview = internationalization('home.headings.overview');
  const homeHeadingRecentOrders = internationalization(
    'home.headings.recentOrders'
  );

  const homeStatTotalRevenue = internationalization('home.stats.totalRevenue');
  const homeStatAvgOrderValue = internationalization(
    'home.stats.avgOrderValue'
  );
  const homeStatTicketsSold = internationalization('home.stats.ticketsSold');
  const homeStatPageViews = internationalization('home.stats.pageViews');
  const homeStatTotalSales = internationalization('home.stats.totalSales');

  const homeSelectPeriodPlaceholder = internationalization(
    'home.selectPeriod.placeholder'
  );
  const homeSelectPeriodLastWeek = internationalization(
    'home.selectPeriod.options.lastWeek'
  );
  const homeSelectPeriodLastTwoWeeks = internationalization(
    'home.selectPeriod.options.lastTwoWeeks'
  );
  const homeSelectPeriodLastMonth = internationalization(
    'home.selectPeriod.options.lastMonth'
  );
  const homeSelectPeriodLastQuarter = internationalization(
    'home.selectPeriod.options.lastQuarter'
  );

  const homeChartTitle = internationalization('home.chart.title');
  const homeChartDescription = internationalization('home.chart.description');

  const homeTableColumnCustomerName = internationalization(
    'home.table.columns.customerName'
  );
  const homeTableColumnAmount = internationalization(
    'home.table.columns.amount'
  );
  const homeTableColumnDate = internationalization('home.table.columns.date');

  //### CUSTOMERS ###
  const customersMetadataTitle = internationalization(
    'customers.metadata.title'
  );
  const customersHeadingTitle = internationalization('customers.heading.title');
  const customersHeadingButton = internationalization(
    'customers.heading.button'
  );
  const customersColumnName = internationalization(
    'customers.table.columns.name'
  );
  const customersColumnStatus = internationalization(
    'customers.table.columns.status'
  );
  const customersColumnEmail = internationalization(
    'customers.table.columns.email'
  );
  const customersColumnBirth = internationalization(
    'customers.table.columns.birth'
  );
  const customersColumnPhone = internationalization(
    'customers.table.columns.phone'
  );

  const intlCustomers: ICustomersIntl = {
    metadata: {
      title: customersMetadataTitle,
    },
    heading: {
      title: customersHeadingTitle,
      button: customersHeadingButton,
    },
    table: {
      columns: {
        name: customersColumnName,
        status: customersColumnStatus,
        email: customersColumnEmail,
        birth: customersColumnBirth,
        phone: customersColumnPhone,
      },
    },
  };

  const intlHome: IHomeIntl = {
    metadata: {
      title: homeMetadataTitle,
    },
    headings: {
      overview: homeHeadingOverview,
      recentOrders: homeHeadingRecentOrders,
    },
    stats: {
      totalRevenue: homeStatTotalRevenue,
      avgOrderValue: homeStatAvgOrderValue,
      ticketsSold: homeStatTicketsSold,
      pageViews: homeStatPageViews,
      totalSales: homeStatTotalSales,
    },
    selectPeriod: {
      placeholder: homeSelectPeriodPlaceholder,
      options: {
        lastWeek: homeSelectPeriodLastWeek,
        lastTwoWeeks: homeSelectPeriodLastTwoWeeks,
        lastMonth: homeSelectPeriodLastMonth,
        lastQuarter: homeSelectPeriodLastQuarter,
      },
    },
    chart: {
      title: homeChartTitle,
      description: homeChartDescription,
    },
    table: {
      columns: {
        customerName: homeTableColumnCustomerName,
        amount: homeTableColumnAmount,
        date: homeTableColumnDate,
      },
    },
  };

  const intlSupport: ISupportIntl = {
    metadata: {
      title: supportMetadataTitle,
    },
    emptyState: {
      title: supportEmptyStateTitle,
      description: supportEmptyStateDescription,
      newTicketButton: supportNewTicketButton,
    },
    form: {
      title: supportFormTitle,
      labels: {
        title: supportFormLabelTitle,
        category: supportFormLabelCategory,
        description: supportFormLabelDescription,
      },
      buttons: {
        cancel: supportFormButtonCancel,
        create: supportFormButtonCreate,
      },
      categories: {
        general: supportFormCategoryGeneral,
        technical: supportFormCategoryTechnical,
        billing: supportFormCategoryBilling,
        feature: supportFormCategoryFeature,
      },
    },
    table: {
      columns: {
        title: supportTableColumnTitle,
        category: supportTableColumnCategory,
        status: supportTableColumnStatus,
        createdAt: supportTableColumnCreatedAt,
      },
      status: {
        open: supportTableStatusOpen,
        closed: supportTableStatusClosed,
      },
    },
  };

  const intlFeedback: IFeedbackIntl = {
    metadata: {
      title: feedbackMetadataTitle,
    },
    constructionState: {
      title: feedbackTitle,
      description: feedbackDescription,
      notifyButton: feedbackNotifyButton,
    },
  };

  const intlConfirmationEmail: IEmailConfirmationIntl = {
    metadata: {
      title: confirmationEmailMetadataTitle,
    },
    title: confirmationEmailTitle,
    description: confirmationEmailDescription,
    textButton: confirmationEmailTextButton,
  };

  const intlSettings: ISettingsIntl = {
    metadata: {
      title: settingsMetadataTitle,
    },
    title: settingsTitle,
    tabs: {
      item1: settingsTabsItem1,
      item2: settingsTabsItem2,
    },
    profile: {
      labels: {
        item1: settingsLabelName,
        item2: settingsLabelEmail,
        item3: settingsLabelBio,
      },
    },
    subheadings: {
      item1: settingsSubheadingUser,
      item2: settingsSubheadingBio,
      item3: settingsSubheadingEmail,
    },
    descriptions: {
      item1: settingsDescriptionUser,
      item2: settingsDescriptionBio,
      item3: settingsDescriptionEmail,
    },
    checkbox: {
      labels: {
        item1: settingsCheckboxLabel,
      },
    },
    buttons: {
      item1: settingsButtonSave,
      item2: settingsButtonCancel,
    },
  };

  return {
    intlCustomers,
    intlHome,
    intlSupport,
    intlFeedback,
    intlSettings,
    intlConfirmationEmail,
  };
};
