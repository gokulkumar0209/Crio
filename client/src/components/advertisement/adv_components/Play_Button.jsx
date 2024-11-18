import React from "react";

function Play_Button() {
	return (
		<div className="flex justify-center items-center">
			<div className="bg-[#07634c] hover:bg-[#2df8c5] rounded-full flex justify-center items-center w-5 h-5">
				<div className="text-[#2df8c5] text-xl ml-[1px] mb-[1px] hover:text-[#07634c]">
					&#9656;
				</div>
			</div>
		</div>
	);
}

export default Play_Button;
