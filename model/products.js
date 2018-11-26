const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
});

module.exports = Products = mongoose.model("products", productSchema);

/*
    id: Number, 

	name: String,

	sku: String,

	price: Number,

	createdAt: Date
*/
