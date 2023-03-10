import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
	query Query($userId: ID!) {
		user(id: $userId) {
			_id
			email
			password
			username
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
