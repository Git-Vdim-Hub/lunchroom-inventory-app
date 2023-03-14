import React, { useState } from "react";

import Auth from "../utils/auth";
import { redirect } from "../utils/helpers";

export default function AddItem() {
	const [item_id, setItemId] = useState("");
	const [item_desc, setItemDesc] = useState("");
	const [location, setLocation] = useState("");
	const [quantity1Name, setQuantity1Name] = useState("");
	const [quantityLvl1, setQuantityLvl1] = useState("");
	const [quantity2Name, setQuantity2Name] = useState("");
	const [quantityLvl2, setQuantityLvl2] = useState("");
	const [quantity3Name, setQuantity3Name] = useState("");
	const [quantityLvl3, setQuantityLvl3] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = {
			item_id: item_id,
			item_desc: item_desc,
			location: location,
			quantity1Name: quantity1Name,
			quantity2Name: quantity2Name,
			quantity3Name: quantity3Name,
			quantityLvl1: quantityLvl1,
			quantityLvl2: quantityLvl2,
			quantityLvl3: quantityLvl3,
		};
		console.log(formData);
	};

	return (
		<div>
			{Auth.loggedIn ? (
				<div className="flex w-full mt-10">
					<form onSubmit={handleSubmit} className="grid w-full justify-center">
						<label htmlFor="item-id">Item ID:</label>
						<input
							className="input input-bordered border-2 border-primary md:w-96 lg:w-[550px] mb-4 hover:border-primary-focus"
							id="item-id"
							type="text"
							value={item_id}
							onChange={(e) => setItemId(e.target.value)}
						/>
						{/* <input id="item-id" type="text" value={item_id} onChange={(e) => setItemId(e.target.value)} /> */}

						<label htmlFor="item-desc">Item Description:</label>
						<textarea
							className="input input-bordered border-2 border-primary mb-4 h-28 hover:border-primary-focus"
							id="item-desc"
							type="text"
							value={item_desc}
							onChange={(e) => setItemDesc(e.target.value)}
						/>

						<label htmlFor="location">Location:</label>
						<input
							className="input input-bordered border-2 border-primary mb-4 hover:border-primary-focus"
							id="location"
							type="text"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>
						{/* <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} /> */}

						<div className="grid grid-cols-2 justify-items-center gap-2">
							<div className="flex flex-col">
								<label htmlFor="quantity1-name">Level 1 Name:</label>
								<input
									className="input input-bordered border-2 border-primary mb-4 w-32 md:w-48 lg:w-64 hover:border-primary-focus"
									id="quantity1-name"
									type="text"
									value={quantity1Name}
									onChange={(e) => setQuantity1Name(e.target.value)}
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="quantity-lvl-1">Level 1 Quantity:</label>
								<input
									className="input input-bordered border-2 border-primary mb-4 w-32 md:w-48 lg:w-64 hover:border-primary-focus"
									id="quantity-lvl-1"
									type="text"
									value={quantityLvl1}
									onChange={(e) => setQuantityLvl1(e.target.value)}
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="quantity2-name">Level 2 Name:</label>
								<input
									className="input input-bordered border-2 border-primary mb-4 w-32 md:w-48 lg:w-64 hover:border-primary-focus"
									id="quantity2-name"
									type="text"
									value={quantity2Name}
									onChange={(e) => setQuantity2Name(e.target.value)}
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="quantity-lvl-2">Level 2 Quantity:</label>
								<input
									className="input input-bordered border-2 border-primary mb-4 w-32 md:w-48 lg:w-64 hover:border-primary-focus"
									id="quantity-lvl-2"
									type="text"
									value={quantityLvl2}
									onChange={(e) => setQuantityLvl2(e.target.value)}
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="quantity3-name">Level 3 Name:</label>
								<input
									className="input input-bordered border-2 border-primary mb-4 w-32 md:w-48 lg:w-64 hover:border-primary-focus"
									id="quantity3-name"
									type="text"
									value={quantity3Name}
									onChange={(e) => setQuantity3Name(e.target.value)}
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="quantity-lvl-3">Level 3 Quantity:</label>
								<input
									className="input input-bordered border-2 border-primary mb-4 w-32 md:w-48 lg:w-64 hover:border-primary-focus"
									id="quantity-lvl-3"
									type="text"
									value={quantityLvl3}
									onChange={(e) => setQuantityLvl3(e.target.value)}
								/>
							</div>
						</div>

						<button type="submit" className="btn my-4">
							Add Item
						</button>
					</form>
				</div>
			) : (
				redirect()
			)}
		</div>
	);
}
