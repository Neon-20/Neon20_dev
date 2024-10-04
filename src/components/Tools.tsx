import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const tools: { title: string; description: string; href: string }[] = [
	{
		title: "AlterDomus",
		description: "AI FullStack Engineer",
		href: "https://www.linkedin.com/company/alter-domus/",
	},
	{
		title: "Mercor",
		description: "AI Software Engineer.",
		href: "https://www.linkedin.com/company/mercor-ai/posts/?feedView=all",
	},
	{
		title: "Tour YC(S21)",
		description: "Founding Engineer to scale Voice AI",
		href: "https://www.linkedin.com/company/tour-me-now/mycompany/",
	},
	{
		title: "TrustAuthX",
		description: "Software/Founding Engineer",
		href: "https://trustauthx.com",
	},
	{
		title: "FlitchCoin",
		description: "Founder",
		href: "https://flitchcoin.com",
	},
	{
		title: "CodeChef",
		description: "Campus Chapter President",
		href: "https://www.linkedin.com/in/pranav-rajveer/details/experience/",
	},
];

const Tools = () => {
	return (
		<section id="tools" >
			<h2 className="text-lg flex items-center font-semibold">
				Experiences
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#tools"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex sm:text-base text-sm flex-col gap-1">
				{tools.map((tool) => (
					<Link
						target="_blank"
						key={tool.title}
						className="text-muted-foreground hover:animate-pulse hover:text-foreground border-b border-border/0 hover:border-foreground transition-colors w-fit"
						href={tool.href}
					>
						{tool.title} - {tool.description}
					</Link>
				))}
			</div>
		</section>
	);
};

export default Tools;
