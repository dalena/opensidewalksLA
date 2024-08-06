"use client";
import React, { ReactNode } from "react";

const ScrollToAnchor = ({
  anchor,
  children,
  offset = 0, // Add an offset prop with a default value
  ...props
}: {
  anchor: string;
  children: ReactNode;
  offset?: number; // Define the offset prop type
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();

    // Delay scrolling to allow any necessary operations to complete
    setTimeout(() => {
      const element = document?.getElementById(anchor);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      // Update the URL with the anchor hash
      window.history.pushState({}, "", `/#${anchor}`);
    }, 100); // 100ms delay
  };

  return (
    <span onClick={handleClick} {...props}>
      {children}
    </span>
  );
};

export default ScrollToAnchor;
