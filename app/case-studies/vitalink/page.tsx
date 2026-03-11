"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Plasma } from "@/components/Plasma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function VitalinkCaseStudy() {
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
							Healthtech Case Study
						</Badge>
						<h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
							Vitalink Telehealth App
						</h1>
						<p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
							Streamlining healthcare access through AI-powered insights and
							seamless virtual consultations.
						</p>
					</motion.div>

					{/* YouTube Embed */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-2xl"
					>
						<iframe
							src="https://www.youtube.com/embed/YjWYbLLKpGE"
							title="Vitalink Case Study Video"
							className="absolute inset-0 h-full w-full"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</motion.div>
				</header>

				{/* Content Sections */}
				<div className="space-y-24">
					{/* Project Description */}
					<section className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">
							Project Description & Background
						</h2>
						<div className="max-w-none text-lg text-muted-foreground leading-relaxed space-y-4">
							<p>
								The inspiration for this project comes from the excessive wait
								times patients face in Canada when seeking non-urgent care. The
								median wait to see a specialist is over 78 days, and walk-in
								clinics report average waits of around 93 minutes.
							</p>
							<p>
								These delays create unnecessary friction for patients whose
								needs could often be addressed virtually, while also straining
								limited in-person resources. This project explores a virtual
								care solution aimed at reducing wait times and freeing up clinic
								capacity for urgent cases.
							</p>
						</div>
					</section>

					{/* Problem Statement */}
					<section className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">
							Problem Statement & HMWs
						</h2>
						<div className="grid gap-8 md:grid-cols-2">
							<div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
								<h3 className="mb-4 text-xl font-semibold text-foreground">
									Scheduling Friction
								</h3>
								<p className="text-muted-foreground">
									Traditional healthcare's in-person appointments and long wait
									times create significant scheduling conflicts and
									inconvenience for busy individuals.
								</p>
								<div className="mt-6 italic text-primary">
									"How might we streamline the process of finding and booking a
									healthcare provider to make it as quick and efficient?"
								</div>
							</div>
							<div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
								<h3 className="mb-4 text-xl font-semibold text-foreground">
									Information Gap
								</h3>
								<p className="text-muted-foreground">
									Users lack a reliable and objective source of health insights
									between appointments, leading to reliance on unreliable
									sources like "Dr. Google".
								</p>
								<div className="mt-6 italic text-primary">
									"How might we leverage AI to provide users with transparent,
									data-driven health insights based on tracked metrics?"
								</div>
							</div>
						</div>
					</section>

					{/* Research */}
					<section className="space-y-8">
						<h2 className="text-3xl font-bold tracking-tight">Research 👤</h2>
						<p className="text-lg text-muted-foreground">
							After doing a brief market analysis, there are quite a few
							existing products that provide tele-healthcare. To stand out,
							emphasis on symptom tracking and analysis might be the main focus
							for this application while keeping a few other secondary features.
						</p>
						<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
							<Image
								src="https://framerusercontent.com/images/Ki6Nwn1upyhRPMOaeaF1sVwe0Q.png"
								alt="Market Analysis"
								width={1200}
								height={800}
								className="w-full rounded-2xl"
							/>
						</div>
						<p className="text-lg text-muted-foreground">
							The user interviews provide some insightful ideas for this
							project, and the user flow is constructed with three features
							intended to be tested during the usability test later on.
						</p>
						<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
							<Image
								src="https://framerusercontent.com/images/fszagBn1sdKlsJvmFlHGiQJF5mw.png?width=2469&height=2281"
								alt="User Flow Diagram"
								width={1200}
								height={1100}
								className="w-full rounded-2xl"
							/>
						</div>
					</section>

					{/* Project Goal */}
					<section className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">
							Project Goal 📝
						</h2>
						<div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12">
							<p className="text-2xl font-medium text-foreground leading-snug">
								The goal of Vitalink is to deliver accessible, user-friendly,
								and remote healthcare by enabling users to connect virtually
								with healthcare providers while enabling personalized health
								awareness.
							</p>
							<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{[
									"User secure login",
									"Profile Management",
									"AI Health Insights",
									"Symptom tracking",
									"Scheduling System",
								].map((feature) => (
									<div
										key={feature}
										className="flex items-center gap-3 text-muted-foreground"
									>
										<div className="h-2 w-2 rounded-full bg-primary" />
										{feature}
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Design & Iterations */}
					<section className="space-y-12">
						<h2 className="text-3xl font-bold tracking-tight">
							Design & Iterations 🔄
						</h2>

						<div className="space-y-8">
							<h3 className="text-2xl font-semibold">Low-fidelity phase</h3>
							<p className="text-lg text-muted-foreground">
								The early design phase began with low-fidelity wireframes of
								Vitalink. These were tested with users to gather initial
								feedback on layout, flow, and usability.
							</p>
							<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
								<Image
									src="https://framerusercontent.com/images/uLIrXSDQb90MaRh1mBCFq90I0.png?width=2469&height=3300"
									alt="Low-fidelity wireframes"
									width={1200}
									height={1600}
									className="w-full rounded-2xl"
								/>
							</div>
						</div>

						<div className="space-y-8">
							<h3 className="text-2xl font-semibold">High-fidelity phase</h3>
							<p className="text-lg text-muted-foreground">
								The wireframes were then refined into high-fidelity designs,
								incorporating insights from the first round of testing. This
								version underwent usability testing to further evaluate
								alignment with user needs.
							</p>
							<div className="grid gap-6">
								{[
									{
										src: "https://framerusercontent.com/images/uunueGKuKhsTDwCgKbDnGlvrU.png?width=2458&height=1072",
										id: "hifi-1",
									},
									{
										src: "https://framerusercontent.com/images/h8sXN5rMA47UqUKyM8PABmq24bI.png?width=2458&height=1072",
										id: "hifi-2",
									},
									{
										src: "https://framerusercontent.com/images/WeAQ3m8kiHHmFPUtBYhYHPQLM.png?width=2458&height=1072",
										id: "hifi-3",
									},
									{
										src: "https://framerusercontent.com/images/kM4T2mk900jHzxt65Tn5SLC8so.png?width=2458&height=1072",
										id: "hifi-4",
									},
								].map((item) => (
									<div
										key={item.id}
										className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4"
									>
										<Image
											src={item.src}
											alt={`High-fidelity mockup ${item.id}`}
											width={1200}
											height={520}
											className="w-full rounded-2xl"
										/>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Final Design */}
					<section className="space-y-12">
						<h2 className="text-3xl font-bold tracking-tight">
							Final Design & Reflection ✨
						</h2>
						<div className="grid gap-6">
							{[
								{
									src: "https://framerusercontent.com/images/4tCu8LuaSCTPc7drdi0aSdoFI8U.png?width=1960&height=1417",
									id: "final-1",
								},
								{
									src: "https://framerusercontent.com/images/7PDT3DgzUy0hvcSgL2x1JZJ3Kk.png?width=1500&height=1125",
									id: "final-2",
								},
								{
									src: "https://framerusercontent.com/images/7PKJ00arBr3pibJOUxHd4fSS4kc.png?width=1358&height=1082",
									id: "final-3",
								},
							].map((item) => (
								<div
									key={item.id}
									className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4"
								>
									<Image
										src={item.src}
										alt={`Final design screen ${item.id}`}
										width={1200}
										height={900}
										className="w-full rounded-2xl"
									/>
								</div>
							))}
						</div>

						<div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
							<h3 className="mb-6 text-2xl font-semibold">Reflection</h3>
							<p className="text-lg text-muted-foreground leading-relaxed">
								This project was a valuable learning experience in designing for
								healthcare and integrating AI features responsibly. The
								iterative testing process was crucial in refining the design to
								meet user needs effectively. Future iterations could explore
								more advanced AI features and integrations with other health
								services.
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
