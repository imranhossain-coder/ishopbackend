const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  ProductName: {
    type: String,
  },
  ProductImage: {
    type: String,
  },
  ProductPrice: {
    type: String,
  },
  desc: {
    type: String,
  },
  category: {
    type: String,
  },
  size: {
    type: Array,
  },
  color: {
    type: Array,
  },
});

const Product = mongoose.model("PRODUCTS", ProductSchema);
module.exports = Product;
