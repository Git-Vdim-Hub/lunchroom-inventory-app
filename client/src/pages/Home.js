import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { Html5QrcodeScanner } from "html5-qrcode";

import Auth from "../utils/auth";
import { redirect } from "../utils/helpers";
import { QUERY_BY_BARCODE } from "../utils/queries";

export default function Home() {
	const [itemNumber, setItemNumber] = useState("");
	const [scannedCode, setScannedCode] = useState();

	const { loading, error, data } = useQuery(QUERY_BY_BARCODE, {
		variables: { barcode: scannedCode },
	});
	console.log(data?.item);

	const handleInputChange = (event) => {
		const userInput = event.target.value;
		return setItemNumber(userInput);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("item number submitted", itemNumber);
		setItemNumber("");
	};

	const handleVisibility = () => {
		const btnContainer = document.getElementById("btn-container");
		const readerEl = document.getElementById("reader");

		if (readerEl.classList.contains("hidden")) {
			readerEl.classList.remove("hidden");
			btnContainer.classList.add("hidden");
		} else {
			readerEl.classList.add("hidden");
			btnContainer.classList.remove("hidden");
		}
	};

	// const queryItemByBarcode = () => {
	// 	try {
	// 		itemByBarcode({
	// 			variables: { barcode: scannedCode },
	// 		});
	// 	} catch (error) {
	// 		console.error(error);
	// 		return (
	// 			<div>
	// 				<div className="alert alert-warning shadow-lg">
	// 					<div>
	// 						<svg
	// 							xmlns="http://www.w3.org/2000/svg"
	// 							className="stroke-current flex-shrink-0 h-6 w-6"
	// 							fill="none"
	// 							viewBox="0 0 24 24"
	// 						>
	// 							<path
	// 								strokeLinecap="round"
	// 								strokeLinejoin="round"
	// 								strokeWidth="2"
	// 								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
	// 							/>
	// 						</svg>
	// 						<span>Failed to scan or find item with that barcode</span>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		);
	// 	}
	// };

	const handleBarcodeScanner = () => {
		console.log("scan barcode");
		// This method will trigger user permissions
		const html5QrcodeScanner = new Html5QrcodeScanner("reader", {
			fps: 10,
			qrbox: 250,
		});

		// function to run on successful scan
		function onScanSuccess(decodedText, decodedResult) {
			// console.log(`Scan result: ${decodedText}`, decodedResult);
			setScannedCode(decodedText);
			// stop scanning after successful scan
			html5QrcodeScanner.clear();
			handleVisibility();
			// queryItemByBarcode();
		}

		html5QrcodeScanner.render(onScanSuccess);
	};

	return (
		<div>
			{Auth.loggedIn() ? (
				<div className="flex flex-col mt-16">
					<div id="btn-container" className="flex justify-center w-100 my-3">
						<div className="flex justify-center bg-neutral border border-8 border-neutral-content h-32 w-4/5 lg:w-2/3">
							<button
								onClick={() => {
									handleVisibility();
									handleBarcodeScanner();
								}}
								className="text-xl text-base-100 md:text-2xl"
							>
								Scan Barcode
								<div>{scannedCode}</div>
							</button>
						</div>
					</div>

					<div id="reader" className="hidden"></div>

					<p className="flex justify-center text-neutral my-3 text-xl md:text-2xl">
						or
					</p>
					<div className="flex justify-center">
						<div className="flex justify-center bg-neutral border border-8 border-neutral-content h-32 w-4/5 lg:w-2/3 p-3 my-3">
							<div className="w-full flex relative justify-center">
								<label className=" absolute text-base-100 md:text-lg lg:text-xl top-0 left-0">
									Item Number:
								</label>
								<div className="self-center w-full mt-4">
									<input
										name="itemNumber"
										type="text"
										onChange={handleInputChange}
										value={itemNumber}
										className="bg-neutral-base-100 rounded w-5/6 md:w-3/5 mr-1 md:mr-2"
									></input>
									<button
										className="btn btn-sm border-2 border-neutral-content"
										type="button"
										onClick={handleSubmit}
									>
										Search
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				redirect()
			)}
		</div>
	);
}
