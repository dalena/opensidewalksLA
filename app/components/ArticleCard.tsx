import React from "react";
import Link from "next/link";
import { Article } from "../utils/interface";
import Image from "next/image";

interface Props {
  article: Article;
}
export const revalidate = 60;

const ArticleCard = ({ article }: Props) => {
  return (
    <>
      <Link
        className={`${cardStyle} cursor-pointer`}
        href={`/article/${article?.slug?.current}`}
      >
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="relative h-[240px] flex-none overflow-clip rounded-2xl shadow-xl md:w-[33%] md:-translate-x-16">
            <Image
              src={article?.image}
              alt={article?.title}
              width={960}
              height={540}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-none md:w-[70%] md:-translate-x-14">
            <div className="flex w-full flex-row justify-between">
              <h2 className="pb-2 font-balto text-xl font-bold leading-tight tracking-wide md:w-[90%] lg:text-2xl">
                {article?.title}
              </h2>
              <div className="flex justify-end align-middle md:w-[10%]">
                <span className="outline-3 inline-block h-fit w-fit rounded-md border bg-sign-500 px-2 pb-1 pt-2 font-overpass text-sm font-bold lowercase outline outline-sign-500">
                  {article?.year}
                </span>
              </div>
            </div>
            <div className="md:w-[90%]">
              <p className="pb-2 font-broadacre text-sm">{article?.source}</p>
              <p className="line-clamp-4 font-overpass text-base">
                {article?.excerpt}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArticleCard;

const cardStyle = `
    mb-8
    bg-silver-200
    p-4
    rounded-3xl
    transition ease-in-out
    w-full
    hover:z-50
    hover:scale-105
    border-2
    hover:bg-silver-100
    hover:shadow-xl
    duration-300
`;
