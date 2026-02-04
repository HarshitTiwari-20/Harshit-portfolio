import Grid from "@/Components/grid";
import Hero from "@/Components/Hero";
import { RecnetProj } from "@/Components/recentproj";
import { FloatingNav } from "@/Components/ui/floatingNavbar";
import { navItems } from "@/data/gridItems";




export default function Home() {
  return (
    <div className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl  w-full text-white ">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecnetProj />
        
      </div>
    </div>

  );
}
