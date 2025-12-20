"use client";

import { Moon, Sun } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
	framed?: boolean;
}

export function ThemeToggle({ framed = true }: ThemeToggleProps) {
	const [theme, setTheme] = React.useState<string>("light");

	React.useEffect(() => {
		// Check for saved theme preference or default to light mode
		const savedTheme = localStorage.getItem("theme") || "light";
		setTheme(savedTheme);
		document.documentElement.classList.toggle("dark", savedTheme === "dark");
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			className={`relative flex items-center justify-center transition-all ${
				framed
					? "h-12 w-12 rounded-2xl border border-white/30 bg-white/30 text-foreground shadow-[0_10px_30px_rgba(15,23,42,0.25)] backdrop-blur-2xl hover:bg-white/40 dark:border-white/20 dark:bg-white/10 dark:text-white"
					: "h-10 w-10 rounded-full text-foreground hover:text-foreground/70 dark:text-white hover:bg-transparent"
			}`}
			aria-label="Toggle theme"
		>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
