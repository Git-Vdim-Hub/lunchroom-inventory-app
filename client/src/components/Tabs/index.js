import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import { redirect } from "../../utils/helpers";

export default function Tabs() {
	const activeTab = (e) => {
		// e.preventDefault();
		const tabs = document.querySelectorAll(".tab");
		tabs.forEach((tab) => {
			if (tab.classList.contains("tab-active")) {
				tab.classList.remove("tab-active");
			}
			e.target.classList.add("tab-active");
		});
	};

	return (
		<div>
			{Auth.loggedIn() ? (
				<div className="w-full">
					<div className="tabs justify-end w-full mt-5 px-1 z-2 -mb-[4px]">
						<Link
							to={"./Home"}
							className="tab tab-md md:tab-lg tab-lifted tab-active"
							onClick={activeTab}
						>
							Home
						</Link>
						<Link
							to={"./Inventory"}
							className="tab tab-md md:tab-lg tab-lifted"
							onClick={activeTab}
						>
							Inventory
						</Link>
						<Link
							to={"./AddItem"}
							className="tab tab-md md:tab-lg tab-lifted"
							onClick={activeTab}
						>
							Add Item
						</Link>
					</div>
					<div className="border-t-[4px] border-base-300" />
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}
