import React from "react";
import { Question } from "../utils/interface";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  question: Question;
}

const QaCard = ({ question }: Props) => {
  return (
    <div>
      <p className="line-clamp-4 font-overpass text-base">
        {question?.question}
      </p>
      <div className={richTextStyles}>
        <PortableText
          value={question.answer}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default QaCard;
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
