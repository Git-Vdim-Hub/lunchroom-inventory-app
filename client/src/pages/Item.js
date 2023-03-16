import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { Html5QrcodeScanner } from "html5-qrcode";

import Auth from "../utils/auth";
import { redirect } from "../utils/helpers";

import { QUERY_SINGLE_ITEM } from "../utils/queries";
import { UPDATE_ITEM, ADD_BARCODE, REMOVE_BARCODE } from "../utils/mutations";

export default function Item() {
	const { itemId } = useParams();
	const { loading, data } = useQuery(QUERY_SINGLE_ITEM, {
		variables: { itemId: itemId },
	});

	const item = data?.item || {};
	console.log(item);
	const [item1Id, setItemId] = useState();
	const [itemDesc, setItemDesc] = useState();
	const [itemLocation, setItemLocation] = useState();
	const [quantity1ItemName, setQuantity1ItemName] = useState();
	const [lvl1Quantity, setLvl1Quantity] = useState();
	const [quantity2ItemName, setQuantity2ItemName] = useState();
	const [lvl2Quantity, setLvl2Quantity] = useState();
	const [quantity3ItemName, setQuantity3ItemName] = useState();
	const [lvl3Quantity, setLvl3Quantity] = useState();
	const [barcode, setBarcode] = useState();

	const [updateItem, { error }] = useMutation(UPDATE_ITEM, {
		update(cache, { data: { updateItem } }) {
			try {
				const { item } = cache.readQuery({
					query: QUERY_SINGLE_ITEM,
					variables: { itemId: itemId },
				});
				// console.log(item);

				cache.writeQuery({
					query: QUERY_SINGLE_ITEM,
					data: { item: [updateItem, item] },
				});
			} catch (e) {
				console.error(e);
			}
		},
	});

	// useMutation hook with reference to ADD_BARCODE mutation
	const [addBarcode, { err }] = useMutation(ADD_BARCODE);
	// create empty array to display in placeholder
	let arr = [];
	// function to iterate through barcodes and push each barcode to empty array
	const displayBarcodes = () => {
		for (let scan in item.scans) {
			arr.push(item.scans[scan]);
		}
		// console.log("arr:", arr);
		return arr;
	};
	// call function
	displayBarcodes();

	const handleAddBarcode = () => {
		console.log({ itemId, barcode });
		addBarcode({ variables: { itemId, barcode } });
		window.location.reload();
	};

	const handleManualBarcode = (event) => {
		setBarcode(event.target.value);
	};

	const [removeBarcode] = useMutation(REMOVE_BARCODE);
	const handleRemoveBarcode = (event) => {
		let barcodeId = event.target.parentElement.dataset.key;
		removeBarcode({ variables: { itemId, barcodeId } });
		window.location.reload();
	};
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			return await updateItem({
				variables: {
					updateItemId: itemId,
					itemId: item1Id,
					itemDesc: itemDesc,
					location: itemLocation,
					quantity1Name: quantity1ItemName,
					quantityLvl1: parseInt(lvl1Quantity),
					quantity2Name: quantity2ItemName,
					quantityLvl2: parseInt(lvl2Quantity),
					quantity3Name: quantity3ItemName,
					quantityLvl3: parseInt(lvl3Quantity),
				},
			});
		} catch (err) {
			console.error(err);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	const handleBarcodeScanner = () => {
		console.log("scan barcode");
		// This method will trigger user permissions
		const html5QrcodeScanner = new Html5QrcodeScanner("reader", {
			fps: 10,
			qrbox: 250,
		});

		// function to run on successful scan
		function onScanSuccess(decodedText, decodedResult) {
			// set text obtained from scanner to barcode state
			setBarcode(decodedText);
			// stop scanning after successful scan
			html5QrcodeScanner.clear();
		}

		html5QrcodeScanner.render(onScanSuccess);
	};
	return (
		<div>
			{Auth.loggedIn() ? (
				<div>
					<div id="reader"></div>
					<div className="grid justify-items-center gap-10 mt-32 md:mt-44">
						<form onSubmit={handleFormSubmit}>
							<div className="md:grid md:grid-cols-2 md:gap-10">
								<div className="flex flex-col justify-center w-72">
									<label>Item ID:</label>
									<input
										className="input input-bordered border-2 border-primary mb-4 hover:border-primary-focus"
										onChange={(event) => {
											const value = event.target.value;
											setItemId(value);
										}}
										placeholder={item.item_id}
									/>
									<label>Description:</label>
									<textarea
										className="input input-bordered border-2 border-primary mb-4 h-28 hover:border-primary-focus"
										type="text"
										onChange={(event) => {
											const value = event.target.value;
											setItemDesc(value);
										}}
										placeholder={item.item_desc}
									/>
									<label>Location:</label>
									<input
										className="input input-bordered border-2 border-primary mb-4 hover:border-primary-focus"
										onChange={(event) => {
											const value = event.target.value;
											setItemLocation(value);
										}}
										placeholder={item.location}
										type="text"
									/>
									<label>Barcodes:</label>

									<div className="input-group">
										<input
											className="input input-bordered border-2 border-primary w-72 hover:border-primary-focus"
											placeholder={"Scan or Enter Barcode"}
											onChange={handleManualBarcode}
											type="text"
										/>
										<button
											onClick={handleBarcodeScanner}
											className="border border-2 border-primary-focus bg-primary"
										>
											<i className="fa-solid fa-barcode text-neutral p-2 px-3"></i>
										</button>
									</div>
									<div>
										<div className="my-3 space-x-4">
											<button onClick={handleAddBarcode} className="btn">
												Save Barcode
											</button>
											<label htmlFor="my-modal" className="btn">
												Edit Barcodes
											</label>
										</div>
										<input
											type="checkbox"
											id="my-modal"
											className="modal-toggle"
										/>
										<div className="modal">
											<div className="modal-box">
												<h3 className="font-bold text-lg">
													Registered Barcodes:
												</h3>
												<ul className="list-none divide-y my-2">
													{arr.map((scan) => (
														<li
															key={scan._id}
															data-key={scan._id}
															className="flex justify-between"
														>
															<div>{scan.barcode}</div>
															<button
																onClick={handleRemoveBarcode}
																className="btn btn-ghost fa-solid fa-trash"
															></button>
														</li>
													))}
												</ul>
												<div className="modal-action">
													<label htmlFor="my-modal" className="btn">
														Done
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="grid grid-cols-2 justify-items-center mt-3 md:gap-8">
									<div className="flex flex-col">
										<label>Level 1 Name:</label>
										<input
											className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus"
											onChange={(event) => {
												const value = event.target.value;
												setQuantity1ItemName(value);
											}}
											placeholder={item.quantity1_name}
											type="text"
										/>
									</div>
									<div className="flex flex-col">
										<label>Level 1 Quantity:</label>
										<input
											className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus"
											type="number"
											onChange={(event) => {
												const value = event.target.value;
												setLvl1Quantity(value);
											}}
											placeholder={item.quantity_lvl_1}
										/>
									</div>
									<div className="flex flex-col">
										<label>Level 2 Name:</label>
										<input
											className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus"
											type="text"
											onChange={(event) => {
												const value = event.target.value;
												setQuantity2ItemName(value);
											}}
											placeholder={item.quantity2_name}
										/>
									</div>
									<div className="flex flex-col">
										<label>Level 2 Quantity:</label>
										<input
											className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus"
											type="number"
											onChange={(event) => {
												const value = event.target.value;
												setLvl2Quantity(value);
											}}
											placeholder={item.quantity_lvl_2}
										/>
									</div>
									<div className="flex flex-col">
										<label>Level 3 Name:</label>
										<input
											className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus"
											type="text"
											onChange={(event) => {
												const value = event.target.value;
												setQuantity3ItemName(value);
											}}
											placeholder={item.quantity3_name}
										/>
									</div>
									<div className="flex flex-col">
										<label>Level 3 Quantity:</label>
										<input
											className="input input-bordered border-2 border-primary mb-6 w-32 hover:border-primary-focus"
											type="number"
											onChange={(event) => {
												const value = event.target.value;
												setLvl3Quantity(value);
											}}
											placeholder={item.quantity_lvl_3}
										/>
									</div>
									<div className="flex justify-center gap-5 w-full col-span-2">
										<button className="btn w-full" type="submit">
											Update
										</button>
									</div>
								</div>
							</div>
						</form>
						<div className="w-full flex justify-center">
							<button className="btn w-[145px] md:w-36 mx-2">Delete</button>
							<button className="btn w-[145px] md:w-36 mx-2">Cancel</button>
						</div>
					</div>
				</div>
			) : (
				redirect()
			)}
		</div>
	);
}
