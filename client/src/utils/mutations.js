import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_ITEM = gql`
mutation Mutation($itemId: String!, $itemDesc: String!, $location: String!, $quantity1Name: String!, $quantityLvl1: Int!, $quantity2Name: String!, $quantityLvl2: Int!, $quantity3Name: String!, $quantityLvl3: Int!) {
	addItem(item_id: $itemId, item_desc: $itemDesc, location: $location, quantity1_name: $quantity1Name, quantity_lvl_1: $quantityLvl1, quantity2_name: $quantity2Name, quantity_lvl_2: $quantityLvl2, quantity3_name: $quantity3Name, quantity_lvl_3: $quantityLvl3) {
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
	  scans {
		_id
		barcode
	  }
	  last_modified
	  formated_date
	}
  }
`;

export const UPDATE_ITEM = gql `
mutation Mutation($updateItemId: ID!, $itemId: String, $itemDesc: String, $location: String, $quantity1Name: String, $quantityLvl1: Int, $quantity2Name: String, $quantityLvl2: Int, $quantity3Name: String, $quantityLvl3: Int) {
	updateItem(updateItemId: $updateItemId, item_id: $itemId, item_desc: $itemDesc, location: $location, quantity1_name: $quantity1Name, quantity_lvl_1: $quantityLvl1, quantity2_name: $quantity2Name, quantity_lvl_2: $quantityLvl2, quantity3_name: $quantity3Name, quantity_lvl_3: $quantityLvl3) {
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
	  scans {
		_id
		barcode
	  }
	  last_modified
	  formated_date
	}
  }
`;