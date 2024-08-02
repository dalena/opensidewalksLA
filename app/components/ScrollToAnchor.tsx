"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const ScrollToAnchor = ({
  anchor,
  children,
  ...props
}: {
  anchor: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const router = useRouter();
  return (
    <span
      onClick={(e) => {
        const element = document?.getElementById(anchor);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // router.push(`#${anchor}`)
        }
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default ScrollToAnchor;
