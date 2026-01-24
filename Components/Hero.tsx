import { cn } from "@/libs/utils";
import { Spotlight } from "./ui/Spotlight";

export default function Hero() {
    return (
        <div className="pb-32 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="-top-28 left-80 h-[80vh] w-[80vw]" fill="blue" />
               
            </div>
            <div className="relative top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
            <div
                className={cn(
                "absolute inset-0",
                "bg-size-[40px_40px]",
                "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
     
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl" />
            </div>

            <div className=" flex justify-center ">
                <div className="max-w-[89vw]">
                    <h2>
                        Hi, I'm Harshit
                    </h2>
                </div>
            </div>
        </div>
    )
}