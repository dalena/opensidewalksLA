import { ReactNode } from "react";

export const PostBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="m-6 max-w-[1100px] rounded-2xl border-2 bg-silver-100 p-8 shadow-xl">
        {children}
      </div>
    </div>
  );
};
