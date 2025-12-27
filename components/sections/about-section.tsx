import { ScrollSection } from "../scroll-section";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

export default function AboutSection() {
	return (
		<section
			id="about"
			className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-[155px] py-20"
		>
			<ScrollSection className="mx-auto">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-sm font-semibold tracking-[0.5em] uppercase text-muted-foreground mb-4">
							About Me as A Creator.
						</h2>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							I'm a UX Designer
						</h2>
						<p className="text-lg text-muted-foreground mb-6">
							Half designer, half behaviour nerd! I love decoding users's needs,
							turning human quirks into practical designs, and chasing that
							"aha" moment where it all just works. My favourite part of design
							is solving problems that make life a little easier for someone
							else.
						</p>
						<Button variant="outline">Learn More</Button>
					</div>
					<Card className="p-8">
						<CardHeader>
							<CardTitle>Design Philosophy</CardTitle>
							<CardDescription>Principles that guide my work</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<h3 className="font-semibold mb-2">User-Centered</h3>
								<p className="text-sm text-muted-foreground">
									Every decision starts with the user's needs and goals.
								</p>
							</div>
							<div>
								<h3 className="font-semibold mb-2">Simplicity</h3>
								<p className="text-sm text-muted-foreground">
									Less is more. Clean, intuitive interfaces that feel natural.
								</p>
							</div>
							<div>
								<h3 className="font-semibold mb-2">Innovation</h3>
								<p className="text-sm text-muted-foreground">
									Pushing boundaries while maintaining usability and
									accessibility.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</ScrollSection>
		</section>
	);
}
