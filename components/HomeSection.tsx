import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { Button } from "./ui/button";
import Link from "next/link";

export function HomeSection() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center mt-[250px] text-white">
        <p className="font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
         WELCOME TO WE3IN
        </p>
        <p className="pt-4 tracking-wider">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, id.</p>
        <div className="flex gap-4">
        <Button className="mt-4" variant={"default"}>Discover our Feature  →</Button>
        <Link href={"/register"}><Button className="mt-4" variant={"ghost"}>Join Us!</Button></Link>
        </div>
      </div>
      <div className="bg-gradient-to-t from-background to-80% absolute w-screen h-[200px] bottom-0 z-20">

      </div>
    </BackgroundGradientAnimation>
  );
}
