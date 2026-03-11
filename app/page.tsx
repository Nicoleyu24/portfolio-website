"use client";

import { AnimatedHeader } from "@/components/animated-header";
import { Plasma } from "@/components/Plasma";
import { ScrollProgressBar } from "@/components/scroll-progress";
import AboutSection from "@/components/sections/about-section";
import BlogSection from "@/components/sections/blog-section";
import ContactSection from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import PlaygroundSection from "@/components/sections/playground-section";
import ProjectsSection from "@/components/sections/projcets-section";
import SkillsSection from "@/components/sections/skills-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import { SidebarNav } from "@/components/sidebar-nav";

export default function Home() {
	return (
		<div className="relative">
			<div className="fixed inset-0 z-[1] pointer-events-none plasma-container">
				<Plasma opacity={1} speed={0.3} scale={1.5} mouseInteractive={false} />
			</div>
			<ScrollProgressBar />

			<AnimatedHeader title="Nicole Yu" />
			<SidebarNav />

			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<TestimonialsSection />
			<AboutSection />
			<PlaygroundSection />
			<BlogSection />
			<ContactSection />

			{/* Footer */}
			<footer className="relative z-10 py-12 px-6 md:px-[155px] border-t border-border">
				<div className="mx-auto text-center text-muted-foreground">
					<p>© 2026 Nicole Yu. Made by Nicole with ♡ and 🍵</p>
				</div>
			</footer>
		</div>
	);
}
