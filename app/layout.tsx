import { ReactNode } from "react";
import { Lora, Poppins } from "next/font/google";
import { Viewport } from "next";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import localFont from "next/font/local";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import Script from "next/script";

const font = Poppins({ weight: "400", subsets: ["latin"] });

export const viewport: Viewport = {
    // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
    themeColor: config.colors.main,
    width: "device-width",
    initialScale: 1,
};

const avenir = localFont({
    src: "./AvenirLTProMedium.otf",
    display: "swap",
});
const gelica = localFont({
    src: "./GelicaRegular.otf",
    display: "swap",
});

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
});

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            data-theme={config.colors.theme}
            className={`${avenir} ${lora.variable} ${gelica}`}
        >
            {config.domainName && (
                <head>
                    <PlausibleProvider domain={config.domainName} />
                </head>
            )}
            <body>
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-K43JZQSH4H"
                ></Script>
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-K43JZQSH4H');
    `}
                </Script>

                {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
                <ReactQueryClientProvider>
                    <ClientLayout>{children}</ClientLayout>
                </ReactQueryClientProvider>
            </body>
        </html>
    );
}
