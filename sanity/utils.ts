import { groq } from "next-sanity";

export const postQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  "image": image.asset->url,
  publishedAt,
  excerpt,
  tags[]-> {
  _id,
  name
  }
}`;

export const singlePostQuery = (slug: string) => groq`*[_type == "post" && slug.current == "${slug}"][0] {
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
 }`;

export const articleQuery = groq`*[_type == "article"] {
  title,
  slug,
  "image": image.asset->url,
  publishedAt,
  excerpt,
  url,
  year,
  source
}`;

export const singleArticleQuery = (slug: string) => groq`*[_type == "article" && slug.current == "${slug}"][0] {
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
    }`;

export const questionQuery = groq`*[_type == "question"] {
      _id,
      question,
      answer
    }`;
