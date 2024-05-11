import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";

const font = Poppins({
    subsets:["latin"],
    weight:["600"]
})
export const metadata: Metadata = {
	title: "Pranav Rajveer",
	description:
		"Pranav Rajveer's personal website. Software Engineer & FullStack Dev. Building web applications with Next.js,HonoJS, Tailwind CSS,Prisma and more.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<head>
			<script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="8efceb49-2776-47f5-bb58-33fcc018acc9" async></script>
            </head>
			<body className={(font.className, "p-3 relative")}>
				<Background />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					themes={["light", "dark", "system"]}
					enableSystem
					disableTransitionOnChange
				>
					<main className="max-w-2xl space-y-20 mx-auto py-24 pt-12 px-1">
						{children}
					</main>
					{/* <Navbar /> */}
				</ThemeProvider>
			</body>
		</html>
	);
}

const Background = () => {
	return (
		<>
			<div className="fixed inset-0 -z-10 bg-gradient-to-t from-background from-25%  h-full w-full" />
			<div className="fixed inset-0 h-screen w-full -z-20 bg-[linear-gradient(to_right,#8080800a_2px,transparent_2px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:12px_16px] dark:opacity-75" />
		</>
	);
};
