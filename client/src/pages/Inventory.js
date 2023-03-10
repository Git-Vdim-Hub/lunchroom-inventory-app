import React from "react";
import { useQuery } from "@apollo/client";

import ItemList from "../components/ItemList";

import { QUERY_ITEMS } from "../utils/queries";

import Auth from "../utils/auth";
import { redirect } from "../utils/helpers";

export default function Inventory() {
	const { loading, error, data } = useQuery(QUERY_ITEMS);

	const items = data?.items || "waiting on the data";

	return (
		<div>
			{Auth.loggedIn() ? (
				<main>
					{loading ? <div>Loading...</div> : <ItemList items={items} />}
				</main>
			) : (
				redirect()
			)}
		</div>
	);
}
