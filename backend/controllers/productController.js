import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';


// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    console.log("check")
    const product = new Product({
      name: 'Sample name',
      price: 0,
    //   user: '123',
      image: '/images/sample.jpg',
      brand: 'Sample brand',
      category: 'Sample category',
      countInStock: 0,
      numReviews: 0,
      description: 'Sample description',
    });
  
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  });


  export {
    createProduct,
  }