const db = require("../config/connection");
const { User, Item } = require("../models");
const userSeeds = require("./userData.json");
const itemSeeds = require("./itemData.json");

db.once("open", async () => {
	try {
		await User.deleteMany({});
		await User.create(userSeeds);
		
		await Item.deleteMany({});
		await Item.create(itemSeeds);
		
		console.log('item seeded');
		console.log("users seeded");
		process.exit(0);
	} catch (err) {
		throw err;
	}
});
