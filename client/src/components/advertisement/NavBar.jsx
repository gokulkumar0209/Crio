import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import Programs from "./Programs";
import Offer from "./Offer";

function NavBar() {
	const [programsHidden, setProgramsHidden] = useState(true);
	return (
		<div className=" w-screen fixed top-0 left-0 right-0">
			<Offer />
			<div className=" w-full bg-white p-2 flex justify-between items-center">
				<img
					src="https://www.crio.do/static/5ac1a39f9eebf6fe904e14069500353e/2d604/Crio_Dark.webp"
					alt=""
					className=" w-32 max-md:w-24 ml-4"
				/>
				<div>
					<ul className=" flex justify-between gap-4 mr-4">
						<li>
							<div
								onMouseEnter={() => setProgramsHidden(false)}
								onMouseLeave={() => setProgramsHidden(true)}
							>
								Programs &#9660;
							</div>
							<div className={clsx({ hidden: programsHidden },"absolute ")}>
								<Programs />
							</div>
						</li>
						<li>Hire from CRIO</li> 
						<li>Projects</li>
						<li>Blog</li>
						<li>Placements &#9660;</li>
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
