import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function About() {
	return (
		<div className="bg-[#2df8c5]">
			<div className="   mx-8">
				<div className=" col-span-4">
					<img
						src="https://www.crio.do/static/5ac1a39f9eebf6fe904e14069500353e/2d604/Crio_Dark.webp"
						alt=""
						className=" w-32 max-md:w-24 "
					/>
					<div>
						<p className="mt-4">
							<span>
								<FontAwesomeIcon icon={faHouse} size="" className=" inline" />
							</span>{" "}
							20, 100 Feet Rd, Vivek Nagar, Chandra Reddy Layout, AVS Layout
							Ejipura, Bengaluru, Karnataka 560095
						</p>
					</div>
					<p>Customer Queries support@criodo.com</p>
					<p>
						<span>
							<faFontAwesome></faFontAwesome>
						</span>{" "}
						General Enquiries ping@criodo.com Ph. 063665 28148
					</p>
				</div>
				<div className=" bg-violet-500 col-span-2">
					<h3>Community Programs</h3>
					<p>
						#IBelieveInDoing Challenge Crio Winter of Doing Crio Project Hub
					</p>
				</div>
				<div className=" bg-red-500 col-span-4">
					<h3>Career Programs</h3>
					<p>
						Fellowship Program in Software Development
						<p>Fellowship Program in QA Automation (SDET)</p> Fellowship Program
						in NextGen Data Analytics with AI Fellowship Program In System
						Design
					</p>
					<div>For Business Hire from Crio Crio Onboard</div>
				</div>
				<div className=" bg-green-500 col-span-2">
					Crio Placement Report Success Stories About Blog Terms of Use Privacy
					Policy
				</div>
			</div>
		</div>
	);
}

export default About;
