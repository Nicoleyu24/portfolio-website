import type { Metadata } from "next";
import { Geist, Geist_Mono, Notable } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const notable = Notable({
	weight: "400",
	variable: "--font-notable",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Portfolio Website",
	description: "Creative portfolio with smooth scroll animations",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${notable.variable} antialiased`}
			>
				<SmoothScroll>{children}</SmoothScroll>
			</body>
		</html>
	);
}
