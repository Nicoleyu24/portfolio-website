"use client";

import { useEffect } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		if (typeof window === "undefined") return;

		const root = document.documentElement;
		const previous = root.style.scrollBehavior;

		// native smooth scrolling keeps interactions immediate
		root.style.scrollBehavior = "smooth";

		return () => {
			root.style.scrollBehavior = previous;
		};
	}, []);

	return <>{children}</>;
}
