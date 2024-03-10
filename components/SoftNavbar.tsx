import Link from "next/link";
import React from "react";
import { IconUser } from "@tabler/icons-react";

const SoftNavbar = () => {
  return (
    <div className="flex justify-between items-center w-screen px-24 py-5 z-[100]">
      <Link
        href={"/"}
        className="text-2xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
      >
        WE3IN*
      </Link>

      <div className="flex">
        <Link
          className="mx-3 text-neutral-700 text-primary hover:text-black dark:hover:text-neutral-500"
          href={"/"}
        >
          {" "}
          Home{" "}
        </Link>
        <Link
          className="mx-3 text-neutral-700 text-primary hover:text-black dark:hover:text-neutral-500"
          href={"/explore"}
        >
          {" "}
          Explore{" "}
        </Link>
        <Link
          className="mx-3 text-neutral-700 text-primary hover:text-black dark:hover:text-neutral-500"
          href={"/"}
        >
          {" "}
          Logout{" "}
        </Link>
        <Link href={"/"}>
          <IconUser />
        </Link>
      </div>
    </div>
  );
};

export default SoftNavbar;
