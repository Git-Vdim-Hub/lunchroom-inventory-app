import React, { useState, useEffect } from "react";

import { Html5QrcodeScanner } from "html5-qrcode";

export default function Home() {
	const [itemNumber, setItemNumber] = useState("");
	const [scannedCode, setScannedCode] = useState("");

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

	const handleBarcodeScanner = () => {
		console.log("scan barcode");
		// This method will trigger user permissions
		const html5QrcodeScanner = new Html5QrcodeScanner("reader", {
			fps: 10,
			qrbox: 250,
		});

		// function to run on successful scan
		function onScanSuccess(decodedText, decodedResult) {
			console.log(`Scan result: ${decodedText}`, decodedResult);
			setScannedCode(decodedText);
			// stop scanning after successful scan
			html5QrcodeScanner.clear();
			handleVisibility();
		}

		html5QrcodeScanner.render(onScanSuccess);
	};

	return (
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
	);
}
