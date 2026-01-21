import { ArrowUpRight } from "lucide-react";
import { ScrollSection } from "../scroll-section";

const blogPosts = [
	{
		title: "Meetup’s Rebrand: Designing Belonging in a Lonely World",
		href: "https://medium.com/@nicoleyu324/meetups-rebrand-designing-belonging-in-a-lonely-world-a7f5fda023a2",
	},
	{
		title:
			"Introducing a New Educational Game for Children with Autism Aged 3–8.",
		href: "https://medium.com/@nicoleyu324/introducing-a-new-educational-game-for-children-with-autism-aged-3-8-3de8ae8a02de",
	},
	{
		title: "Harnessing AI Tools to streamlining the Design Process in 2025",
		href: "https://medium.com/@nicoleyu324/harnessing-ai-tools-to-streamlining-the-design-process-in-2025-84539f54661a",
	},
	{
		title:
			"Top 20 Figma Plugins for Designers: Explain Functions and Ease of Use",
		href: "https://medium.com/@nicoleyu324/top-20-figma-plugins-for-designers-explain-functions-and-ease-of-use-c880619e4d13",
	},
];

export default function BlogSection() {
	return (
		<section
			id="blog"
			className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-[155px] py-20"
		>
			<ScrollSection className="mx-auto w-full">
				<div className="text-center mb-16">
					<h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-muted-foreground max-w-2xl mx-auto">
						Personal thought in writing 🖋️
					</h2>
				</div>
				<div className="border border-border/40 rounded-[40px] p-10 md:p-20 bg-white/5 backdrop-blur-sm shadow-2xl">
					<div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
						{blogPosts.map((post, index) => (
							<ScrollSection key={post.title} delay={index * 0.1}>
								<a
									href={post.href}
									target="_blank"
									rel="noopener noreferrer"
									className="group block cursor-pointer"
								>
									<h3 className="text-3xl md:text-4xl font-serif leading-tight text-slate-900 dark:text-white/90 group-hover:text-orange-500 transition-colors duration-300">
										{post.title}
										<ArrowUpRight className="inline-block ml-2 w-8 h-8 text-orange-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
									</h3>
								</a>
							</ScrollSection>
						))}
					</div>
				</div>
			</ScrollSection>
		</section>
	);
}
