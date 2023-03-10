import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_USERS, QUERY_SINGLE_USER } from "../utils/queries";

export default function Home() {
	const variables = { "username": "administrator" };

	const { loading, error, data } = useQuery(QUERY_SINGLE_USER, { variables });

	const user = data?.user || "waiting on the data";

	console.log("query one user:", user);

	return (
		<div>{loading ? <div>...loading</div> : <div>{user?.username}</div>}</div>
	);
}
