import React from "react";

function Placements() {
	return (
		<div className=" bg-[#f2fbf7] p-8 rounded-lg">
			<div>
				<div className=" flex justify-start  gap-6 mt-2">
					<img
						src="https://dummyimage.com/600x400/000/fff"
						className="h-[20px] w-[20px]"
						alt=""
					/>
					<p className=" text-[#9eada9]">
						<span className=" font-bold text-black">Placement Stats </span>
						<br />
						Helping our Learners Get the Best Career Breakthroughs and into the
						Best Companies
					</p>
				</div>
			</div>
			<div>
				<div className=" flex justify-start  gap-6 mt-4">
					<img
						src="https://dummyimage.com/600x400/000/fff"
						className="h-[20px] w-[20px]"
						alt=""
					/>
					<p className=" text-[#9eada9]">
						<span className=" font-bold text-black">Success Stories </span>
						<br />
						Hear from some of our learners who took their careers to new heights
					</p>
				</div>
			</div>
		</div>
	);
}

export default Placements;
