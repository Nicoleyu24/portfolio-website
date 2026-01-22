"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function ScrollProgressBar() {
	const [value, setValue] = useState(0);

	useEffect(() => {
		let rafId = 0;

		const update = () => {
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress =
				totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
			setValue(progress);
			rafId = 0;
		};

		const handleScroll = () => {
			if (rafId) return;
			rafId = window.requestAnimationFrame(update);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll);
		update();

		return () => {
			if (rafId) {
				cancelAnimationFrame(rafId);
			}
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted overflow-hidden">
			<Progress value={value} className="h-full rounded-none bg-transparent" />
		</div>
	);
}
