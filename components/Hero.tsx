"use client";
import Image from "next/image";
import ButtonLead from "./ButtonLead";
import { animate, motion, useMotionValue } from "framer-motion";

import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const Hero = () => {
	const [items, setItems] = useState([
		"htt	ps://images.unsplash.com/photo-1581579439002-e29ac578f8d4?q=80&w=2587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1583729259394-0315fc9e3338?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1637080146000-4c0673b1bb71?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	]);
	const [secondItems, setSecondItems] = useState([
		"https://images.unsplash.com/photo-1634979632467-1a68421d13b6?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1630919170952-106ba279a618?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1447279506476-3faec8071eee?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	]);
	const [thirdItems, setThirdItems] = useState([
		"https://images.unsplash.com/photo-1606584178861-09b1d9149487?q=80&w=2427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1630919170952-106ba279a618?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1581579439002-e29ac578f8d4?q=80&w=2587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	]);

	let [ref, { height }] = useMeasure();
	const yTranslation = useMotionValue(0);

	useEffect(() => {
		let controls;
		let finalPosition = -height / 2 - 8;
		let startPosition = 0;

		controls = animate(yTranslation, [startPosition, finalPosition], {
			ease: "linear",
			duration: 25,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});

		return controls.stop;
	}, [height, yTranslation]);

	return (
		<section className="flex flex-col h-screen ">
			<div className="absolute -z-10 -left-100 -right-20 -top-10 -bottom-10 rotate-12 h-full gap-2 overflow-hidden ">
				<motion.div
					className="relative"
					ref={ref}
					style={{ y: yTranslation }}
				>
					{[...thirdItems, ...thirdItems].map((item, index) => (
						<motion.div
							key={index}
							className="w-[231px] h-[391px] mb-2 rounded-xl relative overflow-hidden"
						>
							<Image
								// src={heroImg}
								src={item}
								alt="Product Demo"
								className="rounded-xl"
								priority={true}
								fill={true}
								style={{ objectFit: "cover" }}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
			<div className="absolute -z-10 -left-100 -right-20 -top-10 -bottom-10 -translate-x-64  rotate-12 h-full gap-2 overflow-hidden ">
				<motion.div
					className="relative"
					ref={ref}
					style={{ y: yTranslation }}
				>
					{[...items, ...items].map((item, index) => (
						<motion.div
							key={index}
							className="w-[231px] h-[391px] mb-2 rounded-xl relative overflow-hidden"
						>
							<Image
								// src={heroImg}
								src={item}
								alt="Product Demo"
								className="rounded-xl"
								priority={true}
								fill={true}
								style={{ objectFit: "cover" }}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
			<div className="absolute -z-10 -left-100 -right-20 -top-10 -bottom-10 -translate-x-[514px]  rotate-12 h-full gap-2 overflow-hidden ">
				<motion.div
					className="relative"
					ref={ref}
					style={{ y: yTranslation }}
				>
					{[...secondItems, ...secondItems].map((item, index) => (
						<motion.div
							key={index}
							className="w-[231px] h-[391px] mb-2 rounded-xl relative overflow-hidden"
						>
							<Image
								// src={heroImg}
								src={item}
								alt="Product Demo"
								className="rounded-xl"
								priority={true}
								fill={true}
								style={{ objectFit: "cover" }}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
			<div className="w-full grow flex flex-col lg:flex-row items-center justify-start gap-16 lg:gap-20 px-8 py-8 lg:py-20 lg:px-40">
				<div className="flex flex-col gap-10 lg:gap-3 items-center justify-center text-center lg:text-left lg:items-start">
					<h1 className="font-semibold text-4xl text-[#101828] lg:text-[36px] tracking-tight">
						Get notified when <br />
						we launch!
					</h1>
					<p className="text-[16px] opacity-80 leading-relaxed pb-[20px] text[#475467]">
						Drop us your email and we will keep you <br /> updated about
						our project.
					</p>
					<ButtonLead />
					<div className="pt-[20px]">
						<p className="text-[14px] text[#475467]">
							or{" "}
							<a className="text-[#0147F5] font-semibold" href="...">
								Get in Touch
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="bg-white z-40 h-40 p-[32px]">
				<p className="text[#475467]">© Anana 2024</p>
			</div>
		</section>
	);
};

export default Hero;
