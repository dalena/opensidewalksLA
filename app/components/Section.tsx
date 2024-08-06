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
      <div className="w-full px-4 py-2 md:max-w-[1400px] md:px-10 md:py-10">
        <div className="flex justify-center pb-6 md:justify-start">
          <h2 className="font-overpass text-4xl text-silver-950 md:text-5xl">
            {sectionTitle}
          </h2>
        </div>
        <div className="font-overpass text-base md:text-xl">{children}</div>
      </div>
    </section>
  );
};
