import React from "react";
import { Question } from "../utils/interface";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  question: Question;
}

const QaCard = ({ question }: Props) => {
  return (
    <div className="">
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="m-0 rounded-lg border-2 px-6 font-overpass text-base duration-300 hover:scale-[101%] hover:bg-silver-400 md:text-xl"
        >
          <AccordionTrigger className="text-left font-bold tracking-wider hover:no-underline">
            {question?.question}
          </AccordionTrigger>
          <AccordionContent className={`${richTextStyles}`}>
            <PortableText
              value={question.answer}
              components={myPortableTextComponents}
            />{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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
