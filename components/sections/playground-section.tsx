import { motion } from "framer-motion";
import { useRef } from "react";
import { ScrollSection } from "../scroll-section";

const playgroundCards = [
	{
		id: 1,
		title: "Microinteraction Lab",
		description: "Exploring tactile UI feedback for immersive experiences.",
		tags: ["Experimental", "Motion"],
		palette: ["#d9e7ff", "#f5d9ff"],
	},
	{
		id: 2,
		title: "Generative Layouts",
		description: "Adaptive grid experiments driven by live data inputs.",
		tags: ["Concept", "AI"],
		palette: ["#d1fff4", "#e3d7ff"],
	},
	{
		id: 3,
		title: "Color Theory Sandbox",
		description: "Dynamic palettes that respond to interaction patterns.",
		tags: ["Color", "Play"],
		palette: ["#ffe9d6", "#ffd1f1"],
	},
	{
		id: 4,
		title: "3D Navigation Study",
		description: "Testing depth and hierarchy with spatial navigation.",
		tags: ["Spatial", "Prototype"],
		palette: ["#d4f3ff", "#ffdede"],
	},
];

export default function PlaygroundSection() {
	const playgroundContainerRef = useRef<HTMLDivElement>(null);
	return (
		<section
			id="playground"
			className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-12 py-20 pb-8 overflow-hidden"
		>
			<div
				className="absolute inset-x-0 bottom-0 top-[80px] pointer-events-none"
				aria-hidden
				style={{
					backgroundImage:
						"linear-gradient(var(--playground-grid) 1px, transparent 1px), linear-gradient(90deg, var(--playground-grid) 1px, transparent 1px)",
					backgroundSize: "120px 120px",
					maskImage:
						"linear-gradient(to bottom, transparent 5%, black 25%, black 75%, transparent 95%)",
				}}
			/>
			<ScrollSection className="mx-auto w-full px-6 md:px-[155px] relative z-10">
				<div className="w-full space-y-4 text-center">
					<h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-muted-foreground">
						Playground
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						A rotating set of experimental posters exploring motion, texture,
						and storytelling.
					</p>
				</div>
			</ScrollSection>

			<div
				ref={playgroundContainerRef}
				className="relative w-full max-w-[1200px] mx-auto mt-20 flex flex-col md:block md:h-[800px] gap-8 px-6"
			>
				{playgroundCards.map((project, index) => {
					const cardStyles = [
						{
							desktop:
								"md:absolute md:top-0 md:left-[5%] md:w-[280px] md:aspect-[3/4] md:-rotate-6",
							mobile: "w-full aspect-[3/4]",
						},
						{
							desktop:
								"md:absolute md:top-[10%] md:right-[10%] md:w-[240px] md:aspect-square md:rotate-3",
							mobile: "w-full aspect-square",
						},
						{
							desktop:
								"md:absolute md:bottom-[15%] md:left-[20%] md:w-[320px] md:aspect-[4/3] md:-rotate-2",
							mobile: "w-full aspect-[4/3]",
						},
						{
							desktop:
								"md:absolute md:bottom-[5%] md:right-[5%] md:w-[380px] md:aspect-[16/10] md:rotate-6",
							mobile: "w-full aspect-[16/10]",
						},
					];

					const style = cardStyles[index] || cardStyles[0];

					return (
						<motion.div
							key={project.id}
							drag
							dragConstraints={playgroundContainerRef}
							dragElastic={0.2}
							dragMomentum={false}
							initial={{ opacity: 0, y: 50, rotate: 0 }}
							whileInView={{
								opacity: 1,
								y: 0,
								rotate:
									index === 0 ? -6 : index === 1 ? 3 : index === 2 ? -2 : 6,
							}}
							whileHover={{ scale: 1.05, zIndex: 20 }}
							whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{
								duration: 0.8,
								delay: index * 0.15,
								ease: "easeOut",
							}}
							className={`relative rounded-[32px] shadow-2xl border border-border/40 overflow-hidden cursor-grab ${style.mobile} ${style.desktop}`}
							style={{
								background: `linear-gradient(140deg, ${project.palette[0]}, ${project.palette[1]})`,
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35 pointer-events-none" />
							<div className="absolute top-6 left-6 text-sm font-semibold text-white/80 pointer-events-none">
								#{project.id}
							</div>
							<div className="absolute bottom-6 left-6 right-6 text-left text-white pointer-events-none">
								<p className="text-[10px] uppercase tracking-[0.4em] opacity-80">
									{project.tags.join(" • ")}
								</p>
								<p className="mt-2 text-xl font-semibold leading-snug">
									{project.title}
								</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
