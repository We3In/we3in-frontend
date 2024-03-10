"use client";
import React from "react";

import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { IconMapPin } from '@tabler/icons-react';
import { IconLocation } from '@tabler/icons-react';

const content = [
  {
    
    title: "Superteam 3. Mini Hackathon",
    description:
      "Kaçırılmaması gereken Superteam Mini Hackathonu'na katılın! Etkinlikte projenizi geliştirmek için fırsatlar bulun, network oluşturun, moderatör desteğinden faydalanın ve lezzetli pizzaları deneyimleyin. Ayrıca, projenizi global hackathona taşıma şansını da yakalayın.",
      
      content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white mb-10">
        Superteam Hackathon
      </div>
    ),
   
    
    
    
  },
  
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
