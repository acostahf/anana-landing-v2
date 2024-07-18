"use client";
import Image from "next/image";
import ButtonLead from "./ButtonLead";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const Hero = () => {
	const [items, setItems] = useState([
		"/app/assets/Frame_7.png",
		"/app/assets/Frame_12",
		"/app/assets/Frame_13",
	]);
	const [secondItems, setSecondItems] = useState([
		"/app/assets/Image_26.png",
		"/app/assets/Image_37",
		"https://images.unsplash.com/photo-1447279506476-3faec8071eee?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	]);
	const [thirdItems, setThirdItems] = useState([
		"/app/assets/Image_29",
		"/app/assets/Image_28",
		"https://images.unsplash.com/photo-1606584178861-09b1d9149487?q=80&w=2427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	]);

	let [ref, { height }] = useMeasure();
	const yTranslation1 = useMotionValue(0);
	const yTranslation2 = useMotionValue(0);
	const yTranslation3 = useMotionValue(0);

	useEffect(() => {
		let controls1, controls2, controls3;
		let finalPosition1 = -height / 2 - 8;
		let finalPosition2 = height / 2 + 8;
		let startPosition = 0;

		controls1 = animate(yTranslation1, [startPosition, finalPosition1], {
			ease: "linear",
			duration: 45,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});

		controls2 = animate(yTranslation2, [startPosition, finalPosition2], {
			ease: "linear",
			duration: 45,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});

		controls3 = animate(yTranslation3, [startPosition, finalPosition1], {
			ease: "linear",
			duration: 45,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});

		return () => {
			controls1.stop();
			controls2.stop();
			controls3.stop();
		};
	}, [height, yTranslation1, yTranslation2, yTranslation3]);

	return (
		<section className="flex flex-col h-screen 2xl:max-h-[800px]">
			<div className="absolute hidden lg:block -z-10 -left-100 -right-20 -top-10 -bottom-10 rotate-12 h-full gap-2 overflow-hidden">
				<motion.div
					className="relative"
					ref={ref}
					style={{ y: yTranslation3 }}
				>
					{[
						...thirdItems.slice().reverse(),
						...thirdItems.slice().reverse(),
					].map((item, index) => (
						<motion.div
							key={index}
							className="w-[231px] h-[391px] mb-2 rounded-xl relative overflow-hidden"
						>
							<Image
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
			<div className="absolute hidden lg:flex flex-col-reverse -z-10 -left-100 -right-20 -top-10 -bottom-10 -translate-x-64 rotate-12 h-full gap-2 overflow-hidden">
				<motion.div
					className="relative"
					ref={ref}
					style={{ y: yTranslation2 }}
				>
					{[...items, ...items].map((item, index) => (
						<motion.div
							key={index}
							className="w-[231px] h-[391px] mb-2 rounded-xl relative overflow-hidden"
						>
							<Image
								src={item}
								alt="Product Demo"
								className="rounded-xl"
								// priority={}
								fill={true}
								style={{ objectFit: "cover" }}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
			<div className="absolute hidden lg:block -z-10 -left-100 -right-20 -top-10 -bottom-10 -translate-x-[514px] rotate-12 h-full gap-2 overflow-hidden">
				<motion.div
					className="relative"
					ref={ref}
					style={{ y: yTranslation1 }}
				>
					{[
						...secondItems.slice().reverse(),
						...secondItems.slice().reverse(),
					].map((item, index) => (
						<motion.div
							key={index}
							className="w-[231px] h-[391px] mb-2 rounded-xl relative overflow-hidden"
						>
							<Image
								src={item}
								alt="Product Demo"
								className="rounded-xl"
								style={{ objectFit: "cover" }}
								fill={true}
								priority={true}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
			<div className="w-full grow flex flex-col lg:flex-row items-center 2xl:items-start justify-start gap-16 lg:gap-20 px-8 py-8 lg:py-20 lg:px-40">
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
						<span className="text-[14px] text[#475467]">
							or{" "}
							<a
								className="text-[#0147F5] font-semibold"
								href="mailto:teomefa@gmail.com"
							>
								Get in Touch
							</a>
						</span>
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
