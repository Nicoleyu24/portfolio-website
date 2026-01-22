"use client";

import { motion } from "framer-motion";

const locations = [
	{
		id: "vietnam",
		name: "Hochiminh, Vietnam",
		path: "M 10,0 C 15,5 12,10 18,15 C 22,20 15,25 12,35 C 10,45 15,55 12,65 L 5,60 C 8,50 5,40 8,30 C 5,20 8,10 5,0 Z",
		x: 120,
		y: 80,
		color: "#F8F9FA",
		pinColor: "#4B5563",
	},
	{
		id: "philippines",
		name: "Makati, The Philippines",
		path: "M 5,5 L 10,2 L 15,5 L 12,10 L 18,12 L 15,18 L 20,22 L 15,28 L 10,25 L 5,30 L 8,20 Z",
		x: 240,
		y: 220,
		color: "#F8F9FA",
		pinColor: "#4B5563",
	},
	{
		id: "poland",
		name: "Poznan, Poland",
		path: "M 10,5 C 30,0 50,5 55,25 C 60,45 50,55 30,60 C 10,55 0,45 5,25 C 5,10 10,5 10,5 Z",
		x: 110,
		y: 410,
		color: "#F8F9FA",
		pinColor: "#4B5563",
	},
	{
		id: "australia",
		name: "Brisbane, Australia",
		path: "M 10,20 C 30,10 60,15 75,30 C 85,50 80,70 60,85 C 40,90 15,80 5,60 C 0,40 10,20 10,20 Z",
		x: 280,
		y: 600,
		color: "#F8F9FA",
		pinColor: "#4B5563",
	},
	{
		id: "canada",
		name: "Vancouver, Canada",
		path: "M 5,30 C 30,20 70,20 95,30 C 105,50 100,80 80,100 C 50,110 20,105 5,80 C -5,50 5,30 5,30 Z",
		x: 140,
		y: 770,
		color: "#E0D7FF",
		pinColor: "#F97316",
		isCurrent: true,
	},
];

export function TravelMap() {
	return (
		<div className="relative w-full h-full bg-[#F3E9E2] rounded-3xl overflow-hidden p-4 md:p-8 shadow-inner">
			<svg
				viewBox="0 0 400 900"
				className="w-full h-full"
				preserveAspectRatio="xMidYMid meet"
			>
				<title>Travel Map showing locations visited</title>
				{/* Dashed Connection Line */}
				<motion.path
					d="M 120,80 C 180,120 220,160 240,220 C 260,300 160,340 110,410 C 60,480 220,520 280,600 C 340,680 200,720 140,770"
					fill="none"
					stroke="#9CA3AF"
					strokeWidth="2"
					strokeDasharray="6,6"
					initial={{ pathLength: 0, opacity: 0 }}
					animate={{ pathLength: 1, opacity: 1 }}
					transition={{ duration: 2, ease: "easeInOut" }}
				/>

				{/* Country Shapes */}
				{locations.map((loc) => (
					<g key={loc.id} transform={`translate(${loc.x - 30}, ${loc.y - 30})`}>
						<motion.path
							d={loc.path}
							fill={loc.color}
							stroke="#D1D5DB"
							strokeWidth="1"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						/>
					</g>
				))}

				{/* Pins and Labels */}
				{locations.map((loc, index) => (
					<g key={`${loc.id}-pin`}>
						{/* Pin */}
						<motion.g
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 1 + index * 0.2, type: "spring" }}
						>
							{loc.isCurrent && (
								<motion.circle
									cx={loc.x}
									cy={loc.y}
									r="12"
									fill={loc.pinColor}
									initial={{ opacity: 0.2, scale: 0.8 }}
									animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.8, 1.2, 0.8] }}
									transition={{
										duration: 2,
										repeat: Number.POSITIVE_INFINITY,
										ease: "easeInOut",
									}}
								/>
							)}
							<circle cx={loc.x} cy={loc.y} r="6" fill={loc.pinColor} />
							<line
								x1={loc.x}
								y1={loc.y}
								x2={loc.x}
								y2={loc.y + 15}
								stroke={loc.pinColor}
								strokeWidth="2"
							/>
						</motion.g>

						{/* Label */}
						<motion.text
							x={loc.x + 15}
							y={loc.y + 5}
							className="text-[14px] font-medium fill-zinc-800"
							initial={{ opacity: 0, x: loc.x + 5 }}
							animate={{ opacity: 1, x: loc.x + 15 }}
							transition={{ delay: 1.2 + index * 0.2 }}
						>
							{loc.name}
						</motion.text>
					</g>
				))}
			</svg>
		</div>
	);
}
