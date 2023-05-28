const mongoos = require("mongoose");
const Schema = mongoos.Schema;
const ProductSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoos.model("Product", ProductSchema);
