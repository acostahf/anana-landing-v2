import Link from "next/link";
import Image from "next/image";
import { FooterLogo, Hand } from "./svgs/logos";
import { JSX } from "react";
import { InstaGram, Linkedin, TikTok, Youtube } from "./svgs/Icons";

type LinkSection = {
    href: string;
    label: string;
    //@ts-ignore-next-line
    icon?: JSX.Element;
};

type Links = {
    company: LinkSection[];
    support: LinkSection[];
    socials: LinkSection[];
};

const Footer = () => {
    const links: Links = {
        company: [
            { href: "/about", label: "About Us" },
            { href: "/team", label: "The Team" },
            { href: "/regions", label: "Regions" },
        ],
        support: [
            { href: "/careers", label: "Careers" },
            { href: "/faqs", label: "FAQs" },
        ],
        socials: [
            {
                href: "https://instagram.com",
                label: "Instagram",
                icon: <InstaGram />,
            },
            {
                href: "https://tiktok.com",
                label: "TikTok",
                icon: <TikTok />,
            },
            {
                href: "https://youtube.com",
                label: "YouTube",
                icon: <Youtube />,
            },
            {
                href: "https://linkedin.com",
                label: "LinkedIn",
                icon: <Linkedin />,
            },
        ],
    };

    return (
        <footer className="bg-[#f6ede3] pb-4 pt-20 lg:pt-36 px-6 lg:px-20 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-4 md:gap-20 items-start md:items-start">
                {/* Logo and Tagline */}
                <div className="flex flex-col pb-10 md:pb-0">
                    <div className="w-[218px] h-[68px]">
                        <Hand />
                        <p className="font-lora text-lg text-[#1765fc] -mt-2 ml-12">
                            Recipes for{" "}
                            <em className="font-semibold">Life.</em>
                        </p>
                    </div>
                </div>

                {/* Links Sections */}
                <div className="flex flex-col md:flex-row w-full justify-between lg:max-w-[780px] flex-wrap">
                    {["company", "support", "socials"].map(
                        (section: keyof Links) => (
                            <div
                                key={section}
                                className="hidden md:flex flex-col gap-6 pr-4"
                            >
                                <p className="text-md lg:text-xl font-semibold text-[#1d1128] capitalize">
                                    {section}
                                </p>
                                <div className="flex flex-col gap-4">
                                    {links[section as keyof Links].map(
                                        (link) => (
                                            <div
                                                key={link.href}
                                                // href={link.href}
                                                // passHref
                                            >
                                                <a className="font-avenir text-sm lg:text-base text-[#1d1128] flex items-center gap-2">
                                                    {link.icon &&
                                                        link.icon}
                                                    {link.label}
                                                </a>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )
                    )}

                    <div className="flex md:hidden flex-row gap-6 pb-10">
                        {["company", "support"].map(
                            (section: keyof Links) => (
                                <div
                                    key={section}
                                    className="flex  flex-col gap-6"
                                >
                                    <p className="text-md lg:text-xl font-semibold text-[#1d1128] capitalize">
                                        {section}
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        {links[section].map((link) => (
                                            <div
                                                key={link.href}
                                                // href={link.href}
                                                // passHref
                                            >
                                                <a className="text-sm lg:text-base text-[#1d1128] flex items-center gap-2">
                                                    {link.icon &&
                                                        link.icon}
                                                    {link.label}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col gap-4 pb-10 md:pb-0">
                        <p className="text-md lg:text-xl pb-2 font-semibold text-[#1d1128]">
                            Contact Us
                        </p>
                        <p className="text-sm lg:text-base text-[#1d1128]">
                            hello@anana.us
                        </p>
                        <div className="flex flex-row gap-4 items-center">
                            <div className="flex justify-start items-start relative">
                                <p className="text-base text-center bg-clip-text text-transparent bg-gradient-to-r from-[#7B00FF] to-[#D36E00]">
                                    Submit a nonna
                                </p>
                            </div>
                            <button className="bg-[#1765fc] hover:bg-[#1451c7]/75 text-white rounded-xl py-1.5 px-4 text-xs md:text-sm font-sans">
                                Apply now!
                            </button>
                        </div>
                    </div>

                    {["socials"].map((section: keyof Links) => (
                        <div
                            key={section}
                            className="flex md:hidden flex-col gap-4"
                        >
                            <div className="flex flex-row gap-8">
                                {links[section].map((link) => (
                                    <div
                                        key={link.href}
                                        // href={link.href}
                                        // passHref
                                    >
                                        <a className="text-sm lg:text-base text-[#1d1128] flex items-center gap-2">
                                            {link.icon && link.icon}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer Bottom Section */}
            <div className="flex lg:flex-col justify-start items-start lg:justify-end lg:items-end md:gap-10 mt-10 pt-20  text-sm text-[#1d1128]">
                <svg
                    width={787}
                    height={1}
                    viewBox="0 0 787 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    className="hidden lg:block"
                >
                    <line
                        x1="-4.37114e-8"
                        y1="0.5"
                        x2={787}
                        y2="0.499931"
                        stroke="#E0D0BE"
                    />
                </svg>

                <p className="font-avenir">
                    Copyright &copy; 2024 Anana, All Rights Reserved |{" "}
                    {/* <Link href="/terms"> */}
                    <a className="text-[#1765fc]">Terms and Conditions</a>
                    {/* </Link>{" "} */}| {/* <Link href="/privacy"> */}
                    <a className="text-[#1765fc]">Privacy Policy</a>
                    {/* </Link> */}
                </p>
            </div>

            <div className="hidden xl:block absolute w-[650px] h-[275px] left-0 bottom-0 ">
                <Image
                    src={"/assets/footer-png.png"}
                    alt="footer img"
                    fill
                />
            </div>
        </footer>
    );
};

export default Footer;
