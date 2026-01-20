"use client";

import Image from "next/image";
import { JourneyMap } from "../journey-map";
import { ScrollSection } from "../scroll-section";

export default function AboutSection() {
	return (
		<section
			id="about"
			className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-[155px] py-20"
		>
			<ScrollSection className="mx-auto w-full">
				<div className="grid lg:grid-cols-2 gap-12 items-start">
					<div className="lg:col-span-1">
						<div className="flex items-center justify-between mb-2">
							<h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-muted-foreground">
								About Me as A Creator.
							</h2>
							<div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl hover:ring-primary/40 transition-all duration-300">
								<Image
									src="/avatar.png"
									alt="Nicole Yu"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
						<h2 className="text-3xl md:text-4xl font-semibold mb-6">
							Professional designer and self-taught developer.
						</h2>
						<p className="text-l text-muted-foreground mb-6">
							Half designer, half behaviour nerd! I love decoding users's needs,
							turning human quirks into practical designs, and chasing that
							"aha" moment where it all just works. My favourite part of design
							is solving problems that make life a little easier for someone
							else.
						</p>
						<p className="text-l text-muted-foreground mb-6">
							From start-ups to small-size enterprises, to non-profits and
							beyond, I have experiences working with clients to enhance their
							brand, web presence, and creating from zero to one. I offer
							services that help your businesses stand out and thrive!
						</p>
					</div>
					<div className="lg:col-span-1">
						<JourneyMap />
					</div>
				</div>
			</ScrollSection>
		</section>
	);
}
