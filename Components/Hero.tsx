import { cn } from "@/libs/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/magicbutton";
import { FaLocationArrow } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="pb-42 pt-42 ">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="-top-28 left-80 h-[80vh] w-[80vw]" fill="blue" />
               
            </div>
            <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100  dark:bg-grid-white/[0.02] bg-grid-black-100/[0.02]">
           
     
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            
            </div>

            <div className=" flex justify-center relative my-20 z-10 ">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className=" uppercase tracking-widest  text-center text-blue-100 mx-w-80  text-2xl underline">
                        Hi, I&apos;m Harshit
                    </h2>
                   
                    <TextGenerateEffect
                        words="Building Modern Web & System-Level Solutions"
                        className="text-center text-2xl md:text-2xl lg:text-4xl pb-1"
                    />

                    <p className="text-center py-10 md:tracking-wider font-bold md:text-xl lg:text-2xl">
                        A Full Stack Developer passionate about high-performance web applications and system-level engineering
                    </p>
                </div>
            </div>
            

            <a href="#about" className="flex justify-center">
                <MagicButton
                    title="My Projects"
                    position="right"
                    icon={<FaLocationArrow />}
                    
                />
            </a>
            
            
        </div>
    )
}