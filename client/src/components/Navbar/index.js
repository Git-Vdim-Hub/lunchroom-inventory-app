import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import { redirect } from "../../utils/helpers";

export default function Navbar() {
	return (
		<div>
			<div className="navbar bg-primary flex justify-between fixed top-0 z-30 px-6 items-center h-16">
				<p className="btn btn-primary md:text-xl">Lunchroom Inventory</p>
				{Auth.loggedIn() ? (
					<button
						className="btn btn-sm"
						onClick={() => {
							Auth.logout();
							redirect();
						}}
					>
						Log Out
					</button>
				) : (
					<Link to="/" class="btn btn-sm">
						Log In
					</Link>
				)}
			</div>
		</div>
	);
}
