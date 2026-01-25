import { cn } from "@/libs/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
    return (
        <div className="pb-32 pt-36 ">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="-top-28 left-80 h-[80vh] w-[80vw]" fill="blue" />
               
            </div>
            <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100  dark:bg-grid-white/[0.02] bg-grid-black-100/[0.02]">
            <div
                className={cn(
                "absolute inset-0 pointer-events-none flex items-center justify-center",
                "bg-size-[100px_100px]",
                "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] ",
                )}
            />
     
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            
            </div>

            <div className=" flex justify-center relative my-20 z-10 ">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className=" uppercase tracking-widest text-xs text-center text-blue-100 mx-w-80 ">
                        Hi, I'm Harshit
                    </h2>
                </div>
            </div>
            <TextGenerateEffect
        words="Building Web based and System Based Projects ."
        className="text-center text-[20px] md:text-5xl lg:text-6xl"
      />
        </div>
    )
}