const jwt = require("jsonwebtoken");

const secret = "pikachu";
const expiration = "2h";

module.exports = {
	signToken: function ({ _id, username }) {
		const payload = { _id, username };
		return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
	},
};
