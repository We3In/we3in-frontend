"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 max-w-xl mx-auto z-[100]",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/feature">Features</HoveredLink>
        <HoveredLink href="/explore">Explore</HoveredLink>
        <HoveredLink href="/login">Login</HoveredLink>
        <HoveredLink href="/Profile">Profile</HoveredLink>
      </Menu>
    </div>
  );
}
