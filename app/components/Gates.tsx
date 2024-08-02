"use client";
import { useState } from "react";
import GateLeft from "./GateLeft";
import GateRight from "./GateRight";
import LongDog from "./LongDog";
import LockButton from "./LockButton";
import Image from "next/image";

interface GatesProps {
  gateOpen: boolean;
  setGateOpen: (open: boolean) => void;
}

export const Gates = ({ gateOpen, setGateOpen }: GatesProps) => {
  return (
    <div className="grid grid-cols-6 grid-rows-4">
      <div
        className={`z-10 col-start-2 col-end-6 row-start-2 row-end-4 flex flex-col justify-center gap-6 text-center opacity-0 transition duration-700 ease-in md:min-w-[500px] ${gateOpen && "opacity-100"} ${!gateOpen && "pointer-events-none"}`}
      >
        <h3 className="font-stint text-3xl font-bold text-silver-950 md:text-4xl">
          Public streets are for the public
        </h3>
        <button className="skew-x-6 skew-y-2 hover:animate-[shake_.5s_infinite]">
          <a
            href="https://opensidewalks.la/gates"
            target="_blank"
            className="w-fit rounded-sm bg-sign-500 px-2 font-balto text-xl font-bold text-silver-950 md:text-4xl"
          >
            Sign the petition!
          </a>
        </button>
      </div>
      <div
        className={`col-start-6 row-start-4 translate-x-[100%] duration-1000 ${gateOpen && "col-start-5 -translate-x-[125%]"}`}
      >
        <LongDog />
      </div>
      <div
        className={`md-row-start-1 col-start-2 col-end-3 row-start-1 -rotate-12 self-center justify-self-start opacity-0 duration-1000 md:row-start-1 md:justify-self-end ${gateOpen && "opacity-100"}`}
      >
        <Image src="/home.svg" alt="test" width={240} height={240} />
      </div>
      <div
        className={`col-start-5 col-end-6 row-start-1 rotate-12 self-end justify-self-start opacity-0 duration-1000 md:row-start-1 md:justify-self-start ${gateOpen && "opacity-100"}`}
      >
        <Image src="/bus_stop.svg" alt="test" width={240} height={240} />
      </div>
      <div className="col-start-1 col-end-7 row-start-1 row-end-5">
        <div className="bg-bglite flex h-[500px] w-full flex-row items-center justify-center overflow-clip py-6 md:h-full">
          <div
            className={`flex w-full justify-end pr-2 duration-500 ${gateOpen && "-translate-x-[50%]"}`}
          >
            <GateLeft />
          </div>
          <div
            className={`flex w-full justify-start pl-2 duration-500 ${gateOpen && "translate-x-[50%]"}`}
          >
            <GateRight />
          </div>
          <div
            className={`absolute z-50 hover:animate-[shake_.5s_infinite] hover:cursor-pointer ${gateOpen && "hidden"}`}
          >
            <LockButton gateOpen={gateOpen} setGateOpen={setGateOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};
