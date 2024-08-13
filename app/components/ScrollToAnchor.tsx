"use client";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const ScrollToAnchor = ({
  anchor,
  children,
  mobileOffset = 0,
  desktopOffset = 0,
  ...props
}: {
  anchor: string;
  children: ReactNode;
  mobileOffset?: number;
  desktopOffset?: number;
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedAnchor = sessionStorage.getItem("scrollToAnchor");
    if (storedAnchor) {
      sessionStorage.removeItem("scrollToAnchor");
      scrollToTargetSection(storedAnchor, mobileOffset, desktopOffset);
    }
  }, [pathname, mobileOffset, desktopOffset]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();

    // Save the anchor to session storage
    sessionStorage.setItem("scrollToAnchor", anchor);

    if (pathname !== "/") {
      // If on a subpage, navigate to the homepage
      router.push("/"); // Scrolling will be handled by useEffect after navigation
    } else {
      // If already on the homepage, directly scroll to the target section
      scrollToTargetSection(anchor, mobileOffset, desktopOffset);
    }
  };

  const scrollToTargetSection = (
    anchor: string,
    mobileOffset: number,
    desktopOffset: number,
  ) => {
    const element = document.getElementById(anchor);
    if (element) {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const offset = isMobile ? mobileOffset : desktopOffset;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update the URL with the anchor hash
      window.history.replaceState({}, "", `/#${anchor}`);
    }
  };

  return (
    <span onClick={handleClick} {...props}>
      {children}
    </span>
  );
};

export default ScrollToAnchor;
