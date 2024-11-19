import React from "react";
import Play_Button from "./adv_components/Play_Button";
import Achievements from "./Achievements";

function Hero() {
	return (
		<div className=" mt-24 mx-8 ">
			<h1 className=" capitalize text-5xl  py-10 leading-snug font-bold">
				Learn Like you would <br /> at India's top tech <br /> companies.
			</h1>
			<p className=" text-2xl  text-[#7a8b87]">
				Work-experience based learning programs to land your dream tech job
			</p>
			<div className="  text-[#7a8b87] mt-8">
				<p>
					<span className=" font-bold">Build</span> professional projects like
					the top 1% tech professionals.
				</p>
				<p>
					<span className=" font-bold">Master</span> the latest
					Fullstack/Backend/Automation tech with real work-ex.
				</p>
				<p>
					<span className=" font-bold"> Crack</span> your dream role at the best
					tech companies.
				</p>
			</div>

			<div className=" inline-flex mt-2 group">
				<Play_Button className="" />
				<h4 className="ml-2 font-bold text-[#07634c] group-hover:underline">
					Upskill With Crio
				</h4>
			</div>
            <Achievements/>
		</div>
	);
}

export default Hero;
