const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
	item_id: {
		type: String,
		trim: true,
	},
	item_desc: {
		type: String,
		trim: true,
	},
	location: {
		type: String,
		trim: true,
	},
	quantity1_name: {
		type: String,
		trim: true,
	},
	quantity_lvl_1: {
		type: Number,
	},
	quantity2_name: {
		type: String,
		trim: true,
	},
	quantity_lvl_2: {
		type: Number,
	},
	quantity3_name: {
		type: String,
		trim: true,
	},
	quantity_lvl_3: {
		type: Number,
	},
	barcodes: [String],
	last_modified: {
		type: Date,
		default: new Date().getTime(), //returns epoch timestamp
	},
});

// virtual to convert epoch timestamp to readable string
itemSchema.virtual("formated_date").get(function () {
	const date = this.last_modified;
	return new Date(date).toString();
});

// query middleware to update last_modified with any call to updateOne() on item
itemSchema.pre("updateOne", function () {
	this.set({ last_modified: new Date().getTime() });
});

const Item = model("Item", itemSchema);

module.exports = Item;
