import glob from 'fast-glob';
import { IArticleWithSlug } from '../../domain/contracts/IArticleWithSlug';

async function importArticle(
  articleFilename: string
): Promise<IArticleWithSlug> {
  const { article } = await import(
    `../../../../[locale]/articles/${articleFilename.replace('page.mdx', 'metadata')}`
  );

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/[locale]/articles',
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
