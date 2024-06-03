import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const tools: { title: string; description: string; href: string }[] = [
	{
		title: "Tour YC(S21)",
		description: "Working as a Founding Engineer to scale Voice AI(24' - Present)",
		href: "https://www.linkedin.com/company/tour-me-now/mycompany/",
	},
	{
		title: "TrustAuthX",
		description: "Worked as a Software Engineer (2023-24 April)",
		href: "https://trustauthx.com",
	},
	{
		title: "FlitchCoin",
		description: "Worked as Product Engineer (2022-23')",
		href: "https://flitchcoin.com",
	},
	{
		title: "CodeChef President",
		description: "Worked as Campus Chapter President (2021-22')",
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
