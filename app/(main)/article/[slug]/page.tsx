import type { Article } from "@/app/utils/interface"; // Type-only import
import { sanityFetch } from "@/sanity/lib/client";
import { PostBox } from "@/app/components/PostBox";
import { PortableText } from "@portabletext/react";
import { singleArticleQuery } from "@/sanity/utils"; // Updated to use singleArticleQuery
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  const article: Article | null = await sanityFetch({
    query: singleArticleQuery(params.slug),
    qParams: {},
    tags: ["post"],
  });

  if (!article) {
    return undefined;
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      locale: "en_US",
      url: `https://opensidewalks.la/${params.slug}`,
      siteName: "Open Sidewalks LA",
      images: [
        {
          url: article.image,
          alt: article.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
interface Params {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Fetch the article data using the slug
  const article: Article = await sanityFetch({
    query: singleArticleQuery(params.slug), // Pass the slug to the query
    tags: ["article"],
  });

  // Handle case when the article is not found
  if (!article) {
    return <p>No article found.</p>;
  }

  return (
    <div>
      <section className="text-white w-full md:px-4">
        <div className="relative flex h-[500px] w-full justify-center overflow-clip rounded-2xl shadow-xl">
          <Image
            src={article?.image}
            alt={article?.title}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="-translate-y-52 md:-translate-y-32">
          <PostBox>
            <div className="flex flex-row gap-2 md:gap-4">
              <h2 className="font-balto text-3xl font-bold leading-tight tracking-wide lg:text-4xl">
                {article?.title}
              </h2>
            </div>
            <div className="pt-2 font-broadacre">
              <p>
                Published in{" "}
                <Link
                  className="text-azul-600 underline underline-offset-4"
                  href={article?.url}
                  target="_blank"
                >
                  {article?.source}, {article?.year}
                </Link>
              </p>
            </div>
          </PostBox>
          <PostBox>
            <div className={richTextStyles}>
              <PortableText
                value={article.body}
                components={myPortableTextComponents}
              />
            </div>
          </PostBox>
        </div>
      </section>
    </div>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="flex w-full flex-col justify-center">
        <Image
          src={urlFor(value).url()}
          alt={value.alt}
          width={700}
          height={700}
          className="self-center rounded-xl border border-silver-950 shadow-2xl"
        />
        <p className="max-w-[700px] self-center py-8 text-md italic">
          {value.caption}
        </p>
      </div>
    ),
  },
};

const richTextStyles = `
flex
flex-col
gap-2
text-base
lg:text-lg
font-overpass
prose-headings:mb-1
prose-headings:text-xl
md:prose-headings:text-2xl
prose-headings:font-bold
prose-p:mb-3
lg:prose-p:mb-4
prose-p:leading-12
prose-li:list-disc
prose-li:leading-12
prose-li:ml-10
`;
