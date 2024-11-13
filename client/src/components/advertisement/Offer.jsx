import React from "react";
import TimeBox from "./adv_components/TimeBox";
function Offer() {
	return (
		<div className=" w-full bg-[#2df8c5] ">
			<div className=" flex justify-center items-center flex-grow gap-6 text-center max-md:flex-col max-md:gap-0">
				<p className=" text-center text-lg max-md:text-xs">
					Land your dream tech role with Crio.Do | Grab scholarship of up to
					<span className=" font-bold">
						{" "}
						₹1,20,000 | 73 Seats | <span className=" underline">
							Apply Now
						</span>{" "}
						|
					</span>
				</p>
				<TimeBox />
			</div>
		</div>
	);
}

export default Offer;
