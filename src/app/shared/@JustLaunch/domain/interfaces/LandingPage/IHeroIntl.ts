export interface IHeroIntl {
  title: string;
  titleWithEffect: string;
  subtitle: string;
  callToActionButton: string;
  testimonials: {
    text: string;
    numberOfClients: number;
  };
  learnMore: string;
  features: {
    authentication: {
      title: string;
      description: string;
    };
    payments: {
      title: string;
      description: string;
    };
    components: {
      title: string;
      description: string;
    };
    emails: {
      title: string;
      description: string;
    };
    localization: {
      title: string;
      description: string;
    };
  };
}
