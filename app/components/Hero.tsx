"use client";

import Image from 'next/image'
import { useState, useEffect } from 'react';
import GateLeft from './GateLeft';
import GateRight from './GateRight';
import { useTheme } from 'next-themes';
import OpenGatesText from './OpenGatesText';

export const Hero = () => {



  const [gateOpen, setGateOpen] = useState(false)
  return (
    <section className='w-full h-full pt-[110px]'>
      <div className='flex flex-row items-center justify-center bg-bglite w-full py-6 overflow-clip'>
        <div className={`w-full duration-500 flex justify-end pr-2 hover:cursor-pointer ${gateOpen && "-translate-x-full"}`} onClick={() => {
          setGateOpen((prev) => !prev);
        }}><GateLeft /></div>
        <div className={`w-full duration-500 flex justify-start pl-2 hover:cursor-pointer ${gateOpen && "translate-x-full"}`} onClick={() => {
          setGateOpen((prev) => !prev);
        }}><GateRight /></div>
      </div>
      {/* {gateOpen && (
        <div className=''>
          <OpenGatesText />
        </div>
      )} */}
    </section>
  )
}
