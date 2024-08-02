import { ReactNode } from "react";

export const InfoBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1100px] cursor-move rounded-2xl border-2 border-silver-950 bg-[#D2E040] p-4 shadow-2xl outline outline-[12px] outline-[#D2E040] transition ease-in-out hover:scale-105 md:m-6 md:border-4 md:p-8">
        {children}
      </div>
    </div>
  );
};
