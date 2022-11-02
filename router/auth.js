const express = require("express");
const User = require("../models/userSchema");
const Product = require("../models/productSchema");
const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  const { name, email, profile_picture, dateofbirth, phone, pass } = req.body;
  try {
    const CheckEmail = await User.findOne({ email });
    if (CheckEmail) {
      return res.status(422).send("Email Is Already Exits");
    } else {
      const user = new User({
        name,
        email,
        profile_picture,
        dateofbirth,
        phone,
        pass,
      });
      await user.save();
      res.status(201).json(user);
    }
  } catch (error) {
    res.status(422).send(error);
  }
});

// // Login Route
router.post("/login", async (req, res) => {
  try {
    const { email_phone, pass } = req.body;

    const FindUser = await User.findOne({ pass });

    const matchemail = FindUser.email == email_phone;
    const matchphone = FindUser.phone == email_phone;

    if (matchemail == true || matchphone == true) {
      res.status(201).json(FindUser);
    } else {
      res.status(422).send("User Not login");
    }
  } catch (error) {
    res.status(422).send(error);
  }
});

router.post("/postproduct", async (req, res) => {
  const {
    ProductName,
    ProductImage,
    ProductPrice,
    desc,
    category,
    size,
    color,
  } = req.body;
  try {
    const product = new Product({
      ProductName,
      ProductImage,
      ProductPrice,
      desc,
      category,
      size,
      color,
    });
    await product.save();
    res.status(201).send("Product Send Sucessfully");
  } catch (error) {
    res.status(402).send("Product Not saved");
  }
});

router.get("/products", async (req, res) => {
  const Products = await Product.find();
  // res.json(Products);
  res.json(Products);
  console.log(Products);
});

module.exports = router;
