import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_USER } from "../utils/queries";

export default function Home() {
	const variables = { "userId": "640b650a2eec62bffc6bf76c" };
	// useQuery hook with query and variables arguments
	const { loading, error, data } = useQuery(QUERY_SINGLE_USER, { variables });

	// uses optional chaining to allow an undefined response without throwing errors
	const user = data?.user || "waiting on the data";

	// console data returned from query
	console.log("query one user:", user);

	return (
		<div>
			{loading ? (
				<div>...loading</div>
			) : (
				<div>
					<ul>
						<li>ID: {user._id}</li>
						<li>username: {user.username}</li>
						<li>email: {user.email}</li>
						<li>password: {user.password}</li>
					</ul>
				</div>
			)}
		</div>
	);
}
