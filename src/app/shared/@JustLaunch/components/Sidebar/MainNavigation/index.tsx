import { useSharedInternationalization } from '../../../hooks/contents/useSharedInternationalization';
import { MainNavLinks } from './MainNavLinks';

export async function MainNavigation() {
  const { intlMainNavigation } = await useSharedInternationalization();
  return <MainNavLinks {...intlMainNavigation} />;
}
