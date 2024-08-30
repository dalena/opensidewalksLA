import { sanityFetch } from "@/sanity/lib/client";
import { questionQuery } from "@/sanity/utils";
import { Question } from "@/app/utils/interface";
import { Section } from "./Section";
import QaCard from "./QaCard";

export default async function Faq() {
  const questions: Question[] = await sanityFetch({
    query: questionQuery,
    tags: ["post"],
  });
  return (
    <Section sectionTitle="FAQ" anchor="faq">
      <div className="flex w-full flex-col justify-center gap-6">
        {questions?.length > 0 &&
          questions?.map((question) => (
            <QaCard key={question?._id} question={question} />
          ))}
      </div>
    </Section>
  );
}
