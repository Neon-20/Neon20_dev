import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const achievements: { title: string; description: string; href: string }[] = [
	{
		title: "VapiThon by Vapi AI (YC '23) ",
		description: "Won the Vapi Hackathon and recieved rewards. (2024' May)",
		href: "https://x.com/pranav12yoyo/status/1795913547127681386",
	},
    {
		title: "ProductHunt",
		description: "Authify ranked Top-20 Product of the Day in ProductHunt.",
		href: "https://www.producthunt.com/products/authify?utm_source=badge-featured&utm_medium=badge#authify",
	},
	{
		title: "CodeForces",
		description: " : Stood 161 Worldwide and Top-15 in India in Codeforces Round 782.",
		href: "https://codeforces.com/bestRatingChanges/7020929",
	},
    {
		title: "Samsung - IIT DELHI",
		description: "Won 'SAMSUNG SFT' among 18k teams over India (2022')",
		href: "https://www.facebook.com/watch/?v=777484540224320",
	},
];

const Achievements = () => {
	return (
		<section id="achievements" >
			<h2 className="text-lg flex items-center font-semibold">
				Achievements
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#achievements"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex sm:text-base text-sm flex-col gap-1 ">
				{achievements.map((achievement) => (
					<Link
						target="_blank"
						key={achievement.title}
						className="text-muted-foreground hover:text-foreground border-b border-border/0 hover:border-foreground transition-colors w-fit hover:animate-pulse"
						href={achievement.href}
					>
						{achievement.title} - {achievement.description}
					</Link>
				))}
			</div>
		</section>
	);
};

export default Achievements;
