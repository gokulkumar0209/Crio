import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faInstagram,
	faTwitter,
	faLinkedinIn,
	faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faHeadset,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";

function About() {
	return (
		<div className="bg-[#2df8c5] px-8 py-8">
			<div className="flex flex-col lg:flex-row justify-between gap-6 px-4">
				
				<div className="text-lg w-4/12">
					<img
						src="https://www.crio.do/static/5ac1a39f9eebf6fe904e14069500353e/2d604/Crio_Dark.webp"
						alt=""
						className="w-32 md:w-48"
					/>

					<div className="flex mt-4 items-start font-medium">
						<FontAwesomeIcon icon={faHouse} size="lg" className="mt-1" />
						<p className="ml-2">
							20, 100 Feet Rd, Vivek Nagar, Chandra Reddy Layout, AVS Layout
							Ejipura, Bengaluru, Karnataka 560095
						</p>
					</div>

					<div className="flex mt-4 items-start font-medium">
						<FontAwesomeIcon icon={faEnvelope} size="lg" className="mt-1" />
						<p className="ml-2">
							<span className="font-semibold">Customer Queries</span>
							<br />
							<a className="underline" href="mailto:support@criodo.com">
								support@criodo.com
							</a>
						</p>
					</div>

					<div className="flex mt-4 items-start font-medium">
						<FontAwesomeIcon icon={faHeadset} size="lg" className="mt-1" />
						<p className="ml-2">
							<span className="font-semibold">General Enquiries</span>
							<br />
							<span className="underline">ping@criodo.com</span>
							<br />
							<span className="font-mono">Ph. 063665 28148</span>
						</p>
					</div>
				</div>

			
				<div className="text-lg lg:w-3/12 mt-6 lg:mt-0">
					<h3 className="font-semibold uppercase my-1">Community Programs</h3>
					<p>
						#IBelieveInDoing Challenge <br />
						Crio Winter of Doing <br />
						Crio Project Hub
					</p>
				</div>

				
				<div className="text-lg lg:w-4/12 mt-6 lg:mt-0">
					<div className="">
						<h3 className="font-semibold uppercase my-1">Career Programs</h3>
						<p>
							Fellowship Program in Software Development <br />
							Fellowship Program in QA Automation (SDET) <br />
							Fellowship Program in NextGen Data Analytics with AI <br />
							Fellowship Program In System Design
						</p>
					</div>

				
					<div className="mt-6">
						<h3 className="font-semibold uppercase my-1">For Business</h3>
						<p>
							Hire from Crio <br />
							Crio Onboard
						</p>
					</div>
				</div>
			
				<div className="text-lg lg:w-2/12 mt-6 lg:mt-0">
					<h3 className="font-semibold uppercase my-1">Crio</h3>
					<p>
						Placement Report <br />
						Success Stories <br />
						About <br />
						Blog <br />
						Terms of Use <br />
						Privacy Policy
					</p>
				</div>
			</div>

			<hr className=" border-[1px] border-[#02bf91] mt-6" />
			<div className="  rounded-sm flex justify-center mt-4 mb-[72px]">
				<div className=" flex gap-4">
					<FontAwesomeIcon
						icon={faLinkedinIn}
						size="lg"
						className="text-white bg-black p-2 rounded-lg w-5 h-5 flex items-center justify-center"
					/>
					<FontAwesomeIcon
						icon={faYoutube}
						size="lg"
						className="text-white bg-black p-2 rounded-lg w-5 h-5 flex items-center justify-center"
					/>
					<FontAwesomeIcon
						icon={faInstagram}
						size="lg"
						className="text-white bg-black p-2 rounded-lg w-5 h-5  flex items-center justify-center"
					/>
					<FontAwesomeIcon
						icon={faTwitter}
						size="lg"
						className="text-white bg-black p-2 rounded-lg w-5 h-5 flex items-center justify-center"
					/>
					<FontAwesomeIcon
						icon={faFacebookF}
						size="lg"
						className="text-white bg-black p-2 rounded-lg w-5 h-5 flex items-center justify-center"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
