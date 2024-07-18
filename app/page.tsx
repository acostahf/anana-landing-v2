import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="flex justify-center">
			<div className="w-full 2xl:max-w-7xl overflow-hidden relative ">
				<Suspense>
					<Header />
				</Suspense>
				<main className="overflow-hidden">
					<Hero />
				</main>
			</div>
		</div>
	);
}
