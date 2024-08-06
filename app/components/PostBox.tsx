import { ReactNode } from "react";

export const PostBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="m-2 max-w-[1100px] rounded-2xl border-2 bg-silver-100 p-8 shadow-xl md:m-6">
        {children}
      </div>
    </div>
  );
};
