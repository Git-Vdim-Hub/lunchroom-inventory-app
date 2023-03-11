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
		<div>
			<div>
				<button onClick={handleBarcodeScanner}>Scan Barcode</button>
			</div>
			<p>or</p>
			<div>
				<form>
					<label>Item Number:</label>
					<input
						name="itemNumber"
						type="text"
						onChange={handleInputChange}
						value={itemNumber}
					></input>
					<button type="button" onClick={handleSubmit}>
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
