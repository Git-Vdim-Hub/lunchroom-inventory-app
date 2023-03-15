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
	query Query {
		items {
			_id
			item_id
			item_desc
			location
			quantity1_name
			quantity_lvl_1
			quantity2_name
			quantity_lvl_2
			quantity3_name
			quantity_lvl_3
			barcodes
			last_modified
			formated_date
		}
	}
`;

export const QUERY_SINGLE_ITEM = gql`
	query Query($itemId: ID!) {
		item(id: $itemId) {
			_id
			item_id
			item_desc
			location
			quantity1_name
			quantity_lvl_1
			quantity2_name
			quantity_lvl_2
			quantity3_name
			quantity_lvl_3
			barcodes
			last_modified
			formated_date
		}
	}
`;

export const QUERY_BY_BARCODE = gql`
	query ItemByBarcode($barcode: String) {
		itemByBarcode(barcode: $barcode) {
			_id
			item_id
			item_desc
			location
			quantity1_name
			quantity_lvl_1
			quantity2_name
			quantity_lvl_2
			quantity3_name
			quantity_lvl_3
			barcodes
			last_modified
			formated_date
		}
	}
`;

export const QUERY_BY_NUMBER = gql`
	query ItemByNum($itemId: String) {
		itemByNum(item_id: $itemId) {
			_id
			item_id
			item_desc
			location
			quantity1_name
			quantity_lvl_1
			quantity2_name
			quantity_lvl_2
			quantity3_name
			quantity_lvl_3
			barcodes
			last_modified
			formated_date
		}
	}
`;
