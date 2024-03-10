import { ContentGrid } from "@/components/ContentGrid";
import { Navbar } from "@/components/Navbar";
import SoftNavbar from "@/components/SoftNavbar";
import { Stick } from "next/font/google";
import React from "react";

const page = () => (
  <div>
    <SoftNavbar/>
    <ContentGrid/>
   
  </div>
);

export default page;
