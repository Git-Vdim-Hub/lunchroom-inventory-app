const { User } = require("../models");

const resolvers = {
	Query: {
		// finds all users
		users: async () => {
			return await User.find({});
		},
		//finds one user by username
		user: async (parent, args) => {
			return await User.findOne(args);
		},
	},
	Mutation: {
		addUser: async (parent, { username, email, password }) => {
			return await User.create({ username, email, password });
		},
	},
};

module.exports = resolvers;
