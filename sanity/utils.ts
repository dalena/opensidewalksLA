import { client } from "@/sanity/lib/client";

export async function getPosts() {
  const query = `
 *[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  "image": image.asset->url,
  publishedAt,
  excerpt,
  tags[]-> {
  _id,
  name
  }
}
 `;
  const data = await client.fetch(query);
  console.log("Fetched posts:", data); // Debugging log
  return data;
}

export async function getSinglePost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
   title,
   slug,
  "image": image.asset->url,
   publishedAt,
   excerpt,
   body,
   tags[]-> {
   _id,
   name
   }
 }
  `;
  const post = await client.fetch(query);
  return post;
}

export async function getArticles() {
  const query = `
 *[_type == "article"] {
  title,
  slug,
  "image": image.asset->url,
  publishedAt,
  excerpt,
  url,
  year,
  source
}
 `;
  const data = await client.fetch(query);
  return data;
}

export async function getSingleArticle(slug: string) {
  const query = `
    *[_type == "article" && slug.current == "${slug}"][0] {
      title,
      slug,
      "image": image.asset->url,
      publishedAt,
      excerpt,
      _id,
      url,
      year,
      source,
      body
    }
  `;
  const article = await client.fetch(query);
  return article;
}

export async function getQuestions() {
  const query = `
    *[_type == "question"] {
      _id,
      question,
      answer
    }
  `;
  const data = await client.fetch(query);
  return data;
}
