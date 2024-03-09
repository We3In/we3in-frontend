import Image from "next/image";
import { Button } from "@/components/ui/button"
import { HomeSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";
import { SignUp } from "@/components/SignUp";
import { BentoGridThird } from "@/components/BentoGridThird";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import CustomTitle from "@/components/CustomTitle";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HomeSection/>


      <CustomTitle title="Explore Our Features" description="Lorem Ipsum, basım ve dizgi endüstrisinin sahte metnidir."/>
      <BentoGridThird/>
      <CustomTitle title="Join Us"/>
  </main>
  );
}