import {
  Footer,
  Header,
} from '@/app/shared/@JustLaunch/components/LandingPage';
import { useLandingPageInternationalization } from '@/app/shared/@JustLaunch/hooks/contents/useLandingPageInternationalization';

export default async function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { headerIntl, footerIntl } = await useLandingPageInternationalization();

  return (
    <main className='relative bg-gradient-to-b from-primary/50 via-white to-primary/50'>
      <Header intl={headerIntl} session={null} />
      <div className='relative min-h-screen'>
        {children}
        <Footer intl={footerIntl} />
      </div>
    </main>
  );
}
