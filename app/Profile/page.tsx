import Link from "next/link";
import React from "react";
import Image from "next/image";
import ClaimedChallenges from "@/components/ClaimedChallenges";
import SoftNavbar from "@/components/SoftNavbar";

export default function Page() {
  return (
    <>
        <SoftNavbar />

        <div className="flex flex-col justify-center items-center mt-5">
          <Image
            src={"/bugraokumus.jpg"}
            width={180}
            height={180}
            className="rounded-full border-4 border-white"
          />
          <h1 className="text-3xl font-bold mt-3 uppercase">Buğra Okumuş</h1>
          <p className="text-neutral-400">BU••••••••Net</p>
        </div>
        <ClaimedChallenges />
    </>
  );
}
