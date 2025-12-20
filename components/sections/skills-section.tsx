import { type CSSProperties, useState } from "react";
import { ScrollSection } from "../scroll-section";

const designTools = [
	"Balsamiq",
	"Canva",
	"Chatgpt",
	"Claude",
	"Click Up",
	"Cursor",
	"Discord",
	"Figma",
	"FigJam",
	"Framer",
	"Gamma",
	"Gemini",
	"Github",
	"Maze",
	"Midjourney",
	"Miro",
	"Mobbin",
	"Notion",
	"Perplexity",
	"Replit",
	"Slack",
	"Sora",
	"User Testing",
	"V0",
	"Vercel",
	"Whimsical",
].sort((a, b) => a.localeCompare(b));

const designSkills = [
	{
		title: "UX/UI Design",
		description:
			"Premium digital experiences across journeys, systems, and interfaces that feel intentional.",
		icon: "🧭",
	},
	{
		title: "User Research",
		description:
			"End-to-end research and testing that translate insight into confident decisions.",
		icon: "🔍",
	},
	{
		title: "Behavioural Science",
		description:
			"Empathy-led flows informed by behavioral principles for intuitive interactions.",
		icon: "🧠",
	},
	{
		title: "Prototyping",
		description:
			"High-fidelity interactive prototypes to validate and communicate ideas quickly.",
		icon: "✨",
	},
	{
		title: "Vibe Coding",
		description:
			"AI-assisted buildouts that speed design-to-live, keeping fidelity and nuance.",
		icon: "🤖",
	},
	{
		title: "Graphic Design",
		description:
			"Distinctive visuals and storytelling that elevate the brand’s voice.",
		icon: "🎨",
	},
	// Duplicate for infinite scroll
	{
		title: "UX/UI Design",
		description:
			"Premium digital experiences across journeys, systems, and interfaces that feel intentional.",
		icon: "🧭",
	},
	{
		title: "User Research",
		description:
			"End-to-end research and testing that translate insight into confident decisions.",
		icon: "🔍",
	},
	{
		title: "Behavioural Science",
		description:
			"Empathy-led flows informed by behavioral principles for intuitive interactions.",
		icon: "🧠",
	},
	{
		title: "Prototyping",
		description:
			"High-fidelity interactive prototypes to validate and communicate ideas quickly.",
		icon: "✨",
	},
	{
		title: "Vibe Coding",
		description:
			"AI-assisted buildouts that speed design-to-live, keeping fidelity and nuance.",
		icon: "🤖",
	},
	{
		title: "Graphic Design",
		description:
			"Distinctive visuals and storytelling that elevate the brand’s voice.",
		icon: "🎨",
	},
];

export default function SkillsSection() {
	const [isToolsHovered, setIsToolsHovered] = useState(false);
	const toolsMarqueeDuration = isToolsHovered ? "56s" : "28s";
	const handleToolsEnter = () => setIsToolsHovered(true);
	const handleToolsLeave = () => setIsToolsHovered(false);

	const toolsBadge = (tool: string) => (
		<div
			key={`tool-${tool}`}
			className="flex-shrink-0 rounded-full border border-border/60 bg-card shadow-sm px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
		>
			{tool}
		</div>
	);

	return (
		<section
			id="skillsets"
			className="min-h-screen flex items-center justify-center px-6 md:px-[155px] pt-0 pb-20"
		>
			<ScrollSection className="mx-auto w-full space-y-10">
				<div className="w-full space-y-4">
					<div className="flex items-center gap-6">
						<h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-muted-foreground">
							What I bring to the table
						</h2>
						<div className="h-px flex-1 bg-border" />
					</div>
					<p className="text-lg text-muted-foreground max-w-2xl">
						A range of skills and tools I use to bring ideas to life
					</p>
				</div>

				<div className="relative w-full overflow-hidden py-10">
					<div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

					<div className="marquee-container marquee-reverse">
						<div
							className="marquee-track gap-6"
							style={{ "--marquee-duration": "40s" } as CSSProperties}
						>
							{designSkills.map((skill, index) => {
								return (
									<div
										key={`${skill.title}-${index}`}
										className="flex-shrink-0 w-[400px] flex items-start gap-4 rounded-2xl bg-white/5 border border-border/40 p-6 hover:bg-white/10 transition-colors"
									>
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 via-accent/20 to-primary/10 backdrop-blur text-lg shadow-inner">
											<span aria-hidden>{skill.icon}</span>
										</div>
										<div className="space-y-2">
											<h3 className="text-lg font-semibold text-foreground">
												{skill.title}
											</h3>
											<p className="text-sm text-muted-foreground leading-relaxed">
												{skill.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<section
					aria-label="Design tools"
					className="relative mt-[60px] w-full"
					onMouseEnter={handleToolsEnter}
					onMouseLeave={handleToolsLeave}
				>
					<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
					<div
						className="marquee-container"
						style={{
							WebkitMaskImage:
								"linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
							maskImage:
								"linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
						}}
					>
						<div
							className="marquee-track items-center gap-4 py-4"
							style={
								{ "--marquee-duration": toolsMarqueeDuration } as CSSProperties
							}
						>
							{designTools.map((tool) => {
								return toolsBadge(tool);
							})}
							{designTools.map((tool) => {
								return toolsBadge(tool);
							})}
						</div>
					</div>
				</section>
			</ScrollSection>
		</section>
	);
}
