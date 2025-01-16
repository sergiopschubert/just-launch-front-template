import { Article } from '@/app/shared/@JustLaunch/components/Blog/Article';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { getAllArticles } from '@/app/shared/@JustLaunch/lib/articles';

export const metadata = {
  title: 'Blog',
  description:
    'Meus pensamentos aprofundados sobre design de software, construção de empresas SaaS e microSaaS. Aqui, compartilho estratégias e insights que ajudam desenvolvedores e criadores a transformarem suas ideias em realidade.',
};

export default async function ArticlesIndex() {
  let articles = await getAllArticles();

  return (
    <Container>
      <div className='py-16 sm:py-24'>
        <header className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-primary/600 sm:text-5xl'>
            Blog
          </h1>
          <p className='mt-6 text-base text-gray-600'>
            Meus pensamentos aprofundados sobre design de software, construção
            de empresas SaaS e microSaaS.
          </p>
        </header>
        <div className='mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </Container>
  );
}
