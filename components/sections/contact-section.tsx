import { ScrollSection } from "../scroll-section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-[155px] py-20"
		>
			<ScrollSection className="max-w-4xl mx-auto text-center">
				<Badge className="mb-4">Get In Touch</Badge>
				<h2 className="text-4xl md:text-5xl font-bold mb-6">
					Let's Work Together
				</h2>
				<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
					I'm always open to discussing new projects, creative ideas, or
					opportunities to be part of your visions.
				</p>
				<div className="flex gap-4 justify-center">
					<Button size="lg">Contact Me</Button>
					<Button size="lg" variant="outline">
						Download Resume
					</Button>
				</div>
			</ScrollSection>
		</section>
	);
}
