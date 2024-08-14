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

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    if (pathname !== "/") {
      // Store the anchor and offsets in sessionStorage
      sessionStorage.setItem("scrollToAnchor", anchor);
      sessionStorage.setItem("mobileOffset", mobileOffset.toString());
      sessionStorage.setItem("desktopOffset", desktopOffset.toString());

      // Navigate to the homepage
      router.push("/");
    } else {
      // If on the homepage, scroll directly to the target section
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

      // Update the URL to include the anchor without reloading the page
      window.history.replaceState({}, "", `/#${anchor}`);
    }
  };

  useEffect(() => {
    // Check if an anchor is stored in sessionStorage after navigating to the homepage
    const storedAnchor = sessionStorage.getItem("scrollToAnchor");
    if (storedAnchor) {
      const storedMobileOffset = parseInt(
        sessionStorage.getItem("mobileOffset") || "0",
        10,
      );
      const storedDesktopOffset = parseInt(
        sessionStorage.getItem("desktopOffset") || "0",
        10,
      );

      // Scroll to the stored anchor with the stored offsets
      scrollToTargetSection(
        storedAnchor,
        storedMobileOffset,
        storedDesktopOffset,
      );

      // Clean up sessionStorage
      sessionStorage.removeItem("scrollToAnchor");
      sessionStorage.removeItem("mobileOffset");
      sessionStorage.removeItem("desktopOffset");
    }
  }, [pathname]); // Reacts to pathname change, ensuring the scroll happens after navigation

  return (
    <span
      onClick={handleClick}
      {...props}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      {children}
    </span>
  );
};

export default ScrollToAnchor;
