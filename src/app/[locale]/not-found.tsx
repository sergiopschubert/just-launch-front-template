import { Footer, Header, CookieBanner } from './(landing-page)/components';
import { useLandingPageInternationalization } from './(landing-page)/hooks/contents/useLandingPageInternationalization';

export default async function NotFound() {
  const { footerIntl, headerIntl, cookieBannerIntl } =
    await useLandingPageInternationalization();

  return (
    <>
      <Header intl={headerIntl} session={null} />
      <div className='flex w-full justify-center bg-primary/50 align-middle'>
        <div className='max-w-md py-16 lg:max-w-lg'>
          <div className='flex justify-center'>
            <h1 className='text-9xl font-bold text-primary/700'>404</h1>
          </div>
          <h1 className='mt-12 text-center text-4xl font-bold text-primary/700'>
            Oops!
          </h1>
        </div>
      </div>
      <CookieBanner intl={cookieBannerIntl} />
      <Footer intl={footerIntl} />
    </>
  );
}
