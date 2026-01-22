import { motion } from "framer-motion";
import { useRef } from "react";
import { ScrollSection } from "../scroll-section";
import VariableProximity from "../VariableProximity";

export default function HeroSection() {
	const heroRef = useRef<HTMLDivElement>(null);
	const heroQuoteRef = useRef<HTMLSpanElement>(null);

	const handleMyWorkClick = () => {
		const projectsSection = document.getElementById("projects");
		if (projectsSection) {
			const targetY =
				projectsSection.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({ top: targetY, behavior: "instant" });
		}
	};

	return (
		<section
			id="hero"
			ref={heroRef}
			className="relative z-0 overflow-hidden min-h-screen flex flex-col items-center justify-start pt-[250px] pb-[1000px] px-6 md:px-[155px]"
		>
			{/* Background handled by Plasma in page.tsx */}

			<ScrollSection className="max-w-5xl mx-auto text-center space-y-12">
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-tight"
					style={{ transformOrigin: "center top" }}
				>
					<div className="grid grid-cols-1 grid-rows-1 place-items-center">
						<span
							className="invisible refractive-quote col-start-1 row-start-1 pointer-events-none select-none"
							style={{
								fontVariationSettings: "'wght' 1000, 'opsz' 110, 'GRAD' 250",
							}}
							aria-hidden="true"
						>
							Where behaviour meets design, clarity becomes momentum.
						</span>
						<div className="col-start-1 row-start-1 w-full">
							<VariableProximity
								ref={heroQuoteRef}
								label="Where behaviour meets design, clarity becomes momentum."
								containerRef={heroQuoteRef}
								fromFontVariationSettings="'wght' 800, 'opsz' 48, 'GRAD' 0"
								toFontVariationSettings="'wght' 1000, 'opsz' 110, 'GRAD' 250"
								radius={260}
								falloff="gaussian"
								className="refractive-quote"
							/>
						</div>
					</div>
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.6 }}
					className="flex flex-col items-center gap-3 pt-[100px]"
				>
					<button
						type="button"
						className="w-full sm:w-64 inline-flex items-center justify-center rounded-full border border-sky-200/60 bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300 px-8 py-3 text-base font-semibold tracking-tight text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_18px_35px_rgba(15,23,42,0.35),0_8px_15px_rgba(59,130,246,0.35)] backdrop-blur-2xl transition hover:bg-gradient-to-b hover:from-sky-200 hover:via-sky-300 hover:to-sky-400 hover:translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_20px_40px_rgba(15,23,42,0.35),0_8px_18px_rgba(59,130,246,0.45)] active:translate-y-1 active:bg-gradient-to-b active:from-sky-300 active:via-sky-400 active:to-sky-500 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.25),0_10px_20px_rgba(15,23,42,0.4)] dark:border-purple-300/60 dark:bg-gradient-to-b dark:from-purple-300 dark:via-purple-500 dark:to-purple-700 dark:text-white dark:shadow-[inset_0_1px_rgba(255,255,255,0.35),0_18px_35px_rgba(76,29,149,0.55),0_8px_15px_rgba(147,51,234,0.55)] dark:hover:bg-gradient-to-b dark:hover:from-purple-400 dark:hover:via-purple-600 dark:hover:to-purple-800 dark:hover:shadow-[inset_0_1px_rgba(255,255,255,0.4),0_20px_40px_rgba(76,29,149,0.6),0_8px_20px_rgba(147,51,234,0.65)] dark:active:bg-gradient-to-b dark:active:from-purple-500 dark:active:via-purple-700 dark:active:to-purple-900 dark:active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.4),0_12px_24px_rgba(76,29,149,0.5)]"
					>
						Start Collaborate
					</button>
					<button
						type="button"
						onClick={handleMyWorkClick}
						className="w-full sm:w-64 inline-flex items-center justify-center rounded-full border border-white/70 bg-gradient-to-br from-white/80 via-white/40 to-white/20 px-8 py-3 text-base font-semibold tracking-tight text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_25px_65px_rgba(15,23,42,0.35),0_10px_30px_rgba(148,163,184,0.45)] backdrop-blur-[28px] transition hover:bg-gradient-to-br hover:from-white/90 hover:via-white/55 hover:to-white/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_30px_70px_rgba(15,23,42,0.35),0_12px_35px_rgba(148,163,184,0.5)] dark:border-white/40 dark:bg-white/35 dark:text-white dark:shadow-[0_18px_55px_rgba(2,6,23,0.65)] dark:hover:bg-white/40"
					>
						My Work
					</button>
				</motion.div>
			</ScrollSection>
		</section>
	);
}
