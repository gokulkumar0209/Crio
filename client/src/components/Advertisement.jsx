import React from "react";
import NavBar from "./advertisement/NavBar";
import Hero from "./advertisement/Hero";
import Contacts from "./advertisement/Contacts";
import About from "./advertisement/About";

function Advertisement() {
	return (
		<div>
			<NavBar />
			<Hero/>
			{/* <div className=" grid grid-cols-10">
				<div className=" col-span-6">
					<Hero />
				</div>
				<div className=" col-span-4">
					<Contacts />
				</div>
			</div> */}
			<About/>
		</div>
	);
}

export default Advertisement;
