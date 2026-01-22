"use client";

import { Plasma } from "@/components/Plasma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function KohoCaseStudy() {
	return (
		<main className="relative min-h-screen bg-background text-foreground selection:bg-primary/20">
			{/* Background Plasma */}
			<div className="fixed inset-0 z-0 pointer-events-none opacity-40">
				<Plasma opacity={1} speed={0.2} scale={1.2} mouseInteractive={false} />
			</div>

			{/* Navigation */}
			<nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/50 backdrop-blur-xl">
				<div className="mx-auto flex h-16 max-w-7xl items-center px-6 md:px-12">
					<Link href="/#projects">
						<Button
							variant="ghost"
							className="group gap-2 text-muted-foreground hover:text-foreground"
						>
							<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Back to Projects
						</Button>
					</Link>
				</div>
			</nav>

			<article className="relative z-10 mx-auto max-w-4xl px-6 py-12 md:py-24">
				{/* Hero Section */}
				<header className="mb-16 space-y-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Badge
							variant="outline"
							className="mb-4 border-primary/20 bg-primary/5 text-primary"
						>
							Fintech Case Study
						</Badge>
						<h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
							Simplifying Budgeting inside KOHO
						</h1>
						<p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
							Making savings more visible and motivating for over 1 million
							users in Canada.
						</p>
						<div className="flex flex-wrap gap-8 mt-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
							<div>
								<div className="text-foreground mb-1">Company</div>
								KOHO
							</div>
							<div>
								<div className="text-foreground mb-1">Role</div>
								Product Designer
							</div>
							<div>
								<div className="text-foreground mb-1">Year</div>
								2025
							</div>
						</div>
					</motion.div>

					{/* Hero Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-2xl"
					>
						<Image
							src="https://framerusercontent.com/images/liOeSCTxebeSOJjBGlxZCMo9cc.png?width=3245&height=1831"
							alt="KOHO Budgeting Feature Hero"
							fill
							className="object-cover"
						/>
					</motion.div>
				</header>

				{/* Content Sections */}
				<div className="space-y-24">
					{/* Video Summary */}
					<section className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">
							Video Summary 🎥
						</h2>
						<div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-2xl">
							<iframe
								src="https://www.loom.com/embed/81bacf5eb45b486a83055b7bed9311cd"
								title="KOHO Case Study Video Summary"
								className="absolute inset-0 h-full w-full"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</section>

					{/* What is KOHO? */}
					<section className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">What is KOHO?</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							KOHO is a mobile-first Canadian fintech platform that offers
							spending, savings and budgeting tools via a prepaid card and app.
						</p>
					</section>

					{/* Why this budgeting feature was necessary */}
					<section className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">
							Why this budgeting feature was necessary
						</h2>
						<div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
							<p>
								Many users (especially younger Canadians) are managing irregular
								income and rising costs. For example, KOHO found average monthly
								income for Gen Z users was around ~$1,083 and fluctuated ~18%.
							</p>
							<p>
								Existing budgeting tools in KOHO were not sufficiently visible
								or motivating; users reported too many layers to access “Vault”
								and saving goals 💰.
							</p>
							<p>
								Insights from market research by comparing KOHO and two finance
								technology platforms also shows the lack of easy budgeting tool
								available to users. As well as the lack of AI adoption in their
								user experience.
							</p>
						</div>
						<div className="grid gap-6 md:grid-cols-2 mt-8">
							<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
								<Image
									src="https://framerusercontent.com/images/ZncsxLcNM53xbTxGHS1FZJHBX7Y.png"
									alt="Market Research 1"
									width={600}
									height={400}
									className="w-full rounded-2xl"
								/>
							</div>
							<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
								<Image
									src="https://framerusercontent.com/images/SNSwmdgQf2VjeKZiIV7sabbrDmk.png"
									alt="Market Research 2"
									width={600}
									height={400}
									className="w-full rounded-2xl"
								/>
							</div>
						</div>
					</section>

					{/* Pain Points */}
					<section className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">
							Pain Points 😣
						</h2>
						<div className="grid gap-8 md:grid-cols-2">
							<div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
								<h3 className="mb-4 text-xl font-semibold text-foreground">
									Hidden Features
								</h3>
								<p className="text-muted-foreground">
									Part of the users' struggle is to find KOHO’s saving goals and
									vaults too hidden under multiple layers, which discourages
									them from checking progress and staying consistent.
								</p>
							</div>
							<div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
								<h3 className="mb-4 text-xl font-semibold text-foreground">
									Lack of Guidance
								</h3>
								<p className="text-muted-foreground">
									Users often lack clear guidance on how much they should save
									or budget based on their actual spending habits. This
									uncertainty leads to overspending or feeling like budgeting is
									unrealistic.
								</p>
							</div>
						</div>
						<div className="grid gap-6 md:grid-cols-2 mt-8">
							<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
								<Image
									src="https://framerusercontent.com/images/7JoHcw29gs7vxsePPDFF1w36bLU.png"
									alt="HMW 1"
									width={600}
									height={400}
									className="w-full rounded-2xl"
								/>
							</div>
							<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
								<Image
									src="https://framerusercontent.com/images/PuCfhnEqewRMOVVgnUxTFh1VA.png"
									alt="HMW 2"
									width={600}
									height={400}
									className="w-full rounded-2xl"
								/>
							</div>
						</div>
					</section>

					{/* What success would look like */}
					<section className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">
							What success would look like
						</h2>
						<div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12">
							<div className="grid gap-8 md:grid-cols-3">
								<div className="space-y-2">
									<div className="text-4xl font-bold text-primary">90%+</div>
									<p className="text-sm text-muted-foreground">
										Task completion in prototype test
									</p>
								</div>
								<div className="space-y-2">
									<div className="text-4xl font-bold text-primary">≥ 4/5</div>
									<p className="text-sm text-muted-foreground">
										User rating for ease of use
									</p>
								</div>
								<div className="space-y-2">
									<div className="text-4xl font-bold text-primary">50%+</div>
									<p className="text-sm text-muted-foreground">
										Transfer budget surplus to Vaults
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* User Interview */}
					<section className="space-y-8">
						<h2 className="text-3xl font-bold tracking-tight">
							User Interview 👤
						</h2>
						<div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
							<p>
								Key insights from user interviews that shaped my design
								direction:
							</p>
							<ul className="list-disc list-inside space-y-3">
								<li>
									Users want visual motivation (progress bars, animations)
									rather than just numbers.
								</li>
								<li>
									Users with irregular income need flexible budget guidance (not
									rigid monthly budgets).
								</li>
								<li>
									Direct link from “budgeting action” → “saving goal”
									strengthens motivation and sense of progress.
								</li>
							</ul>
						</div>
						<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
							<Image
								src="https://framerusercontent.com/images/05KX3EOZBHOoPyLYJWqRLetyng.png"
								alt="User Interview Insights"
								width={1200}
								height={600}
								className="w-full rounded-2xl"
							/>
						</div>
					</section>

					{/* Personas */}
					<section className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">
							Personas & Insights
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							A functional persona addresses my user's goals, the challenges
							that she faces, and her needs for savings. These areas set as the
							foundation to guide my design direction.
						</p>
						<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
							<Image
								src="https://framerusercontent.com/images/wo2aoU34dv5eTK9jkkLEMNLdONk.png"
								alt="User Persona"
								width={1200}
								height={800}
								className="w-full rounded-2xl"
							/>
						</div>
					</section>

					{/* Ideation */}
					<section className="space-y-12">
						<h2 className="text-3xl font-bold tracking-tight">Ideation 💡</h2>
						<div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
							<p>
								The interaction model intentionally mirrors the existing design
								for adjusting monetary input and output. This ensures
								consistency within KOHO’s ecosystem, maintaining a familiar,
								intuitive experience for current users.
							</p>
						</div>
						<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
							<Image
								src="https://framerusercontent.com/images/goXYJY12MZcV81mUsjfitUOxLk.png"
								alt="Ideation: Low-fidelity to High-fidelity"
								width={1200}
								height={1000}
								className="w-full rounded-2xl"
							/>
						</div>
					</section>

					{/* Usability Testing */}
					<section className="space-y-12">
						<h2 className="text-3xl font-bold tracking-tight">
							Usability Testing & Iterations 🔄
						</h2>
						<div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
							<p>
								I conducted 5 moderated testing sessions using high-fidelity
								prototypes. Users were asked to adjust category budgets, apply
								AI recommendations, and transfer surplus to Goal/Vault.
							</p>
							<p>
								<strong>Key Iterations:</strong>
							</p>
							<ul className="list-disc list-inside space-y-3">
								<li>Added tooltip “Why this suggestion?” for AI card.</li>
								<li>Full flow for adding a Budget category.</li>
								<li>Card shuffle on Edit budget page.</li>
							</ul>
						</div>

						<div className="grid gap-8 md:grid-cols-3">
							<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
								<video
									src="https://framerusercontent.com/assets/06EOHRiDBL33sr7bLxLqU4p4kT4.m4v"
									autoPlay
									loop
									muted
									playsInline
									className="w-full rounded-2xl"
								/>
							</div>
							<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
								<video
									src="https://framerusercontent.com/assets/da9nH4Y069bl6BnXQtUqqeSi6KU.mp4"
									autoPlay
									loop
									muted
									playsInline
									className="w-full rounded-2xl"
								/>
							</div>
							<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
								<video
									src="https://framerusercontent.com/assets/54dP0NdgUPwcceD833aImY8fBA.mp4"
									autoPlay
									loop
									muted
									playsInline
									className="w-full rounded-2xl"
								/>
							</div>
						</div>

						<div className="text-center pt-8">
							<Link
								href="https://www.figma.com/proto/gdGnYtPJf93RKNGGBGz4Ge/Add-a-feature?page-id=0%3A1&node-id=37-86&p=f&viewport=2906%2C-7667%2C0.66&t=HC1x6842x0eYO3xU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37%3A86&show-proto-sidebar=1"
								target="_blank"
							>
								<Button
									variant="outline"
									size="lg"
									className="rounded-full gap-2"
								>
									Check out the Figma Prototype ↗
								</Button>
							</Link>
						</div>
					</section>

					{/* Business Value */}
					<section className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">
							Potential Business Value 📶
						</h2>
						<div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
							<p>
								KOHO serves over 1 million users in Canada. Increased engagement
								with budgeting tools leads to stronger use of savings Vaults
								(which earn interest).
							</p>
							<ul className="list-disc list-inside space-y-3">
								<li>Increased savings transfers strengthen deposit base.</li>
								<li>
									Differentiates KOHO in the Canadian fintech space from
									competitors.
								</li>
								<li>Reduced drop-off in budgeting flows.</li>
							</ul>
						</div>
					</section>

					{/* Reflection */}
					<section className="space-y-12">
						<h2 className="text-3xl font-bold tracking-tight">
							Personal Reflection ✨
						</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
								<Image
									src="https://framerusercontent.com/images/1Cy1w2WvA2NPerJf3gDRAhOI0.png?width=1787&height=1125"
									alt="Reflection 1"
									width={600}
									height={400}
									className="w-full rounded-2xl"
								/>
							</div>
							<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
								<Image
									src="https://framerusercontent.com/images/Q6wARFJUstNQVcY2Hk6cBTqPXQ.png?width=1495&height=1125"
									alt="Reflection 2"
									width={600}
									height={400}
									className="w-full rounded-2xl"
								/>
							</div>
						</div>
						<div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
							<p className="text-lg text-muted-foreground leading-relaxed">
								Designing within an existing product ecosystem requires not just
								solving user pain points, but also resonating with the brand’s
								identity. I focused on aligning visuals, motion, and tone with
								KOHO’s youthful, energetic brand.
							</p>
							<p className="mt-6 text-lg text-muted-foreground leading-relaxed">
								Strategically, this feature also encouraged deeper engagement
								with KOHO’s existing “Vault” saving tool, connecting budgeting
								actions directly to tangible savings progress.
							</p>
						</div>
					</section>
				</div>

				{/* Footer CTA */}
				<footer className="mt-24 border-t border-white/10 pt-12 text-center">
					<p className="text-muted-foreground mb-8">Thanks for reading!</p>
					<Link href="/#projects">
						<Button size="lg" className="rounded-full px-8">
							View More Projects
						</Button>
					</Link>
				</footer>
			</article>
		</main>
	);
}
