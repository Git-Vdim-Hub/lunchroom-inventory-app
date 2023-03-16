const { AuthenticationError } = require("apollo-server-express");
const { User, Item, Barcode } = require("../models");
const { GraphQLScalarType, Kind } = require("graphql");
const { signToken } = require("../utils/auth");

// creates new data type: Date
const dateScalar = new GraphQLScalarType({
	name: "Date",
	description: "Date custom scalar type",
	serialize(value) {
		if (value instanceof Date) {
			return value.getTime(); // Convert outgoing Date to integer for JSON
		}
		throw Error("GraphQL Date Scalar serializer expected a `Date` object");
	},
	parseValue(value) {
		if (typeof value === "number") {
			return new Date(value); // Convert incoming integer to Date
		}
		throw new Error("GraphQL Date Scalar parser expected a `number`");
	},
	parseLiteral(ast) {
		if (ast.kind === Kind.INT) {
			// Convert hard-coded AST string to integer and then to Date
			return new Date(parseInt(ast.value, 10));
		}
		// Invalid hard-coded value (not an integer)
		return null;
	},
});

const resolvers = {
	Date: dateScalar,
	Query: {
		users: async () => {
			return await User.find({});
		},
		user: async (parent, args) => {
			return await User.findById(args.id);
		},
		items: async () => {
			return await Item.find({});
		},
		item: async (parent, args) => {
			return await Item.findById(args.id);
		},
		itemByNum: async (parent, args) => {
			return await Item.findOne(args);
		},
		itemByBarcode: async (parent, args) => {
			return await Item.findOne({ barcodes: args.barcode });
		},
	},
	Mutation: {
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });
			if (!user) {
				throw new AuthenticationError("No user with this username found");
			}

			const correctPassword = await user.verifyPassword(password);

			if (!correctPassword) {
				throw new AuthenticationError("Password is incorrect");
			}

			const token = signToken(user);
			return { token, user };
		},
		addUser: async (parent, { username, email, password }) => {
			const newUser = await User.create({ username, email, password });
			const token = signToken(newUser);
			return { token, newUser };
		},
		addItem: async (
			parent,
			{
				item_id,
				item_desc,
				location,
				quantity1_name,
				quantity_lvl_1,
				quantity2_name,
				quantity_lvl_2,
				quantity3_name,
				quantity_lvl_3,
			}
		) => {
			return await Item.create({
				item_id,
				item_desc,
				location,
				quantity1_name,
				quantity_lvl_1,
				quantity2_name,
				quantity_lvl_2,
				quantity3_name,
				quantity_lvl_3,
			});
		},
		addBarcode: async (parent, { itemId, barcode }) => {
			return await Item.findOneAndUpdate(
				{ _id: itemId },
				{
					$addToSet: {
						barcodes: { barcode },
					},
				},
				{
					new: true,
					runValidators: true,
				}
			);
		},
		removeBarcode: async (parent, { itemId, barcode }) => {
			return Item.findByIdAndUpdate(
				itemId,
				{
					$pull: { barcodes: barcode },
				},
				{ new: true }
			);
		},
		removeItem: async (parent, { itemId }) => {
			return await Item.findOneAndDelete({ _id: itemId });
		},
		updateItem: async (
			parent,
			{
				updateItemId,
				item_id,
				item_desc,
				location,
				quantity1_name,
				quantity_lvl_1,
				quantity2_name,
				quantity_lvl_2,
				quantity3_name,
				quantity_lvl_3,
			}
		) => {
			return await Item.findOneAndUpdate(
				{ _id: updateItemId },
				{
					item_id: item_id,
					item_desc: item_desc,
					location: location,
					quantity1_name: quantity1_name,
					quantity_lvl_1: quantity_lvl_1,
					quantity2_name: quantity2_name,
					quantity_lvl_2: quantity_lvl_2,
					quantity3_name: quantity3_name,
					quantity_lvl_3: quantity_lvl_3,
				},
				{ new: true }
			);
		},
	},
};

module.exports = resolvers;
