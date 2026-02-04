import { projects } from "@/data/gridItems"
import { PinContainer } from "./ui/threeDpin"
import { FaLocationArrow } from "react-icons/fa"

export const RecnetProj = () => {
    return (
        <div className="py-20 justify-center items-center" id="projects">
            <h1 className="heading text-4xl md:text-5xl lg:text-6xl font-bold ">
                A collection of my {' '}
                <span className="text-purple-300">recent projects</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center p-16 gap-x-34 gap-y-16 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className="lg:min-h-[32rem] h-[25rem]  sm:w-96 w-[80vw] flex items-center justify-center lg:mb-20">
                        <PinContainer title={title} href={link}>
                            <div className="relative flex items-center justify-center sm:w-96  w-[80vw] overflow-hidden h-[40vh] lg:h-[40vh] mb-10">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img
                                        src={img}
                                        alt={title}
                                        className="w-full h-full object-cover opacity-60" />
                                </div>
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-purple-300">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {des}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3 ">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index * 2} px)`
                                            }}
                                        >
                                            <img src={icon} alt={icon} className="p-2" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple-300"> Check Live Site</p>
                                    <FaLocationArrow className=" ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}

            </div>
        </div>
    )
}