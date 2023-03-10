import React from "react";

export default function Navbar() {
	return (
		<div>
			<div className="navbar">
				<button onClick={() => console.log("Takes you to Home")}>Home</button>
				<button onClick={() => console.log("Takes you to Inventory Page")}>Inventory</button>
				<button onClick={() => console.log("Takes you to Add Page")}>Add New Item</button>
			</div>
		</div>
	);
}
