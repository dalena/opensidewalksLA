import { PostBox } from "@/app/components/PostBox";
import { Article } from "@/app/utils/interface";
import { PortableText } from "@portabletext/react";
import { getSingleArticle } from "@/sanity/utils";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  const article: Article = await getSingleArticle(params?.slug);
  return (
    <div>
      <section className="text-white w-full px-8">
        <div className="relative flex h-[500px] w-full justify-center overflow-clip rounded-2xl shadow-xl">
          <Image
            src={article?.image}
            alt={article?.title}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="-translate-y-32">
          <PostBox>
            <div className="flex flex-row gap-4">
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
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlFor(value).url()} alt="post" width={700} height={700} />
    ),
  },
};

const richTextStyles = `
flex
flex-col
text-base
lg:text-lg
font-overpass
prose-headings:mb-1
prose-headings:text-2xl
prose-headings:font-bold
prose-p:mb-3
lg:prose-p:mb-4
prose-p:leading-12
prose-li:list-disc
prose-li:leading-12
prose-li:ml-6
`;
