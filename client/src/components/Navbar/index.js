import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<div className="navbar bg-neutral flex justify-start px-6 items-center h-16">
				<p className="text-xl text-white">Lunchroom Inventory</p>
				{/* <Link to={"/"} onClick={() => console.log("Takes you to Home")}>Home</Link>
				<Link to={"./Inventory"} onClick={() => console.log("Takes you to Inventory Page")}>Inventory</Link>
				<Link to={"./AddItem"} >Add New Item</Link>
				<Link to={"./Item"}>Item Page</Link> */}
			</div>
			{/* <div className="flex justify-end gap-5">
				<div>
					<Link to={"/"} className="bg-red-400 p-2 border border-2 border-red-600 border-t-0" >Home</Link>
				</div>
				<div>
					<Link to={"./Inventory"}  className="bg-red-400 p-2 border border-2 border-red-600 " >Inventory</Link>
				</div>
				<Link to={"./AddItem"} className="bg-red-400 p-2 border border-2 border-red-600 " >Add New Item</Link>
			</div> */}
		</div>
	);
}
