import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const Connect = () => {
	return (
		<section id="connect">
			<h2 className="text-lg font-semibold flex items-center">
				Connect
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#connect"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex flex-col space-y-1 sm:text-base text-sm ">
				<div className="flex gap-4">
					<p className="max-w-[6ch] w-full">X</p>
					<Link
						className="flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-foreground "
						href={"https://twitter.com/pranav12yoyo"}
						target="_blank"
					>
						<p className="truncate">@pranav12yoyo</p>
						<ArrowUpRight className="h-4 w-4 ml-1" />
					</Link>
				</div>
				{/* <div className="flex gap-4">
					<p className="max-w-[6ch] w-full">Calendly</p>
					<Link
						className="flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-foreground "
						href={"https://calendly.com/pranavrajveer/developer-recruiter-connect"}
						target="_blank"
					>
						<p className="truncate">Schedule a Call.</p>
						<ArrowUpRight className="h-4 w-4 ml-1" />
					</Link>
				</div> */}
				<div className="flex gap-4">
					<p className="max-w-[6ch] w-full">Github</p>
					<Link
						className="flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-foreground "
						href={"https://github.com/Neon-20"}
						target="_blank"
					>
						<p className="truncate">@Neon-20</p>
						<ArrowUpRight className="h-4 w-4 ml-1" />
					</Link>
				</div>
				<div className="flex gap-4">
					<p className="max-w-[6ch] w-full">Linkedin</p>
					<Link
						className="flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-foreground "
						href={"https://linkedin.com/in/pranav-rajveer"}
						target="_blank"
					>
						<p className="truncate">@Pranav-Rajveer</p>
						<ArrowUpRight className="h-4 w-4 ml-1" />
					</Link>
				</div>
				<div className="flex gap-4">
					<p className="max-w-[6ch] w-full">Email</p>
					<Link
						className="flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-foreground"
						href={"mailto:pranavrajveer.workmail@gmail.com"}
						target="_blank"
					>
						<p className="truncate">pranavrajveer.workmail@gmail.com</p>
						<ArrowUpRight className="h-4 w-4 ml-1" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Connect;
