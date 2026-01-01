import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import Masonry, { type MasonryItem } from "../masonry";
import { ScrollSection } from "../scroll-section";
import { Badge } from "../ui/badge";

type BentoProject = MasonryItem & {
	title: string;
	description: string;
	tags: string[];
	accent: string;
	background: string;
	eyebrow: string;
	order: string;
	image?: string;
	imageHeight?: string;
	imageClassName?: string;
	imageStyle?: CSSProperties;
};

const bentoProjects: BentoProject[] = [
	{
		id: "healthtech",
		order: "01",
		title: "Healthtech application",
		description:
			"A comprehensive redesign of an e-commerce platform focusing on user experience and conversion optimization",
		tags: ["UI/UX", "Design", "E-Commerce"],
		accent: "#8cd6ff",
		background:
			"linear-gradient(135deg, rgba(140,214,255,0.28), rgba(255,255,255,0.04))",
		eyebrow: "Product strategy",
		height: 520,
		url: "/case-studies/vitalink",
	},
	{
		id: "mobile-banking",
		order: "02",
		title: "Mobile Banking App",
		description:
			"Modern mobile banking application with intuitive navigation and secure transaction flows",
		tags: ["UI/UX", "Mobile", "Fintech"],
		accent: "#f2d6ff",
		background:
			"linear-gradient(160deg, rgba(242,214,255,0.25), rgba(255,255,255,0.08))",
		eyebrow: "Fintech systems",
		image: "/projects/fintech-card.png",
		imageHeight: "h-80",
		imageStyle: { objectPosition: "center 80%" },
		height: 520,
		url: "https://contra.com/p/LOgceg2b-fintech-ui-budget-feature",
	},
	{
		id: "autism-site",
		order: "03",
		title: "Website for children with autism",
		description:
			"Responsive website design based on a game designed with agentic AI, targeting children with autism and their guardians.",
		tags: ["Game Design", "Education", "Research"],
		accent: "#ffe3bd",
		background:
			"linear-gradient(145deg, rgba(255,227,189,0.3), rgba(255,255,255,0.08))",
		eyebrow: "Inclusive design",
		url: "https://contra.com/p/sAYQ6goB-designing-a-joyful-web-experience-for-children-with-autism?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=nicole_cwzib6rq",
		height: 520,
	},
	{
		id: "appointments",
		order: "04",
		title: "Healthcare Appointment System",
		description:
			"Patient-friendly appointment booking system with seamless scheduling and reminders",
		tags: ["UI/UX", "Healthcare", "Design"],
		accent: "#b4f2e1",
		background:
			"linear-gradient(120deg, rgba(180,242,225,0.25), rgba(255,255,255,0.08))",
		eyebrow: "Service design",
		height: 520,
	},
	{
		id: "learning-platform",
		order: "05",
		title: "Education Learning Platform",
		description:
			"Interactive learning platform with engaging course content and progress tracking",
		tags: ["UI/UX", "Education", "E-Learning"],
		accent: "#d7e0ff",
		background:
			"linear-gradient(150deg, rgba(215,224,255,0.3), rgba(255,255,255,0.08))",
		eyebrow: "EdTech",
		height: 520,
	},
	{
		id: "wellness-companion",
		order: "06",
		title: "Wellness Habit Companion",
		description:
			"Voice-guided rituals paired with adaptive feedback that keeps teams aligned on wellbeing",
		tags: ["AI", "Voice", "Prototype"],
		accent: "#ffd6e3",
		background:
			"linear-gradient(135deg, rgba(255,214,227,0.32), rgba(255,255,255,0.08))",
		eyebrow: "AI experiences",
		height: 520,
	},
];

