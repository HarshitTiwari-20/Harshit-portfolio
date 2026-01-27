import Grid from "@/Components/grid";
import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/floatingNavbar";
import { FaFileContract, FaHome, FaRProject, FaUser } from "react-icons/fa";



export default function Home() {
  return (
    <div className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl  w-full text-white ">
        <FloatingNav
          navItems={[
            {name: "Home", link: "/", icon: <FaHome />},
            {name: "About", link: "#about", icon: <FaUser />},
            {name: "Projects", link: "#projects", icon: <FaRProject />},
            {name: "Contact", link: "#contact", icon: <FaFileContract />},
          ]}
        />
        <Hero />
        <Grid />
        
      </div>
    </div>

  );
}
