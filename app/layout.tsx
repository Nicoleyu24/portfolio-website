import SmoothScroll from "@/components/SmoothScroll";
import type { Metadata } from "next";
import { Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	weight: ["400", "500", "700", "900"],
	variable: "--font-roboto",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
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
				className={`${roboto.variable} ${geistMono.variable} antialiased font-sans`}
			>
				<SmoothScroll>{children}</SmoothScroll>
			</body>
		</html>
	);
}
