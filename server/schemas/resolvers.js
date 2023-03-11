const { User, Item } = require("../models");

const resolvers = {
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
		item: async () => {
			return await Item.findById(args.id);
		}
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
		addBarcode: async (parent, {itemId, barcode}) => {
			return await Item.findOneAndUpdate(
				{_id: itemId},
				{$addToSet: {
					scans: {barcode}
				},
			},
			{
				new: true,
				runValidators: true,
			  }
			);
		},
		removeBarcode: async(parent, {itemId, barcodeId}) => {
			return Item.findOneAndUpdate(
					{_id: itemId},
					{
						$pull: {
							scans: {
								_id: barcodeId
							}
						}
					},
				{ new: true }
			);
		}
	},
};

module.exports = resolvers;
