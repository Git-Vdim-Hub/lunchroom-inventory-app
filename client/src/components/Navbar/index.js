import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<div className="navbar bg-primary flex justify-start px-6 items-center h-16">
				<p className="text-xl text-white">Lunchroom Inventory</p>
				{/* <Link to={"/"} onClick={() => console.log("Takes you to Home")}>Home</Link>
				<Link to={"./Inventory"} onClick={() => console.log("Takes you to Inventory Page")}>Inventory</Link>
				<Link to={"./AddItem"} >Add New Item</Link>
				<Link to={"./Item"}>Item Page</Link> */}
			</div>
			<div className="tabs flex justify-end w-full mt-5">
				<Link to={"./Home"} className="tab tab-md md:tab-lg tab-lifted">Home</Link>
				<Link to={"./Inventory"} className="tab tab-md md:tab-lg tab-lifted">Inventory</Link> 
				<Link to={"./AddItem"} className="tab tab-md md:tab-lg tab-lifted tab-active">Add Item</Link> 
				<Link to={"./Item"} className="tab tab-md md:tab-lg tab-lifted">Item</Link>
			</div>
		</div>
	);
}
