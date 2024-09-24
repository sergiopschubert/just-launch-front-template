import { getTranslations } from 'next-intl/server';
import { ICompaniesIntl } from '../../domain/interfaces/LandingPage/ICompaniesIntl';

export const useCompaniesInternationalization = async () => {
  const internationalization = await getTranslations('LandingPage');

  const title = internationalization('companies.title');

  const companiesIntl: ICompaniesIntl = {
    title,
  };

  return {
    companiesIntl,
  };
};
