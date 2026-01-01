import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Vitalink Case Study | Nicole Yu",
	description:
		"A comprehensive redesign of a telehealth application focusing on AI-powered insights and seamless virtual consultations.",
};

export default function VitalinkLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
