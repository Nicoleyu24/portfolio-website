import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ScrollSection } from "../scroll-section";

const testimonials = [
	{
		id: "adrian",
		name: "Adrian Cole",
		role: "The Product Wizard",
		text: "I had the pleasure of managing Nicole during her design internship at 30 Days of Product, and she quickly became one of the most impressive early career designers I have worked with.\n\nNicole played a major role in preparing our TapIn platform for launch by designing and building the entire website from scratch.\n\nShe led the full process from ideation and competitor research to wireframes in Whimsical, polished designs in Figma, and a complete build in Framer.\n\nHer ability to learn new tools quickly and deliver production ready work is exceptional.\n\nNicole works with clarity, creativity, and strong ownership. She communicates well, takes feedback with maturity, and consistently delivers high quality work on time.\n\nShe also stepped outside her comfort zone during the internship by publishing her first LinkedIn post and writing articles that showcased her design thinking and growth. Watching her develop her voice as a designer has been inspiring.\n\nNicole brings talent, professionalism, and a genuine commitment to growth.\n\nAny team would be lucky to have her.",
		company: "30 Days of Product",
		background:
			"linear-gradient(135deg, rgba(200, 0, 0, 0.1), rgba(255, 255, 255, 0.5))", // Darker tint
		accent: "#ffffffff",
		image: "/testimonials/adrian.png",
	},
	{
		id: "joann",
		name: "Joann Frasier Dasent",
		role: "President/Founder",
		text: "Nicole You helped to assess whether or not Regenerating Our Offspring Through Stories, Inc. website was optimally supporting its mission and goals. She outlined the scope for needed changes and improvements all while pursing her higher education. Nicole updated our website in order to let our partner Read By4th know what we were doing in the community. The project via Catchafire valued at $4,762 allowing us to use the funds for supplies and books. We are grateful for Nicole's service and would be happy to use her again.",
		company: "Regenerating Our Offspring Through Stories, Inc",
		background:
			"linear-gradient(135deg, rgba(200, 0, 0, 0.1), rgba(255, 255, 255, 0.5))", // Red/Brown tint based on image
		accent: "#c83232",
		image: "/testimonials/joann.jpg",
	},
];

const TestimonialCard = ({
	testimonial,
}: {
	testimonial: (typeof testimonials)[0];
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const isLongText = testimonial.text.length > 400;

	return (
		<motion.div
			animate={{ height: isExpanded ? "auto" : 450 }}
			initial={false}
			transition={{ duration: 0.4, ease: "easeInOut" }}
			className="relative w-full overflow-hidden rounded-[40px] p-8 group flex flex-col justify-between"
			style={{ background: testimonial.background }}
		>
			<div className="relative z-10 flex flex-col h-full">
				<div className="flex items-center gap-4 mb-6">
					<div className="relative h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-white backdrop-blur-md border border-white/20 overflow-hidden shrink-0">
						{testimonial.image ? (
							<Image
								src={testimonial.image}
								alt={testimonial.name}
								fill
								className="object-cover"
							/>
						) : (
							testimonial.name[0]
						)}
					</div>
					<div>
						<h3 className="font-semibold text-lg text-slate-900 dark:text-white">
							{testimonial.name}
						</h3>
						<p className="text-sm text-slate-700 dark:text-white/70">
							{testimonial.role}
						</p>
					</div>
				</div>

				<div className="relative flex-grow mb-8">
					<AnimatePresence mode="wait">
						<motion.div
							key={isExpanded ? "expanded" : "collapsed"}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<p
								className={`text-base leading-relaxed text-slate-800 dark:text-white/90 whitespace-pre-wrap ${!isExpanded && isLongText ? "line-clamp-[8]" : ""}`}
							>
								{testimonial.text}
							</p>
						</motion.div>
					</AnimatePresence>
				</div>

				<div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between gap-4">
					<p
						className={`text-sm font-bold tracking-widest uppercase text-slate-900/80 dark:text-white/80 ${isExpanded ? "whitespace-normal" : "truncate"}`}
					>
						{testimonial.company}
					</p>
					{isLongText && (
						<button
							type="button"
							onClick={() => setIsExpanded(!isExpanded)}
							className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white hover:opacity-70 transition-opacity shrink-0"
						>
							{isExpanded ? "Read Less" : "Read More"}
						</button>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default function TestimonialsSection() {
	return (
		<section
			id="testimonials"
			className="relative z-10 px-6 md:px-[155px] py-24"
		>
			<ScrollSection className="mx-auto w-full max-w-6xl">
				<div className="mb-16 flex items-center justify-center gap-6">
					<h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-muted-foreground">
						Kind words from clients.
					</h2>
				</div>

				<div className="grid gap-8 md:grid-cols-2 items-start max-w-4xl mx-auto">
					{testimonials.map((testimonial) => (
						<TestimonialCard key={testimonial.id} testimonial={testimonial} />
					))}
				</div>
			</ScrollSection>
		</section>
	);
}
