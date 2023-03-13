import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<div className="navbar bg-primary flex justify-between px-6 items-center h-16">
				<p className="text-xl text-white">Lunchroom Inventory</p>
				{/* <button className="btn btn-sm">Log Out</button> */}
			</div>
		</div>
	);
}
