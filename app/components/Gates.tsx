"use client";
import { useState } from "react";
import GateLeft from "./GateLeft";
import GateRight from "./GateRight";
import LongDog from "./LongDog";
import LockButton from "./LockButton";

interface GatesProps {
  gateOpen: boolean;
  setGateOpen: (open: boolean) => void;
}

export const Gates = ({ gateOpen, setGateOpen }: GatesProps) => {
  return (
    <div>
      <div className="absolute flex h-full w-full flex-col justify-center">
        <div
          className={`flex max-h-[500px] -translate-y-[1vh] translate-x-[100%] items-center justify-center duration-700 md:-translate-y-[10%] ${gateOpen && "translate-x-[35%]"}`}
        >
          <LongDog />
        </div>
      </div>
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
        <div
          className={`absolute flex flex-col gap-6 p-4 text-center opacity-0 duration-500 md:gap-8 ${gateOpen && "opacity-100"} ${!gateOpen && "pointer-events-none"}`}
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
      </div>
    </div>
  );
};
