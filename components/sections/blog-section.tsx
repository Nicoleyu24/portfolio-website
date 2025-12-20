import { ScrollSection } from "../scroll-section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

export default function BlogSection() {
	return (
		<section
			id="blog"
			className="min-h-screen flex items-center justify-center px-6 md:px-[155px] py-20"
		>
			<ScrollSection className="mx-auto w-full">
				<div className="text-center mb-16">
					<Badge className="mb-4">Blog</Badge>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Latest Thoughts
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Insights, tutorials, and reflections on design and technology
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-8">
					{[1, 2, 3, 4].map((post, index) => (
						<ScrollSection key={post} delay={index * 0.1}>
							<Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
								<CardHeader>
									<CardTitle>Blog Post Title {post}</CardTitle>
									<CardDescription>
										Published on {new Date().toLocaleDateString()}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground mb-4">
										A preview of the blog post content that discusses design
										trends, user experience insights, or creative process...
									</p>
									<Button variant="ghost">Read More →</Button>
								</CardContent>
							</Card>
						</ScrollSection>
					))}
				</div>
			</ScrollSection>
		</section>
	);
}