export default function ProjectsSection() {
	const bentoSectionRef = useRef<HTMLDivElement>(null);
	const [isBentoActivated, setIsBentoActivated] = useState(false);
	const isBentoInView = useInView(bentoSectionRef, {
		once: true,
		margin: "-20% 0px",
	});

	useEffect(() => {
		if (isBentoInView) setIsBentoActivated(true);
	}, [isBentoInView]);

	const renderProjectCard = (project: BentoProject) => {
		const card = (
			<div
				className="relative h-full w-full overflow-hidden rounded-[40px] p-7 border border-white/40 dark:border-white/10 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(15,23,42,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.4)] transition-all duration-500 hover:shadow-[0_12px_48px_0_rgba(15,23,42,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.5)] group"
				style={{ background: project.background }}
			>
				<div
					className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none"
					aria-hidden="true"
				/>
				<div className="relative flex h-full flex-col">
					<div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.5em] text-slate-900/80 dark:text-white/70">
						<div className="flex items-center gap-2">
							<span
								className="h-2 w-2 rounded-full"
								style={{ backgroundColor: project.accent }}
								aria-hidden="true"
							/>
							<span>{project.eyebrow}</span>
						</div>
						<span className="text-sm tracking-[0.2em] text-slate-900/60 dark:text-white/50">
							{project.order}
						</span>
					</div>
					<div
						className={`relative my-6 w-full overflow-hidden rounded-[28px] border border-white/50 bg-white/20 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.3)] backdrop-blur-xl ${project.imageHeight || "h-44"}`}
					>
						{project.image ? (
							<Image
								src={project.image}
								alt={project.title}
								fill
								className={`object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 ${project.imageClassName || ""}`}
								style={project.imageStyle}
							/>
						) : (
							<>
								<div
									className="absolute inset-0 opacity-80"
									style={{
										background: `radial-gradient(circle at 20% 20%, ${project.accent}40, transparent 60%), radial-gradient(circle at 80% 40%, rgba(255,255,255,0.8), transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.4), transparent)`,
									}}
								/>
								<div className="absolute inset-x-0 bottom-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
									Preview space
								</div>
							</>
						)}
					</div>
					<div className="space-y-3">
						<h3 className="text-2xl font-semibold leading-snug text-slate-900 dark:text-white transform transition-transform duration-500 group-hover:translate-x-1">
							{project.title}
						</h3>
						<p className="text-sm leading-relaxed text-slate-700 dark:text-white/80">
							{project.description}
						</p>
					</div>
					<div className="mt-5 flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<Badge
								key={`${project.id}-${tag}`}
								variant="secondary"
								className="border border-white/40 bg-white/40 px-3 py-1 text-[11px] font-medium tracking-tight text-slate-900 shadow-sm backdrop-blur-md dark:bg-white/10 dark:text-white hover:bg-white/60 transition-colors"
							>
								{tag}
							</Badge>
						))}
					</div>
					<div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-slate-900 dark:text-white">
						<span>{project.url ? "View case study" : "In progress"}</span>
						{project.url ? (
							<span aria-hidden="true">↗</span>
						) : (
							<span className="text-xs uppercase tracking-[0.4em] text-slate-900/50 dark:text-white/50">
								soon
							</span>
						)}
					</div>
				</div>
			</div>
		);

		if (project.url) {
			const isInternal = project.url.startsWith("/");
			if (isInternal) {
				return (
					<Link href={project.url} className="block h-full">
						{card}
					</Link>
				);
			}
			return (
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					className="block h-full"
				>
					{card}
				</a>
			);
		}

		return card;
	};
	return (
		<section
			id="projects"
			className="relative z-10 -mt-[800px] px-6 md:px-[155px] pb-24"
		>
			<ScrollSection className="mx-auto w-full max-w-[calc(100vw-20px)]">
				<div ref={bentoSectionRef} className="relative">
					{isBentoActivated ? (
						<Masonry
							items={bentoProjects}
							stagger={0.08}
							animateFrom="bottom"
							hoverScale={0.98}
							className="min-h-[1080px]"
							renderItem={(item) => renderProjectCard(item as BentoProject)}
						/>
					) : (
						<div className="h-[720px]" />
					)}
				</div>
			</ScrollSection>
		</section>
	);
}
