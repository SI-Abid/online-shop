const mongoos = require("mongoose");
const Schema = mongoos.Schema;
const OrderSchema = new Schema({
  products: Array,
  username: String,
  bill: Number,
  date: Date,
});

module.exports = mongoos.model("Order", OrderSchema);
