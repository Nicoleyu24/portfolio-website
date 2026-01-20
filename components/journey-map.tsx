"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MapPin = ({
	size = 24,
	className = "",
}: {
	size?: number;
	className?: string;
}) => (
	<motion.svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		initial={{ y: -10, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		transition={{ type: "spring", stiffness: 300, damping: 15 }}
	>
		<path
			d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
			fill="#EF4444"
			stroke="white"
			strokeWidth="1.5"
		/>
		<circle cx="12" cy="9" r="2.5" fill="white" />
	</motion.svg>
);

const journeySteps = [
	{
		id: "hong-kong",
		title: "Hong Kong",
		description:
			"The city I call home. Growing up in this bustling city, I was always fascinated by the psychological development of human, and I wanted to become a psychologist when I grow up.",
		crop: { x: 10, y: 30 },
		pin: { x: 78, y: 82 },
		align: "left",
	},
	{
		id: "netherlands",
		title: "The Netherlands",
		description:
			"I moved to live and study in Utrecht after high school. My focus here was Neuroscience and Religious Studies since I was curious of the science behind human brain and the history of various religious cultures.",
		crop: { x: 160, y: 140 },
		pin: { x: 232, y: 200 },
		align: "right",
	},
	{
		id: "canada",
		title: "Canada",
		description:
			"I moved across the globe again. I spent the majority of my time study human psychology. After graduation, I picked up digital design, hoping that one day I'd be able to apply my design on healthcare or the educational field.",
		crop: { x: 10, y: 270 },
		pin: { x: 45, y: 345 },
		align: "left",
		bigPin: true,
	},
];

export function JourneyMap() {
	return (
		<div className="relative w-full bg-[#F3E9E2] rounded-3xl overflow-hidden p-6 md:p-10 shadow-inner border border-zinc-200/50">
			<div className="flex items-center justify-center gap-3 mb-12">
				<span className="text-2xl">✈️</span>
				<h3 className="text-xl font-medium tracking-tight text-zinc-800">
					My Journey to design
				</h3>
			</div>

			<div className="space-y-8 relative">
				{journeySteps.map((step, index) => (
					<motion.div
						key={step.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
						viewport={{ once: true }}
						className={`relative flex flex-col md:flex-row items-center gap-8 ${
							step.align === "right" ? "md:flex-row-reverse" : ""
						}`}
					>
						<div className="w-full md:w-1/2 flex justify-center">
							<div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-xl bg-transparent">
								<div
									className="absolute"
									style={{
										width: "310px",
										height: "392px",
										left: `-${step.crop.x}px`,
										top: `-${step.crop.y}px`,
										transform: "scale(1.3)",
										transformOrigin: "0 0",
									}}
								>
									<Image
										src="/journey-map.png"
										alt={`${step.title} map`}
										width={310}
										height={392}
										className="object-contain"
									/>
									<div
										className="absolute z-10"
										style={{
											left: `${step.pin.x}px`,
											top: `${step.pin.y}px`,
											transform: "translate(-50%, -100%)",
										}}
									>
										<MapPin size={step.bigPin ? 32 : 24} />
									</div>
								</div>
							</div>
						</div>

						<div className="w-full md:w-1/2 space-y-3 text-left">
							<h4 className="text-xl font-bold text-zinc-900">{step.title}</h4>
							<p className="text-sm leading-relaxed text-zinc-600 font-medium">
								{step.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
