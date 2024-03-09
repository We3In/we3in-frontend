import { Navbar } from "@/components/Navbar";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";


export default function Page({ params }: { params: { id: string; }; }) {
  return (<div>My Post: {params.id}
    <Navbar />
    <StickyScrollRevealDemo />
    
  </div>
  );
}
