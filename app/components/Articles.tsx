import { getArticles } from "@/sanity/utils";
import { Article } from "@/app/utils/interface";
import { Section } from "./Section";
import ArticleCard from "./ArticleCard";
import Button from "./Button";

export default async function Articles() {
  const articles: Article[] = await getArticles();
  return (
    <Section sectionTitle="Articles" anchor="articles">
      <div className="mx-0 flex flex-col gap-6">
        {articles?.length > 0 &&
          articles?.map((article) => (
            <ArticleCard key={article?._id} article={article} />
          ))}
      </div>
      <Button text="More Articles" link="/article" />
    </Section>
  );
}
