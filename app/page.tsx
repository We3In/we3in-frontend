import Image from "next/image";
import { Button } from "@/components/ui/button"
import { HomeSection } from "@/components/HomeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    {/* todo : navbar */}
      <HomeSection/>
      <p>Bugra</p>
  </main>
  );
}
