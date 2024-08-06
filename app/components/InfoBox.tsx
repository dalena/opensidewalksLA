import { ReactNode } from "react";

export const InfoBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-2xl border-2 border-silver-950 bg-[#D2E040] p-4 outline outline-[12px] outline-[#D2E040] md:m-6 md:p-8">
        {children}
      </div>
    </div>
  );
};
