import Image from "next/image";
import { Button } from "@/components/ui/button"
import { HomeSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";
import { SignUp } from "@/components/SignUp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HomeSection/>
      <p>Bugra</p>
  </main>
  );
}
