import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
	query Query($username: String!) {
		user(username: $username) {
			_id
			username
			email
			password
		}
	}
`;

export const QUERY_USERS = gql`
	query Query {
		users {
			_id
			email
			password
			username
		}
	}
`;
