import { useSharedInternationalization } from '../../../hooks/contents/useSharedInternationalization';
import { BottomNavLinks } from './BottomNavLinks';

export async function BottomNavigation() {
  const { intlBottomNavigation } = await useSharedInternationalization();

  return <BottomNavLinks item1={intlBottomNavigation.item1} />;
}
