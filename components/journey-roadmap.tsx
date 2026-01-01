"use client";

import { motion } from "framer-motion";
import { Brain, Laptop, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface Stop {
	id: number;
	title: string;
	description: string;
	location: string;
	icons: React.ReactNode;
	color: string;
	x: number; // SVG coordinate x (0-400)
	y: number; // SVG coordinate y (0-800)
	side: "left" | "right";
}

const stops: Stop[] = [
	{
		id: 1,
		title: "Neuroscience",
		location: "Utrecht, Netherland",
		description: "Studying neuroscience in Utrecht, Netherland",
		icons: (
			<div className="flex gap-1">
				<span>🎡</span>
				<Brain className="w-4 h-4 text-pink-500" />
			</div>
		),
		color: "#FBBF24", // Yellow
		x: 50,
		y: 180,
		side: "left",
	},
	{
		id: 2,
		title: "Psychology",
		location: "Canada",
		description: "Studying Psychology in Canada",
		icons: (
			<div className="flex gap-1">
				<span>🍁</span>
				<span>💑</span>
			</div>
		),
		color: "#8B5CF6", // Purple
		x: 350,
		y: 380,
		side: "right",
	},
	{
		id: 3,
		title: "Behavioural Therapist",
		location: "3 Years Experience",
		description: "Working with children as a behavioural therapist for 3 years",
		icons: (
			<div className="flex gap-1">
				<Users className="w-4 h-4 text-blue-500" />
				<span>👩‍👧‍👦</span>
			</div>
		),
		color: "#06B6D4", // Cyan
		x: 50,
		y: 580,
		side: "left",
	},
	{
		id: 4,
		title: "UX Design",
		location: "Latest Stop",
		description: "Studying UX design",
		icons: (
			<div className="flex gap-1">
				<Laptop className="w-4 h-4 text-indigo-500" />
				<span>👩‍💻📱</span>
			</div>
		),
		color: "#EF4444", // Red
		x: 350,
		y: 780,
		side: "right",
	},
];

export function JourneyRoadmap() {
	return (
		<div className="relative w-full max-w-2xl mx-auto py-12 px-4">
			<div className="absolute top-0 left-0 p-4 z-20">
				<h3 className="text-xl font-bold text-primary">My journey map</h3>
			</div>

			<div className="relative mt-16 aspect-[1/2] w-full">
				{/* SVG Road */}
				<svg
					viewBox="0 0 400 900"
					className="absolute inset-0 w-full h-full pointer-events-none"
					preserveAspectRatio="xMidYMin meet"
					role="img"
					aria-labelledby="roadmap-title"
				>
					<title id="roadmap-title">My Journey Roadmap</title>
					{/* Road Path */}
					<path
						d="M 200 0 
                           C 200 100, 50 100, 50 200 
                           C 50 300, 350 300, 350 400 
                           C 350 500, 50 500, 50 600 
                           C 50 700, 350 700, 350 800
                           L 350 850"
						fill="none"
						stroke="currentColor"
						strokeWidth="40"
						className="text-zinc-900 dark:text-zinc-800"
					/>
					{/* Road Center Line */}
					<path
						d="M 200 0 
                           C 200 100, 50 100, 50 200 
                           C 50 300, 350 300, 350 400 
                           C 350 500, 50 500, 50 600 
                           C 50 700, 350 700, 350 800
                           L 350 850"
						fill="none"
						stroke="white"
						strokeWidth="2"
						strokeDasharray="10,10"
					/>
					{/* Arrow at the end (bottom) */}
					<path
						d="M 330 840 L 350 860 L 370 840"
						fill="none"
						stroke="currentColor"
						strokeWidth="5"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="text-zinc-900 dark:text-zinc-800"
					/>
				</svg>

				{/* Stops */}
				{stops.map((stop, index) => (
					<div
						key={stop.id}
						className="absolute"
						style={{
							left: `${(stop.x / 400) * 100}%`,
							top: `${(stop.y / 900) * 100}%`,
							transform: "translate(-50%, -50%)",
							width: "100%",
						}}
					>
						<div
							className={`relative flex items-center w-full ${
								stop.side === "left" ? "flex-row-reverse" : "flex-row"
							}`}
						>
							{/* Pin */}
							<div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0">
								<motion.div
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									className="w-8 h-8 rounded-full border-4 border-white shadow-xl flex items-center justify-center"
									style={{ backgroundColor: stop.color }}
								>
									<div className="w-2 h-2 bg-white rounded-full" />
								</motion.div>
							</div>

							{/* Caption Card */}
							<div
								className={`w-[200px] md:w-[250px] ${
									stop.side === "left" ? "mr-4" : "ml-4"
								}`}
							>
								<motion.div
									initial={{ opacity: 0, x: stop.side === "left" ? -20 : 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 }}
								>
									<Card className="overflow-hidden border-none shadow-lg bg-background/90 backdrop-blur-md">
										<div
											className="h-1.5 w-full"
											style={{ backgroundColor: stop.color }}
										/>
										<CardContent className="p-3 md:p-4">
											<div className="flex items-center justify-between mb-1.5">
												<span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
													{stop.location}
												</span>
												<div className="text-lg">{stop.icons}</div>
											</div>
											<h4 className="font-bold text-sm md:text-base mb-1 leading-tight">
												{stop.title}
											</h4>
											<p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
												{stop.description}
											</p>
										</CardContent>
									</Card>
								</motion.div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
