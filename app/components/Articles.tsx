import { getArticles } from '@/sanity/utils'
import { Article } from '@/app/utils/interface'
import { Section } from './Section'
import ArticleCard from './ArticleCard';

export const revalidate = 60;

export default async function Articles() {
  const articles: Article[] = await getArticles();
  const allArticles = articles?.slice(0, 3);
  return (
    <Section
      sectionTitle='Articles'
      anchor='articles'
    >
      <div className='flex flex-col gap-6 mx-10'>
        {allArticles?.length > 0 && allArticles?.map((article) => (
          <ArticleCard key={article?._id} article={article} />
        ))}
      </div>
    </Section>
  )
}
