import { sanityFetch } from "@/sanity/lib/client";
import { articleQuery } from "@/sanity/utils";
import { Article } from "@/app/utils/interface";
import { Section } from "./Section";
import ArticleCard from "./ArticleCard";
import Button from "./Button";

export default async function Articles() {
  const articles: Article[] = await sanityFetch({
    query: articleQuery,
    tags: ["article"],
  });

  const recentArticles = articles?.slice(0, 5);

  return (
    <Section sectionTitle="Articles" anchor="articles">
      <div className="mx-0 flex flex-col gap-6">
        {recentArticles?.length > 0 &&
          recentArticles?.map((article) => (
            <ArticleCard key={article?._id} article={article} />
          ))}
      </div>
      <Button text="More Articles" link="/article" />
    </Section>
  );
}
