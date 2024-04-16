export interface IPricingIntl {
  headerTitle: string;
  title: string;
  subtitle: string;
  textOfMostPopular: string;
  callToAction: string;
  footerDescription: string;
  pricing: {
    id: string;
    name: string;
    description: string;
    nextPrice: string;
    price: string;
    moreInfoOfPrice: string;
    features: string[];
    mostPopular: boolean;
  }[];
}
