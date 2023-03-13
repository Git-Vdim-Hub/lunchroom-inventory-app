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

export const QUERY_ITEMS = gql`
query Items {
	items {
	  _id
	  item_desc
	  item_id
	  location
	  quantity1_name
	  quantity2_name
	  quantity3_name
	  quantity_lvl_1
	  quantity_lvl_2
	  quantity_lvl_3
	  scans {
		barcode
		_id
	  }
	}
  }
`
export const QUERY_SINGLE_ITEM = gql `
query Query($itemId: ID!) {
	item(id: $itemId) {
	  _id
	  formated_date
	  item_desc
	  item_id
	  last_modified
	  location
	  quantity1_name
	  quantity2_name
	  quantity3_name
	  quantity_lvl_1
	  quantity_lvl_2
	  quantity_lvl_3
	  scans {
		_id
		barcode
	  }
	}
  }
`