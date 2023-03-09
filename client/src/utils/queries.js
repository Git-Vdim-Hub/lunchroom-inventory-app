import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
	query Query($username: String!) {
		user(username: $username) {
			_id
			email
			password
			username
		}
	}
`;
