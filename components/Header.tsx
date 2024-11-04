"use client";

import { useState, useEffect } from "react";
import type { JSX } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/anana.png";
import config from "@/config";
import { AnanaLogo } from "./svgs/logos";

const links: {
    href: string;
    label: string;
}[] = [
    {
        href: "/#pricing",
        label: "Pricing",
    },
    {
        href: "/#testimonials",
        label: "Reviews",
    },
    {
        href: "/#faq",
        label: "FAQ",
    },
];

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
    useEffect(() => {
        setIsOpen(false);
    }, [searchParams]);

    return (
        <header className="">
            <nav
                className="container flex items-center justify-between lg:px-0 px-8 py-4 mx-auto lg:mx-[32px]"
                aria-label="Global"
            >
                {/* Your logo/name on large screens */}
                <div className="flex lg:flex-1">
                    <Link
                        className="flex items-center gap-2 shrink-0 "
                        href="/"
                        title={`${config.appName} homepage`}
                    >
                        <AnanaLogo />
                        {/* <span className="font-extrabold text-lg">
              {config.appName}
            </span> */}
                    </Link>
                </div>
                {/* Burger button to open menu on mobile */}
                <div className="flex lg:hidden"></div>

                {/* Your links on large screens */}
                {/* <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="link link-hover"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div> */}

                {/* CTA on large screens */}
                {/* <div className="hidden lg:flex lg:justify-end lg:flex-1">
          {cta}
        </div> */}
            </nav>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
                <div
                    className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
                >
                    {/* Your logo/name on small screens */}
                    <div className="flex items-center justify-between">
                        <Link
                            className="flex items-center gap-2 shrink-0 "
                            title={`${config.appName} homepage`}
                            href="/"
                        >
                            <Image
                                src={logo}
                                alt={`${config.appName} logo`}
                                className="w-8"
                                placeholder="blur"
                                priority={true}
                                width={32}
                                height={32}
                            />
                            <span className="font-extrabold text-lg">
                                {config.appName}
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
