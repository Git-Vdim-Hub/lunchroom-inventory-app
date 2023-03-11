const { User, Item, Barcode } = require("../models");
const { GraphQLScalarType, Kind } = require("graphql");

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
	},
	Mutation: {
		addUser: async (parent, { username, email, password }) => {
			return await User.create({ username, email, password });
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
				scans,
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
				scans,
			});
		},
	},
};

module.exports = resolvers;
