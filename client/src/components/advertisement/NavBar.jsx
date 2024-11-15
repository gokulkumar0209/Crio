import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import Programs from "./Programs";
import Offer from "./Offer";
import Placements from "./Placements";

function NavBar() {
	const [programsHidden, setProgramsHidden] = useState(true);
	const [placementsHidden, setPlacementsHidden] = useState(true);
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
						<li className="p-1">
							<div
								className=" relative"
								onMouseEnter={() => setProgramsHidden(false)}
								onMouseLeave={() => setProgramsHidden(true)}
							>
								Programs &#9660;
								<div
									className={clsx(
										{ hidden: programsHidden },
										"absolute top-8 -left-64 -right-64"
									)}
								>
									<Programs />
								</div>
							</div>
						</li>
						<li className="p-1">Hire from CRIO</li>
						<li className="p-1">Projects</li>
						<li className="p-1">Blog</li>
						<li className="p-1">
							<div
								className=" relative"
								onMouseEnter={() => setPlacementsHidden(false)}
								onMouseLeave={() => setPlacementsHidden(true)}
							>
								Placements &#9660;
								<div
									className={clsx(
										{ hidden: placementsHidden },
										"absolute -left-40 -right-40  top-8"
									)}
								>
									<Placements />
								</div>
							</div>
						</li>
						<li className=" border-2 py-1 px-4 border-black rounded-lg">
							Sign-In &#9655;
						</li>
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
