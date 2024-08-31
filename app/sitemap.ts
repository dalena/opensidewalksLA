import { sanityFetch } from "@/sanity/lib/client";
import { MetadataRoute } from "next";
import { Post } from "./utils/interface";
import { Article } from "./utils/interface";
import { postQuery, articleQuery } from "@/sanity/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch posts and articles using Sanity queries
  const posts: Post[] = await sanityFetch({
    query: postQuery,
    tags: ["post"],
  });

  const articles: Article[] = await sanityFetch({
    query: articleQuery,
    tags: ["article"],
  });

  // Map posts and articles into the required format for the sitemap
  const postUrls = posts.map((post) => ({
    url: `https://opensidewalks.la/post/${post.slug.current}`,
    lastModified: new Date(post.publishedAt).toISOString(),
  }));

  const articleUrls = articles.map((article) => ({
    url: `https://opensidewalks.la/article/${article.slug.current}`,
    lastModified: new Date(article.publishedAt).toISOString(),
  }));

  // Combine the URLs and return the sitemap array
  return [
    {
      url: `https://opensidewalks.la/`,
      lastModified: new Date().toISOString(),
    },
    ...postUrls,
    ...articleUrls,
  ];
}
