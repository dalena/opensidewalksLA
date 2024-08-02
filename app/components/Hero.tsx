"use client";

import { useEffect, useState } from "react";
import { Gates } from "./Gates";

const classesGateOpen =
  "w-full h-full bg-gradient-to-b from-[#81b82a] from-[15svh] via-[#a1d64c] via-[45svh] to-silver-300 to-[100svh]";

const classesGateClosed = "w-full h-full bg-silver-300";

export const Hero = () => {
  const [gateOpen, setGateOpen] = useState(false);

  useEffect(() => {
    const element = document?.querySelector?.("#gradient");
    element?.removeAttribute("class");

    if (gateOpen) {
      element?.classList.add(...classesGateOpen.split(" "));
    } else {
      element?.classList.add(...classesGateClosed.split(" "));
    }
  }, [gateOpen]);

  return (
    <section className="h-full w-full overflow-x-hidden md:pt-[40px]">
      <div className="hidden">
        <div className={classesGateOpen}></div>
        <div className={classesGateClosed}></div>
      </div>
      <Gates gateOpen={gateOpen} setGateOpen={setGateOpen} />
    </section>
  );
};
