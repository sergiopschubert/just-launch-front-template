import { useInternationalizationShared } from '@/app/shared/hooks/useInternationalizationShared';
import { MainNavLinks } from './MainNavLinks';

export async function MainNavigation() {
  const { intlMainNavigation } = await useInternationalizationShared();
  return <MainNavLinks item1={intlMainNavigation.item1} />;
}
