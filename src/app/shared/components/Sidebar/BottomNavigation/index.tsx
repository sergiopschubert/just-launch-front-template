import { BottomNavLinks } from './BottomNavLinks';
import { useInternationalizationShared } from '@/app/shared/hooks/useInternationalizationShared';

export async function BottomNavigation() {
  const { intlBottomNavigation } = await useInternationalizationShared();

  return (
    <BottomNavLinks
      item1={intlBottomNavigation.item1}
      item2={intlBottomNavigation.item2}
    />
  );
}
