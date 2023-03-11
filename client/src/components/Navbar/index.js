import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<div className="navbar bg-red-400">
				<Link to={"/"} onClick={() => console.log("Takes you to Home")}>Home</Link>
				<Link to={"./Inventory"} onClick={() => console.log("Takes you to Inventory Page")}>Inventory</Link>
				<Link to={"./AddItem"} onClick={() => console.log("Takes you to Add Page")}>Add New Item</Link>
			</div>
		</div>
	);
}
