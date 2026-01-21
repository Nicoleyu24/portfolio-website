"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const journeySteps = [
	{
		id: "hong-kong",
		title: "Hong Kong",
		description:
			"The city I call home. Growing up in this bustling city, I was always fascinated by the psychological development of human, and I wanted to become a psychologist when I grow up.",
		image: "/hong-kong-map.png",
		width: 237,
		height: 171,
		crop: { x: 0, y: 0 },
		scale: 0.75,
		align: "left",
	},
	{
		id: "netherlands",
		title: "The Netherlands",
		description:
			"I moved to live and study in Utrecht after high school. My focus here was Neuroscience and Religious Studies since I was curious of the science behind human brain and the history of various religious cultures.",
		image: "/netherlands-map.png",
		width: 198,
		height: 231,
		crop: { x: 0, y: 0 },
		scale: 0.7,
		align: "right",
	},
	{
		id: "canada",
		title: "Canada",
		description:
			"I moved across the globe again. I spent the majority of my time study human psychology. After graduation, I picked up digital design, hoping that one day I'd be able to apply my design on healthcare or the educational field.",
		image: "/canada-map.png",
		width: 270,
		height: 225,
		crop: { x: 0, y: 0 },
		scale: 0.65,
		align: "left",
	},
];

export function JourneyMap() {
	return (
		<div className="relative w-full max-w-[540px] bg-[#F3E9E2]/80 backdrop-blur-sm rounded-3xl overflow-hidden pt-1 pl-1 pr-4 pb-4 md:pt-[20px] md:pl-0 md:pr-6 md:pb-6 shadow-inner border border-zinc-200/50">
			<div className="flex items-center justify-center gap-3 mb-12 translate-y-[30px]">
				<span className="text-2xl">✈️</span>
				<h3 className="text-xl font-medium tracking-tight text-zinc-800">
					My Journey to design
				</h3>
			</div>

			<div className="space-y-8 relative md:-ml-[50px]">
				{journeySteps.map((step, index) => (
					<motion.div
						key={step.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
						viewport={{ once: true }}
						className={`relative flex flex-col md:flex-row items-center gap-[17px] ${
							step.align === "right" ? "md:flex-row-reverse" : ""
						} ${step.id === "netherlands" ? "md:translate-x-[125px]" : ""}`}
					>
						<div
							className={`w-full md:w-1/2 flex justify-center ${
								step.align === "left" ? "md:justify-end" : "md:justify-start"
							}`}
						>
							<div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-xl bg-transparent translate-y-[20px]">
								<div
									className="absolute"
									style={{
										width: `${step.width}px`,
										height: `${step.height}px`,
										left: `-${step.crop.x}px`,
										top: `-${step.crop.y}px`,
										transform: `scale(${step.scale})`,
										transformOrigin: "0 0",
									}}
								>
									<Image
										src={step.image}
										alt={`${step.title} map`}
										width={step.width}
										height={step.height}
										className="object-contain"
									/>
								</div>
							</div>
						</div>

						<div className="w-full md:w-1/2 space-y-3 text-left">
							<h4 className="text-xl font-bold text-zinc-900">{step.title}</h4>
							<p className="text-[13px] leading-relaxed text-zinc-600 font-medium">
								{step.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
