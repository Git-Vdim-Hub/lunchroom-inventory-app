const { gql } = require("apollo-server-express");

const typeDefs = gql`
	scalar Date

	type User {
		_id: ID
		username: String
		email: String
		password: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Barcode {
		_id: ID
		barcode: String!
	}

	type Item {
		_id: ID
		item_id: String
		item_desc: String
		location: String
		quantity1_name: String
		quantity_lvl_1: Int
		quantity2_name: String
		quantity_lvl_2: Int
		quantity3_name: String
		quantity_lvl_3: Int
		scans: [Barcode]
		last_modified: Date
		formated_date: String
	}

	type Query {
		users: [User]
		user(id: ID!): User
		items: [Item]
		item(id: ID, barcode: String): Item
		barcode(barcodeId: ID!): Barcode
	}

	type Mutation {
		login(username: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		addItem(
			item_id: String
			item_desc: String
			location: String
			quantity1_name: String
			quantity_lvl_1: Int
			quantity2_name: String
			quantity_lvl_2: Int
			quantity3_name: String
			quantity_lvl_3: Int
		): Item
		addBarcode(itemId: ID!, barcode: String!): Item
		removeBarcode(itemId: ID!, barcodeId: ID!): Item
		removeItem(itemId: ID!): Item
		updateItem(
			updateItemId: ID!
			item_id: String
			item_desc: String
			location: String
			quantity1_name: String
			quantity_lvl_1: Int
			quantity2_name: String
			quantity_lvl_2: Int
			quantity3_name: String
			quantity_lvl_3: Int
		): Item
	}
`;

module.exports = typeDefs;
