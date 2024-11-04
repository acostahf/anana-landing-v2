"use client";
import Image from "next/image";
import ButtonLead from "./ButtonLead";
import { AnanaLogo } from "./svgs/logos";

const Hero = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center md:flex-row bg-[#f6ede3]">
            <Image
                src="/assets/ananapreview-11.png"
                alt="Hero"
                // placeholder="blur"
                quality={100}
                priority={true}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
                className="absolute inset-0 z-[-1]"
            />
            <div className="flex flex-col justify-start items-center w-full md:w-[891px] gap-6 md:gap-12 p-4">
                <div className="flex flex-col justify-start items-center relative gap-4 md:gap-6">
                    <AnanaLogo />
                    <p className="flex-grow-0 flex-shrink-0 w-full md:w-[753px] text-4xl md:text-8xl text-center text-[#fffcf9]">
                        <span className="flex-grow-0 flex-shrink-0 w-full md:w-[753px] text-4xl md:text-8xl text-center text-[#fffcf9]">
                            a recipe website{" "}
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 w-full md:w-[753px] text-4xl md:text-8xl font-semibold italic text-center text-[#fffcf9]">
                            reimagined.
                        </span>
                    </p>
                    <p className="w-full md:max-w-[891px] text-base md:text-xl text-center text-wrap text-white">
                        Cooking taught by real nonni. Learn authentic,
                        cherished recipes straight from grandparents&apos;
                        kitchens. Join the 423 people who&apos;ve signed up
                        and bring tradition to your table.
                    </p>
                </div>
                <div className="flex flex-col justify-start items-center relative gap-2 md:gap-4 w-full">
                    <ButtonLead />
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-full md:w-[891px] text-sm md:text-base text-center text-white">
                        Launching January, 2025
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
