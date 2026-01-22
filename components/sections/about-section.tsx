"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { JourneyMap } from "../journey-map";
import { ScrollSection } from "../scroll-section";

export default function AboutSection() {
	const [isJourneyVisible, setIsJourneyVisible] = useState(false);

	return (
		<section
			id="about"
			className="relative z-10 min-h-screen flex items-start justify-center px-6 md:px-[155px] pt-[15vh] pb-20"
		>
			<ScrollSection className="mx-auto w-full">
				<div className="grid lg:grid-cols-2 gap-4 items-start">
					<div className="lg:col-span-1">
						<div className="flex items-center justify-between mb-2">
							<h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-muted-foreground md:ml-[30px]">
								About Me as A Builder.
							</h2>
							<div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl hover:ring-primary/40 transition-all duration-300 translate-x-[10px]">
								<Image
									src="/avatar.png"
									alt="Nicole Yu"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
						<h2 className="text-3xl md:text-4xl font-semibold mb-6 md:ml-[30px]">
							Professional designer and self-taught builder.
						</h2>
						<p className="text-l text-muted-foreground mb-6 md:ml-[30px]">
							Half designer, half behaviour nerd! I love decoding users's needs,
							turning human quirks into practical designs, and chasing that
							"aha" moment where it all just works. My favourite part of design
							is solving problems that make life a little easier for someone
							else.
						</p>
						<p className="text-l text-muted-foreground mb-8 md:ml-[30px]">
							From start-ups to small-size enterprises, to non-profits and
							beyond, I have experiences working with clients to enhance their
							brand, web presence, and creating from zero to one. I offer
							services that help your businesses stand out and thrive!
						</p>
						<button
							type="button"
							onClick={() => setIsJourneyVisible(!isJourneyVisible)}
							className="md:ml-[30px] inline-flex items-center justify-center rounded-full border border-white/70 bg-gradient-to-br from-white/80 via-white/40 to-white/20 px-8 py-2.5 text-sm font-semibold tracking-tight text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_15px_35px_rgba(15,23,42,0.15)] backdrop-blur-[28px] transition hover:bg-gradient-to-br hover:from-white/90 hover:via-white/55 hover:to-white/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_45px_rgba(15,23,42,0.2)] active:scale-95 dark:border-white/40 dark:bg-white/35 dark:text-white dark:shadow-[0_10px_30px_rgba(2,6,23,0.35)]"
						>
							{isJourneyVisible ? "Collapse Me" : "Learn More"}
						</button>
					</div>
					<div className="lg:col-span-1 lg:ml-[50px]">
						<AnimatePresence mode="wait">
							{isJourneyVisible && (
								<motion.div
									key="journey-map"
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 20 }}
									transition={{ duration: 0.5, ease: "easeOut" }}
								>
									<JourneyMap />
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</ScrollSection>
		</section>
	);
}
