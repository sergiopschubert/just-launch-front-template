import { useSharedInternationalization } from '@/app/shared/hooks/useSharedInternationalization';
import { MainNavLinks } from './MainNavLinks';

export async function MainNavigation() {
  const { intlMainNavigation } = await useSharedInternationalization();
  return <MainNavLinks item1={intlMainNavigation.item1} />;
}
