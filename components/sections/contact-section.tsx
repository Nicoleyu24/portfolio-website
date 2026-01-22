"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ScrollSection } from "../scroll-section";
import { Button } from "../ui/button";

export default function ContactSection() {
	const [showEmail, setShowEmail] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.1,
	});

	// Reset email visibility when scrolling away
	useEffect(() => {
		if (!inView) {
			setShowEmail(false);
		}
	}, [inView]);

	return (
		<section
			id="contact"
			ref={ref}
			className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-[155px] py-20"
		>
			<div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
				<ScrollSection className="max-w-4xl text-left md:ml-[50px]">
					<div className="flex items-center gap-4 mb-6">
						<h2 className="text-4xl md:text-5xl font-bold">
							Let's Work Together
						</h2>
						<div className="relative w-12 h-12 md:w-16 md:h-16 dark:invert">
							<Image
								src="/shaka-icon.png"
								alt="Shaka Icon"
								fill
								className="object-contain"
							/>
						</div>
					</div>
					<p className="text-lg text-muted-foreground mb-8 max-w-2xl">
						I'm always open to discussing new projects, creative ideas, or
						opportunities to be part of your visions.
					</p>
					<div className="flex flex-col gap-4">
						<div className="flex gap-4 justify-start">
							<Button size="lg" onClick={() => setShowEmail(!showEmail)}>
								Contact Me
							</Button>
							<a
								href="https://drive.google.com/file/d/1xuKTVdvWf5rQrveTOUozixcRJazRCOXO/view"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button size="lg" variant="outline">
									View Resume
								</Button>
							</a>
						</div>
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={
								showEmail
									? { opacity: 1, height: "auto" }
									: { opacity: 0, height: 0 }
							}
							transition={{ duration: 0.3 }}
							className="overflow-hidden"
						>
							<p className="text-lg font-medium text-primary">
								Email address: nicoleeyts1@gmail.com
							</p>
						</motion.div>
					</div>
				</ScrollSection>

				<div className="flex flex-col gap-8 text-right md:mr-[50px]">
					<a
						href="https://www.linkedin.com/in/nicoleyproduct"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[16px] md:text-[28px] font-bold transition-all duration-300 hover:text-orange-500 hover:underline decoration-2 underline-offset-8"
					>
						LinkedIn
					</a>
					<a
						href="https://contra.com/nicole_cwzib6rq/work?r=nicole_cwzib6rq"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[16px] md:text-[28px] font-bold transition-all duration-300 hover:text-orange-500 hover:underline decoration-2 underline-offset-8"
					>
						Contra
					</a>
				</div>
			</div>
		</section>
	);
}
