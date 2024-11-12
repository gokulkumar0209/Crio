import React, { useEffect, useState } from "react";
import TimeBox from "./adv_components/TimeBox";

function NavBar() {
	return (
		<div className=" w-screen fixed top-0 left-0 right-0">
			<div className=" w-full bg-[#2df8c5] ">
				<div className=" flex justify-center items-center flex-grow gap-6 text-center max-md:flex-col max-md:gap-0">
					<p className=" text-center text-lg max-md:text-xs">
						Land your dream tech role with Crio.Do | Grab scholarship of up to
						<span className=" font-bold">
							{" "}
							₹1,20,000 | 73 Seats |{" "}
							<span className=" underline">Apply Now</span> |
						</span>
					</p>
					<TimeBox />
				</div>
			</div>
			<div className=" w-full bg-white p-2 flex justify-between items-center">
				<img
					src="https://www.crio.do/static/5ac1a39f9eebf6fe904e14069500353e/2d604/Crio_Dark.webp"
					alt=""
					className=" w-32 max-md:w-24 ml-4"
				/>
				<div>
					<ul className=" flex justify-between gap-4 mr-4">
						<li>Programs</li>
						<li>Hire From CRIO</li>
						<li>Projects</li>
						<li>Blog</li>
						<li>Placements</li>
						<li>Sign-In</li>
					</ul>
				</div>
			</div>
		</div>

		// <div className=" bg-[#2df8c5] flex justify-center text-center ">
		//
		//
		// </div>
	);
}

export default NavBar;
