import React from "react";

const agenda = [
	{ title: "LUNCH", time: "13:00 - 15:00" },
	{ title: "AKTIVITET", time: "16:00 - 17.00" },
	{ title: "MIDDAG", time: "19:30 - 21:30" },
];

export default function AgendaSummary() {
	return (
		<section className="w-full max-w-xs sm:max-w-md mx-auto my-8 rounded-2xl bg-white/15 shadow p-4 sm:p-6">
			<ul className="space-y-3">
				{agenda.map((item) => (
					<li
						key={item.title}
						className="flex justify-between items-center text-base sm:text-lg font-medium px-2 py-2 rounded-lg"
					>
						<span className="text-muted-foreground font-medium">
							{item.title}
						</span>
						<span className="text-muted-foreground font-bold ml-4 whitespace-nowrap">
							{item.time}
						</span>
					</li>
				))}
			</ul>
		</section>
	);
}
