import { Article } from "@/app/utils/interface";
import { getArticles } from "@/sanity/utils";
import React from "react";
import { Section } from "../components/Section";
import ArticleCard from "../components/ArticleCard";
const ArticlePage = async () => {
  const article: Article[] = await getArticles();

  return (
    <div className="">
      <Section sectionTitle="Articles" anchor="null">
        <div className="flex flex-col gap-6">
          {article.map((article) => (
            <ArticleCard key={article?._id} article={article} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ArticlePage;
