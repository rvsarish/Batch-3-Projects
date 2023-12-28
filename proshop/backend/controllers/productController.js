import asyncHandler from "../routes/middleware/asyncHandler.js";
import Product from "../models/productModel.js";
//@desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
//@desc Fetch all products
//@route GET /api/products/:id
//@access Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
  res.status(404).json({ message: "Product not found(in middleware )" });
});

export { getProducts, getProductsById };