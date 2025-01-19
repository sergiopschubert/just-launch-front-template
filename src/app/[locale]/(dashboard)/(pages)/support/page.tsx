import { Metadata } from 'next';
import { useInternationalizationDashboard } from '@/app/shared/@JustLaunch/hooks/contents/useInternationalizationDashboard';
import { TicketManager } from './components/TicketManager';

export const metadata: Metadata = {};

export default async function Support() {
  const { intlSupport } = await useInternationalizationDashboard();
  metadata.title = intlSupport.metadata.title;

  return <TicketManager intl={intlSupport} />;
}
