import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faYoutube, faInstagram, faTwitter  , faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faHeadset,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";

function About() {
	return (
		<div className="bg-[#2df8c5] px-8 py-8">
			<div className=" ">
				<div className=" col-span-4 text-lg">
					<img
						src="https://www.crio.do/static/5ac1a39f9eebf6fe904e14069500353e/2d604/Crio_Dark.webp"
						alt=""
						className=" w-48"
					/>

					<div className=" flex mt-4 items-start font-medium ">
						<FontAwesomeIcon icon={faHouse} size="lg" className="mt-1" />
						<p className="ml-2">
							20, 100 Feet Rd, Vivek Nagar, Chandra Reddy Layout, AVS Layout
							Ejipura, Bengaluru, Karnataka 560095
						</p>
					</div>

					<div className=" flex mt-4 items-start font-medium">
						<FontAwesomeIcon icon={faEnvelope} size="lg" className="mt-1" />
						<p className="ml-2">
							<span className=" font-semibold">Customer Queries</span>
							<br />
							<a className=" underline" href="mailto:support@criodo.com">
								support@criodo.com
							</a>
						</p>
					</div>

					<div className=" flex mt-4 items-start font-medium">
						<FontAwesomeIcon icon={faHeadset} size="lg" className="mt-1" />
						<p className="ml-2">
							<span className=" font-semibold">General Enquiries </span>
							<br />
							<span className=" underline">ping@criodo.com</span> <br />
							<span className=" font-mono">Ph. 063665 28148</span>
						</p>
					</div>
				</div>
				<div className="mt-6 col-span-2 text-lg">
					<h3 className=" font-semibold uppercase "> Community Programs</h3>
					<p>
						#IBelieveInDoing Challenge <br /> Crio Winter of Doing <br />
						Crio Project Hub
					</p>
				</div>
				<div className="  col-span-4 mt-6 text-lg ">
					<h3 className=" font-semibold uppercase">Career Programs</h3>
					<p>
						Fellowship Program in Software Development <br />
						Fellowship Program in QA Automation (SDET) <br />
						Fellowship Program in NextGen Data Analytics with AI <br />
						Fellowship Program In System Design
					</p>
				</div>
				<div className=" mt-6 text-lg">
					<h3 className=" font-semibold uppercase">For Business</h3>
					<p>
						Hire from Crio <br />
						Crio Onboard
					</p>
				</div>
				<div className=" col-span-2 text-lg mt-6">
					<h3 className=" font-semibold uppercase">Crio</h3>
					<p>
						Placement Report <br /> Success Stories <br /> About <br /> Blog
						<br /> Terms of Use <br />
						Privacy Policy
					</p>
				</div>
			</div>
			<hr className=" border-[1px] border-[#02bf91] mt-6" />
			<div className="  rounded-sm">
				<div className=" flex">
					<FontAwesomeIcon
						icon={faLinkedin}
						size="2x"
						className=" text-white bg-black p-2"
					/>
					<FontAwesomeIcon
						icon={faYoutube}
						size="2x"
						className=" text-white bg-black p-2"
					/>
					<FontAwesomeIcon
						icon={faInstagram}
						className=" text-white bg-black p-2"
						size="2x"
					/>
					<FontAwesomeIcon
						icon={faTwitter}
						size="2x"
						className=" text-white bg-black p-2"
					/>
					<FontAwesomeIcon
						icon={faFacebookSquare}
						size="2x"
						className=" text-white bg-black p-2"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
