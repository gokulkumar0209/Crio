import React from "react";
import { clsx } from "clsx";

function Achievements() {
	const achievements = [
		{
			value: "95%",
			description: "Placed within 9 months of graduation",
		},
		{
			value: "10 LPA",
			description: "Average dream job CTC",
		},
		{
			value: "21 LPA",
			description: "Average super-dream job CTC",
		},
		{
			value: "1000+",
			description: "Hiring Partners",
		},
		{
			value: "81%",
			description: "Average Salary Hike",
		},
	];

	return (
		<div className="my-4 bg-[#f2fbf7] rounded-3xl">
			<div className=" w-full  grid grid-cols-5 text-center justify-between my-2 rounded-lg">
				{achievements.map((achievement, index) => {
					return (
						<div
							className={clsx(index != 0 && " border-l", "py-4 px-0")}
							key={index}
						>
							<div className=" text-2xl font-bold">{achievement.value}</div>
							<div className="text-xs  text-center px-2">
								{achievement.description}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Achievements;
