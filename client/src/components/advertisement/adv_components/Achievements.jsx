import React from "react";

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
		<div className="my-4">
			<div className=" w-full  border-2 grid grid-cols-5 text-center justify-between my-2 rounded-lg">
				{achievements.map((achievement) => {
					return (
						<div className="p-2 border">
							<div className=" text-xl font-bold">{achievement.value}</div>
							<div className="text-sm text-gray-500 text-center px-2">
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
