import { getQuestions } from "@/sanity/utils";
import { Question } from "@/app/utils/interface";
import { Section } from "./Section";
import QaCard from "./QaCard";

export const revalidate = 60;

export default async function Faq() {
  const questions: Question[] = await getQuestions();
  return (
    <Section sectionTitle="FAQ" anchor="faq">
      <div className="flex -translate-y-10 flex-col gap-6">
        {questions?.length > 0 &&
          questions?.map((question) => (
            <QaCard key={question?._id} question={question} />
          ))}
      </div>
    </Section>
  );
}
