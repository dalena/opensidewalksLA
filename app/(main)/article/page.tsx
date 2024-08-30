import { sanityFetch } from "@/sanity/lib/client";
import { articleQuery } from "@/sanity/utils";
import { Article } from "@/app/utils/interface";
import React from "react";
import { Section } from "../../components/Section";
import ArticleCard from "../../components/ArticleCard";

export default async function ArticlePage() {
  const article: Article[] = await sanityFetch({
    query: articleQuery,
    tags: ["post"],
  });
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
}
