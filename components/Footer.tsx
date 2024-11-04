import Link from "next/link";
import Image from "next/image";
import { FooterLogo, Hand } from "./svgs/logos";
import { InstaGram, Linkedin, TikTok, Youtube } from "./svgs/Icons";

const Footer = () => {
    const links = {
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
        <footer className="bg-[#f6ede3] pb-4 pt-20 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col flex-wrap md:flex-row md:justify-between gap-4 md:gap-20 items-start md:items-start">
                {/* Logo and Tagline */}
                <div className="flex items-center gap-4 mb-6 md:mb-0">
                    <Hand />
                    <div>
                        <FooterLogo />
                        <p className="text-lg text-[#1765fc]">
                            Recipes for <em>Life.</em>
                        </p>
                    </div>
                </div>

                {/* Links Sections */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-20">
                    {["company", "support", "socials"].map((section) => (
                        <div
                            key={section}
                            className="hidden md:flex flex-col gap-4"
                        >
                            <p className="text-md lg:text-xl font-semibold text-[#1d1128] capitalize">
                                {section}
                            </p>
                            <div className="flex flex-col gap-2">
                                {links[section].map((link) => (
                                    <div
                                        key={link.href}
                                        // href={link.href}
                                        // passHref
                                    >
                                        <a className="text-sm lg:text-base text-[#1d1128] flex items-center gap-2">
                                            {link.icon && link.icon}
                                            {link.label}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="flex md:hidden flex-row gap-8">
                        {["company", "support"].map((section) => (
                            <div
                                key={section}
                                className="flex  flex-col gap-4"
                            >
                                <p className="text-md lg:text-xl font-semibold text-[#1d1128] capitalize">
                                    {section}
                                </p>
                                <div className="flex flex-col gap-2">
                                    {links[section].map((link) => (
                                        <div
                                            key={link.href}
                                            // href={link.href}
                                            // passHref
                                        >
                                            <a className="text-sm lg:text-base text-[#1d1128] flex items-center gap-2">
                                                {link.icon && link.icon}
                                                {link.label}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col gap-4">
                        <p className="text-md lg:text-xl font-semibold text-[#1d1128]">
                            Contact Us
                        </p>
                        <p className="text-sm lg:text-base text-[#1d1128]">
                            hello@anana.us
                        </p>
                        <div className="flex flex-row gap-4 items-center">
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                <p className="flex-grow-0 flex-shrink-0 text-base text-center">
                                    Submit a nonna
                                </p>
                            </div>
                            <button className="bg-[#1765fc] text-white rounded-xl px-4 py-1 lg:py-2 text-sm font-medium">
                                Apply Now!
                            </button>
                        </div>
                    </div>

                    {["socials"].map((section) => (
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
            <div className="border-t border-[#e0d0be] mt-10 pt-4 text-center text-sm text-[#1d1128]">
                <p>
                    Copyright &copy; 2024 Anana, All Rights Reserved |{" "}
                    {/* <Link href="/terms"> */}
                    <a className="text-[#1765fc]">Terms and Conditions</a>
                    {/* </Link>{" "} */}| {/* <Link href="/privacy"> */}
                    <a className="text-[#1765fc]">Privacy Policy</a>
                    {/* </Link> */}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
