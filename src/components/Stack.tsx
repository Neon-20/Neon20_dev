"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaHashtag } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import {
	SiAmazon,
	SiCplusplus,
	SiCss3,
	SiDocker,
	SiDrizzle,
	SiExpress,
	SiHiveBlockchain,
	SiHono,
	SiJavascript,
	SiKubernetes,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { Magnetic } from "./Magnetic";

const stack: { name: string; icon: IconType }[] = [
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "Python", icon: SiPython },
	{ name: "C++", icon: SiCplusplus },
	{ name: "React", icon: SiReact },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "HonoJs", icon: SiHono },
	{ name: "Tailwind CSS", icon: SiTailwindcss },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "Prisma", icon: SiPrisma },
	{ name: "Drizzle", icon: SiDrizzle },
	{ name: "Docker", icon: SiDocker },
	{ name: "AWS", icon: SiAmazon },
	{ name: "BlockChain", icon: SiHiveBlockchain },
];

const Stack = () => {
	return (
		<section id="stack">
			<h2 className="text-lg font-semibold flex items-center">
				Tech-Stack
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#stack"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex gap-4 flex-wrap py-3 ">
				{stack.map((tech, i) => (
					<Magnetic stretch="sm" key={i}>
						<motion.div
							whileHover={{
								scale: 1.05,
								rotate: Math.random() * 2.5,
								transition: { duration: 0.1 },
							}}
							className=" flex items-center w-fit border p-1 px-2 cursor-pointer leading-none hover:shadow-md dark:shadow-border/25 transition-shadow duration-100"
						>
							<tech.icon className="h-5 w-5 mr-2" />
							{tech.name}
						</motion.div>
					</Magnetic>
				))}
			</div>
			<p>
				{`My strength is building core web applications which can serve people throughout the globe.
				I'm currently working with Typescript, NextJS and HonoJS.  For me my first ❤️ is C++.  `}
			</p>
		</section>
	);
};

export default Stack;
