import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_USERS } from "../utils/queries";

export default function Home() {
	// const { loading, error, data } = useQuery(QUERY_USERS);

	// uses optional chaining to allow an undefined response without throwing errors
	// const users = data?.users || "waiting on the data";

	// console data returned from query
	// console.log("query users:", users);

	const [itemNumber, setItemNumber] = useState("");

	const handleBarcodeScanner = () => {
		console.log("scan barcode");
	};

	const handleInputChange = (event) => {
		const userInput = event.target.value;
		return setItemNumber(userInput);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("item number submitted", itemNumber);
		setItemNumber("");
	};

	return (
		<div className="flex flex-col mt-16">
			<div className="flex justify-center w-100 my-3">
				<div className="flex justify-center bg-neutral border border-8 border-neutral-content h-32 w-4/5 lg:w-2/3">
					<button onClick={handleBarcodeScanner} className="text-xl text-base-100 md:text-2xl">Scan Barcode</button>
				</div>
			</div>
			<p className="flex justify-center text-neutral my-3 text-xl md:text-2xl">or</p>
			<div className="flex justify-center">
				<div className="flex justify-center bg-neutral border border-8 border-neutral-content h-32 w-4/5 lg:w-2/3 p-3 my-3">
					<div className="w-full flex relative justify-center">
						<label className=" absolute text-base-100 md:text-lg lg:text-xl top-0 left-0">Item Number:</label>
						<div className="self-center w-full mt-4">
							<input
								name="itemNumber"
								type="text"
								onChange={handleInputChange}
								value={itemNumber}
								className="bg-neutral-base-100 rounded w-5/6 md:w-3/5 mr-1 md:mr-2"
							></input>
							<button className="btn border-2 border-neutral-content" type="button" onClick={handleSubmit}>
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
