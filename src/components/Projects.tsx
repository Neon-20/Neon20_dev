"use client"
import Link from "next/link";
import { Badge } from "./ui/badge";
import { FaHashtag } from "react-icons/fa";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { X, Globe } from "lucide-react";
import {motion} from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const projects: {
	href: string;
	title: string;
	description: string;
	stack: string[];
	repo?: string;
	X?: string;
}[] = [
	{
		href: "https://linguify.pranavrajveer.com/",
		title: "Linguify - AI Based Language Learning App",
		description:
			"Linguify is a fun and engaging language learning app that uses gamification and bite-sized lessons to make acquiring a new language enjoyable. ",
		stack: ["Next.js", "Tailwind CSS", "Drizzle","PostGres","ReactAdmin"],
		repo: "https://github.com/Neon-20/linguify",
		X:   "https://x.com/Vapi_AI/status/1788279102056604125"
	},
	{
		href: "https://authify.pranavrajveer.com/",
		title: "Authify - Authentication for Devs",
		description: "Rated as Top-20 products of the day as Authentication Template with NextAuth on ProductHunt.",
		stack: ["Next.js", "Tailwind CSS", "Prisma", "NextAuth"],
		repo: "https://github.com/Neon-20/Authify",
	},
	{
		href: "https://filemagnet.pranavrajveer.com/",
		title: "FileMagnet - Convert files with ease.",
		description: "FileMagnet is a free file converter that helps you convert file formats without any hassle. Under the hood it doesn't use any db or server to store files.",
		stack: ["Next.js", "Tailwind CSS", "FFMPeg", "Wasm","Shadcn"],
		repo: "https://github.com/Neon-20/FileMagnet-File-Converter",
	},
];

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="text-lg flex items-center font-semibold pb-3">
				Projects{" "}
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#projects"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
				<span aria-hidden className="text-muted-foreground/50 text-sm ml-2">
					(sorted by most recent)
				</span>
			</h2>

			<div className="grid grid-cols-1 gap-4 ">
				{projects.map((project, i) => (
					<Card key={i} className="shadow-sm rounded-2xl dark:hover:bg-zinc-900 cursor-pointer">
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription className="tracking-normal">{project.description}</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<Separator />
							<div className="flex items-center flex-wrap gap-2 ">
								{project.href && (
									<Link target="_blank" href={project.href}>
										<motion.button
                                        whileHover={{ scale: 1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-full"
                                        >
										<Button className="rounded-xl">
											<Globe className="mr-2 size-4" />
											Website
										</Button>
										</motion.button>
									</Link>
								)}
								{project.repo && (
									<Link target="_blank" href={project.repo}>
										<motion.button
                                        whileHover={{ scale: 1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-full"
                                        >
										<Button className="rounded-xl">
											<GitHubLogoIcon className="mr-2 size-4" />
											Repo
										</Button>
										</motion.button>
									</Link>
								)}
								{project.X && (
									<Link target="_blank" href={project.X}>
										<motion.button
                                        whileHover={{ scale: 1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-full"
                                        >
										<Button className="rounded-xl">
											<X className="mr-2 size-4" />
											View on X
										</Button>
										</motion.button>
									</Link>
								)}
							</div>
							<div className="flex flex-wrap items-center justify-between gap-4">
								<div className="flex flex-wrap gap-2">
									{project.stack.map((tech) => (
										<Badge className="opacity-50 rounded-xl" key={tech}>
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Projects;
