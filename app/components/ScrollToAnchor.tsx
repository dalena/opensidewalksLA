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

  const handleClick = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ) => {
    e.preventDefault();
    await router.push("/");

    // Delay scrolling to allow navigation to complete and add a noticeable delay
    setTimeout(() => {
      const element = document?.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Update the URL with the anchor hash
      window.history.pushState({}, "", `/#${anchor}`);
    }, 300); // 500ms delay
  };

  return (
    <span onClick={handleClick} {...props}>
      {children}
    </span>
  );
};

export default ScrollToAnchor;
