const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    required: true,
  },
  ProductImage: {
    type: String,
    required: true,
  },
  ProductPrice: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    requird: true,
  },
  size: {
    type: Array,
    required: true,
  },
  color: {
    type: Array,
    required: true,
  },
});

const Product = mongoose.model("PRODUCTS", ProductSchema);
module.exports = Product;
