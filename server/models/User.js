const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, "Must match an email address!"],
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
	},
});

// if user is new or password has been modified, scramble password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
	}

	next();
});

userSchema.methods.verifyPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
