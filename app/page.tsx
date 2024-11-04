import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="flex justify-center">
            <div className="w-full overflow-hidden relative ">
                {/* <Suspense>
                    <Header />
                </Suspense> */}
                <main className="overflow-hidden">
                    <Hero />
                    <Footer />
                </main>
            </div>
        </div>
    );
}
