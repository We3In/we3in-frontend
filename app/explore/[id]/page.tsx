import { Navbar } from "@/components/Navbar";
import SoftNavbar from "@/components/SoftNavbar";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";

export default function Page({ params }: { params: { id: string } }) {
  return ( 
  <div>
    <div className="fixed">
    <SoftNavbar/></div>
    <StickyScrollRevealDemo/>
    
  </div>
  ) 
}