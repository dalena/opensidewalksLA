import Link from "next/link";
import { ReactNode } from "react";

type PropType = {
  sectionTitle: string;
  anchor: string;
  children: ReactNode;
};

export const Section = ({ sectionTitle, anchor, children }: PropType) => {
  return (
    <section
      id={anchor}
      className="bg-stone-400 text-white mb-14 flex min-h-[50vh] w-full justify-center"
    >
      <div className="w-full px-6 py-4 md:max-w-[1600px] md:px-10 md:py-10">
        <div className="flex justify-center pb-6 md:justify-start md:pb-16">
          <h2 className="rounded-md border-2 bg-azul-600 pb-1 pl-6 pr-8 pt-3 font-overpass text-3xl font-bold text-silver-50 shadow-2xl outline outline-4 outline-azul-600 md:text-5xl">
            {sectionTitle}
          </h2>
        </div>
        <div className="font-overpass text-base md:text-xl">{children}</div>
      </div>
    </section>
  );
};
