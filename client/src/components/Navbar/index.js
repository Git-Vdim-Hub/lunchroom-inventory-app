import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<div className="navbar">
				<Link to={"/"} onClick={() => console.log("Takes you to Home")}>Home</Link>
				<button onClick={() => console.log("Takes you to Inventory Page")}>Inventory</button>
				<Link to={"./AddItem"} onClick={() => console.log("Takes you to Add Page")}>Add New Item</Link>
			</div>
		</div>
	);
}
