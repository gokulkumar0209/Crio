import React, { useState } from "react";

function TimeBox() {
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);
	const [second, setSecond] = useState(0);
	const futureDate = Date.now() + 24 * 60 * 60 * 1000;

	useState(() => {
		setInterval(() => {
			const timeDifference = futureDate - Date.now();
			const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
			const seconds = Math.floor((timeDifference / 1000) % 60);
			setHour(hours);
			setMinute(minutes);
			setSecond(seconds);

			console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
		}, 1000);
	}, [second]);
	return (
		<div className=" gap-4 text-center text-[12px] flex max-md:text-[8px] my-2">
			<div className="bg-[#fed400] w-10 px-[0.5px] ">
				<p className=" font-semibold ">{hour}</p>

				<p className="text-[6px] font-serif font-light">HOURS</p>
			</div>
			<div className="bg-[#fed400] w-10 px-[0.5px]">
				<p className=" font-semibold ">{minute}</p>

				<p className="text-[6px] font-serif font-light ">MINUTES</p>
			</div>
			<div className="bg-[#fed400] w-10 px-[0.5px] ">
				<p className=" font-semibold">{second}</p>

				<p className="text-[6px] font-serif font-light">SECONDS</p>
			</div>
		</div>
	);
}

export default TimeBox;
