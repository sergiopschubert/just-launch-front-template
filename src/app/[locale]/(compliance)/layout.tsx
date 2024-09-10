import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import {
  Footer,
  Header,
  CookieBanner,
} from '@/@JustLaunch/components/LandingPage';
import { useLandingPageInternationalization } from '../(landing-page)/hooks/contents/useLandingPageInternationalization';

const inter = Inter({ subsets: ['latin'] });

interface ComplianceLayoutProps {
  children: ReactNode;
}

export default async function ComplianceLayout({
  children,
}: ComplianceLayoutProps) {
  const { headerIntl, footerIntl, cookieBannerIntl } =
    await useLandingPageInternationalization();

  return (
    <html lang='pt-br' className='antialiased'>
      <body className={inter.className}>
        <Header intl={headerIntl} withoutMenu={true} session={null} />
        {children}
        <CookieBanner intl={cookieBannerIntl} />
        <Footer intl={footerIntl} />
      </body>
    </html>
  );
}
